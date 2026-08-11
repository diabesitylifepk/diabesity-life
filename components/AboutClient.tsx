"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { Home, Lightbulb, Settings, Trees } from "lucide-react";
import Image from "next/image";
import { List } from "./BlogTemplate";

const missionIcons = [Lightbulb, Settings, Home, Trees];
const missionColors = [
  "text-orange-500",
  "text-yellow-500",
  "text-blue-500",
  "text-green-500",
];

export default function AboutClient() {
  const { t } = useLanguage();

  const missionCards = [0, 1, 2, 3].map((i) => ({
    icon: missionIcons[i],
    color: missionColors[i],
    title: t(`about.mission.card${i}Title`),
    description: t(`about.mission.card${i}Desc`),
  }));

  const listItems = [0, 1, 2, 3].map((i) => t(`about.aboutUs.list${i}`));

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="grid grid-cols-2 max-w-4xl lg:max-w-6xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6 lg:px-0">
        <div className="flex col-span-2 md:col-span-1 justify-center items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-3xl leading-tight">
              {t("about.hero.heading")}
            </h1>
            <p className="text-lg md:text-xl mt-6 max-w-3xl leading-relaxed">
              {t("about.hero.body")}
            </p>
          </div>
        </div>
        <div className="flex col-span-2 md:col-span-1 items-center justify-center">
          <Image
            className="relative overflow-hidden bg-cover bg-center"
            src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
            alt="About Diabesity Life"
            width={800}
            height={600}
          />
        </div>
      </section>

      {/* Our Story Section */}
      <section className="pb-16 md:pb-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 h-full">
              <Image
                src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&w=2070"
                alt="Hands together representing unity"
                width={600}
                height={450}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2 py-4">
              <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-8">
                {t("about.story.heading")}
              </h2>
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                <p>{t("about.story.p1")}</p>
                <p>{t("about.story.p2")}</p>
                <p>{t("about.story.p3")}</p>
                <p>
                  {t("about.story.p4Prefix")}
                  <strong>{t("about.story.p4Bold")}</strong>
                  {t("about.story.p4Suffix")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="pb-16 md:pb-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto text-lg">
          <h3 className="text-3xl">
            <b>{t("about.aboutUs.heading")}</b>
          </h3>
          <p className="mt-4">{t("about.aboutUs.body")}</p>
          <List items={listItems} />
          <p className="mt-4">
            {t("about.aboutUs.closingPrefix")}
            <b>{t("about.aboutUs.closingBold1")}</b>
            {t("about.aboutUs.closingAnd")}
            <b>{t("about.aboutUs.closingBold2")}</b>
            {t("about.aboutUs.closingSuffix")}
            <b>{t("about.aboutUs.closingBold3")}</b>
          </p>
        </div>
      </section>

      {/* Our Mission in Action Section */}
      <section className="py-16 md:py-24 bg-gray-50 px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              {t("about.mission.label")}
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900">
              {t("about.mission.heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {missionCards.map((card, index) => (
              <div
                key={index}
                className="bg-white p-6 border hover:shadow-lg transition-shadow"
              >
                <div className="mb-6">
                  <card.icon className={`w-12 h-12 ${card.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {card.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
