"use client";

import { useEffect } from "react";

/**
 * Lekki zamiennik AOS — IntersectionObserver na elementach z [data-aos].
 * Po wejściu w viewport dodaje `data-aos-animate="true"`, CSS robi resztę.
 * Brak listenerów scrolla → zero pracy CPU w trakcie scrollowania.
 */
export const AOSInit = () => {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const els = document.querySelectorAll<HTMLElement>("[data-aos]");
    if (els.length === 0) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      els.forEach((el) => el.setAttribute("data-aos-animate", "true"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-aos-animate", "true");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
};
