import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "WebFacto - Showcase Portfolio",
  description:
    "Découvrez notre portfolio de sites vitrines pour différents métiers : pâtisserie, fleuriste, réparation informatique, boulangerie et plus encore.",
  keywords:
    "site vitrine, portfolio, pâtisserie, fleuriste, réparation ordinateur, boulangerie, showcase",
  authors: [{ name: "WebFacto" }],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body
        className={`${playfairDisplay.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
