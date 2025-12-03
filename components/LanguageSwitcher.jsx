// components/LanguageSwitcher.jsx
"use client";

import React from "react";
import Link from "next/link";

export default function LanguageSwitcher({ lang, showFlag = true, showText = false }) {
  const otherLang = lang === "ar" ? "en" : "ar";
  
  if (showFlag && !showText) {
    return (
      <Link 
        href={`/${otherLang}`}
        className="flag-only-switcher"
        title={otherLang === "ar" ? "العربية" : "English"}
      >
        {otherLang === "ar" ? (
          <img src="/saudi.png" alt="Saudi Flag" className="flag-icon-only" />
        ) : (
          <img src="/usa.png" alt="USA Flag" className="flag-icon-only" />
        )}
      </Link>
    );
  }
  
  return (
    <Link 
      href={`/${otherLang}`}
      className={`language-switcher ${showFlag ? 'flag-language-switcher' : 'text-language-switcher'}`}
    >
      {showFlag ? (
        <>
          {otherLang === "ar" ? (
            <>
              <img src="/saudi.png" alt="Saudi Flag" className="flag-icon" />
              {showText && <span className="flag-text">العربية</span>}
            </>
          ) : (
            <>
              <img src="/usa.png" alt="USA Flag" className="flag-icon" />
              {showText && <span className="flag-text">English</span>}
            </>
          )}
        </>
      ) : (
        <span className="language-text">{otherLang === "ar" ? "العربية" : "English"}</span>
      )}
    </Link>
  );
}