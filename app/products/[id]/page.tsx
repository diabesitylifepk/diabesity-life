import ProductDetailClient from "@/components/ProductDetailClient";
import { getAllProducts, getProductById } from "@/lib/productsData";
import { buildArticleJsonLd, buildArticleMetadata, jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const products = getAllProducts();
  return products.map((product) => ({
    id: product.id,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params,
}: ProductDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const product = getProductById(id);
  if (!product) return {};

  const title = `${product.name} (${product.genericName})`;
  return buildArticleMetadata({
    title,
    description: product.description,
    path: `/products/${product.id}`,
    image: product.logoImage,
  });
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { id } = await params;
  const product = getProductById(id);

  if (!product) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd({
    headline: `${product.name} (${product.genericName})`,
    description: product.description,
    path: `/products/${product.id}`,
    image: product.logoImage,
    medical: true,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <ProductDetailClient product={product} />
    </>
  );
}
