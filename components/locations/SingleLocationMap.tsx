"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { SingleLocationMapStyles } from "@/constants";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SingleLocationMapProps {
  lat: number;
  lon: number;
}

export default function SingleLocationMap({
  lat,
  lon,
}: SingleLocationMapProps) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  if (!isLoaded) {
    return (
      <div className='h-auto w-full flex items-center justify-center'>
        <span className='loader'></span>
      </div>
    );
  }

  const center = {
    lat: lat,
    lng: lon,
  };

  return (
    <div className='h-auto md:h-[400px] w-[65%] md:w-full'>
      <div className='rounded-lg overflow-hidden border-2 border-text-color h-full w-full'>
        <GoogleMap
          mapContainerStyle={{ width: "100%", height: "100%" }}
          center={center}
          zoom={14}
          options={{ styles: SingleLocationMapStyles }}
        >
          <Marker
            position={{
              lat: lat,
              lng: lon,
            }}
            icon={{
              url: "/marker_2.svg",
              scaledSize: new window.google.maps.Size(50, 50),
            }}
          />
        </GoogleMap>
      </div>
    </div>
  );
}
