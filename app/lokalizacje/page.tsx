import { Maps, LocationsList } from "@/components";
import Image from "next/image";

const Locations = () => {
  return (
    <section>
      <div className='background-loc before:bg-[url("/miasto.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <div className='flex'>
          <Image src='/marker.svg' alt='marker' width={100} height={200} />
          <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight self-end'>
            Lokalizacje
          </h1>
        </div>
      </div>
      <div className='container mx-auto px-[4%] my-[50px]'>
        <div className='w-full text-text-color '>
          <h2 className='text-h3 md:text-h3-mobile font-bold mb-6'>
            KOMU W DROGĘ, TEMU… DOBRE PRECLE!
          </h2>
          <p className='text-p md:text-p-mobile'>
            Dołącz do poszukiwaczy smaku DOBRYCH PRECLI na terenie całej Polski.
            Nasze precle są wszędzie tam, gdzie może Ciebie dopaść głód lub
            ochota na małą przekąskę.{" "}
            <span className='font-bold'>
              Wrocław, Katowice, Gliwice, Kraków, Bydgoszcz
            </span>{" "}
            – tam nas szukaj w pierwszej kolejności, ale jesteśmy otwarci na
            nowe lokalizacje.
            <br />
            <br />
            Pasjonuje nas odkrywanie nowych miejsc, a nasza preclowa mapa wciąż
            sięrozrasta, przyciągając coraz więcejsmakoszy precli. Chcemy być
            blisko Ciebie, abyś mógł cieszyć się naszymi pysznymi i autorskimi
            preclowymi kompozycjami w zasięgu ręki.
            <br />
            <br />
            <span className='font-bold'>
              Sprawdź, czy Dobre Precle są już dostępne w Twoim mieście.
            </span>{" "}
            Jeśli masz jakieś sugestie dotyczące innych miejscowości, w których
            chciałbyś nas spotkać, daj nam znać! Czekamy na Twoje pomysły
            i z przyjemnością rozważymy każdą propozycję.
            <br />
            <br />
            Znajdź nas na mapie precli i wypróbuj ich oryginalny smak. Dobre
            Precle to smak bliski Tobie i Twojej rodzinie.
          </p>
        </div>
        <div className='h-[600px] md:h-[350px]'>
          <Maps />
        </div>
      </div>
      <LocationsList />
    </section>
  );
};

export default Locations;
