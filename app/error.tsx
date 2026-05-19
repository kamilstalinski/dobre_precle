"use client";

import { useEffect } from "react";
import Image from "next/image";
import { CustomButton } from "@/components";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className='w-full px-[4%] min-h-screen flex flex-col justify-center items-center relative overflow-hidden text-center'>
      <Image
        src='/logo-footer.svg'
        width={500}
        height={250}
        alt='Dobre Precle logo'
      />
      <h2 className='text-text-color text-h1 lg:text-h1-tablet font-bold mt-4'>
        Ups!
      </h2>
      <p className='text-h2 md:text-h1-mobile font-bold mb-8'>
        Coś poszło nie tak. Spróbuj ponownie.
      </p>
      <div className='flex flex-col sm:flex-row gap-4'>
        <button
          onClick={() => reset()}
          className='bg-[#ED8F28] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition'
        >
          SPRÓBUJ PONOWNIE
        </button>
        <CustomButton
          link='/'
          color='bg-text-color'
          text='POWRÓT DO STRONY GŁÓWNEJ'
        />
      </div>
    </div>
  );
}
