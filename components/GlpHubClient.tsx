"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const hubContent = [
  {
    id: "what-is-glp1",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Glucagon-like peptide-1 (GLP-1)</strong> is a naturally
          occurring metabolic hormone produced in the &quot;L-cells&quot; of
          your small intestine. Think of it as your body&apos;s{" "}
          <strong>&quot;Fullness Messenger.&quot;</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          In a healthy system, GLP-1 is released within minutes of eating. It
          travels through the bloodstream to signal the brain and the pancreas
          that nutrients have arrived. However, natural GLP-1 is fragile; it is
          broken down by enzymes (DPP-4) in just 2 minutes.{" "}
          <strong>Modern GLP-1 therapies</strong> are engineered to be
          &quot;long-acting,&quot; staying in your system for a week to provide
          sustained metabolic control.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Glucagon-like peptide-1 (GLP-1)</strong> آپ کی چھوٹی آنت کے
          &quot;L-خلیوں&quot; میں پیدا ہونے والا ایک قدرتی میٹابولک ہارمون ہے۔
          اسے اپنے جسم کا <strong>&quot;بھرپوری کا قاصد&quot;</strong> سمجھیں۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          صحت مند نظام میں، GLP-1 کھانے کے چند منٹوں میں خارج ہوتا ہے۔ یہ خون کے
          ذریعے دماغ اور لبلبے کو یہ اشارہ دینے کے لیے سفر کرتا ہے کہ غذائی
          اجزاء آ گئے ہیں۔ تاہم، قدرتی GLP-1 نازک ہوتا ہے؛ یہ انزائمز (DPP-4) کے
          ذریعے صرف 2 منٹ میں ٹوٹ جاتا ہے۔ <strong>جدید GLP-1 علاج</strong>{" "}
          &quot;طویل اثر&quot; رکھنے کے لیے بنائے گئے ہیں، جو پائیدار میٹابولک
          کنٹرول فراہم کرنے کے لیے ایک ہفتے تک آپ کے نظام میں رہتے ہیں۔
        </p>
      </div>
    ),
  },
  {
    id: "diabesity-link",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          For decades, obesity and Type 2 Diabetes were treated as separate
          issues. We now know they are two sides of the same coin:{" "}
          <strong>Metabolic Dysfunction.</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          GLP-1 is the &quot;bridge&quot; because it corrects the{" "}
          <strong>Incretin Effect</strong>.
        </p>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">The Problem:</h3>
          <p className="text-gray-700 leading-relaxed">
            In people with &quot;Diabesity,&quot; the natural GLP-1 response is
            blunted. The body doesn&apos;t realize it&apos;s full, and the
            pancreas doesn&apos;t get the &quot;start&quot; signal for insulin.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Solution:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            By restoring GLP-1 levels, treatments simultaneously lower blood
            sugar (treating diabetes) and reduce caloric intake (treating
            obesity). When weight drops, insulin resistance improves, creating a{" "}
            <strong>&quot;virtuous cycle&quot;</strong> of health.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          دہائیوں سے، موٹاپے اور ٹائپ 2 ذیابیطس کو الگ الگ مسائل کے طور پر علاج
          کیا جاتا رہا۔ اب ہم جانتے ہیں کہ یہ ایک ہی سکے کے دو رخ ہیں:{" "}
          <strong>میٹابولک خرابی۔</strong>
        </p>
        <p className="text-gray-700 leading-relaxed">
          GLP-1 &quot;پل&quot; ہے کیونکہ یہ <strong>Incretin Effect</strong> کو
          درست کرتا ہے۔
        </p>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">مسئلہ:</h3>
          <p className="text-gray-700 leading-relaxed">
            &quot;ذیابیطسیٹی&quot; والے لوگوں میں، قدرتی GLP-1 ردعمل کمزور پڑ
            جاتا ہے۔ جسم کو یہ احساس نہیں ہوتا کہ پیٹ بھر گیا ہے، اور لبلبے کو
            انسولین کے لیے &quot;شروع&quot; کا اشارہ نہیں ملتا۔
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">حل:</h3>
          <p className="text-gray-700 leading-relaxed">
            GLP-1 کی سطح بحال کرنے سے، علاج بیک وقت بلڈ شوگر کم کرتے ہیں
            (ذیابیطس کا علاج) اور کیلوری کی مقدار کم کرتے ہیں (موٹاپے کا علاج)۔
            جب وزن کم ہوتا ہے، تو انسولین مزاحمت بہتر ہوتی ہے، صحت کا{" "}
            <strong>&quot;نیک چکر&quot;</strong> بناتی ہے۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "appetite-regulation",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          One of the most revolutionary aspects of GLP-1 therapy is its effect
          on the <strong>Hypothalamus</strong> (the brain&apos;s reward center).
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Satiety Signaling:</strong> It increases the feeling of
            satisfaction after small meals.
          </li>
          <li>
            <strong>The &quot;Food Noise&quot; Effect:</strong> Many patients
            describe a constant mental chatter about their next meal. GLP-1
            therapy helps quiet this &quot;noise,&quot; making it easier to
            stick to a healthy diet without relying solely on willpower.
          </li>
          <li>
            <strong>Slow Digestion:</strong> It physically slows down{" "}
            <strong>gastric emptying</strong>. Because food stays in the stomach
            longer, the physical sensation of fullness lasts for hours rather
            than minutes.
          </li>
        </ul>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          GLP-1 تھراپی کے سب سے انقلابی پہلوؤں میں سے ایک{" "}
          <strong>Hypothalamus</strong> (دماغ کے ریوارڈ سینٹر) پر اس کا اثر ہے۔
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>سیری کا اشارہ:</strong> یہ چھوٹے کھانوں کے بعد اطمینان کے
            احساس کو بڑھاتا ہے۔
          </li>
          <li>
            <strong>&quot;فوڈ نوئز&quot; اثر:</strong> بہت سے مریض اگلے کھانے کے
            بارے میں مسلسل ذہنی بڑبڑاہٹ بیان کرتے ہیں۔ GLP-1 تھراپی اس
            &quot;شور&quot; کو خاموش کرنے میں مدد کرتی ہے، جس سے صرف قوت ارادی
            پر انحصار کیے بغیر صحت مند خوراک پر قائم رہنا آسان ہو جاتا ہے۔
          </li>
          <li>
            <strong>سست ہضم:</strong> یہ جسمانی طور پر{" "}
            <strong>معدے کے خالی ہونے</strong> کو سست کرتا ہے۔ چونکہ کھانا معدے
            میں زیادہ دیر رہتا ہے، اس لیے بھرپوری کا جسمانی احساس منٹوں کی بجائے
            گھنٹوں تک رہتا ہے۔
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "insulin-signaling",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Unlike older diabetes medications that force the pancreas to pump out
          insulin constantly (which can cause dangerous &quot;crashes&quot;),
          GLP-1 is <strong>Glucose-Dependent</strong>.
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>Smart Release:</strong> It tells the pancreas to release
            insulin <em>only</em> when your blood sugar is actually high. This
            significantly reduces the risk of hypoglycemia (low blood sugar).
          </li>
          <li>
            <strong>Glucagon Suppression:</strong> It stops the liver from
            pumping out unnecessary sugar into your blood.
          </li>
        </ul>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          پرانی ذیابیطس کی دوائیوں کے برعکس جو لبلبے کو مسلسل انسولین پمپ کرنے
          پر مجبور کرتی ہیں (جو خطرناک &quot;کریشز&quot; کا باعث بن سکتی ہیں)،
          GLP-1 <strong>گلوکوز پر منحصر</strong> ہے۔
        </p>
        <ul className="space-y-4 text-gray-700">
          <li>
            <strong>ذہین اخراج:</strong> یہ لبلبے کو انسولین خارج کرنے کا حکم
            دیتا ہے <em>صرف</em> جب آپ کی بلڈ شوگر واقعی زیادہ ہو۔ اس سے
            ہائپوگلائسیمیا (کم بلڈ شوگر) کا خطرہ نمایاں طور پر کم ہو جاتا ہے۔
          </li>
          <li>
            <strong>گلوکاگان کا دباؤ:</strong> یہ جگر کو آپ کے خون میں غیر ضروری
            شوگر پمپ کرنے سے روکتا ہے۔
          </li>
        </ul>
      </div>
    ),
  },
  {
    id: "beta-cell-protection",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Emerging research suggests that GLP-1 may help protect and preserve
          the health of <strong>Beta-cells</strong> in the pancreas, potentially
          slowing the progression of diabetes over time.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          ابھرتی ہوئی تحقیق سے پتہ چلتا ہے کہ GLP-1 لبلبے میں{" "}
          <strong>بیٹا خلیوں</strong> کی صحت کی حفاظت اور بقا میں مدد کر سکتا
          ہے، جو ممکنہ طور پر وقت کے ساتھ ذیابیطس کے بڑھنے کو سست کرتا ہے۔
        </p>
      </div>
    ),
  },
];

export default function GlpHubClient() {
  const { t, locale } = useLanguage();

  const hubSections = [
    { id: "what-is-glp1", title: t("glpHub.sections.whatIsGlp1.title") },
    { id: "diabesity-link", title: t("glpHub.sections.diabesityLink.title") },
    {
      id: "appetite-regulation",
      title: t("glpHub.sections.appetiteRegulation.title"),
    },
    {
      id: "insulin-signaling",
      title: t("glpHub.sections.insulinSignaling.title"),
    },
    {
      id: "beta-cell-protection",
      title: t("glpHub.sections.betaCell.title"),
    },
  ];

  const actionCards = [
    {
      title: t("glpHub.actionCards.diet.title"),
      description: t("glpHub.actionCards.diet.description"),
      href: "/diet",
      linkText: t("glpHub.actionCards.diet.linkText"),
    },
    {
      title: t("glpHub.actionCards.medication.title"),
      description: t("glpHub.actionCards.medication.description"),
      href: "/medication",
      linkText: t("glpHub.actionCards.medication.linkText"),
    },
    {
      title: t("glpHub.actionCards.tools.title"),
      description: t("glpHub.actionCards.tools.description"),
      href: "#",
      linkText: t("glpHub.actionCards.tools.linkText"),
    },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-20 border-b border-gray-200">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("glpHub.hero.heading")}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {t("glpHub.hero.description")}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1559757175-5700dde675bc?q=80&w=2069"
                alt="GLP-1 Hub"
                width={800}
                height={384}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Links Section */}
      <section className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t("glpHub.sectionsLabel")}
          </h2>
          <ul className="space-y-4">
            {hubSections.map((section) => (
              <li key={section.id} className="flex items-start">
                <span className="text-primary mr-3 mt-1.5 text-xl">
                  &#8226;
                </span>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-primary hover:text-primary/80 font-medium text-lg md:text-xl text-left transition-colors"
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {hubContent.map((section, i) => (
            <div key={section.id}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                  {hubSections[i].title}
                </h2>
                {locale === "ur" ? section.urduContent : section.content}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Action Cards Section */}
      <section className="bg-gray-50 py-16 md:py-20">
        <div className="max-w-4xl lg:max-w-6xl mx-auto px-6 lg:px-0">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8 text-center">
            {t("glpHub.takeAction")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {actionCards.map((card) => (
              <div
                key={card.title}
                className="bg-white p-6 border border-gray-200 hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  {card.description}
                </p>
                <Link
                  href={card.href}
                  className="inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  {card.linkText}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
