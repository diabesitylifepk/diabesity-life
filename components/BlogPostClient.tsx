"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { BlogArticle } from "@/lib/blogContent";
import RelatedBlogsSidebar from "./RelatedBlogsSidebar";

interface BlogPostClientProps {
  blog: BlogArticle;
}

export default function BlogPostClient({ blog }: BlogPostClientProps) {
  const { locale } = useLanguage();
  const isUrdu = locale === "ur" && !!blog.urdu;

  const currentTitle = isUrdu ? blog.urdu!.title : blog.title;
  const currentAuthor =
    isUrdu && blog.urdu?.author ? blog.urdu.author : blog.author;
  const currentContent = isUrdu ? blog.urdu!.content : blog.content;

  return (
    <div className="flex flex-col">
      {/* Blog Post Content */}
      <article className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Blog Content */}
            <div className="flex-1 lg:max-w-4xl">
              {/* Title */}
              <h1
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight"
                dir={isUrdu ? "rtl" : undefined}
              >
                {currentTitle}
              </h1>

              {/* Date */}
              <div className="flex items-center gap-4 mb-4 text-gray-600">
                <time dateTime={blog.date}>
                  {new Date(blog.date).toLocaleDateString(
                    locale === "ur" ? "ur-PK" : "en-GB",
                    {
                      day: "numeric",
                      month: "long",
                      year: "numeric",
                    },
                  )}
                </time>
              </div>

              {/* Author */}
              {currentAuthor && (
                <p
                  className={`text-md text-gray-900 mb-4 leading-tight italic ${
                    isUrdu ? "float-start text-right" : "float-end"
                  }`}
                >
                  {currentAuthor}
                </p>
              )}

              {/* Featured Image */}
              <div className="mb-12">
                <Image
                  src={blog.image}
                  alt={blog.imageAlt}
                  width={800}
                  height={384}
                  className="w-full h-96 object-cover"
                />
              </div>

              {/* Blog Content */}
              <div
                className="prose prose-lg max-w-none text-gray-700 leading-relaxed"
                dir={isUrdu ? "rtl" : undefined}
              >
                {currentContent}
              </div>
            </div>

            {/* Sidebar - Related Blogs */}
            {blog.relatedBlogs && blog.relatedBlogs.length > 0 && (
              <aside className="lg:w-80 lg:max-w-2xl">
                <div className="lg:sticky lg:top-24">
                  <RelatedBlogsSidebar slugs={blog.relatedBlogs} />
                </div>
              </aside>
            )}
          </div>
        </div>
      </article>
    </div>
  );
}
