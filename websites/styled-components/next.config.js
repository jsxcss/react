/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@fullcss/styled-components'],
  compiler: {
    styledComponents: {
      displayName: true,
      ssr: true,
      cssProp: true,
    },
  },
}

module.exports = nextConfig
