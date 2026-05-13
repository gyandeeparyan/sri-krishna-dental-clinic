import {
  Cormorant_Garamond,
  Geist_Mono,
  Inter,
  Inter_Tight,
} from "next/font/google";

import { SiteFooter } from "@/components/site-footer";
import { SiteNavbar } from "@/components/site-navbar";
import { ThemeProvider } from "@/components/theme-provider";
import Script from "next/script";
import "./globals.css";

const bodyFont = Inter_Tight({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const headingFont = Cormorant_Garamond({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const uiFont = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const monoFont = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Sri Krishna Dental & Aesthetic Clinic | Best Dental Care in Peterwar, Jharkhand",
  description:
    "Sri Krishna Dental & Aesthetic Clinic in Peterwar, Jharkhand. Expert dental care by Dr. Abhijeet Prakash. Root canals, teeth cleaning, fillings, crowns, cosmetic dentistry, and family dental services.",
  keywords: [
    "dental clinic peterwar",
    "dentist jharkhand",
    "teeth cleaning peterwar",
    "root canal treatment",
    "dental implants",
    "cosmetic dentistry",
    "family dentist",
    "Dr. Abhijeet Prakash",
    "dental care peterwar",
    "smile makeover",
    "teeth whitening",
    "emergency dental care",
  ],
  authors: [{ name: "Sri Krishna Dental & Aesthetic Clinic" }],
  creator: "Sri Krishna Dental & Aesthetic Clinic",
  publisher: "Sri Krishna Dental & Aesthetic Clinic",
  formatDetection: {
    telephone: true,
    email: true,
  },
  openGraph: {
    title:
      "Sri Krishna Dental & Aesthetic Clinic | Best Dentist in Peterwar, Jharkhand",
    description:
      "Professional dental and aesthetic services by Dr. Abhijeet Prakash. Root canals, cleanings, crowns, and cosmetic dentistry.",
    url: "https://srikrishnadentalclinic.in",
    siteName: "Sri Krishna Dental & Aesthetic Clinic",
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "https://images.unsplash.com/photo-1588776813941-dcf9c55e84d2?auto=format&fit=crop&w=1200&q=80",
        width: 1200,
        height: 630,
        alt: "Sri Krishna Dental & Aesthetic Clinic",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sri Krishna Dental & Aesthetic Clinic | Peterwar, Jharkhand",
    description:
      "Expert dental care and aesthetic services. Call +91 9934838354 for appointments.",
    images: [
      "https://images.unsplash.com/photo-1588776813941-dcf9c55e84d2?auto=format&fit=crop&w=1200&q=80",
    ],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://srikrishnadentalclinic.in",
  },
  category: "Healthcare",
  classification: "Dental Clinic",
};

export default function RootLayout({ children }) {
  const themeScript = `
    (function() {
      try {
        const stored = localStorage.getItem('theme');
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const isDark = stored ? stored === 'dark' : prefersDark;
        if (!isDark) {
          document.documentElement.classList.add('light');
        }
      } catch (e) {}
    })()
  `;

  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${bodyFont.variable} ${headingFont.variable} ${uiFont.variable} ${monoFont.variable} h-full scroll-smooth antialiased`}
    >
      <head>
      <link rel="icon" href="/brand-mark.svg" type="image/svg+xml" />
      <Script
        id="theme-init"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: themeScript }}
      />
      <Script
        id="schema-org"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "MedicalBusiness",
            "name": "Sri Krishna Dental & Aesthetic Clinic",
            "description": "Professional dental and aesthetic care clinic",
            "url": "https://srikrishnadentalclinic.in",
            "telephone": "+91 9934838354",
            "email": "care@srikrishnadentalclinic.in",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Peterwar",
              "addressRegion": "Jharkhand",
              "addressCountry": "IN"
            },
            "image": "https://images.unsplash.com/photo-1588776813941-dcf9c55e84d2?auto=format&fit=crop&w=1200&q=80",
            "medicalSpecialty": ["Dentistry", "Cosmetic Dentistry"],
            "doctor": {
              "@type": "Person",
              "name": "Dr. Abhijeet Prakash"
            },
            "sameAs": [
              "https://www.instagram.com/sk_dentalclinic.2301/",
              "https://wa.me/919934838354"
            ]
          }),
        }}
      />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-background text-foreground"
      >
        <ThemeProvider>
          <div className="relative flex min-h-full flex-col">
            <SiteNavbar />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
