import type { Metadata } from "next";
import { Cormorant_Garamond, EB_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-eb-garamond",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Guidance Business — Build a Business Around Your Wisdom",
  description:
    "A complete system for coaches, guides, and practitioners who want to earn $5–20K/month without burning out or selling their soul.",
  metadataBase: new URL("https://guidancebusiness.com"),
  openGraph: {
    title: "Guidance Business — Build a Business Around Your Wisdom",
    description:
      "A complete system for coaches, guides, and practitioners who want to earn $5–20K/month without burning out or selling their soul.",
    url: "https://guidancebusiness.com",
    siteName: "Guidance Business",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guidance Business — Build a Business Around Your Wisdom",
    description:
      "A complete system for coaches, guides, and practitioners who want to earn $5–20K/month without burning out or selling their soul.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${ebGaramond.variable}`}>
        {children}
        <Script
          src="//tinder.thrivecart.com/embed/v2/thrivecart.js"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
