import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['@prisma/client', 'prisma']
  },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable static exports for easier deployment
  output: 'standalone',
}

export default nextConfig