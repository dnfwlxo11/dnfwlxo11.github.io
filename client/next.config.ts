import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: !!process.env.UNOPTIMIZED
  },
  assetPrefix: process.env.ASSETPREFIX,
  output: process.env.NODE_ENV === 'development' ? undefined : "export",
  distDir: process.env.DISTDIR
};

export default nextConfig;
