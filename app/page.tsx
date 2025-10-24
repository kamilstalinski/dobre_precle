"use client";

import { useState, useEffect } from "react";
import {
  AboutSection,
  MenuSection,
  LocationSection,
  ContactSection,
  HeroSection,
} from "@/components";
import { client } from "@/lib/contentful/client";
import Image from "next/image";

interface SlideType {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

export default function Home() {
  const [slides, setSlides] = useState<SlideType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await client.getEntries({
          content_type: "slider",
          include: 2,
        });

        const fetchedSlides = response.items.map((item: any) => item.fields);
        setSlides(fetchedSlides);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching slides:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchSlides();
  }, []);

  if (loading) {
    return (
      <div className='h-full w-full absolute bg-[#FBE8CF] top-0 left-0 z-50 flex items-center justify-center overflow-hidden'>
        <Image
          src='/logo.svg'
          alt='Dobre Precle logo'
          width={300}
          height={100}
          priority
          className='animate-bounce'
        />
      </div>
    );
  }

  if (error) {
    return (
      <main>
        <div className='h-[40rem] md:h-[25rem] bg-[#FBE8CF] flex items-center justify-center'>
          <div className='text-center'>
            <p className='text-red-600 mb-4'>Error loading slides</p>
            <p className='text-gray-600 text-sm'>{error}</p>
          </div>
        </div>
        <AboutSection />
        <LocationSection />
        <MenuSection />
        <ContactSection />
      </main>
    );
  }

  return (
    <main>
      <HeroSection slides={slides} />
      <AboutSection />
      <LocationSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
}
