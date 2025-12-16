"use client";

export default function TargetMarkets({ lang = "en" }) {
  const isRTL = lang === "ar";

  const content = {
    heading: {
      en: "Target Markets",
      ar: "الأسواق المستهدفة",
    },
    items: [
      {
        title: { en: "Small to Medium Enterprises (SMEs)", ar: "المؤسسات الصغيرة والمتوسطة" },
        description: {
          en: "Helping businesses optimize operations with cost-effective technology solutions tailored to their specific needs.",
          ar: "مساعدة الشركات على تحسين العمليات باستخدام حلول تقنية فعالة من حيث التكلفة.",
        },
        image: "/target-market/smes.png",
      },
      {
        title: { en: "Retail Businesses", ar: "شركات التجزئة" },
        description: {
          en: "Implementing inventory, POS, and CRM systems to boost sales and customer satisfaction.",
          ar: "تنفيذ أنظمة المخزون ونقاط البيع وإدارة علاقات العملاء.",
        },
        image: "/target-market/retail.png",
      },
      {
        title: { en: "Logistics & Transportation", ar: "اللوجستيات والنقل" },
        description: {
          en: "Optimizing route planning, fleet management, and real-time tracking.",
          ar: "تحسين تخطيط المسارات وإدارة الأساطيل والتتبع الفوري.",
        },
        image: "/target-market/LT.png",
      },
      {
        title: { en: "Government Agencies", ar: "الجهات الحكومية" },
        description: {
          en: "Enhancing public services and streamlining operations with modern technology.",
          ar: "تحسين الخدمات العامة وتبسيط العمليات باستخدام التكنولوجيا.",
        },
        image: "/target-market/GA.png",
      },
      {
        title: { en: "Healthcare Providers", ar: "مقدمو الرعاية الصحية" },
        description: {
          en: "Improving patient care, medical records, and data security.",
          ar: "تحسين رعاية المرضى وإدارة السجلات الطبية وأمن البيانات.",
        },
        image: "/target-market/healthcare.png",
      },
      {
        title: { en: "Manufacturing Companies", ar: "شركات التصنيع" },
        description: {
          en: "Delivering IoT and automation solutions for production efficiency.",
          ar: "تقديم حلول إنترنت الأشياء والأتمتة لرفع كفاءة الإنتاج.",
        },
        image: "/target-market/mc.png",
      },
    ],
  };

  return (
    <section
      style={{
        padding: "4rem 1rem",
        backgroundColor: "#fff",
        direction: isRTL ? "rtl" : "ltr",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        {/* Heading */}
        <h2
          style={{
            textAlign: "center",
            fontWeight: 700,
            marginBottom: "3rem",
          }}
        >
          {content.heading[lang]}
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "2rem",
          }}
        >
          {content.items.map((item, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #e5e7eb",
                borderRadius: "10px",
                padding: "2rem 1.5rem",
                textAlign: "center",
                transition: "all 0.3s ease",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.boxShadow =
                  "0 10px 25px rgba(0,0,0,0.08)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.boxShadow = "none")
              }
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title[lang]}
                style={{
                  width: "120px",
                  height: "120px",
                  objectFit: "contain",
                  marginBottom: "1.5rem",
                }}
              />

              {/* Title */}
              <h2
                style={{
                  fontSize: "1.1rem",
                  fontWeight: 700,
                  marginBottom: "0.75rem",
                }}
              >
                {item.title[lang]}
              </h2>

              {/* Description */}
              <p
                style={{
                  fontSize: "0.9rem",
                  color: "#555",
                  lineHeight: "1.6",
                }}
              >
                {item.description[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
