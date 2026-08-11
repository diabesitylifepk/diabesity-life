"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { ResearchArticle } from "@/lib/researchContent";
import Link from "next/link";

interface ResearchListProps {
  research: ResearchArticle[];
}

export default function ResearchList({ research }: ResearchListProps) {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto pt-12 px-6 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        {locale === "ur" ? "تحقیقی مضامین" : "Research Articles"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {research.map((article, idx) => (
          <Link key={idx} href={`/research/${article.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white py-0 rounded-none h-full cursor-pointer">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={article.image}
                  alt={article.imageAlt}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                  {new Date(article.date).toLocaleDateString(
                    locale === "ur" ? "ur-PK" : "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    },
                  )}
                </div>
              </div>
              <div className="px-6 pt-2 pb-6">
                <p className="text-gray-600 text-xs mb-2 italic">
                  {article.journal}
                </p>
                <h3
                  className="font-bold text-gray-900 text-lg leading-tight mb-3 line-clamp-3"
                  dir={locale === "ur" ? "rtl" : undefined}
                >
                  {locale === "ur" && article.titleUr
                    ? article.titleUr
                    : article.title}
                </h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
