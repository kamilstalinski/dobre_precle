import CustomButton from "./CustomButton";

const HeroSection = () => {
  return (
    <section className='background w-full h-[40rem] md:h-[25rem]'>
      <div className='container mx-auto px-4 h-full flex flex-col gap-12 items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center leading-tight'>
          Czujesz nasze
          <br />
          <span className='text-[#FBE8CF] font-bold'>PRECLOWE LOVE?</span>
        </h1>
        <CustomButton text='CZYTAJ WIĘCEJ' link='/' color='bg-[#ED8F28]' />
      </div>
    </section>
  );
};

export default HeroSection;
