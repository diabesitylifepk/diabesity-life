"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

function getHowToSections(t: (key: string) => string) {
  return [
    { id: "how-to-start", title: t("howTo.sections.start.title") },
    { id: "how-to-exercise", title: t("howTo.sections.exercise.title") },
    { id: "how-to-read-labels", title: t("howTo.sections.readLabels.title") },
    {
      id: "how-to-handle-social-events",
      title: t("howTo.sections.socialEvents.title"),
    },
    {
      id: "how-to-use-prescription-treatments",
      title: t("howTo.sections.prescriptionTreatments.title"),
    },
    {
      id: "how-to-handle-blood-sugar",
      title: t("howTo.sections.bloodSugar.title"),
    },
  ];
}

const howToContent = [
  {
    id: "how-to-start",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Change sticks when it's <strong>clear, kind, and consistent</strong>.
          Think in <strong>12-week blocks</strong> with simple weekly focuses.
          In <strong>Week 1</strong>, establish anchors: drink water before
          meals; add a fist-size portion of vegetables to lunch and dinner; walk
          10–15 minutes after two meals; set a regular bedtime. Swap one sugary
          drink for water or sugar-free. Weigh yourself once (morning, empty
          stomach) and measure waist; then forget the scale until Week 4. Track
          three checkboxes daily: <strong>water, veg, walk</strong>.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 2–4</h3>
          <p className="text-gray-700 leading-relaxed">
            Upgrade breakfast with <strong>protein first</strong> (eggs, yogurt,
            daal). Plate meals in the kitchen, on{" "}
            <strong>smaller plates</strong>, and sit at a table (not on the
            sofa). Use the <strong>two-item rule</strong> at events (one savoury
            + one sweet, both small). Test <strong>pause points</strong>: set
            down the spoon midway, take two breaths, ask "Am I 7/10 full?" If
            yes, stop. Do a <strong>5-minute tidy and stretch</strong> before
            bed to wind down. Re-measure waist at Week 4 and review progress
            notes, not just kilos.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 5–8</h3>
          <p className="text-gray-700 leading-relaxed">
            Add <strong>resistance work</strong> twice weekly (home bands,
            bodyweight). Try a <strong>Ramadan-style plate</strong> year-round:
            dates are for special days; focus iftar-like on water + balanced
            plate. Introduce <strong>meal planning</strong>: a weekly protein
            (grilled chicken/daal), a veg base, and a starch you control.
            Schedule a <strong>doctor or dietitian check-in</strong> if your
            quiz risk was Medium/High. Tweak meds only under supervision.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Weeks 9–12</h3>
          <p className="text-gray-700 leading-relaxed">
            Layer <strong>habit strengtheners</strong>: plan for weddings,
            travel, exams. Practice <strong>urge surfing</strong> (delay a
            craving by 10 minutes with water, breathing, quick walk). Consider
            adding a <strong>high-protein snack</strong> on hectic days to
            prevent overeating later. Celebrate non-scale wins: energy, sleep,
            stable moods, fewer cravings, easier stairs. At Week 12, decide the{" "}
            <strong>next block</strong>. Sustainable change is a loop—not a
            finish line.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          تبدیلی تب پائیدار ہوتی ہے جب وہ{" "}
          <strong>واضح، مہربان اور مستقل</strong> ہو۔{" "}
          <strong>12 ہفتوں کے بلاک</strong> میں سوچیں اور ہر ہفتے ایک سادہ توجہ
          مرکوز کریں۔ <strong>پہلے ہفتے</strong> میں بنیادی عادات قائم کریں:
          کھانے سے پہلے پانی پیئں؛ دوپہر اور رات کے کھانے میں مٹھی بھر سبزیاں
          شامل کریں؛ دو کھانوں کے بعد 10–15 منٹ چلیں؛ سونے کا وقت مقرر کریں۔
          کوئی ایک میٹھا مشروب پانی یا شوگر فری سے بدلیں۔ ایک بار (صبح، خالی
          پیٹ) وزن کریں اور کمر ناپیں؛ پھر چوتھے ہفتے تک ترازو بھول جائیں۔
          روزانہ تین چیک باکس ٹریک کریں: <strong>پانی، سبزیاں، چلنا</strong>۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">ہفتے 2–4</h3>
          <p className="text-gray-700 leading-relaxed">
            ناشتے کو <strong>پروٹین فرسٹ</strong> (انڈے، دہی، دال) سے بہتر
            بنائیں۔ <strong>چھوٹی پلیٹوں</strong> میں رسوئی میں کھانا نکالیں اور
            میز پر بیٹھ کر کھائیں (صوفے پر نہیں)۔ تقریبات میں{" "}
            <strong>دو آئٹم اصول</strong> استعمال کریں (ایک نمکین + ایک میٹھا،
            دونوں چھوٹا)۔ <strong>وقفے کے نکات</strong> آزمائیں: کھانے کے درمیان
            چمچ رکھ دیں، دو سانس لیں، پوچھیں "کیا میں 7/10 پیٹ بھرا ہوں؟" اگر
            ہاں، رک جائیں۔ سونے سے پہلے <strong>5 منٹ صفائی اور اسٹریچ</strong>{" "}
            کریں۔ چوتھے ہفتے کمر دوبارہ ناپیں اور صرف کلو نہیں، اپنی ترقی کے
            نوٹس دیکھیں۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">ہفتے 5–8</h3>
          <p className="text-gray-700 leading-relaxed">
            ہفتے میں دو بار <strong>مزاحمتی ورزش</strong> شامل کریں (گھریلو
            بینڈز، جسمانی وزن)۔ سال بھر <strong>رمضان طرز کی پلیٹ</strong>{" "}
            آزمائیں: کھجوریں خاص موقعوں کے لیے ہیں؛ پانی + متوازن پلیٹ پر توجہ
            دیں۔ <strong>کھانے کی منصوبہ بندی</strong> شروع کریں: ہفتہ وار
            پروٹین (گرلڈ چکن/دال)، ایک سبزی کی بنیاد، اور اپنی پسند کا نشاستہ۔
            اگر آپ کا خطرہ درمیانہ/زیادہ تھا تو{" "}
            <strong>ڈاکٹر یا ڈائیٹیشن سے ملیں</strong>۔ ادویات صرف نگرانی میں
            تبدیل کریں۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">ہفتے 9–12</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong>عادت کو مضبوط</strong> کریں: شادیوں، سفر، امتحانوں کے لیے
            منصوبہ بنائیں۔ <strong>اُرج سرفنگ</strong> مشق کریں (کریونگ کو 10
            منٹ تاخیر دیں: پانی، سانس لینا، مختصر چہل قدمی)۔ مصروف دنوں میں
            زیادہ کھانے سے بچنے کے لیے <strong>اعلیٰ پروٹین ناشتہ</strong> شامل
            کریں۔ بغیر ترازو کی کامیابیاں سیلیبریٹ کریں: توانائی، نیند، مستحکم
            موڈ، کم کریونگ، سیڑھیاں آسان۔ 12ویں ہفتے میں{" "}
            <strong>اگلا بلاک</strong> طے کریں۔ پائیدار تبدیلی ایک لوپ ہے — ختم
            ہونے والی لکیر نہیں۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-exercise",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Start where you are. For most healthy adults, aim for{" "}
          <strong>150+ minutes/week</strong> of moderate activity plus{" "}
          <strong>2 days</strong> of strength work. For beginners, do{" "}
          <strong>10-15 minute</strong> bouts: chair sit-to-stands, wall
          push-ups, step-ups on a sturdy stool, easy marching in place. Build a{" "}
          <strong>simple circuit</strong> (4-6 moves, 30-45 seconds on, 15-30
          off) and repeat twice. Add <strong>stretching</strong> for tight
          hips/hamstrings and 2 minutes of <strong>nasal breathing</strong> at
          the end.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Safety tips:</h3>
          <p className="text-gray-700 leading-relaxed">
            If you use insulin or certain tablets, check for{" "}
            <strong>low sugar</strong> risk; keep{" "}
            <strong>15 g fast carbs</strong> handy. Avoid high-heat workouts
            outdoors in summer; prefer mornings/evenings or an indoor fan. In{" "}
            <strong>Ramadan</strong>, shift resistance work to{" "}
            <strong>post-iftar</strong> and keep it short. For knee pain, focus
            on <strong>glute/hip strength</strong>,{" "}
            <strong>shorter stride walking</strong>, and{" "}
            <strong>low-impact</strong> options (cycling, swimming). If dizzy,
            very breathless, or in chest pain—
            <strong>stop and seek medical help</strong>.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          وہیں سے شروع کریں جہاں آپ ہیں۔ اکثر صحت مند بالغوں کے لیے، ہفتے میں{" "}
          <strong>150+ منٹ</strong> اعتدال پسند سرگرمی اور <strong>2 دن</strong>{" "}
          طاقت کی ورزش کا ہدف رکھیں۔ ابتداء کرنے والوں کے لیے،{" "}
          <strong>10–15 منٹ</strong> کے بلاک کریں: کرسی پر بیٹھنا اٹھنا، دیوار
          سے پش-اپس، مضبوط اسٹول پر قدم رکھنا، آسان مارچ۔ ایک{" "}
          <strong>سادہ سرکٹ</strong> بنائیں (4–6 حرکات، 30–45 سیکنڈ کام، 15–30
          آرام) اور دو بار دوہرائیں۔ کولہوں/ہیمسٹرنگ کے لیے{" "}
          <strong>اسٹریچنگ</strong> اور آخر میں 2 منٹ{" "}
          <strong>ناک سے سانس لینا</strong> شامل کریں۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            حفاظتی تجاویز:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            اگر آپ انسولین یا کچھ گولیاں استعمال کرتے ہیں تو{" "}
            <strong>کم شوگر</strong> کے خطرے کا جائزہ لیں؛{" "}
            <strong>15 گرام فاسٹ کاربس</strong> قریب رکھیں۔ گرمیوں میں باہر تیز
            گرمی میں ورزش سے بچیں؛ صبح/شام یا اندر پنکھے کے ساتھ ترجیح دیں۔{" "}
            <strong>رمضان</strong> میں مزاحمتی ورزش{" "}
            <strong>افطار کے بعد</strong> کریں اور مختصر رکھیں۔ گھٹنے کے درد کے
            لیے <strong>گلوٹ/ہپ کی طاقت</strong>،{" "}
            <strong>چھوٹے قدموں سے چلنا</strong>، اور <strong>کم اثر</strong>{" "}
            آپشنز (سائیکلنگ، تیراکی) پر توجہ دیں۔ اگر چکر آئیں، سانس پھولے، یا
            سینے میں درد ہو — <strong>رک جائیں اور طبی مدد لیں</strong>۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-read-labels",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Labels on milk, biscuits, juices, and snacks can be confusing. Scan{" "}
          <strong>serving size</strong> first: many packs list small servings
          that understate sugar and calories. Check{" "}
          <strong>total sugars</strong> and <strong>added sugars</strong>; in
          many products they're similar. Learn sugar aliases:{" "}
          <strong>glucose syrup, maltodextrin, dextrose, HFCS</strong> (rare
          locally but possible). Watch <strong>trans fat</strong> (avoid
          "partially hydrogenated"). Sodium hides in{" "}
          <strong>instant noodles, chips, biscuits</strong>—compare brands and
          pick lower-sodium options.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Quick heuristics:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If <strong>sugar</strong> is in the first 3 ingredients, treat as a
            dessert. If a cereal says "whole grain," confirm by ingredient
            order. "Low-fat" dairy can still have <strong>added sugar</strong>;
            check the table. For juices/nectars, prefer{" "}
            <strong>whole fruit</strong> or water. For sweeteners, use modestly;
            some people notice improved control simply by{" "}
            <strong>dropping sweet tea</strong> from twice daily to once or
            none.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          دودھ، بسکٹ، جوسز اور اسنیکس کے لیبل الجھن پیدا کر سکتے ہیں۔ پہلے{" "}
          <strong>سرونگ سائز</strong> دیکھیں: بہت سے پیکٹ چھوٹی سرونگ بتاتے ہیں
          جو چینی اور کیلوریز کم ظاہر کرتی ہیں۔ <strong>کُل چینی</strong> اور{" "}
          <strong>اضافی چینی</strong> چیک کریں؛ بہت سی مصنوعات میں یہ برابر ہوتی
          ہیں۔ چینی کے دوسرے نام سیکھیں:{" "}
          <strong>گلوکوز سیرپ، مالٹوڈیکسٹرن، ڈیکسٹروز، HFCS</strong> (مقامی طور
          پر کم لیکن ممکن)۔ <strong>ٹرانس فیٹ</strong> سے بچیں ("partially
          hydrogenated" سے پرہیز کریں)۔ انسٹنٹ نوڈلز، چپس، بسکٹ میں{" "}
          <strong>سوڈیم</strong> چھپا ہوتا ہے — برانڈز کا موازنہ کریں اور کم
          سوڈیم والا انتخاب کریں۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">فوری اصول:</h3>
          <p className="text-gray-700 leading-relaxed">
            اگر پہلے تین اجزاء میں <strong>چینی</strong> ہو تو اسے مٹھائی
            سمجھیں۔ اگر کوئی سیریل "whole grain" کہے تو اجزاء کی ترتیب سے تصدیق
            کریں۔ "Low-fat" ڈیری میں بھی <strong>اضافی چینی</strong> ہو سکتی ہے؛
            ٹیبل ضرور چیک کریں۔ جوسز/نیکٹارز کی بجائے <strong>پورا پھل</strong>{" "}
            یا پانی کو ترجیح دیں۔ میٹھا کرنے والی اشیاء کم استعمال کریں؛ بہت سے
            لوگ صرف <strong>میٹھی چائے دن میں دو سے ایک یا صفر</strong> کرنے سے
            بہتری محسوس کرتے ہیں۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "how-to-handle-social-events",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Go with a <strong>pre-plan</strong>: drink a full glass of water
          before entering, <strong>scan the spread</strong>, then pick{" "}
          <strong>one savoury + one sweet</strong> (small). Eat slowly, stand
          away from the buffet, and keep a <strong>non-sugary drink</strong> in
          hand. If relatives insist, respond kindly: "Doctor ne portion chhota
          rakhne ko kaha hai." For cravings at home, try the{" "}
          <strong>3-step</strong>: water → slow breathing → short walk or call a
          friend. If the craving remains, choose <strong>protein + veg</strong>{" "}
          first. Build a <strong>back-up kit</strong> (roasted chana, nuts,
          sugar-free gum) for late-night and travel scenarios.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          ایک <strong>پہلے سے منصوبہ</strong> بنا کر جائیں: داخل ہونے سے پہلے
          پانی کا پورا گلاس پیئں، <strong>کھانے کا جائزہ لیں</strong>، پھر{" "}
          <strong>ایک نمکین + ایک میٹھا</strong> (دونوں چھوٹا) چنیں۔ آہستہ
          کھائیں، بوفے سے دور کھڑے رہیں، اور ہاتھ میں{" "}
          <strong>بغیر چینی کا مشروب</strong> رکھیں۔ اگر رشتے دار اصرار کریں تو
          مہربانی سے جواب دیں: "ڈاکٹر نے حصہ چھوٹا رکھنے کو کہا ہے۔" گھر میں
          کریونگ کے لیے <strong>3 قدمی طریقہ</strong> آزمائیں: پانی ← آہستہ سانس
          ← مختصر چہل قدمی یا کسی دوست کو فون۔ اگر کریونگ برقرار رہے تو پہلے{" "}
          <strong>پروٹین + سبزیاں</strong> کھائیں۔ رات کے وقت اور سفر کے لیے{" "}
          <strong>بیک اپ کٹ</strong> بنائیں (بھنا چنا، گریاں، شوگر فری گم)۔
        </p>
      </div>
    ),
  },
  {
    id: "how-to-use-prescription-treatments",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Follow your clinician's instructions <strong>exactly</strong>. For{" "}
          <strong>GLP-1 pens</strong> (e.g., Ozempic), inject weekly on the same
          day, rotate sites, and store per leaflet (unused in the{" "}
          <strong>fridge</strong>, in-use often at <strong>room temp</strong>{" "}
          for limited days). Start <strong>low and go slow</strong> to reduce
          nausea; eat smaller, protein-forward meals.{" "}
          <strong>Do not combine</strong> oral and injectable semaglutide. For{" "}
          <strong>metformin</strong>, take with meals and ask about{" "}
          <strong>extended-release</strong> if stomach upset occurs. If you feel
          unwell (vomiting, dizziness, very low or very high sugars),{" "}
          <strong>contact your clinician</strong>. Never buy injectables from{" "}
          <strong>unverified sellers</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اپنے معالج کی ہدایات <strong>بالکل درست طریقے سے</strong> پیروی کریں۔{" "}
          <strong>GLP-1 پینز</strong> (مثلاً Ozempic) کے لیے، ہر ہفتے ایک ہی دن
          انجیکشن لگائیں، جگہیں بدلتے رہیں، اور لیف لیٹ کے مطابق ذخیرہ کریں (غیر
          استعمال شدہ <strong>فریج</strong> میں، استعمال میں اکثر{" "}
          <strong>کمرے کے درجہ حرارت</strong> پر محدود دنوں کے لیے)۔ متلی کم
          کرنے کے لیے <strong>کم خوراک سے شروع کریں</strong>؛ چھوٹے، پروٹین سے
          بھرپور کھانے کھائیں۔ زبانی اور انجیکشن سیماگلوٹائڈ کو{" "}
          <strong>یکجا نہ کریں</strong>۔ <strong>میٹفارمن</strong> کے لیے کھانے
          کے ساتھ لیں اور پیٹ کی تکلیف ہو تو <strong>extended-release</strong>{" "}
          کے بارے میں پوچھیں۔ اگر طبیعت خراب ہو (الٹی، چکر، بہت کم یا بہت زیادہ
          شوگر) تو <strong>اپنے معالج سے رابطہ کریں</strong>۔ کبھی بھی{" "}
          <strong>غیر مصدقہ فروشندگان</strong> سے انجیکشن نہ خریدیں۔
        </p>
      </div>
    ),
  },
  {
    id: "how-to-handle-blood-sugar",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          If you monitor sugars: <strong>&lt;70 mg/dL</strong> is low; use the{" "}
          <strong>15-gram rule</strong> (3-4 glucose tabs or small juice),
          recheck in 15 minutes, repeat if needed, then eat a balanced snack.
          For <strong>very high</strong> readings, hydrate, walk gently (if
          safe), and call your clinician for next steps. Keep a{" "}
          <strong>wallet card</strong> with emergency contacts and medication
          list. Family members should learn to recognize{" "}
          <strong>hypo signs</strong> (sweating, shakiness, confusion) and{" "}
          <strong>hyper signs</strong> (thirst, frequent urination, fatigue).
          When unsure—<strong>seek medical advice promptly</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اگر آپ شوگر چیک کرتے ہیں: <strong dir="ltr">&lt;70 mg/dL</strong> کم
          شوگر ہے؛ <strong>15 گرام اصول</strong> استعمال کریں (3–4 گلوکوز ٹیبلٹ
          یا چھوٹا جوس)، 15 منٹ بعد دوبارہ چیک کریں، ضرورت ہو تو دوبارہ کریں،
          پھر متوازن ناشتہ کھائیں۔ <strong>بہت زیادہ</strong> ریڈنگز کے لیے،
          پانی پیئں، آہستہ چلیں (اگر محفوظ ہو)، اور اگلے اقدامات کے لیے معالج کو
          فون کریں۔ ایک <strong>والٹ کارڈ</strong> رکھیں جس میں ہنگامی رابطے اور
          ادویات کی فہرست ہو۔ خاندان کے افراد کو <strong>ہائپو علامات</strong>{" "}
          (پسینہ، کپکپی، الجھن) اور <strong>ہائپر علامات</strong> (پیاس، بار بار
          پیشاب، تھکاوٹ) پہچاننا سکھائیں۔ جب شک ہو —{" "}
          <strong>فوری طور پر طبی مشورہ لیں</strong>۔
        </p>
      </div>
    ),
  },
];

export default function HowToClient() {
  const { t, locale } = useLanguage();
  const howToSections = getHowToSections(t);

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
                {t("howTo.hero.heading")}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {t("howTo.hero.description")}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=2072"
                alt="How to guide"
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
            {t("howTo.sectionsLabel")}
          </h2>
          <ul className="space-y-4">
            {howToSections.map((section) => (
              <li key={section.id} className="flex items-start">
                <span className="text-primary mr-3 rtl:mr-0 rtl:ml-3 mt-1.5 text-xl">
                  &#8226;
                </span>
                <button
                  onClick={() => scrollToSection(section.id)}
                  className="text-primary hover:text-primary/80 font-medium text-lg md:text-xl text-left rtl:text-right transition-colors"
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
          {howToContent.map((section, i) => (
            <div key={section.id}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                  {howToSections[i].title}
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
