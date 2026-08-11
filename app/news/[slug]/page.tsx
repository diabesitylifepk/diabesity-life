import NewsArticleClient from "@/components/NewsArticleClient";
import { getNewsArticle } from "@/lib/newsContent";
import { buildArticleJsonLd, buildArticleMetadata, jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getNewsArticle(slug);
  if (!article) return {};

  return buildArticleMetadata({
    title: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    image: article.image,
    publishedDate: article.date,
  });
}

export default async function NewsArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getNewsArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd({
    headline: article.title,
    description: article.excerpt,
    path: `/news/${article.slug}`,
    image: article.image,
    datePublished: article.date,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <NewsArticleClient article={article} />
    </>
  );
}
