import { CalendarDays } from "lucide-react";
import type { Metadata } from "next";

import { NathCtaButton, NathPageHero } from "@/components/nathreparation/shared";
import { nathFaq } from "@/lib/nathreparation-data";

export const metadata: Metadata = {
  title: "Questions fréquentes - NATH REPARATION",
};

export default function NathFaqPage() {
  return (
    <main>
      <NathPageHero title={nathFaq.title} />

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {nathFaq.items.map((item) => (
            <article
              key={item.question}
              className="rounded-[30px] border border-[#032549]/8 bg-white p-7 shadow-[0_24px_80px_rgba(3,37,73,0.08)]"
            >
              <h2 className="text-xl font-semibold text-[#032549]">
                {item.question}
              </h2>
              <p className="mt-4 text-[15px] leading-8 text-[#032549]/76">
                {item.answer}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <NathCtaButton href="/nathreparation/contact">
            <CalendarDays className="size-4" />
            {nathFaq.ctaLabel}
          </NathCtaButton>
        </div>
      </section>
    </main>
  );
}
