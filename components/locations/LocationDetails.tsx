"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import dynamic from "next/dynamic";
import { LocationType } from "@/types";

const SingleLocationMap = dynamic(() => import("./SingleLocationMap"), {
  ssr: false,
  loading: () => (
    <div className='h-full w-full flex items-center justify-center'>
      <span className='loader-2'></span>
    </div>
  ),
});

type LocationDetailsProps = {
  location: LocationType;
};

export default function LocationDetails({ location }: LocationDetailsProps) {
  const showInMapClicked = () => {
    if (typeof window !== "undefined" && location?.id) {
      window.open(`https://maps.google.com?q=dobre%20precle%20${location.id}`);
    }
  };

  const {
    addressAdditional,
    additionalOpenHours,
    city,
    coordinates,
    gallery,
    openHours,
    phoneNumber,
    postalCode,
    street,
  } = location;
  return (
    <>
      <div className='container mx-auto px-[6%] md:px-[4%] py-[50px]'>
        <div className='flex gap-8 mb-12 md:flex-col min-h-[300px]'>
          <div className='text-[#FBE8CF] w-[35%] md:w-full flex flex-col justify-between'>
            <div>
              <h1 className='text-[40px] lg:text-[30px] leading-10 font-bold'>
                {city}
              </h1>
              <div className='mt-2 mb-2'>
                <p>{street}</p>
                <p>{postalCode}</p>
                {addressAdditional && <p>{addressAdditional}</p>}
              </div>
              <a href={`tel:${phoneNumber}`} className='text-[18px] text-white'>
                {phoneNumber}
              </a>
              <div className='mb-8'>
                <p>{openHours}</p>
                {additionalOpenHours && <p>{additionalOpenHours}</p>}
              </div>
            </div>
            <button
              onClick={showInMapClicked}
              className='px-8 py-2 rounded-lg bg-white text-text-color font-bold'
            >
              SZCZEGOŁY DOJAZDU
            </button>
          </div>
          {coordinates && (
            <SingleLocationMap lat={coordinates.lat} lon={coordinates.lon} />
          )}
        </div>

        <div className='flex sm:flex-wrap  gap-4 md:gap-2 mb-8'>
          {gallery?.map((image) => {
            // Skip images without proper URL
            if (!image?.fields?.file?.url) return null;

            const imageUrl = `https:${image.fields.file.url}`;

            return (
              <div
                key={image.fields.title}
                className='w-[33%] md:w-1/2 sm:w-full h-[400px] lg:h-[350px] md:h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'
              >
                <Image
                  src={imageUrl}
                  alt={`${city} zdjęcie`}
                  fill
                  className='object-cover'
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                />
              </div>
            );
          })}
        </div>

        <div className='w-full h-auto flex items-center justify-center'>
          <Link
            href='/lokalizacje'
            className='px-8 py-2 rounded-lg bg-white text-text-color font-bold'
          >
            ZOBACZ WSZYSTKIE LOKALE
          </Link>
        </div>
      </div>
    </>
  );
}
