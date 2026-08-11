"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsArticle } from "@/lib/newsContent";
import Image from "next/image";
import Link from "next/link";

interface NewsClientProps {
  news: NewsArticle[];
}

export default function NewsClient({ news }: NewsClientProps) {
  const { locale } = useLanguage();

  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-2 max-w-7xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6">
        {/* Introduction Section */}
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              {locale === "ur" ? "ذیابیسٹی پر تازہ ترین خبریں" : "The frontline on diabesity"}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              {locale === "ur"
                ? "پاکستان میں ذیابیسٹی کی تازہ تحقیق، علاج کی پیش رفت، اور بدلتی ہوئی صورت حال کے لیے آپ کا ضروری ذریعہ۔ باخبر رہیں، آگے رہیں۔"
                : "Your essential source for breaking research, treatment updates, and the evolving story of diabesity across Pakistan. Stay informed, stay ahead."}
            </p>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <Image
            className="relative overflow-hidden bg-cover bg-center"
            src="https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2100"
            alt="News"
            width={800}
            height={600}
          />
          {/* <div className="absolute inset-0 bg-gray-500/60"></div> */}
        </div>
      </section>

      {/* News Grid Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            {locale === "ur" ? "خبریں" : "News"}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {news.map((article, idx) => (
              <Link key={idx} href={`/news/${article.slug}`}>
                <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white py-0 pb-6 rounded-none h-full cursor-pointer">
                  <div className="relative bg-gray-200">
                    <div
                      className={`absolute top-0 left-0 ${article.color} text-white px-3 py-1 text-xs font-semibold`}
                    >
                      {article.category}
                    </div>
                  </div>
                  <div className="p-4 flex flex-col justify-between h-full gap-4">
                    <h3
                      className="font-medium text-gray-900 mb-4 text-lg leading-snug line-clamp-3 min-h-[4.5rem]"
                      dir={locale === "ur" ? "rtl" : undefined}
                    >
                      {locale === "ur" && article.titleUr ? article.titleUr : article.title}
                    </h3>
                    <Image
                      src={article.image}
                      alt={article.title}
                      width={400}
                      height={192}
                      className="w-full h-48 object-cover mb-4"
                    />
                    <Button variant="outlined" size="sm" className="w-fit">
                      {locale === "ur" ? "مزید پڑھیں" : "Read more"}
                    </Button>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
