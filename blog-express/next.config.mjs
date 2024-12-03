/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        hostname: 'www.blogger.com'
      },
      {
        hostname: 'purwadhika-frontend-blog.vercel.app'
      }
    ]
  }
};

export default nextConfig;
