"use client";

interface AllergenProductProps {
  product: {
    title: string;
    image: string;
    pretzelType: string;
    // Nowe pola z pojedynczego content modelu - tylko liczby
    energyValuePer100?: string;
    energyValuePerPortion?: string;
    fatPer100?: string;
    fatPerPortion?: string;
    saturatedFatPer100?: string;
    saturatedFatPerPortion?: string;
    carbohydratesPer100?: string;
    carbohydratesPerPortion?: string;
    sugarsPer100?: string;
    sugarsPerPortion?: string;
    fiberPer100?: string;
    fiberPerPortion?: string;
    proteinPer100?: string;
    proteinPerPortion?: string;
    saltPer100?: string;
    saltPerPortion?: string;
  };
}

const AllergenProduct = ({ product }: AllergenProductProps) => {
  // Stałe nazwy wierszy wartości odżywczych z informacją o wcięciu
  const nutritionLabels = [
    { label: "Wartość energetyczna", indent: false, unit: "" },
    { label: "Tłuszcz", indent: false, unit: "g" },
    { label: "w tym kwasy nasycone", indent: true, unit: "g" },
    { label: "Węglowodany", indent: false, unit: "g" },
    { label: "w tym cukry", indent: true, unit: "g" },
    { label: "Błonnik", indent: false, unit: "g" },
    { label: "Białko", indent: false, unit: "g" },
    { label: "Sól", indent: false, unit: "g" },
  ];

  // Mapowanie danych z produktu do wartości - tylko liczby
  const nutritionData = [
    {
      per100: product.energyValuePer100 || "339 kcal / 1 420 kJ",
      perPortion: product.energyValuePerPortion || "509 kcal / 2 130 kJ",
    },
    {
      per100: product.fatPer100 || "15,9",
      perPortion: product.fatPerPortion || "23,9",
    },
    {
      per100: product.saturatedFatPer100 || "5,7",
      perPortion: product.saturatedFatPerPortion || "8,6",
    },
    {
      per100: product.carbohydratesPer100 || "45,7",
      perPortion: product.carbohydratesPerPortion || "68,6",
    },
    {
      per100: product.sugarsPer100 || "2,87",
      perPortion: product.sugarsPerPortion || "4,31",
    },
    {
      per100: product.fiberPer100 || "3,96",
      perPortion: product.fiberPerPortion || "5,94",
    },
    {
      per100: product.proteinPer100 || "9,58",
      perPortion: product.proteinPerPortion || "14,37",
    },
    {
      per100: product.saltPer100 || "1,2",
      perPortion: product.saltPerPortion || "1,8",
    },
  ];

  return (
    <div className='bg-[#FBE8CF] rounded-lg shadow-lg overflow-hidden'>
      {/* Desktop layout - domyślny */}
      <div className='flex flex-row lg:flex-col'>
        {/* Left side - Image */}
        <div className='w-1/2 lg:w-full relative'>
          <img
            src={product.image}
            alt={product.title}
            className='w-full h-full object-cover'
            style={{
              minHeight: "400px",
            }}
          />
          {/* <div className='absolute inset-0 bg-black bg-opacity-40 flex items-end'>
            <div className='p-6 text-white'>
              <h3 className='text-2xl font-bold mb-2'>{product.title}</h3>
            </div>
          </div> */}
        </div>

        {/* Right side - Table */}
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
                    na porcję (150 g)
                  </th>
                </tr>
              </thead>
              <tbody>
                {nutritionLabels.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
                  >
                    <td className='border border-gray-300 px-4 py-2'>
                      <span
                        className={`block ${item.indent ? "ml-6" : ""} ${
                          !item.indent ? "font-bold" : ""
                        }`}
                      >
                        {item.label}
                      </span>
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-center'>
                      {index === 0
                        ? nutritionData[index].per100
                        : `${nutritionData[index].per100} ${item.unit}`}
                    </td>
                    <td className='border border-gray-300 px-4 py-2 text-center'>
                      {index === 0
                        ? nutritionData[index].perPortion
                        : `${nutritionData[index].perPortion} ${item.unit}`}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllergenProduct;
