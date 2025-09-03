"use client";

import { SwiperSlide } from "swiper/react";
import { CustomButton } from "@/components";
import Image from "next/image";

export default function Slide({ slide }: any) {
  const backgroundUrl = slide.background?.fields?.file?.url;

  if (!backgroundUrl) {
    return null; // Skip slides without proper background image
  }

  return (
    <>
      <SwiperSlide>
        <div className='relative before:block before:bg-[#00000066] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 w-full h-[40rem] md:h-[25rem] flex items-center justify-center'>
          <Image
            src={`https:${backgroundUrl}`}
            alt={slide.backgroundAltName || slide.upperTitle || "Slider image"}
            fill
            style={{ zIndex: 9, objectFit: "cover" }}
            priority
          />
          <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center z-10'>
            <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center leading-tight'>
              {slide.upperTitle}
              <br />
              <span className='text-[#FBE8CF] font-bold'>
                {slide.lowerTitle}
              </span>
            </h1>
            <CustomButton
              text={slide.buttonText}
              link={slide.buttonUrl}
              color='bg-[#ED8F28]'
            />
          </div>
        </div>
      </SwiperSlide>
    </>
  );
}
