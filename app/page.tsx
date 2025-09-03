import dynamic from "next/dynamic";
import { AboutSection, MenuSection, LocationSection } from "@/components";
import { client } from "@/lib/contentful/client";

// Dynamically import client components to avoid SSR issues
const HeroSection = dynamic(
  () => import("@/components").then((mod) => ({ default: mod.HeroSection })),
  {
    ssr: false,
    loading: () => (
      <div className='h-[40rem] md:h-[25rem] bg-[#FBE8CF] flex items-center justify-center'>
        <div className='animate-pulse text-xl'>Loading...</div>
      </div>
    ),
  },
);

const ContactSection = dynamic(
  () => import("@/components").then((mod) => ({ default: mod.ContactSection })),
  {
    ssr: false,
    loading: () => (
      <div className='h-[200px] bg-[#ED8F28] flex items-center justify-center'>
        <div className='animate-pulse text-white text-xl'>Loading...</div>
      </div>
    ),
  },
);

interface SlideType {
  title: string;
  description?: string;
  image: string;
  link?: string;
}

export default async function Home() {
  let slides: SlideType[] = [];

  try {
    const response = await client.getEntries({
      content_type: "slider",
      include: 2,
    });

    slides = response.items.map((item: any) => item.fields);
  } catch (error) {
    console.error("Error fetching slides:", error);
    // Continue with empty slides array
  }

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
