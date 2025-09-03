"use client";

import { useState, useEffect } from "react";
import { Maps, LocationsList, Loader } from "@/components";
import { client } from "@/lib/contentful/client";
import Image from "next/image";

interface LocationType {
  name: string;
  address: string;
  phone?: string;
  email?: string;
  coordinates?: {
    lat: number;
    lng: number;
  };
}

const Locations = () => {
  const [localizations, setLocalizations] = useState<LocationType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await client.getEntries({
          content_type: "localization",
          include: 2,
        });

        // Sort locations by city name
        const sortedLocations = response.items.sort((a: any, b: any) => {
          if (a.fields.city < b.fields.city) return -1;
          if (a.fields.city > b.fields.city) return 1;
          return 0;
        });

        const fetchedLocations = sortedLocations.map(
          (item: any) => item.fields,
        );

        setLocalizations(fetchedLocations);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching locations:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section>
        <div className='background-loc before:bg-[url("/miasto.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
          <div className='flex gap-2'>
            <div className='relative w-[100px] md:w-[30px] h-[200px] md:h-[60px]'>
              <Image src='/marker.svg' alt='marker' fill />
            </div>
            <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight self-end'>
              Lokalizacje
            </h1>
          </div>
        </div>
        <div className='container mx-auto px-[4%] my-[50px]'>
          <div className='flex justify-center items-center min-h-[400px]'>
            <div className='text-center'>
              <Loader size='lg' className='mb-4' />
              <p className='text-gray-600'>Ładowanie lokalizacji...</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Show error state
  if (error) {
    return (
      <section>
        <div className='background-loc before:bg-[url("/miasto.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
          <div className='flex gap-2'>
            <div className='relative w-[100px] md:w-[30px] h-[200px] md:h-[60px]'>
              <Image src='/marker.svg' alt='marker' fill />
            </div>
            <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight self-end'>
              Lokalizacje
            </h1>
          </div>
        </div>
        <div className='container mx-auto px-[4%] my-[50px]'>
          <div className='flex justify-center items-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-red-600 mb-4'>
                Błąd podczas ładowania lokalizacji
              </p>
              <p className='text-gray-600 text-sm'>{error}</p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className='background-loc before:bg-[url("/miasto.png")] w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <div className='flex gap-2'>
          <div className='relative w-[100px] md:w-[30px] h-[200px] md:h-[60px]'>
            <Image src='/marker.svg' alt='marker' fill />
          </div>
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
            sięrozrasta, przyciągając coraz więcej smakoszy precli. Chcemy być
            blisko Ciebie, abyś mógł cieszyć się naszymi pysznymi i autorskimi
            preclowymi kompozycjami w zasięgu ręki.
            <br />
            <br />
            <span className='font-bold'>
              Sprawdź, czy Dobre Precle są już dostępne w Twoim mieście.
            </span>{" "}
            Jeśli masz jakieś sugestie dotyczące innych miejscowości, w których
            chciałbyś nas spotkać, daj nam znać! Czekamy na Twoje pomysły i z
            przyjemnością rozważymy każdą propozycję.
            <br />
            <br />
            Znajdź nas na mapie precli i wypróbuj ich oryginalny smak. Dobre
            Precle to smak bliski Tobie i Twojej rodzinie.
          </p>
        </div>
        <div className='h-[600px] md:h-[350px]'>
          <Maps localizations={localizations} />
        </div>
      </div>
      <div className='bg-text-color py-[50px]'>
        <div className='container mx-auto px-[4%] flex flex-wrap justify-between lg:justify-center gap-8'>
          {localizations.map((localization: any, idx: number) => {
            return <LocationsList localization={localization} key={idx} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Locations;
