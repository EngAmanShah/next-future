/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d1foa0aaimjyw4.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;


