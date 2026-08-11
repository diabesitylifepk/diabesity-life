"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogArticle } from "@/lib/blogContent";
import Link from "next/link";

interface BlogsListProps {
  blogs: BlogArticle[];
}

export default function BlogsList({ blogs }: BlogsListProps) {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto pt-12 px-6 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        {locale === "ur" ? "بلاگز" : "Blogs"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog, idx) => (
          <Link key={idx} href={`/blogs/${blog.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none cursor-pointer h-full gap-0">
              <div className="relative h-64 bg-gray-200">
                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                  {new Date(blog.date).toLocaleDateString(
                    locale === "ur" ? "ur-PK" : "en-GB",
                    {
                      day: "numeric",
                      month: "short",
                    },
                  )}
                </div>
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="px-6 py-6">
                <p className="text-gray-600 text-sm mb-2">
                  {locale === "ur" ? "بلاگ" : "Blog"}
                </p>
                <h3
                  className="font-bold text-gray-900 text-xl leading-tight"
                  dir={locale === "ur" && blog.urdu ? "rtl" : undefined}
                >
                  {locale === "ur" && blog.urdu ? blog.urdu.title : blog.title}
                </h3>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
