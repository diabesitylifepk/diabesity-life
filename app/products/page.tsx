import ProductsClient from "@/components/ProductsClient";
import { buildArticleMetadata } from "@/lib/seo";
import type { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = buildArticleMetadata({
  title: "Products",
  description:
    "GLP-1 and Semaglutide product formulations available in Pakistan for diabesity management.",
  path: "/products",
});

// The product list itself is static local data (no fetch needed), but
// ProductsClient reads the `?tab=` query param via useSearchParams(), which
// forces Next.js to serve the Suspense fallback ("Loading...") as the
// static HTML shell and only fill in real content client-side after
// hydration. Search crawlers that don't wait for/execute that hydration
// step see an empty page. Forcing per-request rendering means the real
// product content is in the HTML on the very first response.
export const dynamic = "force-dynamic";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ProductsClient />
    </Suspense>
  );
}
