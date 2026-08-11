import BlogPostClient from "@/components/BlogPostClient";
import { getBlogArticle, getAllBlogArticleSlugs } from "@/lib/blogContent";
import { buildArticleJsonLd, buildArticleMetadata, jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogArticleSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = getBlogArticle(slug);
  if (!blog) return {};

  return buildArticleMetadata({
    title: blog.title,
    description: blog.excerpt ?? blog.title,
    path: `/blogs/${blog.slug}`,
    image: blog.image,
    publishedDate: blog.date,
  });
}

export default async function BlogPostPage({ params }: PageProps) {
  const resolvedParams = await params;
  const blog = getBlogArticle(resolvedParams.slug);

  if (!blog) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd({
    headline: blog.title,
    description: blog.excerpt ?? blog.title,
    path: `/blogs/${blog.slug}`,
    image: blog.image,
    datePublished: blog.date,
    author: blog.author,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <BlogPostClient blog={blog} />
    </>
  );
}
