import RecipeClient from "@/components/RecipeClient";
import { getRecipe } from "@/lib/recipeContent";
import { buildArticleJsonLd, buildArticleMetadata, jsonLdScript } from "@/lib/seo";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type PageProps = { params: Promise<{ slug: string }> };

function describeRecipe(recipe: { title: string; calories: number; sugarLevel: string }) {
  return `${recipe.title} — ${recipe.calories} kcal, ${recipe.sugarLevel.toLowerCase()} sugar. A diabesity-friendly Pakistani recipe.`;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const recipe = getRecipe(slug);
  if (!recipe) return {};

  return buildArticleMetadata({
    title: recipe.title,
    description: describeRecipe(recipe),
    path: `/recipes/${recipe.slug}`,
    image: recipe.image,
  });
}

export default async function RecipePage({ params }: PageProps) {
  const { slug } = await params;
  const recipe = getRecipe(slug);

  if (!recipe) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd({
    headline: recipe.title,
    description: describeRecipe(recipe),
    path: `/recipes/${recipe.slug}`,
    image: recipe.image,
    medical: false,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLdScript(jsonLd) }}
      />
      <RecipeClient recipe={recipe} />
    </>
  );
}
