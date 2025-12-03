"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function HeroSection({
  text = "Get in Touch",
  lang = "en",
  heroTitle,
  heroDescription,
}) {
  const [hover, setHover] = useState(false);
  const isRTL = lang === "ar";

  // Button text translations
  const buttonText = {
    en: "Get in Touch",
    ar: "تواصل معنا",
  };

  return (
    <section
      className="position-relative w-100 d-flex align-items-center hero-section"
      style={{
        minHeight: "100vh",
        width: "100%",
        overflow: "hidden",
      }}
      dir={isRTL ? "rtl" : "ltr"}
    >
      {/* Background video */}
      <video
        src="/video.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="position-absolute top-0 start-0 w-100 h-100 hero-video"
        style={{ objectFit: "cover", zIndex: 1 }}
      >
        Your browser does not support the video tag.
      </video>

      {/* Dark overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 bg-dark hero-overlay"
        style={{ opacity: 0.7, zIndex: 2 }}
      />

      {/* Simple content container */}
      <div
        className="position-relative hero-content"
        style={{ 
          zIndex: 3,
          maxWidth: "800px",
          margin: "120px auto 0",
          padding: "0 5%",
          textAlign: isRTL ? "right" : "left",
          // Position based on language
          marginLeft: isRTL ? "auto" : "5%",
          marginRight: isRTL ? "5%" : "auto",
        }}
      >
        {/* Title */}
        <motion.h1
          className="hero-title"
          style={{
            color: "white",
            fontSize: "clamp(2rem, 5vw, 3.5rem)",
            fontWeight: "bold",
            lineHeight: 1.2,
            marginBottom: "1.5rem",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {heroTitle}
        </motion.h1>

        {/* Description */}
        <motion.div
          className="hero-description"
          style={{
            color: "white",
            fontSize: "clamp(1rem, 2.5vw, 1.4rem)",
            lineHeight: 1.7,
            marginBottom: "2.5rem",
            maxWidth: "90%",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          {heroDescription}
        </motion.div>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
        >
          <Link href={`/${lang}/contact-us`}>
            <button
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="btn fw-semibold shadow rounded-pill d-inline-flex align-items-center gap-2 hero-button"
              style={{
                fontSize: "clamp(16px, 2.5vw, 22px)",
                transition: "transform 0.15s ease, padding 0.15s ease",
                transform: hover ? "scale(1.05)" : "scale(1)",
                padding: "clamp(0.75rem, 2.5vw, 1rem) clamp(1.5rem, 3vw, 2.5rem)",
                cursor: "pointer",
                backgroundColor: "#3B82F6",
                color: "white",
                border: "none",
                position: "relative",
                overflow: "hidden",
              }}
            >
              <span>{buttonText[lang]}</span>
              <span
                className="arrow"
                style={{
                  display: "inline-block",
                  marginLeft: isRTL ? "0" : "8px",
                  marginRight: isRTL ? "8px" : "0",
                  opacity: hover ? 1 : 0.7,
                  transform: hover
                    ? "translateX(0)"
                    : isRTL
                    ? "translateX(5px)"
                    : "translateX(-5px)",
                  transition: "all 0.3s ease",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                {isRTL ? "←" : "→"}
              </span>
            </button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}