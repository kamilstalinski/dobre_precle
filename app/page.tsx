"use client";

import {
  HeroSection,
  AboutSection,
  MenuSection,
  LocationSection,
  ContactSection,
} from "@/components";

import AOS from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <LocationSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
}
