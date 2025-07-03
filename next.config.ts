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
    compiler: {
    styledComponents: true, //amacım styled-components Next.js ile Server-Side Rendering (SSR) uyumlu çalışması
  },
};

export default nextConfig;
