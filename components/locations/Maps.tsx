"use client";

import {
  GoogleMap,
  MarkerF,
  MarkerClustererF,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useState } from "react";
import { mapStyles } from "@/constants";

const clusterIcon = (size: number) =>
  `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(
    `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 ${size} ${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 4}" fill="#991B1D" stroke="#ffffff" stroke-width="3"/><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 1}" fill="none" stroke="#991B1D" stroke-opacity="0.25" stroke-width="2"/></svg>`
  )}`;

const clusterStyles = [
  { url: clusterIcon(40), height: 40, width: 40, textColor: "#ffffff", textSize: 13, fontWeight: "700" },
  { url: clusterIcon(48), height: 48, width: 48, textColor: "#ffffff", textSize: 14, fontWeight: "700" },
  { url: clusterIcon(56), height: 56, width: 56, textColor: "#ffffff", textSize: 16, fontWeight: "700" },
  { url: clusterIcon(64), height: 64, width: 64, textColor: "#ffffff", textSize: 18, fontWeight: "700" },
  { url: clusterIcon(72), height: 72, width: 72, textColor: "#ffffff", textSize: 20, fontWeight: "700" },
];

const MARKER_SVG_RATIO = 121 / 182;

const Maps = ({ localizations }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (!isLoaded) {
    return (
      <div className='h-full w-full flex items-center justify-center'>
        <span className='loader-2'></span>
      </div>
    );
  }

  const center = { lat: 52.0693, lng: 19.4803 };
  const markerHeight = isMobile ? 56 : 80;
  const markerWidth = Math.round(markerHeight * MARKER_SVG_RATIO);

  return (
    <div className='mt-12 rounded-lg overflow-hidden border-2 border-text-color mb-[50px] h-full'>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        center={center}
        zoom={6}
        options={{
          styles: mapStyles,
          gestureHandling: "cooperative",
          clickableIcons: false,
          fullscreenControl: false,
          streetViewControl: false,
          mapTypeControl: false,
        }}
      >
        <MarkerClustererF
          options={{
            styles: clusterStyles,
            gridSize: 60,
            minimumClusterSize: 2,
            maxZoom: 11,
            averageCenter: true,
          }}
        >
          {(clusterer) => (
            <>
              {localizations.map((localization: any) => (
                <MarkerF
                  key={localization.id}
                  position={{
                    lat: localization.coordinates.lat,
                    lng: localization.coordinates.lon,
                  }}
                  clusterer={clusterer}
                  icon={{
                    url: "/marker.svg",
                    size: new window.google.maps.Size(121, 182),
                    scaledSize: new window.google.maps.Size(
                      markerWidth,
                      markerHeight
                    ),
                    anchor: new window.google.maps.Point(
                      markerWidth / 2,
                      markerHeight
                    ),
                  }}
                  onClick={() =>
                    (window.location.href = `lokalizacje/${localization.id}`)
                  }
                />
              ))}
            </>
          )}
        </MarkerClustererF>
      </GoogleMap>
    </div>
  );
};

export default Maps;
