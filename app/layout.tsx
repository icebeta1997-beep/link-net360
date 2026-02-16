import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import JsonLd from "./components/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://link-net360.com'),
  title: {
    default: "Link Net360 Technologies — FZCO | IT Solutions & Infrastructure UAE",
    template: "%s | Link Net360 Technologies"
  },
  description: "Link Net360 Technologies - FZCO delivers comprehensive IT solutions, network infrastructure, server management, cybersecurity, cloud services, and managed IT support across Dubai and the UAE.",
  keywords: [
    "IT solutions UAE",
    "network infrastructure Dubai",
    "server management",
    "cybersecurity services",
    "managed IT support UAE",
    "Link Net360",
    "IT consultancy Dubai",
    "VoIP solutions",
    "cloud migration",
    "data backup recovery",
    "IT company Dubai",
    "network design UAE",
    "firewall solutions Dubai",
    "virtualization services",
    "IT outsourcing UAE"
  ],
  authors: [{ name: "Link Net360 Technologies" }],
  creator: "Link Net360 Technologies",
  publisher: "Link Net360 Technologies",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: 'https://link-net360.com',
  },
  openGraph: {
    title: "Link Net360 Technologies — FZCO | IT Solutions UAE",
    description: "Leading IT Solutions & Infrastructure Provider in UAE. We specialize in networking, security, cloud services, and managed IT support.",
    url: 'https://link-net360.com',
    siteName: 'Link Net360 Technologies',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Link Net360 Technologies — IT Solutions & Infrastructure UAE',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Link Net360 Technologies — FZCO",
    description: "Comprehensive IT Solutions & Infrastructure Services in UAE.",
    images: ['/og-image.png'],
  },
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} antialiased`}>
        <JsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
