import type { Metadata } from "next";

export const SITE_URL = "https://diabesity.life";
export const SITE_NAME = "Diabesity Life";

interface ArticleMetaInput {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedDate?: string;
}

/**
 * Builds a per-page Metadata object (title, description, canonical, OG, Twitter)
 * for content pages that otherwise fall back to the site-wide default from
 * app/layout.tsx.
 */
export function buildArticleMetadata({
  title,
  description,
  path,
  image,
  publishedDate,
}: ArticleMetaInput): Metadata {
  const url = `${SITE_URL}${path}`;
  const images = image ? [{ url: image.startsWith("http") ? image : `${SITE_URL}${image}` }] : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images,
      type: publishedDate ? "article" : "website",
      ...(publishedDate ? { publishedTime: publishedDate } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((i) => i.url),
    },
  };
}

/** Safely serializes an object for embedding in a <script type="application/ld+json"> tag. */
export function jsonLdScript(data: unknown): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

interface ArticleJsonLdInput {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished?: string;
  author?: string;
  medical?: boolean;
}

/** Builds Article / MedicalWebPage JSON-LD for a content page. */
export function buildArticleJsonLd({
  headline,
  description,
  path,
  image,
  datePublished,
  author,
  medical = true,
}: ArticleJsonLdInput) {
  const url = `${SITE_URL}${path}`;
  return {
    "@context": "https://schema.org",
    "@type": medical ? "MedicalWebPage" : "Article",
    headline,
    description,
    url,
    ...(image ? { image: image.startsWith("http") ? image : `${SITE_URL}${image}` } : {}),
    ...(datePublished ? { datePublished } : {}),
    ...(author ? { author: { "@type": "Person", name: author } } : {}),
    publisher: {
      "@type": "MedicalOrganization",
      name: SITE_NAME,
      url: SITE_URL,
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };
}
