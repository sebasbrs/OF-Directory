import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "public.onlyfans.com",
      },
    ],
  },
};

export default nextConfig;
