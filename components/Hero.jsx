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

      {/* Dark overlay - FIXED */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 hero-overlay-custom"
        style={{ 
          backgroundColor: "rgba(0, 0, 0, 0.95)", 
          zIndex: 2 
        }}
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
        {/* Title as H1 */}
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

        {/* Description as P */}
        <motion.p
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
        </motion.p>

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

      {/* Add CSS styles to override global CSS */}
      <style jsx>{`
        /* Override global .hero-overlay with stronger selector */
        .hero-section .hero-overlay-custom {
          background-color: rgba(0, 0, 0, 0.62) !important;
          opacity: 1 !important;
        }
        
        /* Also target any div with position-absolute inside hero-section */
        .hero-section > div.position-absolute:not(.hero-video):not(.hero-content) {
          background-color: rgba(0, 0, 0, 0.85) !important;
          opacity: 1 !important;
        }
        
        .hero-section {
          position: relative;
          min-height: 100vh;
          width: 100%;
          overflow: hidden;
        }
        
        .hero-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        .hero-overlay-custom {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
        }
        
        /* Adjust for different screen sizes */
        @media (max-width: 768px) {
          .hero-content {
            margin-top: 100px;
          }
          
          .hero-title {
            font-size: clamp(1.8rem, 4vw, 2.5rem) !important;
          }
          
          .hero-description {
            font-size: clamp(0.9rem, 2vw, 1.1rem) !important;
          }
        }
        
        @media (max-width: 480px) {
          .hero-content {
            margin-top: 90px;
          }
          
          .hero-button {
            width: 100%;
            justify-content: center;
          }
        }
        
        /* Button hover effects */
        .hero-button:hover {
          background-color: #2563eb !important;
          box-shadow: 0 10px 25px rgba(37, 99, 235, 0.3) !important;
        }
      `}</style>
    </section>
  );
}