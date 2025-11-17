"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./property-management.module.css";
import Image from "next/image";

export default function PropertyManagementPage({ resolvedParams }) {
  const params = useParams();
  const lang = params?.lang || resolvedParams?.lang || "ar";

  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleDownload = () => {
    window.open(
      "https://drive.google.com/uc?export=download&id=1L4LBpcWwPekj2T3k1cGgjOqU4iQrD_1m",
      "_blank"
    );
  };

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const content = {
    ar: {
      hero: {
        title: "نظام إدارة الأملاك والعقارات",
        subtitle:
          "اكتشف كيف يقدّم Odoo نظام ERP مفتوح المصدر شامل لإدارة المبيعات، المحاسبة، المخزون، التسويق، والموارد البشرية. تعرف على مميزاته وفوائده وكيفية استخدامه لتطوير أعمالك بكل سهولة وتوافق مع رؤية المملكة 2030.",
        cta: "تحميل الملف التعريفي",
        book: "احجز موعدًا",
      },
      whatIsSystem: {
        title: "ما هو نظام إدارة الأملاك ؟",
        description:
          "هو وحدة برمجية مصممة خصيصًا لأصحاب العقارات شركات الوساطة العقارية والمطورين العقاريين تمكّنهم من إدارة كافة جوانب الأملاك في مكان واحد. يعمل النظام على أتمتة العمليات الرئيسية ويمنحك رؤية شاملة حول وضع عقاراتك وأرباحك بشكل لحظي.",
      },
      features: {
        title: "🌟 المزايا الرئيسية للنظام",
        items: [
          {
            icon: "🏢",
            title: "إدارة العقارات والعقود",
            description:
              "تسجيل جميع الوحدات (شقق – فلل – مكاتب – محلات) مع تفاصيلها الكاملة. إدارة عقود الإيجار ومتابعة تواريخ البداية والانتهاء والتنبيهات التلقائية للتجديد. ربط العقود بالمستأجرين مع سجلات دفع واضحة.",
          },
          {
            icon: "💰",
            title: "إدارة الفوترة والمدفوعات",
            description:
              "إنشاء فواتير تلقائية شهرية أو سنوية بناءً على شروط العقد. متابعة حالات الدفع (مدفوع – متأخر – مستحق). ربط مباشر مع النظام المحاسبي في أودو لضمان دقة البيانات المالية.",
          },
          {
            icon: "🔧",
            title: "إدارة الصيانة والخدمات",
            description:
              "تسجيل طلبات الصيانة من المستأجرين بسهولة. جدولة أعمال الصيانة الدورية وربطها بالموردين أو الفرق الفنية. تتبع التكاليف وربطها بالعقار المحدد.",
          },
          {
            icon: "📊",
            title: "تقارير ولوحات تحكم تفاعلية",
            description:
              "تقارير مالية تفصيلية حول الإيرادات والإيجارات المستحقة. تحليل نسب الإشغال والشواغر لكل عقار. لوحات تحكم بصرية (Dashboards) لمتابعة الأداء في الوقت الحقيقي.",
          },
          {
            icon: "🔗",
            title: "تكامل مع باقي وحدات أودو",
            description:
              "ربط مع المحاسبة لمتابعة التدفقات المالية. ربط مع إدارة العملاء (CRM) لتعزيز العلاقة مع المستأجرين والمستثمرين. ربط مع إدارة المشاريع في حال وجود أعمال بناء أو تطوير عقاري.",
          },
        ],
      },
      benefits: {
        title: "💡 الفوائد العملية",
        items: [
          {
            title: "⚙️ تقليل الوقت والجهد",
            description: "تقليل الوقت والجهد في متابعة العقارات يدويًا.",
          },
          {
            title: "🤝 شفافية أكبر",
            description: "ضمان شفافية أكبر بين المالك والمستأجر.",
          },
          {
            title: "🚀 زيادة الكفاءة",
            description: "زيادة الكفاءة التشغيلية وخفض الأخطاء البشرية.",
          },
          {
            title: "📈 تحسين القرارات",
            description:
              "تحسين اتخاذ القرارات بفضل التقارير الفورية والتحليلات المتقدمة.",
          },
        ],
      },
      audience: {
        title: "🎯 لمن يناسب هذا النظام؟",
        items: [
          {
            icon: "🏗️",
            title: "شركات التطوير العقاري",
            description:
              "لإدارة المشاريع والوحدات السكنية ومتابعة الأداء المالي والتشغيلي بسهولة.",
          },
          {
            icon: "🏢",
            title: "شركات الوساطة والتسويق العقاري",
            description:
              "لتحسين تجربة العملاء وإدارة العقود والعمولات ضمن نظام موحد ودقيق.",
          },
          {
            icon: "🏠",
            title: "ملاك العقارات الفردية",
            description:
              "لمن يملك أكثر من وحدة ويرغب في إدارة الإيجارات والمدفوعات بسهولة ووضوح.",
          },
          {
            icon: "🏛️",
            title: "الجهات الحكومية والمؤسسات",
            description:
              "لإدارة الأصول المتعددة وتتبع العقود والمصاريف بدقة وشفافية عالية.",
          },
        ],
      },
      faq: {
        title: "الأسئلة الشائعة عن أنظمة ERP",
        questions: [
          {
            question: "ما هو نظام ERP؟",
            answer:
              "هو نظام برمجي يساعد الشركات على إدارة جميع عملياتها مثل المحاسبة، الموارد البشرية، المخزون، والمبيعات من خلال منصة موحدة.",
          },
          {
            question: "هل يمكن استخدام ERP في الشركات الصغيرة؟",
            answer:
              "نعم، يمكن للشركات الصغيرة استخدام أنظمة ERP المصممة خصيصًا لاحتياجاتها والتي تكون غالبًا أكثر مرونة وتكلفة أقل.",
          },
          {
            question: "هل يعتبر Excel نظام ERP؟",
            answer:
              "لا، Excel هو أداة جداول بيانات وليس نظام ERP متكاملاً. أنظمة ERP توفر تكاملًا كاملاً بين جميع الأقسام وإدارة مركزية للبيانات.",
          },
        ],
      },
      finalCta: {
        title: "جاهز لتحوّل أعمالك؟",
        subtitle:
          "استخدم قوة أنظمة ERP لإدارة جميع جوانب عملك من منصة واحدة. من المحاسبة إلى إدارة المخزون والمبيعات، تخلَّص من تعقيدات الأنظمة المتعددة وابدأ العمل بكفاءة وذكاء.",
        cta: "ابدأ الآن",
        whatsapp: "تواصل معنا",
      },
    },
    en: {
      hero: {
        title: "Property Management System",
        subtitle:
          "Discover how Odoo provides comprehensive open-source ERP system for property management, accounting, inventory, marketing, and HR management.",
        cta: "Download Profile",
        book: "Book Appointment",
      },
      whatIsSystem: {
        title: "What is Property Management System?",
        description:
          "It is a software module specifically designed for property owners, real estate brokerage companies, and real estate developers, enabling them to manage all aspects of properties in one place.",
      },
      features: {
        title: "🌟 Key System Features",
        items: [
          {
            icon: "🏢",
            title: "Property & Contract Management",
            description:
              "Register all units (apartments - villas - offices - shops) with complete details. Manage rental contracts and track start/end dates with automatic renewal alerts.",
          },
          {
            icon: "💰",
            title: "Billing & Payment Management",
            description:
              "Create automatic monthly or annual invoices based on contract terms. Track payment status (paid - late - due). Direct integration with Odoo accounting system.",
          },
          {
            icon: "🔧",
            title: "Maintenance & Services Management",
            description:
              "Easily record maintenance requests from tenants. Schedule periodic maintenance work and link it to suppliers or technical teams.",
          },
          {
            icon: "📊",
            title: "Interactive Reports & Dashboards",
            description:
              "Detailed financial reports on revenues and due rents. Analyze occupancy and vacancy rates for each property. Visual dashboards for real-time performance monitoring.",
          },
          {
            icon: "🔗",
            title: "Integration with Other Odoo Modules",
            description:
              "Link with accounting to track financial flows. Connect with CRM to enhance relationships with tenants and investors.",
          },
        ],
      },
      benefits: {
        title: "💡 Practical Benefits",
        items: [
          {
            title: "⚙️ Time & Effort Reduction",
            description:
              "Reduce time and effort in manually tracking properties.",
          },
          {
            title: "🤝 Greater Transparency",
            description:
              "Ensure greater transparency between owner and tenant.",
          },
          {
            title: "🚀 Increased Efficiency",
            description:
              "Increase operational efficiency and reduce human errors.",
          },
          {
            title: "📈 Better Decision Making",
            description:
              "Improve decision making thanks to instant reports and advanced analytics.",
          },
        ],
      },
      audience: {
        title: "🎯 Who is this system for?",
        items: [
          {
            icon: "🏗️",
            title: "Real Estate Development Companies",
            description:
              "To manage projects, residential units, and track financial and operational performance easily.",
          },
          {
            icon: "🏢",
            title: "Real Estate Brokerage & Marketing Companies",
            description:
              "To improve customer experience and manage contracts and commissions within a unified and accurate system.",
          },
          {
            icon: "🏠",
            title: "Individual Property Owners",
            description:
              "For those who own multiple units and want to manage rentals and payments easily and clearly.",
          },
          {
            icon: "🏛️",
            title: "Government Entities & Institutions",
            description:
              "To manage multiple assets and track contracts and expenses with high accuracy and transparency.",
          },
        ],
      },
      faq: {
        title: "Frequently Asked Questions about ERP Systems",
        questions: [
          {
            question: "What is an ERP system?",
            answer:
              "It is a software system that helps companies manage all their operations such as accounting, human resources, inventory, and sales through a unified platform.",
          },
          {
            question: "Can ERP be used in small companies?",
            answer:
              "Yes, small companies can use ERP systems specifically designed for their needs, which are often more flexible and cost less.",
          },
          {
            question: "Is Excel considered an ERP system?",
            answer:
              "No, Excel is a spreadsheet tool, not an integrated ERP system. ERP systems provide complete integration between all departments and centralized data management.",
          },
        ],
      },
      finalCta: {
        title: "Ready to transform your business?",
        subtitle:
          "Use the power of ERP systems to manage all aspects of your business from one platform.",
        cta: "Start Now",
        whatsapp: "Contact Us",
      },
    },
  };

  const t = content[lang] || content.ar;

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div
      className={`${styles.container} ${
        lang === "ar" ? styles.rtl : styles.ltr
      } ${isVisible ? styles.visible : ""}`}
    >
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div
          className={styles.progressFill}
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section */}
      <section className={styles.hero} id="home">
        <div className={styles.heroBackground}>
          <div className={styles.heroGradient}></div>
          <div className={styles.heroAnimation}>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
            <div className={styles.floatingElement}></div>
          </div>
        </div>
        <div className={styles.heroContent}>
          <div className={styles.heroText}>
            <div className={styles.badge}>Next future Real State</div>
            <h1 className={styles.heroTitle}>{t.hero.title}</h1>
            <p className={styles.heroSubtitle}>{t.hero.subtitle}</p>

            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>1</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "نظام متكامل" : "Integrated System"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>2</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "إدارة مركزية" : "Central Management"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>3</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "تقارير فورية" : "Instant Reports"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>17</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "وحدة متكاملة" : "Integrated Modules"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>5</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "مزايا رئيسية" : "Key Features"}
                </span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>6</span>
                <span className={styles.statLabel}>
                  {lang === "ar" ? "فوائد عملية" : "Practical Benefits"}
                </span>
              </div>
            </div>

            <div className={styles.heroActions}>
              <button
                className={`${styles.primaryButton} ${styles.pulseAnimation}`}
                onClick={handleDownload}
              >
                <span className={styles.buttonIcon}>📥</span>
                {t.hero.cta}
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>📅</span>
                {t.hero.book}
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <Image
              src="/technology.jpg"
              alt="Property Management System"
              width={600}
              height={400}
              className={styles.propertyImage}
              priority
            />
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* What is System Section */}
      <section className={styles.section}>
        <div className={styles.contentGrid}>
          <div className={styles.contentText}>
            <h2 className={`${styles.contentTitle} ${styles.fadeIn}`}>
              {t.whatIsSystem.title}
            </h2>
            <p className={`${styles.contentDescription} ${styles.fadeIn}`}>
              {t.whatIsSystem.description}
            </p>
            <div className={styles.heroActions}>
              <button
                className={`${styles.primaryButton} ${styles.pulseAnimation}`}
                onClick={handleDownload}
              >
                <span className={styles.buttonIcon}>📋</span>
                {lang === "ar"
                  ? "بروفايل إدارة الأملاك والعقارات"
                  : "Property Management Profile"}
              </button>
            </div>
          </div>
          <div className={styles.contentVisual}>
            <Image
              src="/managment.jpg"
              alt="Property Management Dashboard"
              width={500}
              height={350}
              className={styles.featureImage}
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.features.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "اكتشف المميزات التي تجعل نظامنا الخيار الأمثل لإدارة أملاكك"
              : "Discover the features that make our system the ideal choice for managing your properties"}
          </p>
        </div>
        <div className={styles.featuresGrid}>
          {t.features.items.map((feature, index) => (
            <div
              key={index}
              className={`${styles.featureCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.featureIcon}>{feature.icon}</div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className={styles.section}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.benefits.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "تعرف على الفوائد التي ستحققها لنشاطك العقاري"
              : "Discover the benefits your real estate business will achieve"}
          </p>
        </div>
        <div className={styles.benefitsGrid}>
          {t.benefits.items.map((benefit, index) => (
            <div
              key={index}
              className={`${styles.benefitItem} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className={styles.benefitTitle}>{benefit.title}</h3>
              <p className={styles.benefitDescription}>{benefit.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Target Audience Section */}
      <section className={`${styles.section} ${styles.sectionLight}`}>
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.audience.title}
          </h2>
          <p className={`${styles.sectionSubtitle} ${styles.fadeIn}`}>
            {lang === "ar"
              ? "نظام مصمم خصيصًا لمختلف أنواع العملاء في القطاع العقاري"
              : "A system specifically designed for various types of clients in the real estate sector"}
          </p>
        </div>
        <div className={styles.audienceGrid}>
          {t.audience.items.map((audience, index) => (
            <div
              key={index}
              className={`${styles.audienceCard} ${styles.slideInUp}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={styles.audienceIcon}>{audience.icon}</div>
              <h3 className={styles.audienceTitle}>{audience.title}</h3>
              <p className={styles.audienceDescription}>
                {audience.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className={`${styles.section} ${styles.faqSection}`}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            {lang === "ar" ? "الدعم والمساعدة" : "Support & Help"}
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>
            {t.faq.title}
          </h2>
          <p className={styles.sectionSubtitle}>
            {lang === "ar"
              ? "إجابات على أسئلتك الأكثر شيوعاً"
              : "Answers to your most common questions"}
          </p>
        </div>
        <div className={styles.faqGrid}>
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${styles.slideInUp} ${
                activeFaq === index ? styles.active : ""
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span className={styles.faqNumber}>0{index + 1}</span>
                <span className={styles.faqText}>{item.question}</span>
                <span className={styles.faqIcon}>
                  {activeFaq === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`${styles.faqAnswer} ${
                  activeFaq === index ? styles.show : ""
                }`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className={styles.finalCTA}>
        <div className={styles.ctaBackground}>
          <div className={styles.ctaAnimation}></div>
        </div>
        <div className={styles.ctaContent}>
          <div className={styles.ctaBadge}>
            {lang === "ar"
              ? "نحن هنا لمساعدتك.. كل ما يتطلبه الأمر خطوة"
              : "We are here to help you.. All it takes is one step"}
          </div>
          <h2 className={`${styles.ctaTitle} ${styles.fadeIn}`}>
            {t.finalCta.title}
          </h2>
          <p className={`${styles.ctaSubtitle} ${styles.fadeIn}`}>
            {t.finalCta.subtitle}
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <span>
                {lang === "ar" ? "تنفيذ سريع" : "Quick Implementation"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🛠️</div>
              <span>
                {lang === "ar" ? "دعم فني متكامل" : "Full Technical Support"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📊</div>
              <span>
                {lang === "ar" ? "تقارير متقدمة" : "Advanced Analytics"}
              </span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🔒</div>
              <span>
                {lang === "ar" ? "أمان وحماية" : "Security & Protection"}
              </span>
            </div>
          </div>

          <div className={styles.ctaActions}>
            <button className={`${styles.ctaPrimary} ${styles.pulseAnimation}`}>
              <span className={styles.buttonIcon}>🚀</span>
              {t.finalCta.cta}
            </button>
            <button className={styles.ctaSecondary}>
              <span className={styles.buttonIcon}>💬</span>
              {t.finalCta.whatsapp}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
