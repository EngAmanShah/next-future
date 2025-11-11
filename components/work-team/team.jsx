"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "./Team.css";

export default function TeamSection({ lang = "en" }) {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState({});

  // Translations
  const translations = {
    en: {
      heading: "Our Team",
      description: "Our team comprises experts in various fields, including software development, marketing, management, engineering, business consulting, and digital marketing. All team members are passionate about technology and committed to delivering innovative solutions that meet clients' needs with the highest level of professionalism and efficiency.",
      hoverText: "Learn More",
      bio: "Expert specialist in their field with years of experience in delivering innovative solutions that meet client needs.",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    ar: {
      heading: "فريقنا",
      description: "فريقنا مكون من مجموعة من الخبراء في مجالات متعددة، من تطوير البرمجيات، التسويق، الإدارة والهندسة إلى استشارات الأعمال والتسويق الرقمي. جميع أعضاء الفريق لديهم شغف بالتكنولوجيا وملتزمون بتقديم حلول مبتكرة تلبي احتياجات العملاء بأعلى مستوى من الاحترافية والإبداع.",
      hoverText: "لمعرفة المزيد",
      bio: "خبير متخصص في مجاله مع سنوات من الخبرة في تقديم حلول مبتكرة تلبي احتياجات العملاء.",
      skills: ["القيادة", "التخطيط", "الإبداع"]
    }
  };

  const t = translations[lang] ?? translations.en;

  // Team data with both English and Arabic
  const teamMembers = [
    {
      id: 1,
      name: {
        en: "Muhammad Omar",
        ar: "محمد عمر"
      },
      position: {
        en: "Chief Executive Officer",
        ar: "الرئيس التنفيذي"
      },
     image: "/ceo.png",
      alt: {
        en: "Muhammad Omar - CEO",
        ar: "محمد عمر - الرئيس التنفيذي"
      }
    },
    {
      id: 2,
      name: {
        en: "Muhammad Sabri",
        ar: "محمد صبري"
      },
      position: {
        en: "Operation Manager",
        ar: "مدير العمليات"
      },
      image: "/mehmod.png",
      alt: {
        en: "Muhammad Sabri - Operation Manager",
        ar: "محمد صبري - مدير العمليات"
      }
    },
    {
      id: 3,
      name: {
        en: "Engr Yousef Mohammed",
        ar: "المهندس يوسف محمد"
      },
      position: {
        en: "Studies & Development Manager",
        ar: "مدير الدراسات والتطوير"
      },
     image: "/mehmod.png",
      alt: {
        en: "Engr Yousef Mohammed - Studies & Development Manager",
        ar: "المهندس يوسف محمد - مدير الدراسات والتطوير"
      }
    },
    {
      id: 4,
      name: {
        en: "Mahmoud Tarek",
        ar: "محمود طارق"
      },
      position: {
        en: "Business Development Consultant",
        ar: "مستشار تطوير الأعمال"
      },
      image: "/mehmod.png",
      alt: {
        en: "Mahmoud Tarek - Business Development Consultant",
        ar: "محمود طارق - مستشار تطوير الأعمال"
      }
    },
    {
      id: 5,
      name: {
        en: "Engr Aman Shah",
        ar: "المهندس أمان شاه"
      },
      position: {
        en: "Software Development Manager",
        ar: "مدير تطوير البرمجيات"
      },
      image: "/aman.jpeg",
      alt: {
        en: "Engr Aman Shah - Software Development Manager",
        ar: "المهندس أمان شاه - مدير تطوير البرمجيات"
      }
    },
    {
      id: 6,
      name: {
        en: "Majid Abdur Rehman",
        ar: "ماجد عبد الرحمن"
      },
      position: {
        en: "HR Manager",
        ar: "مدير الموارد البشرية"
      },
      image: "/mehmod.png",
      alt: {
        en: "Majid Abdur Rehman - HR Manager",
        ar: "ماجد عبد الرحمن - مدير الموارد البشرية"
      }
    }
  ];

  const handleImageLoad = (id) => {
    setLoadedImages(prev => ({ ...prev, [id]: true }));
  };

  const handleImageError = (e, member) => {
    console.warn(`Failed to load image for ${member.name[lang]}: ${member.image}`);
    e.target.src = '/images/team/placeholder.jpg';
  };

  return (
    <section className="team-section" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <div className="heading">
          <h1>{t.heading}</h1>
          <p>{t.description}</p>
        </div>

        <Swiper
          ref={swiperRef}
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          centeredSlides={false}
          loop={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          navigation={true}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            480: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 25,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          className="swiper-team"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id}>
              <div className="team-card">
                <div className="card-inner">
                  <div className="card-front">
                    <div className="image-container">
                      <div className="image-wrapper">
                        <img 
                          src={member.image} 
                          alt={member.alt[lang]}
                          loading="eager"
                          className={`team-image ${loadedImages[member.id] ? 'loaded' : 'loading'}`}
                          onLoad={() => handleImageLoad(member.id)}
                          onError={(e) => handleImageError(e, member)}
                        />
                        {!loadedImages[member.id] && (
                          <div className="image-skeleton">
                            <div className="skeleton-loader"></div>
                          </div>
                        )}
                      </div>
                      <div className="image-overlay"></div>
                    </div>
                    <div className="team-info">
                      <h3>{member.name[lang]}</h3>
                      <p>{member.position[lang]}</p>
                    </div>
                    <div className="card-hover-indicator">
                      <span>{t.hoverText}</span>
                      <i className={`fas fa-chevron-${lang === "ar" ? "left" : "right"}`}></i>
                    </div>
                  </div>
                  
                  <div className="card-back">
                    <div className="back-content">
                      <h3>{member.name[lang]}</h3>
                      <p className="position">{member.position[lang]}</p>
                      <div className="member-bio">
                        <p>{t.bio}</p>
                      </div>
                      <div className="member-skills">
                        {t.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{skill}</span>
                        ))}
                      </div>
                      <div className="social-links">
                        <a href="#" aria-label="LinkedIn profile">
                          <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="#" aria-label="Email contact">
                          <i className="fas fa-envelope"></i>
                        </a>
                        <a href="#" aria-label="Twitter profile">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}