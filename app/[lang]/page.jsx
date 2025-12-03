import Products from "@/components/Products/Products";
import Testimonials from "@/components/Testimonials";
import Hero from '../../components/Hero';
import Features from '../../components/Feature';
import Badge from '../../components/Badge/Badge';
import Market from "@/components/MarketLeader/Market";
import Team from "@/components/Team/Team";
import Skills from "@/components/Skills/Skills";
import StartProject from "@/components/StartProject/StartProject";
import ValueSlider from "@/components/ValueSlider";
import TeamSection from '@/components/workteam/team';
import ServicesSection from '@/components/ServicesSection/ServicesSection'; // New import

export default async function Home({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const content = {
    en: {
      heroTitle: "Next Future Information Technology",
      heroDescription:
        "Transforming your digital presence with innovative solutions — from web and app development to IT consulting — tailored to elevate your business and achieve measurable success.",
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
      heroTitle: "نكست فيوتشر لتقنية المعلومات",
      heroDescription:
        "نحو حضور رقمي متكامل بحلول مبتكرة — من تطوير المواقع والتطبيقات إلى الاستشارات التقنية — لمساعدة عملك على النمو وتحقيق نتائج ملموسة.",
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
    heroButton,
    products,
  } = content[lang] || content.en;

  return (
    <>
 <div className="my-hero-section">
  <Hero 
    lang={lang} 
    text={heroButton}
    heroTitle={heroTitle}
    heroDescription={heroDescription}
  />
</div>

      {/* Feature Section */}
      <Features
        title={whyChooseTitle}
        description={whyChooseDescription}
        features={features}
        lang={lang}
      />
      
      {/* Services Section */}
      <ServicesSection lang={lang} />
      
      {/* Badge */}
      <Badge lang={lang} />

      {/* Market */}
      <Market lang={lang} />
      
      {/* ValueSlider */}
      <ValueSlider lang={lang} />

      {/* Team */}
      {/* <Team lang={lang}/> */}
      
      {/* Products */}
      <Products lang={lang} />
      
      {/* Skills */}
      <Skills lang={lang}/>
      
      {/* Start Project */}
      <StartProject lang={lang} />
      
      {/* TeamSection */}
      <TeamSection lang={lang} />
    </>
  );
}