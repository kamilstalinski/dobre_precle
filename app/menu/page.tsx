import Image from "next/image";
import precle from "../../public/precle_slodkie.png";

const Menu = () => {
  return (
    <section>
      <div className='background background before:bg-[url("/precle_menu_1.png")]  w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight'>
          Menu
        </h1>
      </div>
      <div className='container mx-auto px-[4%]'>
        <div className='container mx-auto px-[4%] w-4/5 md:w-[95%] my-[30px] md:my-[20px] p-[30px] text-center text-white bg-[#EB8C11] rounded-3xl'>
          <h2 className='text-h3 md:text-h3-mobile font-bold mb-4'>
            DOBRE PRECLE – Polecają się na przekąskę!
          </h2>
          <p className='text-p md:text-p-mobile'>
            Oto on, nasz{" "}
            <span className='font-bold'>król przekąsek, DOBRY PRECEL!</span>{" "}
            Dobre Precle wypiekamy na miejscu, serwując Ci zawsze świeże precle
            podawane samodzielnie, a także w formie smacznych autorskich kanapek
            na zimno lub w wersji zapiekanej. Na każdą okazję, zarówno na mały,
            jak i duży głód, znajdziemy dla Ciebie odpowiedniego precla.
          </p>
        </div>
      </div>
      <div className='container mx-auto relative w-full h-auto flex flex-col justify-between gap-8 items-center pt-[100px] lg:pt-[70px]'>
        <div className='flex flex-col justify-between gap-8 z-10'>
          <p className='w-[407px] sm:w-[335px]  text-center md:text-p-mobile relative'>
            Przygotowaliśmy szeroki wybór, który obejmuje{" "}
            <span className='font-bold'>
              precle suche, z różnorodnymi posypkami
            </span>{" "}
            oraz <span className='font-bold'>wyjątkowe precle na słodko,</span>{" "}
            które są prawdziwą ucztą dla podniebienia.
          </p>
          <p className='w-[407px] sm:w-[335px] text-center md:text-p-mobile'>
            A jeśli szukasz czegoś bardziej sycącego, np. do pracy czy w
            podróży, to nasze{" "}
            <span className='font-bold'>
              precle w autorskiej wersji kanapkowej
            </span>{" "}
            będą idealnym rozwiązaniem! Precle autorskie podnoszą standard
            tradycyjnych przekąsek do wyższego poziomu, odpowiadając na różne
            gusta smakowe.
          </p>
        </div>
        <div className='w-[800px] md:w-[500px] h-[320px] md:h-[200px] -translate-y-[70px] md:-translate-y-[50px]'>
          <Image
            src={precle}
            alt='precle słodkie'
            sizes='100vw'
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className='absolute w-[400px] h-[600px] md:w-[270px] -top-[50px] right-0 translate-x-14 lg:translate-x-40 md:translate-x-32 sm:hidden'>
          <Image
            src='/precel_suchy_3.png'
            alt='precle słodkie'
            fill
            objectFit='contain'
          />
        </div>
        <div className='absolute w-[300px] h-[300px] md:w-[230px] -top-[30px] md:top-4 left-0 md:-left-32 -translate-x-14 lg:-translate-x-40 md:-translate-x-0 sm:hidden'>
          <Image
            src='/precel_suchy_1.png'
            alt='precle słodkie'
            fill
            objectFit='contain'
          />
        </div>
        <div className='absolute w-[300px] h-[300px] md:w-[230px] top-[180px] md:top-[160px] -left-6 md:-left-24 translate-x-14 lg:-translate-x-16 md:-translate-x-0 sm:hidden'>
          <Image
            src='/precel_suchy_2.png'
            alt='precle słodkie'
            fill
            objectFit='contain'
          />
        </div>
      </div>
      <div className='background background before:bg-[url("/precle_menu_2.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-[60px] md:text-[30px] text-white text-center font-bold leading-tight container'>
          Wybierz swoje ulubione precle
          <br /> i ciesz się ich smakiem!
        </h1>
      </div>
    </section>
  );
};

export default Menu;
