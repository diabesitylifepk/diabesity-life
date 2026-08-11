import Breadcrumbs from "@/components/Breadcrumbs";
import ChatWidget from "@/components/ChatWidget";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { AuthProvider } from "@/contexts/AuthContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { BreadcrumbProvider } from "@/contexts/BreadcrumbContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import type { Metadata } from "next";
import { IBM_Plex_Sans, IBM_Plex_Sans_Condensed } from "next/font/google";
import Script from "next/script";
import { Suspense } from "react";
import "./globals.css";

const ibmPlexSans = IBM_Plex_Sans({
  variable: "--font-ibm-plex-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const ibmPlexSansCondensed = IBM_Plex_Sans_Condensed({
  variable: "--font-ibm-plex-sans-condensed",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const SITE_URL = "https://diabesity.life";
const SITE_NAME = "Diabesity Life";
const SITE_TITLE = "Diabesity - Living with diabesity in Pakistan";
const SITE_DESCRIPTION =
  "We believe every person in Pakistan deserves a life free of diabesity, and we are here to be your compassionate partner in making that a reality.";
const OG_IMAGE = `${SITE_URL}/logo.png`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    locale: "en_PK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: [OG_IMAGE],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalOrganization",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  description: SITE_DESCRIPTION,
  areaServed: "Pakistan",
  medicalSpecialty: ["Endocrinology", "Diabetes", "Obesity Medicine"],
  sameAs: [
    "https://www.facebook.com/diabesitylifepk",
    "https://x.com/diabesitylifepk",
    "https://www.instagram.com/diabesitylifepk",
    "https://www.youtube.com/@diabesitylifepk",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c") }}
      />
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-J2BBGRF7WQ"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-J2BBGRF7WQ');
        `}
      </Script>
      <body
        className={`${ibmPlexSans.variable} ${ibmPlexSansCondensed.variable} antialiased`}
      >
        <LanguageProvider>
          <AuthProvider>
            <BreadcrumbProvider>
              <SidebarProvider>
                <Header />
                <Breadcrumbs />
                <div className="lg:flex">
                  <Suspense fallback={<div />}>
                    <Sidebar />
                  </Suspense>
                  <main className="w-full lg:flex-1">{children}</main>
                </div>
                <Footer />
                <ChatWidget />
              </SidebarProvider>
            </BreadcrumbProvider>
          </AuthProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
