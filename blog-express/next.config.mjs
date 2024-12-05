/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns:[
      {
        hostname: 'www.blogger.com'
      },
      {
        hostname: 'purwadhika-frontend-blog.vercel.app'
      },
      {
        hostname: 'localhost'
      },
      {
        hostname: 'res.cloudinary.com'
      }
    ]
  }
};

export default nextConfig;
