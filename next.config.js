/** @type {import('next').NextConfig} */
const withExportImages = require("next-export-optimize-images");

const nextConfig = {
  output: "export",
  reactStrictMode: false,
  images: {
    domains: ["localhost"],
  },
};
module.exports = withExportImages(nextConfig);
