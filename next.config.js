/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  reactStrictMode: false,

  images: {
    minimumCacheTTL: 259200, // 3 dni
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.ctfassets.net",
        port: "",
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GOOGLE_MAPS_API_KEY:
      process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,

    // Server-side environment variables (not exposed to client)
    CONTENTFUL_SPACE_ID: process.env.CONTENTFUL_SPACE_ID,
    CONTENTFUL_ACCESS_TOKEN: process.env.CONTENTFUL_ACCESS_TOKEN,
    CONTENTFUL_REVALIDATE_SECRET: process.env.CONTENTFUL_REVALIDATE_SECRET,
  },
};
module.exports = nextConfig;
