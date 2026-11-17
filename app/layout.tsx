import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "lenis/dist/lenis.css";
import "./globals.css";
import { PortfolioRuntime } from "@/components/portfolio/runtime";

import { portfolio } from "@/content/portfolio";
import { site, siteUrl } from "@/content/seo";

const funnel = localFont({ src: "../public/fonts/FunnelDisplay.ttf", variable: "--font-funnel", display: "swap", weight: "300 800" });

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${site.name} | Website Design & Development Company in Coimbatore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [...brandKeywords(), ...serviceKeywords()],
  authors: [{ name: portfolio.founder.name, url: "https://mohanprasath.in/" }],
  creator: portfolio.founder.name,
  publisher: site.name,
  applicationName: site.name,
  category: "technology",
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    locale: site.locale,
    url: siteUrl,
    siteName: site.name,
    title: `${site.name} | Website Design & Development Company in Coimbatore`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Website Design & Development Company in Coimbatore`,
    description: site.description,
  },
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  formatDetection: { telephone: false, email: false, address: false },
};

export const viewport: Viewport = {
  themeColor: "#365de6",
  width: "device-width",
  initialScale: 1,
};

function brandKeywords() {
  return [
    "Zyra Digitals",
    "Zyra Digitals Coimbatore",
    "Zyra Digitals official website",
    "Zyra Digitals digital agency",
    "Zyra Digitals website design",
    "Zyra Digitals website development",
    "Mohan Prasath S",
    "Mohan Prasath S Coimbatore",
    "Zyra Digitals founder",
  ];
}

function serviceKeywords() {
  return [
    "website design company Coimbatore",
    "website development company in Coimbatore",
    "best website designer in Coimbatore",
    "best web design company in Coimbatore",
    "3D website design company",
    "creative website design Coimbatore",
    "e-commerce website development",
    "business website development Coimbatore",
    "web design agency Coimbatore",
    "SEO services Coimbatore",
    "branding and digital design",
  ];
}

const structuredData = {
  organization: {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteUrl}/#organization`,
    name: site.name,
    url: siteUrl,
    logo: `${siteUrl}/icon.svg`,
    description: site.description,
    founder: { "@type": "Person", "@id": `${siteUrl}/#founder` },
    email: `mailto:${site.email}`,
    sameAs: site.socials.map((s) => s.url),
    areaServed: [
      { "@type": "City", name: site.location.city },
      { "@type": "State", name: site.location.region },
      { "@type": "Country", name: site.location.country },
    ],
  },
  website: {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: site.name,
    description: site.description,
    publisher: { "@id": `${siteUrl}/#organization` },
    inLanguage: "en-IN",
  },
  person: {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#founder`,
    name: portfolio.founder.name,
    jobTitle: "Founder",
    description: `${portfolio.founder.name} is the founder of ${site.name}, a creative digital agency in ${site.location.city}, ${site.location.region}.`,
    worksFor: { "@id": `${siteUrl}/#organization` },
    url: "https://mohanprasath.in/",
    sameAs: site.socials.map((s) => s.url),
    address: {
      "@type": "PostalAddress",
      addressLocality: site.location.city,
      addressRegion: site.location.region,
      addressCountry: site.location.addressCountry,
    },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={funnel.variable}>
        <a className="skip-link" href="#main">Skip to content</a>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.organization) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.website) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.person) }}
        />
        <PortfolioRuntime>{children}</PortfolioRuntime>

      </body>
    </html>
  );
}
