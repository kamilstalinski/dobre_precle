import { createClient } from "contentful";
import { unstable_cache } from "next/cache";
import type { ContentfulEntry } from "@/types";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

type EntriesQuery = Parameters<typeof client.getEntries>[0];

type CachedEntries<T> = {
  items: ContentfulEntry<T>[];
  total: number;
};

const fetchEntries = unstable_cache(
  async (query: EntriesQuery) => {
    const response = await client.getEntries(query);
    return JSON.parse(
      JSON.stringify({ items: response.items, total: response.total })
    ) as CachedEntries<unknown>;
  },
  ["contentful-entries"],
  { revalidate: 3600, tags: ["contentful"] }
);

export async function getCachedEntries<T = unknown>(
  query: EntriesQuery
): Promise<CachedEntries<T>> {
  return fetchEntries(query) as Promise<CachedEntries<T>>;
}
