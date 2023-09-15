import { CustomButton } from "@/components";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className='w-full px-[4%] h-screen flex flex-col justify-center items-center relative overflow-hidden text-center'>
      <Image
        src='logo-footer.svg'
        width={500}
        height={250}
        alt='Dobre Precle logo'
      />
      <h2 className='text-text-color text-h1 lg:text-h1-tablet font-bold'>
        Ups!
      </h2>
      <p className='text-h2 md:text-h1-mobile font-bold mb-8'>
        Strona, której szukasz nie istnieje*
      </p>
      <CustomButton
        link='/'
        color='bg-[#ED8F28]'
        text='POWRÓT DO STRONY GŁÓWNEJ'
      />
      <p className='text-[14px] font-bold mb-8 block mt-24'>
        *Istnieją za to nasze DOBRE PRECLE :)
      </p>
      <div className='absolute w-full h-full scale-[1.7] top-[70%] lg:top-[55%] md:top-[40%] sm:top-[30%] left-[0%] z-[-1]'>
        <Image
          src='/precle_orange.svg'
          alt='precle'
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className='absolute w-[700px] lg:w-[600px] md:w-[400px] h-[700px] md:w-[230px] top-0 left-0 -translate-x-[30%] -translate-y-[30%] md:-translate-y-[40%]'>
        <Image
          src='/precel_suchy_1.png'
          alt='precle słodkie'
          fill
          objectFit='contain'
        />
      </div>
      <div className='absolute w-[700px] lg:w-[600px] md:w-[400px] h-[700px] top-0 right-0 translate-x-[30%] -translate-y-[30%] md:-translate-y-[40%]'>
        <Image
          src='/precel_suchy_2.png'
          alt='precle słodkie'
          fill
          objectFit='contain'
        />
      </div>
    </div>
  );
}
