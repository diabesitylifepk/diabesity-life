"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import { Recipe } from "@/lib/recipeContent";
import Link from "next/link";

interface RecipeListProps {
  recipes: Recipe[];
}

export default function RecipeList({ recipes }: RecipeListProps) {
  const { locale } = useLanguage();

  const sugarLevelLabel = (level: "Low" | "Medium" | "High") => {
    if (locale !== "ur") return level;
    switch (level) {
      case "Low":
        return "کم";
      case "Medium":
        return "درمیانہ";
      case "High":
        return "زیادہ";
    }
  };

  return (
    <div className="max-w-4xl lg:max-w-6xl mx-auto pt-12 px-6 lg:px-0">
      <h2 className="text-2xl md:text-3xl font-medium text-gray-900 mb-8">
        {locale === "ur" ? "ترکیبیں" : "Recipes"}
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {recipes.map((recipe, idx) => (
          <Link key={idx} href={`/recipes/${recipe.slug}`}>
            <Card className="overflow-hidden hover:shadow-lg rounded-none transition-shadow bg-white cursor-pointer h-full pb-6 pt-0">
              <div className="relative h-48 bg-gray-200">
                <Image
                  src={recipe.image}
                  alt={recipe.imageAlt}
                  width={400}
                  height={192}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-between px-4 h-48">
                <h3
                  className="font-bold text-gray-900 text-xl leading-tight"
                  dir={locale === "ur" ? "rtl" : undefined}
                >
                  {locale === "ur" && recipe.titleUr
                    ? recipe.titleUr
                    : recipe.title}
                </h3>

                {/* Nutrition Info Grid */}
                <div className="grid grid-cols-3 gap-2 text-center">
                  {/* Calories */}
                  <div className="bg-blue-50 p-3">
                    <div className="text-xs text-gray-600 mb-1">
                      {locale === "ur" ? "کیلوریز" : "KCal"}
                    </div>
                    <div className="text-lg font-bold text-primary">
                      {recipe.calories}
                    </div>
                  </div>

                  {/* Carbs */}
                  <div className="bg-purple-50 p-3">
                    <div className="text-xs text-gray-600 mb-1">
                      {locale === "ur" ? "کاربس" : "Carbs"}
                    </div>
                    <div className="text-lg font-bold">{recipe.carbs}</div>
                  </div>

                  {/* Sugars with Level Badge */}
                  <div className={`bg-primary p-3 text-white`}>
                    <div className="text-xs mb-1">
                      {locale === "ur" ? "شکر" : "Sugars"}
                    </div>
                    <div className="text-lg font-bold">{recipe.sugars}</div>
                    <div className="text-xs mt-1">
                      ({sugarLevelLabel(recipe.sugarLevel)})
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
}
