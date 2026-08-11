"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsArticle } from "@/lib/newsContent";

interface NewsArticleClientProps {
  article: NewsArticle;
}

export default function NewsArticleClient({
  article,
}: NewsArticleClientProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col">
      {/* News Article Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          {/* Title */}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
            dir={locale === "ur" ? "rtl" : undefined}
          >
            {locale === "ur" && article.titleUr ? article.titleUr : article.title}
          </h1>

          {/* Date */}
          <div className="flex items-center gap-4 mb-8 text-gray-600">
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString(
                locale === "ur" ? "ur-PK" : "en-GB",
                {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                },
              )}
            </time>
          </div>

          {/* Featured Image */}
          <div className="mb-12">
            <Image
              src={article.image}
              alt={article.imageAlt}
              width={800}
              height={384}
              className="w-full h-96 object-cover"
            />
          </div>

          {/* Content */}
          <div
            className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
            dir={locale === "ur" ? "rtl" : undefined}
          >
            {locale === "ur" && article.urduContent
              ? article.urduContent
              : article.content}
          </div>
        </div>
      </article>
    </div>
  );
}
