"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./aboutus.module.css";
import TeamSection from '@/components/workteam/team';

export default function AboutUs({ params }) {
  const resolvedParams = use(params);
  const currentLang = resolvedParams?.lang || "en";
  const router = useRouter();

  // Translations
  const content = {
    en: {
      heroTitle: "About Next Future Technology",
      heroSubtitle: "Empowering businesses through innovation, technology, and strategy.",
      heroExtra: "We believe the future of business lies at the intersection of technology and creativity. From startups to enterprises, Next Future helps brands redefine how they connect, grow, and succeed in a digital-first world.",
      history: "Next Future Information Technology was founded to help businesses thrive and shine in the digital era. Our company is led by a team of multi-skilled professionals in web and mobile development, graphic design, digital marketing, and IT solutions — turning innovative ideas into tangible results. We believe every business has the potential to excel, combining creativity, strategy, and technology to build modern websites, mobile apps, brand identities, and marketing campaigns that deliver real impact. Our mission is simple — to elevate your brand to its full potential. Whether you're starting out or already established, Next Future is your trusted partner for clarity, creativity, and growth at every stage of your journey.",
      
      // New content
      aboutUs: "Next Future Information Technology is a leading company in information technology, software development, and business solutions in marketing, accounting, and management. The company boasts a team of experts, engineers, and developers with high expertise and efficiency in software development and information technology. We are committed to building long-term relationships with our clients through delivering high-quality services and exceptional after-sales support.",
      
      vision: {
        title: "Our Vision",
        description: "Delivering software solutions with global standards, and achieving prominent presence to pioneer digital transformation."
      },
      
      mission: {
        title: "Our Mission", 
        description: "Activating innovation in the digital solutions industry, enhancing profitability, increasing effectiveness, and elevating the overall quality of our partners' operations to achieve their goals and exceed their ambitions."
      },
      
      team: {
        title: "Our Team",
        description: "Researchers, developers, consultants, and engineers working with professional efficiency and ethical commitment to meet our clients' needs. We take pride in their innovations and services."
      },
      
      goal: {
        title: "Our Goal",
        description: "Our goal aligns with Saudi Vision 2030, aspiring for our nation to become a globally successful model in the field of technology."
      },

      servicesTitle: "Our Services",
      storyHeading: "Our Story",
      buttons: {
        mobile: "Mobile Apps",
        web: "See Web Solutions",
        marketing: "Explore Marketing",
        design: "View Designs",
        it: "Learn IT Solutions",
        appDev: "App Development",
        erp: "ERP Solutions",
        odoo: "Odoo ERP",
        ecommerce: "E-Commerce",
        cloud: "Cloud Services"
      },
    },
    ar: {
      heroTitle: "عن نيكست فيوتشر للتقنية",
      heroSubtitle: "تمكين الشركات من خلال الابتكار والتكنولوجيا والاستراتيجية.",
      heroExtra: "نؤمن أن مستقبل الأعمال يكمن في تقاطع التقنية مع الإبداع. من الشركات الناشئة إلى المؤسسات الكبيرة، تساعد نيكست فيوتشر العلامات التجارية على إعادة تعريف كيفية التواصل والنمو والنجاح في عالم رقمي أولًا.",
      history: "تأسست شركة نيكست فيوتشر لتقنية المعلومات لمساعدة الشركات على الازدهار والتألق في العصر الرقمي. تحت قيادة فريق من الخبراء متعددي المهارات في تطوير المواقع والتطبيقات، التصميم الجرافيكي، التسويق الرقمي، وحلول تكنولوجيا المعلومات — تحول نيكست فيوتشر الأفكار المبتكرة إلى نتائج ملموسة. نحن نؤمن بأن لكل شركة القدرة على التفوق، ولهذا نمزج بين الإبداع والاستراتيجية والتقنية لبناء مواقع حديثة، وتطبيقات متطورة، وهويات بصرية قوية، وحملات تسويقية تحقق أثرًا حقيقيًا. مهمتنا بسيطة — رفع علامتك التجارية إلى أقصى إمكاناتها. سواء كنت في بداية مسيرتك أو تمتلك مؤسسة راسخة، فإن نيكست فيوتشر هي شريكك الموثوق للوضوح والإبداع والنمو في كل مرحلة من رحلتك.",
      
      // New content in Arabic
      aboutUs: "نيكست فيوتشر لتقنية المعلومات هي شركة رائدة في مجال تقنية المعلومات وتطوير البرمجيات وحلول الأعمال التسويقية والمحاسبية والإدارية. وتتميز الشركة بفريق عمل مكون من مجموعة من الخبراء والمهندسين والمطورين ذوي خبرة وكفاءة عالية في مجال تطوير البرمجيات وتكنولوجيا المعلومات. نحن نحرص على بناء علاقات طويلة المدى مع عملائنا من خلال تقديم خدمات عالية الجودة وخدمات ما بعد البيع المتميزة.",
      
      vision: {
        title: "رؤيتنا",
        description: "تقديم حلول برمجية بمقاييس عالمية، والتواجد المميز لتحقيق السبق في التحول الرقمي."
      },
      
      mission: {
        title: "رسالتنا",
        description: "تفعيل الابتكار في صناعة الحلول الرقمية، وتعزيز الربحية وزيادة الفاعلية والارتقاء بالجودة الشاملة في أعمال شركائنا لتحقيق أهدافهم وتجاوز طموحاتهم."
      },
      
      team: {
        title: "فريقنا", 
        description: "باحثون ومطورون واستشاريون ومهندسون يعملون بكفاءة مهنية والتزام أخلاقي لتلبية احتياجات عملائنا، ونفتخر بابتكاراتهم وخدماتهم."
      },
      
      goal: {
        title: "هدفنا",
        description: "هدفنا التزام برؤية المملكة 2030 بأن تكون بلادنا نموذجاً عالمياً ناجحاً في مجال التكنولوجيا."
      },

      servicesTitle: "خدماتنا",
      storyHeading: "قصتنا",
      buttons: {
        mobile: "تطبيقات الهواتف",
        web: "حلول الويب",
        marketing: "التسويق الرقمي",
        design: "التصميم الجرافيكي",
        it: "حلول تكنولوجيا المعلومات",
        appDev: "تطوير التطبيقات",
        erp: "حلول ERP",
        odoo: "أودو ERP",
        ecommerce: "التجارة الإلكترونية",
        cloud: "خدمات السحابة"
      },
    },
  };

  const t = content[currentLang];

  const services = [
    {
      icon: "📱",
      title: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
      text: {
        en: "Custom apps for iOS and Android.",
        ar: "تطبيقات مخصصة لنظامي iOS و Android.",
      },
      link: `/${currentLang}/service/mobile-app`,
      btnKey: "mobile",
    },
    {
      icon: "💻",
      title: { en: "Web Development", ar: "تطوير الويب" },
      text: {
        en: "Responsive websites for business success.",
        ar: "مواقع ويب متجاوبة لنجاح أعمالك.",
      },
      link: `/${currentLang}/service/webdev`,
      btnKey: "web",
    },
    {
      icon: "📢",
      title: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      text: {
        en: "Grow your brand online effectively.",
        ar: "نمِّ علامتك التجارية رقمياً بفعالية.",
      },
      link: `/${currentLang}/service/digital-marketing`,
      btnKey: "marketing",
    },
    {
      icon: "⚡",
      title: { en: "App Development", ar: "تطوير التطبيقات" },
      text: {
        en: "Build powerful and scalable mobile apps.",
        ar: "بناء تطبيقات جوال قوية وقابلة للتوسع.",
      },
      link: `/${currentLang}/service/appdev`,
      btnKey: "appDev",
    },
    {
      icon: "🎨",
      title: { en: "Graphic Design", ar: "تصميم جرافيك" },
      text: {
        en: "Creative visuals for your brand.",
        ar: "تصاميم إبداعية لعلامتك التجارية.",
      },
      link: `/${currentLang}/service/graphic-design`,
      btnKey: "design",
    },
    {
      icon: "🔧",
      title: { en: "IT Solutions", ar: "حلول تقنية المعلومات" },
      text: {
        en: "Reliable IT services for enterprises.",
        ar: "خدمات تقنية موثوقة للمؤسسات.",
      },
      link: `/${currentLang}/service/itsolutions`,
      btnKey: "it",
    },
    {
      icon: "📊",
      title: { en: "ERP Solutions", ar: "حلول ERP" },
      text: {
        en: "Comprehensive business management systems.",
        ar: "أنظمة شاملة لإدارة الأعمال.",
      },
      link: `/${currentLang}/service/erp`,
      btnKey: "erp",
    },
    {
      icon: "🔄",
      title: { en: "Odoo ERP", ar: "أودو ERP" },
      text: {
        en: "Open-source ERP implementation and customization.",
        ar: "تنفيذ وتخصيص نظام أودو ERP مفتوح المصدر.",
      },
      link: `/${currentLang}/service/odoo-erp`,
      btnKey: "odoo",
    },
    {
      icon: "🛒",
      title: { en: "E-Commerce Solutions", ar: "حلول التجارة الإلكترونية" },
      text: {
        en: "Build powerful online stores and marketplaces.",
        ar: "بناء متاجر إلكترونية ومنصات تسوق قوية.",
      },
      link: `/${currentLang}/service/ecommerce`,
      btnKey: "ecommerce",
    },
    {
      icon: "☁️",
      title: { en: "Cloud Services", ar: "خدمات السحابة" },
      text: {
        en: "Scalable cloud infrastructure and solutions.",
        ar: "بنية تحتية سحابية قابلة للتوسع وحلول متكاملة.",
      },
      link: `/${currentLang}/service/cloud-services`,
      btnKey: "cloud",
    },
  ];

  // Values/Principles Section Data
  const values = [
    {
      icon: "👁️",
      title: t.vision.title,
      description: t.vision.description
    },
    {
      icon: "🎯",
      title: t.mission.title,
      description: t.mission.description
    },
    {
      icon: "👥",
      title: t.team.title,
      description: t.team.description
    },
    {
      icon: "🚩",
      title: t.goal.title,
      description: t.goal.description
    }
  ];

  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section 
        className={styles.heroSection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>
            {t.heroTitle}
          </h1>
          <p className={styles.heroSubtitle}>
            {t.heroSubtitle}
          </p>
          <p className={styles.heroExtra}>
            {t.heroExtra}
          </p>
        </div>
      </section>

      {/* 🧬 Story Section */}
      <section 
        className={styles.storySection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.storyOverlay}></div>
        <div
          className={styles.storyWrapper}
          style={{
            flexDirection: currentLang === "ar" ? "row-reverse" : "row",
          }}
        >
          <div className={styles.storyText}>
            <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
            <p className={styles.storyParagraph}>{t.history}</p>
            <p className={styles.storyParagraph}>{t.aboutUs}</p>
          </div>
          <div className={styles.storyImage}>
            <img src="/about.png" alt="Our Story" />
          </div>
        </div>
      </section>

      {/* 🎯 Values & Principles Section */}
      <section 
        className={styles.valuesSection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.valuesOverlay}></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.valuesTitle}>
            {currentLang === "en" ? "Our Values & Principles" : "قيمنا ومبادئنا"}
          </h2>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div
                key={index}
                className={styles.valueCard}
              >
                <div className={styles.valueIcon}>
                  {value.icon}
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section 
        className={styles.servicesSection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.servicesOverlay}></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2 className={styles.servicesTitle}>
            {t.servicesTitle}
          </h2>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div
                key={i}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIcon}>
                  {s.icon}
                </div>
                <h3 className={styles.serviceTitle}>{s.title[currentLang]}</h3>
                <p className={styles.serviceText}>{s.text[currentLang]}</p>
                <button
                  className={styles.serviceButton}
                  onClick={() => router.push(s.link)}
                >
                  {t.buttons[s.btnKey]}
                </button>
                
              </div>
              
            ))}

            
          </div>
        </div>
      </section>
    </div>
  );
}