import type { MetadataRoute } from "next";

import { getBlogPostSlugs } from "./balinjera/balinjera-content";

const DEFAULT_SITE_URL = "https://sitekept-templates.vercel.app";

function getSiteUrl() {
  return process.env["NEXT_PUBLIC_SITE_URL"] ?? DEFAULT_SITE_URL;
}

function absoluteUrl(path: string) {
  return new URL(path, getSiteUrl()).toString();
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "/balinjera",
    "/balinjera/about",
    "/balinjera/menu",
    "/balinjera/events",
    "/balinjera/blog",
    "/balinjera/accessibility",
  ];
  const articleRoutes = getBlogPostSlugs().map(
    (slug) => `/balinjera/blog/${slug}`
  );

  return [...staticRoutes, ...articleRoutes].map((route) => ({
    url: absoluteUrl(route),
    changeFrequency: "weekly",
    priority: route === "/balinjera" ? 0.8 : 0.6,
  }));
}
