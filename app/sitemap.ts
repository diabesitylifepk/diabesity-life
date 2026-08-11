import { getAllBlogArticleSlugs } from "@/lib/blogContent";
import { getAllNewsArticleSlugs } from "@/lib/newsContent";
import { getAllProducts } from "@/lib/productsData";
import { getAllRecipeSlugs } from "@/lib/recipeContent";
import { getAllResearchArticleSlugs } from "@/lib/researchContent";
import type { MetadataRoute } from "next";

const SITE_URL = "https://diabesity.life";

const STATIC_ROUTES: { path: string; priority: number; changeFrequency: "daily" | "weekly" | "monthly" | "yearly" }[] = [
  { path: "/", priority: 1, changeFrequency: "daily" },
  { path: "/about", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blogs", priority: 0.8, changeFrequency: "weekly" },
  { path: "/bmi-calculator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/calorie-counter", priority: 0.6, changeFrequency: "monthly" },
  { path: "/community", priority: 0.5, changeFrequency: "daily" },
  { path: "/community/threads", priority: 0.5, changeFrequency: "daily" },
  { path: "/contact", priority: 0.4, changeFrequency: "yearly" },
  { path: "/daily-care-and-monitoring", priority: 0.7, changeFrequency: "monthly" },
  { path: "/diet", priority: 0.7, changeFrequency: "monthly" },
  { path: "/doctors", priority: 0.7, changeFrequency: "monthly" },
  { path: "/faqs", priority: 0.6, changeFrequency: "monthly" },
  { path: "/glp-diabesity", priority: 0.7, changeFrequency: "monthly" },
  { path: "/glp-hub", priority: 0.7, changeFrequency: "monthly" },
  { path: "/hba1c-translator", priority: 0.6, changeFrequency: "monthly" },
  { path: "/how-to", priority: 0.6, changeFrequency: "monthly" },
  { path: "/hypo-wallet-card", priority: 0.5, changeFrequency: "monthly" },
  { path: "/learn", priority: 0.7, changeFrequency: "monthly" },
  { path: "/medication", priority: 0.7, changeFrequency: "monthly" },
  { path: "/news", priority: 0.8, changeFrequency: "daily" },
  { path: "/privacy-policy", priority: 0.2, changeFrequency: "yearly" },
  { path: "/products", priority: 0.7, changeFrequency: "monthly" },
  { path: "/resources", priority: 0.8, changeFrequency: "weekly" },
  { path: "/terms-of-use", priority: 0.2, changeFrequency: "yearly" },
  { path: "/urdu-guides", priority: 0.7, changeFrequency: "monthly" },
  { path: "/urdu-guides/enjoy-food", priority: 0.6, changeFrequency: "monthly" },
  { path: "/urdu-guides/five-ways-to-move-more", priority: 0.6, changeFrequency: "monthly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((route) => ({
    url: `${SITE_URL}${route.path}`,
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  const blogEntries: MetadataRoute.Sitemap = getAllBlogArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/blogs/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  const newsEntries: MetadataRoute.Sitemap = getAllNewsArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/news/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const researchEntries: MetadataRoute.Sitemap = getAllResearchArticleSlugs().map((slug) => ({
    url: `${SITE_URL}/research/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const recipeEntries: MetadataRoute.Sitemap = getAllRecipeSlugs().map((slug) => ({
    url: `${SITE_URL}/recipes/${slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const productEntries: MetadataRoute.Sitemap = getAllProducts().map((product) => ({
    url: `${SITE_URL}/products/${product.id}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  return [
    ...staticEntries,
    ...blogEntries,
    ...newsEntries,
    ...researchEntries,
    ...recipeEntries,
    ...productEntries,
  ];
}
