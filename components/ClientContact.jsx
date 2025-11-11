"use client";

import ContactForm from "@/components/ContactForm";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

export default function ContactUsClient({ lang }) {
  const isArabic = lang === "ar";

  const content = {
    en: {
      heroTitle: "Get in Touch",
      heroSubtitle: `We’d love to hear from you — whether it’s a question, feedback, or just to say hello.
Our team is dedicated to supporting you every step of the way.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "Address",
          value: "6931 King Fahd Road Branch, Al Rabwah District, Jeddah 21532",
          link: "https://www.google.com/maps",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "Phone",
          value: "+966539983393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "Email",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
        },
      ],
    },
    ar: {
      heroTitle: "تواصل معنا",
      heroSubtitle: `يسعدنا سماعك — سواء كان سؤالاً، ملاحظات، أو مجرد تحية.
فريقنا ملتزم بدعمك في كل خطوة على الطريق.`,
      contactInfo: [
        {
          icon: <FaMapMarkerAlt size={28} />,
          label: "العنوان",
          value: "السودي، الرياض، المملكة العربية السعودية",
          link: "https://www.google.com/maps",
        },
        {
          icon: <FaPhoneAlt size={28} />,
          label: "الهاتف",
          value: "+966539983393",
          link: "tel:+966539983393",
        },
        {
          icon: <FaEnvelope size={28} />,
          label: "البريد الإلكتروني",
          value: "info@nextfuture.com",
          link: "mailto:info@nextfuture.com",
        },
      ],
    },
  };

  const { heroTitle, heroSubtitle, contactInfo } = content[lang] || content.en;

  return (
    <div dir={isArabic ? "rtl" : "ltr"} style={{ fontFamily: "sans-serif" }}>
      {/* Hero Section */}
      <section
        style={{
          background: "#368ee1ff",
          color: "#fff",
          textAlign: "center",
          padding: "6rem 1.5rem",
        }}
      >
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>{heroTitle}</h1>
        <p style={{ fontSize: "1.25rem", maxWidth: "700px", margin: "auto", lineHeight: 1.6 }}>
          {heroSubtitle}
        </p>
      </section>

      {/* Contact Info */}
      <section
        style={{
          background: "#f5f7fa",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "2rem",
            maxWidth: "1100px",
            margin: "auto",
          }}
        >
          {contactInfo.map((info, i) => (
            <a
              key={i}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "none",
                background: "#fff",
                padding: "2rem",
                borderRadius: "12px",
                textAlign: "center",
                color: "#001233",
                boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
                transition: "transform 0.3s, box-shadow 0.3s",
              }}
            >
              <div style={{ marginBottom: "1rem" }}>{info.icon}</div>
              <h3 style={{ marginBottom: "0.5rem" }}>{info.label}</h3>
              <p>{info.value}</p>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section
        style={{
          background: "#368ee1ff",
          color: "#fff",
          padding: "4rem 1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "auto",
            borderRadius: "12px",
            padding: "2rem",
            background: "#0d1b3d",
            boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
          }}
        >
          <ContactForm lang={lang} />
        </div>
      </section>
    </div>
  );
}
