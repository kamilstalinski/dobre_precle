import CustomButton from "./CustomButton";
import Image from "next/image";

const LocationSection = () => {
  return (
    <section className='background-location h-[48rem] md:h-[30rem] relative overflow-hidden flex'>
      <div className='h-full flex items-center absolute right-[100%]'>
        <Image
          className='top-[12%] -left-[6%] -rotate-[55deg]'
          src='/precel_suchy.png'
          alt='lokalizacje'
          width={500}
          height={339}
        />
      </div>
      <div className='container mx-auto h-full px-[4%] py-[100px] md:py-[50px] text-center flex flex-col justify-between items-center'>
        <div>
          <h2 className='text-h2 md:text-h2-mobile font-bold text-[#FBE8CF]'>
            Lokalizacje
          </h2>
          <p className='text-h3 md:text-h3-mobile text-white'>
            KOMU W DROGĘ, TEMU... DOBRE PRECLE!
          </p>
          <p className='text-p md:text-p-mobile md:w-full text-white'>
            Dołącz do poszukiwaczy smaku DOBRYCH PRECLI na terenie całej Polski
          </p>
        </div>
        <CustomButton text='SPRAWDŹ' link='/' color='bg-[#ED8F28]' />
      </div>
      <div className='h-full flex items-center absolute left-[100%]'>
        <Image
          className='top-[0%] -right-[6%] -rotate-[105deg]'
          src='/precel_suchy.png'
          alt='lokalizacje'
          width={500}
          height={339}
        />
      </div>
    </section>
  );
};

// -bottom-[8%] 2xl:bottom-[0] xl:bottom-[10%]

export default LocationSection;
