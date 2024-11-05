/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.ctfassets.net',
        port: '',
        pathname: `/${process.env.CONTENTFUL_SPACE_ID}/**`,
        search: '',
      },
      {
        hostname: 'www.blogger.com'
      }
    ],
  },
};

export default nextConfig;
