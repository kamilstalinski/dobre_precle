"use client";

import Image from "next/image";
import Link from "next/link";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { locations, SingleLocationMapStyles } from "@/constants";
import { LocationProps } from "@/types";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { useState } from "react";

type pageProps = {
  params: {
    locationId: string;
    locationName: string;
  };
};

const locationId = ({ params: { locationId, locationName } }: pageProps) => {
  const [data, setData] = useState<LocationProps>(
    locations.find((location) => {
      return location.id === locationName;
    }) || {
      index: 0,
      id: "",
      city: "",
      address: [""],
      street: "",
      image: "",
      tel: "",
      hours: [""],
      lat: 0,
      lng: 0,
      gallery: [""],
    },
  );

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
    window.open(`https://maps.google.com?q=dobre%precle%${data?.id}`);
  };

  const center = { lat: data.lat, lng: data.lng };

  return (
    <section className='bg-text-color'>
      <div className='container mx-auto px-[6%] py-[50px]'>
        <div className='flex gap-8 mb-12 md:flex-col min-h-[300px]'>
          <div className='text-[#FBE8CF] w-[35%] flex flex-col justify-between'>
            <div>
              <h1 className='text-[40px] lg:text-[30px] leading-10 font-bold '>
                {data.city}
              </h1>
              <div className='mt-2 mb-2'>
                {data.address.map((addressLine, id) => {
                  return (
                    <h2
                      key={id}
                      className='text-[22px] lg:text-[19px] leading-8'
                    >
                      {addressLine}
                    </h2>
                  );
                })}
              </div>
              <a href={`tel:${data.tel}`} className='text-[18px] text-white'>
                {data.tel}
              </a>
              <div className='mb-8'>
                {data.hours.map((hoursLine, id) => {
                  return (
                    <p key={id} className='text-[18px] text-white'>
                      {hoursLine}
                    </p>
                  );
                })}
              </div>
            </div>
            <button
              onClick={showInMapClicked}
              className='px-8 py-2 rounded-lg bg-white text-text-color font-bold'
            >
              SZCZEGOŁY DOJAZDU
            </button>
          </div>
          <div className='h-auto md:h-[400px] w-[65%]'>
            <div className='rounded-lg overflow-hidden border-2 border-text-color h-full w-full'>
              <GoogleMap
                mapContainerStyle={{ width: "100%", height: "100%" }}
                center={center}
                zoom={14}
                options={{ styles: SingleLocationMapStyles }}
              >
                <Marker
                  position={{
                    lat: data.lat,
                    lng: data.lng,
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

        <div className='flex md:flex-wrap gap-4 mb-8 md:hidden'>
          {data.gallery.map((image) => {
            return (
              <div className='w-[33%] md:w-[70%] md:mx-auto sm:w-full h-[400px] lg:h-[350px]  relative border-2 border-white rounded-lg overflow-hidden mb-2'>
                <Image
                  src={image}
                  alt={`${data.city} zdjęcie`}
                  fill
                  style={{ objectFit: "cover" }}
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
    </section>
  );
};

export default locationId;
