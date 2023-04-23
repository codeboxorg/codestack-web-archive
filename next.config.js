/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  async rewrites() {
    return [
      {
        source: '/proxy/:path*',
        destination: `${process.env.NEXT_SERVER_BASE_API_URL}/:path*`,
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    })
    return config
  },
  env: {
    NEXT_SERVER_BASE_URL: process.env.NEXT_SERVER_BASE_URL,
    NEXT_SERVER_BASE_API_URL: process.env.NEXT_SERVER_BASE_API_URL,
    NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    NEXT_PUBLIC_GITHUB_CLIENT_SECRET:
      process.env.NEXT_PUBLIC_GITHUB_CLIENT_SECRET,
    NEXT_PUBLIC_GRAPHQL_BASE_API_URL:
      process.env.NEXT_PUBLIC_GRAPHQL_BASE_API_URL,
  },
}

module.exports = nextConfig
