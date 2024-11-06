import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com',
        pathname: '/gain/**',
      },
      {
        protocol: 'https',
        hostname: 'press.asus.com',
      },
    ],
  },
};

export default nextConfig;
