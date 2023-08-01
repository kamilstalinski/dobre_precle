import CustomButton from "./CustomButton";
import Image from "next/image";

const LocationSection = () => {
  return (
    <section className='background-location h-[48rem] md:h-[30rem] relative overflow-hidden'>
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
    </section>
  );
};

export default LocationSection;
