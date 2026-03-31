import { CalendarDays } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";

import {
  NathCtaButton,
  NathInlineLink,
  NathSectionEyebrow,
  NathStars,
  NathVideoCard,
} from "@/components/nathreparation/shared";
import { nathHome } from "@/lib/nathreparation-data";

export const metadata: Metadata = {
  title: "NATH REPARATION - Le spécialiste de la réparation mobile à domicile",
};

export default function NathReparationHomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src={nathHome.heroBackground}
            alt="Nath Réparation"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(2,34,67,0.88),rgba(4,79,122,0.68))]" />
        </div>

          <div className="relative mx-auto grid max-w-[1200px] gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:py-24">
          <div className="text-white">
            <div className="mt-6 space-y-2">
              {nathHome.heroLines.map((line) => (
                <p
                  key={line}
                  className="text-3xl font-black tracking-[-0.04em] sm:text-5xl"
                >
                  {line}
                </p>
              ))}
              <p className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">
                {nathHome.heroAvailabilityPrefix}{" "}
                <span className="text-[#e62938]">
                  {nathHome.heroAvailabilityHighlight}
                </span>
              </p>
            </div>

            <div className="mt-8 max-w-2xl rounded-[28px] border border-white/14 bg-white/10 p-6 backdrop-blur">
              <p className="text-3xl font-black tracking-[-0.03em] sm:text-4xl">
                06 18 18 68 68
              </p>
              <p className="mt-4 whitespace-pre-line text-base leading-8 text-white/82">
                {nathHome.intro}
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row">
                <NathCtaButton href="/nathreparation/contact">
                  <CalendarDays className="size-4" />
                  {nathHome.ctaLabel}
                </NathCtaButton>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto max-w-[520px] rounded-[36px] border border-white/14 bg-white/10 p-6 shadow-[0_34px_100px_rgba(2,34,67,0.3)] backdrop-blur sm:p-8">
              <div className="absolute -left-5 top-10 hidden rounded-3xl border border-white/14 bg-white/12 px-4 py-3 text-sm font-semibold text-white sm:block">
                7j/7, 24h/24
              </div>
              <div className="absolute -right-5 bottom-16 hidden rounded-3xl border border-white/14 bg-white/12 px-4 py-3 text-sm font-semibold text-white sm:block">
                Paris et sa banlieue
              </div>
              <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(230,41,56,0.22),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                <Image
                  src={nathHome.heroPhoneImage}
                  alt="iPhone X"
                  width={604}
                  height={737}
                  className="mx-auto h-auto w-full max-w-[380px] translate-y-4 object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[900px] px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <NathVideoCard image={nathHome.videoImage} href={nathHome.videoHref} />
      </section>

      <section className="mx-auto max-w-[1200px] space-y-18 px-4 py-6 sm:px-6 lg:px-8 lg:space-y-24 lg:py-10">
        {nathHome.serviceSections.map((section, index) => (
          <div
            key={section.title}
            className={`grid gap-10 lg:grid-cols-2 lg:items-center ${
              index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
            }`}
          >
            <div className="relative overflow-hidden rounded-[32px] border border-[#032549]/8 bg-white p-6 shadow-[0_24px_80px_rgba(3,37,73,0.08)]">
              <Image
                src={section.image}
                alt={section.title}
                width={900}
                height={900}
                className="h-auto w-full rounded-[24px] object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="rounded-[32px] border border-[#032549]/8 bg-white p-8 shadow-[0_24px_80px_rgba(3,37,73,0.08)]">
              <div className="h-1 w-16 rounded-full bg-[#e62938]" />
              <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#032549] sm:text-4xl">
                {section.title}
              </h2>
              <div className="mt-6 space-y-5 text-[15px] leading-8 text-[#032549]/76">
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <div className="mt-8">
                <NathInlineLink href="/nathreparation/contact">
                  Fixer un RDV
                </NathInlineLink>
              </div>
            </div>
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-[1200px] px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <div className="rounded-[36px] border border-[#032549]/8 bg-white p-6 shadow-[0_30px_90px_rgba(3,37,73,0.08)] sm:p-8 lg:p-10">
          <div className="max-w-3xl">
            <NathSectionEyebrow>{nathHome.testimonialsIntro}</NathSectionEyebrow>
            <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#032549] sm:text-5xl">
              {nathHome.testimonialsTitle}
            </h2>
          </div>
          <div className="mt-10 grid gap-4 lg:grid-cols-2 xl:grid-cols-3">
            {nathHome.testimonials.map((item) => (
              <article
                key={`${item.name}-${item.service}`}
                className="rounded-[28px] border border-[#032549]/8 bg-[#f8fbff] p-6 transition-transform duration-300 hover:-translate-y-1"
              >
                <NathStars />
                <p className="mt-4 whitespace-pre-line text-[15px] leading-7 text-[#032549]/76">
                  {item.quote}
                </p>
                <p className="mt-5 text-lg font-semibold text-[#032549]">
                  {item.name}
                </p>
                <p className="text-sm text-[#044f7a]">{item.service}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-4 pb-24 sm:px-6 lg:px-8">
        <div className="mb-10 max-w-3xl">
          <NathSectionEyebrow>{nathHome.galleryIntro}</NathSectionEyebrow>
          <h2 className="mt-5 text-3xl font-black tracking-[-0.03em] text-[#032549] sm:text-5xl">
            {nathHome.galleryTitle}
          </h2>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {nathHome.galleryImages.map((image, index) => (
            <div
              key={image}
              className="group relative aspect-[0.88] overflow-hidden rounded-[24px] border border-[#032549]/8 bg-white shadow-[0_18px_40px_rgba(3,37,73,0.06)]"
            >
              <Image
                src={image}
                alt={`Nath Réparation ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
