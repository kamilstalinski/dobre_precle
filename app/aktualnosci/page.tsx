import { BlogPost, Banner } from "@/components";
import { getCachedEntries } from "@/lib/contentful/client";
import type { PostFields } from "@/types";

async function fetchPosts(): Promise<PostFields[]> {
  try {
    const response = await getCachedEntries<PostFields>({
      content_type: "post",
      include: 2,
    });
    return response.items.map((item) => item.fields);
  } catch (err) {
    console.error("Error fetching posts:", err);
    return [];
  }
}

const Aktualnosci = async () => {
  const posts = await fetchPosts();

  return (
    <section>
      <Banner path='/precel_aktualnosci.webp' altName='Precle aktualności'>
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
        {posts.map((post, idx) => (
          <BlogPost key={idx} post={post} />
        ))}
      </div>
    </section>
  );
};

export default Aktualnosci;
