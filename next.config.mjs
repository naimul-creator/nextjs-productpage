/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
    images: {
      domains: ['res.cloudinary.com', 'hostname'], // একাধিক hostname যুক্ত করুন
    },
  };
  
  export default nextConfig;
  