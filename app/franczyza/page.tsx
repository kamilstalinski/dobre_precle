import { Banner } from "@/components";
import Image from "next/image";

import { redirect } from "next/navigation";

const page = () => {
  if (process.env.NODE_ENV === "production") redirect("/not-found");

  return (
    <section>
      <Banner path='/franczyza.png' altName='franczyza'>
        Franczyza
      </Banner>
      <div className='container mx-auto px-[5%] my-[70px] md:my-[30px] text-center'>
        <h2 className='text-text-color text-[40px] md:text-h1-mobile sm:text-[20px] font-bold -mb-4'>
          Chcesz podjąć z nami współpracę i otworzyć
          <br />
          lokal we franczyzie?
        </h2>
        <h3 className='text-black text-[21px] md:text-p-mobile sm:text-[20px] mt-10 '>
          Juz wkrótce będzie taka mozliwość, przygotowujemy dla Ciebie dobrą
          ofertę.
          <br />
          <strong>Szczegóły wkrótce.</strong>
        </h3>
      </div>
      <div className='bg-text-color w-full h-[20rem] md:h-[15rem] sm:h-[10rem] flex items-center justify-center'>
        <div className='relative w-[230px] md:w-[180px] max-w-[230px] h-full'>
          <div className='absolute top-[8%] sm:left-2 md:-top-2 sm:-top-12 w-[90px] sm:w-[45px] h-[200px] md:w-[80px] '>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
          <div className='absolute top-[0%] md:-top-8 sm:-top-2 right-0 w-[70px] sm:w-[50px] h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
          <div className='absolute top-[35%] md:top-16 sm:-top-0 left-[35%] sm:left-[32%] w-[80px] md:w-[70px] sm:hidden h-[200px] '>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
        </div>
        <div className='relative w-[250px] sm:w-[220px] h-full mx-4'>
          <Image src='/logo-franchise.svg' alt='precle' fill sizes='250px' priority />
        </div>
        <div className='relative w-[230px] md:w-[180px] max-w-[230px] h-full'>
          <div className='absolute top-[35%] md:top-14 left-[35%] w-[80px] h-[200px] sm:hidden'>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
          <div className='absolute top-[8%] md:-top-4 sm:-top-12 right-0 md:-right-3 sm:right-1 w-[65px] sm:w-[45px] h-[200px]'>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
          <div className='absolute top-[0%] md:-top-6 sm:-top-1 w-[80px] h-[200px] sm:w-[50px] '>
            <Image src='/marker.svg' alt='marker' fill sizes='90px' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
