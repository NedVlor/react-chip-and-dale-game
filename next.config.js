/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    output: 'export',
    basePath: '/chip-and-dale-game',
}

module.exports = nextConfig
