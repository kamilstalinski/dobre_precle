import CustomButton from "./CustomButton";

const Hero = () => {
  return (
    <div className='background w-full h-[40rem] md:h-[25rem]'>
      <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
        <h1 className='text-[100px] lg:text-[80px] md:text-[40px] text-white text-center leading-tight'>
          Czujesz nasze
          <br />
          <span className='text-[#FBE8CF] font-bold'>PRECLOWE LOVE?</span>
        </h1>
        <CustomButton text='CZYTAJ WIĘCEJ' />
      </div>
    </div>
  );
};

export default Hero;
