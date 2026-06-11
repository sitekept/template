import type { Metadata } from "next";
import { Fraunces, Manrope } from "next/font/google";

import { DoubleEspressoShell } from "./double-espresso-shell";

const display = Fraunces({
  variable: "--font-double-display",
  subsets: ["latin"],
  display: "swap",
});

const sans = Manrope({
  variable: "--font-double-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env["NEXT_PUBLIC_SITE_URL"] ?? "http://127.0.0.1:3002"
  ),
  title: "Double Espresso - Cafe in Jaffa, Tel Aviv",
  description:
    "Double Espresso is a local Jaffa cafe for espresso, brunch, light meals and relaxed terrace seating near Jerusalem Boulevard.",
  keywords:
    "Double Espresso, Jaffa cafe, Tel Aviv coffee, coffee shop Jaffa, brunch Tel Aviv",
  authors: [{ name: "Double Espresso" }],
  openGraph: {
    title: "Double Espresso - Cafe in Jaffa, Tel Aviv",
    description:
      "A warm Jaffa cafe website concept for coffee, brunch, light meals and easy directions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/double-espresso/gallery/google-01.jpg",
        width: 1200,
        height: 900,
        alt: "Double Espresso storefront in Jaffa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Double Espresso - Cafe in Jaffa, Tel Aviv",
    description:
      "A warm Jaffa cafe website concept for coffee, brunch, light meals and easy directions.",
  },
};

export default function DoubleEspressoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${display.variable} ${sans.variable} overflow-x-hidden bg-[#f6f1e7] text-[#5a3a2b]`}
      style={{ fontFamily: "var(--font-double-sans)" }}
    >
      <DoubleEspressoShell>{children}</DoubleEspressoShell>
    </div>
  );
}
