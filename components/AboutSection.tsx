import Image from "next/image";
import CustomButton from "./CustomButton";

const AboutSection = () => {
  return (
    <section className='about-background py-[80px] md:py-[30px] relative overflow-hidden'>
      <div className='absolute w-full h-full scale-[1.7] top-[80%] md:top-[30%] left-[0%] z-[-1]'>
        <Image
          src='/precle_orange.svg'
          alt='precle'
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className='container mx-auto pl-[4%] pr-0 md:pr-2 text-text-color flex justify-between'>
        <div className='w-3/5 md:w-full'>
          <h2 className='text-h2 md:text-h2-mobile font-bold'>O nas</h2>
          <p className='text-h3 md:text-h3-mobile'>
            DOBRE PRECLE - PRECLE DOBRE Z NATURY
          </p>
          <p className='text-p md:text-p-mobile md:w-full mt-6'>
            Jak powstały DOBRE PRECLE? Dawno, dawno temu nasz właściciel
            podróżował po różnych zakątkach świata, takich jak Bawaria, Francja
            i Włochy - to właśnie tam odkrył ten DOBRY i wyjątkowy przysmak.
          </p>
          <div className='flex mt-8 md:flex'>
            <div className='md:w-1/2'>
              <Image
                className='z-[100] rounded-lg'
                src='/kanapka_ser.png'
                alt='kanapka z serem'
                width={370}
                height={169}
              />
            </div>
            <div className='md:w-1/2'>
              <Image
                className='-translate-x-10 md:-translate-x-2 translate-y-10 md:translate-y-5 rounded-lg'
                src='/precle_piec.png'
                alt='precle z pieca'
                width={370}
                height={169}
              />
            </div>
          </div>
        </div>
        <div className='w-1/2 md:hidden'>
          <Image
            className='top-0 lg:top-0 right-0 xl:w-[50%]'
            src='/precle_deska.png'
            alt='precle na desce'
            width={617}
            height={938}
            style={{ position: "absolute" }}
          />
        </div>
      </div>
      <div className='text-center mt-[100px] md:mt-[50px] md:mb-[50px]'>
        <CustomButton text='CZYTAJ WIĘCEJ' link='/o-nas' color='bg-[#ED8F28]' />
      </div>
    </section>
  );
};

export default AboutSection;
