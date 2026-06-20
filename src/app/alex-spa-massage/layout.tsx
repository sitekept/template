import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

const cormorant = Cormorant_Garamond({
  variable: "--alex-spa-font-serif",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--alex-spa-font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Spa Massage | Private SiteKept Preview",
  description:
    "Private SiteKept preview for Alex Spa Massage in Paphos, Cyprus.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function AlexSpaLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${cormorant.variable} ${manrope.variable}`}>
      {children}
    </div>
  );
}
