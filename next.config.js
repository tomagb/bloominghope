/** @type {import('next').NextConfig} */
const nextConfig = {
  // Output static HTML for CDN delivery
  output: 'export',

  // Add trailing slashes to routes for better CDN compatibility
  trailingSlash: true,

  // Optional: Configure asset prefix for CDN
  // assetPrefix: process.env.ASSET_PREFIX || '',

  // Enable image optimization
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
