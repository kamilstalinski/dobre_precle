"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Slide } from "@/components";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideType {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

interface HeroSectionProps {
  slides: SlideType[];
}

const HeroSection = ({ slides }: HeroSectionProps) => {
  return (
    <>
      {slides.length > 0 ? (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          autoplay={{
            delay: 5000,
          }}
          loop={true}
          navigation={false}
          pagination={{ clickable: true }}
          draggable={false}
        >
          {slides.map((slide: any, idx: number) => {
            return (
              <SwiperSlide key={idx}>
                <Slide slide={slide} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      ) : (
        // Fallback when no slides available
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
      )}
    </>
  );
};

export default HeroSection;
