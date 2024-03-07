/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    COINGECKO_API_KEY: process.env.COINGECKO_API_KEY,
  },
};

export default nextConfig;
