/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ hostname: "picsum.photos", protocol: "https" }],
  },
}

module.exports = nextConfig
