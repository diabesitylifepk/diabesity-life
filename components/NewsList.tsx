"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { NewsArticle } from "@/lib/newsContent";
import Link from "next/link";
import { useState, useMemo } from "react";
import { Search } from "lucide-react";

interface NewsListProps {
  news: NewsArticle[];
}

export default function NewsList({ news }: NewsListProps) {
  const { locale } = useLanguage();
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(news.map((article) => article.category)),
    );
    return uniqueCategories.sort();
  }, [news]);

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const filteredNews = useMemo(() => {
    return news.filter((article) => {
      const matchesSearch =
        searchTerm === "" ||
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesCategory =
        selectedCategory === "all" || article.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [news, searchTerm, selectedCategory]);

  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto pt-12 px-6 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        {locale === "ur" ? "خبریں" : "News"}
      </h2>

      {/* Search and Filter Bar */}
      <div className="bg-primary p-6 mb-8 flex flex-col md:flex-row gap-4 lg:gap-8 items-center">
        {/* Search Input with Icon */}
        <div className="flex-1 w-full flex gap-2">
          <div className="flex-1 relative flex items-center border-2 border-white">
            <Search className="absolute left-3 text-white w-5 h-5" />
            <input
              type="text"
              placeholder={locale === "ur" ? "خبریں تلاش کریں" : "Search news"}
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              onKeyPress={handleKeyPress}
              className="w-full pl-11 pr-4 py-2 bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div>
          <Button
            variant="secondary"
            onClick={handleSearch}
            className="px-6 whitespace-nowrap"
          >
            {locale === "ur" ? "تلاش کریں" : "Go"}
          </Button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="text-white font-medium whitespace-nowrap">
            {locale === "ur" ? "فلٹر کریں:" : "Filter news by:"}
          </label>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="px-4 py-2 bg-white border-none focus:outline-none focus:ring-2 focus:ring-white min-w-[150px]"
          >
            <option value="all">{locale === "ur" ? "زمرہ" : "Category"}</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Results count */}
      {searchTerm || selectedCategory !== "all" ? (
        <p className="text-gray-600 mb-4">
          {locale === "ur"
            ? `${news.length} میں سے ${filteredNews.length} مضامین دکھائے جا رہے ہیں`
            : `Showing ${filteredNews.length} of ${news.length} articles`}
        </p>
      ) : null}

      {/* No results message */}
      {filteredNews.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">
            {locale === "ur"
              ? "آپ کے تلاش کے معیار سے مطابقت رکھنے والا کوئی مضمون نہیں ملا۔"
              : "No articles found matching your search criteria."}
          </p>
          <Button
            variant="outlined"
            className="mt-4"
            onClick={() => {
              setSearchInput("");
              setSearchTerm("");
              setSelectedCategory("all");
            }}
          >
            {locale === "ur" ? "فلٹر صاف کریں" : "Clear filters"}
          </Button>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((article, idx) => (
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
                    {locale === "ur" && article.titleUr
                      ? article.titleUr
                      : article.title}
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
      )}
    </div>
  );
}
