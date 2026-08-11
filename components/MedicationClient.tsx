"use client";

import Image from "next/image";
import Medication from "../public/medication.jpeg";
import { useLanguage } from "@/contexts/LanguageContext";

const medicationContent = [
  {
    id: "first-line-drugs",
    titleEn: "First-line & Common Diabetes Drugs — Plain-language overview",
    titleUr: "پہلی لائن اور عام ذیابیطس کی ادویات — سادہ زبان میں جائزہ",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Medication isn't a shortcut; it's a <strong>tool</strong> alongside
          diet, movement, and sleep. Many adults start with{" "}
          <strong>metformin</strong>. It reduces liver glucose output and
          improves insulin sensitivity, often with mild stomach upset that
          settles if you <strong>start low and take with meals</strong>. Other
          oral drugs include <strong>sulfonylureas</strong> (can lower sugar but
          may cause hypos and weight gain), and{" "}
          <strong>SGLT2 inhibitors</strong> (help the kidneys pass extra
          glucose; watch hydration and genital infection risk). Your doctor may
          combine medicines to meet <strong>HbA1c targets</strong> appropriate
          to age and context.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Insulin is sometimes needed—temporarily or long-term—especially if
          sugars stay high, during pregnancy, or with certain illnesses. Insulin
          can be life-saving and safe when{" "}
          <strong>doses, timing, and technique</strong> are clear. None of this
          replaces lifestyle; rather, medicines make lifestyle changes{" "}
          <strong>more effective and safer</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          دوائیں کوئی شارٹ کٹ نہیں؛ یہ غذا، حرکت اور نیند کے ساتھ ایک{" "}
          <strong>اوزار</strong> ہیں۔ بہت سے بالغ{" "}
          <strong>میٹفارمن</strong> سے شروع کرتے ہیں۔ یہ جگر کی گلوکوز پیداوار
          کم کرتی ہے اور انسولین کی حساسیت بہتر کرتی ہے، اکثر ہلکی پیٹ کی
          تکلیف کے ساتھ جو{" "}
          <strong>کم خوراک سے شروع کرنے اور کھانے کے ساتھ لینے</strong> سے ٹھیک
          ہو جاتی ہے۔ دیگر زبانی ادویات میں{" "}
          <strong>سلفونیلیوریاز</strong> (شوگر کم کر سکتی ہیں لیکن ہائپو اور
          وزن اضافے کا خطرہ) اور <strong>SGLT2 انہیبیٹرز</strong> (گردوں کو
          اضافی گلوکوز نکالنے میں مدد کرتے ہیں؛ پانی پینے اور جننانگ انفیکشن کے
          خطرے پر نظر رکھیں) شامل ہیں۔ آپ کا ڈاکٹر عمر اور صورتحال کے مطابق{" "}
          <strong>HbA1c اہداف</strong> پورے کرنے کے لیے ادویات کو ملا سکتا ہے۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          انسولین بعض اوقات ضروری ہوتی ہے — عارضی یا طویل مدت کے لیے — خاص
          طور پر اگر شوگر زیادہ رہے، حمل کے دوران، یا کچھ بیماریوں میں۔
          انسولین زندگی بچانے والی اور محفوظ ہو سکتی ہے جب{" "}
          <strong>خوراک، وقت اور تکنیک</strong> واضح ہوں۔ یہ کچھ بھی طرز زندگی
          کی جگہ نہیں لیتا؛ بلکہ دوائیں طرز زندگی کی تبدیلیوں کو{" "}
          <strong>زیادہ مؤثر اور محفوظ</strong> بناتی ہیں۔
        </p>
      </div>
    ),
  },
  {
    id: "injectables-handling",
    titleEn: "Injectables: Handling & Storage — Practical safety",
    titleUr: "انجیکشن ادویات: ہینڈلنگ اور ذخیرہ — عملی حفاظت",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          For <strong>pens</strong> (GLP-1 or insulin): check the{" "}
          <strong>expiry</strong>, inspect the <strong>solution</strong>, attach
          a <strong>new needle</strong>, and <strong>prime</strong> if
          instructions say so. Inject <strong>subcutaneously</strong> into
          abdomen, thigh, or upper arm; <strong>rotate sites</strong> to avoid
          lumps. Unused pens are kept <strong>refrigerated (2–8°C)</strong>;
          once in use, many can be kept at <strong>room temperature</strong> for
          a limited time—follow the leaflet. In hot weather, use{" "}
          <strong>insulated pouches</strong> when travelling. Never{" "}
          <strong>share pens or needles</strong>. Dispose of sharps safely
          (rigid container if you lack a sharps bin) and keep medicines away
          from children.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>پینز</strong> (GLP-1 یا انسولین) کے لیے: <strong>میعاد</strong>{" "}
          چیک کریں، <strong>محلول</strong> معائنہ کریں،{" "}
          <strong>نئی سوئی</strong> لگائیں، اور اگر ہدایات کہیں تو{" "}
          <strong>پرائم</strong> کریں۔ <strong>ذیلی جلدی</strong> انجیکشن لگائیں
          — پیٹ، ران، یا اوپری بازو میں؛ گانٹھوں سے بچنے کے لیے{" "}
          <strong>جگہیں بدلتے رہیں</strong>۔ غیر استعمال شدہ پینز{" "}
          <strong>فریج میں</strong>{" "}
          <span dir="ltr" className="inline">
            (2–8°C)
          </span>{" "}
          رکھیں؛ ایک بار کھل جانے کے بعد، بہت سی{" "}
          <strong>کمرے کے درجہ حرارت</strong> پر محدود وقت کے لیے رکھی جا سکتی
          ہیں — لیف لیٹ پر عمل کریں۔ گرم موسم میں سفر کے وقت{" "}
          <strong>موصل تھیلیاں</strong> استعمال کریں۔ کبھی{" "}
          <strong>پینز یا سوئیاں شیئر نہ کریں</strong>۔ تیز چیزیں محفوظ طریقے
          سے ضائع کریں (اگر شارپس بن نہ ہو تو سخت کنٹینر میں) اور ادویات بچوں
          سے دور رکھیں۔
        </p>
      </div>
    ),
  },
  {
    id: "safety-interactions-monitoring",
    titleEn: "Safety, Interactions & Monitoring — Stay ahead of problems",
    titleUr: "حفاظت، تعاملات اور نگرانی — مسائل سے پہلے سے آگاہ رہیں",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Know your <strong>red flags</strong>: severe or persistent vomiting,
          dehydration, dizziness, signs of infection, or{" "}
          <strong>very low sugar</strong> (especially on
          insulin/sulfonylureas). Keep{" "}
          <strong>15 g fast-acting carbs</strong> handy for hypoglycaemia
          (glucose tablets, small juice box). Review meds/labs with your
          doctor: <strong>HbA1c, kidney function</strong>, and if on certain
          drugs, <strong>electrolytes</strong> or{" "}
          <strong>vitamin B12</strong>. Tell your clinician about{" "}
          <strong>all</strong> products you take, including{" "}
          <strong>herbals and over-the-counter</strong> items. Medicines work
          best with <strong>routine</strong>: consistent meals, activity, and
          sleep.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اپنی <strong>سرخ جھنڈیاں</strong> جانیں: شدید یا مسلسل الٹی، پانی
          کی کمی، چکر، انفیکشن کی علامات، یا{" "}
          <strong>بہت کم شوگر</strong> (خاص طور پر انسولین/سلفونیلیوریاز پر)۔
          ہائپوگلیسیمیا کے لیے{" "}
          <strong>15 گرام فاسٹ ایکٹنگ کاربس</strong> قریب رکھیں (گلوکوز
          ٹیبلٹ، چھوٹا جوس باکس)۔ اپنے ڈاکٹر کے ساتھ ادویات/ٹیسٹ کا جائزہ
          لیں: <strong>HbA1c، گردے کا کام</strong>، اور کچھ ادویات پر{" "}
          <strong>الیکٹرولائٹس</strong> یا <strong>وٹامن B12</strong>۔ اپنے
          معالج کو <strong>تمام</strong> مصنوعات کے بارے میں بتائیں جو آپ لیتے
          ہیں، بشمول <strong>جڑی بوٹیاں اور کاؤنٹر پر ملنے والی</strong> اشیاء۔
          ادویات <strong>معمول</strong> کے ساتھ بہترین کام کرتی ہیں: مستقل
          کھانا، سرگرمی اور نیند۔
        </p>
      </div>
    ),
  },
  {
    id: "affordability-access",
    titleEn: "Affordability & Access — Navigating costs in Pakistan",
    titleUr: "قابل برداشت قیمت اور دستیابی — پاکستان میں اخراجات کو سنبھالنا",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Costs vary widely. Ask about{" "}
          <strong>generics, patient-assistance</strong>, and{" "}
          <strong>public hospitals</strong>. Consider a step-up plan: start
          with <strong>lifestyle + metformin</strong>, add other agents as
          needed. If a GLP-1 is prescribed but{" "}
          <strong>unaffordable or unavailable</strong>, discuss{" "}
          <strong>alternatives</strong> rather than buying from unverified
          sources. Keep prescriptions, use{" "}
          <strong>reputable pharmacies</strong>, and verify batch/expiry. If
          you use e-commerce, prefer platforms that{" "}
          <strong>require a valid prescription</strong> and offer{" "}
          <strong>cold-chain delivery</strong> for temperature-sensitive
          products.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اخراجات بہت مختلف ہوتے ہیں۔{" "}
          <strong>جینیرک ادویات، مریض امداد</strong> اور{" "}
          <strong>سرکاری اسپتالوں</strong> کے بارے میں پوچھیں۔ مرحلہ وار منصوبے
          پر غور کریں: <strong>طرز زندگی + میٹفارمن</strong> سے شروع کریں،
          ضرورت کے مطابق دیگر ادویات شامل کریں۔ اگر GLP-1 تجویز کیا جائے لیکن{" "}
          <strong>ناقابل برداشت یا دستیاب نہ ہو</strong> تو غیر تصدیق شدہ
          ذرائع سے خریدنے کی بجائے <strong>متبادل</strong> پر بات کریں۔ نسخے
          رکھیں، <strong>معتبر فارمیسیاں</strong> استعمال کریں، اور بیچ/میعاد
          تصدیق کریں۔ اگر ای کامرس استعمال کریں تو ایسے پلیٹ فارم ترجیح دیں جو{" "}
          <strong>درست نسخے کی ضرورت</strong> رکھتے ہوں اور درجہ حرارت حساس
          مصنوعات کے لیے <strong>کولڈ چین ڈیلیوری</strong> پیش کریں۔
        </p>
      </div>
    ),
  },
  {
    id: "surgery-advanced-therapies",
    titleEn: "Surgery & Advanced Therapies — When to consider",
    titleUr: "سرجری اور جدید علاج — کب غور کریں",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>Bariatric/metabolic surgery</strong> can be appropriate for
          severe obesity (often BMI thresholds with comorbidities) when
          lifestyle and medicines are not enough. Benefits may include{" "}
          <strong>substantial weight loss</strong> and improved sugar control;
          risks and recovery plans must be reviewed with a{" "}
          <strong>qualified surgical team</strong>. There are also endoscopic
          options in some centres. Surgery is not an "easy way out"—it's a
          medical path requiring{" "}
          <strong>nutrition counselling, psychological readiness</strong>, and
          long-term follow-up. A frank, respectful discussion with your
          clinician can clarify whether it fits your situation.
        </p>
        <p className="text-gray-700 leading-relaxed italic">
          Medical disclaimer: This section is informative and{" "}
          <strong>not</strong> a prescription. Always consult your doctor for
          personalised advice and dosing.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>باریاٹرک/میٹابولک سرجری</strong> شدید موٹاپے (اکثر بیماریوں
          کے ساتھ BMI کی حد) کے لیے مناسب ہو سکتی ہے جب طرز زندگی اور ادویات
          کافی نہ ہوں۔ فوائد میں <strong>نمایاں وزن میں کمی</strong> اور بہتر
          شوگر کنٹرول شامل ہو سکتے ہیں؛ خطرات اور صحت یابی کے منصوبے ایک{" "}
          <strong>اہل سرجیکل ٹیم</strong> کے ساتھ جائزہ لینے ضروری ہیں۔ کچھ
          مراکز میں اینڈوسکوپک آپشنز بھی ہیں۔ سرجری "آسان راستہ" نہیں — یہ ایک
          طبی راستہ ہے جس میں{" "}
          <strong>غذائی مشاورت، نفسیاتی تیاری</strong> اور طویل مدتی فالو اپ
          درکار ہے۔ اپنے معالج کے ساتھ صاف اور باوقار گفتگو یہ واضح کر سکتی ہے
          کہ آیا یہ آپ کی صورتحال کے مطابق ہے۔
        </p>
        <p className="text-gray-700 leading-relaxed italic">
          طبی اعلامیہ: یہ حصہ معلوماتی ہے اور نسخہ <strong>نہیں</strong> ہے۔
          ذاتی مشورے اور خوراک کے لیے ہمیشہ اپنے ڈاکٹر سے رجوع کریں۔
        </p>
      </div>
    ),
  },
];

export default function MedicationClient() {
  const { locale } = useLanguage();

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
                {locale === "ur" ? "ادویات" : "Medication"}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {locale === "ur"
                  ? "پاکستان میں دستیاب ذیابیطس اور وزن کی ادویات پر سادہ زبان میں رہنمائی۔ اپنے اختیارات سمجھیں، درست استعمال سیکھیں، ضمنی اثرات سنبھالیں، اور اخراجات کو اعتماد کے ساتھ کنٹرول کریں۔"
                  : "Plain-language guidance on diabetes and weight medications available in Pakistan. Understand your options, learn proper usage, manage side effects, and navigate costs with confidence."}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src={Medication}
                alt="Medication"
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
            {locale === "ur" ? "حصے" : "Sections"}
          </h2>
          <ul className="space-y-4">
            {medicationContent.map((section) => (
              <li key={section.id} className="flex items-start">
                <span className="text-primary mr-3 rtl:mr-0 rtl:ml-3 mt-1.5 text-xl">
                  &#8226;
                </span>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-primary hover:text-primary/80 font-medium text-lg md:text-xl text-left rtl:text-right transition-colors"
                >
                  {locale === "ur" ? section.titleUr : section.titleEn}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Content Sections */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-6 space-y-16">
          {medicationContent.map((section) => (
            <div key={section.id}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                  {locale === "ur" ? section.titleUr : section.titleEn}
                </h2>
                {locale === "ur" ? section.urduContent : section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
