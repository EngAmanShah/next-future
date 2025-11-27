"use client";
import { useState } from "react";
import {
  LucideCpu,
  LucideDatabase,
  LucideGlobe,
  LucideBarChart2,
  LucideRocket,
  LucideLightbulb,
} from "lucide-react";

export default function WhyChooseUs({ lang }) {
  const [hovered, setHovered] = useState(null);

  const translations = {
    en: {
      introTitle: "About Next Future Technology",
      introSubtitle:
        "Empowering Businesses Through Innovation, Technology, and Strategy",
      introDescription:
        "We believe the future of business lies at the intersection of technology and creativity. From startups to enterprises, Next Future helps brands redefine how they connect, grow, and succeed in a digital-first world.",
      title: "Why Choose Next Future?",
      description:
        "We provide innovative and tailored solutions across technology, marketing, and design, helping your business achieve measurable growth.",
      features: [
        {
          title: "Creative & Strategic",
          description:
            "Our work combines design innovation with data-driven strategies to maximize impact.",
        },
        {
          title: "Multi-Industry Expertise",
          description:
            "We have proven experience across technology, real estate, retail, healthcare, and more.",
        },
        {
          title: "Bilingual & Global Reach",
          description:
            "We craft solutions in both English and Arabic, enabling global accessibility.",
        },
        {
          title: "Results-Driven",
          description:
            "Every project is designed to deliver measurable growth and tangible ROI.",
        },
      ],
    },
    ar: {
      introTitle: "عن نكست فيوتشر للتكنولوجيا",
      introSubtitle:
        "تمكين الأعمال من خلال الابتكار والتكنولوجيا والاستراتيجية",
      introDescription:
        "نحن نؤمن بأن مستقبل الأعمال يكمن عند تقاطع التكنولوجيا والإبداع. من الشركات الناشئة إلى المؤسسات الكبرى، تساعد نكست فيوتشر العلامات التجارية على إعادة تعريف كيفية الاتصال والنمو والنجاح في عالم رقمي أولاً.",
      title: "لماذا تختار نكست فيوتشر؟",
      description:
        "نحن نقدم حلولًا مبتكرة ومصممة خصيصًا في مجالات التكنولوجيا والتسويق والتصميم، لمساعدة عملك على تحقيق نمو قابل للقياس.",
      features: [
        {
          title: "إبداعي واستراتيجي",
          description:
            "يعمل فريقنا على الجمع بين الابتكار في التصميم والاستراتيجيات القائمة على البيانات لتحقيق أقصى تأثير.",
        },
        {
          title: "خبرة متعددة الصناعات",
          description:
            "لدينا خبرة مثبتة في مجالات التكنولوجيا والعقارات والتجزئة والرعاية الصحية والمزيد.",
        },
        {
          title: "ثنائي اللغة والوصول العالمي",
          description:
            "نقوم بصياغة الحلول باللغتين الإنجليزية والعربية، مما يتيح الوصول العالمي.",
        },
        {
          title: "موجه نحو النتائج",
          description:
            "تم تصميم كل مشروع لتحقيق نمو قابل للقياس وعائد ملموس على الاستثمار.",
        },
      ],
    },
  };

  const t = translations[lang] || translations.en;

  const features = [
    { icon: <LucideCpu size={48} />, ...t.features[0] },
    { icon: <LucideDatabase size={48} />, ...t.features[1] },
    { icon: <LucideGlobe size={48} />, ...t.features[2] },
    { icon: <LucideBarChart2 size={48} />, ...t.features[3] },
  ];

  return (
    <section
      className="position-relative py-5"
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
        minHeight: "70vh",
        color: "white",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Pattern */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background:
            "radial-gradient(circle at 20% 80%, rgba(120, 119, 198, 0.3) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Introduction Section */}
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <div className="mb-4">
                {/* <LucideRocket size={60} color="#FFD700" className="mb-3" />
                <LucideLightbulb size={60} color="#FFD700" className="mb-3 mx-3" />
                <LucideCpu size={60} color="#FFD700" className="mb-3" /> */}
              </div>

              <h2 className="display-4 mb-3 fw-bold text-white">
                {t.introTitle}
              </h2>

              <div className="position-relative mb-4">
                <h3
                  className="fs-2 mb-4 fw-semibold"
                  style={{ color: "#199cd9ff" }}
                >
                  {t.introSubtitle}
                </h3>
                <div
                  style={{
                    height: "3px",
                    background:
                      "linear-gradient(90deg, transparent, #199cd9ff, transparent)",
                    width: "200px",
                    margin: "0 auto",
                  }}
                />
              </div>

              <p
                className="fs-5 mx-auto text-light"
                style={{
                  maxWidth: "800px",
                  lineHeight: "1.8",
                  textAlign: lang === "ar" ? "right" : "left",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  padding: "2rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {t.introDescription}
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section Header */}
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8 text-center">
              <h2 className="display-5 mb-4 fw-bold text-white">{t.title}</h2>
              <p
                className="fs-5 text-light mb-0"
                style={{
                  lineHeight: "1.6",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  backdropFilter: "blur(10px)",
                  padding: "1.5rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                {t.description}
              </p>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="container">
          <div className="row g-4 justify-content-center">
            {features.map((f, idx) => (
              <div className="col-12 col-md-6 col-lg-3" key={idx}>
                <div
                  className="text-center h-100 position-relative"
                  style={{
                    background:
                      hovered === idx
                        ? "linear-gradient(135deg, rgba(255, 255, 255, 0.25), rgba(255, 255, 255, 0.15))"
                        : "linear-gradient(135deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0.05))",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                    border:
                      hovered === idx
                        ? "2px solid rgba(10, 129, 202, 0.8)"
                        : "1px solid rgba(255, 255, 255, 0.3)",
                    borderRadius: "25px",
                    boxShadow:
                      hovered === idx
                        ? "0 15px 35px rgba(0, 0, 0, 0.3), 0 0 20px rgba(255, 215, 0, 0.4)"
                        : "0 8px 25px rgba(0, 0, 0, 0.2)",
                    cursor: "pointer",
                    overflow: "hidden",
                    color: "white",
                    padding: "2rem 1.5rem",
                    transition:
                      "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
                    transform:
                      hovered === idx
                        ? "translateY(-10px) scale(1.02)"
                        : "translateY(0) scale(1)",
                  }}
                  onMouseEnter={() => setHovered(idx)}
                  onMouseLeave={() => setHovered(null)}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      padding: "1rem",
                      marginBottom: "1.5rem",
                      background: "rgba(255, 255, 255, 0.1)",
                      borderRadius: "20px",
                      display: "inline-block",
                      transition: "all 0.3s ease",
                      transform:
                        hovered === idx
                          ? "scale(1.1) rotate(5deg)"
                          : "scale(1) rotate(0deg)",
                    }}
                  >
                    <div
                      style={{ color: hovered === idx ? "#0a87daff" : "white" }}
                    >
                      {f.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h5
                    className="mb-3 fw-bold"
                    style={{
                      color: hovered === idx ? "#0a87daff" : "white",
                      fontSize: "1.25rem",
                      transition: "color 0.3s ease",
                    }}
                  >
                    {f.title}
                  </h5>

                  {/* Description - Always visible but with hover enhancement */}
                  <p
                    className="m-0 text-light"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      opacity: hovered === idx ? 1 : 0.8,
                      transform:
                        hovered === idx ? "translateY(0)" : "translateY(10px)",
                      transition: "all 0.3s ease",
                      maxHeight: hovered === idx ? "200px" : "0",
                      overflow: "hidden",
                    }}
                  >
                    {f.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
