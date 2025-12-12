import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: !!process.env.UNOPTIMIZED
  },
  basePath: process.env.NODE_ENV === "production" ? process.env.BASEPATH : undefined,
  assetPrefix: process.env.ASSETPREFIX === "production" ? process.env.ASSETPREFIX : undefined,
  output: process.env.OUTPUT === "production" ? "export" : undefined,
  distDir: process.env.DISTDIR === "production" ? process.env.DISTDIR : undefined,
};

export default nextConfig;
