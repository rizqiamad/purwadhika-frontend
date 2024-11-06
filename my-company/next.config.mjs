const nextConfig = {
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
