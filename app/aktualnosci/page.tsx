import { BlogPost } from "@/components";
import { PostProps, PostTestProps } from "@/types";
import { posts } from "@/constants";

// const getPosts = async () => {
//   const data = await fetch("http://localhost:1337/api/blogs?populate=*");
//   const posts = await data.json();

//   return posts;
// };

const page = async () => {
  // const posts = await getPosts();

  return (
    <section>
      <div className='background background before:bg-[url("/precel_aktualnosci.png")]  w-full h-[27rem] md:h-[15rem] flex items-center justify-center'>
        <h1 className='text-h1 lg:text-h1-tablet md:text-h1-mobile text-[#FBE8CF] text-center font-bold leading-tight'>
          Aktualności
        </h1>
      </div>
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
          3. Ciekawostką jest również pochodzenie nazwy „precel”, która wywodzi
          się z łaciny i oznacza &quot;małe ramionka&quot;. To odniesienie do
          charakterystycznego kształtu precla, który przypomina splecione
          ramiona.
        </p>
        <p className='md:text-p-mobile'>
          To nie legenda, że Dobre Precle możesz już zjeść we Wrocławiu – to
          fakt! Kto spróbuje, ten zrozumie, skąd się wzięła popularność tego
          wypieku. Precle mają swoich fanów na całym świecie i często spożywane
          są jako samodzielna przekąska lub w formie kanapki. Teraz dotarły do
          nas – już wkrótce czekają nas wielkie otwarcia w Katowicach,
          Gliwicach, Krakowie i Bydgoszczy. Przygotuj się na prawdziwą preclową
          ucztę, pełną smaku i tradycji! Zapraszamy na Dobre Precle do naszych
          lokali na terenie całej Polski (już niedługo).
        </p>
      </div>
      <div className='container mx-auto px-[5%]'>
        {posts.map((post: PostTestProps, idx) => {
          return <BlogPost post={post} />;
        })}
      </div>
    </section>
  );
};

export default page;
