"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Lekki zamiennik AOS — IntersectionObserver na elementach z [data-aos].
 * - Elementy już widoczne przy mountcie są animowane od razu (sync rect check),
 *   bez czekania na pierwszy callback IO.
 * - Pozostałe trafiają pod IntersectionObserver.
 * - Re-skan przy zmianie ścieżki (nawigacja klientowa Next.js).
 */
export const AOSInit = () => {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const animate = (el: Element) =>
      el.setAttribute("data-aos-animate", "true");

    const selector = "[data-aos]:not([data-aos-animate='true'])";
    const els = document.querySelectorAll<HTMLElement>(selector);
    if (els.length === 0) return;

    if (reduce) {
      els.forEach(animate);
      return;
    }

    // 1) Elementy już w viewporcie → animuj od razu.
    const vh = window.innerHeight || document.documentElement.clientHeight;
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < vh && rect.bottom > 0) {
        animate(el);
      }
    });

    // 2) Reszta pod IntersectionObserver.
    const remaining = document.querySelectorAll<HTMLElement>(selector);
    if (remaining.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animate(entry.target);
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    remaining.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
};
