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
import Skills from "@/components/Skills/Skills";

export default function Page({ params }) {
  // In Next.js 15, params is already destructured, no need for React.use()
  const { lang } = params || {};

  // Fallback to default language if params is undefined
  const currentLang = lang || "en";

  const translations = {
    en: {
      introTitle: "What We Offer", // Add this line
      heroTitle: "Our Services",
      explore: "Explore Services",
      learnMore: "Learn More",
      services: [
        {
          title: "Web Design & Development",
          description:
            "Build scalable and responsive websites tailored to your business needs.",
          link: "/service/webdev",
          icon: <FaLaptopCode size={40} color="#fff" />,
        },
        {
          title: "Mobile App Development",
          description:
            "Create intuitive and engaging mobile applications for iOS and Android platforms.",
          link: "/service/mobile-app",
          icon: <FaMobileAlt size={40} color="#fff" />,
        },
        {
          title: "IT Solutions",
          description:
            "Implement robust IT infrastructure and solutions for seamless business operations.",
          link: "/service/itsolutions",
          icon: <FaServer size={40} color="#fff" />,
        },
        {
          title: "ERP Solutions",
          description:
            "Comprehensive Enterprise Resource Planning systems to streamline your business operations.",
          link: "/service/erp",
          icon: <FaDatabase size={40} color="#fff" />,
        },
        {
          title: "Digital Marketing",
          description:
            "Boost your online presence with SEO, social media, PPC, and content strategies.",
          link: "/service/digital-marketing",
          icon: <HiOutlineSpeakerphone size={40} color="#fff" />,
        },
        {
          title: "Graphic Design",
          description:
            "Design compelling visuals for web, print, and digital platforms to capture attention.",
          link: "/service/graphic-design",
          icon: <MdOutlineBrush size={40} color="#fff" />,
        },
        {
          title: "E-Commerce Solutions",
          description:
            "Build powerful online stores with secure payment gateways and inventory management.",
          link: "/service/ecommerce",
          icon: <FaShoppingCart size={40} color="#fff" />,
        },
        {
          title: "Cloud Services",
          description:
            "Scalable cloud infrastructure and migration services for modern businesses.",
          link: "/service/cloud-services",
          icon: <MdCloudQueue size={40} color="#fff" />,
        },
      ],
    },
    ar: {
      introTitle: "ماذا نقدم", // Add this line
      heroTitle: "خدماتنا",
      explore: "استكشف الخدمات",
      learnMore: "المزيد من التفاصيل",
      services: [
        {
          title: "تصميم وتطوير المواقع الإلكترونية",
          description:
            "بناء مواقع إلكترونية قابلة للتوسع والتكيف مصممة خصيصًا لاحتياجات عملك.",
          link: "/service/webdev",
          icon: <FaLaptopCode size={40} color="#fff" />,
        },
        {
          title: "تطوير التطبيقات الجوالة",
          description:
            "إنشاء تطبيقات جوالة بديهية وجذابة لمنصات iOS و Android.",
          link: "/service/mobile-app",
          icon: <FaMobileAlt size={40} color="#fff" />,
        },
        {
          title: "حلول تكنولوجيا المعلومات",
          description:
            "تنفيذ بنية تحتية وحلول تكنولوجيا معلومات قوية لتشغيل أعمال سلس.",
          link: "/service/itsolutions",
          icon: <FaServer size={40} color="#fff" />,
        },
        {
          title: "حلول تخطيط موارد المؤسسات",
          description: "أنظمة تخطيط موارد المؤسسات الشاملة لتبسيط عمليات عملك.",
          link: "/service/erp",
          icon: <FaDatabase size={40} color="#fff" />,
        },
        {
          title: "التسويق الرقمي",
          description:
            "عزز وجودك على الإنترنت باستخدام استراتيجيات تحسين محركات البحث ووسائل التواصل الاجتماعي والإعلان المدفوع والمحتوى.",
          link: "/service/digital-marketing",
          icon: <HiOutlineSpeakerphone size={40} color="#fff" />,
        },
        {
          title: "التصميم الجرافيكي",
          description:
            "تصميم مرئيات مؤثرة للويب والطباعة والمنصات الرقمية لجذب الانتباه.",
          link: "/service/graphic-design",
          icon: <MdOutlineBrush size={40} color="#fff" />,
        },
        {
          title: "حلول التجارة الإلكترونية",
          description:
            "بناء متاجر إلكترونية قوية مع بوابات دفع آمنة وأنظمة إدارة المخزون.",
          link: "/service/ecommerce",
          icon: <FaShoppingCart size={40} color="#fff" />,
        },
        {
          title: "خدمات الحوسبة السحابية",
          description:
            "بنية تحتية سحابية قابلة للتوسع وخدمات نقل للشركات الحديثة.",
          link: "/service/cloud-services",
          icon: <MdCloudQueue size={40} color="#fff" />,
        },
      ],
    },
  };

  const t = translations[currentLang];

  // Add null check for t to prevent undefined errors
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

  const iconVariants = {
    hover: {
      scale: 1.2,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10,
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
       
          <motion.h5
            className="text-center mb-3"
            style={{ color: "#0d1f4c", fontSize: "2.5rem" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {t.heroTitle}
          </motion.h5>

          <div className="row g-4">
            {t.services.map((service, index) => (
              <div className="col-md-6 col-lg-4 col-xl-3 mb-4" key={index}>
                <motion.div
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="card h-100 p-4 text-center border-0 rounded-4 service-card position-relative overflow-hidden shadow-sm"
                  style={{
                    backgroundColor: "#ffffff",
                    color: "#333",
                    border: "1px solid #e9ecef",
                  }}
                >
                  <div className="position-relative">
                    <motion.div
                      className="mb-3 p-4 rounded-circle mx-auto d-flex justify-content-center align-items-center service-icon"
                      style={{
                        background: "linear-gradient(135deg, #1277cf, #379DD7)",
                        width: "100px",
                        height: "100px",
                      }}
                      variants={iconVariants}
                    >
                      {service.icon}
                    </motion.div>

                    <h5
                      className="fw-bold mb-3"
                      style={{
                        minHeight: "3rem",
                        color: "#0d1f4c",
                      }}
                    >
                      {service.title}
                    </h5>

                    <p
                      className="mb-4"
                      style={{
                        minHeight: "4rem",
                        lineHeight: "1.6",
                        color: "#666",
                      }}
                    >
                      {service.description}
                    </p>

                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href={`/${currentLang}${service.link}`}
                        className="btn btn-primary mt-auto text-white fw-bold px-4"
                        style={{
                          background:
                            "linear-gradient(135deg, #1277cf, #379DD7)",
                          border: "none",
                        }}
                      >
                        {t.learnMore}
                      </Link>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            ))}
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

        .service-icon {
          transition: all 0.3s ease;
          box-shadow: 0 5px 15px rgba(18, 119, 207, 0.3);
        }

        /* Simple hover effect */
        .service-card::after {
          content: "";
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 3px;
          background: linear-gradient(135deg, #1277cf, #379dd7);
          transform: scaleX(0);
          transition: transform 0.3s ease;
          transform-origin: bottom right;
        }

        .service-card:hover::after {
          transform: scaleX(1);
          transform-origin: bottom left;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .service-card {
            margin-bottom: 1.5rem;
          }

          .display-4 {
            font-size: 2.5rem !important;
          }
        }

        @media (max-width: 576px) {
          .display-4 {
            font-size: 2rem !important;
          }

          .service-card {
            padding: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
