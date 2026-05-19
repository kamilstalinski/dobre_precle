"use client";

import { useEffect } from "react";
import { CustomButton } from "@/components";

export default function LocationError({
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
    <section className='container mx-auto px-[4%] py-[80px] text-center'>
      <h1 className='text-h2 md:text-h1-mobile text-text-color font-bold mb-4'>
        Nie udało się załadować lokalizacji
      </h1>
      <p className='text-p md:text-p-mobile mb-8'>
        Spróbuj ponownie lub wróć do listy lokalizacji.
      </p>
      <div className='flex flex-col sm:flex-row gap-4 justify-center'>
        <button
          onClick={() => reset()}
          className='bg-[#ED8F28] text-white font-bold px-6 py-3 rounded-lg hover:opacity-90 transition'
        >
          SPRÓBUJ PONOWNIE
        </button>
        <CustomButton
          link='/lokalizacje'
          color='bg-text-color'
          text='WSZYSTKIE LOKALIZACJE'
        />
      </div>
    </section>
  );
}
