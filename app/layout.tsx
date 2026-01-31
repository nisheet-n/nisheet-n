import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/sections/Navbar/Navbar";
import Footer from "@/sections/Footer/Footer";
import BackToTop from "@/sections/BackToTop/BackToTop";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.nisheet.xyz"),
  title: {
    default: "Nisheet | Portfolio",
    template: "%s | Nisheet",
  },
  description:
    "Nisheet's portfolio showcasing data analytics, engineering projects, and web development work.",
  applicationName: "Nisheet Portfolio",
  authors: [{ name: "Nisheet" }],
  creator: "Nisheet",
  keywords: [
    "Nisheet",
    "portfolio",
    "data analyst",
    "data engineer",
    "analytics",
	"Business Intelligence",
	"Business Analyst",
    "PySpark",
    "Databricks",
    "SQL",
    "Tableau",
    "Power BI",
    "Next.js",
    "React",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Nisheet | Portfolio",
    description:
      "Explore Nisheet's portfolio featuring data analytics, engineering projects, and web development work.",
    type: "website",
    siteName: "Nisheet Portfolio",
    images: [
      {
        url: "/images/ProfileImage.jpg",
        width: 1200,
        height: 630,
        alt: "Nisheet profile",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nisheet | Portfolio",
    description:
      "Explore Nisheet's portfolio featuring data analytics, engineering projects, and web development work.",
    images: ["/images/ProfileImage.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <div className="flex min-h-screen flex-col bg-background text-foreground">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </div>
      </body>
    </html>
  );
}
