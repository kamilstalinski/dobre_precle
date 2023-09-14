"use client";

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
        navigation
        pagination={{ clickable: true }}
        draggable={false}>
        <SwiperSlide>
          <section className='background before:bg-[url("/precle.png")] w-full h-[40rem] md:h-[25rem]'>
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
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
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='background before:bg-[url("/precle.png")] w-full h-[40rem] md:h-[25rem]'>
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
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
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='background before:bg-[url("/precle.png")] w-full h-[40rem] md:h-[25rem]'>
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
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
          </section>
        </SwiperSlide>
        <SwiperSlide>
          <section className='background before:bg-[url("/precle.png")] w-full h-[40rem] md:h-[25rem]'>
            <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
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
          </section>
        </SwiperSlide>
      </Swiper>
      ;
    </>
  );
};

export default HeroSection;
