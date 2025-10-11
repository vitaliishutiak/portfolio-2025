import type { Metadata } from "next";
import { Geist, Geist_Mono, Outfit } from "next/font/google";
import "../globals.css";
import ThemeProvider from "../../components/ThemeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '../../i18n';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: 'swap',
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

  return (
    <html lang={locale} dir="ltr">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5, user-scalable=yes" />
        <meta name="theme-color" content="#FFCC00" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${outfit.variable}`}>
        <NextIntlClientProvider messages={messages} locale={locale}>
          <ThemeProvider>
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

