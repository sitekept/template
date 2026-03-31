import { ChevronRight, Phone, Play, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { NathScrollReveal } from "@/components/nathreparation/scroll-reveal";
import { Button } from "@/components/ui/button";
import { nathPhone } from "@/lib/nathreparation-data";

export function NathSectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e62938]/20 bg-[#e62938]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#e62938]">
      <Sparkles className="size-3.5" />
      {children}
    </span>
  );
}

export function NathPageHero({
  eyebrow,
  title,
  intro,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-[#032549]/8 bg-[radial-gradient(circle_at_top_left,_rgba(230,41,56,0.16),_transparent_28%),radial-gradient(circle_at_top_right,_rgba(4,79,122,0.18),_transparent_24%),linear-gradient(180deg,_#f8fbff_0%,_#eef4fb_100%)]">
      <NathScrollReveal
        className="mx-auto max-w-[1200px] px-4 py-18 sm:px-6 sm:py-24 lg:px-8"
        distance={26}
      >
        {eyebrow ? <NathSectionEyebrow>{eyebrow}</NathSectionEyebrow> : null}
        <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-[-0.04em] text-[#032549] sm:text-6xl">
          {title}
        </h1>
        {intro ? (
          <p className="mt-6 max-w-3xl whitespace-pre-line text-base leading-8 text-[#032549]/76 sm:text-lg">
            {intro}
          </p>
        ) : null}
      </NathScrollReveal>
    </section>
  );
}

export function NathCtaButton({
  href,
  children,
  secondary = false,
}: {
  href: string;
  children: React.ReactNode;
  secondary?: boolean;
}) {
  if (secondary) {
    return (
      <Button
        asChild
        size="lg"
        variant="outline"
        className="h-12 rounded-full border-[#032549]/12 bg-white px-7 text-base font-semibold text-[#032549] shadow-[0_10px_30px_rgba(3,37,73,0.08)] hover:border-[#032549]/20 hover:bg-[#032549] hover:text-white"
      >
        <Link href={href}>{children}</Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      size="lg"
      className="h-12 rounded-full bg-[#e62938] px-7 text-base font-semibold text-white shadow-[0_18px_40px_rgba(230,41,56,0.32)] hover:bg-[#d12031]"
    >
      <Link href={href}>{children}</Link>
    </Button>
  );
}

export function NathStickyCall() {
  return (
    <a
      href="tel:0618186868"
      className="fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#e62938] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(230,41,56,0.35)] lg:hidden"
    >
      <Phone className="size-4" />
      Appeler maintenant
    </a>
  );
}

export function NathVideoCard({
  image,
  href,
}: {
  image: string;
  href: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group relative block overflow-hidden rounded-[32px] border border-[#032549]/8 bg-white shadow-[0_24px_80px_rgba(3,37,73,0.08)]"
    >
      <div className="relative aspect-[1.7]">
        <Image
          src={image}
          alt="Vidéo Nath Réparation"
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 900px"
        />
      </div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(2,34,67,0.1),rgba(2,34,67,0.45))]" />
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="inline-flex size-18 items-center justify-center rounded-full bg-white text-[#e62938] shadow-[0_18px_40px_rgba(2,34,67,0.2)] transition-transform duration-300 group-hover:scale-110">
          <Play className="ml-1 size-7 fill-current" />
        </span>
      </div>
    </a>
  );
}

export function NathStars() {
  return (
    <div className="flex items-center gap-1 text-[#e62938]">
      {Array.from({ length: 5 }).map((_, index) => (
        <Star key={index} className="size-4 fill-current" />
      ))}
    </div>
  );
}

export function NathInlineLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-sm font-semibold text-[#e62938] transition-colors hover:text-[#032549]"
    >
      {children}
      <ChevronRight className="size-4" />
    </Link>
  );
}

export function NathPhoneChip() {
  return (
    <a
      href="tel:0618186868"
      className="inline-flex items-center gap-2 rounded-full border border-[#032549]/8 bg-white px-4 py-2 text-sm font-semibold text-[#032549] shadow-[0_8px_25px_rgba(3,37,73,0.06)]"
    >
      <Phone className="size-4 text-[#e62938]" />
      {nathPhone}
    </a>
  );
}
