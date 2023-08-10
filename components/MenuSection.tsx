import CustomButton from "./CustomButton";

const MenuSection = () => {
  return (
    <section className='background-menu w-full h-[40rem] md:h-[25rem]'>
      <div className='container mx-auto text-center h-full w-full flex flex-col justify-center items-center'>
        <h2 className='text-h2 md:text-h2-mobile text-[#ED8F28] font-bold'>
          Menu
        </h2>
        <p className='text-h3 md:text-h3-mobile text-[#971C25] mb-6'>
          DOBRE PRECLE - Polecają się na przekąskę!
        </p>
        <CustomButton text='SPRAWDŹ' color='bg-[#971C25]' link='/menu' />
      </div>
    </section>
  );
};

export default MenuSection;
