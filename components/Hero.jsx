"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  lang = "en",
  heroTitle,
  heroDescription,
}) {
  const [hover, setHover] = useState(false);
  const isRTL = lang === "ar";

  const buttonText = {
    en: "Get in Touch",
    ar: "تواصل معنا",
  };

  return (
    <section
      className="hero-section-wrapper"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background video */}
      <div className="hero-background-wrapper">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 1,
          }}
        />

        {/* Gradient overlay */}
        <div
          className="hero-gradient-overlay"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `linear-gradient(
      to right,
      rgba(44, 44, 44, 0.41) 0%,
      rgba(0, 0, 0, 0.95) 100%
    )`,
            zIndex: 2,
          }}
        />
      </div>

      {/* Content */}
      <div
        className="hero-content-wrapper"
        style={{
          textAlign: "center", // Center align all text
          alignItems: "center", // Center horizontally

          position: "relative",
          zIndex: 3,
          width: "100%",
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "200px 5% 60px",
          textAlign: isRTL ? "right" : "left",
        }}
      >
        {/* Title */}
        <motion.h2
          className="hero-main-title"
          style={{
            color: "#ffffff",
            fontSize: "clamp(1.3rem, 2.5vw, 1.5rem)",
            fontWeight: 600,
            lineHeight: 1.4,
            marginBottom: "1rem",
            fontFamily: "'Somar', sans-serif",
            textWrap: "balance",
                letterSpacing: "4.1px", // Tighter letter spacing

            maxWidth: "600px", // Add this line for equal width
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {heroTitle}
        </motion.h2>

        {/* Description */}
        <motion.p
          className="hero-main-description"
          style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: "clamp(1rem, 2.5vw, 1.5rem)",
            lineHeight: 1.8,
            marginBottom: "2.5rem",
            maxWidth: "600px",
            fontFamily: "'Somar', sans-serif",
            fontWeight: 400,
            textWrap: "pretty", // Alternative: "pretty" for better wrapping
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          {heroDescription}
        </motion.p>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        >
          <Link href={`/${lang}/contact-us`}>
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="hero-cta-button"
              style={{
                fontSize: "1.1rem",
                padding: "0.75rem 2rem",
                backgroundColor: "#3B82F6",
                color: "white",
                border: "none",
                borderRadius: "50px",
                fontWeight: 600,
                cursor: "pointer",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                transition: "all 0.3s ease",
                transform: hover ? "scale(1.05)" : "scale(1)",
                boxShadow: hover
                  ? "0 10px 25px rgba(37, 99, 235, 0.3)"
                  : "none",
              }}
            >
              <span>{buttonText[lang]}</span>
              <span
                style={{
                  display: "inline-block",
                  transition: "transform 0.3s ease",
                  transform: hover
                    ? `translateX(${isRTL ? "-5px" : "5px"})`
                    : "translateX(0)",
                }}
              >
                {isRTL ? "←" : "→"}
              </span>
            </button>
          </Link>
        </motion.div>
      </div>

      {/* Add responsive styles */}
      <style jsx>{`
        .hero-section-wrapper {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }

        .hero-background-wrapper {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }

        .hero-content-wrapper {
          position: relative;
          z-index: 3;
        }

        /* Override any Bootstrap or global styles */
        .hero-main-title {
          font-size: clamp(2.5rem, 5vw, 4rem) !important;
          font-weight: 700 !important;
          color: white !important;
          font-family: "Somar", sans-serif !important;
        }

        .hero-main-description {
          font-size: clamp(1rem, 2.5vw, 1.5rem) !important;
          color: rgba(255, 255, 255, 0.9) !important;
          font-family: "Somar", sans-serif !important;
          font-weight: 400 !important;
        }

        .hero-cta-button:hover {
          background-color: #2563eb !important;
        }

        @media (max-width: 768px) {
          .hero-content-wrapper {
            padding-top: 100px !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
          }

          .hero-main-title {
            font-size: clamp(2rem, 4vw, 3rem) !important;
          }

          .hero-main-description {
            font-size: clamp(0.9rem, 2vw, 1.2rem) !important;
            max-width: 100% !important;
          }
        }

        @media (max-width: 480px) {
          .hero-content-wrapper {
            padding-top: 80px !important;
          }

          .hero-cta-button {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>
    </section>
  );
}
