"use client";

export default function WhyChooseUs({ lang }) {
  const translations = {
    en: {
      introTitle: "Our Philosophy",
      introDescription: "The Future of business lies at the intersection of technology & creativity.\n\nFrom startups to enterprises, Next Future helps brands redefine how they connect, grow, and succeed in a digital-first world.",
    },
    ar: {
      introTitle: "عن نكست فيوتشر للتكنولوجيا",
      introDescription: "The Future of business lies at the intersection of technology & creativity.\n\nFrom startups to enterprises, Next Future helps brands redefine how they connect, grow, and succeed in a digital-first world.",
    },
  };

  const t = translations[lang] || translations.en;

  return (
    <section
      className="position-relative py-5 d-flex align-items-center justify-content-center"
      style={{
        direction: lang === "ar" ? "rtl" : "ltr",
        textAlign: lang === "ar" ? "right" : "left",
        minHeight: "70vh",
        backgroundImage: "url('/bg-logo.png')",
        backgroundSize: "contain",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundColor: "#ffffff",
      }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 text-center">
            <h2 className="mb-3" style={{ color: "#2fa4e8ff" }}>
              {t.introTitle}
            </h2>

            <div className="mb-4">
              <div
                style={{
                  height: "3px",
                  background: "linear-gradient(90deg, transparent, #2fa4e8ff, transparent)",
                  width: "200px",
                  margin: "0 auto",
                  color: "#2fa4e8ff",
                }}
              />
            </div>

            <p
              className="fs-5 mx-auto"
              style={{
                maxWidth: "800px",
                lineHeight: "1.8",
                padding: "2rem",
                borderRadius: "20px",
                color: "#00AAFF",
                whiteSpace: "pre-line",
              }}
            >
              {t.introDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}