"use client";

import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";

const glpContent = [
  {
    id: "obesity-diabetes-connection",
    titleEn: "What is Diabesity?",
    titleUr: "ڈائیبیسٹی کیا ہے؟",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Excess visceral fat changes how cells respond to{" "}
          <strong>insulin</strong>, the hormone that moves glucose from blood
          into cells. Think of insulin as a key; in insulin resistance, the
          locks (cell receptors) become rusty, so the key works poorly. The
          pancreas compensates by making more insulin—until it can&apos;t. Blood
          glucose rises, and over time Type 2 diabetes may develop.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Key drivers of the link:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Abdominal fat</strong> and liver fat (non-alcoholic fatty
              liver) fuel insulin resistance.
            </li>
            <li>
              <strong>Inflammation</strong>: excess fat tissue releases
              inflammatory signals that worsen metabolic control.
            </li>
            <li>
              <strong>Sleep & stress</strong>: poor sleep and chronic stress
              elevate cortisol, pushing glucose up and cravings higher.
            </li>
            <li>
              <strong>PCOS</strong> (in many women) and{" "}
              <strong>low testosterone</strong> (in some men) add insulin
              resistance, weight gain, and mood shifts.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Break the cycle:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Modest weight loss</strong> (even 5–7%) measurably
              improves sugar control and energy.
            </li>
            <li>
              <strong>Meal timing</strong>: space out sweets; avoid grazing all
              day; aim for steady eating windows.
            </li>
            <li>
              <strong>Protein-first</strong> at meals; add fiber (veg/daal) to
              blunt sugar spikes.
            </li>
            <li>
              <strong>Medication</strong> when appropriate—some help with weight
              and insulin sensitivity.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why this matters in Pakistan:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Our food culture is rich and social—chai, mithai, iftar spreads,
            wedding menus. You don&apos;t have to give up your culture. Instead,
            adapt it. Celebrate, then return to routine. It&apos;s the{" "}
            <strong>long-term pattern</strong> that shapes health.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          زیادہ احشائی چربی اس طریقے کو بدل دیتی ہے جس سے خلیے{" "}
          <strong>انسولین</strong> پر ردعمل ظاہر کرتے ہیں — وہ ہارمون جو خون سے
          گلوکوز کو خلیوں میں منتقل کرتا ہے۔ انسولین کو ایک چابی سمجھیں؛ انسولین
          مزاحمت میں، تالے (خلیوں کے ریسیپٹرز) زنگ آلود ہو جاتے ہیں اور چابی
          ٹھیک سے کام نہیں کرتی۔ لبلبہ زیادہ انسولین بنا کر معاوضہ دیتا ہے —
          یہاں تک کہ وہ ناکام ہو جائے۔ خون میں گلوکوز بڑھتا ہے، اور وقت کے ساتھ
          ٹائپ 2 ذیابیطس ہو سکتی ہے۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            ربط کے اہم عوامل:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>پیٹ کی چربی</strong> اور جگر کی چربی (غیر الکوہلی فیٹی
              لیور) انسولین مزاحمت کو بڑھاتے ہیں۔
            </li>
            <li>
              <strong>سوزش</strong>: زیادہ چربی والے ٹشوز سوزش کے اشارے چھوڑتے
              ہیں جو میٹابولک کنٹرول کو خراب کرتے ہیں۔
            </li>
            <li>
              <strong>نیند اور تناؤ</strong>: خراب نیند اور دائمی تناؤ کورٹیسول
              بڑھاتا ہے، جس سے گلوکوز اور کریونگ دونوں اوپر جاتے ہیں۔
            </li>
            <li>
              <strong>PCOS</strong> (بہت سی خواتین میں) اور{" "}
              <strong>کم ٹیسٹوسٹیرون</strong> (کچھ مردوں میں) انسولین مزاحمت،
              وزن اور موڈ تبدیلیاں بڑھاتے ہیں۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">چکر توڑیں:</h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>معمولی وزن میں کمی</strong> (یہاں تک کہ 5–7٪) شوگر کنٹرول
              اور توانائی کو واضح طور پر بہتر کرتی ہے۔
            </li>
            <li>
              <strong>کھانے کا وقت</strong>: مٹھاس کے درمیان وقفہ دیں؛ پورا دن
              چھوٹے چھوٹے کھانے سے بچیں؛ مستقل کھانے کی ونڈو مقرر کریں۔
            </li>
            <li>
              کھانے میں <strong>پروٹین پہلے</strong>؛ فائبر (سبزیاں/دال) شامل
              کریں تاکہ شوگر کا اضافہ کم ہو۔
            </li>
            <li>
              مناسب ہونے پر <strong>دوائیں</strong> — کچھ وزن اور انسولین کی
              حساسیت میں مدد کرتی ہیں۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            پاکستان میں اس کی اہمیت:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            ہماری غذائی ثقافت امیر اور سماجی ہے — چائے، مٹھائی، افطار کی
            دسترخوان، شادی کا مینو۔ آپ کو اپنی ثقافت نہیں چھوڑنی۔ بلکہ اسے
            ڈھالیں۔ جشن منائیں، پھر روٹین پر واپس آجائیں۔ صحت کو شکل دیتا ہے{" "}
            <strong>طویل مدتی پیٹرن</strong>۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "diabetes-101",
    titleEn: "What is Diabetes?",
    titleUr: "ذیابیطس کیا ہے؟",
    content: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-700 leading-relaxed">
            Understanding a health condition is the first step toward managing
            it. At its core, diabetes is a condition that affects how your body
            turns food into energy. Think of it like this:
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              You eat food, which your body breaks down into a sugar called{" "}
              <strong>glucose</strong>.
            </li>
            <li>
              This glucose enters your bloodstream, raising your blood sugar
              levels.
            </li>
            <li>
              Your pancreas releases a hormone called <strong>insulin</strong>.
            </li>
            <li>
              <strong>Insulin acts like a key</strong>, unlocking your body's
              cells to let the glucose in, where it's used for energy.
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mt-2">
            In diabetes, this process is disrupted. There are two main ways this
            can happen, which define the two main types of diabetes.
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Type 1 Diabetes: An Autoimmune Condition
          </h3>
          <p>
            In Type 1 diabetes, the body's immune system—which normally fights
            off infections—mistakenly attacks and destroys the insulin-producing
            cells (beta cells) in the pancreas. It's like the body has lost the
            factory that makes the "keys."
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              <strong>Cause:</strong> An autoimmune reaction. The exact trigger
              is unknown, but genetics and environmental factors (like viruses)
              may play a role.{" "}
              <strong>It is not caused by diet or lifestyle.</strong>
            </li>
            <li>
              <strong>Insulin Production:</strong> The body produces very little
              or no insulin.
            </li>
            <li>
              <strong>Who it Affects:</strong> It's most often diagnosed in
              children, teens, and young adults, but it can develop at any age.
            </li>
            <li>
              <strong>Management:</strong> People with Type 1 diabetes must take
              insulin every day to live. This is done through multiple daily
              injections or an insulin pump.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Type 2 Diabetes: Insulin Resistance
          </h3>
          <p>
            Type 2 diabetes is the most common form. In this case, the body's
            "key factory" (the pancreas) is still working, but the "locks" on
            the cells are faulty. This is called{" "}
            <strong>insulin resistance.</strong> Initially, the pancreas works
            overtime to produce more insulin to overcome this resistance. Over
            time, however, it can't keep up, and blood sugar levels rise.
          </p>
          <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>
              <strong>Cause:</strong> A combination of strong genetic
              predisposition and lifestyle factors.{" "}
              <strong>
                Obesity is the single biggest risk factor for developing Type 2
                diabetes.
              </strong>
            </li>
            <li>
              <strong>Insulin Production:</strong> The body either doesn't use
              insulin effectively (insulin resistance) or, in later stages,
              doesn't produce enough insulin.
            </li>
            <li>
              <strong>Who it Affects:</strong> It most often develops in people
              over age 45, but rates are rising dramatically in younger adults,
              teens, and children.
            </li>
            <li>
              <strong>Management:</strong> Management focuses on:
            </li>
            <li>
              <strong>Lifestyle:</strong> Healthy eating, regular physical
              activity, and weight loss.
            </li>
            <li>
              <strong>Oral Medications:</strong> Pills that help the body use
              insulin better or make less glucose.
            </li>
            <li>
              <strong>Injectable Medications:</strong> Including insulin or
              other drugs (like GLP-1 agonists) that help manage blood sugar.
            </li>
          </ul>
        </div>

        {/* At-a-Glance Comparison Table */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            At-a-Glance: Type 1 vs. Type 2 Diabetes
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-4 pr-4 font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">
                    Type 1 Diabetes
                  </th>
                  <th className="text-left py-4 pl-4 font-bold text-gray-900">
                    Type 2 Diabetes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Primary Problem
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Body cannot produce insulin.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Body cannot use insulin effectively (insulin resistance).
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">Cause</td>
                  <td className="py-4 px-4 text-gray-700">
                    Autoimmune disease.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Strong genetic link plus lifestyle factors (obesity,
                    inactivity).
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Typical Onset
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Rapid, often in childhood or young adulthood.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Gradual, usually in adulthood, but increasing in youth.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Prevention
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Cannot be prevented.
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Can often be prevented or delayed with a healthy lifestyle.
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900">
                    Treatment
                  </td>
                  <td className="py-4 px-4 text-gray-700">
                    Requires daily insulin (injections or pump).
                  </td>
                  <td className="py-4 pl-4 text-gray-700">
                    Lifestyle changes, oral medications, and sometimes insulin.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Everyday signals
          </h3>
          <p className="text-gray-700 leading-relaxed">
            may include more thirst, more urination (especially at night),
            blurry vision, fatigue, slow-healing cuts, repeated infections
            (skin, gums), or tingling feet. Some people feel nothing—hence the
            value of screening.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Common tests:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Fasting plasma glucose</strong> (after 8–12 hours without
              food).
            </li>
            <li>
              <strong>HbA1c</strong> (average sugar over ~3 months).
            </li>
            <li>
              <strong>Random glucose</strong> (spot check with symptoms). Your
              doctor decides which test to use, how often to repeat it, and what
              target is appropriate for your age, pregnancy status, other
              conditions, and medications.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why it happens:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Genetics + lifestyle + environment. High refined carbs (white rice,
            bakery items), sugary beverages, stress, poor sleep, and low
            activity make the pancreas work overtime, then underperform. Weight
            around the abdomen amplifies insulin resistance.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What helps right now:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              Build <strong>balanced plates</strong> (add protein like
              daal/chicken/fish/eggs; keep rotis smaller; add salad/veg).
            </li>
            <li>
              <strong>Move daily</strong> (even 10–15 minute walks after meals
              help).
            </li>
            <li>
              <strong>Medication</strong> when prescribed (metformin is common
              first-line; others exist).
            </li>
            <li>
              <strong>Routine checks</strong> (sugars, HbA1c, blood pressure,
              cholesterol, kidney function, eye & foot exams).
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Complications, briefly:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            If sugars remain high for years, risks rise for heart disease,
            stroke, kidney disease, nerve damage, and eye problems. Early
            action, even small changes, lowers risk.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Next step:</h3>
          <p className="text-gray-700 leading-relaxed">
            Use the <strong>HbA1c Translator</strong> in Tools to understand
            typical targets (your doctor&apos;s plan rules). Then book a{" "}
            <strong>baseline consult</strong> if your risk is elevated.
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <div>
          <p className="text-gray-700 leading-relaxed">
            کسی صحت کی حالت کو سمجھنا اسے سنبھالنے کی پہلی سیڑھی ہے۔ بنیادی طور
            پر، ذیابیطس ایک ایسی حالت ہے جو آپ کے جسم کے کھانے کو توانائی میں
            بدلنے کے طریقے پر اثر ڈالتی ہے۔ اسے اس طرح سمجھیں:
          </p>
          <ul className="list-disc pr-6 mt-2 text-gray-700">
            <li>
              آپ کھانا کھاتے ہیں، جسے جسم ایک چینی میں توڑتا ہے جسے{" "}
              <strong>گلوکوز</strong> کہتے ہیں۔
            </li>
            <li>یہ گلوکوز خون میں داخل ہو کر بلڈ شوگر بڑھاتا ہے۔</li>
            <li>
              لبلبہ <strong>انسولین</strong> نامی ہارمون چھوڑتا ہے۔
            </li>
            <li>
              <strong>انسولین ایک چابی کی طرح</strong> کام کرتی ہے، جسم کے خلیوں
              کو کھول کر گلوکوز کو داخل کرتی ہے جہاں وہ توانائی کے لیے استعمال
              ہوتا ہے۔
            </li>
          </ul>
        </div>
        <div>
          <p className="text-gray-700 leading-relaxed mt-2">
            ذیابیطس میں یہ عمل متاثر ہو جاتا ہے۔ ایسا دو بنیادی طریقوں سے ہو
            سکتا ہے، جو ذیابیطس کی دو اہم اقسام کی تعریف کرتے ہیں۔
          </p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            ٹائپ 1 ذیابیطس: ایک خودکار مدافعتی حالت
          </h3>
          <p className="text-gray-700 leading-relaxed">
            ٹائپ 1 ذیابیطس میں، جسم کا مدافعتی نظام — جو عام طور پر انفیکشن سے
            لڑتا ہے — غلطی سے لبلبے میں انسولین بنانے والے خلیوں (بیٹا خلیوں) پر
            حملہ کر کے انہیں تباہ کر دیتا ہے۔ یوں لگتا ہے جیسے جسم نے "چابیاں
            بنانے والی فیکٹری" کھو دی ہو۔
          </p>
          <ul className="list-disc pr-6 mt-2 text-gray-700">
            <li>
              <strong>وجہ:</strong> ایک خودکار مدافعتی ردعمل۔ اصل محرک نامعلوم
              ہے، لیکن جینیاتی اور ماحولیاتی عوامل (جیسے وائرس) کردار ادا کر
              سکتے ہیں۔ <strong>یہ غذا یا طرز زندگی سے نہیں ہوتی۔</strong>
            </li>
            <li>
              <strong>انسولین کی پیداوار:</strong> جسم بہت کم یا کوئی انسولین
              نہیں بناتا۔
            </li>
            <li>
              <strong>کسے ہوتی ہے:</strong> زیادہ تر بچوں، نوعمروں اور نوجوان
              بالغوں میں تشخیص ہوتی ہے، لیکن کسی بھی عمر میں ہو سکتی ہے۔
            </li>
            <li>
              <strong>انتظام:</strong> ٹائپ 1 کے مریضوں کو زندہ رہنے کے لیے
              روزانہ انسولین لینی پڑتی ہے — متعدد روزانہ انجیکشنوں یا انسولین
              پمپ کے ذریعے۔
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            ٹائپ 2 ذیابیطس: انسولین مزاحمت
          </h3>
          <p className="text-gray-700 leading-relaxed">
            ٹائپ 2 ذیابیطس سب سے عام قسم ہے۔ اس صورت میں جسم کی "چابی کی فیکٹری"
            (لبلبہ) کام کرتی رہتی ہے، لیکن خلیوں کے "تالے" خراب ہیں۔ اسے{" "}
            <strong>انسولین مزاحمت</strong> کہتے ہیں۔ ابتداء میں لبلبہ اس مزاحمت
            پر قابو پانے کے لیے زیادہ انسولین بناتا ہے۔ وقت کے ساتھ یہ پیچھے رہ
            جاتا ہے، اور بلڈ شوگر بڑھ جاتی ہے۔
          </p>
          <ul className="list-disc pr-6 mt-2 text-gray-700">
            <li>
              <strong>وجہ:</strong> مضبوط جینیاتی رجحان اور طرز زندگی کے عوامل
              کا مجموعہ۔{" "}
              <strong>موٹاپا ٹائپ 2 ذیابیطس کا سب سے بڑا واحد خطرہ ہے۔</strong>
            </li>
            <li>
              <strong>انسولین کی پیداوار:</strong> جسم یا تو انسولین مؤثر طریقے
              سے استعمال نہیں کرتا (انسولین مزاحمت) یا بعد کے مراحل میں کافی
              انسولین نہیں بناتا۔
            </li>
            <li>
              <strong>کسے ہوتی ہے:</strong> عام طور پر 45 سال سے زیادہ عمر میں،
              لیکن نوجوان بالغوں، نوعمروں اور بچوں میں تیزی سے بڑھ رہی ہے۔
            </li>
            <li>
              <strong>انتظام:</strong> انتظام ان پر توجہ مرکوز کرتا ہے:
            </li>
            <li>
              <strong>طرز زندگی:</strong> صحت بخش کھانا، باقاعدہ جسمانی سرگرمی،
              اور وزن میں کمی۔
            </li>
            <li>
              <strong>زبانی ادویات:</strong> گولیاں جو جسم کو انسولین بہتر
              استعمال کرنے یا کم گلوکوز بنانے میں مدد کرتی ہیں۔
            </li>
            <li>
              <strong>انجیکشن ادویات:</strong> بشمول انسولین یا دیگر ادویات
              (جیسے GLP-1 ایگونسٹس) جو بلڈ شوگر کنٹرول میں مدد کرتی ہیں۔
            </li>
          </ul>
        </div>

        {/* Comparison Table */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            ایک نظر میں: ٹائپ 1 بمقابلہ ٹائپ 2 ذیابیطس
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-right py-4 pr-4 font-bold text-gray-900">
                    خصوصیت
                  </th>
                  <th className="text-right py-4 px-4 font-bold text-gray-900">
                    ٹائپ 1 ذیابیطس
                  </th>
                  <th className="text-right py-4 pl-4 font-bold text-gray-900">
                    ٹائپ 2 ذیابیطس
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900 text-right">
                    بنیادی مسئلہ
                  </td>
                  <td className="py-4 px-4 text-gray-700 text-right">
                    جسم انسولین نہیں بنا سکتا۔
                  </td>
                  <td className="py-4 pl-4 text-gray-700 text-right">
                    جسم انسولین مؤثر طریقے سے استعمال نہیں کر سکتا (انسولین
                    مزاحمت)۔
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900 text-right">
                    وجہ
                  </td>
                  <td className="py-4 px-4 text-gray-700 text-right">
                    خودکار مدافعتی بیماری۔
                  </td>
                  <td className="py-4 pl-4 text-gray-700 text-right">
                    مضبوط جینیاتی تعلق اور طرز زندگی کے عوامل (موٹاپا، غیر
                    سرگرمی)۔
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900 text-right">
                    عام آغاز
                  </td>
                  <td className="py-4 px-4 text-gray-700 text-right">
                    تیز، اکثر بچپن یا جوانی میں۔
                  </td>
                  <td className="py-4 pl-4 text-gray-700 text-right">
                    آہستہ، عام طور پر بالغ عمر میں، لیکن نوجوانوں میں بھی بڑھ
                    رہا ہے۔
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900 text-right">
                    روک تھام
                  </td>
                  <td className="py-4 px-4 text-gray-700 text-right">
                    روکا نہیں جا سکتا۔
                  </td>
                  <td className="py-4 pl-4 text-gray-700 text-right">
                    صحت مند طرز زندگی سے اکثر روکا یا تاخیر کیا جا سکتا ہے۔
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-4 pr-4 font-bold text-gray-900 text-right">
                    علاج
                  </td>
                  <td className="py-4 px-4 text-gray-700 text-right">
                    روزانہ انسولین (انجیکشن یا پمپ) ضروری ہے۔
                  </td>
                  <td className="py-4 pl-4 text-gray-700 text-right">
                    طرز زندگی تبدیلیاں، زبانی ادویات، اور بعض اوقات انسولین۔
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            روزمرہ علامات
          </h3>
          <p className="text-gray-700 leading-relaxed">
            میں زیادہ پیاس، زیادہ پیشاب (خاص طور پر رات کو)، دھندلی نظر، تھکاوٹ،
            زخم دیر سے بھرنا، بار بار انفیکشن (جلد، مسوڑھے)، یا پاؤں میں
            جھنجھناہٹ شامل ہو سکتی ہیں۔ کچھ لوگ کچھ محسوس نہیں کرتے — اسی لیے
            اسکریننگ اہم ہے۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">عام ٹیسٹ:</h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>فاسٹنگ پلازما گلوکوز</strong> (8–12 گھنٹے بغیر کھانے کے)۔
            </li>
            <li>
              <strong>HbA1c</strong> (~3 ماہ کی اوسط شوگر)۔
            </li>
            <li>
              <strong>رینڈم گلوکوز</strong> (علامات کے ساتھ فوری جانچ)۔ آپ کا
              ڈاکٹر فیصلہ کرتا ہے کہ کون سا ٹیسٹ استعمال کرنا ہے، کتنی بار
              دوہرانا ہے، اور آپ کی عمر، حمل کی حالت اور ادویات کے لیے کون سا
              ہدف مناسب ہے۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            یہ کیوں ہوتا ہے:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            جینیاتی + طرز زندگی + ماحول۔ زیادہ ریفائنڈ کاربس (سفید چاول، بیکری
            اشیاء)، میٹھے مشروبات، تناؤ، خراب نیند اور کم سرگرمی لبلبے کو بہت
            زیادہ کام کرواتی ہے، پھر وہ کمزور پڑ جاتا ہے۔ پیٹ کے گرد وزن انسولین
            مزاحمت کو بڑھاتا ہے۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            ابھی کیا مدد کرتا ہے:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>متوازن پلیٹ</strong> بنائیں (پروٹین جیسے دال/چکن/مچھلی/
              انڈے؛ روٹیاں چھوٹی رکھیں؛ سلاد/سبزیاں شامل کریں)۔
            </li>
            <li>
              <strong>روزانہ حرکت کریں</strong> (کھانے کے بعد 10–15 منٹ کی چہل
              قدمی بھی مدد کرتی ہے)۔
            </li>
            <li>
              تجویز کردہ ہو تو <strong>دوائیں</strong> (میٹفارمن پہلی عام دوا
              ہے؛ اور بھی ہیں)۔
            </li>
            <li>
              <strong>روٹین چیک</strong> (شوگر، HbA1c، بلڈ پریشر، کولیسٹرول،
              گردے کا کام، آنکھ اور پاؤں کا معائنہ)۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            پیچیدگیاں، مختصراً:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            اگر شوگر برسوں تک زیادہ رہے تو دل کی بیماری، فالج، گردے کی بیماری،
            اعصابی نقصان اور آنکھ کے مسائل کا خطرہ بڑھتا ہے۔ جلدی عمل، یہاں تک
            کہ چھوٹی تبدیلیاں، خطرہ کم کرتی ہیں۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">اگلا قدم:</h3>
          <p className="text-gray-700 leading-relaxed">
            ٹولز میں <strong>HbA1c ترجمان</strong> استعمال کریں تاکہ عام اہداف
            سمجھ سکیں (آپ کے ڈاکٹر کا منصوبہ اصول ہے)۔ پھر اگر آپ کا خطرہ بڑھا
            ہوا ہو تو <strong>بیس لائن مشاورت</strong> بک کریں۔
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "obesity-101",
    titleEn: "What is Obesity?",
    titleUr: "موٹاپا کیا ہے؟",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          Obesity is not just about &quot;weight&quot; or looks; it&apos;s a
          chronic, medical condition involving excess body fat that affects
          hormones, metabolism, joints, and even mood. Doctors often use{" "}
          <strong>BMI (Body Mass Index)</strong> and{" "}
          <strong>waist circumference</strong> as starting points to assess
          health risk. BMI relates your weight to height, while waist size helps
          estimate abdominal (visceral) fat—fat that sits around internal organs
          and drives insulin resistance. In South Asian communities—including
          Pakistan—health risks can begin at{" "}
          <strong>lower BMI and waist sizes</strong> than many Western charts
          suggest, which is why a person can &quot;look normal&quot; yet face
          real metabolic risk.
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Types of body fat:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Subcutaneous fat</strong> sits under the skin (e.g.,
              thighs, arms).
            </li>
            <li>
              <strong>Visceral fat</strong> wraps organs (liver, pancreas) and
              is strongly linked to diabetes, high blood pressure, and heart
              disease. Reducing visceral fat—even modestly—improves insulin and
              energy.
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            The Clinical Classes of Obesity
          </h3>
          <p className="text-gray-700 leading-relaxed">
            Healthcare providers classify obesity into different classes to
            better understand health risks and determine appropriate treatment
            paths.
          </p>
        </div>

        {/* BMI Classification Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="text-left py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class
                </th>
                <th className="text-left py-4 px-4 font-bold text-gray-900 w-[20%]">
                  BMI Range
                </th>
                <th className="text-left py-4 pl-4 font-bold text-gray-900 w-[60%]">
                  Description & Associated Health Risk
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Overweight
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">25.0 – 29.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Elevated Risk.</strong> Not technically classified as
                  obesity, but this range indicates an increased risk of
                  developing obesity and related health problems.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class I Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">30.0 – 34.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Moderate Risk.</strong> This is the first clinical
                  stage of obesity. Health risks, including for Type 2 diabetes,
                  high blood pressure, and heart disease, are significant.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class II Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">35.0 – 39.9</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>High Risk.</strong> At this stage, the risk of
                  weight-related health complications is high. Many individuals
                  may be candidates for more intensive treatments, including
                  weight-loss surgery.
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  Class III Obesity
                </td>
                <td className="py-4 px-4 text-gray-700 w-[20%]">≥ 40.0</td>
                <td className="py-4 pl-4 text-gray-700 w-[60%]">
                  <strong>Very High / Severe Risk.</strong> Formerly known as
                  "morbid obesity," this class is associated with a very high
                  risk of developing serious health conditions, a reduced life
                  expectancy, and a lower quality of life if left untreated.
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Why does obesity develop?
          </h3>
          <p className="text-gray-700 leading-relaxed">
            It&apos;s multi-factorial: genetics, family routines, urban
            lifestyles, stress, poor sleep, medications, pregnancy-related
            changes, and food environments (sweet tea, refined carbs, large
            portions, frequent weddings/dawats). It isn&apos;t simply
            &quot;willpower.&quot; Hormones like <strong>insulin</strong> and{" "}
            <strong>GLP-1</strong> influence hunger/fullness, and chronic stress
            raises cortisol, pushing the body to store fat.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Health risks to watch:
          </h3>
          <p className="text-gray-700 leading-relaxed mb-3">
            Type 2 diabetes, fatty liver, high blood pressure, high cholesterol,
            joint pain, sleep apnea, infertility/irregular periods,
            depression/anxiety. The good news:{" "}
            <strong>small, steady changes</strong>—5–7% weight loss, more
            walking, better sleep, balanced desi meals—can meaningfully reduce
            risk.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            What actually helps:
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Balanced desi meals</strong> (protein + vegetables +
              controlled roti/rice), mindful portions.
            </li>
            <li>
              <strong>Daily movement</strong> (steps, home routines, mosque/park
              walks); sit less, move more.
            </li>
            <li>
              <strong>Sleep & stress</strong>: regular bedtimes, breathing
              exercises, frequent water.
            </li>
            <li>
              <strong>Medical guidance</strong> when needed: labs, medication,
              or referral.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">Next step:</h3>
          <p className="text-gray-700 leading-relaxed">
            Take the <strong>1-minute Risk Quiz</strong> to understand your
            baseline and get a simple action plan.{" "}
            <em>&quot;Doctor ki salah zaroori hai.&quot;</em>
          </p>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          موٹاپا صرف "وزن" یا ظاہری شکل کے بارے میں نہیں؛ یہ ایک دائمی طبی حالت
          ہے جس میں اضافی جسمانی چربی ہارمونز، میٹابولزم، جوڑوں اور موڈ کو متاثر
          کرتی ہے۔ ڈاکٹر اکثر <strong>BMI (باڈی ماس انڈیکس)</strong> اور{" "}
          <strong>کمر کی پیمائش</strong> کو صحت کے خطرے کا تخمینہ لگانے کے لیے
          استعمال کرتے ہیں۔ BMI آپ کے وزن کو قد سے جوڑتا ہے، جبکہ کمر کا سائز
          احشائی (visceral) چربی کا تخمینہ لگانے میں مدد کرتا ہے — وہ چربی جو
          اندرونی اعضاء کے گرد ہوتی ہے اور انسولین مزاحمت بڑھاتی ہے۔ جنوبی
          ایشیائی کمیونٹیز — بشمول پاکستان — میں صحت کے خطرے{" "}
          <strong>کم BMI اور کمر کے ناپ</strong> پر شروع ہو سکتے ہیں، یہی وجہ ہے
          کہ کوئی "نارمل" لگتا ہے لیکن اصل میٹابولک خطرہ موجود ہوتا ہے۔
        </p>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            جسمانی چربی کی اقسام:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>ذیلی جلدی چربی</strong> جلد کے نیچے ہوتی ہے (مثلاً ران،
              بازو)۔
            </li>
            <li>
              <strong>احشائی چربی</strong> اعضاء (جگر، لبلبہ) کے گرد ہوتی ہے اور
              ذیابیطس، ہائی بلڈ پریشر اور دل کی بیماری سے مضبوطی سے جڑی ہے۔
              احشائی چربی کم کرنا — یہاں تک کہ معمولی طور پر — انسولین اور
              توانائی بہتر کرتا ہے۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            موٹاپے کی کلینیکل کلاسز
          </h3>
          <p className="text-gray-700 leading-relaxed">
            صحت فراہم کرنے والے موٹاپے کو مختلف کلاسز میں تقسیم کرتے ہیں تاکہ
            صحت کے خطرات بہتر سمجھ سکیں اور مناسب علاج طے کریں۔
          </p>
        </div>

        {/* BMI Classification Table - Urdu */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="text-right py-4 pr-4 font-bold text-gray-900 w-[20%]">
                  کلاس
                </th>
                <th className="text-right py-4 px-4 font-bold text-gray-900 w-[20%]">
                  BMI رینج
                </th>
                <th className="text-right py-4 pl-4 font-bold text-gray-900 w-[60%]">
                  تفصیل اور صحت کا خطرہ
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 text-right w-[20%]">
                  زیادہ وزن
                </td>
                <td
                  className="py-4 px-4 text-gray-700 text-right w-[20%]"
                  dir="ltr"
                >
                  25.0 – 29.9
                </td>
                <td className="py-4 pl-4 text-gray-700 text-right w-[60%]">
                  <strong>بلند خطرہ۔</strong> تکنیکی طور پر موٹاپے میں شامل
                  نہیں، لیکن یہ رینج موٹاپے اور متعلقہ مسائل کے بڑھتے ہوئے خطرے
                  کی نشاندہی کرتی ہے۔
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 text-right w-[20%]">
                  کلاس I موٹاپا
                </td>
                <td
                  className="py-4 px-4 text-gray-700 text-right w-[20%]"
                  dir="ltr"
                >
                  30.0 – 34.9
                </td>
                <td className="py-4 pl-4 text-gray-700 text-right w-[60%]">
                  <strong>اعتدال پسند خطرہ۔</strong> موٹاپے کا پہلا کلینیکل
                  مرحلہ۔ ٹائپ 2 ذیابیطس، ہائی بلڈ پریشر اور دل کی بیماری کے
                  خطرات نمایاں ہیں۔
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 text-right w-[20%]">
                  کلاس II موٹاپا
                </td>
                <td
                  className="py-4 px-4 text-gray-700 text-right w-[20%]"
                  dir="ltr"
                >
                  35.0 – 39.9
                </td>
                <td className="py-4 pl-4 text-gray-700 text-right w-[60%]">
                  <strong>زیادہ خطرہ۔</strong> اس مرحلے پر وزن سے متعلق
                  پیچیدگیوں کا خطرہ زیادہ ہے۔ بہت سے افراد زیادہ گہرے علاج کے
                  امیدوار ہو سکتے ہیں، بشمول وزن کم کرنے کی سرجری۔
                </td>
              </tr>
              <tr className="border-b border-gray-300">
                <td className="py-4 pr-4 font-bold text-gray-900 text-right w-[20%]">
                  کلاس III موٹاپا
                </td>
                <td
                  className="py-4 px-4 text-gray-700 text-right w-[20%]"
                  dir="ltr"
                >
                  ≥ 40.0
                </td>
                <td className="py-4 pl-4 text-gray-700 text-right w-[60%]">
                  <strong>بہت زیادہ / شدید خطرہ۔</strong> پہلے "مربڈ اوبیسٹی"
                  کہلاتی تھی۔ سنگین بیماریوں کا بہت زیادہ خطرہ، علاج نہ ہونے پر
                  عمر اور معیار زندگی میں کمی۔
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            موٹاپا کیوں ہوتا ہے؟
          </h3>
          <p className="text-gray-700 leading-relaxed">
            یہ کثیر العوامل ہے: جینیاتی، خاندانی معمول، شہری طرز زندگی، تناؤ،
            خراب نیند، ادویات، حمل سے متعلق تبدیلیاں، اور کھانے کا ماحول (میٹھی
            چائے، ریفائنڈ کاربس، بڑے حصے، کثرت سے شادیاں/دعوتیں)۔ یہ صرف "قوت
            ارادی" نہیں۔ <strong>انسولین</strong> اور <strong>GLP-1</strong>{" "}
            جیسے ہارمونز بھوک/پیٹ بھرنے پر اثر ڈالتے ہیں، اور دائمی تناؤ
            کورٹیسول بڑھا کر جسم کو چربی جمع کرنے پر مجبور کرتا ہے۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            دھیان دینے والے صحت کے خطرات:
          </h3>
          <p className="text-gray-700 leading-relaxed">
            ٹائپ 2 ذیابیطس، فیٹی لیور، ہائی بلڈ پریشر، زیادہ کولیسٹرول، جوڑوں کا
            درد، نیند کی کمی، بانجھ پن/بے قاعدہ حیض، ڈپریشن/اضطراب۔ خوشخبری یہ
            ہے: <strong>چھوٹی، مستقل تبدیلیاں</strong> — 5–7٪ وزن میں کمی، زیادہ
            چلنا، بہتر نیند، متوازن دیسی کھانے — خطرہ معنی خیز طور پر کم کر سکتی
            ہیں۔
          </p>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            اصل میں کیا مدد کرتا ہے:
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>متوازن دیسی کھانا</strong> (پروٹین + سبزیاں + کنٹرول
              روٹی/چاول)، ذہن سے حصے۔
            </li>
            <li>
              <strong>روزانہ حرکت</strong> (قدم، گھریلو معمول، مسجد/پارک میں
              چلنا)؛ کم بیٹھیں، زیادہ حرکت کریں۔
            </li>
            <li>
              <strong>نیند اور تناؤ</strong>: باقاعدہ سونے کا وقت، سانس لینے کی
              مشقیں، کثرت سے پانی۔
            </li>
            <li>
              ضرورت پڑنے پر <strong>طبی رہنمائی</strong>: ٹیسٹ، دوائیں، یا
              ریفرل۔
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">اگلا قدم:</h3>
          <p className="text-gray-700 leading-relaxed">
            اپنی بیس لائن سمجھنے اور ایک سادہ ایکشن پلان پانے کے لیے{" "}
            <strong>1 منٹ کا خطرے کا کوئز</strong> لیں۔{" "}
            <em>"ڈاکٹر کی صلاح ضروری ہے۔"</em>
          </p>
        </div>
      </div>
    ),
  },
  {
    id: "glp1-agonists",
    titleEn: "GLP-1 Agonists & Newer Agents — What to know in Pakistan",
    titleUr: "GLP-1 ایگونسٹس اور نئے ادویات — پاکستان میں کیا جاننا ضروری ہے",
    content: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>GLP-1 receptor agonists</strong> (e.g.,{" "}
          <strong>Ozempic/semaglutide</strong>,{" "}
          <strong>Rybelsus oral semaglutide</strong>,{" "}
          <strong>liraglutide</strong>) act on hunger/fullness and insulin
          pathways. Many people notice{" "}
          <strong>reduced appetite, steadier sugars, and weight loss</strong>.
          Typical side effects are{" "}
          <strong>nausea, constipation, or reflux</strong> early on—often
          improved by <strong>slow dose titration</strong> and{" "}
          <strong>smaller meals</strong>. These medicines require medical
          supervision: they&apos;re not for everyone (e.g., certain endocrine
          conditions, pregnancy/breastfeeding). Never combine{" "}
          <strong>Ozempic and Rybelsus</strong>; they&apos;re the{" "}
          <strong>same molecule</strong> via different routes. If supplies vary
          by city, discuss <strong>alternatives and bridging plans</strong> with
          your clinician.
        </p>
      </div>
    ),
    urduContent: (
      <div className="space-y-6">
        <p className="text-gray-700 leading-relaxed">
          <strong>GLP-1 ریسیپٹر ایگونسٹس</strong> (مثلاً{" "}
          <strong>Ozempic/سیماگلوٹائڈ</strong>،{" "}
          <strong>Rybelsus زبانی سیماگلوٹائڈ</strong>،{" "}
          <strong>لیراگلوٹائڈ</strong>) بھوک/پیٹ بھرنے اور انسولین کے راستوں پر
          عمل کرتے ہیں۔ بہت سے لوگ{" "}
          <strong>بھوک میں کمی، مستحکم شوگر، اور وزن میں کمی</strong> محسوس کرتے
          ہیں۔ عام ضمنی اثرات ابتداء میں <strong>متلی، قبض، یا ریفلکس</strong>{" "}
          ہیں — جو اکثر <strong>آہستہ خوراک بڑھانے</strong> اور{" "}
          <strong>چھوٹے کھانوں</strong> سے بہتر ہو جاتے ہیں۔ ان ادویات کے لیے
          طبی نگرانی ضروری ہے: یہ سب کے لیے نہیں (مثلاً کچھ اینڈوکرائن حالات،
          حمل/دودھ پلانا)۔ کبھی <strong>Ozempic اور Rybelsus</strong> یکجا نہ
          کریں؛ یہ مختلف راستوں سے <strong>ایک ہی مالیکیول</strong> ہیں۔ اگر شہر
          میں سپلائی متغیر ہو تو اپنے معالج سے{" "}
          <strong>متبادل اور عبوری منصوبوں</strong> پر بات کریں۔
        </p>
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
  {
    id: "glp1-treatments",
    titleEn: "GLP-1 Based Treatments",
    titleUr: "GLP-1 پر مبنی علاج",
    content: (
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          Learn how modern medical advancements — including GLP-1–based
          therapies — are transforming the way obesity and type 2 diabetes are
          understood and treated at a biological level.
        </p>

        {/* How GLP-1 Works in the Body */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            How GLP-1 Works in the Body
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Gut</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Slows digestion and signals fullness earlier, helping you feel
                satisfied with smaller portions.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Brain</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Reduces cravings and "food noise" by regulating appetite signals
                between the gut and the brain.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">The Blood</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Enhances insulin release and stabilizes blood sugar levels after
                meals.
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Citations */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Clinical Citations
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>
              <strong>Cardiovascular Safety:</strong> Proven to reduce major
              adverse cardiovascular events (MACE) in adults with Type 2
              Diabetes.{" "}
              <a
                href="https://www.nejm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                See NEJM Study
              </a>
            </li>
            <li>
              <strong>Weight Management Efficacy:</strong> Clinical trials
              demonstrate up to 15-22.5% body weight reduction in chronic weight
              management.{" "}
              <a
                href="https://www.thelancet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                See The Lancet
              </a>
            </li>
            <li>
              <strong>Global Standards:</strong> Our information aligns with the
              latest ADA/EASD Consensus Reports on the management of
              hyperglycemia.{" "}
              <a
                href="https://diabetes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                View ADA Standards
              </a>
            </li>
          </ul>
        </div>

        {/* The "Diabesity" Crisis in Numbers */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            The &quot;Diabesity&quot; Crisis in Numbers
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-3 pr-4 font-bold text-gray-900">
                    Metric
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    Pakistan Statistic (2025/2026)
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-gray-900">
                    Source
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Diabetes Prevalence
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    ~31.4% of the adult population
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    International Diabetes Federation (IDF)
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Total Adult Cases
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Over 34 million people
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    IDF / DRAP Reports
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Obesity in Women
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    ~57% are overweight or obese
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    WHO / BF Biosciences Data
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Global Rank
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    3rd highest number of diabetes cases
                  </td>
                  <td className="py-3 pl-4 text-gray-700">WHO / PSX Filings</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* How Modern GLP-1 Therapies Compare */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            How Modern GLP-1 Therapies Compare
          </h3>
          <p className="text-gray-700 mb-4">
            Oral / Injectable Diabetes Therapies – GLP-1 & Insulin
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-left py-3 pr-4 font-bold text-gray-900">
                    Feature
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    Oral Diabetes Medications
                  </th>
                  <th className="text-left py-3 px-4 font-bold text-gray-900">
                    GLP-1 / GIP Therapies
                  </th>
                  <th className="text-left py-3 pl-4 font-bold text-gray-900">
                    Insulin
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Primary action
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Improve insulin sensitivity or increase insulin release to
                    lower blood sugar
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Regulate appetite & insulin
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Direct glucose control
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Weight impact
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Neutral or mild weight gain (varies by medication)
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Significant weight reduction
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Neutral or weight gain
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Hunger control
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Minimal – does not directly suppress appetite
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Strong appetite suppression
                  </td>
                  <td className="py-3 pl-4 text-gray-700">None</td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Dosing
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Daily tablets (once or multiple times per day)
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Weekly or daily injections
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Daily or multiple daily
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Treatment focus
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Blood sugar control rather than appetite or weight
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Underlying biology
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Blood sugar replacement
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Best for
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Early-stage type 2 diabetes or combination therapy
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Diabetes with weight issues
                  </td>
                  <td className="py-3 pl-4 text-gray-700">
                    Advanced or insulin deficiency
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900">
                    Availability in Pakistan
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Widely available and commonly prescribed
                  </td>
                  <td className="py-3 px-4 text-gray-700">
                    Increasingly available
                  </td>
                  <td className="py-3 pl-4 text-gray-700">Widely available</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            Safety Disclaimer
          </h3>
          <p className="text-gray-700 leading-relaxed">
            This information is for educational purposes only and does not
            replace medical advice. Treatment decisions should always be made in
            consultation with a qualified healthcare professional.
          </p>
        </div>

        {/* Supporting GLP-1 Results with Lifestyle */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            Supporting GLP-1 Results with Lifestyle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                High Protein Intake
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Adequate protein helps preserve muscle mass during weight loss
                and supports sustained energy levels throughout the day.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                Resistance Training
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Strength exercises help maintain and build muscle, improving
                metabolism and long-term weight management outcomes.
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                Muscle Preservation
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                Combining protein intake with regular activity helps prevent
                muscle loss that can occur during rapid weight reduction.
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
    urduContent: (
      <div className="space-y-8">
        <p className="text-gray-700 leading-relaxed text-lg">
          جانیں کہ جدید طبی پیشرفت — بشمول GLP-1 پر مبنی علاج — موٹاپے اور ٹائپ
          2 ذیابیطس کو حیاتیاتی سطح پر سمجھنے اور علاج کرنے کے طریقے کو کیسے بدل
          رہی ہے۔
        </p>

        {/* How GLP-1 Works */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            جسم میں GLP-1 کیسے کام کرتا ہے
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">آنتیں</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                ہضم کو سست کرتا ہے اور جلدی پیٹ بھرنے کا اشارہ دیتا ہے، چھوٹے
                حصوں سے سیر ہونے میں مدد کرتا ہے۔
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">دماغ</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                گٹ اور دماغ کے درمیان بھوک کے اشاروں کو منظم کر کے کریونگ اور
                "فوڈ نوائز" کم کرتا ہے۔
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">خون</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                انسولین کے اخراج کو بڑھاتا ہے اور کھانے کے بعد بلڈ شوگر مستحکم
                کرتا ہے۔
              </p>
            </div>
          </div>
        </div>

        {/* Clinical Citations */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            کلینیکل حوالہ جات
          </h3>
          <ul className="list-disc pr-6 space-y-2 text-gray-700">
            <li>
              <strong>قلبی حفاظت:</strong> ٹائپ 2 ذیابیطس کے بالغوں میں بڑے منفی
              قلبی واقعات (MACE) کم کرنے کا ثبوت ہے۔{" "}
              <a
                href="https://www.nejm.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                NEJM مطالعہ دیکھیں
              </a>
            </li>
            <li>
              <strong>وزن انتظام کی افادیت:</strong> کلینیکل ٹرائلز دائمی وزن
              انتظام میں{" "}
              <span dir="ltr" className="inline">
                15–22.5%
              </span>{" "}
              تک جسمانی وزن میں کمی ظاہر کرتے ہیں۔{" "}
              <a
                href="https://www.thelancet.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                The Lancet دیکھیں
              </a>
            </li>
            <li>
              <strong>عالمی معیار:</strong> ہماری معلومات ہائپرگلیسیمیا کے
              انتظام پر تازہ ترین ADA/EASD اتفاق رائے رپورٹس کے ساتھ ہم آہنگ
              ہیں۔{" "}
              <a
                href="https://diabetes.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                ADA معیار دیکھیں
              </a>
            </li>
          </ul>
        </div>

        {/* Crisis in Numbers Table */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            اعداد و شمار میں "ڈائیبیسٹی" بحران
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-right py-3 pr-4 font-bold text-gray-900">
                    میٹرک
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">
                    پاکستان اعداد و شمار (2025/2026)
                  </th>
                  <th className="text-right py-3 pl-4 font-bold text-gray-900">
                    ماخذ
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    ذیابیطس کا پھیلاؤ
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    بالغ آبادی کا تقریباً 31.4٪
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    انٹرنیشنل ذیابیطس فیڈریشن (IDF)
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    کل بالغ کیسز
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    34 ملین سے زیادہ افراد
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    IDF / DRAP رپورٹس
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    خواتین میں موٹاپا
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    تقریباً 57٪ زیادہ وزن یا موٹی ہیں
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    WHO / BF Biosciences ڈیٹا
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    عالمی درجہ
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    ذیابیطس کیسز کی تیسری بڑی تعداد
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    WHO / PSX Filings
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* GLP-1 Comparison Table */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            جدید GLP-1 علاج کا موازنہ
          </h3>
          <p className="text-gray-700 mb-4">
            زبانی / انجیکشن ذیابیطس علاج — GLP-1 اور انسولین
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b-2 border-gray-900">
                  <th className="text-right py-3 pr-4 font-bold text-gray-900">
                    خصوصیت
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">
                    زبانی ذیابیطس ادویات
                  </th>
                  <th className="text-right py-3 px-4 font-bold text-gray-900">
                    GLP-1 / GIP علاج
                  </th>
                  <th className="text-right py-3 pl-4 font-bold text-gray-900">
                    انسولین
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    بنیادی عمل
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    انسولین کی حساسیت بہتر کرنا یا اخراج بڑھا کر شوگر کم کرنا
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    بھوک اور انسولین کو منظم کرنا
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    براہ راست گلوکوز کنٹرول
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    وزن پر اثر
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    غیر جانبدار یا معمولی وزن اضافہ (دوا کے مطابق)
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    نمایاں وزن میں کمی
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    غیر جانبدار یا وزن اضافہ
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    بھوک کنٹرول
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    کم — بھوک کو براہ راست دبانہ نہیں کرتا
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    مضبوط بھوک کا دبانا
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    کوئی نہیں
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    خوراک
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    روزانہ گولیاں (ایک یا کئی بار)
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    ہفتہ وار یا روزانہ انجیکشن
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    روزانہ یا کئی بار روزانہ
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    علاج کی توجہ
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    بھوک یا وزن کی بجائے شوگر کنٹرول
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    بنیادی حیاتیات
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    بلڈ شوگر کا متبادل
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    بہترین
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    ابتدائی ٹائپ 2 ذیابیطس یا مجموعی علاج
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    وزن کے مسائل کے ساتھ ذیابیطس
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    ترقی یافتہ یا انسولین کی کمی
                  </td>
                </tr>
                <tr className="border-b border-gray-300">
                  <td className="py-3 pr-4 font-medium text-gray-900 text-right">
                    پاکستان میں دستیابی
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    وسیع پیمانے پر دستیاب اور عام طور پر تجویز کردہ
                  </td>
                  <td className="py-3 px-4 text-gray-700 text-right">
                    تیزی سے دستیاب ہو رہا ہے
                  </td>
                  <td className="py-3 pl-4 text-gray-700 text-right">
                    وسیع پیمانے پر دستیاب
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Safety Disclaimer */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-3">
            حفاظتی اعلامیہ
          </h3>
          <p className="text-gray-700 leading-relaxed">
            یہ معلومات صرف تعلیمی مقاصد کے لیے ہیں اور طبی مشورے کی جگہ نہیں
            لیتیں۔ علاج کے فیصلے ہمیشہ کسی اہل صحت کے پیشہ ور سے مشاورت میں کیے
            جائیں۔
          </p>
        </div>

        {/* Supporting GLP-1 with Lifestyle */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4">
            GLP-1 نتائج کو طرز زندگی سے سہارا دیں
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">
                زیادہ پروٹین کی مقدار
              </h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                مناسب پروٹین وزن میں کمی کے دوران عضلاتی ماس محفوظ رکھنے میں مدد
                کرتی ہے اور پورے دن مستقل توانائی فراہم کرتی ہے۔
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">مزاحمتی ورزش</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                طاقت کی ورزشیں عضلات کو برقرار رکھنے اور بنانے میں مدد کرتی ہیں،
                میٹابولزم اور طویل مدتی وزن انتظام کے نتائج بہتر کرتی ہیں۔
              </p>
            </div>
            <div className="bg-gray-50 p-5 border border-gray-200">
              <h4 className="font-bold text-gray-900 mb-2">عضلات کا تحفظ</h4>
              <p className="text-gray-700 text-sm leading-relaxed">
                پروٹین کی مقدار اور باقاعدہ سرگرمی کو یکجا کرنا تیز وزن کمی کے
                دوران عضلات کے نقصان کو روکنے میں مدد کرتا ہے۔
              </p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function GlpClient() {
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
                {locale === "ur" ? "GLP-1 اور ڈائیبیسٹی" : "GLP-1 & Diabesity"}
              </h1>
              <p className="text-gray-700 text-md leading-relaxed">
                {locale === "ur"
                  ? "ذیابیطس اور موٹاپے کے درمیان تعلق سمجھیں، اور جانیں کہ جدید GLP-1 پر مبنی علاج بہتر صحت کے نتائج کے لیے علاج کے اختیارات کو کیسے بدل رہے ہیں۔"
                  : "Understand the connection between diabetes and obesity, and discover how modern GLP-1 based therapies are transforming treatment options for better health outcomes."}
              </p>
            </div>
            <div className="relative h-64 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070"
                alt="GLP-1 and Diabesity"
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
            {glpContent.map((section) => (
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
          {glpContent.map((section) => (
            <div key={section.id}>
              <div id={section.id} className="scroll-mt-24">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 pb-4 border-b-2 border-primary">
                  {locale === "ur" ? section.titleUr : section.titleEn}
                </h2>
                {locale === "ur" && "urduContent" in section
                  ? section.urduContent
                  : section.content}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
