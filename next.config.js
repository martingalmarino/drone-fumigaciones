/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['localhost'],
    unoptimized: true,
  },
  env: {
    NEXT_PUBLIC_MAPLIBRE_TOKEN: process.env.NEXT_PUBLIC_MAPLIBRE_TOKEN || '',
  },
}

module.exports = nextConfig
