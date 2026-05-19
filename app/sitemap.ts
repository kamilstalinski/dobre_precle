import type { MetadataRoute } from "next";
import { client } from "@/lib/contentful/client";

const BASE_URL = "https://dobreprecle.pl";

export const revalidate = 3600;

const staticRoutes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { path: "", priority: 1.0, changeFrequency: "weekly" },
  { path: "/aktualnosci", priority: 0.8, changeFrequency: "weekly" },
  { path: "/o-nas", priority: 0.8, changeFrequency: "yearly" },
  { path: "/menu", priority: 0.8, changeFrequency: "monthly" },
  { path: "/lokalizacje", priority: 0.8, changeFrequency: "weekly" },
  { path: "/kontakt", priority: 0.8, changeFrequency: "yearly" },
  { path: "/franczyza", priority: 0.8, changeFrequency: "yearly" },
  { path: "/alergeny", priority: 0.6, changeFrequency: "monthly" },
  { path: "/polityka-prywatnosci", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  let locationEntries: MetadataRoute.Sitemap = [];
  try {
    const response = await client.getEntries({
      content_type: "localization",
      include: 0,
    });
    locationEntries = response.items
      .map((item: any) => item.fields?.id)
      .filter((id: unknown): id is string => typeof id === "string")
      .map((id) => ({
        url: `${BASE_URL}/lokalizacje/${id}`,
        lastModified: now,
        changeFrequency: "yearly" as const,
        priority: 0.7,
      }));
  } catch {
    // Contentful niedostępne — sitemap nadal zwraca trasy statyczne.
  }

  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((r) => ({
    url: `${BASE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  return [...staticEntries, ...locationEntries];
}
