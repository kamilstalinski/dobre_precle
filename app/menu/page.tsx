import Image from "next/image";

const Menu = () => {
  return (
    <section>
      <div className='background background before:bg-[url("/kanapki_menu.png")]  w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center font-bold leading-tight'>
          Menu
        </h1>
      </div>
      <div className='container mx-auto px-[4%]'>
        <div className='container mx-auto px-[4%] w-4/5 my-[30px] md:my-[20px] p-[30px] text-center text-white bg-[#EB8C11] rounded-3xl'>
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
      <div className='relative w-full h-[1100px] flex flex-col justify-between items-center py-[200px] xl:bg-red-400 lg:bg-blue-400 md:bg-green-400'>
        <p className='w-[407px] text-center'>
          Przygotowaliśmy szeroki wybór, który obejmuje{" "}
          <span className='font-bold'>
            precle suche, z różnorodnymi posypkami
          </span>{" "}
          oraz <span className='font-bold'>wyjątkowe precle na słodko,</span>{" "}
          które są prawdziwą ucztą dla podniebienia.
        </p>
        <p className='w-[407px] text-center mb-[140px]'>
          A jeśli szukasz czegoś bardziej sycącego, np. do pracy czy w podróży,
          to nasze{" "}
          <span className='font-bold'>
            precle w autorskiej wersji kanapkowej
          </span>{" "}
          będą idealnym rozwiązaniem! Precle autorskie podnoszą standard
          tradycyjnych przekąsek do wyższego poziomu, odpowiadając na różne
          gusta smakowe.
        </p>
        <div className='w-[30%] xl:w-[35%] h-[40%] absolute top-0 left-0'>
          <Image
            src='/precle_suche.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='left'
            style={{
              rotate: "-10deg",
              scale: 1.3,
              translate: "-4% 0",
            }}
          />
        </div>
        <div className='w-[20%] xl:w-[25%] h-[40%] absolute top-[20%] left-[18%] xl:left-[25%]'>
          <Image
            src='/precle_suche_sol.png'
            alt='precle suche'
            fill
            objectFit='contain'
          />
        </div>
        <div className='w-[35%] xl:w-[45%] h-[60%] absolute top-[34%] left-0'>
          <Image
            src='/kanapka_1.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='w-[25%] xl:w-[30%] h-[60%] absolute top-[54%] xl:top-[56%] left-[5%] xl:left-[0]'>
          <Image
            src='/kanapka_2.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='w-[25%] h-[60%] absolute top-[58%] left-[24%]'>
          <Image
            src='/kanapka_3.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='w-[28%] h-[60%] absolute top-[55%] left-[43%]'>
          <Image
            src='/kanapka_4.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='left'
          />
        </div>
        <div className='w-[40%] xl:w-[45%] h-[60%] absolute top-[50%] right-0'>
          <Image
            src='/kanapka_5.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='right'
          />
        </div>
        <div className='w-[30%] xl:w-[38%] h-[60%] absolute top-[23%] xl:top-[28%] right-0'>
          <Image
            src='/kanapka_6.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='right'
          />
        </div>
        <div className='w-[25%] xl:w-[35%] h-[55%] absolute -top-[10%] right-0'>
          <Image
            src='/precle_slodkie.png'
            alt='precle suche'
            fill
            objectFit='contain'
            objectPosition='right'
            style={{
              transform: "translateX(20%)",
            }}
          />
        </div>
      </div>
      <div className='background background before:bg-[url("/kanapki_menu_2.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-[60px] md:text-[30px] text-white text-center font-bold leading-tight container'>
          Wybierz swoje ulubione precle i ciesz się ich smakiem!
        </h1>
      </div>
    </section>
  );
};

export default Menu;
