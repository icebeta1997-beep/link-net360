import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  distDir: 'build_out',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
