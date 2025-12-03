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
        color: "#000000",
        backgroundColor: "#FFFFFF",
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
            "radial-gradient(circle at 20% 80%, rgba(55, 157, 215, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(55, 157, 215, 0.1) 0%, transparent 50%)",
          zIndex: 1,
        }}
      />

      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Introduction Section */}
        <div className="container mb-5">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-10 text-center">
              <h5 className="display-4 mb-3 fw-bold" style={{ color: "#379DD7", fontSize: "0.5rem !important" }}>
                {t.introTitle}
              </h5>

              <div className="position-relative mb-4">
                <h3
                  className="fs-2 mb-4 fw-semibold"
                  style={{ color: "#379DD7" }}
                >
                  {/* {t.introSubtitle} */}
                </h3>
                <div
                  style={{
                    height: "3px",
                    background:
                      "linear-gradient(90deg, transparent, #2fa4e8ff, transparent)",
                    width: "200px",
                    margin: "0 auto",
                  }}
                />
              </div>

              <p
                className="fs-5 mx-auto"
                style={{
                  maxWidth: "800px",
                  lineHeight: "1.8",
                  textAlign: lang === "ar" ? "right" : "left",
                  backgroundColor: "rgba(55, 157, 215, 0.05)",
                  padding: "2rem",
                  borderRadius: "20px",
                  border: "1px solid rgba(55, 157, 215, 0.2)",
                  color: "#000000",
                }}
              >
                {t.introDescription}
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
                    backgroundColor: "#FFFFFF",
                    border: "1px solid rgba(55, 157, 215, 0.3)",
                    borderRadius: "25px",
                    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.1)",
                    overflow: "hidden",
                    color: "#000000",
                    padding: "2rem 1.5rem",
                    transition: "all 0.3s ease",
                  }}
                >
                  {/* Icon Container */}
                  <div
                    style={{
                      padding: "1rem",
                      marginBottom: "1.5rem",
                      background: "rgba(55, 157, 215, 0.1)",
                      borderRadius: "20px",
                      display: "inline-block",
                    }}
                  >
                    <div style={{ color: "#379DD7" }}>
                      {f.icon}
                    </div>
                  </div>

                  {/* Title */}
                  <h5
                    className="mb-3 fw-bold"
                    style={{
                      color: "#379DD7",
                      fontSize: "1.25rem",
                    }}
                  >
                    {f.title}
                  </h5>

                  {/* Description */}
                  <p
                    className="m-0"
                    style={{
                      fontSize: "0.95rem",
                      lineHeight: "1.6",
                      color: "#000000",
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