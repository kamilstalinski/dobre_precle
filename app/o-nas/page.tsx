import Banner from "@/components/Banner";
import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <Banner path='/precel_o_nas.png' altName='Precle o nas'>
        O nas
      </Banner>
      <div className='container mx-auto px-[4%] py-[40px]'>
        <div className='flex items-center md:flex-col' data-aos='fade-up'>
          <div className='w-1/2 md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              DOBRE PRECLE – PRECLE DOBRE Z NATURY
            </h2>
            <p className='text-p md:text-p-mobile'>
              Jak powstały <span className='font-bold'>DOBRE PRECLE?</span> Ten
              DOBRY i wyjątkowy przysmak odkrył jeden z założycieli marki Dobre
              Precle podczas licznych podróży po Europie, m.in. w krajach takich
              jak Bawaria, Francja czy Włochy.
              <br />
              <br />
              <span className='font-bold'>Precle</span>, czyli pyszne zawinięte
              w ósemkę wypieki, kojarzą się głównie z niemiecką Bawarią. Jednak
              ich historia sięga prawdopodobnie średniowiecznych Włoch, gdzie
              były pieczone podczas postu, składając się jedynie z wody i mąki.
              Nazwa „precel” pochodzi z łaciny i oznacza „małe ramionka”, co
              oznacza, że nawet zwykłe pieczywo może być atrakcyjne dla oczu i
              podniebienia! W Niemczech kiedyś uważano, że precel przynosi
              szczęście i powodzenie, dlatego dzieci nosiły naszyjniki w
              kształcie precli w Nowy Rok.
            </p>
          </div>
          <div className='w-1/2 md:w-full flex items-center'>
            <Image
              src='/precle_dobre_z_natury.png'
              alt='precle'
              width={2000}
              height={1333}
            />
          </div>
        </div>
        <div
          className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'
          data-aos='fade-up'
        >
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              RĘCZNIE FORMOWANE W ÓSEMKI
            </h2>
            <p className='text-p md:text-p-mobile'>
              Wszystkie nasze precle są formowane ręcznie w charakterystyczne
              ósemki, a następnie poddawane powolnemu procesowi wzrostu w
              komorze rozrostu, czyli tzw. garowniku. Dobre Precle muszą być
              następnie dobrze upieczone, aby nabrały rumieńców i wyjątkowego
              charakteru.
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/formowanie.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          className='flex gap-10 md:flex-col mt-12 items-center'
          data-aos='fade-up'
        >
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              ŚWIEŻOŚĆ PROSTO Z PIECA
            </h2>
            <p className='text-p md:text-p-mobile'>
              Precle są zawsze świeże, prosto z pieca. Bez względu na Twój
              nastrój, mamy dla Ciebie precla na dobry dzień. Suche precle,
              posypane różnymi dodatkami, nadziewane precle na słodko lub pełne
              smaku przekąski w wersji wytrawnej… Wszystkie precle są
              oryginalne, ale łączy je jedno – charakterystyczna skórka, która
              jest chrupiąca na zewnątrz i miękka w środku. Dbamy o to, aby
              nasze precle były świeżo upieczone i dobrze zarumienione!
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/precle_piec.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'
          data-aos='fade-up'
        >
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              WYSELEKCJONOWANE SKŁADNIKI
            </h2>
            <p className='text-p md:text-p-mobile'>
              Dobre Precle tworzymy według naszej sekretnej receptury, używając
              starannie dobranych składników. Do ich przygotowania używamy wody,
              mąki, drożdży i soli, ale to nie wszystko. Jak sama nasza nazwa
              wskazuje, dobry smak i świeżość to wartości głęboko zakorzenione w
              naszej działalności. Zrobiony z kilku prostych, świeżych
              składników precel to przekąska dobrej jakości. Precle posypane są
              gruboziarnistą solą, która nadaje im charakterystyczny smak.
              Lubisz słone paluszki? Jest duża szansa, że pokochasz Dobre
              Precle!
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/skladniki.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          className='flex gap-10 md:flex-col mt-12 items-center'
          data-aos='fade-up'
        >
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              PRECLE NADZIEWANE
            </h2>
            <p className='text-p md:text-p-mobile'>
              W naszym menu oprócz tradycyjnych precli, znajdziesz również
              precle nadziewane z różnymi polewami. Mamy dla ciebie smaczne
              precle wytrawne w wielu smakach m.in. mozzarella z makiem,
              czosnkiem lub słonecznikiem, która z pewnością przypadnie do gustu
              wielbicielom ciągnącego się sera. Amatorzy pikantnych przekąsek
              również znajdą u nas coś dobrego dla siebie: salami pikantne czy
              precle BBQ zadowolą każde podniebienie.
              <br />
              <br /> Jeśli preferujesz precle w wersji wegetariańskiej, spróbuj
              naszych propozycji: pesto z pomidorami i mozzarellą, szpinak z
              czosnkiem, mozzarella z twarogiem i koperkiem i wiele innych.
              <br />
              <br /> Uwaga miłośnicy słodkości! Szykujcie się na prawdziwą
              preclową ucztę! Biała czekolada z kokosem, wiśnia z czarną
              czekoladą, jabłko z cynamonem, banan z mleczną czekoladą – a to
              jeszcze nie wszystkie smaki, które dla Ciebie mamy! Ciężko im się
              oprzeć, na szczęście nie musisz tego robić! Spróbuj swoich
              ulubionych precli!
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[680px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/autorskie_precle.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div
          className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'
          data-aos='fade-up'
        >
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              SŁODKIE NAPOJE
            </h2>
            <p className='text-p md:text-p-mobile'>
              Czujesz pragnienie? Jesteśmy na to przygotowani, dlatego zawsze
              znajdziesz u nas coś do picia. Do Dobrych Precli polecamy nasze
              ciepłe i zimne napoje, w tym kawę i wodę. Odwiedź nas już dziś i
              odkryj niepowtarzalny świat DOBRYCH PRECLI, stworzony z pasji do
              dobrych przekąsek.
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/napoje.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
