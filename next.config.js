/** @type {import('next').NextConfig} */

const path = require('path')

const includedDirs = [
    path.resolve(__dirname, 'components'),
    path.resolve(__dirname, 'pages'),
    path.resolve(__dirname, 'styles'),
]

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
    webpack: (config, options) => {
        const { dev, isServer } = options

        config.module.rules.push({
            test: /\.svg$/,
            use: ['@svgr/webpack'],
        })

        config.module.rules.push({
            test: /\.(tsx|ts)$/,
            include: includedDirs,
            use: [
                options.defaultLoaders.babel,
                {
                    loader: 'babel-loader',
                    options: {
                        sourceMaps: dev,
                        presets: [['@babel/preset-react', { runtime: 'automatic', importSource: '@emotion/react' }]],
                        plugins: [
                            require.resolve('babel-plugin-macros'),
                            require.resolve('@emotion/babel-plugin'),
                            [require.resolve('@babel/plugin-syntax-typescript'), { isTSX: true }],
                        ],
                    },
                },
            ],
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
