"use client";

import { useState, useEffect } from "react";
import { BlogPost, Banner, Loader } from "@/components";
import { client } from "@/lib/contentful/client";

interface PostType {
  title: string;
  content: string;
  image?: string;
  date: string;
  slug: string;
}

const page = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await client.getEntries({
          content_type: "post",
          include: 2,
        });

        const fetchedPosts = response.items.map((item: any) => item.fields);

        setPosts(fetchedPosts);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  // Show loading state
  if (loading) {
    return (
      <section>
        <Banner path='/precel_aktualnosci.png' altName='Precle aktualności'>
          Aktualności
        </Banner>
        <div className='container mx-auto px-[5%] mt-[50px] mb-[80px] md:my-[30px]'>
          <div className='flex justify-center items-center min-h-[400px]'>
            <div className='text-center'>
              <Loader size='lg' className='mb-4' />
              <p className='text-gray-600'>Ładowanie aktualności...</p>
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
        <Banner path='/precel_aktualnosci.png' altName='Precle aktualności'>
          Aktualności
        </Banner>
        <div className='container mx-auto px-[5%] mt-[50px] mb-[80px] md:my-[30px]'>
          <div className='flex justify-center items-center min-h-[400px]'>
            <div className='text-center'>
              <p className='text-red-600 mb-4'>
                Błąd podczas ładowania aktualności
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
      <Banner path='/precel_aktualnosci.png' altName='Precle aktualności'>
        Aktualności
      </Banner>
      <div className='container mx-auto px-[5%] mt-[50px] mb-[80px] md:my-[30px]'>
        <h2 className='text-text-color text-[50px] md:text-h1-mobile sm:text-[30px] font-bold -mb-4'>
          Czujesz nasze PRECLOWE LOVE?
        </h2>
        <h3 className='text-text-color text-[35px] md:text-h1-mobile sm:text-[30px] font-bold mb-3'>
          Legendy głoszą, że…
        </h3>
        <h4 className='text-black text-[21px] md:text-p-mobile sm:text-[20px] font-bold mb-4'>
          Skąd się wziął DOBRY PRECEL?
          <br /> Poznaj fascynujące legendy o tym popularnym wypieku:
        </h4>
        <p className='mb-4 md:text-p-mobile'>
          1. Pierwsza legenda głosi, że precle bawarskie zostały wymyślone przez
          piekarza z Bad Urach, który znalazł się w niełasce u księcia. Przed
          egzekucją, aby ocalić swoje życie, miał stworzyć pieczywo, przez które
          słońce świeci trzy razy. Tak właśnie podobno powstał precel. Ciekawą
          historię na ten temat można usłyszeć w Muzeum Kultury Chleba w Ulm.
        </p>
        <p className='mb-4 md:text-p-mobile'>
          2. Według innej legendy precla wymyślił mnich pochodzący z północnych
          Włoch lub południowej Francji. Pewnego dnia, po upieczeniu chleba,
          mnich z resztek ciasta postanowił stworzyć przekąskę dla dzieci, które
          właśnie uczyły się nowej modlitwy. W ten sposób powstał przysmak w
          kształcie rąk złożonych do modlitwy. To dlatego precel ma swój
          charakterystyczny wygląd.
        </p>
        <p className='mb-12 md:text-p-mobile'>
          3. Ciekawostką jest również pochodzenie nazwy „precel", która wywodzi
          się z łaciny i oznacza &quot;małe ramionka&quot;. To odniesienie do
          charakterystycznego kształtu precla, który przypomina splecione
          ramiona.
        </p>
        <p className='md:text-p-mobile'>
          To nie legenda, że Dobre Precle możesz zjeść już m.in. we Wrocławiu,
          Gliwicach, Bydgoszczy, Krakowie. I wciąż otwieramy się w kolejnych
          miastach!
          <br />
          <br />
          Kto raz spróbuje naszych precli, ten zrozumie, skąd się wzięła
          popularność tych wypieków. Precle mają swoich fanów na całym świecie.
          Przygotuj się na prawdziwą preclową ucztę pełną smaku i tradycji.
          Zapraszamy na Dobre Precle do naszych piekarni.
        </p>
      </div>
      <div className='container mx-auto px-[5%]'>
        {posts.map((post: any, idx: number) => {
          return <BlogPost key={idx} post={post} />;
        })}
      </div>
    </section>
  );
};

export default page;
