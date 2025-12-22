import Hero from "@/components/Hero";
import Features from "@/components/Feature";
import ServicesSection from "@/components/ServicesSection/ServicesSection";
import Badge from "@/components/Badge/Badge";
import Market from "@/components/MarketLeader/Market";
import ValueSlider from "@/components/ValueSlider";
import Products from "@/components/Products/Products";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";

export default async function Home({ params }) {
  const { lang } = params;

  const content = {
    en: {
      heroTitle: "Next Future Tech",
      heroDescription:
        "Empowering Businesses Through Innovation, Technology, & Strategy",
      shopNow: "Get Your Free Consultation",
      whyChooseTitle: "Why Partner with Next Future Information",
      whyChooseDescription:
        "We deliver impactful solutions across industries, helping businesses grow sustainably and gain global recognition.",
      features: [
        {
          title: "Creative & Strategic",
          description:
            "Combining innovative design with data-driven strategies to maximize results.",
        },
        {
          title: "Industry-Wide Expertise",
          description:
            "Extensive experience in technology, real estate, retail, healthcare, and more.",
        },
        {
          title: "Bilingual & Global Reach",
          description:
            "Solutions crafted in both English and Arabic to reach audiences worldwide.",
        },
        {
          title: "Results-Oriented",
          description:
            "Every project focuses on measurable growth, ROI, and tangible outcomes.",
        },
      ],
    },
    ar: {
      heroTitle: "نكست فيوتشر لتقنية",
      heroDescription:
        "تمكين الأعمال من خلال الابتكار والتكنولوجيا والاستراتيجية",
      shopNow: "احصل على استشارتك المجانية",
      whyChooseTitle: "لماذا تختار نكست فيوتشر",
      whyChooseDescription:
        "نقدّم حلولاً مبتكرة عبر مختلف الصناعات، لمساعدة الشركات على تحقيق نمو مستدام وبناء سمعة قوية على المستوى العالمي.",
      features: [
        {
          title: "إبداع واستراتيجية",
          description:
            "نجمع بين التصميم المبتكر والاستراتيجيات المدعومة بالبيانات لتحقيق أفضل النتائج.",
        },
        {
          title: "خبرة شاملة في الصناعات",
          description:
            "خبرة واسعة في التكنولوجيا، العقارات، التجزئة، الرعاية الصحية والمزيد.",
        },
        {
          title: "ثنائي اللغة ونطاق عالمي",
          description:
            "حلولنا متاحة باللغتين العربية والإنجليزية للوصول إلى جمهور عالمي.",
        },
        {
          title: "تركيز على النتائج",
          description:
            "كل مشروع يركز على تحقيق نمو قابل للقياس وعائد استثمار واضح.",
        },
      ],
    },
  };

  const {
    heroTitle,
    heroDescription,
    shopNow,
    whyChooseTitle,
    whyChooseDescription,
    features,
  } = content[lang] || content.en;

  return (
    <>
      <Hero
        lang={lang}
        heroTitle={heroTitle}
        heroDescription={heroDescription}
      />

      <Features
        title={whyChooseTitle}
        description={whyChooseDescription}
        features={features}
        lang={lang}
      />

      <ServicesSection params={{ lang }} />
      <Badge lang={lang} />
      <Market lang={lang} />
      <ValueSlider lang={lang} />
      <Products lang={lang} />
      <Skills lang={lang} />
      <StartProject lang={lang} />
    </>
  );
}
