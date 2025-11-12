"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaWhatsapp, FaPhone } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const hoverTimeout = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href) => {
    if (href === "/") return pathname === `/${lang}` || pathname === "/";
    return pathname === `/${lang}${href}`;
  };

  const menuItems = [
    { href: "/", label: lang === "ar" ? "الرئيسية" : "Home" },
    {
      href: "/service",
      label: lang === "ar" ? "الخدمات" : "Services",
      isDropdown: true,
    },
    { href: "/about-us", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact-us", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const whatsappNumber = "+966539983393";
  const callNumber = "+966539983393";

  const handleMouseEnter = () => {
    clearTimeout(hoverTimeout.current);
    setMegaMenuOpen(true);
  };

  const handleMouseLeave = () => {
    clearTimeout(hoverTimeout.current);
    hoverTimeout.current = setTimeout(() => {
      setMegaMenuOpen(false);
    }, 300);
  };

  // Services data with Arabic translations
  const servicesData = {
    appDevelopment: {
      title: {
        en: "App Development",
        ar: "تطوير التطبيقات",
      },
      services: [
        { en: "Mobile App Development", ar: "تطوير تطبيقات الجوال" },
        { en: "Android App Development", ar: "تطوير تطبيقات أندرويد" },
        { en: "iOS App Development", ar: "تطوير تطبيقات iOS" },
        { en: "Web App Development", ar: "تطوير تطبيقات الويب" },
        { en: "UX/UI Design", ar: "تصميم واجهة المستخدم وتجربة المستخدم" },
      ],
    },
    softwareDevelopment: {
      title: {
        en: "Software & Development",
        ar: "البرمجيات والتطوير",
      },
      services: [
        { en: "Backend Development", ar: "تطوير الواجهة الخلفية" },
        { en: "Frontend Development", ar: "تطوير الواجهة الأمامية" },
        { en: "Custom Software Development", ar: "تطوير البرمجيات المخصصة" },
        { en: "Software Testing", ar: "اختبار البرمجيات" },
        { en: "SAAS Development", ar: "تطوير البرمجيات كخدمة" },
        { en: "MVP Development", ar: "تطوير المنتج الأدنى القابل للتطبيق" },
        { en: "Software Consulting", ar: "استشارات البرمجيات" },
        { en: "Enterprise Software / ERP", ar: "برمجيات المؤسسات / تخطيط موارد المؤسسات" },
      ],
    },
    creativeDigital: {
      title: {
        en: "Creative & Digital",
        ar: "الإبداع والرقمي",
      },
      services: [
        { en: "Digital Marketing", ar: "التسويق الرقمي" },
        { en: "Graphic Design", ar: "التصميم الجرافيكي" },
        { en: "Profile & Logo Design", ar: "تصميم الملف الشخصي والشعارات" },
        { en: "Video Editing", ar: "مونتاج الفيديو" },
        { en: "Animation & Video Shooting", ar: "الرسوم المتحركة وتصوير الفيديو" },
      ],
    },
    itSocialMedia: {
      title: {
        en: "IT & Social Media",
        ar: "تكنولوجيا المعلومات ووسائل التواصل",
      },
      services: [
        { en: "Information Technology", ar: "تكنولوجيا المعلومات" },
        { en: "Social Media Marketing", ar: "التسويق عبر وسائل التواصل الاجتماعي" },
        { en: "Management Solutions", ar: "حلول الإدارة" },
      ],
    },
  };

  return (
    <nav
      className="navbar navbar-expand-md fixed-top shadow-sm"
      style={
        mounted
          ? {
              backgroundColor: scrolled
                ? "rgba(255, 255, 255, 0.97)"
                : "white",
              transition: "background-color 0.3s ease",
            }
          : {}
      }
      dir={lang === "ar" ? "rtl" : "ltr"}
    >
      <div className="container d-flex align-items-center justify-content-between">
        {/* Logo */}
        <Link href={`/${lang}`} className="navbar-brand">
          <img src="/logo.png" alt="Logo" style={{ width: "160px" }} />
        </Link>

        {/* Desktop Navbar Links */}
        <ul className="navbar-nav mx-auto d-none d-md-flex align-items-center">
          {menuItems.map((item, index) => (
            <li
              key={index}
              className={`nav-item ${
                item.isDropdown ? "dropdown mega-menu" : ""
              } mx-2`}
              onMouseEnter={
                item.isDropdown ? handleMouseEnter : undefined
              }
              onMouseLeave={
                item.isDropdown ? handleMouseLeave : undefined
              }
            >
              {item.isDropdown ? (
                <>
                  <Link
                    href={`/${lang}${item.href}`}
                    className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  >
                    {item.label}
                  </Link>

                  {/* Mega Menu */}
                  <div
                    className={`dropdown-menu mega-menu-content p-4 shadow-lg ${
                      isMegaMenuOpen ? "show" : ""
                    }`}
                    style={lang === "ar" ? { textAlign: "right" } : {}}
                  >
                    <div className="row">
                      {Object.values(servicesData).map((section, idx) => (
                        <div className="col-md-3" key={idx}>
                          <h6 className="fw-bold mb-3 border-bottom pb-2">
                            {section.title[lang]}
                          </h6>
                          <ul className="list-unstyled">
                            {section.services.map((service, sidx) => (
                              <li key={sidx}>
                                <Link
                                  href={`/${lang}/service`}
                                  className="dropdown-item"
                                >
                                  {service[lang]}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Desktop Language & Buttons */}
        <div className="d-none d-md-flex align-items-center ms-auto gap-3">
          <LanguageSwitcher lang={lang} />
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success d-flex align-items-center gap-2"
          >
            <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
          </a>
          <a
            href={`tel:${callNumber}`}
            className="btn btn-primary d-flex align-items-center gap-2"
          >
            <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
          </a>
        </div>

        {/* Mobile Toggler */}
        <button
          className="navbar-toggler ms-3 d-md-none"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
      </div>

      {/* ✅ Mobile Offcanvas Menu */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasNavbar"
        aria-labelledby="offcanvasNavbarLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
            {lang === "ar" ? "القائمة" : "Menu"}
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
            {menuItems.map((item, index) => (
              <li key={index} className="nav-item">
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className={`nav-link ${isActive(item.href) ? "active" : ""}`}
                  data-bs-dismiss="offcanvas"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-4 d-flex flex-column gap-2">
            <LanguageSwitcher lang={lang} />
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success d-flex align-items-center gap-2"
            >
              <FaWhatsapp /> {lang === "ar" ? "واتساب" : "WhatsApp"}
            </a>
            <a
              href={`tel:${callNumber}`}
              className="btn btn-primary d-flex align-items-center gap-2"
            >
              <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Styles */}
      <style jsx global>{`
        .navbar-nav .nav-link {
          font-weight: 500;
          color: #333;
          transition: color 0.3s ease;
        }
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: #399dd9;
        }

        .mega-menu {
          position: static !important;
        }
        .mega-menu-content {
          width: 100%;
          left: 0;
          top: 100%;
          border: none;
          border-radius: 0;
          background: #fff;
          opacity: 0;
          visibility: hidden;
          transform: translateY(10px);
          transition: all 0.3s ease;
        }
        .mega-menu-content.show {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
          position: absolute;
          z-index: 999;
        }

        .mega-menu-content .dropdown-item {
          padding: 6px 0;
          color: #333;
          text-decoration: none;
          display: block;
          transition: all 0.3s ease;
        }

        .mega-menu-content .dropdown-item:hover {
          color: #399dd9;
          transform: ${lang === "ar"
            ? "translateX(-4px)"
            : "translateX(4px)"};
          background: transparent;
        }

        .mega-menu-content h6 {
          color: #399dd9;
          font-weight: 600;
        }

        [dir="rtl"] .mega-menu-content {
          right: 0;
          left: auto;
        }

        [dir="rtl"] .mega-menu-content .dropdown-item {
          text-align: right;
        }

        [dir="rtl"] .navbar-nav {
          text-align: right;
        }

        [dir="rtl"] .ms-auto {
          margin-left: 0 !important;
          margin-right: auto !important;
        }

        [dir="rtl"] .ms-3 {
          margin-left: 0 !important;
          margin-right: 1rem !important;
        }

        @media (max-width: 768px) {
          .mega-menu-content {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
}
