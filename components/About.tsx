import Image from "next/image";
import CustomButton from "./CustomButton";

const About = () => {
  return (
    <div className='about-background py-[80px] relative overflow-hidden'>
      <div className='absolute w-full h-full scale-[1.7] top-[80%] left-[0%] z-[-1]'>
        <Image
          src='/precle_orange.svg'
          alt='precle'
          fill
          style={{
            objectFit: "contain",
          }}
        />
      </div>
      <div className='container mx-auto px-[4%] text-text-color relative'>
        <Image
          className='absolute top-0 right-0'
          src='/precle_deska.png'
          alt='precle na desce'
          width={617}
          height={938}
        />
        <h2 className='text-[80px]'>O nas</h2>
        <p className='text-[30px]'>DOBRE PRECLE - PRECLE DOBRE Z NATURY</p>
        <p className='text-[20px] w-[62%] mt-6'>
          Jak powstały DOBRE PRECLE? Dawno, dawno temu nasz właściciel
          podróżował po różnych zakątkach świata, takich jak Bawaria, Francja i
          Włochy - to właśnie tam odkrył ten DOBRY i wyjątkowy przysmak.
        </p>
        <div className='flex mt-8'>
          <Image
            className='z-[100]'
            src='/kanapka_ser.png'
            alt='kanapka z serem'
            width={375}
            height={1}
          />
          <Image
            className='-translate-x-10 translate-y-10'
            src='/precle_piec.png'
            alt='precle z pieca'
            width={375}
            height={169}
          />
        </div>
      </div>
      <div className='text-center mt-[100px]'>
        <CustomButton text='CZYTAJ WIĘCEJ' />
      </div>
    </div>
  );
};

export default About;
