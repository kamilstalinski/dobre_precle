import Image from "next/image";

const AboutUs = () => {
  return (
    <section>
      <div className='background background before:bg-[url("/kanapka_o_nas.png")]  w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-white text-center font-bold leading-tight'>
          O nas
        </h1>
      </div>
      <div className='container mx-auto px-[4%] py-[30px]'>
        <div className='flex items-center md:flex-col'>
          <div className='w-1/2 md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              DOBRE PRECLE – PRECLE DOBRE Z NATURY
            </h2>
            <p className='text-p md:text-p-mobile'>
              Jak powstały <span className='font-bold'>DOBRE PRECLE?</span>{" "}
              Dawno, dawno temu nasz właściciel podróżował po różnych zakątkach
              świata, takich jak Bawaria, Francja i Włochy – to właśnie tam
              odkrył ten{" "}
              <span className='font-bold'>DOBRY i wyjątkowy przysmak.</span>
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
        <div className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'>
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              RĘCZNIE FORMOWANE W ÓSEMKI
            </h2>
            <p className='text-p md:text-p-mobile'>
              Wszystkie nasze precle są formowane ręcznie w charakterystyczne
              ósemki, a następnie poddawane powolnemu procesowi wzrostu w
              komorze rozrostu, czyli tzw. garowniku. Dobre Precle muszą być
              następnie dobrze upieczone, aby nabrały rumieńców i wyjątkowego
              charakteru. Każdy precel jest starannie przygotowywany, na Twoich
              oczach.
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
        <div className='flex gap-10 md:flex-col mt-12 items-center'>
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              ŚWIEŻOŚĆ PROSTO Z PIECA
            </h2>
            <p className='text-p md:text-p-mobile'>
              Precle są zawsze świeże, prosto z pieca. Bez względu na Twój
              nastrój, mamy dla Ciebie precla na dobry dzień. Suche precle,
              posypane różnymi dodatkami, słodkie wersje czy autorskie kanapki…
              wszystkie precle są oryginalne, ale łączy je jedno –
              charakterystyczna skórka, która jest chrupiąca na zewnątrz i
              miękka w środku. Dbamy o to, aby nasze precle były świeżo
              upieczone i dobrze zarumienione!
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/precle_piec_2.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'>
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              WYSELEKCJONOWANE SKŁADNIKI
            </h2>
            <p className='text-p md:text-p-mobile'>
              Dobre Precle tworzymy według naszej sekretnej receptury, używając
              starannie dobranych składników Do ich przygotowania używamy wody,
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
        <div className='flex gap-10 md:flex-col mt-12 items-center'>
          <div className='w-1/2 h-full md:w-full px-12 md:px-0'>
            <h2 className='text-text-color text-h3 md:text-h3-mobile font-bold mb-6'>
              AUTORSKIE KANAPKI
            </h2>
            <p className='text-p md:text-p-mobile'>
              W naszym menu główną rolę odgrywają przepyszne precle i rogale w
              różnych wersjach smakowych (sezam, mak, mak z sezamem i solą
              morską, masło czosnkowe). Z pasji do precli na ich bazie
              stworzyliśmy oryginalne, autorskie kanapki.
              <br /> W szerokiej gamie precli znajdziesz kilkanaście
              różnorodnych kompozycji, w tym słodkie klasyki z dodatkiem
              czekolady, orzechów lub wiórków kokosowych. Ponadto proponujemy
              unikalne kompozycje kanapkowe, które zawierają takie składniki jak
              np.: soczyste brzoskwinie, winogrona, szynkę parmeńską, kapary,
              świeże sałaty, rukolę, a także salami, ser, papryczki chilli czy
              pomidory.
              <br /> Nasze preclowe kanapki doskonale sprawdzają się zarówno w
              wersjach na ciepło, jak i na zimno. Bez względu na to, czy jesteś
              miłośnikiem mięsa, czy preferujesz wegetariańską lub wegańską
              dietę, z pewnością znajdziesz u nas coś dla siebie, ponieważ
              oferujemy różne propozycje dla smakoszy.
            </p>
          </div>
          <div className='w-1/2 md:w-full max-h-[450px] md:max-h-[300px] flex rounded-xl overflow-hidden'>
            <Image
              src='/autorskie_kanapki.png'
              alt='precle'
              width={2000}
              height={1333}
              style={{
                objectFit: "cover",
              }}
            />
          </div>
        </div>
        <div className='flex flex-row-reverse gap-10 md:flex-col mt-12 items-center'>
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
      </div>
    </section>
  );
};

export default AboutUs;
