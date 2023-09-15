/** @type {import('next').NextConfig} */

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
    unoptimized: true,
  },
};

module.exports = nextConfig;
