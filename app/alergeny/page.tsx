import { AllergenProduct, Banner } from "@/components";
import { getCachedEntries } from "@/lib/contentful/client";
import type { AllergenProductType, ContentfulAsset } from "@/types";

type AllergenEntryFields = Omit<AllergenProductType, "image" | "pretzelType"> & {
  image?: ContentfulAsset;
  pretzelType?: string | string[];
};

const PDF_PATH = "/wykaz-alergenow-dobre-precle.pdf";

const CATEGORY_TITLES = {
  klasyczne: "Precle Klasyczne",
  slone: "Precle nadziewane na słono",
  slodkie: "Precle nadziewane na słodko",
} as const;

const CATEGORY_ORDER = ["klasyczne", "slone", "slodkie"] as const;

const normalizePretzelType = (
  pretzelType: string | string[] | undefined
): string => {
  if (Array.isArray(pretzelType)) {
    const firstValue = pretzelType[0];
    if (firstValue === "Precle Klasyczne") return "klasyczne";
    if (firstValue === "Precle nadziewane na słono") return "slone";
    if (firstValue === "Precle nadziewane na słodko") return "slodkie";
    return "klasyczne";
  }
  if (typeof pretzelType === "string") return pretzelType;
  return "klasyczne";
};

async function fetchAllergenProducts(): Promise<AllergenProductType[]> {
  try {
    const response = await getCachedEntries<AllergenEntryFields>({
      content_type: "11PNRJYH3Rz6RFkFgWH9EU",
      include: 1,
    });
    return response.items.map((item) => {
      const fields = item.fields;
      return {
        title: fields.title || "",
        image: fields.image?.fields?.file?.url
          ? `https:${fields.image.fields.file.url}`
          : "",
        pretzelType: normalizePretzelType(fields.pretzelType),
        portionWeight: fields.portionWeight || "",
        energyValuePer100: fields.energyValuePer100 || "",
        energyValuePerPortion: fields.energyValuePerPortion || "",
        fatPer100: fields.fatPer100 || "",
        fatPerPortion: fields.fatPerPortion || "",
        saturatedFatPer100: fields.saturatedFatPer100 || "",
        saturatedFatPerPortion: fields.saturatedFatPerPortion || "",
        carbohydratesPer100: fields.carbohydratesPer100 || "",
        carbohydratesPerPortion: fields.carbohydratesPerPortion || "",
        sugarsPer100: fields.sugarsPer100 || "",
        sugarsPerPortion: fields.sugarsPerPortion || "",
        fiberPer100: fields.fiberPer100 || "",
        fiberPerPortion: fields.fiberPerPortion || "",
        proteinPer100: fields.proteinPer100 || "",
        proteinPerPortion: fields.proteinPerPortion || "",
        saltPer100: fields.saltPer100 || "",
        saltPerPortion: fields.saltPerPortion || "",
      };
    });
  } catch (err) {
    console.error("Error fetching allergen products:", err);
    return [];
  }
}

const Alergeny = async () => {
  const products = await fetchAllergenProducts();

  const grouped = products.reduce(
    (acc, product) => {
      const type = product.pretzelType || "klasyczne";
      if (!acc[type]) acc[type] = [];
      acc[type].push(product);
      return acc;
    },
    {} as Record<string, AllergenProductType[]>
  );

  return (
    <section>
      <Banner path='/precel_aktualnosci.webp' altName='Precle alergeny'>
        Alergeny
      </Banner>

      <div className='container mx-auto px-[4%] mt-[50px] mb-[40px] md:my-[30px]'>
        <h4 className='text-black text-[21px] md:text-p-mobile sm:text-[20px] font-bold mb-4'>
          Szczegółowe informacje o alergenach w naszych produktach
        </h4>
        <p className='mb-4 md:text-p-mobile'>
          W DOBRE PRECLE dbamy o bezpieczeństwo naszych klientów. Poniżej
          znajdziesz szczegółowe informacje o alergenach zawartych w każdym z
          naszych produktów. Informacje te są aktualizowane na bieżąco i
          odpowiadają rzeczywistemu składowi naszych wyrobów.
        </p>
        <p className=' md:text-p-mobile'>
          Wszystkie nasze precle są przygotowywane w tej samej piekarni, dlatego
          istnieje ryzyko zanieczyszczenia krzyżowego alergenami. Jeśli masz
          alergię pokarmową, zalecamy konsultację z personelem przed zakupem.
        </p>
      </div>
      <div className='bg-[#ed8f28] my-8'>
        <div className='container mx-auto px-[4%] py-4 flex flex-row items-center justify-between gap-3'>
          <p className='text-white font-semibold md:text-p-mobile'>
            WYKAZ ALERGENÓW ZAWARTYCH
            <br />W PRODUKTACH DOBRE PRECLE
          </p>
          <a
            href={PDF_PATH}
            target='_blank'
            rel='noopener noreferrer'
            className='inline-flex items-center justify-center gap-2 bg-[#971C25] hover:bg-[#7f1a22] text-white font-semibold px-6 py-3 rounded-lg transition-colors md:text-p-mobile'
          >
            Zobacz PDF
          </a>
        </div>
      </div>
      {/* <div className='container mx-auto px-[4%]'>
        {CATEGORY_ORDER.map((category) => {
          const items = grouped[category];
          if (!items || items.length === 0) return null;

          return (
            <div key={category} className='mb-12'>
              <h2 className='text-[40px] lg:text-[25px] font-bold text-[#8B0000] mb-6 text-center uppercase'>
                {CATEGORY_TITLES[category]}
              </h2>
              <div className='space-y-8'>
                {items.map((product, idx) => (
                  <AllergenProduct
                    key={product.title || idx}
                    product={product}
                    priority={category === "klasyczne" && idx === 0}
                  />
                ))}
              </div>
            </div>
          );
        })}
      </div> */}
    </section>
  );
};

export default Alergeny;
