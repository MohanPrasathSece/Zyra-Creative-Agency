import type { MetadataRoute } from "next";
import { projects } from "@/content/portfolio";
import { siteUrl } from "@/content/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const routes = [
    { url: `${siteUrl}/`, priority: 1, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/#work`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${siteUrl}/#contact`, priority: 0.6, changeFrequency: "monthly" as const },
  ];
  const projectRoutes = projects
    .filter((p) => p.status !== "placeholder")
    .map((p) => ({
      url: `${siteUrl}/projects/${p.slug}`,
      lastModified: now,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    }));
  return [...routes, ...projectRoutes].map((r) => ({ lastModified: now, ...r }));
}
