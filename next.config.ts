import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
    images: {
        remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn-i.pr.trt.com.tr',
        pathname: '/**',
      },     
      {
        protocol: 'https',
        hostname: 'images-cdn.trtworld.com',
        pathname: '/**',
      },
    ],
  },
};

export default nextConfig;
