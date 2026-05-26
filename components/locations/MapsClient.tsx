"use client";

import dynamic from "next/dynamic";
import type { LocationType } from "@/types";

const Maps = dynamic(() => import("./Maps"), {
  ssr: false,
  loading: () => (
    <div className='h-full w-full flex items-center justify-center'>
      <span className='loader-2'></span>
    </div>
  ),
});

const MapsClient = ({ localizations }: { localizations: LocationType[] }) => {
  return <Maps localizations={localizations} />;
};

export default MapsClient;
