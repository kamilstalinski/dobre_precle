"use client";

import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CustomButton from "./CustomButton";

const HeroSection = () => {
  return (
    <>
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
        <SwiperSlide>
          <div className='relative before:block before:bg-[#00000066] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 w-full h-[40rem] md:h-[25rem] flex items-center justify-center'>
            <Image
              src='/precle_glowna.png'
              alt='Precle baner'
              fill
              style={{ zIndex: 9, objectFit: "cover" }}
              priority
            />
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center z-10'>
              <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center leading-tight'>
                Czujesz nasze
                <br />
                <span className='text-[#FBE8CF] font-bold'>PRECLOWE LOVE?</span>
              </h1>
              <CustomButton
                text='CZYTAJ WIĘCEJ'
                link='/aktualnosci'
                color='bg-[#ED8F28]'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='background-franchise relative before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 w-full h-[40rem] md:h-[25rem] flex items-center justify-center'>
            <Image
              src='/otwarcie_bydgoszcz.png'
              alt='Miasto baner'
              fill
              style={{ zIndex: 9, objectFit: "cover" }}
              priority
            />
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center z-10'>
              <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center leading-tight'>
                Otwarcie
                <br />
                <span className='text-[#FBE8CF] font-bold'>W BYDGOSZCZY!</span>
              </h1>
              <CustomButton
                text='SPRAWDŹ ADRES'
                link='/lokalizacje/bydgoszcz'
                color='bg-[#ED8F28]'
              />
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className='background-franchise  relative before:block before:bg-[#00000066] before:absolute before:top-0 before:left-0 before:w-full before:h-full before:z-10 w-full h-[40rem] md:h-[25rem] flex items-center justify-center'>
            <Image
              src='/precle_nadziewane.png'
              alt='Precle nadziewane'
              fill
              style={{ zIndex: 9, objectFit: "cover" }}
              priority
            />
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center z-10'>
              <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center leading-tight'>
                Precle
                <br />
                <span className='text-[#FBE8CF] font-bold'>NADZIEWANE</span>
              </h1>
              <CustomButton
                text='SPRAWDŹ NASZE MENU'
                link='/menu'
                color='bg-[#ED8F28]'
              />
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      ;
    </>
  );
};

export default HeroSection;
