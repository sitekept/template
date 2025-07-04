import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Annecy Electricians - Services d'Électricité à Annecy",
  description:
    "Services d'électricité professionnels à Annecy. Installation, réparation et maintenance électrique. Intervention rapide 7j/7. Devis gratuit.",
  keywords:
    "électricien Annecy, installation électrique, réparation électrique, maintenance électrique, dépannage électrique, électricien 74940",
  authors: [{ name: "Annecy Electricians France Services" }],
  openGraph: {
    title: "Annecy Electricians - Services d'Électricité à Annecy",
    description:
      "Services d'électricité professionnels à Annecy. Installation, réparation et maintenance électrique. Intervention rapide 7j/7.",
    type: "website",
    locale: "fr_FR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Annecy Electricians - Services d'Électricité à Annecy",
    description:
      "Services d'électricité professionnels à Annecy. Installation, réparation et maintenance électrique. Intervention rapide 7j/7.",
  },
};

export default function AnnecyElecLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
