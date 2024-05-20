import { locations } from "@/constants";
import Image from "next/legacy/image";
import Link from "next/link";

const LocationsList = () => {
  return (
    <div className='bg-text-color py-[50px]'>
      <div className='container mx-auto px-[4%] flex flex-wrap justify-between lg:justify-center gap-8'>
        {locations.map((location) => {
          return (
            <Link href={`lokalizacje/${location.id}`}>
              <div className='text-white cursor-pointer hover:scale-105 transition-all'>
                <div className='w-[250px] h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
                  <Image
                    src={location.image}
                    alt={`${location.city} zdjęcie`}
                    width={250}
                    height={250}
                    objectFit='cover'
                  />
                </div>
                <div>
                  <h3 className='text-h3 md:text-h3-mobile font-bold'>
                    {location.city}
                  </h3>
                  <p>{location.street}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default LocationsList;
