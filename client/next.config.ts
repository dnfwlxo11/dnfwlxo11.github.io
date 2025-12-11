import type { NextConfig } from "next";

const assetPrefix = process.env.assetPrefix ? process.env.assetPrefix : "./";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true
  },
  assetPrefix: assetPrefix,
  output: "export",
  distDir: "../docs_next"
};

export default nextConfig;
