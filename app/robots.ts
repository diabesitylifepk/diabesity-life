import type { MetadataRoute } from "next";

const SITE_URL = "https://diabesity.life";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/api/",
        "/dashboard",
        "/login",
        "/signup",
        "/verify-email",
        "/auth/",
        "/community/create",
        "/community/create-thread",
      ],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
