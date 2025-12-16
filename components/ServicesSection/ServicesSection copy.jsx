"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  FaLaptopCode,
  FaMobileAlt,
  FaServer,
  FaDatabase,
  FaShoppingCart,
  FaChartLine,
} from "react-icons/fa";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { MdOutlineBrush, MdCloudQueue } from "react-icons/md";
import { FiCheck, FiSquare } from "react-icons/fi";
import Skills from "@/components/Skills/Skills";

export default function Page({ params }) {
  const { lang } = params || {};
  const currentLang = lang || "en";

  const translations = {
    en: {
      heroTitle: "Core Services",
      explore: "Explore Services",
      learnMore: "Learn More",
      webApp: "Web App",
      mobileApps: "Mobile Apps",
      otherServices: "Other Services",
      services: [
        {
          category: "Mobile Apps",
          items: [
            { name: "Odoo ERP", checked: false },
            { name: "Real-Estate Company ERP", checked: true },
            { name: "Custom ERP Solutions", checked: true },
          ]
        },
        {
          category: "Mobile Apps",
          items: [
            { name: "Odoo ERP", checked: false },
            { name: "Real-Estate Company ERP", checked: true },
            { name: "Custom ERP Solutions", checked: true },
          ]
        },
        {
          category: "Web App",
          items: [
            { name: "Mobile Apps", checked: false },
            { name: "Mobile Apps", checked: true },
            { name: "Android App Dev", checked: true },
            { name: "Framed Development", checked: true },
            { name: "Backend Development", checked: true },
            { name: "CMS Development", checked: true },
            { name: "Social Media Marketing", checked: true },
            { name: "Email Marketing", checked: true },
            { name: "Google marketing", checked: true },
            { name: "Shopify Development", checked: true },
            { name: "WooCommerce Deve", checked: true },
            { name: "Saila Development", checked: true },
            { name: "Z Development", checked: true },
          ]
        }
      ],
    },
    ar: {
      heroTitle: "الخدمات الأساسية",
      explore: "استكشف الخدمات",
      learnMore: "المزيد من التفاصيل",
      webApp: "تطبيق ويب",
      mobileApps: "تطبيقات الجوال",
      otherServices: "خدمات أخرى",
      services: [
        {
          category: "تطبيقات الجوال",
          items: [
            { name: "Odoo ERP", checked: false },
            { name: "برنامج عقارات", checked: true },
            { name: "حلول ERP مخصصة", checked: true },
          ]
        },
        {
          category: "تطبيقات الجوال",
          items: [
            { name: "Odoo ERP", checked: false },
            { name: "برنامج عقارات", checked: true },
            { name: "حلول ERP مخصصة", checked: true },
          ]
        },
        {
          category: "تطبيق ويب",
          items: [
            { name: "تطبيقات الجوال", checked: false },
            { name: "تطبيقات الجوال", checked: true },
            { name: "تطوير تطبيقات أندرويد", checked: true },
            { name: "تطوير الأطر", checked: true },
            { name: "تطوير الواجهة الخلفية", checked: true },
            { name: "تطوير أنظمة إدارة المحتوى", checked: true },
            { name: "التسويق عبر وسائل التواصل الاجتماعي", checked: true },
            { name: "التسويق عبر البريد الإلكتروني", checked: true },
            { name: "التسويق عبر جوجل", checked: true },
            { name: "تطوير Shopify", checked: true },
            { name: "تطوير WooCommerce", checked: true },
            { name: "تطوير Saila", checked: true },
            { name: "تطوير Z", checked: true },
          ]
        }
      ],
    },
  };

  const t = translations[currentLang];

  if (!t) {
    return <div>Loading...</div>;
  }

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
    hover: {
      y: -10,
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
  };

  return (
    <section
      className={`position-relative ${
        currentLang === "ar" ? "text-end" : "text-start"
      }`}
      dir={currentLang === "ar" ? "rtl" : "ltr"}
    >
      {/* Clean White Background Section */}
      <div className="position-relative py-5 bg-white min-vh-100">
        <div className="container py-5" style={{ paddingTop: "6rem" }}>
          <motion.h2
            className="mb-5 text-center fw-bold"
            style={{ color: "#0d1f4c", fontSize: "2.5rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.heroTitle}
          </motion.h2>

          <div className="row g-4 justify-content-center">
            {t.services.map((serviceGroup, index) => (
              <div className="col-lg-4 col-md-6 mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card h-100 p-4 border-0 rounded-4 service-card shadow-sm"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#333",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <div className="position-relative">
                    <h3
                      className="fw-bold mb-4 text-center"
                      style={{
                        color: "#0d1f4c",
                        fontSize: "1.5rem",
                        borderBottom: "2px solid #1277cf",
                        paddingBottom: "0.5rem",
                      }}
                    >
                      {serviceGroup.category}
                    </h3>
                    
                    <div className="service-list">
                      {serviceGroup.items.map((item, itemIndex) => (
                        <div 
                          key={itemIndex} 
                          className="d-flex align-items-center mb-3 p-2 rounded"
                          style={{
                            backgroundColor: item.checked ? "#f0f8ff" : "#f9f9f9",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <div 
                            className="d-flex align-items-center justify-content-center me-3"
                            style={{
                              width: "24px",
                              height: "24px",
                              borderRadius: "4px",
                              backgroundColor: item.checked ? "#1277cf" : "#e9ecef",
                              color: item.checked ? "white" : "#adb5bd",
                            }}
                          >
                            {item.checked ? (
                              <FiCheck size={16} />
                            ) : (
                              <FiSquare size={16} />
                            )}
                          </div>
                          <span 
                            style={{
                              color: item.checked ? "#1277cf" : "#666",
                              fontWeight: item.checked ? "600" : "400",
                              fontSize: "1rem",
                            }}
                          >
                            {item.name}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Additional Services Section */}
          <div className="row mt-5">
            <div className="col-12">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="card p-5 border-0 rounded-4 shadow-sm"
                style={{
                  background: "linear-gradient(135deg, #f8f9fa, #ffffff)",
                  border: "1px solid #e9ecef",
                }}
              >
                <h3 className="fw-bold text-center mb-4" style={{ color: "#0d1f4c" }}>
                  {t.otherServices}
                </h3>
                <div className="row g-4">
                  {[
                    { title: "Web Design & Development", icon: <FaLaptopCode size={30} color="#1277cf" /> },
                    { title: "Mobile App Development", icon: <FaMobileAlt size={30} color="#1277cf" /> },
                    { title: "IT Solutions", icon: <FaServer size={30} color="#1277cf" /> },
                    { title: "ERP Solutions", icon: <FaDatabase size={30} color="#1277cf" /> },
                    { title: "Digital Marketing", icon: <HiOutlineSpeakerphone size={30} color="#1277cf" /> },
                    { title: "Graphic Design", icon: <MdOutlineBrush size={30} color="#1277cf" /> },
                    { title: "E-Commerce Solutions", icon: <FaShoppingCart size={30} color="#1277cf" /> },
                    { title: "Cloud Services", icon: <MdCloudQueue size={30} color="#1277cf" /> },
                  ].map((service, index) => (
                    <div className="col-md-3 col-sm-6" key={index}>
                      <div className="d-flex align-items-center p-3 rounded service-item"
                        style={{
                          backgroundColor: "white",
                          border: "1px solid #e9ecef",
                          transition: "all 0.3s ease",
                        }}
                      >
                        <div className="me-3">
                          {service.icon}
                        </div>
                        <span style={{ color: "#333", fontWeight: "500" }}>
                          {service.title}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <Skills lang={currentLang} />

      <style jsx global>{`
        .service-card {
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .service-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1) !important;
          border-color: #1277cf !important;
        }

        .service-item:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 20px rgba(18, 119, 207, 0.1);
          border-color: #1277cf !important;
        }

        .service-list div:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.05);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-card {
            margin-bottom: 1.5rem;
          }
          
          h2 {
            font-size: 2rem !important;
          }
        }

        @media (max-width: 576px) {
          h2 {
            font-size: 1.8rem !important;
          }
          
          .service-card {
            padding: 1.5rem !important;
          }
          
          .service-item {
            padding: 1rem !important;
          }
        }
      `}</style>
    </section>
  );
}