import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nath Reparation",
  description:
    "Clone de la page d'accueil Nath Reparation intégré comme template.",
};

export default function NathReparationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
