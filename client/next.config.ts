import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production"

const nextConfig: NextConfig = {
  images: {
    unoptimized: !!process.env.UNOPTIMIZED
  },
  basePath: isProd ? process.env.BASEPATH : "",
  output: isProd ? "export" : undefined,
  // distDir: isProd ? process.env.DISTDIR : "/docs_next",
};

export default nextConfig;
