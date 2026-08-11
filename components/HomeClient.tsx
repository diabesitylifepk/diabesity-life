"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";
import Image from "next/image";
import { BlogArticle } from "@/lib/blogContent";
import { NewsArticle } from "@/lib/newsContent";
import { recipes } from "@/lib/recipeContent";
import { Category, getCategoryGradient } from "@/lib/utils";
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DailyCare from "../public/daily-care.jpg";
import EatHealthy from "../public/eat-healthy-1.jpeg";
import HealthProviders from "../public/find-health-providers.jpg";
import Hero1 from "../public/hero-section-1.webp";
import Hero2 from "../public/hero-section-2.webp";
import Hero3 from "../public/hero-section-3.webp";
import PakistanMap from "../public/pakistan-map.png";
import Service1 from "../public/service-icon-1.png";
import Service2 from "../public/service-icon-2.png";
import Service4 from "../public/service-icon-4.png";
import Story from "../public/story-placeholder.webp";
import SupportBG from "../public/support-section-bg.webp";
import GlpInjection from "../public/glp-banner-injection.png";

function getHeroSlides(t: (key: string) => string) {
  return [
    {
      image: Hero1.src,
      heading: t("home.hero.s1.heading"),
      body: t("home.hero.s1.body"),
      ctaText: t("home.hero.s1.ctaText"),
      ctaUrl: "/resources",
      videoUrl: "https://www.youtube.com/embed/CyVTZC1Gz6w",
    },
    {
      image: Hero2.src,
      heading: t("home.hero.s2.heading"),
      body: t("home.hero.s2.body"),
      ctaText: t("home.hero.s2.ctaText"),
      ctaUrl: "/daily-care-and-monitoring",
      videoUrl: "https://www.youtube.com/embed/CyVTZC1Gz6w",
    },
    {
      // Slide 3 is always Urdu — intentional fixed-language slide
      image: Hero3.src,
      heading: "ذیابیطس اردو میں معلومات",
      body: "دریافت کریں کہ GLP-1 جیسے جدید علاج پاکستانیوں کو وزن اور بلڈ شوگر کنٹرول کرنے میں کیسے مدد کر رہے ہیں۔",
      ctaText: "مزید جانیں",
      ctaUrl: "/urdu-guides",
      videoUrl: "https://www.youtube.com/embed/CyVTZC1Gz6w",
      watchVideoText: "ویڈیو دیکھیں",
      isRtl: true,
    },
  ];
}

function getNewServices(t: (key: string) => string) {
  return [
    {
      icon: Service1.src,
      title: t("home.services.s1.title"),
      body: t("home.services.s1.body"),
      links: [{ text: t("home.services.s1.link"), url: "/learn" }],
    },
    {
      icon: Service2.src,
      title: t("home.services.s2.title"),
      body: t("home.services.s2.body"),
      links: [
        {
          text: t("home.services.s2.link"),
          url: "/resources?tab=recipes#content",
        },
      ],
    },
    {
      icon: Service4.src,
      title: t("home.services.s3.title"),
      body: t("home.services.s3.body"),
      links: [
        { text: t("home.services.s3.link"), url: "/daily-care-and-monitoring" },
      ],
    },
  ];
}

function getImpactStats(t: (key: string) => string) {
  return [
    {
      value: "1 in 4",
      label: t("home.impact.stat1.label"),
      description: t("home.impact.stat1.description"),
      linkText: "",
      linkUrl: "#",
    },
    {
      value: "60%",
      label: t("home.impact.stat2.label"),
      description: t("home.impact.stat2.description"),
      linkText: "",
      linkUrl: "#",
    },
    {
      value: "$2,648",
      label: t("home.impact.stat3.label"),
      description: t("home.impact.stat3.description"),
      linkText: "",
      linkUrl: "#",
    },
  ];
}

const faqs = [
  {
    question: "I’m at a restaurant — what should I order?",
    answer:
      "Eating out doesn’t have to mean giving up control. In Pakistan, menus are full of tempting carb-heavy dishes, but you can make smart swaps. Choose grilled or baked meats over fried. Ask for roti made from whole wheat instead of naan, and skip the extra oil. Load your plate with salad or sautéed vegetables before touching the rice or bread. If you’re at a dhaba, go for daal with a side of mixed sabzi instead of biryani. And remember — portion size matters. Share a dish with a friend or ask for half to be packed. You’ll leave satisfied, not stuffed, and your blood sugar will thank you.",
    category: "Diet" as Category,
  },
  {
    question: "My doctor mentioned a GLP-1 — what is that?",
    answer:
      "GLP-1 receptor agonists are a newer type of diabetes medicine that work with your body’s natural hormones. They help your pancreas release insulin when needed, slow down digestion so you feel fuller, and can even help with weight loss — which is important since obesity and diabetes often go hand in hand in Pakistan. They usually come as weekly or daily injections, but the needles are tiny and easy to use. They’re not for everyone, and they can be costly, so discuss with your doctor whether they fit your treatment plan. For many, GLP-1s are a game-changer in controlling blood sugar and reducing heart risks.",
    category: "Health" as Category,
  },
  {
    question: "I’ve just been diagnosed — what does this mean?",
    answer:
      "Hearing “You have diabetes” can feel like a punch to the gut. But here’s the truth: diabetes is not the end of your story — it’s a new chapter. In simple terms, your body is struggling to manage sugar (glucose) in your blood, either because it’s not making enough insulin or not using it well. Left unchecked, high sugar can harm your heart, eyes, kidneys, and nerves. But with the right habits, medication, and mindset, you can live a long, healthy life. Many Pakistanis manage their diabetes while running businesses, raising families, and enjoying life — and so can you. The key is to learn, act, and stay consistent.",
    category: "Education" as Category,
  },
  {
    question: "I crave sweets all the time.",
    answer:
      "Sweet cravings are real — and in a culture where mithai, chai, and desserts are part of every celebration, resisting them can feel impossible. Instead of banning sweets completely (which can backfire), learn to manage them. Choose smaller portions — one gulab jamun instead of three. Swap sugary drinks for unsweetened lassi or lemon water. Keep fruit like guava or apple handy for when cravings hit. And remember, cravings often fade after 10–15 minutes — distract yourself with a short walk or a phone call. Over time, your taste buds will adjust, and you’ll find you need less sugar to feel satisfied.",
    category: "Diet" as Category,
  },
  {
    question: "I keep forgetting my medication.",
    answer:
      "Missing doses can quietly undo your progress. In our busy Pakistani routines — juggling work, family, and social commitments — it’s easy to forget. The trick is to link your medication to something you already do daily: after brushing your teeth, before your morning chai, or right after dinner. Use your phone’s alarm, a pillbox with daily compartments, or even a sticky note on the fridge. If you travel often, keep a spare strip in your bag or car. Remember, diabetes medicines work best when taken consistently — skipping “just one day” can cause sugar spikes and long-term harm. Make it part of your routine, not an afterthought.",
    category: "Health" as Category,
  },
  {
    question: "Why did this happen to me?",
    answer:
      "It’s natural to ask “Why me?” Diabetes can be influenced by many factors — family history, weight, diet, stress, and even certain illnesses. In Pakistan, high-carb diets, low physical activity, and rising obesity rates have made type 2 diabetes more common. This isn’t about blame — it’s about awareness. Knowing your risk factors helps you take control. Even if genetics played a role, lifestyle changes can slow or even reverse early damage. Instead of focusing on “why,” focus on “what now” — the steps you can take today to protect your future.",
    category: "Education" as Category,
  },
  {
    question: "I don’t know what I can eat anymore.",
    answer:
      "It can feel like your entire menu has been taken away — but in reality, you still have plenty of delicious options. Think of your plate in three parts: Half vegetables — sabzi, salad, or lightly cooked greens. One-quarter lean protein — chicken, fish, daal, or eggs. One-quarter whole grains or healthy carbs — whole-wheat roti, brown rice, or small portions of boiled potatoes. Avoid sugary drinks like cola or packaged juices; choose water, unsweetened lassi, or green tea instead. In Pakistan, small swaps — like grilled kebab instead of fried samosa, or roti instead of naan — can make a big difference. You’re not giving up flavour; you’re choosing foods that keep your sugar steady and your energy high.",
    category: "Diet" as Category,
  },
  {
    question: "Are GLP-1s safe for me?",
    answer:
      "GLP-1 medicines are generally safe for many people with type 2 diabetes, but they’re not for everyone. They can cause side effects like nausea, stomach upset, or constipation — usually mild and temporary. People with certain thyroid or pancreas conditions may need to avoid them. In Pakistan, where access and cost can be challenges, it’s important to have an honest discussion with your doctor about your health history, budget, and goals. If prescribed, start slowly, follow instructions carefully, and report any unusual symptoms. Safety isn’t just about the medicine — it’s about the right medicine for the right person.",
    category: "Health" as Category,
  },
];

const services = [
  {
    title: "Find health providers",
    image: HealthProviders.src,
    gradient: "from-yellow-500/100 to-yellow-500/0",
    linkText: "Find a specialist",
    linkUrl: "/doctors",
    linkTarget: "",
  },
  {
    title: "Understand diabesity",
    image:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070",
    gradient: "from-orange-500/100 to-orange-500/0",
    linkText: "Learn more",
    linkUrl: "/resources",
    linkTarget: "",
  },
  {
    title: "Eat smart and healthy",
    image: EatHealthy.src,
    gradient: "from-blue-500/100 to-blue-500/0",
    linkText: "Get recipes",
    linkUrl: "/resources?tab=recipes#content",
    linkTarget: "",
  },
  {
    title: "Get custom diet plans",
    image:
      "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=2070",
    gradient: "from-green-500/100 to-green-500/0",
    linkText: "Find a dietician",
    linkUrl: "/doctors",
    linkTarget: "",
  },
  {
    title: "Daily care and monitoring",
    image: DailyCare.src,
    gradient: "from-primary to-purple-500/0",
    linkText: "View guides",
    linkUrl: "/daily-care-and-monitoring",
    linkTarget: "",
  },
];

interface HomeClientProps {
  blogs: BlogArticle[];
  news: NewsArticle[];
}

export default function Home({ blogs, news }: HomeClientProps) {
  const { t, locale } = useLanguage();
  const heroSlides = getHeroSlides(t);
  const newServices = getNewServices(t);
  const impactStats = getImpactStats(t);

  const [currentSlide, setCurrentSlide] = useState(0);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [currentVideoUrl, setCurrentVideoUrl] = useState("");
  const [newsCurrentIndex, setNewsCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) setCardsPerView(4);
      else if (window.innerWidth >= 768) setCardsPerView(2);
      else setCardsPerView(1);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Auto-play hero slider
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   }, 5000);

  //   return () => clearInterval(interval);
  // }, [currentSlide]);

  //   const nextSlide = () => {
  //     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  //   };

  //   const prevSlide = () => {
  //     setCurrentSlide(
  //       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
  //     );
  //   };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const openVideoModal = (videoUrl: string) => {
    setCurrentVideoUrl(videoUrl);
    setShowVideoModal(true);
  };

  const closeVideoModal = () => {
    setShowVideoModal(false);
    setCurrentVideoUrl("");
  };

  const nextNewsSlide = () => {
    setNewsCurrentIndex((prev) => {
      const maxIndex = news.length - cardsPerView;
      if (prev >= maxIndex) return 0; // Loop back to start
      return prev + 1;
    });
  };

  const prevNewsSlide = () => {
    setNewsCurrentIndex((prev) => {
      const maxIndex = news.length - cardsPerView;
      if (prev <= 0) return maxIndex; // Loop to end
      return prev - 1;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      nextNewsSlide();
    }
    if (touchStart - touchEnd < -75) {
      prevNewsSlide();
    }
  };

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col">
      {/* Single page-level H1 (kept off-screen). Hero slide headings below are
          intentionally h2 — this page cycles through multiple promotional
          slides and duplicating <h1> per slide (and per mobile/desktop
          layout copy) creates a multiple-H1 SEO issue. */}
      <h1 className="sr-only">
        Diabesity - Living with diabesity in Pakistan
      </h1>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
          {/* Slides */}
          {heroSlides.map((slide, index) => (
            <div
              key={index}
              className={`transition-opacity duration-500 ${
                index === currentSlide
                  ? "opacity-100 relative"
                  : "opacity-0 pointer-events-none absolute inset-0"
              }`}
            >
              {/* Mobile Layout */}
              <div className="lg:hidden">
                <div className="relative w-full px-6 h-auto md:h-80">
                  <Image
                    src={slide.image}
                    alt={slide.heading}
                    width={800}
                    height={550}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white px-6 py-8">
                  <h2 className="text-primary-text text-2xl md:text-3xl font-bold mb-4 leading-tight">
                    {slide.heading}
                  </h2>
                  <p className="text-primary-text text-base mb-6 leading-relaxed">
                    {slide.body}
                  </p>
                  <div className="flex flex-col gap-3">
                    {slide.ctaText && slide.ctaUrl && (
                      <Link href={slide.ctaUrl}>
                        <Button variant="primary" className="w-full" size="md">
                          {slide.ctaText}
                        </Button>
                      </Link>
                    )}
                  </div>
                  <div className="w-full h-1 bg-primary mt-8"></div>
                </div>
              </div>

              {/* Desktop Layout */}
              <div className="hidden lg:block relative">
                <Image
                  src={slide.image}
                  alt={slide.heading}
                  width={1200}
                  height={550}
                  className="w-full h-[550px] object-cover"
                />

                {/* Text Overlay Box with Decorative Border */}
                <div className="absolute top-12 left-12 max-w-md">
                  {/* Decorative Border - Top (right to left) */}
                  <div className="absolute -top-2 -right-2 w-[50%] border-t-8 border-primary pointer-events-none"></div>

                  {/* Decorative Border - Right */}
                  <div className="absolute top-0 -right-2 h-[50%] border-r-8 border-primary pointer-events-none"></div>

                  {/* Decorative Border - Bottom (left to right) */}
                  <div className="absolute -bottom-2 -left-2 w-[50%] border-b-8 border-secondary pointer-events-none"></div>

                  {/* Decorative Border - Left */}
                  <div className="absolute bottom-0 -left-2 h-[50%] border-l-8 border-secondary pointer-events-none"></div>

                  {/* White Background Box */}
                  <div className="relative bg-white p-8 shadow-lg">
                    <h2 className="text-primary-text text-4xl font-bold mb-4 leading-tight">
                      {slide.heading}
                    </h2>
                    <p className="text-primary-text text-base mb-6 leading-relaxed">
                      {slide.body}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      {slide.ctaText && slide.ctaUrl && (
                        <Link href={slide.ctaUrl}>
                          <Button
                            variant="primary"
                            className="w-full sm:w-auto"
                            size="md"
                          >
                            {slide.ctaText}
                          </Button>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Left Arrow */}
        {/* <button
          onClick={prevSlide}
          className="absolute left-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors z-10"
        >
          <ChevronLeft className="w-6 h-6" />
        </button> */}

        {/* Right Arrow */}
        {/* <button
          onClick={nextSlide}
          className="absolute right-8 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border-2 border-white flex items-center justify-center text-white hover:bg-white hover:text-primary transition-colors z-10"
        >
          <ChevronRight className="w-6 h-6" />
        </button> */}

        {/* Dot Indicators */}
        {/* <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
            />
          ))}
        </div> */}
      </section>

      {/* Video Modal */}
      {showVideoModal && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={closeVideoModal}
        >
          <div
            className="relative w-full max-w-4xl aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeVideoModal}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 text-xl font-bold"
            >
              {t("home.videoModal.close")}
            </button>
            <iframe
              src={currentVideoUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}

      {/* New Services Section */}
      <section className="">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto bg-gray-50">
          <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-6 p-6 lg:p-10">
            {newServices.map((service, index) => (
              <Card
                key={index}
                className="p-6 rounded-none hover:shadow-lg transition-shadow h-96"
              >
                <div className="flex flex-col gap-6">
                  <Image
                    src={service.icon}
                    alt={service.title}
                    width={112}
                    height={80}
                    className="w-28 h-20 object-contain"
                  />
                  <h3 className="text-xl font-semibold text-primary-text">
                    {service.title}
                  </h3>
                  <p>{service.body}</p>
                  <div className="flex flex-col gap-2">
                    {service.links.map((link, linkIndex) => (
                      <Link
                        key={linkIndex}
                        href={link.url}
                        className="text-primary-text text-md font-semibold underline hover:text-primary-text/80"
                      >
                        {link.text}
                      </Link>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact Section */}
      <section className="py-16 bg-white">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-10 lg:gap-24">
            {impactStats.map((stat, index) => (
              <div
                key={index}
                className={`flex flex-col${locale === "ur" ? " text-right" : ""}`}
              >
                <div className="mb-4">
                  <h2
                    className="text-4xl md:text-5xl font-bold text-primary-text"
                    dir="ltr"
                  >
                    {stat.value}
                  </h2>
                  <p className="text-xl md:text-2xl leading-8 font-bold text-secondary">
                    {stat.label}
                  </p>
                </div>
                <p className="text-primary-text leading-relaxed">
                  {stat.linkText ? (
                    <>
                      {stat.description.split(stat.linkText)[0]}
                      <Link
                        href={stat.linkUrl}
                        className="text-primary-text font-bold underline hover:text-primary-text/80"
                      >
                        {stat.linkText}
                      </Link>
                      {stat.description.split(stat.linkText)[1]}
                    </>
                  ) : (
                    stat.description
                  )}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Find Support in Your Area Section */}
      <section className="relative bg-secondary overflow-visible py-10">
        <div className="relative z-10 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            <h2 className="text-2xl font-bold uppercase text-white">
              {t("home.support.heading")}
            </h2>
            <p className="text-md text-white leading-relaxed">
              {t("home.support.description")}
            </p>
            <div>
              <Link href="/doctors">
                <Button variant="primary" size="md" className="px-6">
                  {t("home.support.findNow")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-16">
            {/* Left - Heading */}
            <div className="text-white flex-shrink-0">
              <h2 className="text-2xl md:text-4xl font-bold uppercase leading-tight">
                {t("home.support.headingDesktop")
                  .split("\n")
                  .map((line, i) => (
                    <span key={i}>
                      {line}
                      {i === 0 && <br />}
                    </span>
                  ))}
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {/* Middle - Description */}
              <div className="text-white max-w-xs">
                <p className="text-md leading-relaxed">
                  {t("home.support.description")}
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <Link href="/doctors">
                  <Button variant="primary" size="md" className="px-6">
                    {t("home.support.findNow")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Pakistan Map (extends beyond section height) */}
            <div className="relative flex-1 flex justify-end">
              <Image
                src={PakistanMap}
                alt="Pakistan Map"
                className="absolute top-1/2 -translate-y-1/2 right-0 h-[300px] w-auto object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative overflow-hidden hidden">
        {/* Background halves */}
        {/* <div className="absolute inset-0 grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
          <div className="bg-[#2a2a2a]" />
          <div className="bg-white" />
        </div> */}

        {/* Foreground content */}
        <div className="relative lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto grid grid-rows-2 md:grid-rows-1 md:grid-cols-2">
          {/* Left Dark Side */}
          <div className="text-white px-8 md:px-16 py-16 md:py-24 bg-[#2a2a2a]">
            <h2 className="text-[#ff9d5c] text-3xl md:text-4xl font-medium mb-8">
              Mission
            </h2>
            <p className="text-gray-200 text-lg leading-relaxed">
              We believe every person in Pakistan deserves a life free of
              diabesity, and we are here to be your compassionate partner in
              making that a reality. We provide access to reliable information
              from healthcare experts, explaining complex topics in simple
              English and Urdu, while fostering hope through the real stories of
              Pakistanis who have transformed their health. To support you at
              home, we offer a library of practical resources like meal plans
              and exercise routines designed for your family and lifestyle.
            </p>
          </div>

          {/* Right White Side */}
          <div className="px-8 md:px-16 py-16 md:py-24 text-gray-900">
            <h2 className="text-3xl md:text-4xl font-medium mb-6">
              A reality we can face together
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              In Pakistan, the combination of diabetes and
              obesity—&quot;diabesity&quot;—has become one of our most urgent
              health challenges. With <strong>1 in 4 adults</strong> projected
              to face obesity by <strong>2035</strong> and diabetes already
              affecting <strong>26.7%</strong> of our population, the numbers
              are serious. Our modern lives, from the convenience of fast food
              to more sedentary habits, have fueled this rise.
            </p>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="px-6 lg:px-0 py-12 relative">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center mb-12 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-medium text-primary-text">
                {t("home.news.heading")}
              </h2>
            </div>
          </div>

          <div className="relative">
            {/* Carousel Container */}
            <div
              className="overflow-hidden"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{
                  transform: `translateX(-${
                    (newsCurrentIndex * 100) / cardsPerView
                  }%)`,
                }}
              >
                {news.map((article, idx) => (
                  <div
                    key={idx}
                    className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 md:px-3"
                  >
                    <Link href={`/news/${article.slug}`}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow bg-white py-0 pb-6 rounded-none h-full cursor-pointer gap-0">
                        <div className="relative bg-gray-200">
                          <div
                            className={`absolute top-0 left-0 ${article.color} text-white px-3 py-1 text-xs font-semibold`}
                          >
                            {article.category}
                          </div>
                        </div>
                        <div className="flex flex-col justify-between h-full">
                          <Image
                            src={article.image}
                            alt={article.title}
                            width={400}
                            height={192}
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="px-4 flex flex-col gap-4 mt-6">
                          <small className="text-gray-600 text-sm">
                            {article.date}
                          </small>
                          <h3
                            className="font-medium text-primary-text text-lg leading-snug line-clamp-3 min-h-[4.5rem]"
                            dir={
                              locale === "ur" && article.titleUr
                                ? "rtl"
                                : undefined
                            }
                          >
                            {locale === "ur" && article.titleUr
                              ? article.titleUr
                              : article.title}
                          </h3>
                          <p
                            className="text-primary-text text-sm leading-relaxed line-clamp-3"
                            dir={
                              locale === "ur" && article.excerptUr
                                ? "rtl"
                                : undefined
                            }
                          >
                            {locale === "ur" && article.excerptUr
                              ? article.excerptUr
                              : article.excerpt}
                          </p>
                        </div>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
              <div className="flex justify-center mt-12">
                <Link href="/resources?tab=news#content">
                  <Button variant="outlined">{t("home.news.moreNews")}</Button>
                </Link>
              </div>
            </div>

            {/* Left Arrow */}
            {/* <button
              onClick={prevNewsSlide}
              className="hidden md:flex absolute left-[-10] top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 rounded-full items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition-colors z-10 "
            >
              <ChevronLeft className="w-8 h-8" />
            </button> */}

            {/* Right Arrow */}
            {/* <button
              onClick={nextNewsSlide}
              className="hidden md:flex absolute right-[-10] top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 rounded-full items-center justify-center text-gray-600 hover:border-primary hover:text-primary hover:bg-white transition-colors z-10 "
            >
              <ChevronRight className="w-8 h-8" />
            </button> */}
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden justify-center gap-4 mt-8">
            <button
              onClick={prevNewsSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextNewsSlide}
              className="w-10 h-10 rounded-full border-2 border-gray-400 flex items-center justify-center text-gray-600 hover:border-primary hover:text-primary transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-8">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto p-6 lg:p-10 bg-gray-50">
          <div className="flex flex-col md:flex-row justify-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-medium text-primary-text text-left">
              {t("home.blogs.heading")}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.slice(0, 3).map((blog, idx) => (
              <Card
                key={idx}
                className="overflow-hidden hover:shadow-lg transition-shadow py-0 rounded-none gap-0"
              >
                <Link href={`/blogs/${blog.slug}`} className="cursor-pointer">
                  <div className="relative h-56 bg-gray-200">
                    <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 text-xs font-semibold">
                      {new Date(blog.date).toLocaleDateString(
                        locale === "ur" ? "ur-PK" : "en-GB",
                        { day: "numeric", month: "short" },
                      )}
                    </div>
                    <Image
                      src={blog.image}
                      alt={blog.imageAlt}
                      width={400}
                      height={300}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="px-6 py-4">
                    <h3
                      className="font-bold text-primary-text text-xl mb-4"
                      dir={locale === "ur" && blog.urdu ? "rtl" : undefined}
                    >
                      {locale === "ur" && blog.urdu
                        ? blog.urdu.title
                        : blog.title}
                    </h3>
                    <p className="text-primary-text text-md font-semibold leading-relaxed line-clamp-3 mb-4">
                      {blog.excerpt}
                    </p>
                  </div>
                </Link>

                {/* Links Section - Outside Link component to avoid nested <a> tags */}
                {blog?.links && blog?.links.length > 0 && (
                  <div className="flex flex-col gap-2 px-6 pb-6">
                    {blog?.links.map((link, linkIdx) => (
                      <a
                        key={linkIdx}
                        href={link.url}
                        className="text-primary-text text-md font-semibold underline hover:text-primary-text/80"
                      >
                        {link?.text}
                      </a>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/resources?tab=blogs#content">
              <Button variant="outlined">{t("home.blogs.findOut")}</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 bg-white">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0">
          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden gap-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6 uppercase">
                {t("home.stories.heading")}
              </h2>
              <p className="text-primary-text text-md leading-relaxed mb-6">
                {t("home.stories.description")}
              </p>
              {/* <Button variant="primary" size="sm" className="px-4">
                Read all stories
              </Button> */}
            </div>

            <div className="w-full">
              <Image
                src={Story}
                alt="Story featured image"
                className="w-full h-auto object-cover"
              />
            </div>

            <div className="">
              <p className="text-primary-text text-md leading-relaxed mb-6">
                {t("home.stories.quote")} <br />{" "}
                <i>{t("home.stories.author")}</i>
              </p>
              <Link href="/blogs/how-semaglutide-changes-lives">
                <Button variant="primary" size="md" className="px-8">
                  {t("home.stories.readStory")}
                </Button>
              </Link>
            </div>

            <div className="w-full h-1 bg-secondary"></div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-5 gap-16">
            {/* Left - 2 columns */}
            <div className="col-span-2 flex flex-col justify-center">
              <h2 className="text-4xl xl:text-4xl font-bold text-primary-text mb-6 uppercase leading-tight">
                {t("home.stories.heading")}
              </h2>
              <p className="text-primary-text text-md leading-relaxed mb-8">
                {t("home.stories.description")}
              </p>
              <div>
                {/* <Button variant="primary" size="md" className="px-8">
                  Read all stories
                </Button> */}
              </div>
            </div>

            <div className="col-span-3 grid grid-cols-3">
              {/* Middle - 1 column (Featured Story Card) */}
              <div className="col-span-1 flex flex-col justify-center">
                <div className="relative">
                  {/* Top border - right to left */}
                  <div className="absolute -top-2 -right-2 w-[50%] border-t-8 border-primary pointer-events-none"></div>
                  {/* Right border */}
                  <div className="absolute top-0 -right-2 h-[50%] border-r-8 border-primary pointer-events-none"></div>
                  {/* Bottom border - left to right */}
                  <div className="absolute -bottom-2 -left-2 w-[50%] border-b-8 border-secondary pointer-events-none"></div>
                  {/* Left border */}
                  <div className="absolute bottom-0 -left-2 h-[50%] border-l-8 border-secondary pointer-events-none"></div>

                  <div className="relative bg-white p-6">
                    <p className="text-primary-text text-md leading-relaxed mb-6">
                      {t("home.stories.quote")} <br />{" "}
                      <i>{t("home.stories.author")}</i>
                    </p>
                    <Link href="/blogs/how-semaglutide-changes-lives">
                      <Button variant="primary" size="sm" className="px-4">
                        {t("home.stories.readStory")}
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right - 2 columns (Image) */}
              <div className="col-span-2">
                <Image
                  src={Story}
                  alt="Story featured image"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-white">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0">
          {/* Mobile Layout */}
          <div className="flex flex-col lg:hidden gap-8">
            <div>
              <p className="text-primary-text text-md leading-relaxed mb-4">
                {t("home.video.description1")}
              </p>
              <p className="text-primary-text text-md leading-relaxed">
                {t("home.video.description2Prefix")}{" "}
                <Link
                  href="https://www.youtube.com/playlist?list=PLQDlTVSOXD9GeCq19dVbUpYZewQaztdsR"
                  target="_blank"
                  className="text-primary font-semibold underline"
                >
                  {t("home.video.youtubePlaylist")}
                </Link>
                {t("home.video.description2Suffix")}
              </p>
            </div>
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/CyVTZC1Gz6w"
                title="What is Diabesity?"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-12 items-center">
            {/* Left - 1 column (Text) */}
            <div className="col-span-1">
              <p className="text-primary-text text-md leading-relaxed">
                {t("home.video.description1")}
              </p>
              <p className="text-primary-text text-md leading-relaxed">
                {t("home.video.description2Prefix")}{" "}
                <Link
                  href="https://www.youtube.com/playlist?list=PLQDlTVSOXD9GeCq19dVbUpYZewQaztdsR"
                  target="_blank"
                  className="text-primary font-semibold underline"
                >
                  {t("home.video.youtubePlaylist")}
                </Link>
                {t("home.video.description2Suffix")}
              </p>
            </div>

            {/* Right - 2 columns (Video) */}
            <div className="col-span-2">
              <div className="relative w-full pb-[56.25%] bg-black">
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src="https://www.youtube.com/embed/CyVTZC1Gz6w"
                  title="What is Diabesity?"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Channel Videos Section — connected to youtube.com/@diabesitylifepk.
          Plays the "HCP Videos" playlist specifically (not the full channel
          uploads feed), so update the playlist ID here if that changes. */}
      <section className="py-16 bg-gray-50">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6 lg:px-0">
          <div className="flex flex-col gap-2 mb-8">
            <h2 className="text-primary-text text-2xl md:text-3xl font-bold">
              {t("home.channelVideos.heading")}
            </h2>
            <p className="text-primary-text text-md leading-relaxed">
              {t("home.channelVideos.description")}{" "}
              <Link
                href="https://www.youtube.com/@diabesitylifepk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-semibold underline"
              >
                {t("home.channelVideos.visitChannel")}
              </Link>
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <div className="relative w-full pb-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src="https://www.youtube.com/embed/videoseries?list=PL4CCxDZb-iepUGlhIB8CLgybQDrlOfn0y"
                title="Latest videos from Diabesity Life"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* GLP Hub Section */}
      <section className="relative bg-secondary overflow-visible py-10 mb-8 lg:mb-20">
        <div className="relative z-10 lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6">
          {/* Mobile Layout */}
          <div className="flex flex-col gap-6 lg:hidden">
            <h2 className="text-2xl font-bold uppercase text-white">
              {t("home.glp.heading")}
            </h2>
            <p className="text-md text-white leading-relaxed">
              {t("home.glp.description")}
            </p>
            <div>
              <Link href="/glp-hub">
                <Button variant="primary" size="md" className="px-6">
                  {t("home.glp.exploreButton")}
                </Button>
              </Link>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center gap-16">
            {/* Left - Heading */}
            <div className="text-white flex-shrink-0 lg:w-[38%]">
              <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight pl-20">
                {t("home.glp.heading")}
              </h2>
            </div>

            <div className="flex flex-col gap-6">
              {/* Middle - Description */}
              <div className="text-white max-w-xs">
                <p className="text-md leading-relaxed">
                  {t("home.glp.description")}
                </p>
              </div>

              {/* Button */}
              <div className="flex-shrink-0">
                <Link href="/glp-hub">
                  <Button variant="primary" size="md" className="px-6">
                    {t("home.glp.exploreButton")}
                  </Button>
                </Link>
              </div>
            </div>

            {/* Right - Pakistan Map (extends beyond section height) */}
            <div className="relative flex-1 flex justify-end">
              <Image
                src={GlpInjection}
                alt="Pakistan Map"
                className="absolute top-1/2 -translate-y-1/2 right-25 h-[300px] w-auto object-fill"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Support Section */}
      <section className="relative">
        {/* Mobile Layout */}
        <div className="lg:hidden px-6">
          <div className="relative w-full h-64 md:h-80">
            <Image
              src="https://www.diabetes.org.uk/sites/default/files/2020-06/rsz_cumbria_north_east_scheme.jpg"
              alt="Looking for support"
              width={800}
              height={320}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="bg-white py-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text mb-6">
              {t("home.community.heading")}
            </h2>
            <p className="text-primary-text text-md leading-relaxed mb-6">
              {t("home.community.description")}
            </p>
            <Link href="/contact">
              <Button variant="primary" size="md" className="px-8 mb-8">
                {t("home.community.readMore")}
              </Button>
            </Link>
            <div className="w-full h-1 bg-primary"></div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="relative lg:max-w-4xl mx-auto h-96 xl:h-[500px]">
            {/* Background Image */}
            <Image
              src={SupportBG}
              alt="Looking for support"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* White Overlay Box - Right Side */}
            <div className="absolute top-24 right-8 max-w-md">
              {/* Top border - right to left */}
              <div className="absolute -top-2 -right-2 w-[50%] border-t-8 border-secondary pointer-events-none"></div>
              {/* Right border */}
              <div className="absolute top-0 -right-2 h-[50%] border-r-8 border-secondary pointer-events-none"></div>
              {/* Bottom border - left to right */}
              <div className="absolute -bottom-2 -left-2 w-[50%] border-b-8 border-primary pointer-events-none"></div>
              {/* Left border */}
              <div className="absolute bottom-0 -left-2 h-[50%] border-l-8 border-primary pointer-events-none"></div>

              {/* White Background Box */}
              <div className="relative bg-white p-8 shadow-lg">
                <h2 className="text-3xl xl:text-4xl font-bold text-primary-text mb-6">
                  {t("home.community.heading")}
                </h2>
                <p className="text-primary-text text-md leading-relaxed mb-6">
                  {t("home.community.description")}
                </p>
                <Link href="/contact">
                  <Button variant="primary" size="md" className="px-8">
                    {t("home.community.readMore")}
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recipes Section */}
      <section className="px-6 lg:px-0 py-16 relative">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-center mb-12 gap-6">
            <div className="text-center flex flex-col gap-4">
              <h2 className="text-3xl md:text-4xl font-medium text-primary-text">
                {t("home.recipes.heading")}
              </h2>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6">
            {Object.values(recipes)
              .slice(0, 3)
              .map((recipe, idx) => (
                <Link key={idx} href={`/recipes/${recipe.slug}`}>
                  <Card className="overflow-hidden hover:shadow-lg rounded-none transition-shadow bg-white cursor-pointer h-full pb-6 pt-0">
                    <div className="relative h-48 bg-gray-200">
                      <Image
                        src={recipe.image}
                        alt={recipe.imageAlt}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-between px-4 h-48">
                      <h3
                        className="font-bold text-gray-900 text-xl leading-tight"
                        dir={
                          locale === "ur" && recipe.titleUr ? "rtl" : undefined
                        }
                      >
                        {locale === "ur" && recipe.titleUr
                          ? recipe.titleUr
                          : recipe.title}
                      </h3>

                      {/* Nutrition Info Grid */}
                      <div className="grid grid-cols-3 gap-2 text-center">
                        {/* Calories */}
                        <div className="bg-blue-50 p-3">
                          <div className="text-xs text-gray-600 mb-1">
                            {locale === "ur" ? "کیلوریز" : "KCal"}
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {recipe.calories}
                          </div>
                        </div>

                        {/* Carbs */}
                        <div className="bg-purple-50 p-3">
                          <div className="text-xs text-gray-600 mb-1">
                            {t("home.recipes.carbs")}
                          </div>
                          <div className="text-lg font-bold">
                            {recipe.carbs}
                          </div>
                        </div>

                        {/* Sugars with Level Badge */}
                        <div className={`bg-primary p-3 text-white`}>
                          <div className="text-xs mb-1">
                            {t("home.recipes.sugars")}
                          </div>
                          <div className="text-lg font-bold">
                            {recipe.sugars}
                          </div>
                          <div className="text-xs mt-1">
                            (
                            {locale === "ur"
                              ? recipe.sugarLevel === "Low"
                                ? "کم"
                                : recipe.sugarLevel === "Medium"
                                  ? "درمیانہ"
                                  : "زیادہ"
                              : recipe.sugarLevel}
                            )
                          </div>
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))}
          </div>

          <div className="flex justify-center mt-12">
            <Link href="/resources?tab=recipes#content">
              <Button variant="outlined">
                {t("home.recipes.moreRecipes")}
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-8 hidden">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              SERVICES
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              We help you succeed
            </h2>
            <p className="text-gray-600 text-lg">
              From finding a specialist to creating healthy meals, here&apos;s
              everything you need to take control
            </p>
          </div>

          {/* Services section */}
          <div className="grid md:grid-cols-3 2xl:grid-cols-5 gap-4 mb-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="relative h-80 overflow-hidden group cursor-pointer border"
              >
                <Link href={service.linkUrl} target={service.linkTarget}>
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={400}
                    height={320}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-t ${service.gradient}`}
                  ></div>
                  <div className="absolute inset-0 bg-black/30"></div>
                  <div className="absolute bottom-4 left-3 text-white px-1">
                    <p className="font-semibold text-xl mb-8">
                      {service.title}
                    </p>
                    <p className="font-semibold text-lg flex items-center underline">
                      {service.linkText}{" "}
                      <span className="ml-1">
                        <ChevronRight size={18} />
                      </span>
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="pt-8 pb-24 bg-white hidden">
        <div className="lg:max-w-4xl xl:max-w-6xl 2xl:max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-gray-600 text-sm uppercase tracking-wider mb-2">
              FAQs
            </p>
            <h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4">
              The answers to all your questions
            </h2>
            <p className="text-gray-600 text-lg">
              Expert-verified answers from our team of healthcare professionals
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {/* Left Column - First Half FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(0, faqs.length / 2).map((faq, idx) => (
                <div key={idx} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className={`${getCategoryGradient(
                      faq.category,
                    )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                  >
                    <span>{faq.question}</span>
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
                    <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right Column - Last Half FAQs */}
            <div className="flex flex-col gap-4">
              {faqs.slice(faqs.length / 2, faqs.length).map((faq, idx) => (
                <div key={idx + 4} className="flex flex-col">
                  <button
                    onClick={() => toggleFaq(idx + 4)}
                    className={`${getCategoryGradient(
                      faq.category,
                    )} px-6 py-4 border text-left font-semibold text-gray-900 flex justify-between items-center transition-all hover:opacity-90`}
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={`w-5 h-5 transition-transform duration-300 flex-shrink-0 ml-4 ${
                        openFaqIndex === idx + 4 ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      openFaqIndex === idx + 4 ? "max-h-96 mt-2" : "max-h-0"
                    }`}
                  >
                    <div className="bg-white px-6 py-4 border text-gray-700 leading-relaxed">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <Link href="/faqs" className="flex justify-center mt-12">
            <Button variant="outlined">Read more</Button>
          </Link>
        </div>
      </section>

      {/* Orange decorative line at bottom of homepage */}
      <div className="lg:w-4xl xl:w-6xl 2xl:w-6xl mx-auto">
        <div className="w-full h-2 bg-primary"></div>
      </div>
    </div>
  );
}
