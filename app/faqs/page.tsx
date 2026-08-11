"use client";

import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import DietIcon from "../../public/faqs-diet.svg";
import EducationIcon from "../../public/faqs-education.svg";
import HealthIcon from "../../public/faqs-health.svg";
import GlpIcon from "../../public/faqs-glp.svg";

const faqs = [
  {
    question: "What is GLP-1?",
    questionUr: "GLP-1 کیا ہے؟",
    answer:
      "GLP-1 is an important hormone that helps your body keep blood sugar in balance. GLP-1 stands for glucagon-like peptide-1. This hormone is produced in the gut and is released in response to the food you eat. GLP-1 treatment works like your body's naturally occurring GLP-1. GLP-1 treatments: Increase the amount of insulin your pancreas releases when food is absorbed in the stomach and intestines (the increased insulin lowers blood sugar levels); Stop the liver from releasing sugar into the blood when it's not needed; Slow the movement of food through the stomach, so that sugar enters the blood more slowly.",
    answerUr:
      "GLP-1 ایک اہم ہارمون ہے جو آپ کے جسم کو خون میں شکر کو متوازن رکھنے میں مدد کرتا ہے۔ GLP-1 کا مطلب ہے گلوکاگون جیسا پیپٹائیڈ-1۔ یہ ہارمون آنت میں بنتا ہے اور آپ کے کھانے کے جواب میں خارج ہوتا ہے۔ GLP-1 علاج آپ کے جسم کے قدرتی GLP-1 کی طرح کام کرتا ہے۔ GLP-1 علاج: آپ کے لبلبے سے خارج ہونے والی انسولین کی مقدار بڑھاتا ہے جب معدے اور آنتوں میں خوراک جذب ہوتی ہے (بڑھی ہوئی انسولین خون میں شکر کی سطح کو کم کرتی ہے)؛ جگر کو خون میں شکر خارج کرنے سے روکتا ہے جب ضرورت نہ ہو؛ معدے سے خوراک کی نقل و حرکت کو سست کرتا ہے تاکہ شکر خون میں زیادہ آہستہ داخل ہو۔",
    category: "GLP" as Category,
  },
  {
    question: "Why is GLP-1 important in diabesity?",
    questionUr: "ذیابیسٹی میں GLP-1 کیوں اہم ہے؟",
    answer:
      "Diabesity involves both obesity and Type 2 diabetes, which share hormonal pathways. GLP-1 influences hunger, satiety, and post-meal insulin response, making it a key biological link between excess weight and elevated blood sugar.",
    answerUr:
      "ذیابیسٹی میں موٹاپا اور ٹائپ 2 ذیابیطس دونوں شامل ہیں، جو ہارمونل راستے شیئر کرتے ہیں۔ GLP-1 بھوک، سیری، اور کھانے کے بعد انسولین کے ردعمل کو متاثر کرتا ہے، جو اسے زیادہ وزن اور بلند خون کی شکر کے درمیان ایک اہم حیاتیاتی ربط بناتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Is GLP-1 a medication?",
    questionUr: "کیا GLP-1 ایک دوا ہے؟",
    answer:
      "No. GLP-1 is a hormone naturally produced by the body. Some medical therapies are designed to support or enhance GLP-1 pathways, but GLP-1 itself is a biological signal, not a drug.",
    answerUr:
      "نہیں۔ GLP-1 ایک ہارمون ہے جو جسم قدرتی طور پر بناتا ہے۔ کچھ طبی علاج GLP-1 کے راستوں کو سہارا دینے یا بڑھانے کے لیے بنائے گئے ہیں، لیکن GLP-1 خود ایک حیاتیاتی اشارہ ہے، دوا نہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Is GLP-1 the same as insulin?",
    questionUr: "کیا GLP-1 انسولین جیسا ہے؟",
    answer:
      "No. Insulin lowers blood sugar directly. GLP-1 helps the body release insulin appropriately after meals and also influences appetite and digestion. They are different hormones with different roles.",
    answerUr:
      "نہیں۔ انسولین خون میں شکر کو براہ راست کم کرتی ہے۔ GLP-1 جسم کو کھانے کے بعد مناسب طور پر انسولین خارج کرنے میں مدد کرتا ہے اور بھوک اور ہاضمے کو بھی متاثر کرتا ہے۔ یہ مختلف کرداروں کے ساتھ مختلف ہارمونز ہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "How does GLP-1 affect appetite?",
    questionUr: "GLP-1 بھوک کو کیسے متاثر کرتا ہے؟",
    answer:
      "GLP-1 sends signals to the brain that promote feelings of fullness. When GLP-1 signaling is effective, appetite is better regulated and overeating becomes less likely.",
    answerUr:
      "GLP-1 دماغ کو ایسے اشارے بھیجتا ہے جو پیٹ بھرنے کے احساس کو فروغ دیتے ہیں۔ جب GLP-1 سگنلنگ مؤثر ہوتی ہے، تو بھوک بہتر طریقے سے منظم ہوتی ہے اور زیادہ کھانے کا امکان کم ہوتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Why do some people feel hungry even after eating?",
    questionUr: "کچھ لوگ کھانے کے بعد بھی بھوکا کیوں محسوس کرتے ہیں؟",
    answer:
      "Persistent hunger can occur when appetite-regulating signals between the gut and brain are disrupted. Reduced effectiveness of hormones such as GLP-1 may cause the brain to continue signaling hunger despite adequate food intake.",
    answerUr:
      "مستقل بھوک تب ہو سکتی ہے جب آنت اور دماغ کے درمیان بھوک کو منظم کرنے والے اشارے درہم برہم ہو جائیں۔ GLP-1 جیسے ہارمونز کی کم تاثیر دماغ کو کافی خوراک لینے کے باوجود بھوک کا اشارہ دیتی رہتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "How does GLP-1 influence blood sugar?",
    questionUr: "GLP-1 خون میں شکر کو کیسے متاثر کرتا ہے؟",
    answer:
      "GLP-1 helps stimulate insulin release after meals, slows digestion, and reduces excessive glucose release by the liver. Together, these actions help limit post-meal blood sugar spikes.",
    answerUr:
      "GLP-1 کھانے کے بعد انسولین کے اخراج کو تیز کرنے، ہاضمے کو سست کرنے، اور جگر کی طرف سے گلوکوز کے اضافی اخراج کو کم کرنے میں مدد کرتا ہے۔ مل کر، یہ اقدامات کھانے کے بعد خون میں شکر کے اضافے کو محدود کرتے ہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Does GLP-1 work the same way in everyone?",
    questionUr: "کیا GLP-1 سب میں ایک جیسا کام کرتا ہے؟",
    answer:
      "No. Hormonal responses vary between individuals based on genetics, metabolic health, and underlying conditions. GLP-1 signaling may be stronger or weaker depending on individual physiology.",
    answerUr:
      "نہیں۔ ہارمونل ردعمل جینیات، میٹابولک صحت، اور بنیادی حالات کی بنیاد پر افراد کے درمیان مختلف ہوتے ہیں۔ GLP-1 سگنلنگ انفرادی جسمانیت پر منحصر مضبوط یا کمزور ہو سکتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Can GLP-1 signaling become impaired?",
    questionUr: "کیا GLP-1 سگنلنگ خراب ہو سکتی ہے؟",
    answer:
      "Yes. In obesity and Type 2 diabetes, GLP-1 signaling may be reduced or less effective, contributing to increased hunger, difficulty maintaining weight loss, and poorer blood sugar control.",
    answerUr:
      "ہاں۔ موٹاپے اور ٹائپ 2 ذیابیطس میں، GLP-1 سگنلنگ کم یا کم مؤثر ہو سکتی ہے، جو بڑھتی ہوئی بھوک، وزن کم رکھنے میں مشکل، اور خون میں شکر کے خراب کنٹرول میں حصہ ڈالتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Is impaired GLP-1 signaling caused by lifestyle alone?",
    questionUr: "کیا GLP-1 سگنلنگ کا بگڑنا صرف طرزِ زندگی سے ہوتا ہے؟",
    answer:
      "No. While lifestyle factors play a role, hormonal regulation is influenced by genetics, metabolism, long-term weight changes, and biological adaptation, not willpower alone.",
    answerUr:
      "نہیں۔ اگرچہ طرزِ زندگی کے عوامل کردار ادا کرتے ہیں، ہارمونل ریگولیشن جینیات، میٹابولزم، طویل مدتی وزن کی تبدیلیوں، اور حیاتیاتی موافقت سے متاثر ہوتی ہے — صرف قوتِ ارادی سے نہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "How does GLP-1 relate to weight regain?",
    questionUr: "GLP-1 کا وزن دوبارہ بڑھنے سے کیا تعلق ہے؟",
    answer:
      "After weight loss, the body often increases hunger signals and reduces energy expenditure. Reduced effectiveness of appetite-regulating hormones such as GLP-1 contributes to the tendency to regain weight.",
    answerUr:
      "وزن کم ہونے کے بعد، جسم اکثر بھوک کے اشارے بڑھا دیتا ہے اور توانائی کا اخراج کم کر دیتا ہے۔ GLP-1 جیسے بھوک کو منظم کرنے والے ہارمونز کی کم تاثیر وزن دوبارہ بڑھنے کے رجحان میں حصہ ڈالتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Does GLP-1 replace healthy eating and physical activity?",
    questionUr: "کیا GLP-1 صحت مند کھانے اور جسمانی سرگرمی کی جگہ لے سکتا ہے؟",
    answer:
      "No. Healthy habits remain important. GLP-1 influences how the body responds to hunger and food, which can make lifestyle changes easier to sustain when hormonal signals are aligned.",
    answerUr:
      "نہیں۔ صحت مند عادات اہم رہتی ہیں۔ GLP-1 اس بات پر اثر ڈالتا ہے کہ جسم بھوک اور خوراک پر کیسے ردعمل دیتا ہے، جو طرزِ زندگی کی تبدیلیوں کو برقرار رکھنا آسان بنا سکتا ہے جب ہارمونل اشارے ہم آہنگ ہوں۔",
    category: "GLP" as Category,
  },
  {
    question: "Is GLP-1 relevant only for people with diabetes?",
    questionUr: "کیا GLP-1 صرف ذیابیطس کے مریضوں کے لیے متعلقہ ہے؟",
    answer:
      "No. GLP-1 plays a role in appetite and weight regulation even in people without diabetes. Its relevance extends across obesity, metabolic health, and Type 2 diabetes.",
    answerUr:
      "نہیں۔ GLP-1 ذیابیطس کے بغیر لوگوں میں بھی بھوک اور وزن کے ضابطے میں کردار ادا کرتا ہے۔ اس کی اہمیت موٹاپے، میٹابولک صحت، اور ٹائپ 2 ذیابیطس تک پھیلی ہوئی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "What role does GLP-1 play in Type 2 diabetes?",
    questionUr: "ٹائپ 2 ذیابیطس میں GLP-1 کا کیا کردار ہے؟",
    answer:
      "In Type 2 diabetes, GLP-1 helps coordinate insulin release and appetite regulation. Disruption of this pathway contributes to both elevated blood sugar and excess weight.",
    answerUr:
      "ٹائپ 2 ذیابیطس میں، GLP-1 انسولین کے اخراج اور بھوک کے ضابطے کو منظم کرنے میں مدد کرتا ہے۔ اس راستے میں خلل بلند خون کی شکر اور زیادہ وزن دونوں میں حصہ ڈالتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Does GLP-1 replace insulin in Type 1 diabetes?",
    questionUr: "کیا GLP-1 ٹائپ 1 ذیابیطس میں انسولین کی جگہ لے سکتا ہے؟",
    answer:
      "No. In Type 1 diabetes, insulin therapy is essential and cannot be replaced. GLP-1-related pathways do not substitute for insulin and are not standard treatment.",
    answerUr:
      "نہیں۔ ٹائپ 1 ذیابیطس میں انسولین تھراپی ضروری ہے اور اسے تبدیل نہیں کیا جا سکتا۔ GLP-1 سے متعلق راستے انسولین کا متبادل نہیں ہیں اور معیاری علاج نہیں ہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Can GLP-1 affect digestion?",
    questionUr: "کیا GLP-1 ہاضمے کو متاثر کر سکتا ہے؟",
    answer:
      "Yes. GLP-1 slows stomach emptying, which helps regulate how quickly glucose enters the bloodstream and contributes to feelings of fullness after meals.",
    answerUr:
      "ہاں۔ GLP-1 معدے کے خالی ہونے کو سست کرتا ہے، جو یہ ضابطہ کرنے میں مدد کرتا ہے کہ گلوکوز خون میں کتنی جلدی داخل ہوتا ہے اور کھانے کے بعد پیٹ بھرنے کے احساس میں حصہ ڈالتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Why is GLP-1 often discussed alongside appetite and hormones?",
    questionUr:
      "GLP-1 کو اکثر بھوک اور ہارمونز کے ساتھ کیوں زیر بحث لایا جاتا ہے؟",
    answer:
      "Because GLP-1 is part of a broader hormonal network that regulates hunger, satiety, digestion, and glucose metabolism. It acts as a communication signal rather than a single isolated factor.",
    answerUr:
      "کیونکہ GLP-1 ایک وسیع تر ہارمونل نیٹ ورک کا حصہ ہے جو بھوک، سیری، ہاضمے اور گلوکوز میٹابولزم کو منظم کرتا ہے۔ یہ ایک واحد الگ عامل کے بجائے ایک مواصلاتی اشارے کے طور پر کام کرتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Is GLP-1 a short-term signal or a long-term regulator?",
    questionUr: "کیا GLP-1 قلیل مدتی اشارہ ہے یا طویل مدتی ضابطہ کار؟",
    answer:
      "GLP-1 acts in the short term after meals, but long-term patterns of GLP-1 signaling influence appetite behavior, metabolic balance, and weight regulation over time.",
    answerUr:
      "GLP-1 کھانے کے بعد قلیل مدتی طور پر کام کرتا ہے، لیکن GLP-1 سگنلنگ کے طویل مدتی نمونے وقت کے ساتھ بھوک کے رویے، میٹابولک توازن، اور وزن کے ضابطے کو متاثر کرتے ہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Does aging affect GLP-1 signaling?",
    questionUr: "کیا عمر بڑھنے سے GLP-1 سگنلنگ متاثر ہوتی ہے؟",
    answer:
      "Hormonal responses, including GLP-1 signaling, can change with age due to shifts in metabolism, muscle mass, and insulin sensitivity.",
    answerUr:
      "ہارمونل ردعمل، بشمول GLP-1 سگنلنگ، میٹابولزم، پٹھوں کے حجم، اور انسولین کی حساسیت میں تبدیلیوں کی وجہ سے عمر کے ساتھ بدل سکتے ہیں۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Is TirzaTrim safe for someone who already has diabetic retinopathy?",
    questionUr:
      "کیا TirzaTrim اس شخص کے لیے محفوظ ہے جسے پہلے سے ذیابیطسی ریٹینوپیتھی ہے؟",
    answer:
      "Rapid improvement in glucose control has been associated with a temporary worsening of diabetic retinopathy. Patients with a history of diabetic retinopathy should be monitored for progression of diabetic retinopathy.",
    answerUr:
      "گلوکوز کنٹرول میں تیز بہتری ذیابیطسی ریٹینوپیتھی کے عارضی طور پر بگڑنے سے منسلک رہی ہے۔ ذیابیطسی ریٹینوپیتھی کی تاریخ والے مریضوں کی ذیابیطسی ریٹینوپیتھی کی ترقی کے لیے نگرانی کی جانی چاہیے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "What are the most common side effects associated with TirzaTrim?",
    questionUr: "TirzaTrim سے وابستہ سب سے عام ضمنی اثرات کیا ہیں؟",
    answer:
      "The most common side effects include nausea, diarrhea, decreased appetite, vomiting, constipation, indigestion, and stomach (abdominal) pain.",
    answerUr:
      "سب سے عام ضمنی اثرات میں متلی، اسہال، بھوک کا کم ہونا، قے، قبض، بدہضمی، اور معدے (پیٹ) کا درد شامل ہیں۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Is Seglu for weight loss? Will patient regain weight if they stop using Seglu?",
    questionUr:
      "کیا Seglu وزن کم کرنے کے لیے ہے؟ کیا مریض Seglu بند کرنے پر وزن دوبارہ بڑھا لے گا؟",
    answer:
      "Seglu is approved for adults with obesity, type 2 diabetes to lower blood sugar, along with diet and exercise, reduce the risk of major cardiovascular events such as heart attack, stroke, or death in adults with type 2 diabetes who also have heart disease, and lower the risk of worsening kidney disease, kidney failure (end-stage kidney disease), and death due to cardiovascular disease in adults with type 2 diabetes who also have chronic kidney disease. People respond to medicines differently. That's why it is important to talk to your health care professional about any questions you may have about your treatment plan.",
    answerUr:
      "Seglu موٹاپے اور ٹائپ 2 ذیابیطس والے بالغوں کے لیے غذا اور ورزش کے ساتھ خون کی شکر کو کم کرنے، دل کے دورے، فالج، یا موت جیسے بڑے قلبی واقعات کا خطرہ کم کرنے، اور گردے کی بیماری کے بگڑنے، گردے کی ناکامی (آخری مرحلے کی گردے کی بیماری)، اور قلبی بیماری کی وجہ سے موت کا خطرہ کم کرنے کے لیے منظور شدہ ہے۔ لوگ ادویات پر مختلف ردعمل دیتے ہیں۔ اس لیے اپنے علاج کے منصوبے کے بارے میں کسی بھی سوال کے لیے اپنے صحت کی دیکھ بھال کے پیشہ ور سے بات کرنا ضروری ہے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Has Seglutide/Seglu (Semaglutide) been studied for lowering the risk of chronic kidney disease getting worse?",
    questionUr:
      "کیا Seglutide/Seglu (سیماگلوٹائیڈ) کا دائمی گردے کی بیماری کے بگڑنے کے خطرے کو کم کرنے کے لیے مطالعہ کیا گیا ہے؟",
    answer:
      "In adults with type 2 diabetes and chronic kidney disease, there is an increased risk of the disease worsening, or of experiencing cardiovascular death. Semaglutide is proven to significantly lower those risks, including the risk for kidney failure and death due to cardiovascular disease. Semaglutide is the first and only medicine in its class (GLP-1) proven to help lower the risk of worsening kidney disease, kidney failure (end-stage kidney disease), and death due to cardiovascular disease in adults who also have chronic kidney disease.",
    answerUr:
      "ٹائپ 2 ذیابیطس اور دائمی گردے کی بیماری والے بالغوں میں بیماری کے بگڑنے یا قلبی موت کا بڑھا ہوا خطرہ ہوتا ہے۔ سیماگلوٹائیڈ ان خطرات کو نمایاں طور پر کم کرنے میں ثابت ہے، بشمول گردے کی ناکامی اور قلبی بیماری سے موت کا خطرہ۔ سیماگلوٹائیڈ اپنی کلاس (GLP-1) میں پہلی اور واحد دوا ہے جو دائمی گردے کی بیماری والے بالغوں میں گردے کی بیماری کے بگڑنے، گردے کی ناکامی، اور قلبی بیماری کی وجہ سے موت کے خطرے کو کم کرنے میں مدد کرتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Has Seglutide/Seglu (Semaglutide) been studied for cardiovascular risk?",
    questionUr:
      "کیا Seglutide/Seglu (سیماگلوٹائیڈ) کا قلبی خطرے کے لیے مطالعہ کیا گیا ہے؟",
    answer:
      "People with type 2 diabetes and known heart disease are at a greater risk of major cardiovascular events such as stroke, heart attack, or death. Semaglutide is proven to lower those risks. Semaglutide lowers the risk of major cardiovascular events such as stroke, heart attack, or death in adults who also have heart disease.",
    answerUr:
      "ٹائپ 2 ذیابیطس اور معلوم دل کی بیماری والے لوگوں کو فالج، دل کے دورے، یا موت جیسے بڑے قلبی واقعات کا زیادہ خطرہ ہوتا ہے۔ سیماگلوٹائیڈ ان خطرات کو کم کرنے میں ثابت ہے۔ سیماگلوٹائیڈ دل کی بیماری والے بالغوں میں فالج، دل کے دورے، یا موت جیسے بڑے قلبی واقعات کا خطرہ کم کرتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Once prescribed Seglutide/Seglu (Semaglutide) for type 2 diabetes, how long will it take to lower the blood sugar?",
    questionUr:
      "ٹائپ 2 ذیابیطس کے لیے Seglutide/Seglu (سیماگلوٹائیڈ) تجویز ہونے کے بعد خون کی شکر کم ہونے میں کتنا وقت لگے گا؟",
    answer:
      "You should take Seglutide/Seglu (Semaglutide) exactly as prescribed by your health care professional. If you have any questions about your A1C and blood sugar goals, or changes to your treatment plan, talk with your health care professional. Never make changes to your treatment plan without consulting your health care professional first.",
    answerUr:
      "آپ کو Seglutide/Seglu (سیماگلوٹائیڈ) بالکل ویسے لینا چاہیے جیسا آپ کے صحت کی دیکھ بھال کے پیشہ ور نے تجویز کیا ہو۔ اگر آپ کے A1C اور خون کی شکر کے اہداف، یا علاج کے منصوبے میں تبدیلیوں کے بارے میں کوئی سوال ہو، تو اپنے صحت کی دیکھ بھال کے پیشہ ور سے بات کریں۔ پہلے اپنے صحت کی دیکھ بھال کے پیشہ ور سے مشورہ کیے بغیر کبھی بھی اپنے علاج کے منصوبے میں تبدیلیاں نہ کریں۔",
    category: "GLP" as Category,
  },
  {
    question: "How does stress affect GLP-1 and appetite?",
    questionUr: "تناؤ GLP-1 اور بھوک کو کیسے متاثر کرتا ہے؟",
    answer:
      "Chronic stress can disrupt hormonal balance, including appetite-regulating pathways. This may indirectly affect how signals like GLP-1 are perceived or acted upon by the body.",
    answerUr:
      "دائمی تناؤ ہارمونل توازن کو درہم برہم کر سکتا ہے، بشمول بھوک کو منظم کرنے والے راستے۔ یہ بالواسطہ طور پر اس بات کو متاثر کر سکتا ہے کہ جسم GLP-1 جیسے اشارے کو کیسے سمجھتا یا ان پر کیسے عمل کرتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Is GLP-1 involved in cravings?",
    questionUr: "کیا GLP-1 خواہشات میں ملوث ہے؟",
    answer:
      "GLP-1 influences satiety and reward signaling related to food intake. When its signaling is impaired, cravings and difficulty stopping eating may increase.",
    answerUr:
      "GLP-1 خوراک کی مقدار سے متعلق سیری اور انعام کی سگنلنگ کو متاثر کرتا ہے۔ جب اس کی سگنلنگ خراب ہو، تو خواہشات اور کھانا بند کرنے میں دشواری بڑھ سکتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Why is GLP-1 considered a 'biological signal'?",
    questionUr: "GLP-1 کو 'حیاتیاتی اشارہ' کیوں سمجھا جاتا ہے؟",
    answer:
      "GLP-1 communicates information between the gut, brain, and pancreas. It does not force outcomes but helps guide how the body responds to food and hunger.",
    answerUr:
      "GLP-1 آنت، دماغ اور لبلبے کے درمیان معلومات منتقل کرتا ہے۔ یہ نتائج کو مجبور نہیں کرتا بلکہ اس بات میں رہنمائی کرتا ہے کہ جسم خوراک اور بھوک پر کیسے ردعمل دیتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Can GLP-1 levels be measured easily?",
    questionUr: "کیا GLP-1 کی سطح آسانی سے ماپی جا سکتی ہے؟",
    answer:
      "GLP-1 levels are not routinely measured in standard clinical testing. Its effects are usually assessed through metabolic patterns rather than direct hormone measurement.",
    answerUr:
      "GLP-1 کی سطح معمول کی کلینیکل جانچ میں باقاعدگی سے نہیں ماپی جاتی۔ اس کے اثرات عام طور پر براہ راست ہارمون پیمائش کے بجائے میٹابولک نمونوں کے ذریعے جانچے جاتے ہیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Is information about GLP-1 on this site medical advice?",
    questionUr: "کیا اس سائٹ پر GLP-1 کے بارے میں معلومات طبی مشورہ ہے؟",
    answer:
      "No. Content related to GLP-1 is provided for educational purposes only and does not replace consultation with a qualified healthcare professional.",
    answerUr:
      "نہیں۔ GLP-1 سے متعلق مواد صرف تعلیمی مقاصد کے لیے فراہم کیا گیا ہے اور کسی اہل صحت کی دیکھ بھال کے پیشہ ور سے مشاورت کی جگہ نہیں لیتا۔",
    category: "GLP" as Category,
  },
  {
    question: "What is Seglutide/Seglu?",
    questionUr: "Seglutide/Seglu کیا ہے؟",
    answer:
      "Seglutide/Seglu (semaglutide) injection 0.25, 0.5 mg, 1 mg, 1.7 mg, 2 mg and 2.4 mg is an injectable prescription medicine for adults with type 2 diabetes used along with diet and exercise to improve blood sugar (glucose), for adults with obesity. It also lowers the risk of major cardiovascular events such as stroke, heart attack, or death in adults with type 2 diabetes who also have heart disease, and lowers the risk of worsening kidney disease, kidney failure (end-stage kidney disease), and death due to cardiovascular disease in adults with type 2 diabetes who also have chronic kidney disease.",
    answerUr:
      "Seglutide/Seglu (سیماگلوٹائیڈ) انجیکشن ٹائپ 2 ذیابیطس والے بالغوں کے لیے غذا اور ورزش کے ساتھ خون میں شکر (گلوکوز) کو بہتر کرنے اور موٹاپے والے بالغوں کے لیے ایک نسخے کی انجیکشن دوا ہے۔ یہ ٹائپ 2 ذیابیطس اور دل کی بیماری والے بالغوں میں فالج، دل کے دورے، یا موت جیسے بڑے قلبی واقعات کا خطرہ بھی کم کرتی ہے، اور ٹائپ 2 ذیابیطس اور دائمی گردے کی بیماری والے بالغوں میں گردے کی بیماری کے بگڑنے، گردے کی ناکامی، اور قلبی بیماری سے موت کا خطرہ کم کرتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "In which form Seglu and Seglutide available in Pakistan?",
    questionUr: "پاکستان میں Seglu اور Seglutide کس شکل میں دستیاب ہیں؟",
    answer:
      "It's available in 3 delivery forms: Seglutide multidose pen – 2 MG and 4 MG; Seglutide vial – 2 MG and 4 MG; Seglu Prefilled syringe – 0.25 MG, 0.5 MG, 1 MG, 1.7 MG and 2.4 MG.",
    answerUr:
      "یہ 3 ڈیلیوری شکلوں میں دستیاب ہے: Seglutide ملٹی ڈوز پین – 2 MG اور 4 MG؛ Seglutide وائل – 2 MG اور 4 MG؛ Seglu پری فلڈ سرنج – 0.25 MG، 0.5 MG، 1 MG، 1.7 MG اور 2.4 MG۔",
    category: "GLP" as Category,
  },
  {
    question: "Is Seglutide/Seglu currently available?",
    questionUr: "کیا Seglutide/Seglu فی الحال دستیاب ہے؟",
    answer:
      "All forms of Seglutide/Seglu are available at retail pharmacies nationwide for appropriate patients with type 2 diabetes, obesity and obesity related complications. It is also available via helpline and offers free home delivery at 021-35371033.",
    answerUr:
      "Seglutide/Seglu کی تمام شکلیں ملک بھر میں خوردہ فارمیسیوں میں ٹائپ 2 ذیابیطس، موٹاپے اور موٹاپے سے متعلق پیچیدگیوں کے مناسب مریضوں کے لیے دستیاب ہیں۔ یہ ہیلپ لائن کے ذریعے بھی دستیاب ہے اور 021-35371033 پر مفت گھر ڈیلیوری کی پیشکش کرتی ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Dosing schedule of Seglutide (Semaglutide)?",
    questionUr: "Seglutide (سیماگلوٹائیڈ) کا خوراک کا شیڈول؟",
    answer:
      "The recommended initiated dosage is 0.25 mg injected subcutaneously once weekly. After 4 weeks, the dosage should be increased in 0.25 mg increments. The maximum dosage is 2.4 mg in adults. Dose escalation should be individualized based on efficacy and tolerability.",
    answerUr:
      "تجویز کردہ ابتدائی خوراک ہفتے میں ایک بار جلد کے نیچے 0.25 mg انجیکشن ہے۔ 4 ہفتوں کے بعد، خوراک 0.25 mg اضافے میں بڑھائی جانی چاہیے۔ بالغوں میں زیادہ سے زیادہ خوراک 2.4 mg ہے۔ خوراک کا اضافہ تاثیر اور برداشت کی بنیاد پر انفرادی طور پر کیا جانا چاہیے۔",
    category: "GLP" as Category,
  },
  {
    question: "How should Seglutide/Seglu be administered?",
    questionUr: "Seglutide/Seglu کیسے دی جانی چاہیے؟",
    answer:
      "Inject Seglutide/Seglu subcutaneously in the abdomen, thigh, or upper arm at any time of day, with or without meals. Rotate injection sites with each dose. When using Seglutide/Seglu with insulin, administer as separate injections and never mix. It is acceptable to inject Seglutide/Seglu and insulin in the same body region, but the injections should not be adjacent to each other.",
    answerUr:
      "Seglutide/Seglu کو دن کے کسی بھی وقت، کھانے کے ساتھ یا بغیر، پیٹ، ران، یا اوپری بازو میں جلد کے نیچے انجیکشن لگائیں۔ ہر خوراک کے ساتھ انجیکشن کی جگہ بدلیں۔ Seglutide/Seglu کو انسولین کے ساتھ استعمال کرتے وقت، الگ الگ انجیکشن لگائیں اور کبھی نہ ملائیں۔ Seglutide/Seglu اور انسولین کو جسم کے ایک ہی حصے میں انجیکشن لگانا قابل قبول ہے، لیکن انجیکشن ایک دوسرے سے ملے ہوئے نہیں ہونے چاہئیں۔",
    category: "GLP" as Category,
  },
  {
    question: "Is Seglutide/Seglu safe in pregnancy and lactation?",
    questionUr: "کیا Seglutide/Seglu حمل اور دودھ پلانے کے دوران محفوظ ہے؟",
    answer:
      "Seglutide/Seglu should be used during pregnancy and lactation only if the potential benefit justifies the potential risk to the fetus.",
    answerUr:
      "Seglutide/Seglu حمل اور دودھ پلانے کے دوران صرف اس صورت میں استعمال کی جانی چاہیے جب ممکنہ فائدہ جنین کو ممکنہ خطرے کو جائز قرار دے۔",
    category: "GLP" as Category,
  },
  {
    question: "What is TirzaTrim?",
    questionUr: "TirzaTrim کیا ہے؟",
    answer:
      "TirzaTrim (Tirzepatide) is a glucose-dependent insulinotropic polypeptide receptor and glucagon-like peptide-1 receptor agonist indicated as an: Adjunct to diet and exercise in adults and pediatric patients 10 years of age and older to improve glycemic control with type 2 diabetes mellitus. Adjunct to a reduced-calorie diet and increased physical activity for weight management, including weight loss and weight maintenance, in adults in the presence of at least one weight-related comorbid condition (e.g., hypertension, dyslipidemia, obstructive sleep apnea, cardiovascular disease, prediabetes, or type 2 diabetes mellitus).",
    answerUr:
      "TirzaTrim (ٹرزیپاٹائیڈ) ایک گلوکوز پر منحصر انسولینوٹروپک پولی پیپٹائیڈ ریسیپٹر اور GLP-1 ریسیپٹر ایگونسٹ ہے جو بالغوں اور 10 سال اور اس سے زیادہ عمر کے بچوں میں ٹائپ 2 ذیابیطس کے ساتھ گلائسیمک کنٹرول کو بہتر کرنے کے لیے غذا اور ورزش کے ساتھ، اور کم از کم ایک وزن سے متعلق ہم مرض حالت (جیسے ہائی بلڈ پریشر، ڈسلیپیڈیمیا، رکاوٹی نیند کی کمی، قلبی بیماری، پری ذیابیطس، یا ٹائپ 2 ذیابیطس) کی موجودگی میں بالغوں میں وزن کے انتظام کے لیے کم کیلوری والی غذا اور بڑھی ہوئی جسمانی سرگرمی کے ساتھ اشارہ شدہ ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "How should TirzaTrim be initiated and titrated?",
    questionUr: "TirzaTrim کو کیسے شروع اور ٹائٹریٹ کیا جانا چاہیے؟",
    answer:
      "The recommended initiated dosage is 2.5 mg injected subcutaneously once weekly. After 4 weeks, the dosage should be increased in 2.5 mg increments. The maximum dosage is 15 mg in adults and 10 mg injected in pediatric patients. Dose escalation should be individualized based on efficacy and tolerability.",
    answerUr:
      "تجویز کردہ ابتدائی خوراک ہفتے میں ایک بار جلد کے نیچے 2.5 mg انجیکشن ہے۔ 4 ہفتوں کے بعد، خوراک 2.5 mg اضافے میں بڑھائی جانی چاہیے۔ بالغوں میں زیادہ سے زیادہ خوراک 15 mg اور بچوں کے مریضوں میں 10 mg انجیکشن ہے۔ خوراک کا اضافہ تاثیر اور برداشت کی بنیاد پر انفرادی طور پر کیا جانا چاہیے۔",
    category: "GLP" as Category,
  },
  {
    question: "How should TirzaTrim be administered?",
    questionUr: "TirzaTrim کیسے دی جانی چاہیے؟",
    answer:
      "Inject TirzaTrim subcutaneously in the abdomen, thigh, or upper arm at any time of day, with or without meals. Rotate injection sites with each dose. When using TirzaTrim with insulin, administer as separate injections and never mix. It is acceptable to inject TirzaTrim and insulin in the same body region, but the injections should not be adjacent to each other.",
    answerUr:
      "TirzaTrim کو دن کے کسی بھی وقت، کھانے کے ساتھ یا بغیر، پیٹ، ران، یا اوپری بازو میں جلد کے نیچے انجیکشن لگائیں۔ ہر خوراک کے ساتھ انجیکشن کی جگہ بدلیں۔ TirzaTrim کو انسولین کے ساتھ استعمال کرتے وقت، الگ الگ انجیکشن لگائیں اور کبھی نہ ملائیں۔ TirzaTrim اور انسولین کو جسم کے ایک ہی حصے میں انجیکشن لگانا قابل قبول ہے، لیکن انجیکشن ایک دوسرے سے ملے ہوئے نہیں ہونے چاہئیں۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Why is there a thyroid cancer warning with the use of TirzaTrim?",
    questionUr:
      "TirzaTrim کے استعمال کے ساتھ تھائرائیڈ کینسر کی وارننگ کیوں ہے؟",
    answer:
      "TirzaTrim is contraindicated in patients with a personal or family history of MTC or in patients with MEN 2 syndrome. Counsel patients regarding the potential risk for MTC and inform them of symptoms of thyroid tumors (e.g., a mass in the neck, dysphagia, dyspnea, persistent hoarseness, serum calcitonin values >50 ng/L).",
    answerUr:
      "TirzaTrim ان مریضوں میں متضاد ہے جن کی ذاتی یا خاندانی تاریخ میں MTC ہو یا MEN 2 سنڈروم والے مریضوں میں۔ مریضوں کو MTC کے ممکنہ خطرے کے بارے میں مشورہ دیں اور انہیں تھائرائیڈ ٹیومر کی علامات کے بارے میں آگاہ کریں (جیسے گردن میں گانٹھ، نگلنے میں دشواری، سانس لینے میں دشواری، مستقل کھردراپن، سیرم کیلسیٹونن کی قدریں >50 ng/L)۔",
    category: "GLP" as Category,
  },
  {
    question: "How should pancreatitis risk be addressed?",
    questionUr: "لبلبے کی سوزش کے خطرے کو کیسے حل کیا جانا چاہیے؟",
    answer:
      "Acute pancreatitis has been observed in patients treated with GLP-1 receptor agonists, or tirzepatide. After initiation of TirzaTrim, observe patients carefully for signs and symptoms of pancreatitis (including persistent severe abdominal pain, sometimes radiating to the back and which may or may not be accompanied by vomiting). If it is suspected, TirzaTrim should be discontinued and initiate appropriate management.",
    answerUr:
      "GLP-1 ریسیپٹر ایگونسٹس یا ٹرزیپاٹائیڈ سے علاج کیے گئے مریضوں میں شدید لبلبے کی سوزش دیکھی گئی ہے۔ TirzaTrim شروع کرنے کے بعد، مریضوں کو لبلبے کی سوزش کی علامات کے لیے احتیاط سے مانیٹر کریں (بشمول مستقل شدید پیٹ کا درد، کبھی کبھی پیٹھ تک پھیلتا ہے اور جو قے کے ساتھ ہو یا نہ ہو)۔ اگر شبہ ہو تو TirzaTrim بند کر دیں اور مناسب انتظام شروع کریں۔",
    category: "GLP" as Category,
  },
  {
    question: "How the risk of hypoglycemia with TirzaTrim be managed?",
    questionUr:
      "TirzaTrim کے ساتھ ہائپوگلائسیمیا کے خطرے کو کیسے منظم کیا جائے؟",
    answer:
      "The risk of hypoglycemia may be lowered by a reducing the dose of sulfonylurea (or other concomitantly administered insulin secretagogue) or insulin.",
    answerUr:
      "ہائپوگلائسیمیا کا خطرہ سلفونیل یوریا (یا دیگر ہم وقتی طور پر دی جانے والی انسولین سیکریٹاگوگ) یا انسولین کی خوراک کو کم کرکے کم کیا جا سکتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "Is TirzaTrim safe in pregnancy and lactation?",
    questionUr: "کیا TirzaTrim حمل اور دودھ پلانے کے دوران محفوظ ہے؟",
    answer:
      "TirzaTrim should be used during pregnancy and lactation only if the potential benefit justifies the potential risk to the fetus.",
    answerUr:
      "TirzaTrim حمل اور دودھ پلانے کے دوران صرف اس صورت میں استعمال کی جانی چاہیے جب ممکنہ فائدہ جنین کو ممکنہ خطرے کو جائز قرار دے۔",
    category: "GLP" as Category,
  },
  {
    question: "What is the storage & handling guidelines for TirzaTrim?",
    questionUr: "TirzaTrim کے ذخیرہ اور ہینڈلنگ کی ہدایات کیا ہیں؟",
    answer:
      "TirzaTrim Pen is a disposable multi-dose pre-filled pen. Store the pen in the refrigerator between 36°F to 46°F (2°C to 8°C). Can be stored unrefrigerated not above 30°C. Do not freeze your Pen. If the Pen has been frozen, throw the Pen away and use a new Pen. Do not use the pen if it appears damaged, discolored and contains particulate matter. Store your Pen in the original carton to protect your Pen from light. Always remove and safely discard the needle after each injection. Keep the pen covered with cap when not in use. Do not store the pen with needle attached.",
    answerUr:
      "TirzaTrim پین ایک ڈسپوزایبل ملٹی ڈوز پری فلڈ پین ہے۔ پین کو فریج میں 36°F سے 46°F (2°C سے 8°C) کے درمیان رکھیں۔ فریج سے باہر 30°C سے زیادہ نہیں رکھا جا سکتا۔ اپنے پین کو منجمد نہ کریں۔ اگر پین منجمد ہو گیا ہو تو پین پھینک دیں اور نیا پین استعمال کریں۔ اگر پین خراب، بے رنگ یا ذرات پر مشتمل نظر آئے تو استعمال نہ کریں۔ روشنی سے بچانے کے لیے پین کو اصل ڈبے میں رکھیں۔ ہر انجیکشن کے بعد ہمیشہ سوئی نکالیں اور محفوظ طریقے سے ضائع کریں۔ استعمال نہ ہونے پر پین کو ڈھکن سے ڈھانپ کر رکھیں۔ پین کو سوئی لگی ہوئی حالت میں ذخیرہ نہ کریں۔",
    category: "GLP" as Category,
  },
  {
    question:
      "What are the most common side effects of Seglutide/Seglu (Semaglutide)?",
    questionUr:
      "Seglutide/Seglu (سیماگلوٹائیڈ) کے سب سے عام ضمنی اثرات کیا ہیں؟",
    answer:
      "The most common side effects include: Nausea, Stomach (abdominal) pain, Constipation, Diarrhea, and Vomiting.",
    answerUr:
      "سب سے عام ضمنی اثرات میں شامل ہیں: متلی، معدے (پیٹ) کا درد، قبض، اسہال، اور قے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "How to avoid nausea when you are taking Seglutide/Seglu (Semaglutide)?",
    questionUr:
      "Seglutide/Seglu (سیماگلوٹائیڈ) لیتے وقت متلی سے کیسے بچا جائے؟",
    answer:
      "To help avoid nausea: Eat bland, low-fat foods, like crackers, toast, and rice. Eat foods that contain water, like soups and gelatin. Avoid fried, greasy, or sweet foods. Avoid lying down after you eat. Go outdoors for fresh air. Eat more slowly. Drink clear or ice-cold drinks.",
    answerUr:
      "متلی سے بچنے میں مدد کے لیے: پھیکے، کم چکنائی والے کھانے کھائیں جیسے بسکٹ، ٹوسٹ، اور چاول۔ پانی پر مشتمل کھانے کھائیں جیسے سوپ اور جیلی۔ تلے ہوئے، چکنے، یا میٹھے کھانے سے پرہیز کریں۔ کھانے کے بعد لیٹنے سے گریز کریں۔ تازہ ہوا کے لیے باہر جائیں۔ آہستہ کھائیں۔ صاف یا برف سرد مشروبات پئیں۔",
    category: "GLP" as Category,
  },
  {
    question:
      "How should patients be counseled if they miss a scheduled Seglutide/Seglu dose?",
    questionUr:
      "اگر Seglutide/Seglu کی مقررہ خوراک رہ جائے تو مریضوں کو کیا مشورہ دیا جائے؟",
    answer:
      "If a dose is missed, instruct patient to administer Seglutide/Seglu within 5 days of missed dose. If more than 5 days have passed skip the missed dose and administer the next dose on the regularly scheduled day. Instruct patient not to take two doses together, a 3-day gap should be maintained between doses.",
    answerUr:
      "اگر خوراک رہ جائے تو مریض کو ہدایت دیں کہ رہ جانے والی خوراک کے 5 دنوں کے اندر Seglutide/Seglu دیں۔ اگر 5 دن سے زیادہ گزر گئے ہوں تو رہ جانے والی خوراک چھوڑ دیں اور اگلی خوراک باقاعدہ مقررہ دن پر دیں۔ مریض کو ہدایت دیں کہ ایک ساتھ دو خوراکیں نہ لیں، خوراکوں کے درمیان 3 دن کا فاصلہ برقرار رکھا جائے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "Other than Seglutide and Seglu, which other GLP base therapies are available by Macter?",
    questionUr:
      "Seglutide اور Seglu کے علاوہ، Macter کی طرف سے کون سی دیگر GLP بیسڈ تھراپیز دستیاب ہیں؟",
    answer:
      "TirzaTrim (Tirzepatide) is a glucose-dependent insulinotropic polypeptide receptor and glucagon-like peptide-1 receptor agonist.",
    answerUr:
      "TirzaTrim (ٹرزیپاٹائیڈ) ایک گلوکوز پر منحصر انسولینوٹروپک پولی پیپٹائیڈ ریسیپٹر اور GLP-1 ریسیپٹر ایگونسٹ ہے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "How should patients be counseled if they miss a scheduled TirzaTrim dose?",
    questionUr:
      "اگر TirzaTrim کی مقررہ خوراک رہ جائے تو مریضوں کو کیا مشورہ دیا جائے؟",
    answer:
      "If a dose is missed, instruct patient to administer TirzaTrim within 4 days (96 hours) of missed dose. If more than 4 days have passed skip the missed dose and administer the next dose on the regularly scheduled day. Instruct patient not to take two doses together, a 3-day gap should be maintained between doses.",
    answerUr:
      "اگر خوراک رہ جائے تو مریض کو ہدایت دیں کہ رہ جانے والی خوراک کے 4 دنوں (96 گھنٹے) کے اندر TirzaTrim دیں۔ اگر 4 دن سے زیادہ گزر گئے ہوں تو رہ جانے والی خوراک چھوڑ دیں اور اگلی خوراک باقاعدہ مقررہ دن پر دیں۔ مریض کو ہدایت دیں کہ ایک ساتھ دو خوراکیں نہ لیں، خوراکوں کے درمیان 3 دن کا فاصلہ برقرار رکھا جائے۔",
    category: "GLP" as Category,
  },
  {
    question:
      "What symptoms may indicate a suspected overdose of TirzaTrim, and how should it be managed?",
    questionUr:
      "TirzaTrim کی مشتبہ زیادہ مقدار کی کون سی علامات ہو سکتی ہیں اور اسے کیسے منظم کیا جائے؟",
    answer:
      "A suspected overdose of TirzaTrim may present with symptoms of hypoglycemia, particularly in patients receiving concomitant insulin or sulfonylureas. Management is supportive and according to the patient's clinical signs and symptoms.",
    answerUr:
      "TirzaTrim کی مشتبہ زیادہ مقدار ہائپوگلائسیمیا کی علامات کے ساتھ ظاہر ہو سکتی ہے، خاص طور پر ان مریضوں میں جو ہم وقتی انسولین یا سلفونیل یوریا لے رہے ہوں۔ انتظام معاون ہے اور مریض کی طبی علامات کے مطابق کیا جاتا ہے۔",
    category: "GLP" as Category,
  },
  {
    question: "I’m at a restaurant — what should I order?",
    questionUr: "ریستوران میں — مجھے کیا آرڈر کرنا چاہیے؟",
    answer:
      "Eating out doesn’t have to mean giving up control. In Pakistan, menus are full of tempting carb-heavy dishes, but you can make smart swaps. Choose grilled or baked meats over fried. Ask for roti made from whole wheat instead of naan, and skip the extra oil. Load your plate with salad or sautéed vegetables before touching the rice or bread. If you’re at a dhaba, go for daal with a side of mixed sabzi instead of biryani. And remember — portion size matters. Share a dish with a friend or ask for half to be packed. You’ll leave satisfied, not stuffed, and your blood sugar will thank you.",
    answerUr:
      "باہر کھانا کھانے کا مطلب کنٹرول چھوڑنا نہیں۔ پاکستان میں مینو کاربوہائیڈریٹ سے بھرے پکوانوں سے بھرے ہوتے ہیں، لیکن آپ ذہین تبادلے کر سکتے ہیں۔ تلے ہوئے کے بجائے گرل یا بیکڈ گوشت چنیں۔ نان کے بجائے سارے گندم کی روٹی مانگیں اور اضافی تیل سے گریز کریں۔ چاول یا روٹی کی طرف جانے سے پہلے اپنی پلیٹ سلاد یا بھنی سبزیوں سے بھریں۔ ڈھابے پر ہوں تو بریانی کے بجائے مکس سبزی کے ساتھ دال لیں۔ حصے کا سائز اہم ہے — کسی دوست کے ساتھ شیئر کریں یا آدھا پیک کروانے کو کہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    questionUr: "میرے ڈاکٹر نے GLP-1 کا ذکر کیا — یہ کیا ہے؟",
    answer:
      "GLP-1 receptor agonists are a newer type of diabetes medicine that work with your body’s natural hormones. They help your pancreas release insulin when needed, slow down digestion so you feel fuller, and can even help with weight loss — which is important since obesity and diabetes often go hand in hand in Pakistan. They usually come as weekly or daily injections, but the needles are tiny and easy to use. They’re not for everyone, and they can be costly, so discuss with your doctor whether they fit your treatment plan. For many, GLP-1s are a game-changer in controlling blood sugar and reducing heart risks.",
    answerUr:
      "GLP-1 ریسیپٹر ایگونسٹس ذیابیطس کی ایک نئی قسم کی دوا ہیں جو آپ کے جسم کے قدرتی ہارمونز کے ساتھ مل کر کام کرتی ہیں۔ یہ آپ کے لبلبے کو ضرورت پڑنے پر انسولین خارج کرنے میں مدد کرتی ہیں، ہاضمہ سست کرتی ہیں تاکہ آپ زیادہ دیر تک بھرا محسوس کریں، اور وزن کم کرنے میں بھی مدد کر سکتی ہیں — جو پاکستان میں اہم ہے کیونکہ موٹاپا اور ذیابیطس اکثر ساتھ چلتے ہیں۔ یہ عام طور پر ہفتہ وار یا روزانہ انجیکشن کے طور پر آتی ہیں، لیکن سوئیاں چھوٹی اور استعمال میں آسان ہیں۔ یہ سب کے لیے نہیں اور مہنگی ہو سکتی ہیں، اس لیے اپنے ڈاکٹر سے بات کریں۔",
    category: "Health" as Category,
  },
  {
    question: "I’ve just been diagnosed — what does this mean?",
    questionUr: "ابھی ابھی تشخیص ہوئی ہے — اس کا کیا مطلب ہے؟",
    answer:
      "Hearing 'You have diabetes' can feel like a punch to the gut. But here’s the truth: diabetes is not the end of your story — it’s a new chapter. In simple terms, your body is struggling to manage sugar (glucose) in your blood, either because it’s not making enough insulin or not using it well. Left unchecked, high sugar can harm your heart, eyes, kidneys, and nerves. But with the right habits, medication, and mindset, you can live a long, healthy life. Many Pakistanis manage their diabetes while running businesses, raising families, and enjoying life — and so can you. The key is to learn, act, and stay consistent.",
    answerUr:
      "’آپ کو ذیابیطس ہے’ سننا معدے میں مکا لگنے جیسا محسوس ہو سکتا ہے۔ لیکن سچ یہ ہے: ذیابیطس آپ کی کہانی کا اختتام نہیں — یہ ایک نیا باب ہے۔ سادہ الفاظ میں، آپ کا جسم آپ کے خون میں شکر (گلوکوز) کو منظم کرنے میں مشکل محسوس کر رہا ہے، یا تو کافی انسولین نہ بنانے یا اسے صحیح طریقے سے استعمال نہ کرنے کی وجہ سے۔ اگر جانچ نہ کی جائے تو زیادہ شکر آپ کے دل، آنکھوں، گردوں اور اعصاب کو نقصان پہنچا سکتی ہے۔ صحیح عادات، ادویات اور ذہنیت کے ساتھ، آپ ایک طویل، صحت مند زندگی گزار سکتے ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "I crave sweets all the time.",
    questionUr: "مجھے ہر وقت مٹھائی کی تلب ہوتی ہے۔",
    answer:
      "Sweet cravings are real — and in a culture where mithai, chai, and desserts are part of every celebration, resisting them can feel impossible. Instead of banning sweets completely (which can backfire), learn to manage them. Choose smaller portions — one gulab jamun instead of three. Swap sugary drinks for unsweetened lassi or lemon water. Keep fruit like guava or apple handy for when cravings hit. And remember, cravings often fade after 10–15 minutes — distract yourself with a short walk or a phone call. Over time, your taste buds will adjust, and you’ll find you need less sugar to feel satisfied.",
    answerUr:
      "مٹھائی کی خواہش حقیقی ہے — اور ایسی ثقافت میں جہاں مٹھائی، چائے، اور میٹھے ہر جشن کا حصہ ہوں، انہیں ترک کرنا ناممکن لگ سکتا ہے۔ میٹھے کو مکمل طور پر ممنوع کرنے کے بجائے انہیں منظم کرنا سیکھیں۔ چھوٹے حصے چنیں — تین کی جگہ ایک گلاب جامن۔ میٹھے مشروبات کو بغیر شکر کی لسی یا لیموں پانی سے بدلیں۔ جب خواہش ہو تو امرود یا سیب قریب رکھیں۔ یاد رکھیں، خواہشات اکثر 10-15 منٹ بعد ختم ہو جاتی ہیں — ایک مختصر سیر یا فون کال سے خود کو مصروف کریں۔",
    category: "Diet" as Category,
  },
  {
    question: "I keep forgetting my medication.",
    questionUr: "مجھے اپنی دوا لینا بھول جاتا ہے۔",
    answer:
      "Missing doses can quietly undo your progress. In our busy Pakistani routines — juggling work, family, and social commitments — it’s easy to forget. The trick is to link your medication to something you already do daily: after brushing your teeth, before your morning chai, or right after dinner. Use your phone’s alarm, a pillbox with daily compartments, or even a sticky note on the fridge. If you travel often, keep a spare strip in your bag or car. Remember, diabetes medicines work best when taken consistently — skipping 'just one day' can cause sugar spikes and long-term harm. Make it part of your routine, not an afterthought.",
    answerUr:
      "خوراکیں چھوڑنا خاموشی سے آپ کی ترقی کو کالعدم کر سکتا ہے۔ پاکستان کے مصروف معمولات میں — کام، خاندان اور سماجی ذمہ داریوں کے درمیان — بھول جانا آسان ہے۔ چال یہ ہے کہ دوا کو روزمرہ کے کسی کام سے جوڑ لیں: دانت صاف کرنے کے بعد، صبح کی چائے سے پہلے، یا رات کے کھانے کے فوراً بعد۔ اپنے فون کی الارم، روزانہ خانوں والا پل باکس، یا فریج پر اسٹیکر نوٹ استعمال کریں۔ اگر اکثر سفر کرتے ہیں تو بیگ یا گاڑی میں ایک اضافی پٹی رکھیں۔",
    category: "Health" as Category,
  },
  {
    question: "Why did this happen to me?",
    questionUr: "میرے ساتھ یہ کیوں ہوا؟",
    answer:
      "It’s natural to ask 'Why me?' Diabetes can be influenced by many factors — family history, weight, diet, stress, and even certain illnesses. In Pakistan, high-carb diets, low physical activity, and rising obesity rates have made type 2 diabetes more common. This isn’t about blame — it’s about awareness. Knowing your risk factors helps you take control. Even if genetics played a role, lifestyle changes can slow or even reverse early damage. Instead of focusing on 'why,' focus on 'what now' — the steps you can take today to protect your future.",
    answerUr:
      "’کیوں میرے ساتھ؟’ یہ پوچھنا فطری ہے۔ ذیابیطس کئی عوامل سے متاثر ہو سکتی ہے — خاندانی تاریخ، وزن، خوراک، تناؤ، اور یہاں تک کہ بعض بیماریاں۔ پاکستان میں، کاربوہائیڈریٹ سے بھرپور خوراک، کم جسمانی سرگرمی، اور بڑھتے ہوئے موٹاپے نے ٹائپ 2 ذیابیطس کو زیادہ عام بنا دیا ہے۔ یہ الزام کے بارے میں نہیں — یہ آگاہی کے بارے میں ہے۔ اپنے خطرے کے عوامل کو جاننا آپ کو کنٹرول لینے میں مدد کرتا ہے۔ ‘کیوں’ پر توجہ دینے کے بجائے، ‘اب کیا’ پر توجہ دیں۔",
    category: "Education" as Category,
  },
  {
    question: "I don’t know what I can eat anymore.",
    questionUr: "مجھے اب سمجھ نہیں آ رہا کہ میں کیا کھا سکتا ہوں۔",
    answer:
      "It can feel like your entire menu has been taken away — but in reality, you still have plenty of delicious options. Think of your plate in three parts: Half vegetables — sabzi, salad, or lightly cooked greens. One-quarter lean protein — chicken, fish, daal, or eggs. One-quarter whole grains or healthy carbs — whole-wheat roti, brown rice, or small portions of boiled potatoes. Avoid sugary drinks like cola or packaged juices; choose water, unsweetened lassi, or green tea instead. In Pakistan, small swaps — like grilled kebab instead of fried samosa, or roti instead of naan — can make a big difference. You’re not giving up flavour; you’re choosing foods that keep your sugar steady and your energy high.",
    answerUr:
      "ایسا محسوس ہو سکتا ہے جیسے آپ کا پورا مینو چھن گیا ہو — لیکن حقیقت میں آپ کے پاس اب بھی بہت سے لذیذ اختیارات ہیں۔ اپنی پلیٹ کو تین حصوں میں سوچیں: آدھی سبزیاں — سبزی، سلاد، یا ہلکی پکی ہوئی پتوں والی سبزیاں۔ ایک چوتھائی دبلا پروٹین — مرغی، مچھلی، دال، یا انڈے۔ ایک چوتھائی سارے اناج یا صحت مند کاربوہائیڈریٹ — گندم کی روٹی، بھورے چاول، یا ابلے آلو کے چھوٹے حصے۔ میٹھے مشروبات سے پرہیز کریں؛ پانی، بغیر شکر کی لسی، یا سبز چائے چنیں۔ آپ ذائقہ نہیں چھوڑ رہے؛ آپ ایسی غذائیں چن رہے ہیں جو شکر کو متوازن رکھیں۔",
    category: "Diet" as Category,
  },
  {
    question: "Are GLP-1s safe for me?",
    questionUr: "کیا GLP-1 میرے لیے محفوظ ہیں؟",
    answer:
      "GLP-1 medicines are generally safe for many people with type 2 diabetes, but they’re not for everyone. They can cause side effects like nausea, stomach upset, or constipation — usually mild and temporary. People with certain thyroid or pancreas conditions may need to avoid them. In Pakistan, where access and cost can be challenges, it’s important to have an honest discussion with your doctor about your health history, budget, and goals. If prescribed, start slowly, follow instructions carefully, and report any unusual symptoms. Safety isn’t just about the medicine — it’s about the right medicine for the right person.",
    answerUr:
      "GLP-1 ادویات عام طور پر ٹائپ 2 ذیابیطس والے بہت سے لوگوں کے لیے محفوظ ہیں، لیکن یہ سب کے لیے نہیں ہیں۔ یہ متلی، معدے کی خرابی، یا قبض جیسے ضمنی اثرات پیدا کر سکتی ہیں — عام طور پر ہلکے اور عارضی۔ بعض تھائرائیڈ یا لبلبے کی حالتوں والے لوگوں کو ان سے بچنے کی ضرورت ہو سکتی ہے۔ پاکستان میں جہاں رسائی اور لاگت چیلنج ہو سکتے ہیں، اپنے ڈاکٹر سے اپنی صحت کی تاریخ، بجٹ، اور اہداف کے بارے میں ایمانداری سے بات کرنا ضروری ہے۔",
    category: "Health" as Category,
  },
  {
    question: "My blood sugar numbers confuse me.",
    questionUr: "خون کی شکر کے اعداد مجھے الجھاتے ہیں۔",
    answer:
      "You’re not alone — those numbers can feel like a secret code. Think of your glucose readings as your body’s 'status updates.' A fasting sugar of 80–130 mg/dL is generally healthy for most people with diabetes, and under 180 mg/dL two hours after eating is a common target (your doctor may adjust these). If your numbers are high, it’s a signal to review your food, activity, or medication. If they’re low, you may need a quick snack. Keep a small notebook or use a phone app to track patterns — you’ll soon see what foods, stress, or routines push your numbers up or down. Knowledge is power here.",
    answerUr:
      "آپ اکیلے نہیں ہیں — وہ اعداد ایک خفیہ کوڈ جیسے لگ سکتے ہیں۔ اپنی گلوکوز ریڈنگز کو اپنے جسم کی ‘اسٹیٹس اپڈیٹس’ سمجھیں۔ روزانہ 80-130 mg/dL کی فاسٹنگ شکر ذیابیطس والے زیادہ تر لوگوں کے لیے عموماً صحت مند ہے، اور کھانے کے دو گھنٹے بعد 180 mg/dL سے کم ایک عام ہدف ہے (آپ کا ڈاکٹر ان کو ایڈجسٹ کر سکتا ہے)۔ اگر اعداد زیادہ ہوں تو یہ کھانے، سرگرمی، یا دوا کا جائزہ لینے کا اشارہ ہے۔ نمونوں کو ٹریک کرنے کے لیے ایک چھوٹی نوٹ بک یا فون ایپ استعمال کریں۔",
    category: "Education" as Category,
  },
  {
    question: "What food choices can I make at home?",
    questionUr: "گھر پر کون سے کھانے کے انتخاب کر سکتا ہوں؟",
    answer:
      "Home is where you have the most control over your diet. Stock your kitchen with fresh vegetables, whole grains, and lean proteins. Cook with less oil — use olive, canola, or mustard oil in small amounts. Limit white rice, white bread, and fried snacks; replace them with whole-wheat roti, brown rice, or baked alternatives. Keep healthy snacks ready — roasted chana, nuts, or sliced cucumber — so you’re not tempted by biscuits or chips. In Pakistani households, meals are often shared, so involve your family in healthier cooking. When everyone eats better, it’s easier for you to stay on track without feeling singled out.",
    answerUr:
      "گھر وہ جگہ ہے جہاں آپ کی خوراک پر سب سے زیادہ کنٹرول ہوتا ہے۔ اپنے باورچی خانے کو تازہ سبزیوں، سارے اناج، اور دبلے پروٹین سے بھریں۔ کم تیل میں پکائیں — زیتون، کینولا، یا سرسوں کا تیل تھوڑی مقدار میں استعمال کریں۔ سفید چاول، سفید روٹی، اور تلی ہوئی ناشتہ کو محدود کریں؛ انہیں گندم کی روٹی، بھورے چاول، یا بیکڈ متبادل سے بدلیں۔ صحت مند ناشتہ تیار رکھیں — بھنا چنا، مغز، یا کٹا ہوا کھیرا۔ پاکستانی گھروں میں کھانا اکثر مشترک ہوتا ہے، اس لیے اپنے خاندان کو صحت مند کھانا پکانے میں شامل کریں۔",
    category: "Diet" as Category,
  },
  {
    question: "I don’t like going to the gym.",
    questionUr: "مجھے جم جانا پسند نہیں۔",
    answer:
      "Good news — you don’t have to. Exercise is about movement, not machines. In Pakistan, daily life offers plenty of opportunities: brisk walks in the park, climbing stairs instead of taking the lift, or even dancing at a mehndi. Aim for at least 30 minutes of activity most days, but break it into smaller chunks if needed — 10 minutes after each meal can help control blood sugar. If you enjoy it, you’ll stick with it. So choose something that makes you feel good, whether it’s gardening, cycling, or playing cricket with friends. Your body — and your glucose meter — will thank you.",
    answerUr:
      "اچھی خبر — آپ کو جانا ضروری نہیں۔ ورزش حرکت کے بارے میں ہے، مشینوں کے نہیں۔ پاکستان میں روزمرہ زندگی بہت سے مواقع فراہم کرتی ہے: پارک میں تیز چہل قدمی، لفٹ کے بجائے سیڑھیاں چڑھنا، یا مہندی میں ڈانس کرنا۔ زیادہ تر دنوں میں کم از کم 30 منٹ سرگرمی کا ہدف رکھیں — ہر کھانے کے بعد 10 منٹ خون کی شکر کو کنٹرول کرنے میں مدد کر سکتے ہیں۔ کوئی ایسی چیز چنیں جو آپ کو اچھا محسوس کرائے، چاہے وہ باغبانی، سائیکلنگ، یا دوستوں کے ساتھ کرکٹ کھیلنا ہو۔",
    category: "Health" as Category,
  },
  {
    question: "I feel overwhelmed and scared.",
    questionUr: "میں بہت پریشان اور خوفزدہ محسوس کر رہا ہوں۔",
    answer:
      "It’s okay to feel this way — a diabetes diagnosis can shake your sense of control. In Pakistan, we often hear 'Bas Allah pe bharosa rakho' (Just trust in God), and while faith is powerful, pairing it with action is even stronger. Start small: learn one new thing about diabetes each week, make one healthier food swap, or walk for 15 minutes daily. Share your feelings with someone you trust — a friend, family member, or support group. You’re not weak for feeling scared; you’re human. Over time, these small steps will build confidence, and fear will give way to empowerment.",
    answerUr:
      "ایسا محسوس کرنا ٹھیک ہے — ذیابیطس کی تشخیص آپ کے کنٹرول کے احساس کو ہلا سکتی ہے۔ پاکستان میں ہم اکثر سنتے ہیں ‘بس اللہ پے بھروسہ رکھو’، اور ایمان طاقتور ہے، لیکن اس کے ساتھ عمل کو جوڑنا اور بھی مضبوط ہے۔ چھوٹا شروع کریں: ہر ہفتے ذیابیطس کے بارے میں ایک نئی چیز سیکھیں، ایک صحت مند کھانے کا تبادلہ کریں، یا روزانہ 15 منٹ چہل قدمی کریں۔ اپنے جذبات کسی قابل اعتماد شخص سے شیئر کریں۔ خوف محسوس کرنا کمزوری نہیں — آپ انسان ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "My family keeps offering me food I shouldn’t eat.",
    questionUr:
      "میرا خاندان مجھے ایسا کھانا پیش کرتا رہتا ہے جو مجھے نہیں کھانا چاہیے۔",
    answer:
      "Food is love in Pakistan, and refusing can feel rude. But your health comes first. Politely explain, 'Doctor ne mana kiya hai' (The doctor has advised against it) or 'Mujhe apni sehat ka khayal rakhna hai' (I need to take care of my health). Offer alternatives — 'I’ll have a small piece' or 'Can I have some salad instead?' Over time, your family will learn your boundaries. You’re not rejecting their love — you’re asking them to show it in a way that keeps you healthy.",
    answerUr:
      "پاکستان میں کھانا محبت کا اظہار ہے، اور انکار بے ادبی لگ سکتا ہے۔ لیکن آپ کی صحت پہلے آتی ہے۔ شائستگی سے بتائیں، ‘ڈاکٹر نے منع کیا ہے’ یا ‘مجھے اپنی صحت کا خیال رکھنا ہے’۔ متبادل پیش کریں — ‘میں ایک چھوٹا ٹکڑا لوں گا’ یا ‘کیا مجھے سلاد مل سکتا ہے؟’ وقت کے ساتھ آپ کا خاندان آپ کی حدود سمجھ جائے گا۔ آپ ان کی محبت کو رد نہیں کر رہے — آپ انہیں اسے ایسے ظاہر کرنے کو کہہ رہے ہیں جو آپ کو صحت مند رکھے۔",
    category: "Diet" as Category,
  },
  {
    question: "Will a GLP-1 replace my other diabetes medicines?",
    questionUr: "کیا GLP-1 میری دیگر ذیابیطس کی ادویات کی جگہ لے گا؟",
    answer:
      "Not always. GLP-1s can be used alone, but more often they’re added to your existing plan — alongside metformin, SGLT2 inhibitors, or even insulin. The goal is to work together to control blood sugar, protect your heart, and support weight loss if needed. Your doctor will decide whether to reduce or stop other medicines based on your progress. Never stop a medicine on your own — sudden changes can cause dangerous sugar swings. Think of GLP-1s as a powerful teammate, not a solo player.",
    answerUr:
      "ہمیشہ نہیں۔ GLP-1 اکیلے استعمال ہو سکتا ہے، لیکن اکثر اسے آپ کے موجودہ منصوبے میں شامل کیا جاتا ہے — میٹفارمن، SGLT2 انہیبیٹرز، یا انسولین کے ساتھ۔ مقصد مل کر خون کی شکر کو کنٹرول کرنا، دل کی حفاظت کرنا، اور ضرورت پڑنے پر وزن کم کرنے میں مدد کرنا ہے۔ آپ کا ڈاکٹر آپ کی ترقی کی بنیاد پر دیگر ادویات کم یا بند کرنے کا فیصلہ کرے گا۔ کبھی بھی اپنی طرف سے دوا بند نہ کریں — اچانک تبدیلیاں خطرناک شکر کے اتار چڑھاؤ کا سبب بن سکتی ہیں۔",
    category: "Health" as Category,
  },
  {
    question: "I’ll deal with complications if they happen.",
    questionUr: "پیچیدگیاں ہوئیں تو اس وقت دیکھ لوں گا۔",
    answer:
      "This mindset can be dangerous. Diabetes complications — like vision loss, kidney damage, or nerve pain — often develop silently over years. By the time symptoms appear, damage may be harder to reverse. Prevention is far easier (and cheaper) than treatment. Keep your sugar, blood pressure, and cholesterol in check. Get your eyes, feet, and kidneys checked at least once a year. In Pakistan, where healthcare access can be uneven, early action is your best insurance. Think of it like maintaining a car — regular servicing prevents breakdowns. Your body deserves the same care.",
    answerUr:
      "یہ سوچ خطرناک ہو سکتی ہے۔ ذیابیطس کی پیچیدگیاں — جیسے بینائی کا کمزور ہونا، گردوں کا نقصان، یا اعصابی درد — اکثر برسوں میں خاموشی سے پیدا ہوتی ہیں۔ جب تک علامات ظاہر ہوں، نقصان واپس کرنا مشکل ہو سکتا ہے۔ روک تھام علاج سے کہیں آسان اور سستا ہے۔ اپنی شکر، بلڈ پریشر، اور کولیسٹرول کو قابو میں رکھیں۔ اپنی آنکھیں، پاؤں، اور گردے سال میں کم از کم ایک بار چیک کروائیں۔ پاکستان میں جہاں صحت کی دیکھ بھال تک رسائی ناہموار ہو سکتی ہے، ابتدائی اقدام آپ کا بہترین تحفظ ہے۔",
    category: "Education" as Category,
  },
  {
    question: "My friends don’t understand why I can’t just ‘cheat’ sometimes.",
    questionUr:
      "میرے دوست نہیں سمجھتے کہ میں کبھی کبھی ‘چیٹ’ کیوں نہیں کر سکتا۔",
    answer:
      "Friends may not realise that 'just one' sweet or sugary drink can spike your sugar. Explain that managing diabetes is like keeping a balance — one slip can throw it off. Share how you’ve found tasty alternatives, and invite them to try. In Pakistan’s chai culture, you can still join in — just choose sugar-free or limit portions. True friends will respect your choices once they understand the stakes.",
    answerUr:
      "دوست شاید نہ سمجھیں کہ ‘صرف ایک’ مٹھائی یا میٹھا مشروب آپ کی شکر کو بڑھا سکتا ہے۔ سمجھائیں کہ ذیابیطس کا انتظام توازن برقرار رکھنے جیسا ہے — ایک غلطی توازن بگاڑ سکتی ہے۔ شیئر کریں کہ آپ نے ذائقہ دار متبادل کیسے ڈھونڈے، اور انہیں آزمانے کی دعوت دیں۔ پاکستان کی چائے کلچر میں آپ اب بھی شامل ہو سکتے ہیں — بس بغیر شکر چنیں یا حصہ محدود کریں۔ سچے دوست ایک بار خطرات سمجھنے کے بعد آپ کے انتخاب کا احترام کریں گے۔",
    category: "Diet" as Category,
  },
  {
    question: "I only see my doctor when I feel sick.",
    questionUr: "میں ڈاکٹر کے پاس صرف تب جاتا ہوں جب بیمار ہوتا ہوں۔",
    answer:
      "Diabetes doesn’t always shout — it often whispers. You might feel fine while silent damage is happening inside. Regular check-ups (every 3–6 months) help catch problems early, adjust medicines, and keep you on track. In Pakistan, where many skip follow-ups due to cost or time, think of these visits as investments in your future health. Bring your sugar logs, list of medicines, and any questions. Your doctor is your partner — but they can only help if they see the full picture.",
    answerUr:
      "ذیابیطس ہمیشہ چیختی نہیں — یہ اکثر سرگوشی کرتی ہے۔ آپ ٹھیک محسوس کر سکتے ہیں جبکہ اندر خاموش نقصان ہو رہا ہو۔ باقاعدہ چیک اپ (ہر 3-6 ماہ) مسائل کو جلدی پکڑنے، ادویات کو ایڈجسٹ کرنے، اور آپ کو ٹریک پر رکھنے میں مدد کرتے ہیں۔ پاکستان میں جہاں بہت سے لوگ لاگت یا وقت کی وجہ سے فالو اپ چھوڑتے ہیں، ان وزٹس کو اپنی مستقبل کی صحت میں سرمایہ کاری سمجھیں۔ اپنے شکر کے لاگ، ادویات کی فہرست، اور سوالات لے کر جائیں۔",
    category: "Health" as Category,
  },
  {
    question: "Is diabetes a death sentence?",
    questionUr: "کیا ذیابیطس موت کی سزا ہے؟",
    answer:
      "No — diabetes is not a death sentence. It’s a serious condition, but with the right approach, you can live a long, active, and fulfilling life. In Pakistan, thousands of people manage their diabetes while running businesses, raising families, and enjoying social life. The key is consistency: eating balanced meals, staying active, taking your medication, and monitoring your sugar levels. Think of diabetes like maintaining a car — regular care keeps it running smoothly for years. Yes, it requires discipline, but it doesn’t mean giving up joy. With the right mindset and support, diabetes can be a part of your life, not the thing that controls it.",
    answerUr:
      "نہیں — ذیابیطس موت کی سزا نہیں ہے۔ یہ ایک سنجیدہ حالت ہے، لیکن صحیح طریقے سے آپ ایک طویل، فعال اور بھرپور زندگی گزار سکتے ہیں۔ پاکستان میں ہزاروں لوگ کاروبار چلاتے، خاندان پالتے، اور سماجی زندگی سے لطف اندوز ہوتے ہوئے ذیابیطس کا انتظام کرتے ہیں۔ چابی یہ ہے: متوازن کھانا، سرگرم رہنا، دوا لینا، اور شکر کی سطح مانیٹر کرنا۔ صحیح ذہنیت اور معاونت کے ساتھ ذیابیطس آپ کی زندگی کا حصہ ہو سکتی ہے، آپ کو کنٹرول کرنے والی نہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Is it okay to eat fruit if I have diabetes?",
    questionUr: "کیا ذیابیطس میں پھل کھانا ٹھیک ہے؟",
    answer:
      "Yes — fruit can be part of a healthy diet for people with diabetes. Fruits contain natural sugars, but they also provide fibre, vitamins, and antioxidants that benefit your overall health. The key is portion control and choosing fruits with a lower glycaemic index (GI), which release sugar more slowly into your blood. Spread your fruit intake across the day instead of eating a large portion at once. Pair fruit with a source of protein or healthy fat — like a handful of nuts — to slow sugar absorption. In Pakistan, seasonal fruits like guava, apple, pear, and jamun can be great choices. Avoid fruit juices, which remove fibre and cause quick sugar spikes.",
    answerUr:
      "ہاں — پھل ذیابیطس والوں کی صحت مند خوراک کا حصہ ہو سکتے ہیں۔ پھلوں میں قدرتی شکر ہوتی ہے، لیکن یہ فائبر، وٹامنز، اور اینٹی آکسیڈنٹس بھی فراہم کرتے ہیں۔ چابی حصے کا کنٹرول اور کم گلائسیمک انڈیکس (GI) والے پھل چننا ہے۔ پھل کی مقدار کو دن بھر میں پھیلائیں اور پروٹین یا صحت مند چکنائی کے ساتھ کھائیں تاکہ شکر کا جذب سست ہو۔ پاکستان میں امرود، سیب، ناشپاتی، اور جامن اچھے انتخاب ہیں۔ پھلوں کے جوس سے گریز کریں جو فائبر ختم کرتے اور شکر تیزی سے بڑھاتے ہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I’m too busy to exercise.",
    questionUr: "میرے پاس ورزش کے لیے وقت نہیں۔",
    answer:
      "You don’t need hours in the gym — movement can fit into your day. Break it into 10-minute chunks: walk after meals, take stairs instead of the lift, or do light stretches while watching TV. In Pakistan’s busy lifestyle, even household chores like sweeping, gardening, or washing the car count as activity. Aim for at least 30 minutes total each day. If you commute, get off the bus a stop early and walk. The key is consistency — small, regular bursts of movement are better than occasional intense workouts. Your body — and your blood sugar — will thank you.",
    answerUr:
      "آپ کو جم میں گھنٹے نہیں چاہئیں — حرکت آپ کے دن میں فٹ ہو سکتی ہے۔ اسے 10 منٹ کے حصوں میں توڑیں: کھانے کے بعد چہل قدمی، لفٹ کے بجائے سیڑھیاں، یا ٹی وی دیکھتے وقت ہلکی ورزش۔ پاکستان کی مصروف زندگی میں صفائی، باغبانی، یا گاڑی دھونا بھی سرگرمی میں شمار ہوتا ہے۔ روزانہ کم از کم 30 منٹ کا ہدف رکھیں۔ اگر سفر کرتے ہیں تو ایک سٹاپ پہلے اتریں اور چلیں۔ مستقل مزاجی چابی ہے — چھوٹی باقاعدہ حرکت کبھی کبھی کی شدید ورزش سے بہتر ہے۔",
    category: "Health" as Category,
  },
  {
    question: "I feel fine — do I still need to be strict?",
    questionUr: "میں ٹھیک محسوس کر رہا ہوں — کیا مجھے اب بھی سخت رہنا ہوگا؟",
    answer:
      "Yes. Diabetes can cause silent damage even when you feel perfectly fine. High sugar levels slowly harm your blood vessels, nerves, and organs without obvious symptoms. By the time you 'feel' something, the damage may already be advanced. Staying disciplined with food, exercise, and medication is like maintaining a building’s foundation — you can’t see the cracks until it’s too late. Prevention today means fewer complications tomorrow. Even if you feel healthy now, your future self will thank you for the effort you put in today.",
    answerUr:
      "ہاں۔ ذیابیطس خاموش نقصان پہنچا سکتی ہے حتیٰ کہ جب آپ بالکل ٹھیک محسوس کریں۔ زیادہ شکر کی سطح آہستہ آہستہ آپ کی خون کی نالیوں، اعصاب، اور اعضاء کو بغیر واضح علامات کے نقصان پہنچاتی ہے۔ جب تک آپ کچھ ‘محسوس’ کرتے ہیں، نقصان پہلے سے ہی بڑھ چکا ہو سکتا ہے۔ کھانے، ورزش، اور ادویات میں نظم و ضبط رکھنا کسی عمارت کی بنیاد کو برقرار رکھنے جیسا ہے — آپ دراڑیں دیر سے دیکھتے ہیں۔ آج کی روک تھام کا مطلب ہے کل کم پیچیدگیاں۔ آپ کا مستقبل کا آپ آج کی کوشش کا شکریہ ادا کرے گا۔",
    category: "Education" as Category,
  },
  {
    question: "What fruits are best for people with diabetes?",
    questionUr: "ذیابیطس والوں کے لیے کون سے پھل بہترین ہیں؟",
    answer:
      "Fruits with a low to medium GI are best because they have a gentler effect on blood sugar. In Pakistan, good options include guava (amrood), apple (seb), pear (nashpati), jamun, peach (aaru), plum (aloo bukhara), and berries when available. Citrus fruits like kinnow, grapefruit, and lemon are also excellent. These fruits are rich in fibre, vitamins, and antioxidants, and they help you feel full without causing sharp sugar spikes. Eat them fresh and whole — not canned or in syrup. Remember, even healthy fruits should be eaten in moderation — about one small fruit or a cup of chopped fruit per serving.",
    answerUr:
      "کم سے درمیانی GI والے پھل بہترین ہیں کیونکہ ان کا خون کی شکر پر ہلکا اثر ہوتا ہے۔ پاکستان میں اچھے انتخاب میں امرود، سیب، ناشپاتی، جامن، آڑو، آلو بخارا، اور دستیاب ہونے پر بیریز شامل ہیں۔ کینو، گریپ فروٹ، اور لیموں جیسے ترش پھل بھی بہترین ہیں۔ یہ پھل فائبر، وٹامنز، اور اینٹی آکسیڈنٹس سے بھرپور ہیں اور شکر کی اچانک بڑھوتری کے بغیر آپ کو بھرا رکھتے ہیں۔ انہیں تازہ اور پورا کھائیں — ڈبہ بند یا چاشنی میں نہیں۔ یاد رکھیں، صحت مند پھل بھی اعتدال میں کھائیں — تقریباً ایک چھوٹا پھل یا ایک کپ کٹے ہوئے پھل فی حصہ۔",
    category: "Diet" as Category,
  },
  {
    question: "I’ve heard GLP-1s help with weight loss — is that true?",
    questionUr:
      "میں نے سنا ہے کہ GLP-1 وزن کم کرنے میں مدد کرتے ہیں — کیا یہ سچ ہے؟",
    answer:
      "Yes — GLP-1 medicines can help with weight loss by slowing digestion, reducing appetite, and helping you feel full longer. For many Pakistanis with type 2 diabetes and excess weight, this can improve blood sugar control and reduce heart risks. But they work best alongside healthy eating and regular activity. They’re not a magic fix — think of them as a tool, not the whole toolbox. Your doctor can help decide if they’re right for you based on your health, goals, and budget.",
    answerUr:
      "ہاں — GLP-1 ادویات ہاضمہ سست کرکے، بھوک کم کرکے، اور آپ کو زیادہ دیر تک بھرا محسوس کراکے وزن کم کرنے میں مدد کر سکتی ہیں۔ ٹائپ 2 ذیابیطس اور زائد وزن والے پاکستانیوں کے لیے، یہ خون کی شکر بہتر کر سکتا ہے اور دل کے خطرات کو کم کر سکتا ہے۔ لیکن یہ صحت مند کھانے اور باقاعدہ سرگرمی کے ساتھ بہترین کام کرتے ہیں۔ یہ جادوئی حل نہیں — انہیں ایک آلے کے طور پر سوچیں، پورے ٹول باکس کے طور پر نہیں۔ آپ کا ڈاکٹر آپ کی صحت، اہداف، اور بجٹ کی بنیاد پر فیصلہ کرنے میں مدد کر سکتا ہے۔",
    category: "Health" as Category,
  },
  {
    question: "I’m tired of living with so many rules.",
    questionUr: "میں اتنے سارے اصولوں کے ساتھ جینے سے تھک گیا ہوں۔",
    answer:
      "It’s normal to feel burnt out. Diabetes care can feel like a never-ending list of restrictions, especially in a culture where food and hospitality are central to social life. The key is balance, not perfection. Allow yourself occasional treats in small portions — one piece of mithai instead of three, or biryani once in a while instead of every week. Focus on what you can enjoy: flavorful spices, fresh vegetables, lean meats, and active hobbies. Build flexibility into your plan so it feels sustainable. Remember, this is a lifelong journey — it’s about living well, not living under constant pressure.",
    answerUr:
      "تھکاوٹ محسوس کرنا عام بات ہے۔ ذیابیطس کی دیکھ بھال پابندیوں کی نہ ختم ہونے والی فہرست جیسی لگ سکتی ہے، خاص طور پر ایسی ثقافت میں جہاں کھانا اور مہمان نوازی سماجی زندگی کا مرکز ہے۔ چابی توازن ہے، کمال نہیں۔ خود کو کبھی کبھار چھوٹے حصوں میں لذت کی اجازت دیں — تین کی جگہ ایک مٹھائی، یا ہر ہفتے کی جگہ کبھی کبھار بریانی۔ اس پر توجہ دیں جو آپ لطف اندوز ہو سکتے ہیں: ذائقہ دار مسالے، تازہ سبزیاں، دبلی گوشت، اور فعال مشاغل۔ اپنے منصوبے میں لچک بنائیں تاکہ یہ پائیدار لگے۔ یہ ایک زندگی بھر کا سفر ہے — اچھی زندگی گزارنے کے بارے میں ہے، مستقل دباؤ میں رہنے کے بارے میں نہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Which fruits should I limit or avoid?",
    questionUr: "کون سے پھل مجھے محدود کرنے یا گریز کرنا چاہیے؟",
    answer:
      "Some fruits have a higher GI or more concentrated sugar, which can raise blood sugar quickly. In Pakistan, this includes ripe bananas, chikoo (sapodilla), grapes, lychee, and dates. You don’t have to avoid them completely, but limit portions — for example, 2–3 small dates instead of a handful, or half a banana instead of a whole one. Eat them with a meal rather than on an empty stomach, and pair them with protein or fibre to slow sugar absorption. Dried fruits like raisins and figs are also high in sugar — treat them as occasional snacks, not daily staples.",
    answerUr:
      "کچھ پھلوں میں زیادہ GI یا زیادہ گاڑھی شکر ہوتی ہے جو خون کی شکر تیزی سے بڑھا سکتی ہے۔ پاکستان میں اس میں پکے ہوئے کیلے، چیکو، انگور، لیچی، اور کھجوریں شامل ہیں۔ آپ کو انہیں مکمل طور پر چھوڑنا نہیں ہے، لیکن مقدار محدود رکھیں — مثلاً مٹھی بھر کی جگہ 2-3 چھوٹی کھجوریں، یا پورے کیلے کی جگہ آدھا۔ انہیں خالی پیٹ کے بجائے کھانے کے ساتھ کھائیں، اور شکر جذب کو سست کرنے کے لیے پروٹین یا فائبر کے ساتھ جوڑیں۔ کشمش اور انجیر جیسے خشک میوے بھی شکر میں زیادہ ہیں — انہیں روزانہ کی بجائے کبھی کبھار کا ناشتہ سمجھیں۔",
    category: "Diet" as Category,
  },
  {
    question: "These injections sound scary — how do I take them?",
    questionUr: "یہ انجیکشن خوفناک لگتے ہیں — میں انہیں کیسے لوں؟",
    answer:
      "GLP-1 injections use very fine needles — most people say they barely feel them. Your healthcare provider will show you exactly how to prepare, inject, and store the medicine. They’re usually taken once a week or once a day, depending on the type. Store them in the fridge, but let the pen warm to room temperature before injecting to reduce discomfort. Rotate injection sites (stomach, thigh, or upper arm) to avoid irritation. With a little practice, it becomes as routine as brushing your teeth.",
    answerUr:
      "GLP-1 انجیکشن بہت باریک سوئیاں استعمال کرتے ہیں — زیادہ تر لوگ کہتے ہیں کہ انہیں مشکل سے محسوس ہوتے ہیں۔ آپ کا صحت فراہم کنندہ آپ کو بالکل دکھائے گا کہ دوا کو کیسے تیار کریں، لگائیں، اور محفوظ کریں۔ قسم کے حساب سے عام طور پر ہفتے میں ایک بار یا روزانہ ایک بار لی جاتی ہیں۔ انہیں فریج میں محفوظ کریں، لیکن تکلیف کم کرنے کے لیے لگانے سے پہلے قلم کو کمرے کے درجہ حرارت پر گرم ہونے دیں۔ جلن سے بچنے کے لیے انجیکشن کی جگہیں بدلتے رہیں (پیٹ، ران، یا اوپری بازو)۔ تھوڑی مشق کے ساتھ یہ دانت صاف کرنے جیسا معمول بن جاتا ہے۔",
    category: "Health" as Category,
  },
  {
    question: "My family doesn’t understand what I’m going through.",
    questionUr: "میرا خاندان نہیں سمجھتا کہ میں کیا گزر رہا ہوں۔",
    answer:
      "Family support can make a huge difference, but sometimes they don’t fully grasp the challenges of living with diabetes. They might insist you 'just have one more' sweet or skip your walk for a family gathering. Communicate openly: explain why certain foods are off-limits, why you need time for exercise, and how stress affects your sugar. Invite them to join you in healthy meals or walks so they feel part of your journey. When they see your commitment, they’re more likely to support you. Remember, you’re not just managing your health — you’re also teaching those around you how to care for it.",
    answerUr:
      "خاندانی تعاون بہت فرق ڈال سکتا ہے، لیکن کبھی کبھی وہ ذیابیطس کے ساتھ زندگی گزارنے کی مشکلات کو پوری طرح نہیں سمجھتے۔ وہ اصرار کر سکتے ہیں کہ ‘بس ایک اور’ مٹھائی کھاؤ یا خاندانی اجتماع کے لیے چہل قدمی چھوڑ دو۔ کھل کر بات کریں: سمجھائیں کیوں کچھ کھانے منع ہیں، کیوں آپ کو ورزش کے لیے وقت چاہیے، اور تناؤ آپ کی شکر کو کیسے متاثر کرتا ہے۔ انہیں صحت مند کھانوں یا چہل قدمی میں شامل کریں تاکہ وہ آپ کے سفر کا حصہ محسوس کریں۔ جب وہ آپ کی لگن دیکھیں گے تو آپ کی مدد کرنے کا زیادہ امکان رکھتے ہیں۔ یاد رکھیں، آپ صرف اپنی صحت کا نہیں بلکہ اپنے آس پاس والوں کو یہ سکھا رہے ہیں کہ اس کی دیکھ بھال کیسے کریں۔",
    category: "Education" as Category,
  },
  {
    question: "Can I eat mangoes if I have diabetes?",
    questionUr: "کیا ذیابیطس میں آم کھا سکتا ہوں؟",
    answer:
      "Yes — but in moderation. Mangoes are high in natural sugar, especially when fully ripe, but they also contain fibre and nutrients. The key is portion size and timing. Stick to ½ cup of chopped mango (about half a small mango) in one sitting, and avoid eating it alongside other high-carb foods like roti or rice. Pair it with a handful of nuts or a boiled egg to slow sugar release. Eating mango earlier in the day, when you’re more active, can also help your body use the sugar more effectively. In mango season, enjoy the taste — but let moderation be your rule.",
    answerUr:
      "ہاں — لیکن اعتدال میں۔ آم میں قدرتی شکر زیادہ ہوتی ہے، خاص طور پر جب پوری طرح پکے ہوں، لیکن ان میں فائبر اور غذائی اجزاء بھی ہوتے ہیں۔ چابی حصے کا سائز اور وقت ہے۔ ایک دفعہ میں آدھا کپ کٹا ہوا آم (تقریباً آدھا چھوٹا آم) کھائیں، اور اسے روٹی یا چاول جیسے دیگر زیادہ کاربوہائیڈریٹ والے کھانوں کے ساتھ کھانے سے گریز کریں۔ شکر کے اخراج کو سست کرنے کے لیے مٹھی بھر گری دار میوے یا ایک ابلے ہوئے انڈے کے ساتھ جوڑیں۔ دن میں پہلے آم کھانا جب آپ زیادہ سرگرم ہوں، آپ کے جسم کو شکر زیادہ مؤثر طریقے سے استعمال کرنے میں مدد کر سکتا ہے۔ آم کے موسم میں ذائقے سے لطف اندوز ہوں — لیکن اعتدال کو اپنا اصول رکھیں۔",
    category: "Diet" as Category,
  },
  {
    question: "GLP-1s are expensive — are they worth it?",
    questionUr: "GLP-1 مہنگے ہیں — کیا یہ اس کے قابل ہیں؟",
    answer:
      "GLP-1s can be costly in Pakistan, especially without insurance. Whether they’re 'worth it' depends on your health goals, how well they work for you, and your budget. They can improve blood sugar, support weight loss, and reduce heart risks — benefits that may save you money on future complications. Discuss with your doctor if there are patient assistance programs, generic options, or alternative medicines that could work for you. The decision should balance health benefits with financial reality.",
    answerUr:
      "پاکستان میں GLP-1 مہنگے ہو سکتے ہیں، خاص طور پر بیمہ کے بغیر۔ آیا وہ ‘قابل’ ہیں یہ آپ کے صحت کے اہداف، آپ کے لیے ان کے کام کرنے کے طریقے، اور آپ کے بجٹ پر منحصر ہے۔ یہ خون کی شکر بہتر کر سکتے ہیں، وزن کم کرنے میں مدد کر سکتے ہیں، اور دل کے خطرات کو کم کر سکتے ہیں — وہ فوائد جو آپ کو مستقبل کی پیچیدگیوں پر پیسے بچا سکتے ہیں۔ اپنے ڈاکٹر سے بات کریں کہ آیا مریض امدادی پروگرام، جنیرک آپشن، یا متبادل ادویات ہیں جو آپ کے لیے کام کر سکتی ہیں۔ فیصلہ صحت کے فوائد اور مالی حقیقت کے درمیان توازن ہونا چاہیے۔",
    category: "Health" as Category,
  },
  {
    question: "I didn’t know diabetes affects my eyes, feet, and heart.",
    questionUr:
      "مجھے نہیں معلوم تھا کہ ذیابیطس میری آنکھوں، پاؤں، اور دل کو متاثر کرتی ہے۔",
    answer:
      "Diabetes isn’t just about sugar — it can quietly damage blood vessels and nerves throughout your body. High sugar can harm your eyes (causing vision loss), your feet (leading to numbness, wounds, or infections), and your heart (increasing the risk of heart attack and stroke). The good news? You can protect yourself. Keep your sugar, blood pressure, and cholesterol in target range. Get your eyes checked yearly, inspect your feet daily, and see your doctor if you notice cuts, swelling, or numbness. Eat heart-healthy foods, stay active, and don’t smoke. In Pakistan, where many delay check-ups, early prevention is your best defence.",
    answerUr:
      "ذیابیطس صرف شکر کے بارے میں نہیں — یہ خاموشی سے آپ کے جسم میں خون کی نالیوں اور اعصاب کو نقصان پہنچا سکتی ہے۔ زیادہ شکر آپ کی آنکھوں (بینائی کی کمی)، آپ کے پاؤں (بے حسی، زخم، یا انفیکشن)، اور آپ کے دل (دل کا دورہ اور فالج کا خطرہ بڑھنا) کو نقصان پہنچا سکتی ہے۔ اچھی خبر؟ آپ خود کو بچا سکتے ہیں۔ اپنی شکر، بلڈ پریشر، اور کولیسٹرول کو ہدف کی سطح پر رکھیں۔ سالانہ آنکھوں کی جانچ کروائیں، روزانہ اپنے پاؤں کا معائنہ کریں، اور کٹ، سوجن، یا بے حسی نظر آئے تو ڈاکٹر کو دکھائیں۔ دل کے لیے صحت مند کھانا کھائیں، سرگرم رہیں، اور تمباکو نوشی نہ کریں۔ پاکستان میں جہاں بہت سے لوگ چیک اپ دیر سے کرواتے ہیں، ابتدائی روک تھام آپ کا بہترین دفاع ہے۔",
    category: "Education" as Category,
  },
  {
    question: "How much fruit can I eat in a day?",
    questionUr: "میں دن میں کتنا پھل کھا سکتا ہوں؟",
    answer:
      "For most people with diabetes, 2–3 servings of fruit per day is a safe range — but this depends on your blood sugar control and your doctor’s advice. One serving is about one small fruit (like an apple or guava) or one cup of chopped fruit. Spread your servings across the day instead of eating them all at once. Monitor your blood sugar after trying new fruits to see how your body responds. Remember, fruit is healthy, but it still counts toward your daily carbohydrate intake — so balance it with your other meals.",
    answerUr:
      "زیادہ تر ذیابیطس والوں کے لیے دن میں 2-3 پھل کے حصے محفوظ حد ہے — لیکن یہ آپ کی خون کی شکر کے کنٹرول اور ڈاکٹر کی ہدایات پر منحصر ہے۔ ایک حصہ تقریباً ایک چھوٹا پھل (جیسے سیب یا امرود) یا ایک کپ کٹے ہوئے پھل ہے۔ اپنے حصوں کو دن بھر میں پھیلائیں بجائے سب ایک ساتھ کھانے کے۔ نئے پھل آزمانے کے بعد خون کی شکر کی نگرانی کریں تاکہ دیکھ سکیں کہ آپ کا جسم کیسے ردعمل کرتا ہے۔ یاد رکھیں، پھل صحت مند ہے، لیکن یہ آپ کے روزانہ کاربوہائیڈریٹ کی مقدار میں شمار ہوتا ہے — اس لیے اسے اپنے دیگر کھانوں کے ساتھ متوازن رکھیں۔",
    category: "Diet" as Category,
  },
  {
    question: "What happens if I stop taking my GLP-1?",
    questionUr: "اگر میں اپنا GLP-1 لینا بند کر دوں تو کیا ہوگا؟",
    answer:
      "If you stop, your appetite may return to previous levels, and your blood sugar and weight could rise again. This doesn’t mean you’ll ‘undo’ all your progress overnight, but it does mean you’ll need a plan. Work with your doctor to adjust your diet, exercise, and other medicines before stopping. Think of GLP-1s as part of a long-term strategy — if you remove one piece, you need to strengthen the others to keep your health on track.",
    answerUr:
      "اگر آپ بند کریں تو آپ کی بھوک پہلے کی سطح پر واپس آ سکتی ہے، اور آپ کی خون کی شکر اور وزن دوبارہ بڑھ سکتے ہیں۔ اس کا مطلب یہ نہیں کہ آپ رات بھر میں تمام پیش رفت ‘ختم’ کر دیں گے، لیکن اس کا مطلب ہے کہ آپ کو ایک منصوبے کی ضرورت ہوگی۔ بند کرنے سے پہلے اپنی خوراک، ورزش، اور دیگر ادویات کو ایڈجسٹ کرنے کے لیے اپنے ڈاکٹر کے ساتھ کام کریں۔ GLP-1 کو ایک طویل مدتی حکمت عملی کے حصے کے طور پر سوچیں — اگر آپ ایک حصہ ہٹاتے ہیں تو دوسروں کو مضبوط کرنا ہوگا تاکہ آپ کی صحت پٹری پر رہے۔",
    category: "Health" as Category,
  },
  {
    question: "I keep falling off track.",
    questionUr: "میں بار بار پٹری سے اتر جاتا ہوں۔",
    answer:
      "It happens to everyone. Life in Pakistan is full of weddings, Eid feasts, and chai breaks that can throw you off your plan. The key is not to let one slip turn into a spiral. Instead of feeling guilty, reset at the very next meal or the next day. Ask yourself: What’s one small thing I can do right now? Maybe it’s a 10-minute walk, skipping the sugary drink, or taking your medicine on time. Keep healthy snacks handy so you’re not tempted by quick fixes. Remember, diabetes management is a marathon, not a sprint — progress matters more than perfection.",
    answerUr:
      "یہ سب کے ساتھ ہوتا ہے۔ پاکستان کی زندگی شادیوں، عید کی دعوتوں، اور چائے کے وقفوں سے بھری ہے جو آپ کے منصوبے کو پٹری سے اتار سکتی ہے۔ چابی یہ ہے کہ ایک لغزش کو سرپل میں نہ بدلنے دیں۔ گناہ محسوس کرنے کے بجائے، اگلے کھانے یا اگلے دن ریسیٹ کریں۔ خود سے پوچھیں: ابھی میں ایک چھوٹی سی کیا کر سکتا ہوں؟ شاید 10 منٹ کی چہل قدمی، میٹھا مشروب چھوڑنا، یا وقت پر دوا لینا۔ صحت مند ناشتہ ہاتھ کے قریب رکھیں تاکہ آپ فوری حلوں کی طرف نہ جائیں۔ یاد رکھیں، ذیابیطس کا انتظام ایک میراتھن ہے، دوڑ نہیں — پیش رفت کمال سے زیادہ اہم ہے۔",
    category: "Education" as Category,
  },
  {
    question: "Should I drink fruit juice instead of eating whole fruit?",
    questionUr: "کیا مجھے پورا پھل کھانے کی بجائے پھلوں کا رس پینا چاہیے؟",
    answer:
      "Whole fruit is always better than juice for people with diabetes. Juice — even fresh-squeezed — removes most of the fibre, which means the natural sugar hits your bloodstream quickly, causing a spike. A glass of juice can contain the sugar of 3–4 fruits without the filling effect. If you really want juice, limit it to a very small portion (½ cup), dilute it with water, and pair it with a high-fibre snack. But whenever possible, eat the fruit whole — you’ll get the fibre, feel fuller, and keep your sugar more stable.",
    answerUr:
      "ذیابیطس والوں کے لیے پورا پھل ہمیشہ جوس سے بہتر ہے۔ جوس — حتیٰ کہ تازہ نچوڑا ہوا — زیادہ تر فائبر ختم کر دیتا ہے، جس کا مطلب ہے قدرتی شکر تیزی سے خون میں شامل ہوتی ہے اور بڑھوتری آتی ہے۔ ایک گلاس جوس میں بھرنے کے اثر کے بغیر 3-4 پھلوں کی شکر ہو سکتی ہے۔ اگر آپ واقعی جوس چاہتے ہیں تو بہت کم مقدار (آدھا کپ) تک محدود رکھیں، پانی سے پتلا کریں، اور زیادہ فائبر والے ناشتے کے ساتھ لیں۔ لیکن جب بھی ممکن ہو، پھل پورا کھائیں — آپ کو فائبر ملے گی، زیادہ پیٹ بھرے گا، اور شکر زیادہ مستحکم رہے گی۔",
    category: "Diet" as Category,
  },
  {
    question: "I want to live a normal life.",
    questionUr: "میں ایک معمول کی زندگی گزارنا چاہتا ہوں۔",
    answer:
      "You can — by making diabetes care part of your routine, not your identity. Plan your meals so you can still enjoy family favourites in moderation. Schedule activity into your day, just like you would a meeting or prayer. Keep your medicines and glucose checks as regular habits, not special events. In Pakistan, social life often revolves around food, so learn to make smart swaps and control portions without drawing attention. When care becomes second nature, you’ll find you’re living your life — with diabetes in the background, not the spotlight.",
    answerUr:
      "آپ کر سکتے ہیں — ذیابیطس کی دیکھ بھال کو اپنی شناخت کے بجائے معمول کا حصہ بنا کر۔ اپنے کھانوں کی منصوبہ بندی کریں تاکہ آپ پھر بھی خاندان کی پسندیدہ چیزیں اعتدال میں لطف اندوز ہو سکیں۔ سرگرمی کو اپنے دن میں شامل کریں، جیسے کسی میٹنگ یا نماز کی طرح۔ اپنی ادویات اور گلوکوز چیک کو باقاعدہ عادات بنائیں، خاص واقعات نہیں۔ پاکستان میں سماجی زندگی اکثر کھانے کے گرد گھومتی ہے، اس لیے بغیر توجہ کھینچے سمارٹ متبادل اور حصوں پر کنٹرول سیکھیں۔ جب دیکھ بھال فطری ہو جائے تو آپ پائیں گے کہ آپ اپنی زندگی گزار رہے ہیں — ذیابیطس پس منظر میں، روشنی کے مرکز میں نہیں۔",
    category: "Education" as Category,
  },
  {
    question: "How can I make fruit part of my meal plan?",
    questionUr: "میں پھل کو اپنے کھانے کے منصوبے کا حصہ کیسے بنا سکتا ہوں؟",
    answer:
      "Think of fruit as a healthy carb choice that can replace less nutritious snacks. Have a small apple with a handful of almonds for your mid-morning snack, or a slice of papaya after lunch instead of dessert. Add chopped guava or pear to your salad for extra crunch. In Pakistan’s hot summers, chilled watermelon in a small portion can be refreshing — just pair it with nuts or cheese to slow sugar absorption. By planning your fruit intake, you can enjoy sweetness without harming your blood sugar control.",
    answerUr:
      "پھل کو ایک صحت مند کاربوہائیڈریٹ انتخاب کے طور پر سوچیں جو کم غذائی قدر کے ناشتوں کی جگہ لے سکتا ہے۔ صبح کے وقفے میں مٹھی بھر بادام کے ساتھ ایک چھوٹا سیب لیں، یا دوپہر کے کھانے کے بعد میٹھے کی جگہ ایک ٹکڑا پپیتا۔ اضافی کرنچ کے لیے اپنے سلاد میں کٹا امرود یا ناشپاتی شامل کریں۔ پاکستان کی گرم گرمیوں میں چھوٹے حصے میں ٹھنڈا تربوز تازگی بخش ہو سکتا ہے — بس شکر جذب سست کرنے کے لیے گری دار میوے یا پنیر کے ساتھ لیں۔ پھل کی مقدار کی منصوبہ بندی کرکے آپ خون کی شکر کے کنٹرول کو نقصان پہنچائے بغیر مٹھاس سے لطف اندوز ہو سکتے ہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I want to help others with diabetes.",
    questionUr: "میں ذیابیطس والے دوسروں کی مدد کرنا چاہتا ہوں۔",
    answer:
      "Your journey can inspire others. Share your story with friends, family, or online communities. Offer practical tips — like your favourite sugar-free recipes or how you remember your medicines. In Pakistan, where awareness is still growing, you can make a real difference by encouraging early check-ups, healthy eating, and regular exercise. Volunteer with local health camps or support groups. Helping others not only spreads knowledge — it strengthens your own commitment to living well.",
    answerUr:
      "آپ کا سفر دوسروں کو متاثر کر سکتا ہے۔ دوستوں، خاندان، یا آن لائن کمیونٹیز کے ساتھ اپنی کہانی شیئر کریں۔ عملی تجاویز دیں — جیسے آپ کی پسندیدہ شوگر فری ترکیبیں یا آپ ادویات کیسے یاد رکھتے ہیں۔ پاکستان میں جہاں آگاہی اب بھی بڑھ رہی ہے، آپ جلد چیک اپ، صحت مند کھانے، اور باقاعدہ ورزش کی حوصلہ افزائی کرکے واقعی فرق ڈال سکتے ہیں۔ مقامی صحت کیمپوں یا سپورٹ گروپس میں رضاکارانہ طور پر حصہ لیں۔ دوسروں کی مدد نہ صرف علم پھیلاتی ہے — یہ خود آپ کے اچھی زندگی گزارنے کے عزم کو مضبوط کرتی ہے۔",
    category: "Education" as Category,
  },
  {
    question: "Are dry fruits safe for people with diabetes?",
    questionUr: "کیا خشک میوے ذیابیطس والوں کے لیے محفوظ ہیں؟",
    answer:
      "Yes — but with caution. Dry fruits are nutrient-dense, rich in healthy fats, fibre, vitamins, and minerals. However, they are also calorie-dense, and some (like raisins, dates, and figs) are high in natural sugars that can raise blood glucose quickly. The key is portion control. A small handful (about 20–30 grams) of unsalted, unsweetened nuts or seeds can be a healthy snack that supports heart health and keeps you full. Avoid sugar-coated or fried varieties. In Pakistan, where dry fruits are often served generously in winter, measure your portion before eating to avoid mindless snacking.",
    answerUr:
      "ہاں — لیکن احتیاط کے ساتھ۔ خشک میوے غذائی اجزاء سے بھرپور، صحت مند چکنائیوں، فائبر، وٹامنز، اور معدنیات سے مالامال ہیں۔ تاہم، یہ کیلوریز میں بھی زیادہ ہیں، اور کچھ (جیسے کشمش، کھجوریں، اور انجیر) میں قدرتی شکر زیادہ ہے جو خون کی گلوکوز تیزی سے بڑھا سکتی ہے۔ چابی حصے کا کنٹرول ہے۔ بغیر نمک اور چینی کے گری دار میوے یا بیجوں کی ایک چھوٹی مٹھی (تقریباً 20-30 گرام) ایک صحت مند ناشتہ ہو سکتا ہے۔ شکر لگی یا تلی ہوئی اقسام سے گریز کریں۔ پاکستان میں جہاں سردیوں میں خشک میوے اکثر فراخدلی سے پیش کیے جاتے ہیں، لاپرواہ ناشتے سے بچنے کے لیے کھانے سے پہلے اپنا حصہ ناپیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I feel shocked and numb after my diagnosis.",
    questionUr: "میں تشخیص کے بعد صدمے اور بے حسی میں ہوں۔",
    answer:
      "Hearing 'You have diabetes' can feel like the ground has shifted beneath you. Shock, disbelief, even denial — these are natural first reactions. In Pakistan, where health conversations often happen late in the game, it’s common to feel blindsided. Give yourself permission to process. You don’t have to understand everything today. Start by learning the basics: what diabetes is, how it affects your body, and what steps you can take now. Talk to your doctor, write down your questions, and bring a trusted family member to appointments. Remember, this is not the end of your story — it’s the beginning of a new chapter where you take charge of your health.",
    answerUr:
      "’آپ کو ذیابیطس ہے’ سننا ایسا لگ سکتا ہے جیسے زمین آپ کے نیچے سے کھسک گئی ہو۔ صدمہ، بے یقینی، یہاں تک کہ انکار — یہ قدرتی پہلے ردعمل ہیں۔ پاکستان میں جہاں صحت کی گفتگو اکثر دیر سے ہوتی ہے، اچانک معلوم ہونا عام ہے۔ خود کو سوچنے کی اجازت دیں۔ آپ کو آج سب کچھ سمجھنا نہیں ہے۔ بنیادی باتوں سے شروع کریں: ذیابیطس کیا ہے، یہ آپ کے جسم کو کیسے متاثر کرتی ہے، اور آپ ابھی کیا اقدامات اٹھا سکتے ہیں۔ اپنے ڈاکٹر سے بات کریں، اپنے سوالات لکھیں، اور ملاقاتوں میں اéک قابل اعتماد خاندان کے فرد کو ساتھ لائیں۔ اد رکھیں، ین آپ کी کہانی کا اختتام نہیں — ین اéک نئے باب کا آغاز ہے جہاں آپ اپنी صحت کी ذمہ داری لئیدتے ہيں۔",
    category: "Education" as Category,
  },
  {
    question: "Which dry fruits are best for blood sugar control?",
    questionUr: "خون کی شکر کے کنٹرول کے لیے کون سے خشک میوے بہترین ہیں؟",
    answer:
      "Nuts like almonds (badam), walnuts (akhrot), pistachios (pista), and peanuts (moongphali) are excellent choices for people with diabetes. They have a low glycaemic index, are high in fibre, and contain healthy fats that help stabilise blood sugar. Walnuts are especially good for heart health, while almonds provide magnesium, which supports insulin function. Choose raw or lightly roasted, unsalted versions. A small handful can be eaten as a snack, sprinkled over salads, or added to porridge. These nuts not only help with blood sugar control but also keep you feeling satisfied for longer.",
    answerUr:
      "بادام، اخروٹ، پستہ، اور مونگ پھلی جیسے گری دار میوے ذیابیطس والوں کے لیے بہترین انتخاب ہیں۔ ان کا گلائسیمک انڈیکس کم ہے، فائبر زیادہ ہے، اور صحت مند چکنائیاں ہیں جو خون کی شکر مستحکم رکھنے میں مدد کرتی ہیں۔ اخروٹ دل کی صحت کے لیے خاص طور پر اچھے ہیں، جبکہ بادام میگنیشیم فراہم کرتے ہیں جو انسولین کے عمل کو سہارا دیتا ہے۔ خام یا ہلکے بھنے، بغیر نمک کے ورژن چنیں۔ ایک چھوٹی مٹھی بطور ناشتہ کھائی جا سکتی ہے، سلاد پر چھڑکی جا سکتی ہے، یا دلیے میں شامل کی جا سکتی ہے۔ یہ گری دار میوے نہ صرف خون کی شکر کے کنٹرول میں مدد کرتے ہیں بلکہ آپ کو زیادہ دیر تک مطمئن بھی رکھتے ہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I’m scared about my future.",
    questionUr: "مجھے اپنے مستقبل کا ڈر ہے۔",
    answer:
      "Fear is normal — but it can be turned into fuel. Instead of imagining worst-case scenarios, focus on what’s in your control today: your meals, your activity, your medication, and your mindset. In Pakistan, many people live decades with diabetes while working, travelling, and enjoying life. The difference is consistent care. Break your goals into small, achievable steps — like walking 15 minutes after dinner or swapping one sugary drink for water each day. Each small win builds confidence and reduces fear. The future isn’t written yet — and your daily choices are the pen.",
    answerUr:
      "ڈر فطری ہے — لیکن اسے ایندھن میں بدلا جا سکتا ہے۔ بدترین صورت حال کا تصور کرنے کے بجائے، اس پر توجہ دیں جو آج آپ کے کنٹرول میں ہے: آپ کا کھانا، آپ کی سرگرمی، آپ کی دوا، اور آپ کی ذہنیت۔ پاکستان میں بہت سے لوگ کام کرتے، سفر کرتے، اور زندگی سے لطف اندوز ہوتے ہوئے دہائیوں تک ذیابیطس کے ساتھ جیتے ہیں۔ فرق مستقل دیکھ بھال ہے۔ اپنے اہداف کو چھوٹے قابل حصول قدموں میں توڑیں — جیسے رات کے کھانے کے بعد 15 منٹ چلنا یا روزانہ ایک میٹھا مشروب پانی سے بدلنا۔ ہر چھوٹی کامیابی اعتماد بناتی اور ڈر کم کرتی ہے۔ مستقبل ابھی لکھا نہیں گیا — اور آپ کے روزانہ کے انتخاب وہ قلم ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Which dry fruits should I limit or avoid?",
    questionUr: "کون سے خشک میوے مجھے محدود کرنے یا گریز کرنا چاہیے؟",
    answer:
      "High-sugar dried fruits like raisins (kishmish), dates (khajoor), figs (anjeer), and dried apricots (khubani) can cause quick spikes in blood sugar. While they have nutritional benefits, they should be eaten in very small amounts — for example, 2–3 dates or 1–2 dried figs at a time, ideally with a source of protein like nuts to slow sugar absorption. Avoid candied or sugar-coated versions entirely. In Pakistan, these fruits are often served during Ramadan or as snacks — enjoy them mindfully, not as a daily staple.",
    answerUr:
      "زیادہ شکر والے خشک میوے جیسے کشمش، کھجور، انجیر، اور خشک خوبانی خون کی شکر میں تیزی سے اضافہ کر سکتے ہیں۔ اگرچہ ان کے غذائی فوائد ہیں، انہیں بہت کم مقدار میں کھانا چاہیے — مثلاً ایک دفعہ میں 2-3 کھجوریں یا 1-2 خشک انجیر، مثالی طور پر شکر جذب سست کرنے کے لیے گری دار میوے جیسے پروٹین کے ساتھ۔ چینی لگی یا شکر لگی اقسام سے مکمل پرہیز کریں۔ پاکستان میں یہ پھل اکثر رمضان کے دوران یا ناشتے کے طور پر پیش کیے جاتے ہیں — انہیں ہوشمندی سے کھائیں، روزانہ کی عادت نہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I feel guilty — did I cause this?",
    questionUr: "مجھے جرم محسوس ہوتا ہے — کیا یہ میری وجہ سے ہوا؟",
    answer:
      "Self-blame is heavy, and it’s often misplaced. Diabetes can be influenced by many factors — genetics, age, stress, diet, and activity levels. In Pakistan, high-carb diets and sedentary lifestyles are common, but that doesn’t mean you 'caused' this alone. What matters now is not the past, but the present. Guilt drains energy you could use for action. Replace 'Why me?' with 'What’s my next step?' Every healthy choice you make now — from your breakfast to your bedtime routine — is a step toward better control and a healthier future.",
    answerUr:
      "خود کو الزام دینا بھاری ہوتا ہے، اور اکثر غلط جگہ لگا ہوتا ہے۔ ذیابیطس بہت سے عوامل سے متاثر ہو سکتی ہے — جینیات، عمر، تناؤ، خوراک، اور سرگرمی کی سطح۔ پاکستان میں زیادہ کاربوہائیڈریٹ خوراک اور کم حرکت والی زندگی عام ہے، لیکن اس کا مطلب یہ نہیں کہ آپ نے اکیلے یہ ‘پیدا کیا’۔ اب جو اہم ہے وہ ماضی نہیں، بلکہ حال ہے۔ جرم اس توانائی کو ضائع کرتا ہے جو آپ عمل کے لیے استعمال کر سکتے تھے۔ ‘کیوں میں؟’ کی جگہ ‘میرا اگلا قدم کیا ہے؟’ رکھیں۔ آپ اب جو بھی صحت مند انتخاب کریں — ناشتے سے لے کر سونے کی عادت تک — بہتر کنٹرول اور صحت مند مستقبل کی طرف ایک قدم ہے۔",
    category: "Education" as Category,
  },
  {
    question: "How much dry fruit can I eat in a day?",
    questionUr: "میں دن میں کتنے خشک میوے کھا سکتا ہوں؟",
    answer:
      "For most people with diabetes, 20–30 grams (about a small handful) of nuts or seeds per day is a healthy amount. If you’re including higher-sugar dried fruits, limit them to 1–2 small pieces and count them as part of your daily carbohydrate allowance. Spread your intake across the day rather than eating it all at once. Remember, even healthy dry fruits are calorie-dense — eating too much can lead to weight gain, which can make blood sugar harder to control.",
    answerUr:
      "زیادہ تر ذیابیطس والوں کے لیے روزانہ 20-30 گرام (تقریباً ایک چھوٹی مٹھی) گری دار میوے یا بیج صحت مند مقدار ہے۔ اگر آپ زیادہ شکر والے خشک میوے شامل کر رہے ہیں تو انہیں 1-2 چھوٹے ٹکڑوں تک محدود کریں اور انہیں اپنی روزانہ کاربوہائیڈریٹ کی اجازت کا حصہ سمجھیں۔ اپنی مقدار کو دن بھر میں پھیلائیں بجائے سب ایک ساتھ کھانے کے۔ یاد رکھیں، صحت مند خشک میوے بھی کیلوریز میں زیادہ ہیں — زیادہ کھانے سے وزن بڑھ سکتا ہے، جو خون کی شکر کو کنٹرول کرنا مشکل بنا سکتا ہے۔",
    category: "Diet" as Category,
  },
  {
    question: "I feel overwhelmed by all the changes I have to make.",
    questionUr: "میں تمام تبدیلیوں سے مغلوب محسوس کر رہا ہوں جو مجھے کرنی ہیں۔",
    answer:
      "It’s easy to feel buried under a mountain of 'must-dos' — new foods, exercise, medicines, check-ups. The trick is to start small. Pick one change this week: maybe it’s walking after lunch, or switching to whole-wheat roti. Once that feels natural, add another. In Pakistan, we often try to overhaul everything at once, then burn out. Think of it like building a house — one brick at a time. Over weeks and months, these small changes stack up into a strong foundation for your health.",
    answerUr:
      "’کرنا چاہیے’ کی فہرست کے پہاڑ تلے دبنا آسان ہے — نئے کھانے، ورزش، ادویات، چیک اپ۔ چال یہ ہے کہ چھوٹی شروعات کریں۔ اس ہفتے ایک تبدیلی چنیں: شاید دوپہر کے کھانے کے بعد چلنا، یا گندم کی روٹی پر سوئچ کرنا۔ جب یہ فطری لگے تو ایک اور شامل کریں۔ پاکستان میں ہم اکثر سب کچھ ایک ساتھ بدلنے کی کوشش کرتے ہیں، پھر تھک جاتے ہیں۔ اسے گھر بنانے کی طرح سوچیں — ایک اینٹ ایک وقت میں۔ ہفتوں اور مہینوں میں یہ چھوٹی تبدیلیاں آپ کی صحت کی مضبوط بنیاد بنتی ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Is it better to eat raw or roasted dry fruits?",
    questionUr: "خام یا بھنے ہوئے خشک میوے کھانا بہتر ہے؟",
    answer:
      "Raw or lightly roasted (without added salt or oil) is best. In Pakistan, many store-bought roasted nuts are fried in oil or coated with salt, which adds unnecessary calories and sodium. If you prefer roasted flavour, dry-roast them at home in a pan or oven without oil. Avoid honey-roasted or sugar-coated varieties, as they add extra carbs and can spike your blood sugar.",
    answerUr:
      "خام یا ہلکے بھنے (بغیر نمک یا تیل کے) بہترین ہیں۔ پاکستان میں، بہت سے دکان سے خریدے ہوئے بھنے گری دار میوے تیل میں تلے یا نمک سے لپٹے ہوتے ہیں، جو غیر ضروری کیلوریز اور سوڈیم شامل کرتے ہیں۔ اگر آپ بھنا ہوا ذائقہ پسند کرتے ہیں تو انہیں گھر پر پین یا اوون میں بغیر تیل کے بھونیں۔ شہد میں بھنی یا چینی لگی اقسام سے گریز کریں کیونکہ یہ اضافی کاربوہائیڈریٹ شامل کرتے اور آپ کی خون کی شکر بڑھا سکتے ہیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I’m tired of thinking about diabetes all the time.",
    questionUr: "میں ہر وقت ذیابیطس کے بارے میں سوچنے سے تھک گیا ہوں۔",
    answer:
      "Diabetes can feel like it’s taken over your mental space. To avoid burnout, set boundaries. Schedule 'diabetes time' — moments in the day to check sugar, plan meals, or take medicine — and then shift your focus to work, hobbies, or family. In Pakistan’s social culture, staying engaged with friends, faith, and community can help you feel like more than your diagnosis. Remember, you are a whole person — diabetes is just one part of your life, not the definition of it.",
    answerUr:
      "ذیابیطس ایسا لگ سکتی ہے جیسے اس نے آپ کی ذہنی جگہ لے لی ہو۔ تھکاوٹ سے بچنے کے لیے حدود بنائیں۔ ‘ذیابیطس کا وقت’ طے کریں — دن میں وہ لمحات جب شکر چیک کریں، کھانوں کی منصوبہ بندی کریں، یا دوا لیں — پھر اپنی توجہ کام، مشاغل، یا خاندان پر منتقل کریں۔ پاکستان کی سماجی ثقافت میں دوستوں، ایمان، اور کمیونٹی سے جڑے رہنا آپ کو تشخیص سے بڑھ کر محسوس کرا سکتا ہے۔ یاد رکھیں، آپ ایک مکمل انسان ہیں — ذیابیطس آپ کی زندگی کا صرف ایک حصہ ہے، اس کی تعریف نہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Can I replace snacks with dry fruits?",
    questionUr: "کیا میں ناشتے کی جگہ خشک میوے لے سکتا ہوں؟",
    answer:
      "Yes — replacing processed snacks like biscuits, chips, or fried pakoras with a small portion of nuts is a smart choice. Nuts provide protein, healthy fats, and fibre, which help keep you full and prevent sugar spikes. Just remember that portion control is key — a small handful is enough. Pairing nuts with a piece of low-GI fruit, like guava or apple, can make a balanced, satisfying snack.",
    answerUr:
      "ہاں — پراسیس شدہ ناشتوں جیسے بسکٹ، چپس، یا تلے پکوڑوں کو گری دار میوے کی چھوٹی مقدار سے بدلنا ایک سمارٹ انتخاب ہے۔ گری دار میوے پروٹین، صحت مند چکنائیاں، اور فائبر فراہم کرتے ہیں جو آپ کو بھرا رکھتے اور شکر کی بڑھوتری روکتے ہیں۔ بس یاد رکھیں کہ حصے کا کنٹرول چابی ہے — ایک چھوٹی مٹھی کافی ہے۔ کم GI پھل جیسے امرود یا سیب کے ساتھ گری دار میوے جوڑنا ایک متوازن اور تسلی بخش ناشتہ بنا سکتا ہے۔",
    category: "Diet" as Category,
  },
  {
    question: "I don’t want to be treated differently because of my diabetes.",
    questionUr: "میں نہیں چاہتا کہ ذیابیطس کی وجہ سے مجھ سے مختلف سلوک ہو۔",
    answer:
      "It’s natural to want to blend in. Let people know you appreciate their concern, but you’re capable of managing your health. In Pakistan, where hospitality is strong, people may over-accommodate. Thank them, but guide them toward normalcy — 'I’m fine, just keep the roti whole-wheat and I’m good.' The more confident you are, the more others will treat you as they always have.",
    answerUr:
      "آم لوگوں میں گھلنا ملنا فطری ہے۔ لوگوں کو بتائیں کہ آپ ان کی فکر کی تعریف کرتے ہیں، لیکن آپ اپنی صحت کا انتظام کرنے میں قادر ہیں۔ پاکستان میں جہاں مہمان نوازی مضبوط ہے، لوگ ضرورت سے زیادہ رعایت دے سکتے ہیں۔ ان کا شکریہ ادا کریں، لیکن انہیں معمول کی طرف رہنمائی کریں — ‘میں ٹھیک ہوں، بس روٹی گندم کی ہو تو کافی ہے۔’ آپ جتنے زیادہ پراعتماد ہوں گے، دوسرے آپ کے ساتھ ہمیشہ کی طرح پیش آئیں گے۔",
    category: "Education" as Category,
  },
  {
    question: "Do dry fruits help with heart health in diabetes?",
    questionUr: "کیا ذیابیطس میں خشک میوے دل کی صحت میں مدد کرتے ہیں؟",
    answer:
      "Absolutely. Nuts like walnuts, almonds, and pistachios are rich in omega-3 fatty acids, unsaturated fats, and antioxidants that support heart health — a major concern for people with diabetes. Regular, moderate consumption can help lower LDL ('bad') cholesterol and improve blood vessel function. Since diabetes increases the risk of heart disease, including a small daily portion of heart-healthy nuts can be a valuable part of your diet.",
    answerUr:
      "بالکل۔ اخروٹ، بادام، اور پستہ جیسے گری دار میوے اومیگا-3 فیٹی ایسڈ، غیر سیر شدہ چکنائیوں، اور اینٹی آکسیڈنٹس سے بھرپور ہیں جو دل کی صحت کو سہارا دیتے ہیں — جو ذیابیطس والوں کے لیے ایک بڑی فکر ہے۔ باقاعدہ اور اعتدال میں استعمال LDL ('خراب') کولیسٹرول کم کرنے اور خون کی نالیوں کے عمل کو بہتر بنانے میں مدد کر سکتا ہے۔ چونکہ ذیابیطس دل کی بیماری کا خطرہ بڑھاتی ہے، دل کے لیے صحت مند گری دار میوے کی چھوٹی روزانہ مقدار آپ کی خوراک کا قیمتی حصہ ہو سکتی ہے۔",
    category: "Diet" as Category,
  },
  {
    question: "I want my family to be part of my health journey.",
    questionUr: "میں چاہتا ہوں کہ میرا خاندان میرے صحت کے سفر کا حصہ بنے۔",
    answer:
      "Involving family can make diabetes care easier and more enjoyable. Invite them to join you for evening walks, cook healthier versions of favourite dishes together, or learn about diabetes as a team. In Pakistan, where meals are shared, a family shift toward healthier eating benefits everyone. When your loved ones feel included, they become allies in your journey.",
    answerUr:
      "خاندان کو شامل کرنا ذیابیطس کی دیکھ بھال کو آسان اور زیادہ خوشگوار بنا سکتا ہے۔ انہیں شام کی سیر میں شامل ہونے کی دعوت دیں، مل کر پسندیدہ کھانوں کے صحت مند ورژن پکائیں، یا ٹیم کے طور پر ذیابیطس کے بارے میں جانیں۔ پاکستان میں جہاں کھانا مل کر کھایا جاتا ہے، خاندان کا صحت مند کھانے کی طرف رجحان سب کو فائدہ دیتا ہے۔ جب آپ کے پیارے شامل محسوس کریں تو وہ آپ کے سفر میں اتحادی بن جاتے ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Should I soak dry fruits before eating?",
    questionUr: "کیا مجھے کھانے سے پہلے خشک میوے بھگونے چاہئیں؟",
    answer:
      "Soaking almonds, walnuts, or raisins overnight is a common practice in Pakistan. While soaking doesn’t significantly change their sugar content, it can make nuts easier to chew and may slightly improve nutrient absorption. If you enjoy them soaked, go ahead — just remember that the portion size still matters. Avoid drinking the soaking water from high-sugar dried fruits like raisins or dates, as it contains dissolved sugars.",
    answerUr:
      "بادام، اخروٹ، یا کشمش کو رات بھر بھگونا پاکستان میں عام طریقہ ہے۔ اگرچہ بھگونے سے ان کی شکر کی مقدار میں خاص تبدیلی نہیں آتی، یہ گری دار میوے چبانے میں آسان بنا سکتا ہے اور غذائی اجزاء کا جذب تھوڑا بہتر کر سکتا ہے۔ اگر آپ انہیں بھگو کر پسند کرتے ہیں تو کریں — بس یاد رکھیں کہ حصے کا سائز اب بھی اہم ہے۔ کشمش یا کھجور جیسے زیادہ شکر والے خشک میوے کا بھگویا ہوا پانی پینے سے گریز کریں کیونکہ اس میں حل شدہ شکر ہوتی ہے۔",
    category: "Diet" as Category,
  },
  {
    question: "I feel alone in this.",
    questionUr: "میں اس میں اکیلا محسوس کر رہا ہوں۔",
    answer:
      "You’re not alone — even if it feels that way. Millions in Pakistan live with diabetes, and many are eager to share their experiences. Look for local support groups, diabetes education sessions, or online communities. Talking to others who 'get it' can lift the weight off your shoulders. Shared stories, tips, and encouragement can turn isolation into connection.",
    answerUr:
      "آپ اکیلے نہیں ہیں — چاہے ایسا لگتا ہو۔ پاکستان میں لاکھوں لوگ ذیابیطس کے ساتھ جیتے ہیں، اور بہت سے اپنے تجربات شیئر کرنے کے لیے بے تاب ہیں۔ مقامی سپورٹ گروپس، ذیابیطس کی تعلیمی نشستوں، یا آن لائن کمیونٹیز کی تلاش کریں۔ ان لوگوں سے بات کرنا جو اسے ‘سمجھتے’ ہیں آپ کے کندھوں سے بوجھ اٹھا سکتا ہے۔ مشترکہ کہانیاں، تجاویز، اور حوصلہ افزائی تنہائی کو تعلق میں بدل سکتی ہے۔",
    category: "Education" as Category,
  },
  {
    question: "I love my chai and coffee — do I have to give them up?",
    questionUr: "مجھے چائے اور کافی بہت پسند ہے — کیا مجھے انہیں چھوڑنا ہوگا؟",
    answer:
      "No — you don’t have to give up tea or coffee if you have diabetes, but you do need to be smart about how you drink them. The real problem isn’t the tea or coffee itself — it’s what we add to it. In Pakistan, chai often comes loaded with sugar and full-fat milk, which can spike blood sugar and add unnecessary calories. Switch to sugar-free options: use non-nutritive sweeteners like stevia, sucralose, or monk fruit instead of white sugar. Avoid 'brown sugar' or honey thinking they’re healthier — they still raise blood sugar. Opt for low-fat milk or unsweetened almond/soy milk to reduce saturated fat. As for caffeine, moderate amounts (1–2 cups of coffee or 2–3 cups of tea a day) are generally safe for most people with diabetes. Too much caffeine can cause jitteriness, raise blood pressure, and in some people, temporarily affect blood sugar control. Avoid drinking tea or coffee on an empty stomach, and skip high-calorie café drinks with syrups and whipped cream. Enjoy your chai or coffee as part of your routine — just make it a healthier habit that supports your blood sugar goals, not works against them.",
    answerUr:
      "نہیں — اگر آپ کو ذیابیطس ہے تو چائے یا کافی چھوڑنی نہیں ہے، لیکن آپ کو ہوشمندی سے پینا ہوگا۔ اصل مسئلہ چائے یا کافی خود نہیں — بلکہ وہ ہے جو ہم اس میں ملاتے ہیں۔ پاکستان میں چائے اکثر شکر اور پوری چکنائی والے دودھ سے بھری ہوتی ہے جو خون کی شکر بڑھا اور غیر ضروری کیلوریز شامل کر سکتی ہے۔ شوگر فری آپشن اپنائیں: سفید شکر کی جگہ اسٹیویا، سکرالوز، یا مونک فروٹ جیسے میٹھے استعمال کریں۔ ‘براؤن شوگر’ یا شہد کو صحت مند سمجھ کر استعمال کرنے سے گریز کریں — یہ پھر بھی خون کی شکر بڑھاتے ہیں۔ سیر شدہ چکنائی کم کرنے کے لیے کم چکنائی والا دودھ یا بغیر میٹھے کے بادام/سویا دودھ چنیں۔ کیفین کے بارے میں، اعتدال میں مقدار (1-2 کپ کافی یا 2-3 کپ چائے روزانہ) زیادہ تر ذیابیطس والوں کے لیے عام طور پر محفوظ ہے۔ خالی پیٹ چائے یا کافی پینے سے گریز کریں، اور شربت اور کریم والے زیادہ کیلوری کیفے مشروبات چھوڑ دیں۔ اپنی چائے یا کافی اپنے معمول کا حصہ بنا کر لطف اندوز ہوں — بس اسے ایک صحت مند عادت بنائیں جو آپ کے خون کی شکر کے اہداف کو سہارا دے۔",
    category: "Diet" as Category,
  },
  {
    question: "I keep losing motivation.",
    questionUr: "میری حوصلہ افزائی بار بار ختم ہو جاتی ہے۔",
    answer:
      "Motivation comes and goes — discipline keeps you going. Revisit your 'why': maybe it’s to see your children grow, travel, or stay active in your community. Celebrate small wins — a good sugar reading, a healthy meal, a week of regular walks. In Pakistan, share your progress with friends or family; their encouragement can reignite your drive.",
    answerUr:
      "حوصلہ آتا جاتا ہے — نظم و ضبط آپ کو چلاتا رہتا ہے۔ اپنا ‘کیوں’ دوبارہ دیکھیں: شاید یہ اپنے بچوں کو بڑا ہوتے دیکھنا، سفر کرنا، یا اپنی کمیونٹی میں فعال رہنا ہے۔ چھوٹی کامیابیاں منائیں — ایک اچھی شکر ریڈنگ، ایک صحت مند کھانا، باقاعدہ چہل قدمی کا ایک ہفتہ۔ پاکستان میں دوستوں یا خاندان کے ساتھ اپنی پیش رفت شیئر کریں؛ ان کی حوصلہ افزائی آپ کی تحریک دوبارہ جگا سکتی ہے۔",
    category: "Education" as Category,
  },
  {
    question: "I love lassi — can I still drink it?",
    questionUr: "مجھے لسی بہت پسند ہے — کیا میں اب بھی پی سکتا ہوں؟",
    answer:
      "Yes, but choose wisely. Traditional sweet lassi is loaded with sugar, which can spike your blood glucose quickly. A single tall glass can contain the equivalent of 6–8 teaspoons of sugar. If you have diabetes, opt for unsweetened or lightly salted lassi made with low-fat yogurt. You can add a pinch of roasted cumin or mint for flavour without adding sugar. Avoid drinking lassi alongside carb-heavy meals like paratha or biryani — it’s better as a standalone snack or light breakfast. Portion control matters: keep it to a small glass (150–200 ml) to enjoy the taste without overloading on carbs.",
    answerUr:
      "ہاں، لیکن سوچ سمجھ کر انتخاب کریں۔ روایتی میٹھی لسی شکر سے بھری ہوتی ہے جو آپ کی خون کی گلوکوز تیزی سے بڑھا سکتی ہے۔ ایک لمبے گلاس میں 6-8 چائے کے چمچ کے برابر شکر ہو سکتی ہے۔ اگر آپ کو ذیابیطس ہے تو کم چکنائی والے دہی سے بنی بغیر میٹھی یا ہلکی نمکین لسی چنیں۔ آپ بھنا ہوا زیرہ یا پودینہ شکر شامل کیے بغیر ذائقے کے لیے ڈال سکتے ہیں۔ لسی کو پراٹھے یا بریانی جیسے زیادہ کاربوہائیڈریٹ والے کھانوں کے ساتھ پینے سے گریز کریں — یہ الگ ناشتے یا ہلکے کھانے کے طور پر بہتر ہے۔ حصے کا کنٹرول اہم ہے: ذائقے سے لطف اندوز ہونے کے لیے چھوٹا گلاس (150-200 ملی لیٹر) رکھیں۔",
    category: "Diet" as Category,
  },
  {
    question: "I want to enjoy life without feeling restricted.",
    questionUr: "میں پابندی محسوس کیے بغیر زندگی سے لطف اندوز ہونا چاہتا ہوں۔",
    answer:
      "You can — by focusing on balance, not deprivation. Enjoy your favourite foods in smaller portions, and balance them with healthier meals. Plan ahead for weddings or Eid feasts by eating lighter earlier in the day. In Pakistan’s rich food culture, smart choices let you participate fully without harming your health.",
    answerUr:
      "آپ کر سکتے ہیں — توازن پر توجہ دے کر، محرومی پر نہیں۔ اپنے پسندیدہ کھانے چھوٹے حصوں میں لطف اندوز ہوں، اور انہیں صحت مند کھانوں سے متوازن کریں۔ شادیوں یا عید کی دعوتوں کے لیے پہلے سے منصوبہ بنائیں — دن میں پہلے ہلکا کھائیں۔ پاکستان کی بھرپور کھانے کی ثقافت میں، سمارٹ انتخاب آپ کو صحت کو نقصان پہنچائے بغیر پوری طرح شریک ہونے دیتے ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Is doodh soda or other fizzy drinks okay for me?",
    questionUr: "کیا دودھ سوڈا یا دیگر فزی مشروبات میرے لیے ٹھیک ہیں؟",
    answer:
      "Doodh soda, cola, and other sweetened fizzy drinks are among the fastest ways to spike your blood sugar. Even one glass can contain more sugar than your daily recommended limit. If you crave the fizz, choose diet or zero-sugar versions — but keep them occasional, as artificial sweeteners can still trigger cravings for sweet foods. A better option is sparkling water with a squeeze of lemon or a few mint leaves. Remember, sugary drinks don’t just affect your sugar levels — they add empty calories that can lead to weight gain, making diabetes harder to manage.",
    answerUr:
      "دودھ سوڈا، کولا، اور دیگر میٹھے فزی مشروبات خون کی شکر تیزی سے بڑھانے کے تیز ترین طریقوں میں سے ہیں۔ ایک گلاس میں آپ کی روزانہ کی تجویز کردہ حد سے زیادہ شکر ہو سکتی ہے۔ اگر آپ فز چاہتے ہیں تو ڈائٹ یا زیرو شوگر ورژن چنیں — لیکن انہیں کبھی کبھار رکھیں کیونکہ مصنوعی میٹھے پھر بھی میٹھی چیزوں کی خواہش پیدا کر سکتے ہیں۔ ایک بہتر آپشن لیموں کا رس یا پودینے کے پتوں والا سپارکلنگ پانی ہے۔ یاد رکھیں، میٹھے مشروبات صرف آپ کی شکر کی سطح کو متاثر نہیں کرتے — یہ خالی کیلوریز شامل کرتے ہیں جو وزن بڑھا سکتے ہیں، جس سے ذیابیطس کا انتظام مشکل ہو جاتا ہے۔",
    category: "Diet" as Category,
  },
  {
    question: "I’m worried about setbacks.",
    questionUr: "مجھے رکاوٹوں کی فکر ہے۔",
    answer:
      "Setbacks happen — a high sugar reading, a missed walk, an indulgent meal. Don’t let one slip erase your progress. Reset at the next opportunity. In Pakistan’s busy, social life, perfection isn’t realistic — but persistence is. Each time you get back on track, you strengthen your long-term success.",
    answerUr:
      "رکاوٹیں آتی ہیں — زیادہ شکر ریڈنگ، چھوٹی ہوئی سیر، یا زیادہ کھانا۔ ایک لغزش کو اپنی پیش رفت مٹانے نہ دیں۔ پہلے موقع پر ریسیٹ کریں۔ پاکستان کی مصروف اور سماجی زندگی میں کمال ممکن نہیں — لیکن استقامت ممکن ہے۔ ہر بار جب آپ پٹری پر واپس آتے ہیں، آپ اپنی طویل مدتی کامیابی مضبوط کرتے ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "Are packaged juices a healthy choice?",
    questionUr: "کیا پیکٹ والے جوس صحت مند انتخاب ہیں؟",
    answer:
      "Not really. Most packaged juices — even those labelled '100% fruit' — are high in natural sugars and often lack the fibre that slows sugar absorption. A single glass can have the sugar of 3–4 whole fruits. Without fibre, the sugar hits your bloodstream quickly, causing spikes. If you want juice, make it fresh at home, dilute it with water, and limit it to ½ cup. Better yet, eat the whole fruit instead — you’ll get the fibre, feel fuller, and keep your sugar more stable.",
    answerUr:
      "زیادہ نہیں۔ زیادہ تر پیکٹ والے جوس — حتیٰ کہ ‘100% پھل’ لیبل والے — قدرتی شکر میں زیادہ اور اکثر فائبر سے خالی ہوتے ہیں جو شکر جذب کو سست کرتی ہے۔ ایک گلاس میں 3-4 پورے پھلوں کی شکر ہو سکتی ہے۔ فائبر کے بغیر شکر تیزی سے خون میں شامل ہوتی ہے اور بڑھوتری آتی ہے۔ اگر آپ جوس چاہتے ہیں تو گھر میں تازہ بنائیں، پانی سے پتلا کریں، اور آدھے کپ تک محدود رکھیں۔ بہتر یہ ہے کہ پورا پھل کھائیں — آپ کو فائبر ملے گی، زیادہ پیٹ بھرے گا، اور شکر زیادہ مستحکم رہے گی۔",
    category: "Diet" as Category,
  },
  {
    question: "I want to focus on what I can do, not what I can’t.",
    questionUr:
      "میں اس پر توجہ دینا چاہتا ہوں جو میں کر سکتا ہوں، نہ کہ جو نہیں۔",
    answer:
      "Shift your mindset from restriction to opportunity. You can enjoy fresh seasonal fruits, flavourful spices, active hobbies, and quality time with loved ones. You can take control of your health. In Pakistan, where community and tradition are strong, focus on the parts of life that bring joy and connection — they’re just as important as your diet and medicine.",
    answerUr:
      "اپنی ذہنیت کو پابندی سے موقع کی طرف موڑیں۔ آپ تازہ موسمی پھل، ذائقہ دار مسالے، فعال مشاغل، اور پیاروں کے ساتھ معیاری وقت سے لطف اندوز ہو سکتے ہیں۔ آپ اپنی صحت کا کنٹرول لے سکتے ہیں۔ پاکستان میں جہاں کمیونٹی اور روایت مضبوط ہے، زندگی کے ان حصوں پر توجہ دیں جو خوشی اور تعلق لاتے ہیں — یہ آپ کی خوراک اور دوا جتنے ہی اہم ہیں۔",
    category: "Education" as Category,
  },
  {
    question: "I want to inspire others with my journey.",
    questionUr: "میں اپنے سفر سے دوسروں کو متاثر کرنا چاہتا ہوں۔",
    answer:
      "Your story can be a light for others. Share your challenges and victories — in person, on social media, or in community groups. In Pakistan, where awareness is still growing, your example can encourage early check-ups, healthier eating, and active living. Helping others not only spreads hope — it strengthens your own commitment.",
    answerUr:
      "آپ کی کہانی دوسروں کے لیے روشنی ہو سکتی ہے۔ اپنی مشکلات اور کامیابیاں شیئر کریں — ذاتی طور پر، سوشل میڈیا پر، یا کمیونٹی گروپس میں۔ پاکستان میں جہاں آگاہی اب بھی بڑھ رہی ہے، آپ کی مثال جلد چیک اپ، صحت مند کھانے، اور فعال زندگی کی حوصلہ افزائی کر سکتی ہے۔ دوسروں کی مدد کرنا نہ صرف امید پھیلاتا ہے — یہ آپ کے اپنے عزم کو بھی مضبوط کرتا ہے۔",
    category: "Education" as Category,
  },
];


export default function NewsClient() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<Category>("Health");
  const { locale } = useLanguage();

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const categoryInfo = [
    {
      category: "Health" as Category,
      title: "Health",
      titleUr: "صحت",
      description:
        "Medical guidance for managing your condition, from monitoring to overall wellness.",
      descriptionUr:
        "اپنی حالت کے انتظام کے لیے طبی رہنمائی، نگرانی سے لے کر مجموعی تندرستی تک۔",
      bgColor: "bg-diet-500",
      hoverColor: "hover:bg-diet-600",
      ringColor: "ring-green-500/30",
      titleColor: "text-green-500",
    },
    {
      category: "Education" as Category,
      title: "Education",
      titleUr: "تعلیم",
      description:
        "Understand the science of diabesity and learn how to interpret your lab results.",
      descriptionUr:
        "ذیابیسٹی کی سائنس سمجھیں اور اپنی لیب رپورٹس کی تشریح کرنا سیکھیں۔",
      bgColor: "bg-orange-500",
      hoverColor: "hover:bg-orange-600",
      ringColor: "ring-orange-500/30",
      titleColor: "text-orange-500",
    },
    {
      category: "Diet" as Category,
      title: "Diet",
      titleUr: "غذا",
      description:
        "Get practical nutrition tips for making smart food choices and building healthy meals.",
      descriptionUr:
        "سمارٹ کھانے کے انتخاب اور صحت مند کھانے بنانے کے لیے عملی غذائیت کی تجاویز۔",
      bgColor: "bg-yellow-500",
      hoverColor: "hover:bg-yellow-600",
      ringColor: "ring-yellow-500/30",
      titleColor: "text-yellow-500",
    },
    {
      category: "GLP" as Category,
      title: "GLP-1",
      titleUr: "GLP-1",
      description:
        "Get key information on this newer class of medication for managing diabetes and weight.",
      descriptionUr:
        "ذیابیطس اور وزن کے انتظام کے لیے ادویات کی اس نئی کلاس کے بارے میں اہم معلومات۔",
      bgColor: "bg-primary",
      hoverColor: "hover:bg-primary/90",
      ringColor: "ring-primary/30",
      titleColor: "text-primary",
    },
  ];

  const filteredFaqs = faqs.filter((faq) => faq.category === selectedCategory);

  return (
    <div className="flex flex-col">
      <section className="grid grid-cols-2 max-w-4xl lg:max-w-6xl mx-auto gap-8 md:gap-24 py-16 md:py-20 px-6 lg:px-0">
        {/* Introduction Section */}
        <div className="flex col-span-2 justify-center items-center">
          <div className="text-center">
            <h1 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6">
              {locale === "ur"
                ? "آپ کے تمام سوالوں کے جوابات"
                : "The answers to all your questions"}
            </h1>
            <p className="text-gray-700 text-lg leading-relaxed max-w-5xl mb-2">
              {locale === "ur"
                ? "ہماری صحت کی دیکھ بھال کے ماہرین کی ٹیم کے ماہر تصدیق شدہ جوابات"
                : "Expert-verified answers from our team of healthcare professionals"}
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter Section */}
      <section className="bg-white px-6 lg:px-0">
        <div className="max-w-5xl lg:max-w-6xl mx-auto">
          {/* Category Icons */}
          <div className="max-w-5xl mx-auto mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-4">
              {categoryInfo.map((info, index) => {
                const icons = [HealthIcon, EducationIcon, DietIcon, GlpIcon];
                const Icon = icons[index];
                return (
                  <div
                    key={info.category}
                    className={`flex flex-col items-center text-center gap-4 ${
                      index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
                    }`}
                  >
                    <button
                      onClick={() => {
                        setSelectedCategory(info.category);
                        setOpenFaqIndex(null);
                      }}
                      className={`w-30 h-30 rounded-full flex items-center justify-center transition-all overflow-hidden ${
                        info.bgColor
                      } ${
                        selectedCategory === info.category
                          ? `ring-2 ring-offset-4 ${info.ringColor}`
                          : info.hoverColor
                      }`}
                    >
                      <Image
                        src={Icon}
                        alt={info.title}
                        width={80}
                        height={80}
                        className={`w-30 h-30 transition-transform hover:scale-120 ${
                          selectedCategory === info.category ? "scale-120" : ""
                        }`}
                      />
                    </button>
                    <div className="flex flex-col items-center text-center">
                      <h3
                        className={`text-2xl font-bold ${info.titleColor} mb-2`}
                      >
                        {locale === "ur" ? info.titleUr : info.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed max-w-xs">
                        {locale === "ur"
                          ? info.descriptionUr
                          : info.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* FAQs List Section */}
      <section className="pb-16 md:pb-24 bg-white px-6 lg:px-0">
        <div className="max-w-4xl lg:max-w-6xl mx-auto">
          {/* FAQs Section */}
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - First Half FAQs */}
            <div className="flex flex-col gap-4">
              {filteredFaqs
                .slice(0, Math.ceil(filteredFaqs.length / 2))
                .map((faq, idx) => (
                  <div key={idx} className="flex flex-col">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className={`${getCategoryGradient(
                        faq.category,
                      )} rtl:hover:bg-gradient-to-l px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                    >
                      <span>
                        {locale === "ur"
                          ? (faq.questionUr ?? faq.question)
                          : faq.question}
                      </span>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openFaqIndex === idx ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaqIndex === idx ? "max-h-96 mt-2" : "max-h-0"
                      }`}
                    >
                      <div
                        className={`bg-white px-6 py-4 border text-gray-700 leading-relaxed ${locale === "ur" ? "text-right" : ""}`}
                        dir={locale === "ur" ? "rtl" : undefined}
                      >
                        {locale === "ur"
                          ? (faq.answerUr ?? faq.answer)
                          : faq.answer}
                      </div>
                    </div>
                  </div>
                ))}
            </div>

            {/* Right Column - Last Half FAQs */}
            <div className="flex flex-col gap-4">
              {filteredFaqs
                .slice(Math.ceil(filteredFaqs.length / 2), filteredFaqs.length)
                .map((faq, idx) => {
                  const actualIndex = idx + Math.ceil(filteredFaqs.length / 2);
                  return (
                    <div key={actualIndex} className="flex flex-col">
                      <button
                        onClick={() => toggleFaq(actualIndex)}
                        className={`${getCategoryGradient(
                          faq.category,
                        )} rtl:hover:bg-gradient-to-l px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                      >
                        <span>
                          {locale === "ur"
                            ? (faq.questionUr ?? faq.question)
                            : faq.question}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                            openFaqIndex === actualIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <div
                        className={`overflow-hidden transition-all duration-300 ${
                          openFaqIndex === actualIndex
                            ? "max-h-[30rem] mt-2"
                            : "max-h-0"
                        }`}
                      >
                        <div
                          className={`bg-white px-6 py-4 border text-gray-700 leading-relaxed ${locale === "ur" ? "text-right" : ""}`}
                          dir={locale === "ur" ? "rtl" : undefined}
                        >
                          {locale === "ur"
                            ? (faq.answerUr ?? faq.answer)
                            : faq.answer}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
