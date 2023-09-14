import Image from "next/image";

const page = () => {
  return (
    <section>
      <div className='background-franchise before:bg-[url("/franczyza.png")]  w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight'>
          Franczyza
        </h1>
      </div>
      <div className='container mx-auto px-[5%] my-[70px] md:my-[30px]'>
        <h2 className='text-text-color text-[40px] lg:text-[30px] sm:text-[20px] font-bold -mb-4'>
          Chcesz podjąć z nami współpracę i otworzyć lokal we franczyzie?
        </h2>
        <h3 className='text-[30px] lg:text-[24px] sm:text-[14px] mt-10 '>
          Juz wkrótce będzie taka mozliwość, przygotowujemy dla Ciebie dobrą
          ofertę.
          <br />
          <strong>Szczegóły wkrótce.</strong>
        </h3>
      </div>
      <div className='bg-text-color w-full h-[20rem] md:h-[15rem] sm:h-[10rem] flex items-center justify-center'>
        <div className='relative w-[230px] md:w-[25%] max-w-[230px] h-full'>
          <div className='absolute top-[8%] w-[90px] h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
          <div className='absolute top-[0%] right-0 w-[70px] h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
          <div className='absolute top-[35%] left-[35%] w-[80px] h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
        </div>
        <div className='relative w-[250px] sm:w-[150px] h-full mx-4'>
          <Image src='/logo-franchise.svg' alt='precle' fill />
        </div>
        <div className='relative w-[230px] md:w-[25%] max-w-[230px] h-full'>
          <div className='absolute top-[35%] left-[35%] w-[80px] h-[200px]'>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
          <div className='absolute top-[8%] right-0 w-[65px] h-[200px]'>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
          <div className='absolute top-[0%] w-[80px] h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
