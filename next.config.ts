import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  serverExternalPackages: ['@prisma/client', 'prisma'],
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
}

export default nextConfig