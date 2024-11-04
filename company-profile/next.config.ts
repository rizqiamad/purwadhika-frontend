import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dlcdnwebimgs.asus.com',
        port: '',
        pathname: '/gain/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
