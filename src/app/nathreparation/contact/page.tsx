import { Phone } from "lucide-react";
import type { Metadata } from "next";

import { NathPageHero } from "@/components/nathreparation/shared";
import { nathContact } from "@/lib/nathreparation-data";

export const metadata: Metadata = {
  title: "Nous contacter - NATH REPARATION",
};

export default function NathContactPage() {
  return (
    <main>
      <NathPageHero title={nathContact.title} intro={nathContact.intro} />

      <section className="mx-auto max-w-[1200px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-[#032549]/8 bg-white p-8 shadow-[0_24px_80px_rgba(3,37,73,0.08)]">
            <form className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  type="text"
                  placeholder={nathContact.placeholders[0]}
                  className="h-12 rounded-2xl border border-[#032549]/10 bg-[#f8fbff] px-4 text-sm text-[#032549] outline-none transition-colors focus:border-[#e62938]"
                  required
                />
                <input
                  type="text"
                  placeholder={nathContact.placeholders[1]}
                  className="h-12 rounded-2xl border border-[#032549]/10 bg-[#f8fbff] px-4 text-sm text-[#032549] outline-none transition-colors focus:border-[#e62938]"
                  required
                />
              </div>
              <input
                type="email"
                placeholder={nathContact.placeholders[2]}
                className="h-12 w-full rounded-2xl border border-[#032549]/10 bg-[#f8fbff] px-4 text-sm text-[#032549] outline-none transition-colors focus:border-[#e62938]"
                required
              />
              <input
                type="tel"
                placeholder={nathContact.placeholders[3]}
                className="h-12 w-full rounded-2xl border border-[#032549]/10 bg-[#f8fbff] px-4 text-sm text-[#032549] outline-none transition-colors focus:border-[#e62938]"
                required
              />
              <textarea
                placeholder={nathContact.placeholders[4]}
                rows={7}
                className="w-full rounded-3xl border border-[#032549]/10 bg-[#f8fbff] px-4 py-4 text-sm text-[#032549] outline-none transition-colors focus:border-[#e62938]"
              />
              <button
                type="submit"
                className="inline-flex h-12 items-center justify-center rounded-full bg-[#e62938] px-7 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(230,41,56,0.32)] transition-colors hover:bg-[#d12031]"
              >
                {nathContact.submitLabel}
              </button>
            </form>
          </div>

          <div className="rounded-[32px] border border-[#032549]/8 bg-[linear-gradient(135deg,#022243_0%,#002359_100%)] p-8 text-white shadow-[0_24px_80px_rgba(2,34,67,0.24)]">
            <h2 className="text-3xl font-black tracking-[-0.03em]">
              {nathContact.infoTitle}
            </h2>
            <div className="mt-6 inline-flex items-center gap-3 text-2xl font-semibold">
              <Phone className="size-6 text-[#e62938]" />
              {nathContact.infoPhone}
            </div>
            <div className="mt-8 overflow-hidden rounded-[28px] border border-white/10 bg-white/8">
              {nathContact.infoRows.map(([label, value]) => (
                <div
                  key={label}
                  className="grid grid-cols-[90px_1fr] gap-4 border-b border-white/10 px-5 py-4 last:border-b-0"
                >
                  <p className="font-semibold text-white">{label}</p>
                  <p className="text-white/78">{value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
