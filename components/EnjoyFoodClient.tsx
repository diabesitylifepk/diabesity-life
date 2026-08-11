"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import DiabetesUk from "../public/diabetes-uk-logo.svg";
import Image1 from "../public/enjoy-food-image-1.webp";
import Image2 from "../public/enjoy-food-image-2.webp";

const images = [
  {
    id: 1,
    src: Image1.src,
    alt: "Enjoy Food booklet cover",
  },
  {
    id: 2,
    src: Image2.src,
    alt: "Enjoy Food booklet page 1",
  },
];

const downloads = [
  {
    title: "Enjoy Food - African Caribbean",
    urduTitle: "کھانے سے لطف اندوز ہوں - افریقی کیریبین",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/African_Caribbean_Guide_low_res_X_update.pdf?v=1707237840&_gl=1*k5w4h5*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTkzJGoyOCRsMCRoMA..",
  },
  {
    title: "Enjoy Food - South Asian",
    urduTitle: "کھانے سے لطف اندوز ہوں - جنوبی ایشیائی",
    href: "https://cdn.shopify.com/s/files/1/1922/6045/files/Asian_food_Guide_low_res_X_update.pdf?v=1707237842&_gl=1*1j4kmzr*_gcl_au*OTgwNzUxNTQyLjE3NjAwODE1NzQ.*_ga*MTc1MTU4ODEwNy4xNzYwMDgxNTc1*_ga_J1HFNSGEX6*czE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNTk2JGoyNSRsMCRoMA..",
  },
];

export default function EnjoyFoodClient() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [activeTab, setActiveTab] = useState<"details" | "downloads">(
    "details"
  );
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
                className="bg-gray-100 border mb-4 aspect-[3/4] flex items-center justify-center cursor-zoom-in"
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
              <div className="flex gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`w-16 h-20 bg-gray-100 border-2 overflow-hidden ${
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
              {/* Credits */}
              <div className="flex flex-col gap-2 mb-4">
                <Image src={DiabetesUk} alt="diabetes-uk" className="w-32" />
              </div>

              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                کھانے سے لطف اندوز ہوں - گائیڈز (صرف ڈاؤن لوڈ)
              </h1>

              {/* Price Badge */}
              <div className="inline-block border border-gray-300 px-4 py-2 my-4">
                <span className="text-gray-700 font-medium">مفت</span>
              </div>

              {/* Tabs */}
              <div className="flex">
                <button
                  onClick={() => setActiveTab("details")}
                  className={`px-6 py-2 font-medium ${
                    activeTab === "details"
                      ? "bg-[#DB3B00] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  تفصیلات
                </button>
                <button
                  onClick={() => setActiveTab("downloads")}
                  className={`px-6 py-2 font-medium ${
                    activeTab === "downloads"
                      ? "bg-[#DB3B00] text-white"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  ڈاؤن لوڈز
                </button>
              </div>

              {/* Content Box */}
              <div className="border border-gray-200 p-6">
                {activeTab === "details" ? (
                  <div className="space-y-4 text-gray-700">
                    <p>
                      ہمیں افسوس ہے لیکن افریقی کیریبین اور جنوبی ایشیائی گائیڈز
                      ختم ہو گئے ہیں۔ یہ صرف ڈاؤن لوڈ کے لیے دستیاب ہیں، اوپر
                      ڈاؤن لوڈ ٹیب پر کلک کریں۔
                    </p>
                    <p>
                      آپ جو کھاتے ہیں اس سے لطف اندوز ہونا زندگی کی خوشیوں میں
                      سے ایک ہے۔ لیکن اگر آپ، یا آپ کے خاندان میں کوئی، ذیابیطس
                      کا شکار ہے تو آپ جانتے ہیں کہ یہ بعض اوقات مشکل ہو سکتا
                      ہے۔
                    </p>
                    <p>
                      ہم نے کھانے سے لطف اندوز ہوں گائیڈز کو اکٹھا کیا ہے تاکہ
                      ذیابیطس سے متاثر ہر شخص کو کھانا پکانے اور صحت مند غذا سے
                      لطف اندوز ہونے میں مدد ملے۔
                    </p>
                    <p>
                      آپ اوپر ڈاؤن لوڈ ٹیب کا استعمال کرتے ہوئے یہ کاپیاں مفت
                      میں ڈاؤن لوڈ کر سکتے ہیں۔
                    </p>
                    <ul className="list-disc pr-6 space-y-2">
                      <li>کھانے سے لطف اندوز ہوں - افریقی کیریبین غذا</li>
                      <li>
                        کھانے سے لطف اندوز ہوں - جنوبی ایشیائی غذا، بنگالی، اردو
                        اور گجراتی میں متن پینلز کے ساتھ انگریزی میں معلومات
                        شامل ہے
                      </li>
                      <li>
                        انگریزی میں ہماری اچھی طرح کھانے کی گائیڈ آرڈر یا ڈاؤن
                        لوڈ کرنے کے لیے یا صرف ویلش میں ڈاؤن لوڈ کرنے کے لیے{" "}
                        <Link
                          href="https://shop.diabetes.org.uk/products/eating-well-with-diabetes"
                          target="_blank"
                          className="text-primary underline"
                        >
                          یہاں
                        </Link>{" "}
                        کلک کریں۔
                      </li>
                    </ul>
                    <p>
                      مزید الہام اور شروع کرنے کے لیے،{" "}
                      <Link
                        href="https://www.diabetes.org.uk/living-with-diabetes/eating?_gl=1%2Az1frqd%2A_gcl_au%2AOTgwNzUxNTQyLjE3NjAwODE1NzQ.%2A_ga%2AMTc1MTU4ODEwNy4xNzYwMDgxNTc1%2A_ga_J1HFNSGEX6%2AczE3NjM2MjI5NjIkbzEzJGcxJHQxNzYzNjIzNjA5JGoxMiRsMCRoMA.."
                        target="_blank"
                        className="text-primary underline"
                        dir="ltr"
                      >
                        www.diabetes.org.uk/enjoyfood
                      </Link>{" "}
                      پر جائیں۔
                    </p>
                  </div>
                ) : (
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
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
