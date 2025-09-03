"use client";

import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { mapStyles } from "@/constants";

const Maps = ({ localizations }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });

  if (!isLoaded) {
    return (
      <div className='h-full w-full flex items-center justify-center'>
        <span className='loader-2'></span>
      </div>
    );
  }

  const center = { lat: 52.0693, lng: 19.4803 };

  return (
    <div className='mt-12 rounded-lg overflow-hidden border-2 border-text-color mb-[50px] h-full'>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={6.4}
        options={{ styles: mapStyles }}
      >
        {localizations.map((localization: any) => (
          <Marker
            position={{
              lat: localization.coordinates.lat,
              lng: localization.coordinates.lon,
            }}
            icon={{
              url: "/marker.svg",
              scaledSize: new window.google.maps.Size(80, 80),
            }}
            onClick={() =>
              (window.location.href = `lokalizacje/${localization.id}`)
            }
            key={localization.id}
          />
        ))}
      </GoogleMap>
    </div>
  );
};

export default Maps;
