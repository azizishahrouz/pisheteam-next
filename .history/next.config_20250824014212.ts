import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
    unoptimized: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(svg|jpg|jpeg|png|gif)$/i,
      type: 'asset/resource',
    });
    return config;
  },
};

export default nextConfig;
