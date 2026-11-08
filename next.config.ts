import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: { unoptimized: true },
  experimental: {
    cpus: 1,
  },
};

export default nextConfig;
