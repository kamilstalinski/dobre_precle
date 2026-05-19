import { createClient } from "contentful";
import { unstable_cache } from "next/cache";

export const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID!,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
});

type EntriesQuery = Parameters<typeof client.getEntries>[0];

export const getCachedEntries = unstable_cache(
  async (query: EntriesQuery) => {
    const response = await client.getEntries(query);
    return JSON.parse(
      JSON.stringify({ items: response.items, total: response.total })
    ) as { items: any[]; total: number };
  },
  ["contentful-entries"],
  { revalidate: 3600, tags: ["contentful"] }
);
