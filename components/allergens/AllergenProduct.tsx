import Image from "next/image";
import type { AllergenProductType } from "@/types";

interface AllergenProductProps {
  product: AllergenProductType;
  priority?: boolean;
}

const NUTRITION_ROWS = [
  {
    label: "Wartość energetyczna",
    indent: false,
    unit: "",
    keyPer100: "energyValuePer100",
    keyPerPortion: "energyValuePerPortion",
    fallbackPer100: "339 kcal / 1 420 kJ",
    fallbackPerPortion: "509 kcal / 2 130 kJ",
  },
  {
    label: "Tłuszcz",
    indent: false,
    unit: "g",
    keyPer100: "fatPer100",
    keyPerPortion: "fatPerPortion",
    fallbackPer100: "15,9",
    fallbackPerPortion: "23,9",
  },
  {
    label: "w tym kwasy nasycone",
    indent: true,
    unit: "g",
    keyPer100: "saturatedFatPer100",
    keyPerPortion: "saturatedFatPerPortion",
    fallbackPer100: "5,7",
    fallbackPerPortion: "8,6",
  },
  {
    label: "Węglowodany",
    indent: false,
    unit: "g",
    keyPer100: "carbohydratesPer100",
    keyPerPortion: "carbohydratesPerPortion",
    fallbackPer100: "45,7",
    fallbackPerPortion: "68,6",
  },
  {
    label: "w tym cukry",
    indent: true,
    unit: "g",
    keyPer100: "sugarsPer100",
    keyPerPortion: "sugarsPerPortion",
    fallbackPer100: "2,87",
    fallbackPerPortion: "4,31",
  },
  {
    label: "Błonnik",
    indent: false,
    unit: "g",
    keyPer100: "fiberPer100",
    keyPerPortion: "fiberPerPortion",
    fallbackPer100: "3,96",
    fallbackPerPortion: "5,94",
  },
  {
    label: "Białko",
    indent: false,
    unit: "g",
    keyPer100: "proteinPer100",
    keyPerPortion: "proteinPerPortion",
    fallbackPer100: "9,58",
    fallbackPerPortion: "14,37",
  },
  {
    label: "Sól",
    indent: false,
    unit: "g",
    keyPer100: "saltPer100",
    keyPerPortion: "saltPerPortion",
    fallbackPer100: "1,2",
    fallbackPerPortion: "1,8",
  },
] as const;

const optimizedContentfulUrl = (url: string, width: number) => {
  if (!url) return url;
  // images.ctfassets.net obsługuje natywnie transformacje przez query params
  return `${url}${url.includes("?") ? "&" : "?"}fm=webp&w=${width}&q=80`;
};

const AllergenProduct = ({ product, priority = false }: AllergenProductProps) => {
  return (
    <div className='bg-[#FBE8CF] rounded-lg shadow-lg overflow-hidden'>
      <div className='flex flex-row lg:flex-col'>
        <div className='w-1/2 lg:w-full relative aspect-[4/3] lg:aspect-[16/9]'>
          {product.image && (
            <Image
              src={optimizedContentfulUrl(product.image, 800)}
              alt={product.title}
              fill
              sizes='(max-width: 1024px) 100vw, 50vw'
              className='object-cover lg:object-contain'
              priority={priority}
              loading={priority ? "eager" : "lazy"}
            />
          )}
        </div>

        <div className='w-1/2 lg:w-full px-6 lg:px-0 flex flex-col justify-center'>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse border border-gray-300'>
              <thead>
                <tr className='bg-[#8B0000]'>
                  <th className='border border-gray-300 px-4 py-2 text-left font-semibold text-white'>
                    Wartości odżywcze
                  </th>
                  <th className='border border-gray-300 px-4 py-2 text-center font-semibold text-white'>
                    na 100 g
                  </th>
                  <th className='border border-gray-300 px-4 py-2 text-center font-semibold text-white'>
                    na porcję{" "}
                    {product.portionWeight && `(${product.portionWeight} g)`}
                  </th>
                </tr>
              </thead>
              <tbody>
                {NUTRITION_ROWS.map((row, index) => {
                  const per100 =
                    (product[row.keyPer100 as keyof AllergenProductType] as string) ||
                    row.fallbackPer100;
                  const perPortion =
                    (product[row.keyPerPortion as keyof AllergenProductType] as string) ||
                    row.fallbackPerPortion;
                  return (
                    <tr
                      key={row.label}
                      className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                    >
                      <td className='border border-gray-300 px-4 py-2'>
                        <span
                          className={`block ${row.indent ? "ml-6" : "font-bold"}`}
                        >
                          {row.label}
                        </span>
                      </td>
                      <td className='border border-gray-300 px-4 py-2 text-center'>
                        {index === 0 ? per100 : `${per100} ${row.unit}`}
                      </td>
                      <td className='border border-gray-300 px-4 py-2 text-center'>
                        {index === 0 ? perPortion : `${perPortion} ${row.unit}`}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllergenProduct;
