"use client";

import {
  GoogleMap,
  MarkerF,
  MarkerClustererF,
  useLoadScript,
} from "@react-google-maps/api";
import { useEffect, useRef, useState } from "react";
import { mapStyles } from "@/constants";

const CLUSTER_PAD = 14;

const clusterIcon = (size: number) => {
  const total = size + CLUSTER_PAD * 2;
  const c = total / 2;
  const innerR = size / 2 - 4;
  const ringMin = size / 2 - 1;
  const ringMax = size / 2 + CLUSTER_PAD - 2;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${total}" height="${total}" viewBox="0 0 ${total} ${total}">
    <circle cx="${c}" cy="${c}" r="${ringMin}" fill="none" stroke="#991B1D" stroke-width="2" stroke-opacity="0.5">
      <animate attributeName="r" values="${ringMin};${ringMax};${ringMin}" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="stroke-opacity" values="0.55;0;0.55" dur="1.8s" repeatCount="indefinite"/>
      <animate attributeName="stroke-width" values="2;5;2" dur="1.8s" repeatCount="indefinite"/>
    </circle>
    <circle cx="${c}" cy="${c}" r="${innerR}" fill="#991B1D" stroke="#ffffff" stroke-width="3"/>
  </svg>`;
  return { url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`, total };
};

const clusterStyles = [40, 48, 56, 64, 72].map((s, i) => {
  const { url, total } = clusterIcon(s);
  return {
    url,
    height: total,
    width: total,
    textColor: "#ffffff",
    textSize: 13 + i * 1.5,
    fontWeight: "700",
  };
});

const MARKER_SVG_RATIO = 121 / 182;

const keyFor = (lat: number, lng: number) =>
  `${lat.toFixed(6)},${lng.toFixed(6)}`;

const Maps = ({ localizations }: any) => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? "",
  });
  const [isMobile, setIsMobile] = useState(false);
  const [droppingKeys, setDroppingKeys] = useState<Set<string>>(new Set());
  const dropTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const check = () =>
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(
    () => () => {
      if (dropTimeoutRef.current) clearTimeout(dropTimeoutRef.current);
    },
    []
  );

  if (!isLoaded) {
    return (
      <div className='h-full w-full flex items-center justify-center'>
        <span className='loader-2'></span>
      </div>
    );
  }

  const markerHeight = isMobile ? 56 : 80;
  const markerWidth = Math.round(markerHeight * MARKER_SVG_RATIO);

  const handleMapLoad = (map: google.maps.Map) => {
    const bounds = new window.google.maps.LatLngBounds(
      { lat: 49.0, lng: 14.12 },
      { lat: 54.84, lng: 24.15 }
    );
    map.fitBounds(bounds, 0);
  };

  const handleClusterClick = (cluster: any) => {
    const markers = cluster.getMarkers?.() ?? [];
    const keys = new Set<string>(
      markers
        .map((m: any) => {
          const p = m.getPosition?.();
          return p ? keyFor(p.lat(), p.lng()) : null;
        })
        .filter(Boolean) as string[]
    );
    if (dropTimeoutRef.current) clearTimeout(dropTimeoutRef.current);
    setDroppingKeys(keys);
    dropTimeoutRef.current = setTimeout(() => {
      setDroppingKeys(new Set());
    }, 1600);
  };

  return (
    <div className='mt-12 rounded-lg overflow-hidden border-2 border-text-color mb-[50px] h-full'>
      <GoogleMap
        mapContainerStyle={{ width: "100%", height: "100%" }}
        onLoad={handleMapLoad}
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
          onClick={handleClusterClick}
          options={{
            styles: clusterStyles,
            gridSize: 60,
            minimumClusterSize: 2,
            maxZoom: 11,
            averageCenter: true,
            zoomOnClick: true,
          }}
        >
          {(clusterer) => (
            <>
              {localizations.map((localization: any) => {
                const lat = localization.coordinates.lat;
                const lng = localization.coordinates.lon;
                const isDropping = droppingKeys.has(keyFor(lat, lng));
                return (
                  <MarkerF
                    key={localization.id}
                    position={{ lat, lng }}
                    clusterer={clusterer}
                    animation={
                      isDropping
                        ? window.google.maps.Animation.DROP
                        : undefined
                    }
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
                );
              })}
            </>
          )}
        </MarkerClustererF>
      </GoogleMap>
    </div>
  );
};

export default Maps;
