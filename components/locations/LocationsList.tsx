import Image from "next/legacy/image";
import Link from "next/link";

const LocationsList = ({ localization }: any) => {
  const { id, city, street, gallery } = localization;
  const locationImage = gallery?.[0]?.fields?.file?.url;

  return (
    <>
      <Link href={`lokalizacje/${id}`}>
        <div className='text-white cursor-pointer hover:scale-105 transition-all'>
          {locationImage ? (
            <div className='w-[250px] h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
              <Image
                src={`https:${locationImage}`}
                alt={`${city} zdjęcie`}
                width={500}
                height={500}
                objectFit='cover'
                placeholder='blur'
                blurDataURL={`https:${locationImage}`}
              />
            </div>
          ) : (
            <div className='w-[250px] h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
              <Image
                src='/Precle_placeholder.png'
                alt={`${city} zdjęcie`}
                width={500}
                height={500}
                objectFit='cover'
                placeholder='blur'
                blurDataURL='/Precle_placeholder.png'
              />
            </div>
          )}
          <div>
            <h3 className='text-h3 md:text-h3-mobile font-bold'>{city}</h3>
            <p>{street}</p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default LocationsList;
