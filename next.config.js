/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "media.licdn.com",
        protocol: "https",
      },
    ],
  },
}

module.exports = nextConfig
