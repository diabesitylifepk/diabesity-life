"use client";

import Image from "next/image";
import { BlogArticle, getBlogArticle } from "@/lib/blogContent";
import Link from "next/link";
import { Card } from "./ui/card";

interface RelatedBlogsProps {
  slugs: string[];
  title?: string;
  className?: string;
}

export default function RelatedBlogs({
  slugs,
  title = "Read more blogs",
  className = "",
}: RelatedBlogsProps) {
  // Fetch blog articles based on the provided slugs
  const blogs = slugs
    .map((slug) => getBlogArticle(slug))
    .filter((blog): blog is BlogArticle => blog !== null);

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className={`py-16 md:py-20 bg-gray-50 ${className}`}>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
          {title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              href={`/blogs/${blog.slug}`}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none cursor-pointer h-full gap-0">
                <div className="relative h-64 bg-gray-200">
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                    {new Date(blog.date).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                    })}
                  </div>
                  <Image
                    src={blog.image}
                    alt={blog.imageAlt}
                    width={400}
                    height={192}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="px-6 py-6">
                  <p className="text-gray-600 text-sm mb-2">Blog</p>
                  <h3 className="font-bold text-gray-900 text-xl leading-tight">
                    {blog.title}
                  </h3>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
