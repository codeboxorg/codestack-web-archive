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
            {
                source: '/graphql-proxy',
                destination: `${process.env.NEXT_SERVER_GRAPHQL_BASE_API_URL}`,
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
        NEXT_SERVER_GRAPHQL_BASE_API_URL: process.env.NEXT_SERVER_GRAPHQL_BASE_API_URL,
        NEXT_PUBLIC_GITHUB_CLIENT_ID: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
    },
}

module.exports = nextConfig
