import { CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import {
  NathCtaButton,
  NathPageHero,
  NathPhoneChip,
} from "@/components/nathreparation/shared";
import { nathConcept } from "@/lib/nathreparation-data";

export const metadata: Metadata = {
  title: "Le concept - NATH REPARATION",
};

export default function NathConceptPage() {
  return (
    <main>
      <NathPageHero
        eyebrow={nathConcept.eyebrow}
        title={nathConcept.title}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-center">
          <div className="rounded-[32px] border border-[#032549]/8 bg-white p-8 shadow-[0_24px_80px_rgba(3,37,73,0.08)]">
            <div className="space-y-6 text-[15px] leading-8 text-[#032549]/76">
              {nathConcept.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <NathCtaButton href="/nathreparation/contact">
                <CalendarDays className="size-4" />
                {nathConcept.ctaLabel}
              </NathCtaButton>
              <NathPhoneChip />
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-[#032549]/8 bg-white p-6 shadow-[0_24px_80px_rgba(3,37,73,0.08)]">
            <Image
              src={nathConcept.image}
              alt={nathConcept.title}
              width={900}
              height={900}
              className="h-auto w-full rounded-[24px] object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
