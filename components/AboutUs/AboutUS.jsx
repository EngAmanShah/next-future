"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";
import {
  FaMobileAlt,
  FaLaptopCode,
  FaBullhorn,
  FaPaintBrush,
  FaServer,
  FaDatabase,
  FaShoppingCart,
  FaCloud,
  FaCogs
} from "react-icons/fa";
import { SiOdoo } from "react-icons/si";
import { motion } from "framer-motion";
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
      icon: <FaMobileAlt size={50} />,
      title: { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
      text: {
        en: "Custom apps for iOS and Android.",
        ar: "تطبيقات مخصصة لنظامي iOS و Android.",
      },
      link: "/service/mobile-app",
      btnKey: "mobile",
    },
    {
      icon: <FaLaptopCode size={50} />,
      title: { en: "Web Development", ar: "تطوير الويب" },
      text: {
        en: "Responsive websites for business success.",
        ar: "مواقع ويب متجاوبة لنجاح أعمالك.",
      },
      link: "/service/webdev",
      btnKey: "web",
    },
    {
      icon: <FaBullhorn size={50} />,
      title: { en: "Digital Marketing", ar: "التسويق الرقمي" },
      text: {
        en: "Grow your brand online effectively.",
        ar: "نمِّ علامتك التجارية رقمياً بفعالية.",
      },
      link: "/service/digital-marketing",
      btnKey: "marketing",
    },
    {
      icon: <FaMobileAlt size={50} />,
      title: { en: "App Development", ar: "تطوير التطبيقات" },
      text: {
        en: "Build powerful and scalable mobile apps.",
        ar: "بناء تطبيقات جوال قوية وقابلة للتوسع.",
      },
      link: "/service/appdev",
      btnKey: "appDev",
    },
    {
      icon: <FaPaintBrush size={50} />,
      title: { en: "Graphic Design", ar: "تصميم جرافيك" },
      text: {
        en: "Creative visuals for your brand.",
        ar: "تصاميم إبداعية لعلامتك التجارية.",
      },
      link: "/service/graphic-design",
      btnKey: "design",
    },
    {
      icon: <FaServer size={50} />,
      title: { en: "IT Solutions", ar: "حلول تقنية المعلومات" },
      text: {
        en: "Reliable IT services for enterprises.",
        ar: "خدمات تقنية موثوقة للمؤسسات.",
      },
      link: "/service/itsolutions",
      btnKey: "it",
    },
    {
      icon: <FaDatabase size={50} />,
      title: { en: "ERP Solutions", ar: "حلول ERP" },
      text: {
        en: "Comprehensive business management systems.",
        ar: "أنظمة شاملة لإدارة الأعمال.",
      },
      link: "/service/erp",
      btnKey: "erp",
    },
    {
      icon: <SiOdoo size={50} />,
      title: { en: "Odoo ERP", ar: "أودو ERP" },
      text: {
        en: "Open-source ERP implementation and customization.",
        ar: "تنفيذ وتخصيص نظام أودو ERP مفتوح المصدر.",
      },
      link: "/service/odoo-erp",
      btnKey: "odoo",
    },
    {
      icon: <FaShoppingCart size={50} />,
      title: { en: "E-Commerce Solutions", ar: "حلول التجارة الإلكترونية" },
      text: {
        en: "Build powerful online stores and marketplaces.",
        ar: "بناء متاجر إلكترونية ومنصات تسوق قوية.",
      },
      link: "/service/ecommerce",
      btnKey: "ecommerce",
    },
    {
      icon: <FaCloud size={50} />,
      title: { en: "Cloud Services", ar: "خدمات السحابة" },
      text: {
        en: "Scalable cloud infrastructure and solutions.",
        ar: "بنية تحتية سحابية قابلة للتوسع وحلول متكاملة.",
      },
      link: "/service/cloud-services",
      btnKey: "cloud",
    },
  ];

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardHover = {
    hover: {
      y: -10,
      scale: 1.05,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  return (
    <div className={styles.container}>
      {/* ⭐ Hero Section */}
      <section 
        className={styles.heroSection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.heroOverlay}></div>
        <motion.div 
          className={styles.heroContent}
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.h1 className={styles.heroTitle} variants={fadeInUp}>
            {t.heroTitle}
          </motion.h1>
          <motion.p className={styles.heroSubtitle} variants={fadeInUp}>
            {t.heroSubtitle}
          </motion.p>
          <motion.p className={styles.heroExtra} variants={fadeInUp}>
            {t.heroExtra}
          </motion.p>
        </motion.div>
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
          <motion.div 
            className={styles.storyText}
            initial={{ opacity: 0, x: currentLang === "ar" ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className={styles.storyHeading}>{t.storyHeading}</h2>
            <p className={styles.storyParagraph}>{t.history}</p>
          </motion.div>
          <motion.div 
            className={styles.storyImage}
            initial={{ opacity: 0, x: currentLang === "ar" ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <img src="/about.png" alt="Our Story" />
          </motion.div>
        </div>
      </section>

      {/* 🧩 Services Section */}
      <section 
        className={styles.servicesSection}
        style={{ backgroundImage: "url('/bg6.png')" }}
      >
        <div className={styles.servicesOverlay}></div>
        <div style={{ position: "relative", zIndex: 2 }}>
          <motion.h2 
            className={styles.servicesTitle}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.servicesTitle}
          </motion.h2>
          <motion.div 
            className={styles.servicesGrid}
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.map((s, i) => (
              <motion.div
                key={i}
                className={styles.serviceCard}
                variants={fadeInUp}
                whileHover="hover"
              >
                <motion.div 
                  className={styles.serviceIcon}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {s.icon}
                </motion.div>
                <h3 className={styles.serviceTitle}>{s.title[currentLang]}</h3>
                <p className={styles.serviceText}>{s.text[currentLang]}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={styles.serviceButton}
                  onClick={() => router.push(s.link)}
                >
                  {t.buttons[s.btnKey]}
                </motion.button>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
}