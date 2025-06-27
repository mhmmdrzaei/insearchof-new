/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
          port: '',
        },
        
      ],
      minimumCacheTTL: 60 * 60 * 24 * 30,
    },
  }

module.exports = nextConfig
