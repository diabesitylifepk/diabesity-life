import ResearchArticleClient from "@/components/ResearchArticleClient";
import { getResearchArticle } from "@/lib/researchContent";
import { buildArticleJsonLd, buildArticleMetadata, jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getResearchArticle(slug);
  if (!article) return {};

  return buildArticleMetadata({
    title: article.title,
    description: `${article.title} — ${article.journal}`,
    path: `/research/${article.slug}`,
    image: article.image,
    publishedDate: article.date,
  });
}

export default async function ResearchArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const article = getResearchArticle(slug);

  if (!article) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd({
    headline: article.title,
    description: `${article.title} — ${article.journal}`,
    path: `/research/${article.slug}`,
    image: article.image,
    datePublished: article.date,
    author: article.authors,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <ResearchArticleClient article={article} />
    </>
  );
}
