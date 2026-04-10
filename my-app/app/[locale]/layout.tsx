import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import ThemeProvider from "../../components/ThemeProvider";
import LenisProvider from "../../components/LenisProvider";
import IntlProvider from "../../components/IntlProvider";
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Vitalii Shutiak | Frontend Developer & UI/UX Designer",
  description: "Portfolio of Vitalii Shutiak - Frontend developer specializing in React, Next.js, and modern web technologies. View my projects and get in touch.",
  keywords: ["Frontend Developer", "React", "Next.js", "Web Development", "UI/UX", "Portfolio"],
  authors: [{ name: "Vitalii Shutiak" }],
  creator: "Vitalii Shutiak",
  publisher: "Vitalii Shutiak",
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
  openGraph: {
    type: 'website',
    locale: 'en_US',
    title: 'Vitalii Shutiak | Frontend Developer',
    description: 'Portfolio showcasing modern web development projects',
    siteName: 'Vitalii Shutiak Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vitalii Shutiak | Frontend Developer',
    description: 'Portfolio showcasing modern web development projects',
  },
  metadataBase: new URL('https://vitaliishutiak.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en': '/en',
      'uk': '/uk',
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  
  // Validate that the incoming `locale` parameter is valid
  type LocaleType = typeof locales[number];
  if (!locales.includes(locale as LocaleType)) {
    notFound();
  }

  // Providing all messages to the client with explicit locale
  const messages = await getMessages({ locale });

  // Structured Data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Vitalii Shutiak",
    "jobTitle": "Frontend Developer",
    "description": "Frontend developer specializing in React, Next.js, and modern web technologies",
    "url": "https://vitaliishutiak.com",
    "image": "https://vitaliishutiak.com/hero-image@2x.png",
    "sameAs": [
      "https://linkedin.com/in/vitaliishutiak",
      "https://github.com/vitaliishutiak",
      "https://twitter.com/vitaliishutiak"
    ],
    "knowsAbout": [
      "React",
      "Next.js",
      "TypeScript",
      "Web Development",
      "UI/UX Design",
      "Frontend Development"
    ]
  };

  const themeBootstrap = `(function(){try{var r=document.documentElement;r.classList.remove('light','dark');r.classList.add('light');}catch(e){}})();`;

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#FFCC00" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/hero-image@2x.png" as="image" type="image/png" />
        <script dangerouslySetInnerHTML={{ __html: themeBootstrap }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.variable} suppressHydrationWarning>
        <IntlProvider messages={messages} locale={locale}>
          <ThemeProvider>
            <LenisProvider>
              {children}
            </LenisProvider>
          </ThemeProvider>
        </IntlProvider>
      </body>
    </html>
  );
}

