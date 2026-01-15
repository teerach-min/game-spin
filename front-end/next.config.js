/** @type {import('next').NextConfig} */
const nextConfig = {
  // Explicitly expose environment variable for build-time embedding
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
  },
};

module.exports = nextConfig;
