"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import styles from "./aboutus.module.css";

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
      
      aboutUs: "Next Future Information Technology is a leading company in information technology, software development, and business solutions in marketing, accounting, and management. The company boasts a team of experts, engineers, and developers with high expertise and efficiency in software development and information technology. We are committed to building long-term relationships with our clients through delivering high-quality services and exceptional after-sales support.",
      
      vision: {
        title: "Our Vision",
        description: "Delivering software solutions with global standards, and achieving prominent presence to pioneer digital transformation."
      },
      
      mission: {
        title: "Our Mission", 
        description: "Activating innovation in the digital solutions industry, enhancing profitability, increasing effectiveness, and elevating the overall quality of our partners' operations to achieve their goals and exceed their ambitions."
      },
      
      goal: {
        title: "Our Goal",
        description: "Our goal aligns with Saudi Vision 2030, aspiring for our nation to become a globally successful model in the field of technology."
      },

      servicesTitle: "Our Services",
      storyHeading: "Our Story",
      valuesTitle: "Our Values & Principles",
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
        cloud: "Cloud Services",
        learnMore: "Learn More"
      },
    },
    ar: {
      heroTitle: "عن نيكست فيوتشر للتقنية",
      heroSubtitle: "تمكين الشركات من خلال الابتكار والتكنولوجيا والاستراتيجية.",
      heroExtra: "نؤمن أن مستقبل الأعمال يكمن في تقاطع التقنية مع الإبداع. من الشركات الناشئة إلى المؤسسات الكبيرة، تساعد نيكست فيوتشر العلامات التجارية على إعادة تعريف كيفية التواصل والنمو والنجاح في عالم رقمي أولًا.",
      history: "تأسست شركة نيكست فيوتشر لتقنية المعلومات لمساعدة الشركات على الازدهار والتألق في العصر الرقمي. تحت قيادة فريق من الخبراء متعددي المهارات في تطوير المواقع والتطبيقات، التصميم الجرافيكي، التسويق الرقمي، وحلول تكنولوجيا المعلومات — تحول نيكست فيوتشر الأفكار المبتكرة إلى نتائج ملموسة. نحن نؤمن بأن لكل شركة القدرة على التفوق، ولهذا نمزج بين الإبداع والاستراتيجية والتقنية لبناء مواقع حديثة، وتطبيقات متطورة، وهويات بصرية قوية، وحملات تسويقية تحقق أثرًا حقيقيًا. مهمتنا بسيطة — رفع علامتك التجارية إلى أقصى إمكاناتها. سواء كنت في بداية مسيرتك أو تمتلك مؤسسة راسخة، فإن نيكست فيوتشر هي شريكك الموثوق للوضوح والإبداع والنمو في كل مرحلة من رحلتك.",
      
      aboutUs: "نيكست فيوتشر لتقنية المعلومات هي شركة رائدة في مجال تقنية المعلومات وتطوير البرمجيات وحلول الأعمال التسويقية والمحاسبية والإدارية. وتتميز الشركة بفريق عمل مكون من مجموعة من الخبراء والمهندسين والمطورين ذوي خبرة وكفاءة عالية في مجال تطوير البرمجيات وتكنولوجيا المعلومات. نحن نحرص على بناء علاقات طويلة المدى مع عملائنا من خلال تقديم خدمات عالية الجودة وخدمات ما بعد البيع المتميزة.",
      
      vision: {
        title: "رؤيتنا",
        description: "تقديم حلول برمجية بمقاييس عالمية، والتواجد المميز لتحقيق السبق في التحول الرقمي."
      },
      
      mission: {
        title: "رسالتنا",
        description: "تفعيل الابتكار في صناعة الحلول الرقمية، وتعزيز الربحية وزيادة الفاعلية والارتقاء بالجودة الشاملة في أعمال شركائنا لتحقيق أهدافهم وتجاوز طموحاتهم."
      },
      
      goal: {
        title: "هدفنا",
        description: "هدفنا التزام برؤية المملكة 2030 بأن تكون بلادنا نموذجاً عالمياً ناجحاً في مجال التكنولوجيا."
      },

      servicesTitle: "خدماتنا",
      storyHeading: "قصتنا",
      valuesTitle: "قيمنا ومبادئنا",
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
        cloud: "خدمات السحابة",
        learnMore: "اعرف المزيد"
      },
    },
  };

  const t = content[currentLang];

  const services = [
    {
      icon: "📱",
      title: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
      text: {
        en: "Custom apps for iOS and Android with modern frameworks and technologies.",
        ar: "تطبيقات مخصصة لنظامي iOS و Android بإطار عمل وتقنيات حديثة.",
      },
      link: ``,
      btnKey: "mobile",
    },
    {
      icon: "💻",
      title: { en: "Web Development", ar: "تطوير الويب" },
      text: {
        en: "Responsive websites and web applications for business success.",
        ar: "مواقع ويب وتطبيقات ويب متجاوبة لنجاح أعمالك.",
      },
      link: ``,
      btnKey: "web",
    },
    {
      icon: "📢",
      title: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      text: {
        en: "Grow your brand online with data-driven marketing strategies.",
        ar: "نمِّ علامتك التجارية رقمياً باستراتيجيات تسويق مدفوعة بالبيانات.",
      },
      link: ``,
      btnKey: "marketing",
    },
    {
      icon: "🎨",
      title: { en: "Graphic Design", ar: "التصميم الجرافيكي" },
      text: {
        en: "Creative visuals and brand identity that make your business stand out.",
        ar: "تصاميم إبداعية وهويات بصرية تجعل عملك متميزاً.",
      },
      link: ``,
      btnKey: "design",
    },
    {
      icon: "🔧",
      title: { en: "IT Solutions", ar: "حلول تقنية المعلومات" },
      text: {
        en: "Comprehensive IT services and infrastructure solutions for enterprises.",
        ar: "خدمات تقنية معلومات شاملة وحلول بنية تحتية للمؤسسات.",
      },
      link: ``,
      btnKey: "it",
    },
    {
      icon: "📊",
      title: { en: "ERP Solutions", ar: "حلول ERP" },
      text: {
        en: "Integrated business management systems to streamline your operations.",
        ar: "أنظمة إدارة أعمال متكاملة لتبسيط عملياتك.",
      },
      link: ``,
      btnKey: "erp",
    },
  ];

  // Values/Principles Section Data with images
  const values = [
    {
      image: "/vision.png",
      title: t.vision.title,
      description: t.vision.description
    },
    {
      image: "/mission.png", 
      title: t.mission.title,
      description: t.mission.description
    },
    {
      image: "/goal.png",
      title: t.goal.title,
      description: t.goal.description
    }
  ];

  const handleServiceClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBackground}></div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <h1 className={styles.heroTitle}>
              {t.heroTitle}
            </h1>
            <p className={styles.heroSubtitle}>
              {t.heroSubtitle}
            </p>
            <p className={styles.heroExtra}>
              {t.heroExtra}
            </p>
            <button 
              className={styles.ctaButton}
              onClick={() => router.push(`/${currentLang}/contact`)}
            >
              {currentLang === "en" ? "Get In Touch" : "تواصل معنا"}
            </button>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}></div>
              <h4>{currentLang === "en" ? "Innovation" : "الابتكار"}</h4>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}></div>
              <h4>{currentLang === "en" ? "Strategy" : "الإستراتيجية"}</h4>
            </div>
            <div className={styles.floatingCard}>
              <div className={styles.cardIcon}></div>
              <h4>{currentLang === "en" ? "Technology" : "التقنية"}</h4>
            </div>
          </div>
        </div>
      </section>

      {/* 🧬 Story Section */}
      <section className={styles.storySection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.storyHeading}</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <p className={styles.storyParagraph}>{t.history}</p>
              <p className={styles.storyParagraph}>{t.aboutUs}</p>
              {/* <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <h3>100+</h3>
                  <p>{currentLang === "en" ? "Projects Completed" : "مشروع مكتمل"}</p>
                </div>
                <div className={styles.statItem}>
                  <h3>5+</h3>
                  <p>{currentLang === "en" ? "Years Experience" : "سنوات من الخبرة"}</p>
                </div>
                <div className={styles.statItem}>
                  <h3>99+</h3>
                  <p>{currentLang === "en" ? "Happy Clients" : "عميل سعيد"}</p>
                </div>
              </div> */}
            </div>
            <div className={styles.storyImage}>
              <img src="/about.png" alt="Our Story" />
              <div className={styles.imageOverlay}></div>
            </div>
          </div>
        </div>
      </section>

      {/* 🎯 Values & Principles Section */}
      <section className={styles.valuesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.valuesTitle}</h2>
            <div className={styles.titleUnderline}></div>
          </div>
          <div className={styles.valuesGrid}>
            {values.map((value, index) => (
              <div
                key={index}
                className={styles.valueCard}
              >
                <div className={styles.valueImageContainer}>
                  <img 
                    src={value.image} 
                    alt={value.title}
                    className={styles.valueImage}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'block';
                    }}
                  />
                  <div className={styles.valueFallbackIcon} style={{display: 'none'}}>
                    {value.title.includes('Vision') ? '👁️' : 
                     value.title.includes('Mission') ? '🎯' : '🚩'}
                  </div>
                </div>
                <h3 className={styles.valueTitle}>{value.title}</h3>
                <p className={styles.valueDescription}>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>{t.servicesTitle}</h2>
            <div className={styles.titleUnderline}></div>
            <p className={styles.sectionSubtitle}>
              {currentLang === "en" 
                ? "Comprehensive digital solutions for your business growth" 
                : "حلول رقمية شاملة لنمو أعمالك"}
            </p>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((service, index) => (
              <div
                key={index}
                className={styles.serviceCard}
              >
                <div className={styles.serviceIconContainer}>
                  <span className={styles.serviceIcon}>{service.icon}</span>
                </div>
                <h3 className={styles.serviceTitle}>{service.title[currentLang]}</h3>
                <p className={styles.serviceText}>{service.text[currentLang]}</p>
                <button
                  className={styles.serviceButton}
                  onClick={() => handleServiceClick(service.link)}
                >
                  {t.buttons.learnMore}
                  <span className={styles.buttonArrow}>
                    {currentLang === "en" ? "→" : "←"}
                  </span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}