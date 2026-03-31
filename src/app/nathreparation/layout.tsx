import type { Metadata } from "next";

import { NathFooter } from "@/components/nathreparation/footer";
import { NathHeader } from "@/components/nathreparation/header";
import { NathStickyCall } from "@/components/nathreparation/shared";

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
  return (
    <div className="min-h-screen bg-[#f5f8fc] text-[#032549] selection:bg-[#e62938] selection:text-white">
      <NathHeader />
      {children}
      <NathFooter />
      <NathStickyCall />
    </div>
  );
}
