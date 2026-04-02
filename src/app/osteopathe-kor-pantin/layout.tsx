import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ostéopathe KOR Pantin - Template",
  description:
    "Template inspiré du site Osteopathe KOR Pantin avec présentation du praticien, consultation, FAQ et contact.",
  openGraph: {
    title: "Ostéopathe KOR Pantin - Template",
    description:
      "Landing page ostéopathe avec hero, motifs de consultation, présentation praticien, FAQ et contact.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function OsteopatheKorPantinLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
