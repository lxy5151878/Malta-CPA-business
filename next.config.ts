import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  agentRules: false,
  output: "export",
  images: { unoptimized: true },
  experimental: {
    cpus: 1,
  },
  turbopack: {
    root: __dirname,
  },
};
module.exports = nextConfig;
