import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { contact, site } from "@/lib/data";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "ShebaByte — Technology & Software for Business", template: "%s · ShebaByte" },
  description: site.description,
  openGraph: { type: "website", siteName: site.name, title: "ShebaByte — Technology & Software for Business", description: site.description, locale: "en_US" },
  twitter: { card: "summary_large_image", title: "ShebaByte — Technology & Software for Business", description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#2563eb" };

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  description: site.description,
  email: contact.email,
  telephone: contact.phones[0],
  address: { "@type": "PostalAddress", addressLocality: "Gelan, Sidama, Awash", addressCountry: "ET" },
  ...(contact.linkedin ? { sameAs: [contact.linkedin] } : {}),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">
        <a href="#main" className="sr-only z-[60] rounded-md bg-white px-4 py-2 font-semibold text-blue-700 shadow focus:not-sr-only focus:fixed focus:top-3 focus:left-3">Skip to content</a>
        <Navbar />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      </body>
    </html>
  );
}
