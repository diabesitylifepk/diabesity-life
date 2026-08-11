"use client";

import { Card } from "@/components/ui/card";
import { BlogArticle } from "@/lib/blogContent";
import Image from "next/image";
import Link from "next/link";

interface BlogsClientProps {
  blogs: BlogArticle[];
}

export default function BlogsClient({ blogs }: BlogsClientProps) {
  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-2 max-w-7xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6">
        {/* Introduction Section */}
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              Living with diabesity
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              Find expert advice on diet, medication, and lifestyle changes you
              can make today to take control of your health.
            </p>
          </div>
        </div>
        {/* Hero Section */}
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <Image
            className="relative overflow-hidden bg-cover bg-center"
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2100"
            alt="Blogs"
            width={800}
            height={600}
          />
          {/* <div className="absolute inset-0 bg-gray-500/60"></div> */}
        </div>
      </section>

      {/* Blogs Grid Section */}
      <section className="pb-16 md:pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
            Blogs
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
              <Link key={idx} href={`/blogs/${blog.slug}`}>
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
                      height={300}
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
    </div>
  );
}
