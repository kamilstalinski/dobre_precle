"use client";

import Image from "next/image";
import Link from "next/link";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

type Params = {
  params: {
    locationId: string;
  };
};

const locationId = ({ params: { locationId } }: Params) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  if (!isLoaded) {
    return (
      <div className='h-[40vh] w-full flex items-center justify-center'>
        <div className='lds-facebook'>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }

  const showInMapClicked = () => {
    window.open("https://maps.google.com?q=dobre%precle%wroclaw");
  };

  const center = { lat: 51.098933383794844, lng: 17.036602884453757 };

  return (
    <section className='bg-text-color'>
      <div className='container mx-auto px-[6%] py-[50px]'>
        <div className='flex gap-8 mb-12 md:flex-col'>
          <div className='text-[#FBE8CF]'>
            <h1 className='text-[40px] lg:text-[30px] leading-10 font-bold '>
              Wrocław
            </h1>
            <h2 className='text-[25px] lg:text-[22px] leading-10 mb-2'>
              ul. Piłsudskiego 105
            </h2>
            <h3 className='text-[25px] leading-8 font-bold'>Dworzec PKP</h3>
            <p className='text-[14px] mb-4'>
              (lokal nr 8 - pierwszy lokal na lewo od wejścia głównego)
            </p>
            <p className='text-[18px] text-white'>+48 508 054 020</p>
            <p className='text-[18px] text-white mb-8'>
              pon. - niedz. 6:00 - 22:00
            </p>
            <button
              onClick={showInMapClicked}
              className='px-8 py-2 rounded-lg bg-white text-text-color font-bold'>
              SZCZEGOŁY DOJAZDU
            </button>
          </div>
          <div className='w-full h-auto md:h-[400px]'>
            <div className='rounded-lg overflow-hidden border-2 border-text-color h-full w-full'>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={14}>
                <Marker
                  position={{
                    lat: 51.098933383794844,
                    lng: 17.036602884453757,
                  }}
                  icon={{
                    url: "/marker_2.svg",
                    scaledSize: new window.google.maps.Size(50, 50),
                  }}
                />
              </GoogleMap>
            </div>
          </div>
        </div>
        <div className='flex md:flex-wrap gap-4 mb-8'>
          <div className='w-[33%] md:w-[48%] sm:w-full h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
            <Image
              src='/Wroclaw_1.png'
              alt='Wrocław zdjęcie'
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className='w-[33%] md:w-[48%] sm:w-full h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
            <Image
              src='/Wroclaw_1.png'
              alt='Wrocław zdjęcie'
              fill
              objectFit='cover'
            />
          </div>
          <div className='w-[33%] md:w-[48%] sm:w-full h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
            <Image
              src='/Wroclaw_1.png'
              alt='Wrocław zdjęcie'
              fill
              objectFit='cover'
            />
          </div>
        </div>
        <div className='w-full h-auto flex items-center justify-center'>
          <Link
            href='/lokalizacje'
            className='px-8 py-2 rounded-lg bg-white text-text-color font-bold'>
            ZOBACZ WSZYSTKIE
          </Link>
        </div>
      </div>
    </section>
  );
};

export default locationId;
