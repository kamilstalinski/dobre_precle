import { LocationDetails } from "@/components";
import { client } from "@/lib/contentful/client";
import { LocationType } from "@/types";

const LocationDetailPage = async ({
  params,
}: {
  params: { locationSlug: string };
}) => {
  let location: LocationType | null = null;
  let error: string | null = null;

  try {
    const response = await client.getEntries({
      content_type: "localization",
      "fields.id": params.locationSlug,
      include: 2,
    });

    if (response.items.length === 0) {
      throw new Error("Location not found");
    }

    location = response.items[0].fields as LocationType;
  } catch (err) {
    error =
      err instanceof Error ? err.message : "Failed to fetch location data";
    console.error("Failed to fetch location data:", err);
  }

  if (error || !location) {
    return (
      <section className='bg-text-color min-h-screen flex items-center justify-center'>
        <div className='text-center text-white'>
          <h1 className='text-2xl font-bold mb-4'>Błąd</h1>
          <p>{error || "Lokalizacja nie została znaleziona"}</p>
        </div>
      </section>
    );
  }

  return (
    <section className='bg-text-color'>
      <LocationDetails location={location} />
    </section>
  );
};

export default LocationDetailPage;
