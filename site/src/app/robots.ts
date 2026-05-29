import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/api/", "/admin/"],
    },
    sitemap: "https://crescenthealthpartners.com/sitemap.xml",
    host: "https://crescenthealthpartners.com",
  };
}
