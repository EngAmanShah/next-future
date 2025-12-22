"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import LanguageSwitcher from "./LanguageSwitcher";
import { FaPhone, FaChevronDown, FaChevronUp, FaTimes } from "react-icons/fa";

export default function Navbar({ lang }) {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [isMegaMenuOpen, setMegaMenuOpen] = useState(false);
  const [isERPMenuOpen, setERPMenuOpen] = useState(false);
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [isMobileERPOpen, setMobileERPOpen] = useState(false);
  const hoverTimeout = useRef(null);
  const erpHoverTimeout = useRef(null);
  const megaMenuRef = useRef(null);
  const erpMenuRef = useRef(null);
  const mobileMenuRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    // Close menus when clicking outside
    const handleClickOutside = (event) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(event.target)) {
        setMegaMenuOpen(false);
      }
      if (erpMenuRef.current && !erpMenuRef.current.contains(event.target)) {
        setERPMenuOpen(false);
      }
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target) &&
        !event.target.closest(".navbar-toggler")
      ) {
        setMobileMenuOpen(false);
        setMobileServicesOpen(false);
        setMobileERPOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileERPOpen(false);
  }, [pathname]);

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
    {
      href: "/service",
      label: lang === "ar" ? "ERP" : "ERP",
      isERPDropdown: true,
    },
    { href: "/about-us", label: lang === "ar" ? "من نحن" : "About Us" },
    { href: "/contact-us", label: lang === "ar" ? "اتصل بنا" : "Contact Us" },
  ];

  // Don't render navbar on admin pages
  if (!pathname || pathname?.startsWith(`/${lang}/admin`)) return null;

  const callNumber = "+966539983393";

  const handleMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(hoverTimeout.current);
      setMegaMenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth > 768) {
      clearTimeout(hoverTimeout.current);
      hoverTimeout.current = setTimeout(() => {
        setMegaMenuOpen(false);
      }, 300);
    }
  };

  const handleERPMouseEnter = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      setERPMenuOpen(true);
    }
  };

  const handleERPMouseLeave = () => {
    if (window.innerWidth > 768) {
      clearTimeout(erpHoverTimeout.current);
      erpHoverTimeout.current = setTimeout(() => {
        setERPMenuOpen(false);
      }, 300);
    }
  };

  const handleServicesClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileServicesOpen(!isMobileServicesOpen);
    }
  };

  const handleERPClick = (e) => {
    if (window.innerWidth <= 768) {
      e.preventDefault();
      setMobileERPOpen(!isMobileERPOpen);
    }
  };

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileERPOpen(false);
    }
  };

  const handleLinkClick = () => {
    setMegaMenuOpen(false);
    setERPMenuOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileERPOpen(false);
  };

  // Updated Services data based on your requirements
  const servicesData = {
    mobileApps: {
      title: {
        en: "Mobile Apps",
        ar: "تطبيقات الجوال",
      },
      services: [
        {
          en: "iOS App Development",
          ar: "تطوير تطبيقات iOS",
          link: "/service/mobile-app",
        },
        {
          en: "Android App Development",
          ar: "تطوير تطبيقات أندرويد",
          link: "/service/mobile-app",
        },
      ],
    },
    webApps: {
      title: {
        en: "Web Applications",
        ar: "تطبيقات الويب",
      },
      services: [
        {
          en: "Frontend Development",
          ar: "تطوير الواجهة الأمامية",
          link: "/service/webdev",
        },
        {
          en: "Backend Development",
          ar: "تطوير الواجهة الخلفية",
          link: "/service/webdev",
        },
        {
          en: "CMS Development",
          ar: "تطوير أنظمة إدارة المحتوى",
          link: "/service/webdev",
        },
      ],
    },
    graphicDesign: {
      title: {
        en: "Graphic Design",
        ar: "التصميم الجرافيكي",
      },
      services: [
        {
          en: "Graphic Design",
          ar: "التصميم الجرافيكي",
          link: "/service/graphic-design",
        },
        {
          en: "Social Media Design",
          ar: "تصميم وسائل التواصل الاجتماعي",
          link: "/service/graphic-design",
        },
      ],
    },
    digitalMarketing: {
      title: {
        en: "Digital Marketing",
        ar: "التسويق الرقمي",
      },
      services: [
        {
          en: "Social Media Marketing",
          ar: "التسويق عبر وسائل التواصل",
          link: "/service/digital-marketing",
        },
        {
          en: "Email Marketing",
          ar: "التسويق عبر البريد الإلكتروني",
          link: "/service/digital-marketing",
        },
        {
          en: "Google Marketing",
          ar: "التسويق عبر جوجل",
          link: "/service/digital-marketing",
        },
      ],
    },
    itSolutions: {
      title: {
        en: "IT Solutions",
        ar: "حلول تكنولوجيا المعلومات",
      },
      services: [
        {
          en: "Network Solutions",
          ar: "حلول الشبكات",
          link: "/service/itsolutions",
        },
        {
          en: "Hardware Solutions",
          ar: "حلول الأجهزة",
          link: "/service/itsolutions",
        },
        {
          en: "IT Infrastructure",
          ar: "البنية التحتية لتكنولوجيا المعلومات",
          link: "/service/itsolutions",
        },
      ],
    },
    ecommerce: {
      title: {
        en: "E-commerce Solutions",
        ar: "حلول التجارة الإلكترونية",
      },
      services: [
        {
          en: "Shopify Development",
          ar: "تطوير متاجر شوبيفاي",
          link: "/service/ecommerce",
        },
        {
          en: "WooCommerce Development",
          ar: "تطوير متاجر ووكوميرس",
          link: "/service/ecommerce",
        },
        {
          en: "Salla Development",
          ar: "تطوير متاجر سلة",
          link: "/service/ecommerce",
        },
        {
          en: "Z Development",
          ar: "تطوير متاجر زد",
          link: "/service/ecommerce",
        },
      ],
    },
    cloudServices: {
      title: {
        en: "Cloud Services",
        ar: "خدمات الحوسبة السحابية",
      },
      services: [
        {
          en: "Cloud Infrastructure",
          ar: "البنية التحتية السحابية",
          link: "/service/cloud-services",
        },
        {
          en: "Cloud Migration",
          ar: "نقل البيانات السحابي",
          link: "/service/cloud-services",
        },
        {
          en: "Cloud Management",
          ar: "إدارة السحابة",
          link: "/service/cloud-services",
        },
      ],
    },
  };

  // ERP Solutions data
  const erpSolutions = [
    {
      href: "/ERP/odoo",
      en: "Odoo ERP",
      ar: "أودو ERP",
      description: {
        en: "Open-source business management software",
        ar: "برنامج إدارة الأعمال مفتوح المصدر",
      },
    },
    {
      href: "/ERP/Construction-Management",
      en: "Construction Company ERP",
      ar: "نظام إدارة شركات المقاولات",
      description: {
        en: "Specialized ERP for construction companies",
        ar: "نظام متخصص لإدارة شركات المقاولات",
      },
    },
    {
      href: "/ERP/property-management",
      en: "Property Management ERP",
      ar: "نظام إدارة العقارات",
      description: {
        en: "Comprehensive property management solutions",
        ar: "حلول شاملة لإدارة العقارات",
      },
    },
    {
      href: "/ERP/custom",
      en: "Custom ERP Solutions",
      ar: "حلول ERP مخصصة",
      description: {
        en: "Tailored ERP systems for your business",
        ar: "أنظمة ERP مصممة خصيصًا لعملك",
      },
    },
  ];

  return (
    <>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={
          mounted
            ? {
                backgroundColor: scrolled
                  ? "rgba(38, 38, 38, 0.96)" // Dark blue when scrolled
                  : "rgba(38, 38, 38, 0.96)", // Light transparent blue when at top
                backdropFilter: scrolled ? "blur(12px)" : "blur(4px)", // Less blur when transparent
              }
            : {}
        }
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="container">
          {/* Logo */}
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
            <img
              src="/logo-white.png"
              alt="Logo"
              style={{
                width: "160px",
                filter: scrolled ? "brightness(0) invert(1)" : "none",
                transition: "filter 0.3s ease",
              }}
            />
          </Link>

          {/* Mobile Top Buttons */}
          <div className="d-lg-none d-flex align-items-center gap-2">
            <LanguageSwitcher lang={lang} showFlag={true} showText={false} />
            <a
              href={`tel:${callNumber}`}
              className="btn btn-sm d-flex align-items-center gap-1"
              style={{
                backgroundColor: scrolled ? "#000000ff" : "#379DD7",
                borderColor: scrolled ? "#000000ff" : "#379DD7",
                color: "#fff",
              }}
            >
              <FaPhone size={12} />
            </a>
          </div>

          {/* Desktop Navbar Links */}
          <div className="d-none d-lg-flex align-items-center">
            <ul className="navbar-nav mx-auto align-items-center">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className={`nav-item ${
                    item.isDropdown
                      ? "dropdown mega-menu"
                      : item.isERPDropdown
                      ? "dropdown erp-menu"
                      : ""
                  } mx-2`}
                  onMouseEnter={
                    item.isDropdown
                      ? handleMouseEnter
                      : item.isERPDropdown
                      ? handleERPMouseEnter
                      : undefined
                  }
                  onMouseLeave={
                    item.isDropdown
                      ? handleMouseLeave
                      : item.isERPDropdown
                      ? handleERPMouseLeave
                      : undefined
                  }
                  ref={
                    item.isDropdown
                      ? megaMenuRef
                      : item.isERPDropdown
                      ? erpMenuRef
                      : null
                  }
                >
                  {item.isDropdown ? (
                    <>
                      <Link
                        href={`/${lang}${item.href}`}
                        className={`nav-link ${
                          isActive(item.href) ? "active" : ""
                        } d-flex align-items-center gap-1`}
                        style={{
                          color: scrolled ? "#fff" : "#ffffffff",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                        {lang === "ar" ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </Link>

                      {/* Mega Menu - Desktop */}
                      <div
                        className={`mega-menu-dropdown ${
                          isMegaMenuOpen ? "show" : ""
                        }`}
                      >
                        <div className="mega-menu-content p-4">
                          <div className="row">
                            {Object.values(servicesData).map(
                              (category, catIndex) => (
                                <div
                                  key={catIndex}
                                  className="col-lg-3 col-md-6 mb-3"
                                >
                                  <h6 className="fw-bold mb-3 category-title">
                                    {category.title[lang]}
                                  </h6>
                                  <ul className="list-unstyled">
                                    {category.services.map(
                                      (service, serviceIndex) => (
                                        <li key={serviceIndex}>
                                          <Link
                                            href={`/${lang}${service.link}`}
                                            className="dropdown-item"
                                            onClick={handleLinkClick}
                                          >
                                            {service[lang]}
                                          </Link>
                                        </li>
                                      )
                                    )}
                                  </ul>
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : item.isERPDropdown ? (
                    <>
                      <Link
                        href={`/${lang}/service`}
                        className={`nav-link ${
                          isActive(item.href) ? "active" : ""
                        } d-flex align-items-center gap-1`}
                        style={{
                          color: scrolled ? "#fff" : "#ffffffff",
                          fontWeight: 500,
                        }}
                      >
                        {item.label}
                        {lang === "ar" ? (
                          <FaChevronUp size={12} />
                        ) : (
                          <FaChevronDown size={12} />
                        )}
                      </Link>

                      {/* ERP Dropdown Menu - Desktop */}
                      <div
                        className={`erp-dropdown-menu ${
                          isERPMenuOpen ? "show" : ""
                        }`}
                      >
                        <div className="erp-menu-content p-3">
                          <div className="row">
                            {erpSolutions.map((solution, index) => (
                              <div key={index} className="col-lg-12 mb-2">
                                <Link
                                  href={`/${lang}${solution.href}`}
                                  className="erp-dropdown-item"
                                  onClick={handleLinkClick}
                                >
                                  <div className="erp-item-content">
                                    <h6 className="erp-item-title mb-1">
                                      {solution[lang]}
                                    </h6>
                                    <p className="erp-item-description mb-0">
                                      {solution.description[lang]}
                                    </p>
                                  </div>
                                </Link>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <Link
                      href={`/${lang}${item.href === "/" ? "" : item.href}`}
                      className={`nav-link ${
                        isActive(item.href) ? "active" : ""
                      }`}
                      style={{
                        color: scrolled ? "#fff" : "#ffffffff",
                        fontWeight: 500,
                      }}
                      onClick={handleLinkClick}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>

            {/* Desktop Language & Call Button */}
            <div className="d-flex align-items-center ms-4 gap-3">
              <LanguageSwitcher lang={lang} showFlag={true} showText={false} />
              <a
                href={`tel:${callNumber}`}
                className="btn d-flex align-items-center gap-2"
                style={{
                  backgroundColor: scrolled ? "#000000ff" : "#379DD7",
                  borderColor: scrolled ? "#000000ff" : "#379DD7",
                  color: "#fff",
                  fontWeight: 500,
                }}
              >
                <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
              </a>
            </div>
          </div>

          {/* Mobile Toggler */}
          <button
            className="navbar-toggler d-lg-none border-0"
            type="button"
            onClick={handleMobileMenuToggle}
            aria-label="Toggle navigation"
            style={{
              color: scrolled ? "#fff" : "#f0f0f0ff",
            }}
          >
            {isMobileMenuOpen ? (
              <FaTimes />
            ) : (
              <span className="navbar-toggler-icon"></span>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="mobile-menu-overlay"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile Menu Sidebar */}
      <div
        ref={mobileMenuRef}
        className={`mobile-sidebar ${isMobileMenuOpen ? "show" : ""}`}
        dir={lang === "ar" ? "rtl" : "ltr"}
      >
        <div className="mobile-sidebar-header">
          <Link
            href={`/${lang}`}
            className="navbar-brand"
            onClick={handleLinkClick}
          >
            <img src="/logo.png" alt="Logo" style={{ width: "140px" }} />
          </Link>
          <button
            className="close-btn"
            onClick={() => setMobileMenuOpen(false)}
          >
            <FaTimes />
          </button>
        </div>

        <div className="mobile-sidebar-content">
          {menuItems.map((item, index) => (
            <div key={index} className="mobile-menu-item">
              {item.isDropdown ? (
                <>
                  <div
                    className="mobile-menu-link dropdown-toggle"
                    onClick={handleServicesClick}
                  >
                    <span>{item.label}</span>
                    {isMobileServicesOpen ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </div>

                  <div
                    className={`mobile-submenu ${
                      isMobileServicesOpen ? "show" : ""
                    }`}
                  >
                    {Object.values(servicesData).map((category, catIndex) => (
                      <div key={catIndex} className="mobile-submenu-section">
                        <h6 className="mobile-category-title">
                          {category.title[lang]}
                        </h6>
                        <ul>
                          {category.services.map((service, serviceIndex) => (
                            <li key={serviceIndex}>
                              <Link
                                href={`/${lang}${service.link}`}
                                onClick={handleLinkClick}
                              >
                                {service[lang]}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </>
              ) : item.isERPDropdown ? (
                <>
                  <div
                    className="mobile-menu-link dropdown-toggle"
                    onClick={handleERPClick}
                  >
                    <span>{item.label}</span>
                    {isMobileERPOpen ? (
                      <FaChevronUp size={12} />
                    ) : (
                      <FaChevronDown size={12} />
                    )}
                  </div>

                  <div
                    className={`mobile-submenu ${
                      isMobileERPOpen ? "show" : ""
                    }`}
                  >
                    <div className="mobile-submenu-section">
                      <ul>
                        {erpSolutions.map((solution, solutionIndex) => (
                          <li key={solutionIndex}>
                            <Link
                              href={`/${lang}${solution.href}`}
                              onClick={handleLinkClick}
                              className="erp-mobile-link"
                            >
                              <div>
                                <strong>{solution[lang]}</strong>
                                <small className="d-block text-muted">
                                  {solution.description[lang]}
                                </small>
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  href={`/${lang}${item.href === "/" ? "" : item.href}`}
                  className="mobile-menu-link"
                  onClick={handleLinkClick}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile Call Button */}
          <div className="mobile-buttons">
            <a
              href={`tel:${callNumber}`}
              className="btn d-flex align-items-center gap-2 w-100 justify-content-center"
              style={{
                backgroundColor: "#379DD7",
                borderColor: "#379DD7",
                color: "#fff",
              }}
              onClick={handleLinkClick}
            >
              <FaPhone /> {lang === "ar" ? "اتصل" : "Call"}
            </a>
          </div>
        </div>
      </div>

      {/* Styles */}
      <style jsx global>{`
        .navbar {
          padding: 0.5rem 0;
          z-index: 1030;
        }

        .navbar-nav .nav-link {
          transition: color 0.3s ease;
          padding: 0.5rem 1rem;
        }

        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link.active {
          color: ${scrolled ? "#FF9800" : "#379dd7"} !important;
        }

        /* Mega Menu Styles - UPDATED BACKGROUND */
        .mega-menu {
          position: static;
        }

        .mega-menu-dropdown {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 90%;
          max-width: 1200px;
          background: rgba(0, 0, 0, 0.95) !important; /* 95% opacity black */
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          border-radius: 12px;
          border: 2px solid #379DD7 !important; /* Light blue border */
        }

        .mega-menu-dropdown.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        /* ERP Dropdown Menu Styles - UPDATED BACKGROUND */
        .erp-menu {
          position: relative;
        }

        .erp-dropdown-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          width: 350px;
          background: rgba(0, 0, 0, 0.95) !important; /* 95% opacity black */
          box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          z-index: 1000;
          border-radius: 12px;
          border: 2px solid #379DD7 !important; /* Light blue border */
        }

        .erp-dropdown-menu.show {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }

        [dir="rtl"] .mega-menu-dropdown,
        [dir="rtl"] .erp-dropdown-menu {
          left: 50%;
          right: auto;
          transform: translateX(-50%) translateY(10px);
        }

        [dir="rtl"] .mega-menu-dropdown.show,
        [dir="rtl"] .erp-dropdown-menu.show {
          transform: translateX(-50%) translateY(0);
        }

        .mega-menu-content {
          width: 100%;
        }

        .erp-menu-content {
          width: 100%;
        }

        /* UPDATED: Category titles in blue */
        .mega-menu-content .category-title {
          color: #379DD7 !important; /* Blue color */
          font-size: 0.9rem;
          border-bottom: 2px solid #379DD7; /* Blue border */
          padding-bottom: 0.5rem;
          font-weight: 700;
        }

        .mega-menu-content .dropdown-item {
          padding: 0.5rem 0;
          color: #e0e0e0;
          text-decoration: none;
          transition: all 0.3s ease;
          font-size: 0.85rem;
          border: none;
          background: none;
        }

        .mega-menu-content .dropdown-item:hover {
          color: #379DD7; /* Blue color on hover */
          background: rgba(55, 157, 215, 0.1); /* Light blue background on hover */
          padding-left: 0.5rem;
          border-radius: 4px;
        }

        .erp-dropdown-item {
          display: block;
          padding: 0.75rem 1rem;
          color: #e0e0e0;
          text-decoration: none;
          transition: all 0.3s ease;
          border-radius: 8px;
          border: 1px solid transparent;
          background: rgba(255, 255, 255, 0.05);
        }

        .erp-dropdown-item:hover {
          background: rgba(55, 157, 215, 0.1); /* Light blue background */
          border-color: #379DD7; /* Blue border */
          text-decoration: none;
          color: #379DD7; /* Blue text */
        }

        .erp-item-title {
          color: #379DD7 !important; /* Blue color */
          font-weight: 600;
          font-size: 0.9rem;
          margin-bottom: 0.25rem;
        }

        .erp-item-description {
          color: #bdbdbd;
          font-size: 0.8rem;
          line-height: 1.3;
        }

        [dir="rtl"] .mega-menu-content .dropdown-item:hover {
          padding-left: 0;
          padding-right: 0.5rem;
        }

        /* Mobile Menu Styles - UPDATED BACKGROUND */
        .mobile-menu-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.5);
          z-index: 1040;
        }

        .mobile-sidebar {
          position: fixed;
          top: 0;
          right: -100%;
          width: 320px;
          height: 100vh;
          background: rgba(0, 0, 0, 0.95) !important; /* 95% opacity black */
          box-shadow: -2px 0 20px rgba(0, 0, 0, 0.3);
          transition: right 0.3s ease;
          z-index: 1050;
          overflow-y: auto;
          color: #fff;
          border-left: 2px solid #379DD7 !important; /* Light blue border */
        }

        [dir="rtl"] .mobile-sidebar {
          right: auto;
          left: -100%;
          border-left: none !important;
          border-right: 2px solid #379DD7 !important; /* Light blue border for RTL */
        }

        .mobile-sidebar.show {
          right: 0;
        }

        [dir="rtl"] .mobile-sidebar.show {
          left: 0;
          right: auto;
        }

        .mobile-sidebar-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .close-btn {
          background: none;
          border: none;
          font-size: 1.2rem;
          color: #fff;
          padding: 0.5rem;
          cursor: pointer;
        }

        .mobile-sidebar-content {
          padding: 1rem;
        }

        .mobile-menu-item {
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .mobile-menu-link {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          color: #fff;
          text-decoration: none;
          font-weight: 500;
          transition: color 0.3s ease;
          width: 100%;
          background: none;
          border: none;
          text-align: left;
          cursor: pointer;
        }

        [dir="rtl"] .mobile-menu-link {
          text-align: right;
        }

        .mobile-menu-link:hover {
          color: #379DD7 !important; /* Blue color on hover */
        }

        .mobile-submenu {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.3s ease;
        }

        .mobile-submenu.show {
          max-height: 2000px;
        }

        .mobile-submenu-section {
          padding: 0.5rem 0 0.5rem 1rem;
        }

        [dir="rtl"] .mobile-submenu-section {
          padding: 0.5rem 1rem 0.5rem 0;
        }

        /* UPDATED: Mobile category titles in blue */
        .mobile-category-title {
          color: #379DD7 !important; /* Blue color */
          font-weight: 700;
          margin-bottom: 0.5rem;
          font-size: 0.9rem;
          border-bottom: 1px solid #379DD7; /* Blue border */
          padding-bottom: 0.3rem;
        }

        .mobile-submenu-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .mobile-submenu-section li {
          margin-bottom: 0.3rem;
        }

        .mobile-submenu-section a {
          color: #e0e0e0;
          text-decoration: none;
          font-size: 0.85rem;
          transition: color 0.3s ease;
          display: block;
          padding: 0.3rem 0;
        }

        .erp-mobile-link {
          padding: 0.75rem 0 !important;
          border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        }

        .erp-mobile-link:last-child {
          border-bottom: none;
        }

        .mobile-submenu-section a:hover {
          color: #379DD7 !important; /* Blue color on hover */
        }

        .mobile-buttons {
          padding: 1rem 0;
          border-top: 1px solid rgba(255, 255, 255, 0.15);
          margin-top: 1rem;
        }

        /* Flag-only Language Switcher */
        .flag-only-switcher {
          display: flex;
          align-items: center;
          background: rgba(255, 255, 255, 1);
          padding: 8px;
          border-radius: 50%;
          text-decoration: none;
          transition: all 0.3s ease;
          border: 1px solid rgba(255, 255, 255, 0.2);
          width: 40px;
          height: 40px;
          justify-content: center;
        }

        .flag-only-switcher:hover {
          background: rgba(251, 251, 251, 0.99);
          text-decoration: none;
        }

        .flag-icon-only {
          width: 24px;
          height: 18px;
          border-radius: 3px;
          object-fit: cover;
        }

        /* Responsive */
        @media (max-width: 991px) {
          .mega-menu-dropdown,
          .erp-dropdown-menu {
            display: none;
          }

          .navbar {
            padding: 0.3rem 0;
          }
        }

        @media (max-width: 768px) {
          .mobile-sidebar {
            width: 280px;
          }

          .navbar-brand img {
            width: 140px !important;
          }
        }

        @media (max-width: 575px) {
          .mega-menu-dropdown {
            width: 95%;
          }

          .erp-dropdown-menu {
            width: 90%;
          }

          .mobile-sidebar {
            width: 260px;
          }
        }

        @media (max-width: 400px) {
          .navbar-brand img {
            width: 120px !important;
          }

          .mobile-sidebar {
            width: 240px;
          }
        }

        /* Mobile Menu Toggle Icon - White Color */
        .navbar-toggler {
          color: #fff !important;
          font-size: 1.5rem;
        }

        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba(255, 255, 255, 1)' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          width: 1.5em;
          height: 1.5em;
        }
      `}</style>
    </>
  );
}