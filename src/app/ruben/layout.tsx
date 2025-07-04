import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ruben Hagège Pâtisserie - Haute Pâtisserie Alfortville",
  description:
    "Découvrez l'univers de Ruben Hagège, Meilleur Apprenti de France 2021, et ses créations pâtissières d'exception à Alfortville. Commandes sur mesure pour tous vos événements.",
  keywords:
    "pâtisserie, Ruben Hagège, Alfortville, Meilleur Apprenti de France, gâteaux sur mesure, événements, traiteur",
  authors: [{ name: "Ruben Hagège" }],
  openGraph: {
    title: "Ruben Hagège Pâtisserie - Haute Pâtisserie Alfortville",
    description:
      "Découvrez l'univers de Ruben Hagège, Meilleur Apprenti de France 2021, et ses créations pâtissières d'exception à Alfortville.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ruben Hagège Pâtisserie - Haute Pâtisserie Alfortville",
    description:
      "Découvrez l'univers de Ruben Hagège, Meilleur Apprenti de France 2021, et ses créations pâtissières d'exception à Alfortville.",
  },
};

export default function RubenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
