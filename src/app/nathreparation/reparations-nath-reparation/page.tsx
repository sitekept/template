import type { Metadata } from "next";
import Image from "next/image";

import { NathPageHero, NathPhoneChip } from "@/components/nathreparation/shared";
import { nathRepairs } from "@/lib/nathreparation-data";

export const metadata: Metadata = {
  title: "Reparations - NATH REPARATION",
};

export default function NathRepairsPage() {
  return (
    <main>
      <NathPageHero
        eyebrow={nathRepairs.eyebrow}
        title={nathRepairs.title}
        intro={nathRepairs.intro}
      />

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-8 flex justify-start">
          <NathPhoneChip />
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {nathRepairs.items.map((item) => (
            <article
              key={item.title}
              className="overflow-hidden rounded-[30px] border border-[#032549]/8 bg-white shadow-[0_24px_80px_rgba(3,37,73,0.08)]"
            >
              <div className="relative aspect-[1.1] bg-[#edf3f9]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1280px) 50vw, 33vw"
                />
              </div>
              <div className="p-7">
                <div className="h-1 w-14 rounded-full bg-[#e62938]" />
                <h2 className="mt-5 text-2xl font-black tracking-[-0.03em] text-[#032549]">
                  {item.title}
                </h2>
                <p className="mt-4 text-[15px] leading-8 text-[#032549]/76">
                  {item.excerpt}
                </p>
                <div className="mt-6 inline-flex rounded-full bg-[#032549] px-4 py-2 text-sm font-semibold text-white">
                  {item.price}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
