"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const dietContent = [
  {
    id: "ask-a-nutritionist",
    titleEn: "Ask a Nutritionist — When guidance saves time",
    titleUr: "نیوٹریشنسٹ سے پوچھیں — جب رہنمائی وقت بچاتی ہے",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          If you have{" "}
          <strong>diabetes, PCOS, pregnancy, kidney/liver issues</strong>, or
          struggle with planning, a qualified dietitian can tailor carbs,
          protein, and timing around your life, medicines, and budget. A single
          consult can clarify <strong>portion sizes, Ramadan strategy</strong>,
          and <strong>grocery lists</strong> for the whole family. If you book
          online, confirm <strong>credentials</strong>, ask for{" "}
          <strong>written plans</strong>, and schedule a{" "}
          <strong>follow-up in 4–6 weeks</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اگر آپ کو{" "}
          <strong>ذیابیطس، PCOS، حمل، گردے/جگر کے مسائل</strong> ہیں یا
          منصوبہ بندی مشکل لگتی ہے، تو ایک اہل ڈائیٹیشن آپ کی زندگی، ادویات
          اور بجٹ کے مطابق کاربس، پروٹین اور کھانے کا وقت ترتیب دے سکتا ہے۔
          ایک مشاورت <strong>حصوں کا سائز، رمضان کی حکمت عملی</strong> اور پورے
          خاندان کے لیے <strong>گروسری لسٹ</strong> واضح کر سکتی ہے۔ اگر آپ
          آن لائن بک کرتے ہیں تو <strong>اسناد</strong> کی تصدیق کریں،{" "}
          <strong>تحریری منصوبہ</strong> مانگیں، اور{" "}
          <strong>4–6 ہفتوں میں فالو اپ</strong> شیڈول کریں۔
        </p>
      </div>
    ),
  },
  {
    id: "desi-meal-makeovers",
    titleEn:
      "Desi Meal Makeovers — Enjoy the food you love, with smarter swaps",
    titleUr: "دیسی کھانوں کا میک اوور — پسندیدہ کھانے، ہوشیار ردوبدل کے ساتھ",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Pakistani meals can be heart-healthy without losing flavour. A
          &quot;makeover&quot; is not a punishment; it&apos;s a series of small,
          repeatable tweaks. Start by re-balancing the <strong>plate</strong>:
          half vegetables/salad (cooked or raw), a quarter{" "}
          <strong>protein</strong> (daal, chicken, fish, eggs, yogurt), and a
          quarter <strong>carbs</strong> (roti or rice). For{" "}
          <strong>biryani/nihari/qorma</strong>, shrink the carb portion and add
          a protein-plus-fiber side (raita with grated cucumber, mixed salad,
          sautéed bhindi). Use <strong>less oil</strong> and prefer{" "}
          <strong>stews/grills</strong> to deep-fries on routine days. Switch
          from heaped tablespoons of ghee/oil to{" "}
          <strong>measured teaspoons</strong>.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Batch-cook basic components: boiled chana/daal, grilled chicken
          strips, mixed veg—then assemble in different ways through the week.
          For <strong>roti</strong>, try smaller diameter or use{" "}
          <strong>bajra/jowar</strong> mixes a few times a week. For rice
          lovers, pre-boil and <strong>drain starchy water</strong>, then mix
          with veg and protein (pulao style). Keep <strong>spices</strong>—they
          deliver joy without extra calories. The goal is a taste-faithful home
          menu that quietly cuts excess carbs and oil. Over a month, these
          shifts add up to better energy, waist reduction, and steadier sugars.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          پاکستانی کھانے ذائقہ کھوئے بغیر دل کے لیے صحت مند ہو سکتے ہیں۔
          "میک اوور" سزا نہیں؛ یہ چھوٹی، دوہرائی جانے والی تبدیلیوں کی ایک
          سیریز ہے۔ <strong>پلیٹ</strong> کو دوبارہ متوازن کرنے سے شروع کریں:
          آدھی سبزیاں/سلاد (پکی یا کچی)، ایک چوتھائی{" "}
          <strong>پروٹین</strong> (دال، چکن، مچھلی، انڈے، دہی)، اور ایک
          چوتھائی <strong>کاربس</strong> (روٹی یا چاول)۔{" "}
          <strong>بریانی/نہاری/قورمے</strong> کے لیے کارب حصہ چھوٹا کریں اور
          پروٹین + فائبر سائیڈ شامل کریں (گراٹیڈ کھیرے کے ساتھ رائتہ، ملا
          جلا سلاد، بھنی بھنڈی)۔ <strong>کم تیل</strong> استعمال کریں اور
          معمول کے دنوں میں ڈیپ فرائی کی بجائے{" "}
          <strong>سٹیو/گرلڈ</strong> کو ترجیح دیں۔ گھی/تیل کے بھرے چمچوں سے{" "}
          <strong>ناپے ہوئے چائے کے چمچ</strong> پر جائیں۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          بنیادی اجزاء بیچ کک کریں: ابلا چنا/دال، گرلڈ چکن اسٹرپس، ملی جلی
          سبزیاں — پھر ہفتے بھر مختلف طریقوں سے ترتیب دیں۔{" "}
          <strong>روٹی</strong> کے لیے چھوٹا قطر آزمائیں یا ہفتے میں چند بار{" "}
          <strong>باجرا/جوار</strong> کی ملاوٹ استعمال کریں۔ چاول کے شائقین
          کے لیے: پہلے ابالیں اور{" "}
          <strong>نشاستے کا پانی نکال دیں</strong>، پھر سبزی اور پروٹین کے
          ساتھ ملائیں (پلاؤ انداز)۔ <strong>مسالے</strong> رکھیں — وہ اضافی
          کیلوریز کے بغیر لذت دیتے ہیں۔ ہدف ہے ایک ذائقہ دار گھریلو مینو جو
          چپکے سے اضافی کاربس اور تیل کم کرے۔ ایک مہینے میں یہ تبدیلیاں بہتر
          توانائی، کمر میں کمی اور مستحکم شوگر میں جمع ہو جاتی ہیں۔
        </p>
      </div>
    ),
  },
  {
    id: "low-gi-tips",
    titleEn:
      "Low-GI & Glycaemic Load Tips — Local choices that blunt sugar spikes",
    titleUr:
      "لو-GI اور گلائسیمک لوڈ تجاویز — شوگر کا اضافہ کم کرنے والے مقامی انتخاب",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Instead of banning foods, learn which <strong>combinations</strong>{" "}
          slow glucose rise. Pair carbs with <strong>protein and fiber</strong>:
          daal-roti with salad, rice with chana and vegetables, fruit with a
          handful of nuts. Choose <strong>whole grains</strong> (bajra, jowar,
          oats), <strong>legumes</strong> (daal, chana, rajma), and{" "}
          <strong>non-starchy vegetables</strong> (cucumber, karela, saag,
          gobi). Keep portions of <strong>white rice/naan</strong> smaller;
          prefer <strong>roti</strong> over naan; explore{" "}
          <strong>brown basmati</strong> if acceptable. For snacks, try{" "}
          <strong>roasted chana</strong>, <strong>fruit + yogurt</strong>,{" "}
          <strong>boiled eggs</strong>, or <strong>chicken tikka</strong>{" "}
          without extra oil.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Timing matters: avoid <strong>late-night heavy meals</strong>, and try{" "}
          <strong>post-meal 10–15-minute walks</strong> to improve glucose
          handling. During <strong>Ramadan</strong>, plan{" "}
          <strong>suhoor</strong> with protein + slow carbs (oats, daal, eggs)
          and <strong>iftar</strong> with dates + water, followed by a balanced
          plate rather than a fried-food buffet.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          کھانے بند کرنے کی بجائے سیکھیں کہ کون سے{" "}
          <strong>امتزاج</strong> گلوکوز کا اضافہ سست کرتے ہیں۔ کاربس کے ساتھ{" "}
          <strong>پروٹین اور فائبر</strong> ملائیں: دال-روٹی سلاد کے ساتھ،
          چاول چنے اور سبزیوں کے ساتھ، پھل مٹھی بھر گریوں کے ساتھ۔{" "}
          <strong>سارے اناج</strong> (باجرا، جوار، اوٹس)،{" "}
          <strong>پھلیاں</strong> (دال، چنا، راجمہ)، اور{" "}
          <strong>غیر نشاستہ دار سبزیاں</strong> (کھیرا، کریلا، ساگ، گوبی)
          منتخب کریں۔ <strong>سفید چاول/نان</strong> کے حصے چھوٹے رکھیں؛ نان
          کی بجائے <strong>روٹی</strong> کو ترجیح دیں؛ قابل قبول ہو تو{" "}
          <strong>بھورا بسمتی</strong> آزمائیں۔ ناشتے کے لیے:{" "}
          <strong>بھنا چنا</strong>، <strong>پھل + دہی</strong>،{" "}
          <strong>ابلے انڈے</strong>، یا اضافی تیل کے بغیر{" "}
          <strong>چکن ٹکہ</strong> آزمائیں۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          وقت اہم ہے: <strong>رات کو دیر سے بھاری کھانے</strong> سے بچیں، اور
          گلوکوز کو بہتر ہینڈل کرنے کے لیے{" "}
          <strong>کھانے کے بعد 10–15 منٹ کی چہل قدمی</strong> کریں۔{" "}
          <strong>رمضان</strong> میں <strong>سحری</strong> پروٹین + آہستہ کاربس
          (اوٹس، دال، انڈے) سے منصوبہ بنائیں اور <strong>افطار</strong> کھجوریں
          + پانی سے کریں، پھر تلے ہوئے کھانوں کی بجائے متوازن پلیٹ لیں۔
        </p>
      </div>
    ),
  },
  {
    id: "portion-control",
    titleEn:
      "Portion Control & Practical Guides — Visual rules that work in real kitchens",
    titleUr:
      "حصے کا کنٹرول اور عملی گائیڈز — بصری اصول جو اصل باورچی خانوں میں کام کرتے ہیں",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Portion control is a skill. Replace vague advice with{" "}
          <strong>visual rules</strong>. Use the <strong>hand method</strong>:
          protein = palm, carbs = cupped hand (or half roti), fats = thumb,
          vegetables = two open hands. Eat on <strong>smaller plates</strong>{" "}
          and <strong>plate in the kitchen</strong> (don&apos;t serve
          family-style if you tend to refill). Start meals with{" "}
          <strong>water + salad</strong> to reduce overeating. Add{" "}
          <strong>&quot;pause points&quot;</strong>: halfway through, put the
          spoon down, take two deep breaths, ask &quot;Am I at 7/10 full?&quot;
          If yes, save the rest.
        </p>
        <p className="text-gray-700 leading-relaxed">
          For chai culture, negotiate <strong>frequency and size</strong>. Take{" "}
          <strong>unsweetened or lightly sweetened chai</strong> and pair with{" "}
          <strong>protein</strong> (egg, chana) instead of biscuits. If you love
          paratha, reserve it for <strong>two mornings/week</strong> and use
          tissue-pressed, shallow-fried versions. At dawats/weddings, follow the{" "}
          <strong>two-item rule</strong>: one savoury + one sweet, both small;
          skip sugary drinks; add water. Portion control is about{" "}
          <strong>enjoying the same foods</strong> in amounts that keep you
          energized rather than sleepy.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          حصے کا کنٹرول ایک مہارت ہے۔ مبہم مشورے کو{" "}
          <strong>بصری اصولوں</strong> سے بدلیں۔{" "}
          <strong>ہاتھ کا طریقہ</strong> استعمال کریں: پروٹین = ہتھیلی، کاربس
          = مٹھی بھرا ہاتھ (یا آدھی روٹی)، چکنائی = انگوٹھا، سبزیاں = دو کھلے
          ہاتھ۔ <strong>چھوٹی پلیٹوں</strong> پر کھائیں اور{" "}
          <strong>باورچی خانے میں کھانا نکالیں</strong> (خاندانی انداز سے سرو نہ
          کریں اگر دوبارہ لینے کی عادت ہو)۔ کھانا{" "}
          <strong>پانی + سلاد</strong> سے شروع کریں تاکہ زیادہ کھانے سے بچیں۔{" "}
          <strong>"توقف کے نکات"</strong> شامل کریں: آدھے راستے میں چمچ رکھ
          دیں، دو گہری سانس لیں، پوچھیں "کیا میں 7/10 پیٹ بھرا ہوں؟" اگر ہاں،
          باقی بچا لیں۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          چائے کی ثقافت کے لیے <strong>تعداد اور سائز</strong> پر گفتگو کریں۔{" "}
          <strong>بغیر چینی یا کم میٹھی چائے</strong> لیں اور بسکٹ کی بجائے{" "}
          <strong>پروٹین</strong> (انڈہ، چنا) کے ساتھ پیئں۔ اگر پراٹھا پسند ہے
          تو اسے <strong>ہفتے میں دو صبح</strong> کے لیے رکھیں اور ٹشو سے دبی،
          کم تیل والی ورژن استعمال کریں۔ دعوتوں/شادیوں میں{" "}
          <strong>دو آئٹم اصول</strong> پر عمل کریں: ایک نمکین + ایک میٹھا،
          دونوں چھوٹا؛ میٹھے مشروبات چھوڑیں؛ پانی شامل کریں۔ حصے کا کنٹرول یہ
          ہے کہ <strong>وہی کھانے</strong> اتنی مقدار میں کھائیں جو آپ کو
          تھکاوٹ کی بجائے توانائی دے۔
        </p>
      </div>
    ),
  },
  {
    id: "sample-diet-plans",
    titleEn: "Sample Diet Plans — Budget, Moderate, and Clinical tracks",
    titleUr: "نمونہ غذائی منصوبے — بجٹ، اعتدال پسند، اور کلینیکل ٹریکس",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Give yourself options that match your reality: -{" "}
          <strong>Budget plan:</strong> Roti with daal/egg, seasonal veg, small
          rice days, boiled chana, and homemade raita. One fruit/day, nuts 3–4
          days/week. Minimal packaged snacks. -{" "}
          <strong>Moderate plan:</strong> Add fish/chicken twice weekly, brown
          basmati sometimes, yogurt smoothies (no sugar), light tikkas, more
          salad variety. - <strong>Clinical plan (with dietitian):</strong>{" "}
          Tailored carbs/protein/fat targets, medication-timed meals, special
          needs (PCOS, kidney issues), Ramadan adjustments.
        </p>
        <p className="text-gray-700 leading-relaxed">
          Example day (weight-loss intent): Breakfast: omelet with veg + small
          roti; chai with little/no sugar.
          <br />
          Lunch: daal + salad + small rice; yogurt raita.
          <br />
          Snack: fruit + 8–10 nuts.
          <br />
          Dinner: chicken tikka + sautéed veg + small roti.
          <br />
          Walk 10–15 mins after lunch and dinner.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          اپنی حقیقت سے میل کھاتے اختیارات دیں: —{" "}
          <strong>بجٹ منصوبہ:</strong> دال/انڈے کے ساتھ روٹی، موسمی سبزیاں،
          چھوٹے چاول کے دن، ابلا چنا، اور گھریلو رائتہ۔ ایک پھل/دن، گریاں
          3–4 دن/ہفتہ۔ کم سے کم پیکڈ اسنیکس۔ —{" "}
          <strong>اعتدال پسند منصوبہ:</strong> ہفتے میں دو بار مچھلی/چکن شامل
          کریں، کبھی کبھی بھورا بسمتی، بغیر چینی کے دہی کی اسموتھیز، ہلکے
          ٹکے، زیادہ سلاد کی اقسام۔ —{" "}
          <strong>کلینیکل منصوبہ (ڈائیٹیشن کے ساتھ):</strong> ذاتی
          کاربس/پروٹین/چکنائی کے اہداف، دوا کے وقت کے مطابق کھانا، خاص
          ضروریات (PCOS، گردے کے مسائل)، رمضان کی ایڈجسٹمنٹ۔
        </p>
        <p className="text-gray-700 leading-relaxed">
          مثال دن (وزن کم کرنے کا ارادہ): ناشتہ: سبزی کے ساتھ آملیٹ + چھوٹی
          روٹی؛ کم/بغیر چینی چائے۔
          <br />
          دوپہر کا کھانا: دال + سلاد + چھوٹے چاول؛ دہی رائتہ۔
          <br />
          اسنیک: پھل + 8–10 گریاں۔
          <br />
          رات کا کھانا: چکن ٹکہ + بھنی سبزیاں + چھوٹی روٹی۔
          <br />
          دوپہر اور رات کے کھانے کے بعد 10–15 منٹ چلیں۔
        </p>
      </div>
    ),
  },
  {
    id: "snacking-street-food",
    titleEn:
      "Snacking & Street-Food Survival — Realistic rules for real life",
    titleUr:
      "اسنیکنگ اور اسٹریٹ فوڈ کا سروائیول — حقیقی زندگی کے لیے حقیقت پسند اصول",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Set <strong>guardrails</strong>, not bans. If you love{" "}
          <strong>samosa/chaat/bun kebab</strong>, limit to{" "}
          <strong>once per week</strong>, share with a friend, add water and
          salad/raita, and avoid sugary drinks. Pick <strong>grilled</strong>{" "}
          over deep-fried when possible; ask vendors to{" "}
          <strong>hold extra chutney/syrups</strong>. Keep a{" "}
          <strong>&quot;back-up snack kit&quot;</strong> in your bag (roasted
          chana, nuts, sugar-free gum) to dodge impulsive choices when hungry or
          stuck in traffic. For travel and office days, pack{" "}
          <strong>egg wraps, fruit, yogurt, or leftover tikka</strong>. When
          cravings hit at night, take <strong>two minutes</strong>: water, slow
          breaths, quick stretch; if still hungry, choose{" "}
          <strong>protein + veg</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>پابندیاں نہیں، حد بندیاں</strong> مقرر کریں۔ اگر آپ{" "}
          <strong>سموسہ/چاٹ/بن کباب</strong> پسند کرتے ہیں تو{" "}
          <strong>ہفتے میں ایک بار</strong> تک محدود کریں، کسی دوست کے ساتھ
          شیئر کریں، پانی اور سلاد/رائتہ شامل کریں، اور میٹھے مشروبات سے
          پرہیز کریں۔ ممکن ہو تو ڈیپ فرائی کی بجائے{" "}
          <strong>گرلڈ</strong> انتخاب کریں؛ وینڈر سے{" "}
          <strong>اضافی چٹنی/سیرپ نہ ڈالنے</strong> کی درخواست کریں۔ اپنے بیگ
          میں <strong>"بیک اپ اسنیک کٹ"</strong> رکھیں (بھنا چنا، گریاں،
          شوگر فری گم) تاکہ بھوک یا ٹریفک میں آوارہ انتخاب سے بچیں۔ سفر اور
          دفتری دنوں کے لیے{" "}
          <strong>انڈے کے ریپ، پھل، دہی، یا بچا ہوا ٹکہ</strong> پیک کریں۔
          جب رات کو کریونگ آئے تو <strong>دو منٹ</strong> لیں: پانی، آہستہ
          سانس، مختصر اسٹریچ؛ اگر پھر بھی بھوک ہو تو{" "}
          <strong>پروٹین + سبزیاں</strong> کھائیں۔
        </p>
      </div>
    ),
  },
  {
    id: "supplements-herbal-remedies",
    titleEn: "Supplements & Herbal Remedies — What helps, what to skip",
    titleUr: "سپلیمنٹس اور جڑی بوٹیوں کے علاج — کیا مدد کرتا ہے، کیا چھوڑنا ہے",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Be sceptical of &quot;miracle&quot; weight-loss teas or pills. Some
          products are <strong>unsafe</strong> or <strong>ineffective</strong>.
          Evidence supports <strong>adequate protein</strong>,{" "}
          <strong>fiber</strong>, and in some cases <strong>vitamin D</strong>{" "}
          if deficient. Discuss <strong>omega-3</strong> for triglycerides with
          your doctor. Be cautious with <strong>fat burners</strong> and{" "}
          <strong>unregulated herbal mixes</strong>; they can interact with
          medicines or stress the liver. If you try something new,{" "}
          <strong>note any side effects</strong>, keep doses small, and{" "}
          <strong>tell your clinician</strong>.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          "معجزاتی" وزن کم کرنے والی چائے یا گولیوں کے بارے میں شکوک رکھیں۔
          کچھ مصنوعات <strong>غیر محفوظ</strong> یا{" "}
          <strong>غیر موثر</strong> ہیں۔ ثبوت{" "}
          <strong>مناسب پروٹین</strong>، <strong>فائبر</strong>، اور کچھ
          صورتوں میں کمی ہونے پر <strong>وٹامن ڈی</strong> کی حمایت کرتے ہیں۔
          ٹرائیگلیسرائیڈز کے لیے اپنے ڈاکٹر سے{" "}
          <strong>اومیگا-3</strong> پر بات کریں۔{" "}
          <strong>فیٹ برنرز</strong> اور{" "}
          <strong>غیر منظم جڑی بوٹیوں کی ملاوٹ</strong> سے ہوشیار رہیں؛ یہ
          ادویات کے ساتھ تعامل کر سکتے ہیں یا جگر کو نقصان پہنچا سکتے ہیں۔
          اگر کوئی نئی چیز آزمائیں تو{" "}
          <strong>کوئی بھی ضمنی اثر نوٹ کریں</strong>، خوراک چھوٹی رکھیں، اور{" "}
          <strong>اپنے معالج کو بتائیں</strong>۔
        </p>
      </div>
    ),
  },
  {
    id: "behavioural-tools",
    titleEn: "Behavioural Tools — Make habits stick",
    titleUr: "رویے کے اوزار — عادتیں پائیدار بنائیں",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Use <strong>implementation intentions</strong>: &quot;If X happens, I
          will do Y&quot; (e.g., &quot;If I&apos;m offered mithai at work,
          I&apos;ll take a half piece and eat it slowly after lunch&quot;). Keep{" "}
          <strong>visible cues</strong>: salad bowl on the counter, filled water
          bottle on your desk, pre-cut veg in the fridge. Track{" "}
          <strong>three basics</strong> daily: steps, portions of veg, and sweet
          drinks. Reward consistency, not perfection. If you &quot;fall
          off&quot; during a wedding week,{" "}
          <strong>reboot the very next meal</strong>. Progress beats perfection.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>نفاذ کے ارادے</strong> استعمال کریں: "اگر X ہو تو میں Y
          کروں گا" (مثلاً "اگر مجھے دفتر میں مٹھائی پیش کی جائے تو میں آدھا
          ٹکڑا لوں گا اور دوپہر کے کھانے کے بعد آہستہ کھاؤں گا")۔{" "}
          <strong>نظر آنے والے اشارے</strong> رکھیں: کاؤنٹر پر سلاد کا پیالہ،
          ڈیسک پر بھری پانی کی بوتل، فریج میں کٹی ہوئی سبزیاں۔ روزانہ{" "}
          <strong>تین بنیادی چیزیں</strong> ٹریک کریں: قدم، سبزیوں کے حصے،
          اور میٹھے مشروبات۔ کمال کی نہیں،{" "}
          <strong>مستقل مزاجی</strong> کو انعام دیں۔ اگر شادی کے ہفتے "پٹری
          سے اتر جائیں" تو{" "}
          <strong>فوری اگلے کھانے سے دوبارہ شروع کریں</strong>۔ پیشرفت کمال
          سے بہتر ہے۔
        </p>
      </div>
    ),
  },
];

export default function DietClient() {
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
                {locale === "ur" ? "غذا" : "Diet"}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {locale === "ur"
                  ? "پاکستانی کھانوں کے لیے عملی غذائی رہنمائی۔ سیکھیں کہ اپنی پلیٹ کو کیسے متوازن کریں، ہوشیار غذائی ردوبدل کریں، اور اپنی صحت کا انتظام کرتے ہوئے دیسی کھانوں سے لطف اندوز ہوں — کوئی پابندی نہیں، صرف توازن۔"
                  : "Practical nutrition guidance tailored for Pakistani meals. Learn how to balance your plate, make smart food swaps, and enjoy desi cuisine while managing your health—no restriction, just balance."}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=2053"
                alt="Healthy diet"
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
            {dietContent.map((section) => (
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
          {dietContent.map((section) => (
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
