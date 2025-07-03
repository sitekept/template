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
  title: "Ruben Hagège Pâtisserie - Haute Pâtisserie Alfortville",
  description:
    "Découvrez l'univers de Ruben Hagège, Meilleur Apprenti de France 2021, et ses créations pâtissières d'exception à Alfortville. Commandes sur mesure pour tous vos événements.",
  keywords:
    "pâtisserie, Ruben Hagège, Alfortville, Meilleur Apprenti de France, gâteaux sur mesure, événements, traiteur",
  authors: [{ name: "Ruben Hagège" }],
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
