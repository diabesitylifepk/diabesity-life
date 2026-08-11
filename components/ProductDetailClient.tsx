"use client";

import { Product } from "@/lib/productsData";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";
import { jsPDF } from "jspdf";
import { ArrowLeft, Download, FileText, Shield, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ProductDetailClientProps {
  product: Product;
}

export default function ProductDetailClient({
  product,
}: ProductDetailClientProps) {
  const images = [
    { id: "logo", src: product.logoImage, alt: `${product.name} Logo` },
    { id: "packs", src: product.packsImage, alt: `${product.name} Packaging` },
    ...(product.deviceImage
      ? [
          {
            id: "device",
            src: product.deviceImage,
            alt: `${product.name} Device`,
          },
        ]
      : []),
  ];

  const [selectedImage, setSelectedImage] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const { t, locale } = useLanguage();
  const isUrdu = locale === "ur";
  const displayDescription = isUrdu
    ? (product.urdu?.description ?? product.description)
    : product.description;
  const displayForm = isUrdu
    ? (product.urdu?.form ?? product.form)
    : product.form;
  const displayFrequency = isUrdu
    ? (product.urdu?.frequency ?? product.frequency)
    : product.frequency;

  const handleDownloadSafetySheet = () => {
    const pdf = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a4",
    });
    const W = 210;
    const primary = { r: 106, g: 61, b: 154 };
    const gray = { r: 100, g: 100, b: 100 };

    // ── Header band ──────────────────────────────────────────────────────────
    pdf.setFillColor(primary.r, primary.g, primary.b);
    pdf.rect(0, 0, W, 22, "F");

    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(13);
    pdf.text("DIABESITY.LIFE", 12, 10);

    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(8);
    pdf.text("diabesity.life", 12, 15);

    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(9);
    pdf.text("MEDICATION SAFETY SHEET", W - 12, 13, { align: "right" });

    // ── Medication name ───────────────────────────────────────────────────────
    pdf.setTextColor(primary.r, primary.g, primary.b);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(20);
    pdf.text(product.name, 12, 34);

    pdf.setTextColor(gray.r, gray.g, gray.b);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(11);
    pdf.text(product.genericName, 12, 41);

    // Divider
    pdf.setDrawColor(primary.r, primary.g, primary.b);
    pdf.setLineWidth(0.5);
    pdf.line(12, 45, W - 12, 45);

    // ── Product details ───────────────────────────────────────────────────────
    let y = 54;
    pdf.setTextColor(primary.r, primary.g, primary.b);
    pdf.setFont("helvetica", "bold");
    pdf.setFontSize(8);
    pdf.text("PRODUCT DETAILS", 12, y);
    y += 6;

    const details: [string, string][] = [
      ["Brand Name", product.brandName],
      ["Generic Name", product.genericName],
      ["Formulation", product.form],
      ["Dosing Frequency", product.frequency],
      ["Available Dosages", product.dosages.join("  |  ")],
    ];

    details.forEach(([label, value]) => {
      pdf.setFillColor(248, 245, 252);
      pdf.rect(12, y - 4, W - 24, 8, "F");
      pdf.setTextColor(gray.r, gray.g, gray.b);
      pdf.setFont("helvetica", "bold");
      pdf.setFontSize(7);
      pdf.text(label.toUpperCase(), 15, y);
      pdf.setTextColor(30, 30, 30);
      pdf.setFont("helvetica", "normal");
      pdf.setFontSize(9);
      pdf.text(value, 70, y);
      y += 10;
    });

    y += 4;

    // ── Footer ────────────────────────────────────────────────────────────────
    const footerY = 285;
    pdf.setFillColor(primary.r, primary.g, primary.b);
    pdf.rect(0, footerY, W, 12, "F");
    pdf.setTextColor(255, 255, 255);
    pdf.setFont("helvetica", "normal");
    pdf.setFontSize(6.5);
    pdf.text(
      "For healthcare professional use only. Not a substitute for full prescribing information.",
      W / 2,
      footerY + 5,
      { align: "center" },
    );
    pdf.text(
      `Generated at diabesity.life  |  ${new Date().toLocaleDateString("en-GB", { day: "2-digit", month: "long", year: "numeric" })}`,
      W / 2,
      footerY + 9,
      { align: "center" },
    );

    pdf.save(
      `${product.name.toLowerCase().replace(/\s+/g, "-")}-safety-sheet.pdf`,
    );
  };

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
            className="absolute top-4 right-4 text-white hover:text-gray-300 z-10"
          >
            <X className="w-8 h-8" />
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

      {/* Hero Section */}
      <section className="bg-primary py-12 md:py-16 px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <Link
            href={`/products?tab=${product.category}`}
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            {t("products.backTo")} {t(`products.tabs.${product.category}`)}
          </Link>
          <h1 className="text-white text-3xl md:text-4xl font-bold mb-2">
            {product.name}
          </h1>
          <p className="text-white/80 text-lg">({product.genericName})</p>
        </div>
      </section>

      {/* Product Content */}
      <section className="py-12 md:py-16 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column - Image Gallery */}
            <div>
              {/* Main Image */}
              <div
                className="bg-gray-50 border border-gray-200 mb-4 aspect-[4/3] flex items-center justify-center cursor-zoom-in p-8"
                onClick={() => setShowLightbox(true)}
              >
                <Image
                  src={images[selectedImage].src}
                  alt={images[selectedImage].alt}
                  width={600}
                  height={450}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Thumbnails */}
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={image.id}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square bg-gray-50 border-2 overflow-hidden p-2 ${
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
                      className="w-full h-full object-contain"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Right Column - Product Info */}
            <div>
              {/* Product Details Card */}
              <div className="bg-gray-50 border border-gray-200 p-8 mb-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">
                  {t("products.detail.productInformation")}
                </h2>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {t("products.detail.brandName")}
                    </h3>
                    <p className="text-lg text-gray-900">{product.brandName}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {t("products.detail.genericName")}
                    </h3>
                    <p className="text-lg text-gray-900">
                      {product.genericName}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {t("products.detail.formulation")}
                    </h3>
                    <p className="text-lg text-gray-900">{displayForm}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
                      {t("products.detail.dosingFrequency")}
                    </h3>
                    <p className="text-lg text-primary font-medium">
                      {displayFrequency}
                    </p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                      {t("products.detail.availableDosages")}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {product.dosages.map((dosage) => (
                        <span
                          key={dosage}
                          className="px-3 py-1.5 bg-primary/10 text-primary font-medium"
                        >
                          {dosage}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4">
                  {t("products.detail.description")}
                </h2>
                <p className="text-gray-600 leading-relaxed">
                  {displayDescription}
                </p>
              </div>

              {/* Downloads */}
              <div className="bg-primary/5 border border-primary/20 p-6 mb-8">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-primary" />
                  {t("products.detail.downloads")}
                </h2>
                <div className="flex flex-col space-y-3">
                  {product.leafletPdf && (
                    <a
                      href={product.leafletPdf}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="primary" className="w-full">
                        <Download className="w-5 h-5" />
                        {t("products.detail.downloadPdf")}
                      </Button>
                    </a>
                  )}
                  <Button
                    variant="outlined"
                    className="w-full"
                    onClick={handleDownloadSafetySheet}
                  >
                    <Shield className="w-5 h-5" />
                    {t("products.detail.downloadSafetySheet")}
                  </Button>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 bg-yellow-50 border border-yellow-200">
                <p className="text-sm text-yellow-800">
                  {t("products.detail.disclaimer")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
