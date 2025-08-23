/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // avoids Next image optimization issues on AWS without config
  },
  trailingSlash: false, // optional, works better for SSR
};

export default nextConfig;
