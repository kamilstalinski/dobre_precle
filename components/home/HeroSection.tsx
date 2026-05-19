"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Slide } from "@/components";
import type { SlideFields } from "@/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface HeroSectionProps {
  slides: SlideFields[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  if (slides.length === 0) {
    return (
      <div className='h-[40rem] md:h-[25rem] bg-[#FBE8CF] flex items-center justify-center'>
        <div className='text-center'>
          <Image
            src='/logo.svg'
            alt='Dobre Precle logo'
            width={300}
            height={100}
            priority
          />
          <p className='text-gray-600 mt-4'>Brak dostępnych slajdów</p>
        </div>
      </div>
    );
  }

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{ delay: 5000 }}
      loop={true}
      navigation={false}
      pagination={{ clickable: true }}
      draggable={false}
    >
      {slides.map((slide, idx) => (
        <SwiperSlide key={idx}>
          <Slide slide={slide} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default HeroSection;
