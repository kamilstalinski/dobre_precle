"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";

const Maps = () => {
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

  const center = { lat: 52.0693, lng: 19.4803 };

  return (
    <div className='mt-12 rounded-lg overflow-hidden border-2 border-text-color mb-[50px] h-full'>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={6.4}>
        <Marker
          position={{ lat: 51.107883, lng: 17.038538 }}
          icon={{
            url: "/marker.svg",
            scaledSize: new window.google.maps.Size(80, 80),
          }}
        />
      </GoogleMap>
    </div>
  );
};

export default Maps;
