import Image from "next/legacy/image";
import Link from "next/link";

const LocationsList = () => {
  return (
    <div className='bg-text-color py-[50px]'>
      <div className='container mx-auto px-[4%] flex flex-wrap justify-between lg:justify-center gap-8'>
        <Link href='lokalizacje/wroclaw'>
          <div className='text-white cursor-pointer hover:scale-105 transition-all'>
            <div className='w-[250px] h-[250px] relative border-2 border-white rounded-lg overflow-hidden mb-2'>
              <Image
                src='/Wroclaw_1.png'
                alt='Wrocław zdjęcie'
                width={250}
                height={250}
                objectFit='cover'
              />
            </div>
            <div>
              <h3 className='text-h3 md:text-h3-mobile font-bold'>Wrocław</h3>
              <p>ul. Piłsudskiego 105</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LocationsList;
