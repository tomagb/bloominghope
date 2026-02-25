/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static HTML for CDN delivery
  output: 'export',

  // Optional: Configure asset prefix for CDN
  // assetPrefix: process.env.ASSET_PREFIX || '',

  // Enable image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
