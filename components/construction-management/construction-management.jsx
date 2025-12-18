'use client';

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import styles from "./construction-management.module.css";

export default function ERPConstructionManagement({ resolvedParams }) {
  const params = useParams();
  const lang = params?.lang || resolvedParams?.lang || "en";
  
  const [activeSection, setActiveSection] = useState("construction");
  const [activeFaq, setActiveFaq] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const content = {
    en: {
      hero: {
        title: "Enterprise Management System: Complete Solution for All Sectors",
        subtitle: "Discover how Odoo business solutions provide integrated ERP experience for construction, real estate, and logistics.",
        cta: "Get Free Consultation Now!",
        book: "Book an Appointment"
      },
      sectors: {
        construction: "Construction Sector",
        realEstate: "Real Estate Sector", 
        logistics: "Logistics Sector"
      },
      construction: {
        title: "Construction Company Management System - From Chaos to Operational Excellence",
        problems: {
          title: "Main Challenges Facing Construction Companies:",
          items: [
            "Complex project and cost tracking",
            "Delayed invoicing and payment follow-up",
            "Lack of centralized task distribution system",
            "Poor workforce monitoring at work sites",
            "Loss or mismanagement of construction materials",
            "Inaccurate timelines and schedules",
            "Poor communication between departments",
            "Challenges in financial reporting preparation",
            "Delays in procurement and payment processes",
            "Difficulty tracking equipment and inventory"
          ]
        },
        solutions: {
          title: "Solutions Provided by Odoo System for Construction Companies",
          items: [
            "Unified departments through single dashboard",
            "Construction accounting software: precisely links projects and expenses",
            "Construction project management software: for planning and monitoring execution phases",
            "Workforce and equipment tracking system: for task distribution and equipment location",
            "Ability to issue detailed financial reports in real-time",
            "Complete automation of procurement and order procedures",
            "Accurate scheduling for each project phase"
          ]
        }
      },
      realEstate: {
        title: "Enterprise Management System in Real Estate Sector",
        subtitle: "Smart Management of Units and Clients",
        problems: {
          title: "Main Challenges Facing Real Estate Companies:",
          items: [
            "Data fragmentation between sales and rental contracts",
            "Weak follow-up of clients and prospects",
            "Delays in receiving payments or installments",
            "Problems in managing rented properties",
            "Lack of electronic display and marketing system",
            "Absence of centralized property database",
            "Shortage of analytical sales reports",
            "Effort duplication in maintenance and request follow-up",
            "Problems in storing client documents and contracts",
            "Difficulty measuring sales team performance"
          ]
        },
        solutions: {
          title: "How Odoo Solutions Help You?",
          items: [
            "Real Estate CRM: to follow up clients and convert them to deals",
            "Rental property management software: enables maintenance scheduling and rent collection",
            "Integrated real estate marketing system linked to website",
            "Electronic contract management and signing through system",
            "Team performance reports and sales analytics",
            "Automatic alerts for payment and installment dates"
          ]
        }
      },
      logistics: {
        title: "Logistics Services Sector",
        subtitle: "Tracking, Delivery, and Complete Control",
        problems: {
          title: "Main Challenges Facing Logistics Companies:",
          items: [
            "Weak shipment and order tracking",
            "System incompatibility with branches and warehouses",
            "Inventory and storage problems",
            "Delays in delivering shipments to customers",
            "Lack of real-time inventory reports",
            "Poor communication with delivery team",
            "Difficulty calculating accurate shipping costs",
            "Problems in returns management",
            "Delays in issuing or collecting invoices",
            "Failure to link system with e-store"
          ]
        },
        solutions: {
          title: "How Odoo Solutions Help You?",
          items: [
            "ERP shipment tracking system: monitors each shipment in its stages",
            "Logistics inventory management software: improves inventory and reduces waste",
            "ERP solutions for delivery companies: links all operations in one platform",
            "Instant reports on orders and delivery",
            "Electronic returns management and customer service",
            "Easy integration with e-commerce platforms"
          ]
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        questions: [
          {
            question: "What is Odoo system?",
            answer: "Odoo is an integrated Enterprise Resource Planning (ERP) software that provides comprehensive solutions for managing all aspects of business operations."
          },
          {
            question: "How does Odoo serve the real estate sector?",
            answer: "Odoo offers integrated solutions for real estate management including property management, client follow-up, contract management, and analytical reports."
          },
          {
            question: "What's the difference between Odoo and traditional systems?",
            answer: "Odoo stands out with its high flexibility, complete integration, and ease of use compared to complex traditional systems."
          }
        ]
      },
      finalCta: {
        title: "Ready for Real Digital Transformation?",
        subtitle: "Contact us now to get a free consultation and see how Odoo business solutions can change your work methods for the better.",
        cta: "Get Free Consultation Now!",
        whatsapp: "WhatsApp",
        book: "Book Appointment"
      }
    },
    ar: {
      hero: {
        title: "برنامج إدارة الشركات: الحل المتكامل لجميع القطاعات",
        subtitle: "اكتشف كيف تقدم حلول Odoo للأنشطة التجارية تجربة ERP متكاملة للمقاولات، العقارات، والخدمات اللوجستية.",
        cta: "احصل على استشارة مجانية الآن!",
        book: "احجز موعدًا"
      },
      sectors: {
        construction: "قطاع المقاولات",
        realEstate: "قطاع العقارات",
        logistics: "قطاع الخدمات اللوجستية"
      },
      construction: {
        title: "برنامج إدارة الشركات في قطاع المقاولات من الفوضى إلى الإتقان التشغيلي",
        problems: {
          title: "أهم المشاكل التي تواجه شركات المقاولات:",
          items: [
            "تعقيد تتبع المشاريع وتكاليفها",
            "تأخر إصدار الفواتير ومتابعة المدفوعات",
            "غياب نظام مركزي لتوزيع المهام",
            "ضعف متابعة العمالة في مواقع العمل",
            "فقدان مواد البناء أو سوء إدارتها",
            "عدم دقة الجداول الزمنية",
            "ضعف التواصل بين الإدارات المختلفة",
            "تحديات في إعداد التقارير المالية",
            "تأخير في عمليات الصرف والمشتريات",
            "صعوبة تتبع المعدات والمخزون"
          ]
        },
        solutions: {
          title: "الحلول التي يقدمها نظام Odoo لشركات المقاولات",
          items: [
            "توحيد الأقسام عبر لوحة تحكم واحدة",
            "برنامج محاسبة للمقاولات: يربط بين المشاريع والمصروفات بدقة",
            "برنامج إدارة المشاريع الإنشائية: لتخطيط ومراقبة مراحل التنفيذ",
            "نظام تتبع العمال والمعدات: لتوزيع المهام ومعرفة مواقع المعدات",
            "إمكانية إصدار تقارير مالية مفصلة في الوقت الفعلي",
            "أتمتة كاملة لإجراءات المشتريات والطلبات",
            "جدولة زمنية دقيقة لكل مرحلة من مراحل المشروع"
          ]
        }
      },
      realEstate: {
        title: "برنامج إدارة الشركات في قطاع العقارات",
        subtitle: "إدارة ذكية للوحدات والعملاء",
        problems: {
          title: "أهم المشاكل التي تواجه شركات العقارات:",
          items: [
            "تشتت البيانات بين عقود البيع والإيجار",
            "ضعف في متابعة العملاء والمهتمين",
            "تأخير في استلام الدفعات أو الأقساط",
            "مشاكل في إدارة العقارات المؤجرة",
            "عدم وجود نظام إلكتروني للعرض والتسويق",
            "غياب قاعدة بيانات مركزية للعقارات",
            "نقص في التقارير التحليلية للمبيعات",
            "تكرار الجهد في متابعة الصيانة والطلبات",
            "مشاكل في حفظ مستندات العملاء والعقود",
            "صعوبة في قياس أداء فريق المبيعات"
          ]
        },
        solutions: {
          title: "كيف تساعدك حلول Odoo؟",
          items: [
            "برنامج CRM عقاري: لمتابعة العملاء وتحويلهم إلى صفقات",
            "برنامج إدارة العقارات المؤجرة: يتيح جدولة الصيانة وتحصيل الإيجارات",
            "نظام تسويق عقاري متكامل وربطه بالموقع الإلكتروني",
            "إدارة العقود إلكترونيًا وتوقيعها عبر النظام",
            "تقارير أداء الفريق والتحليلات البيعية",
            "تنبيهات تلقائية بموعد الدفعات والأقساط"
          ]
        }
      },
      logistics: {
        title: "قطاع الخدمات اللوجستية",
        subtitle: "تتبع، تسليم، وتحكم كامل",
        problems: {
          title: "أهم المشاكل التي تواجه الشركات اللوجستية:",
          items: [
            "ضعف تتبع الشحنات والطلبات",
            "عدم توافق النظام مع الفروع والمخازن",
            "مشاكل في الجرد والتخزين",
            "التأخير في تسليم الشحنات للعملاء",
            "عدم وجود تقارير آنية عن المخزون",
            "ضعف في التواصل مع فريق التوصيل",
            "صعوبة احتساب تكاليف الشحن الدقيقة",
            "مشاكل في إدارة المرتجعات",
            "تأخير في إصدار الفواتير أو تحصيلها",
            "عدم ربط النظام بالمتجر الإلكتروني"
          ]
        },
        solutions: {
          title: "كيف تساعدك حلول Odoo؟",
          items: [
            "نظام تتبع الشحنات ERP: يتابع كل شحنة في مراحلها",
            "برنامج إدارة المخزون اللوجستي: لتحسين الجرد وتقليل الفاقد",
            "حلول ERP لشركات التوصيل: لربط جميع العمليات في منصة واحدة",
            "تقارير فورية عن الطلبات والتوصيل",
            "إدارة المرتجعات وخدمة العملاء إلكترونيًا",
            "ربط النظام بمنصات التجارة الإلكترونية بسهولة"
          ]
        }
      },
      faq: {
        title: "الأسئلة الشائعة",
        questions: [
          {
            question: "ما هو نظام Odoo؟",
            answer: "نظام Odoo هو برنامج متكامل لإدارة موارد المؤسسات (ERP) يقدم حلولاً شاملة لإدارة جميع جوانب الأعمال التجارية."
          },
          {
            question: "كيف يخدم Odoo قطاع العقارات؟",
            answer: "يقدم Odoo حلولاً متكاملة لإدارة العقارات تشمل إدارة الممتلكات، متابعة العملاء، إدارة العقود، والتقارير التحليلية."
          },
          {
            question: "ما الفرق بين Odoo والأنظمة التقليدية؟",
            answer: "يتميز Odoo بمرونته العالية، تكامله الكامل، وسهولة الاستخدام مقارنة بالأنظمة التقليدية المعقدة."
          }
        ]
      },
      finalCta: {
        title: "هل أنت مستعد لتحول رقمي فعلي؟",
        subtitle: "تواصل معنا الآن لتحصل على استشارة مجانية واستعرض كيف يمكن لحلول Odoo للأنشطة التجارية أن تُغير طريقة عملك نحو الأفضل.",
        cta: "احصل على استشارة مجانية الآن!",
        whatsapp: "واتساب",
        book: "احجز موعدًا"
      }
    }
  };

  const t = content[lang];

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const getProblemIcon = () => {
    return lang === 'ar' ? '⚠️' : '❗';
  };

  const getSolutionIcon = () => {
    return lang === 'ar' ? '✓' : '✅';
  };

  const getSectorIcon = (sector) => {
    const icons = {
      construction: '🏗️',
      realEstate: '🏠', 
      logistics: '🚚'
    };
    return icons[sector];
  };

  return (
    <div className={`${styles.container} ${lang === "ar" ? styles.rtl : styles.ltr} ${isVisible ? styles.visible : ''}`}>
      
      {/* Progress Bar */}
      <div className={styles.progressBar}>
        <div 
          className={styles.progressFill} 
          style={{ width: `${scrollProgress}%` }}
        ></div>
      </div>

      {/* Hero Section - MOVED TO TOP */}
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
            <div className={styles.badge}>
              {lang === 'ar' ? 'حلول متكاملة' : 'Integrated Solutions'}
            </div>
            <h1 className={styles.heroTitle}>
              {t.hero.title}
            </h1>
            <p className={styles.heroSubtitle}>
              {t.hero.subtitle}
            </p>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statNumber}>40%</span>
                <span className={styles.statLabel}>{lang === 'ar' ? 'توفير في الوقت' : 'Time Savings'}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>99%</span>
                <span className={styles.statLabel}>{lang === 'ar' ? 'دقة في البيانات' : 'Data Accuracy'}</span>
              </div>
              <div className={styles.stat}>
                <span className={styles.statNumber}>24/7</span>
                <span className={styles.statLabel}>{lang === 'ar' ? 'متابعة مستمرة' : 'Real-time Tracking'}</span>
              </div>
            </div>
            <div className={styles.heroActions}>
              <button className={`${styles.primaryButton} ${styles.pulseAnimation}`}>
                <span className={styles.buttonIcon}>📧</span>
                {t.hero.cta}
              </button>
              <button className={styles.secondaryButton}>
                <span className={styles.buttonIcon}>📅</span>
                {t.hero.book}
              </button>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.dashboardPreview}>
              <div className={styles.dashboardHeader}>
                <div className={styles.dashboardDots}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              <div className={styles.dashboardAnimation}>
                <div className={styles.chartContainer}>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                  <div className={styles.chartBar}></div>
                </div>
                <div className={styles.metricsGrid}>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                  <div className={styles.metric}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className={styles.scrollIndicator}>
          <div className={styles.scrollArrow}></div>
        </div>
      </section>

      {/* Sectors Navigation - MOVED AFTER HERO */}
      <section className={styles.sectorsNav}>
        <div className={styles.sectorsContainer}>
          <button
            className={`${styles.sectorButton} ${activeSection === "construction" ? styles.active : ""} ${styles.slideInUp}`}
            onClick={() => setActiveSection("construction")}
            style={{ animationDelay: '0.1s' }}
          >
            <span className={styles.sectorIcon}>{getSectorIcon('construction')}</span>
            <div className={styles.sectorText}>
              <span className={styles.sectorName}>{t.sectors.construction}</span>
              <span className={styles.sectorDesc}>{lang === 'ar' ? 'إدارة المشاريع والموارد' : 'Project & Resource Management'}</span>
            </div>
          </button>
          <button
            className={`${styles.sectorButton} ${activeSection === "realEstate" ? styles.active : ""} ${styles.slideInUp}`}
            onClick={() => setActiveSection("realEstate")}
            style={{ animationDelay: '0.2s' }}
          >
            <span className={styles.sectorIcon}>{getSectorIcon('realEstate')}</span>
            <div className={styles.sectorText}>
              <span className={styles.sectorName}>{t.sectors.realEstate}</span>
              <span className={styles.sectorDesc}>{lang === 'ar' ? 'المبيعات والتأجير والعقود' : 'Sales, Rental & Contracts'}</span>
            </div>
          </button>
          <button
            className={`${styles.sectorButton} ${activeSection === "logistics" ? styles.active : ""} ${styles.slideInUp}`}
            onClick={() => setActiveSection("logistics")}
            style={{ animationDelay: '0.3s' }}
          >
            <span className={styles.sectorIcon}>{getSectorIcon('logistics')}</span>
            <div className={styles.sectorText}>
              <span className={styles.sectorName}>{t.sectors.logistics}</span>
              <span className={styles.sectorDesc}>{lang === 'ar' ? 'الشحن والتوصيل والمخازن' : 'Shipping, Delivery & Warehousing'}</span>
            </div>
          </button>
        </div>
      </section>

      {/* Construction Section */}
      {activeSection === "construction" && (
        <section className={styles.sectorSection}>
          <div className={styles.sectorHeader}>
            <div className={styles.sectorBadge}>
              {lang === 'ar' ? 'قطاع المقاولات' : 'Construction Sector'}
            </div>
            <h2 className={`${styles.sectorTitle} ${styles.fadeIn}`}>
              {t.construction.title}
            </h2>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.problemsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.problemsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>⚠️</span>
                  {t.construction.problems.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'التحديات التي نواجهها معًا' : 'Challenges we solve together'}
                </p>
              </div>
              <div className={styles.problemsGrid}>
                {t.construction.problems.items.map((problem, index) => (
                  <div
                    key={index}
                    className={`${styles.problemCard} ${styles.slideInLeft}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.problemHeader}>
                      <div className={styles.problemIcon}>{getProblemIcon()}</div>
                      <span className={styles.problemNumber}>0{index + 1}</span>
                    </div>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.solutionsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.solutionsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>🚀</span>
                  {t.construction.solutions.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'الحلول المتكاملة لدعم عملك' : 'Integrated solutions for your business'}
                </p>
              </div>
              <div className={styles.solutionsGrid}>
                {t.construction.solutions.items.map((solution, index) => (
                  <div
                    key={index}
                    className={`${styles.solutionCard} ${styles.slideInRight}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.solutionHeader}>
                      <div className={styles.solutionIcon}>{getSolutionIcon()}</div>
                      <span className={styles.solutionNumber}>0{index + 1}</span>
                    </div>
                    <p>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sectorCTA}>
            <div className={styles.ctaCard}>
              <h3>{lang === 'ar' ? 'جاهز للتحول الرقمي؟' : 'Ready to Transform?'}</h3>
              <p>{lang === 'ar' ? 'ابدأ رحلتك نحو التميز التشغيلي' : 'Start your journey to operational excellence'}</p>
              <button className={`${styles.ctaButton} ${styles.pulseAnimation}`}>
                {t.hero.book}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Real Estate Section */}
      {activeSection === "realEstate" && (
        <section className={styles.sectorSection}>
          <div className={styles.sectorHeader}>
            <div className={styles.sectorBadge}>
              {lang === 'ar' ? 'قطاع العقارات' : 'Real Estate Sector'}
            </div>
            <h2 className={`${styles.sectorTitle} ${styles.fadeIn}`}>
              {t.realEstate.title}
            </h2>
            <p className={`${styles.sectorSubtitle} ${styles.fadeIn}`}>
              {t.realEstate.subtitle}
            </p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.problemsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.problemsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>⚠️</span>
                  {t.realEstate.problems.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'التحديات التي نواجهها معًا' : 'Challenges we solve together'}
                </p>
              </div>
              <div className={styles.problemsGrid}>
                {t.realEstate.problems.items.map((problem, index) => (
                  <div
                    key={index}
                    className={`${styles.problemCard} ${styles.slideInLeft}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.problemHeader}>
                      <div className={styles.problemIcon}>{getProblemIcon()}</div>
                      <span className={styles.problemNumber}>0{index + 1}</span>
                    </div>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.solutionsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.solutionsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>🚀</span>
                  {t.realEstate.solutions.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'الحلول المتكاملة لدعم عملك' : 'Integrated solutions for your business'}
                </p>
              </div>
              <div className={styles.solutionsGrid}>
                {t.realEstate.solutions.items.map((solution, index) => (
                  <div
                    key={index}
                    className={`${styles.solutionCard} ${styles.slideInRight}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.solutionHeader}>
                      <div className={styles.solutionIcon}>{getSolutionIcon()}</div>
                      <span className={styles.solutionNumber}>0{index + 1}</span>
                    </div>
                    <p>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sectorCTA}>
            <div className={styles.ctaCard}>
              <h3>{lang === 'ar' ? 'جاهز للتحول الرقمي؟' : 'Ready to Transform?'}</h3>
              <p>{lang === 'ar' ? 'ابدأ رحلتك نحو التميز التشغيلي' : 'Start your journey to operational excellence'}</p>
              <button className={`${styles.ctaButton} ${styles.pulseAnimation}`}>
                {t.hero.book}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* Logistics Section */}
      {activeSection === "logistics" && (
        <section className={styles.sectorSection}>
          <div className={styles.sectorHeader}>
            <div className={styles.sectorBadge}>
              {lang === 'ar' ? 'قطاع الخدمات اللوجستية' : 'Logistics Sector'}
            </div>
            <h2 className={`${styles.sectorTitle} ${styles.fadeIn}`}>
              {t.logistics.title}
            </h2>
            <p className={`${styles.sectorSubtitle} ${styles.fadeIn}`}>
              {t.logistics.subtitle}
            </p>
          </div>

          <div className={styles.contentGrid}>
            <div className={styles.problemsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.problemsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>⚠️</span>
                  {t.logistics.problems.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'التحديات التي نواجهها معًا' : 'Challenges we solve together'}
                </p>
              </div>
              <div className={styles.problemsGrid}>
                {t.logistics.problems.items.map((problem, index) => (
                  <div
                    key={index}
                    className={`${styles.problemCard} ${styles.slideInLeft}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.problemHeader}>
                      <div className={styles.problemIcon}>{getProblemIcon()}</div>
                      <span className={styles.problemNumber}>0{index + 1}</span>
                    </div>
                    <p>{problem}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.solutionsSection}>
              <div className={styles.sectionHeader}>
                <h3 className={`${styles.solutionsTitle} ${styles.fadeIn}`}>
                  <span className={styles.titleIcon}>🚀</span>
                  {t.logistics.solutions.title}
                </h3>
                <p className={styles.sectionSubtitle}>
                  {lang === 'ar' ? 'الحلول المتكاملة لدعم عملك' : 'Integrated solutions for your business'}
                </p>
              </div>
              <div className={styles.solutionsGrid}>
                {t.logistics.solutions.items.map((solution, index) => (
                  <div
                    key={index}
                    className={`${styles.solutionCard} ${styles.slideInRight}`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className={styles.solutionHeader}>
                      <div className={styles.solutionIcon}>{getSolutionIcon()}</div>
                      <span className={styles.solutionNumber}>0{index + 1}</span>
                    </div>
                    <p>{solution}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.sectorCTA}>
            <div className={styles.ctaCard}>
              <h3>{lang === 'ar' ? 'جاهز للتحول الرقمي؟' : 'Ready to Transform?'}</h3>
              <p>{lang === 'ar' ? 'ابدأ رحلتك نحو التميز التشغيلي' : 'Start your journey to operational excellence'}</p>
              <button className={`${styles.ctaButton} ${styles.pulseAnimation}`}>
                {t.hero.book}
              </button>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <div className={styles.sectionHeader}>
          <div className={styles.sectionBadge}>
            {lang === 'ar' ? 'الدعم والمساعدة' : 'Support & Help'}
          </div>
          <h2 className={`${styles.sectionTitle} ${styles.fadeIn}`}>{t.faq.title}</h2>
          <p className={styles.sectionSubtitle}>
            {lang === 'ar' ? 'إجابات على أسئلتك الأكثر شيوعاً' : 'Answers to your most common questions'}
          </p>
        </div>
        <div className={styles.faqGrid}>
          {t.faq.questions.map((item, index) => (
            <div
              key={index}
              className={`${styles.faqItem} ${styles.slideInUp} ${activeFaq === index ? styles.active : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                className={styles.faqQuestion}
                onClick={() => toggleFaq(index)}
              >
                <span className={styles.faqNumber}>0{index + 1}</span>
                <span className={styles.faqText}>{item.question}</span>
                <span className={styles.faqIcon}>
                  {activeFaq === index ? (lang === 'ar' ? '−' : '−') : (lang === 'ar' ? '+' : '+')}
                </span>
              </button>
              <div className={`${styles.faqAnswer} ${activeFaq === index ? styles.show : ''}`}>
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
            {lang === 'ar' ? 'ابدأ الآن' : 'Get Started'}
          </div>
          <h2 className={`${styles.ctaTitle} ${styles.fadeIn}`}>{t.finalCta.title}</h2>
          <p className={`${styles.ctaSubtitle} ${styles.fadeIn}`}>{t.finalCta.subtitle}</p>
          
          <div className={styles.featureGrid}>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>⚡</div>
              <span>{lang === 'ar' ? 'تنفيذ سريع' : 'Quick Implementation'}</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>🛠️</div>
              <span>{lang === 'ar' ? 'دعم فني متكامل' : 'Full Technical Support'}</span>
            </div>
            <div className={styles.feature}>
              <div className={styles.featureIcon}>📊</div>
              <span>{lang === 'ar' ? 'تقارير متقدمة' : 'Advanced Analytics'}</span>
            </div>
          </div>

          <div className={styles.ctaActions}>
            <button className={`${styles.ctaPrimary} ${styles.pulseAnimation}`}>
              <span className={styles.buttonIcon}>🎯</span>
              {t.finalCta.cta}
            </button>
            <button className={styles.ctaSecondary}>
              <span className={styles.buttonIcon}>💬</span>
              {t.finalCta.whatsapp}
            </button>
            <button className={styles.ctaTertiary}>
              <span className={styles.buttonIcon}>📅</span>
              {t.finalCta.book}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}