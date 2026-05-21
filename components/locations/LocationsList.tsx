import Image from "next/image";
import Link from "next/link";
import type { LocationType } from "@/types";

const LocationsList = ({ localization }: { localization: LocationType }) => {
  const { id, city, street, gallery } = localization;
  const locationImage = gallery?.[0]?.fields?.file?.url;
  const src = locationImage ? `https:${locationImage}` : "/Precle_placeholder.webp";

  return (
    <Link href={`/lokalizacje/${id}`} className='block'>
      <div className='text-white cursor-pointer hover:scale-105 transition-all'>
        <div className='w-full aspect-square relative border-2 border-white rounded-lg overflow-hidden mb-2'>
          <Image
            src={src}
            alt={`${city} zdjęcie`}
            fill
            sizes='(max-width: 767px) 50vw, (max-width: 1023px) 33vw, (max-width: 1279px) 25vw, 20vw'
            className='object-cover'
          />
        </div>
        <div>
          <h3 className='text-h3 md:text-h3-mobile font-bold'>{city}</h3>
          <p>{street}</p>
        </div>
      </div>
    </Link>
  );
};

export default LocationsList;
