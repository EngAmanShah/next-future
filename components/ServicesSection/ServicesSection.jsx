import Services from "@/components/Services";

export default function ServicesSection({ lang }) {
  // Define the services content directly in the component
  const content = {
    en: {
      discoverTitle: "Explore Our Services",
      discoverDescription:
        "Comprehensive digital and creative services designed to grow your brand.",
      services: [
        {
          title: "Digital Marketing",
          image: "/services/digital.gif",
          description:
            "Complete digital marketing solutions — SEO, social media, online ads, and more.",
        },
        {
          title: "Application Development",
          image: "/services/app-development.gif",
          description:
            "Custom web apps and enterprise portals built for performance and scalability.",
        },
        {
          title: "Graphic Design",
          image: "/services/graphic-design.gif",
          description:
            "Professional branding and visuals — from logos to full identity systems.",
        },
        {
          title: "Video & Animation",
          image: "/services/video-animation.gif",
          description:
            "Engaging motion graphics, animations, and video content that tell your story.",
        },
        {
          title: "Information Technology",
          image: "/services/it.gif",
          description:
            "End-to-end IT consulting and infrastructure solutions for modern businesses.",
        },
        {
          title: "Mobile App Development",
          image: "/services/mobile-app.gif",
          description:
            "Cross-platform iOS and Android apps with smooth UX and high performance.",
        },
        {
          title: "ERP Solutions",
          image: "/services/app-development.gif",
          description:
            "Comprehensive Enterprise Resource Planning systems to streamline your business operations.",
        },
        {
          title: "CMS Development",
          image: "/services/graphic-design.gif",
          description:
            "Custom Content Management Systems for easy content updates and management.",
        },
        {
          title: "Odoo ERP",
          image: "/services/erp.png",
          description:
            "Open-source Odoo ERP implementation and customization for your business needs.",
        },
      ],
    },

    ar: {
      discoverTitle: "اكتشف خدماتنا",
      discoverDescription:
        "مجموعة شاملة من الخدمات الرقمية والإبداعية المصممة لتعزيز علامتك التجارية.",
      services: [
        {
          title: "التسويق الرقمي",
          image: "/services/digital.gif",
          description:
            "حلول تسويق رقمي متكاملة — SEO، وسائل التواصل الاجتماعي، الإعلانات والمزيد.",
        },
        {
          title: "تطوير التطبيقات",
          image: "/services/app-development.gif",
          description:
            "تطبيقات ويب وبوابات مؤسسية مخصصة للأداء العالي وسهولة التوسع.",
        },
        {
          title: "التصميم الجرافيكي",
          image: "/services/graphic-design.gif",
          description:
            "تصميمات احترافية — من الشعارات إلى أنظمة الهوية الكاملة.",
        },
        {
          title: "الفيديو والأنيميشن",
          image: "/services/video-animation.gif",
          description:
            "مقاطع فيديو ورسوم متحركة جذابة تعبر عن فكرتك بطريقة احترافية.",
        },
        {
          title: "تكنولوجيا المعلومات",
          image: "/services/it.gif",
          description:
            "استشارات شاملة ودعم للبنية التحتية التقنية للشركات الحديثة.",
        },
        {
          title: "تطبيقات الهواتف",
          image: "/services/mobile-app.gif",
          description:
            "تطبيقات iOS و Android متكاملة بواجهة سلسة وأداء قوي.",
        },
        {
          title: "حلول ERP",
          image: "/services/erp.png",
          description:
            "أنظمة تخطيط موارد المؤسسة الشاملة لتبسيط عمليات عملك.",
        },
        {
          title: "أودو ERP",
          image: "/services/graphic-design.gif",
          description:
            "تنفيذ وتخصيص نظام أودو ERP مفتوح المصدر لاحتياجات عملك.",
        },
        {
          title: "ERP مخصص",
          image: "/services/it.gif",
          description:
            "حلول ERP مصممة خصيصًا لتتناسب مع عمليات عملك الفريدة.",
        },
      ],
    },
  };

  const {
    discoverTitle,
    discoverDescription,
    services,
  } = content[lang] || content.en;

  return (
    <section 
      style={{ 
        backgroundImage: "url('/bg5.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed"
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          padding: "4rem 0"
        }}
      >
        <Services
          lang={lang}
          servicesData={services}
          sectionTitle={discoverTitle}
          sectionDescription={discoverDescription}
        />
      </div>
    </section>
  );
}