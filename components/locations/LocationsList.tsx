import Image from "next/image";
import Link from "next/link";

const LocationsList = ({ localization }: any) => {
  const { id, city, street, gallery } = localization;
  const locationImage = gallery?.[0]?.fields?.file?.url;
  const src = locationImage ? `https:${locationImage}` : "/Precle_placeholder.png";

  return (
    <Link href={`/lokalizacje/${id}`}>
      <div className='text-white cursor-pointer hover:scale-105 transition-all'>
        <div className='w-[250px] h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
          <Image
            src={src}
            alt={`${city} zdjęcie`}
            fill
            sizes='250px'
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
