import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  async rewrites() {
    // Templates statiques multi-pages servies depuis public/templates/<slug>.
    // Les pages HTML posent <base href="/<slug>/"> pour que leurs liens relatifs restent sous le slug.
    return [
      { source: "/colchis", destination: "/templates/colchis/index.html" },
      { source: "/colchis/:path*", destination: "/templates/colchis/:path*" },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "nathreparation.com",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "osteopathe-kor-pantin.fr",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "cdn.trustindex.io",
      },
    ],
  },
};

export default nextConfig;
