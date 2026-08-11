"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DiabetesUk from "../public/diabetes-uk-logo.svg";
import Image1 from "../public/five-ways-to-move-more-image-1.webp";
import Image2 from "../public/five-ways-to-move-more-image-2.webp";
import Image3 from "../public/five-ways-to-move-more-image-3.webp";
import Image4 from "../public/five-ways-to-move-more-image-4.webp";
import Image5 from "../public/five-ways-to-move-more-image-5.webp";
import Image6 from "../public/five-ways-to-move-more-image-6.webp";

const images = [
  {
    id: 1,
    src: Image1.src,
    alt: "Five ways to move more sitting",
  },
  {
    id: 2,
    src: Image2.src,
    alt: "Five ways to move more standing 1",
  },
  {
    id: 3,
    src: Image3.src,
    alt: "Five ways to move more standing 2",
  },
  {
    id: 4,
    src: Image4.src,
    alt: "Five ways to move more marching",
  },
  {
    id: 5,
    src: Image5.src,
    alt: "Five ways to move more stretching",
  },
  {
    id: 6,
    src: Image6.src,
    alt: "Five ways to move more whole body",
  },
];

const downloads = [
  {
    title: "Five ways to move more sitting PDF",
    urduTitle: "بیٹھے ہوئے مزید حرکت کے پانچ طریقے PDF",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_lower_body_while_sitting_V2_cmyk_Urdu-PK.pdf?v=1653318793",
  },
  {
    title: "Five ways to move more standing PDF 1",
    urduTitle: "کھڑے ہوئے مزید حرکت کے پانچ طریقے PDF 1",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_lower_body_while_standing_V2_cmyk_Urdu-PK.pdf?v=1653318793&_gl=1*1w8vefa*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTA3JGo1NCRsMCRoMA..",
  },
  {
    title: "Five way to move more standing PDF 2",
    urduTitle: "کھڑے ہوئے مزید حرکت کے پانچ طریقے PDF 2",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_upper_body_while_standing_V2_cmyk_Urdu-PK.pdf?v=1653318793&_gl=1*1qxyt3f*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTIyJGozOSRsMCRoMA..",
  },
  {
    title: "Five ways to move more marching on the spot PDF",
    urduTitle: "جگہ پر مارچ کرتے ہوئے مزید حرکت کے پانچ طریقے PDF",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_while_marching_on-the-spot_V2_cmyk_Urdu-PK.pdf?v=1653318793&_gl=1*40wmbu*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTM3JGoyNCRsMCRoMA..",
  },
  {
    title: "Five ways to move more stretching PDF",
    urduTitle: "اسٹریچنگ کرتے ہوئے مزید حرکت کے پانچ طریقے PDF",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_while_stretching_out_V3_cmyk_Urdu-PK.pdf?v=1653318793&_gl=1*1jh8gk5*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTUxJGoxMCRsMCRoMA..",
  },
  {
    title: "Five ways to move more - whole body aerobic style PDF",
    urduTitle: "پورے جسم کی ایروبک انداز میں مزید حرکت کے پانچ طریقے PDF",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/1974_SE_ExercisePoster_your_whole_body_aerobic_style__V2_cmyk_Urdu-PK.pdf?v=1653318793&_gl=1*prg502*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTYxJGo2MCRsMCRoMA..",
  },
];

export default function FiveWaysToMoveMoreClient() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <div className="flex flex-col">
      {/* Lightbox Modal */}
      {showLightbox && (
        <div
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <button
            onClick={() => setShowLightbox(false)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 text-xl font-bold z-10"
          >
            بند کریں ✕
          </button>
          <Image
            src={images[selectedImage].src}
            alt={images[selectedImage].alt}
            width={800}
            height={600}
            className="max-w-[90vw] max-h-[90vh] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* Main Content */}
      <section className="bg-white py-12 md:py-16 px-6 lg:px-0" dir="rtl">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {/* Right - Image Gallery */}
            <div>
              {/* Main Image */}
              <div
                className="bg-gray-100 border mb-4 aspect-[4/3] flex items-center justify-center cursor-zoom-in"
                onClick={() => setShowLightbox(true)}
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  width={600}
                  height={450}
                  className="max-w-full max-h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = "none";
                    target.parentElement!.innerHTML = `<div class="text-gray-400 text-center p-8">Image placeholder<br/><span class="text-sm">${images[selectedImage].alt}</span></div>`;
                  }}
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-6 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-100 border-2 overflow-hidden ${
                      selectedImage === index
                        ? "border-primary"
                        : "border-gray-200 hover:border-gray-400"
                    }`}
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={100}
                      height={100}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Left - Content */}
            <div className="text-right">
              <div className="flex flex-col gap-2 mb-4">
                <Image src={DiabetesUk} alt="diabetes-uk" className="w-32" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                مزید حرکت کے پانچ طریقے (صرف ڈاؤن لوڈ)
              </h1>

              {/* Price Badge */}
              <div className="inline-block border border-gray-300 px-4 py-2 my-4">
                <span className="text-gray-700 font-medium">مفت</span>
              </div>

              {/* Tab */}
              <div className="">
                <button className="bg-[#DB3B00] text-white px-6 py-2 font-medium">
                  تفصیلات
                </button>
              </div>

              {/* Content Box */}
              <div className="border border-gray-200 p-6">
                <p className="text-gray-700 mb-6">
                  اردو میں ڈاؤن لوڈ کے لیے دستیاب۔
                </p>

                <div className="space-y-3">
                  {downloads.map((download, index) => (
                    <Link
                      key={index}
                      href={download.href}
                      target="_blank"
                      className="block text-primary hover:text-primary/80 text-lg"
                    >
                      {download.urduTitle}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
