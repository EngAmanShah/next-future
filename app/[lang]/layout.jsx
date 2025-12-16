import { Poppins, Domine } from "next/font/google";
import "@/styles/globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "font-awesome/css/font-awesome.css";
import { ToastContainer } from "react-toastify";
import ContextProvider from "@/providers/ContextProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTopButton from "@/components/BackToTopButton";
import WhatsAppButton from "@/components/WhatsAppButton"; // Add this import

const primary = Poppins({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const secondary = Domine({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const metas = {
  en: {
    title: "Next Future Information Technology",
    description:
      "Next Future Information Technology is a forward-thinking digital company. We deliver innovative web and mobile app solutions, digital marketing, graphic design, and IT services tailored to drive business growth, credibility, and measurable results.",
  },
  ar: {
    title: "نكست فيوتشر لتقنية المعلومات",
    description:
      "نكست فيوتشر لتقنية المعلومات هي شركة رقمية مبتكرة. نقدم حلول تطوير المواقع والتطبيقات، التسويق الرقمي، التصميم الجرافيكي، وخدمات تكنولوجيا المعلومات المصممة لتعزيز نمو الشركات والمصداقية وتحقيق نتائج ملموسة.",
  },
};

export async function generateStaticParams() {
  return [{ lang: "en" }, { lang: "ar" }];
}

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  const baseUrl = "";
  const canonicalUrl = `${baseUrl}/${lang}`;

  const meta = metas[lang] || metas.en;

  return {
    title: {
      default: meta.title,
      template: `%s | ${meta.title}`
    },
    description: meta.description,
    keywords: [
      'web development',
      'mobile app development',
      'digital marketing',
      'IT solutions',
      'ERP systems',
      'cloud services',
      'graphic design',
      'SEO services',
      'e-commerce development',
      'تطوير المواقع',
      'تطوير التطبيقات',
      'التسويق الرقمي',
      'حلول تقنية المعلومات'
    ],
    authors: [{ name: 'Next Future Information Technology' }],
    creator: 'Next Future Information Technology',
    publisher: 'Next Future Information Technology',
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: canonicalUrl,
      languages: {
        en: `${baseUrl}/en`,
        ar: `${baseUrl}/ar`,
      },
    },
    openGraph: {
      title: meta.title,
      description: meta.description,
      type: 'website',
      url: canonicalUrl,
      siteName: 'Next Future Information Technology',
      locale: lang === 'ar' ? 'ar_SA' : 'en_US',
      images: [
        {
          url: `${baseUrl}/logo.png`,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@NextFutureTech',
      images: [`${baseUrl}/logo.png`],
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
  };
}

export default async function RootLayout({ children, params }) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  return (
    <html
      lang={lang}
      dir={lang === "ar" ? "rtl" : "ltr"}
      data-scroll-behavior="smooth"
    >
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#379DD7" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Next Future Information Technology',
              url: `https://yourwebsite.com/${lang}`,
              logo: 'https://yourwebsite.com/logo.png',
              description: metas[lang].description,
              address: {
                '@type': 'PostalAddress',
                addressCountry: 'SA',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+966539983393',
                contactType: 'Customer Service',
              },
              sameAs: [
                'https://facebook.com/nextfuturetech',
                'https://twitter.com/nextfuturetech',
                'https://linkedin.com/company/nextfuturetech',
              ],
            }),
          }}
        />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.7/dist/js/bootstrap.bundle.min.js"></script>
      </head>
      <body>
        <ContextProvider>
          <Navbar lang={lang} />
          <ToastContainer position="top-center" autoClose={3000} />
          <main
            className="d-flex flex-column flex-grow-1 bg-white"
            style={{ minHeight: "100vh", paddingTop: "15.6px" }}
          >
            {children}
          </main>
          <BackToTopButton />
         <WhatsAppButton lang={lang} /> {/* Add this line */}
          <Footer lang={lang} />
        </ContextProvider>
      </body>
    </html>
  );
}
