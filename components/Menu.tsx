import CustomButton from "./CustomButton";

const Menu = () => {
  return (
    <div className='background-menu w-full h-[40rem] md:h-[25rem]'>
      <div className='container mx-auto text-center h-full w-full flex flex-col justify-center items-center'>
        <h2 className='text-[100px] md:text-[40px] text-[#ED8F28] font-bold'>
          Menu
        </h2>
        <p className='text-[25px] md:text-[18px] text-[#971C25] mb-6'>
          DOBRE PRECLE - Polecają się na przekąskę!
        </p>
        <CustomButton text='SPRAWDŹ' color='#971C25' link='/' />
      </div>
    </div>
  );
};

export default Menu;
