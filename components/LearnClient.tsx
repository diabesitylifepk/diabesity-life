"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const learnContent = [
  {
    id: "risk-factors-screening",
    titleEn: "Risk Factors & Screening — Who should get checked, and when",
    titleUr: "خطرے کے عوامل اور اسکریننگ — کسے چیک کرانا چاہیے اور کب",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Some risks you can&apos;t change (age, family history), others you can
          (diet, activity, sleep). In South Asian families, diabetes often
          clusters across generations, and health risks can appear at{" "}
          <strong>lower BMI</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Common risk factors:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Parent or sibling with diabetes; history of high sugars during
              pregnancy (gestational diabetes).
            </li>
            <li>
              Waist size trending up (particularly central/abdominal fat).
            </li>
            <li>High blood pressure, high triglycerides or low HDL.</li>
            <li>PCOS in women; sleep apnea; sedentary work/study patterns.</li>
            <li>
              Frequent intake of sugary drinks, large portions of rice/roti,
              late-night eating.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            When to screen:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              If you have multiple risks, ask your doctor about{" "}
              <strong>earlier</strong> and <strong>more frequent</strong>{" "}
              checks.
            </li>
            <li>
              If you&apos;re planning pregnancy or managing PCOS, screening may
              be advised sooner.
            </li>
            <li>
              After age 35 (often earlier in South Asians with risk), discuss
              periodic fasting tests.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            How to prepare for lab visits:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Carry a list of medicines, supplements, and recent symptoms.
            </li>
            <li>Ask which test is right for you, and how often to retest.</li>
            <li>
              Request a simple action plan: diet, movement, follow-up timelines.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What to do with results:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Numbers are clues—not judgments. Partner with your clinician to set{" "}
            <strong>realistic, staged goals</strong> and choose the right mix of
            lifestyle and (if needed) medication.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          کچھ خطرے آپ تبدیل نہیں کر سکتے (عمر، خاندانی تاریخ)، کچھ تبدیل کر سکتے
          ہیں (غذا، سرگرمی، نیند)۔ جنوبی ایشیائی خاندانوں میں ذیابیطس اکثر نسل
          در نسل ہوتی ہے اور صحت کے خطرے <strong>کم BMI</strong> پر بھی ظاہر ہو
          سکتے ہیں۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            عام خطرے کے عوامل:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              والدین یا بھائی بہن کو ذیابیطس؛ حمل کے دوران زیادہ شوگر کی تاریخ
              (گیسٹیشنل ذیابیطس)۔
            </li>
            <li>کمر کا بڑھتا ہوا سائز (خاص طور پر پیٹ کی چربی)۔</li>
            <li>ہائی بلڈ پریشر، زیادہ ٹرائیگلیسرائیڈز یا کم HDL۔</li>
            <li>خواتین میں PCOS؛ نیند کی کمی؛ بیٹھ کر کام/پڑھنے کا معمول۔</li>
            <li>
              میٹھے مشروبات کا زیادہ استعمال، چاول/روٹی کی بڑی مقدار، رات کو دیر
              سے کھانا۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            کب اسکریننگ کروائیں:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              اگر آپ کو متعدد خطرات ہیں تو اپنے ڈاکٹر سے <strong>جلدی</strong>{" "}
              اور <strong>زیادہ بار</strong> ٹیسٹ کرانے کے بارے میں پوچھیں۔
            </li>
            <li>
              اگر آپ حمل کی منصوبہ بندی کر رہی ہیں یا PCOS کا علاج کر رہی ہیں تو
              اسکریننگ جلدی ہو سکتی ہے۔
            </li>
            <li>
              35 سال کی عمر کے بعد (جنوبی ایشیائیوں میں اکثر پہلے)، وقتاً فوقتاً
              فاسٹنگ ٹیسٹ پر بات کریں۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            لیب وزٹ کی تیاری:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>ادویات، سپلیمنٹس اور حالیہ علامات کی فہرست ساتھ لے جائیں۔</li>
            <li>
              پوچھیں کہ آپ کے لیے کون سا ٹیسٹ مناسب ہے اور کتنی بار کرانا ہے۔
            </li>
            <li>سادہ ایکشن پلان مانگیں: غذا، حرکت، فالو اپ کا وقت۔</li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            نتائج کے ساتھ کیا کریں:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            نمبر اشارے ہیں — فیصلے نہیں۔ اپنے معالج کے ساتھ مل کر{" "}
            <strong>قابل حصول، مرحلہ وار اہداف</strong> طے کریں اور صحیح طرز
            زندگی اور (ضرورت پڑے تو) دوائیں منتخب کریں۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "myths-vs-facts",
    titleEn: "Myths vs Facts — Desi edition",
    titleUr: "افسانے بمقابلہ حقائق — دیسی ایڈیشن",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Only sweets cause diabetes.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Refined carbs of many kinds (white rice,
            bakery items, sugary beverages) raise glucose. Total pattern
            matters: portions, frequency, and overall meal balance.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;If I walk daily, I can eat unlimited
            mithai.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Movement is powerful, but you can&apos;t
            outrun a consistently high-sugar, high-portion diet. Combine both:
            smarter food <strong>and</strong> regular activity.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Desi ghee is always &apos;good
            fat&apos; so I can use as much as I want.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Quality matters—but quantity still counts.
            Fats are calorie-dense; <em>excess</em> intake—of any fat—can stall
            progress.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Fasting alone will cure my sugar.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> Many people see improvements during
            structured fasting, but it&apos;s not a one-size-fits-all solution.
            Medication timing, hypoglycaemia risk, and overall nutrition still
            matter—especially in Ramadan.
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>Myth:</strong> &quot;Herbal or &apos;natural&apos; products
            are automatically safe.&quot;
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>Fact:</strong> &quot;Natural&quot; isn&apos;t always safe or
            effective. Some products interact with medicines or harm the liver/
            kidneys. Always discuss with your doctor.
          </p>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Better mindsets:</strong> small steady changes, consistency
            over perfection, celebrate progress, use community support, and get
            medical advice when unsure.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>افسانہ:</strong> "صرف مٹھائی سے ذیابیطس ہوتی ہے۔"
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>حقیقت:</strong> کئی طرح کے ریفائنڈ کاربس (سفید چاول، بیکری
            اشیاء، میٹھے مشروبات) گلوکوز بڑھاتے ہیں۔ کل پیٹرن اہم ہے: مقدار،
            تعداد، اور مجموعی کھانے کا توازن۔
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>افسانہ:</strong> "اگر میں روز چلوں تو جتنی چاہوں مٹھائی کھا
            سکتا ہوں۔"
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>حقیقت:</strong> ورزش طاقتور ہے، لیکن مسلسل زیادہ چینی والی،
            زیادہ مقدار کی غذا سے آگے نہیں نکل سکتے۔ دونوں مل کر کام کریں:
            ہوشیار غذا <strong>اور</strong> باقاعدہ سرگرمی۔
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>افسانہ:</strong> "دیسی گھی ہمیشہ 'اچھی چکنائی' ہے اس لیے
            جتنا چاہوں استعمال کر سکتا ہوں۔"
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>حقیقت:</strong> معیار اہم ہے — لیکن مقدار بھی اہمیت رکھتی
            ہے۔ چکنائیاں کیلوری سے بھرپور ہیں؛ کسی بھی چکنائی کی <em>زیادتی</em>{" "}
            پیشرفت روک سکتی ہے۔
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>افسانہ:</strong> "روزہ رکھنے سے میری شوگر ٹھیک ہو جائے گی۔"
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>حقیقت:</strong> بہت سے لوگ منظم روزے میں بہتری دیکھتے ہیں،
            لیکن یہ ہر کسی کے لیے نہیں۔ دوائیں لینے کا وقت، ہائپوگلیسیمیا کا
            خطرہ، اور مجموعی غذائیت — خاص طور پر رمضان میں — اہمیت رکھتے ہیں۔
          </p>
        </div>

        <div>
          <p className="text-gray-900 font-semibold mb-2">
            <strong>افسانہ:</strong> "جڑی بوٹیاں یا 'قدرتی' مصنوعات ہمیشہ محفوظ
            ہیں۔"
          </p>
          <p className="text-gray-700 leading-relaxed">
            <strong>حقیقت:</strong> "قدرتی" ہمیشہ محفوظ یا کارآمد نہیں۔ کچھ
            مصنوعات دوائیوں کے ساتھ تعامل کرتی ہیں یا جگر/گردوں کو نقصان پہنچاتی
            ہیں۔ ہمیشہ اپنے ڈاکٹر سے مشورہ کریں۔
          </p>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>بہتر سوچ:</strong> چھوٹی مستقل تبدیلیاں، کمال کی بجائے مستقل
            مزاجی، پیشرفت کا جشن منائیں، کمیونٹی کی مدد لیں، اور شک ہو تو طبی
            مشورہ لیں۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "clinical-corner",
    titleEn: "Clinical Corner — For professionals & curious readers",
    titleUr: "کلینیکل کارنر — پیشہ ور افراد اور متجسس قارئین کے لیے",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          This site keeps public pages simple. For deeper reading: mechanisms of{" "}
          <strong>GLP-1 receptor agonists</strong>, links between{" "}
          <strong>NAFLD</strong> and insulin resistance, typical indications for{" "}
          <strong>bariatric/metabolic surgery</strong> (e.g., severe obesity
          with comorbidities), and practical approaches to sleep apnea, PCOS,
          and hypertension in the context of weight and glucose control.
          We&apos;ll provide plain-language summaries and point to the latest
          guidance for local practice where available.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Practical pearls:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Approaches that blend{" "}
              <strong>
                nutrition, movement, sleep hygiene, and behavioural coaching
              </strong>{" "}
              outperform single-focus plans.
            </li>
            <li>
              <strong>Structured follow-up</strong> (e.g., 4–6 weeks) beats
              ad-hoc check-ins.
            </li>
            <li>
              In South Asian populations, consider{" "}
              <strong>lower BMI/waist thresholds</strong> for risk conversations
              and counselling.
            </li>
            <li>
              For people on insulin or sulfonylureas, pair lifestyle counselling
              with <strong>hypoglycaemia safety</strong>.
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>Caveat:</strong> Clinical decisions must be personalised.
            Nothing here replaces formal guidelines or a full clinical
            assessment.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          یہ سائٹ عوامی صفحات کو سادہ رکھتی ہے۔ گہرے مطالعے کے لیے:{" "}
          <strong>GLP-1 ریسیپٹر ایگونسٹس</strong> کے طریقہ کار،{" "}
          <strong>NAFLD</strong> اور انسولین مزاحمت کے درمیان تعلق،{" "}
          <strong>باریاٹرک/میٹابولک سرجری</strong> کے عام اشارے (مثلاً شدید
          موٹاپا اور بیماریوں کے ساتھ)، اور وزن و گلوکوز کنٹرول کے تناظر میں
          نیند کی کمی، PCOS، اور ہائی بلڈ پریشر کے عملی طریقے۔ ہم سادہ زبان میں
          خلاصے فراہم کریں گے اور جہاں ممکن ہو مقامی پریکٹس کے لیے تازہ ترین
          رہنمائی کی طرف اشارہ کریں گے۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">عملی نکات:</h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>غذائیت، حرکت، نیند کی صفائی، اور رویے کی کوچنگ</strong> کو
              یکجا کرنے والے طریقے واحد توجہ والے منصوبوں سے بہتر نتائج دیتے
              ہیں۔
            </li>
            <li>
              <strong>منظم فالو اپ</strong> (مثلاً 4–6 ہفتے) بے ترتیب چیک-انز سے
              بہتر ہے۔
            </li>
            <li>
              جنوبی ایشیائی آبادیوں میں، خطرے کی گفتگو اور مشاورت کے لیے{" "}
              <strong>کم BMI/کمر کی حد</strong> پر غور کریں۔
            </li>
            <li>
              انسولین یا سلفونیلیوریاز پر موجود لوگوں کے لیے، طرز زندگی کی
              مشاورت کے ساتھ <strong>ہائپوگلیسیمیا کی حفاظت</strong> شامل کریں۔
            </li>
          </ul>
        </div>

        <div>
          <p className="text-gray-700 leading-relaxed">
            <strong>نوٹ:</strong> کلینیکل فیصلے ذاتی ہونے چاہئیں۔ یہاں کچھ بھی
            رسمی رہنما خطوط یا مکمل کلینیکل تشخیص کا متبادل نہیں۔
          </p>
        </div>
      </div>
    ),
  },
];

export default function LearnClient() {
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
                {locale === "ur" ? "سیکھیں" : "Learn"}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {locale === "ur"
                  ? "ڈائیبیسٹی کو سمجھنا یہاں سے شروع ہوتا ہے۔ خطرے کے عوامل کے بارے میں جانیں، عام افسانوں کو رد کریں، اور وہ علم حاصل کریں جو آپ کو اپنی صحت پر قابو پانے کے لیے چاہیے۔"
                  : "Understanding diabesity starts here. Learn about risk factors, debunk common myths, and get the knowledge you need to take control of your health."}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                alt="Learn about health"
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
            {locale === "ur" ? "حصے" : "Sections"}
          </h2>
          <ul className="space-y-4">
            {learnContent.map((section) => (
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
          {learnContent.map((section) => (
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
