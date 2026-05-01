import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/",
        permanent: false
      },
      {
        source: "/projects",
        destination: "/research",
        permanent: false
      },
      {
        source: "/collaborations",
        destination: "/research",
        permanent: false
      },
      {
        source: "/news",
        destination: "/updates-gallery",
        permanent: false
      },
      {
        source: "/gallery",
        destination: "/updates-gallery",
        permanent: false
      },
      {
        source: "/service",
        destination: "/leadership",
        permanent: false
      }
    ];
  }
};

export default nextConfig;
