import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/../config/site";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.tagline}`,
  description: siteConfig.description,
  keywords: [
    "Jalaram Sales",
    "Patan mobile shop",
    "smartphones Patan Gujarat",
    "Oppo dealer Patan",
    "Vivo dealer Patan",
    "Samsung dealer Patan",
    "iPhone Patan",
    "mobile phone store Gujarat",
    "best mobile shop Patan",
    "જલારામ સેલ્સ",
    "पाटन मोबाइल शॉप",
    "ਪਾਟਣ સ્માર્ટફોન",
  ],
  openGraph: {
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    alternateLocale: ["hi_IN", "gu_IN"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <meta name="theme-color" content="#020617" />
        <link rel="icon" href="/photos/profile.jpg" />
        {/* Indic script fonts — auto-selected for Gujarati & Devanagari Unicode ranges */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+Devanagari:wght@300;400;500;600;700&family=Noto+Sans+Gujarati:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* hreflang hints — same URL, language switched client-side */}
        <link rel="alternate" hrefLang="en" href={siteConfig.url} />
        <link rel="alternate" hrefLang="hi" href={siteConfig.url} />
        <link rel="alternate" hrefLang="gu" href={siteConfig.url} />
        <link rel="alternate" hrefLang="x-default" href={siteConfig.url} />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
