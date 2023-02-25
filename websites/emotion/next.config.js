/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@jsxcss/emotion'],
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
