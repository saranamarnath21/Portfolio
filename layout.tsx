import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const siteUrl = "https://chandanasaran.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Saran Amarnath | Project Engineer & Naval Architect",
  description:
    "Project Engineer and MSc Naval Architecture candidate with offshore oil & gas, offshore wind, shipyard engineering and marine research experience.",
  keywords: [
    "Project Engineer",
    "Naval Architect",
    "Offshore Engineering",
    "Subsea Engineering",
    "Offshore Wind",
    "Marine Engineering",
    "Shipbuilding",
    "Underwater Radiated Noise",
  ],
  authors: [{ name: "Saran Amarnath" }],
  openGraph: {
    title: "Saran Amarnath | Project Engineer & Naval Architect",
    description:
      "Project Engineer and MSc Naval Architecture candidate with offshore oil & gas, offshore wind, shipyard engineering and marine research experience.",
    url: siteUrl,
    siteName: "Saran Amarnath",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saran Amarnath | Project Engineer & Naval Architect",
    description:
      "Project Engineer and MSc Naval Architecture candidate with offshore oil & gas, offshore wind, shipyard engineering and marine research experience.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="flex min-h-screen flex-col bg-[#06121B] text-[#F3F6F7]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-[#25B7D3] focus:px-4 focus:py-2 focus:text-[#06121B]"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
