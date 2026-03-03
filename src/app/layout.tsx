import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Maxplushouse — Architecture & Home Design",
    template: "%s | Maxplushouse",
  },
  description:
    "Maxplushouse is an architecture and home design firm specializing in ultra-minimalist, modern residential spaces across Thailand.",
  keywords: [
    "architecture",
    "home design",
    "minimalist",
    "interior design",
    "Thailand",
    "Maxplushouse",
  ],
  openGraph: {
    title: "Maxplushouse — Architecture & Home Design",
    description:
      "Ultra-minimalist architecture and home design. We craft spaces that breathe.",
    url: "https://maxplushouse.com",
    siteName: "Maxplushouse",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maxplushouse — Architecture & Home Design",
    description:
      "Ultra-minimalist architecture and home design. We craft spaces that breathe.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased bg-white text-black">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
