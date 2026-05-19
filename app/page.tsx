import {
  AboutSection,
  MenuSection,
  LocationSection,
  ContactSection,
  HeroSection,
} from "@/components";
import { getCachedEntries } from "@/lib/contentful/client";

interface SlideType {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

async function fetchSlides(): Promise<SlideType[]> {
  try {
    const response = await getCachedEntries({
      content_type: "slider",
      include: 2,
    });
    return response.items.map((item: any) => item.fields);
  } catch (err) {
    console.error("Error fetching slides:", err);
    return [];
  }
}

export default async function Home() {
  const slides = await fetchSlides();

  return (
    <main>
      <HeroSection slides={slides} />
      <AboutSection />
      <LocationSection />
      <MenuSection />
      <ContactSection />
    </main>
  );
}
