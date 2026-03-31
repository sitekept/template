"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  Menu,
  Phone,
  ShieldCheck,
  Smartphone,
  Sparkles,
  Star,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

const navigation = [
  { label: "Accueil", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Pourquoi Nath", href: "#advantages" },
  { label: "Avis", href: "#avis" },
  { label: "Contact", href: "#contact" },
];

const trustBadges = [
  "Apple uniquement",
  "Paris & proche banlieue",
  "7j/7 24h/24",
  "Pièces d'origine",
];

const highlights = [
  {
    title: "Réparation",
    text: "Chaque problème a sa solution. Nath Réparation remplace les composants de votre iPhone rapidement, sous vos yeux, avec des pièces d'origine et une garantie d'un an.",
    image:
      "https://nathreparation.com/wp-content/uploads/2020/01/sfaq-iphone_2x.png",
  },
  {
    title: "Conseil",
    text: "Chaque intervention commence par un audit gratuit. Si réparer n'est pas la meilleure option, une alternative plus avantageuse vous est proposée en toute transparence.",
    image:
      "https://nathreparation.com/wp-content/uploads/2020/01/Capture-d’écran-2020-01-03-à-01.41.39.png",
  },
  {
    title: "Vente accessoires",
    text: "AirPods, chargeurs, câbles, adaptateurs et coques d'origine Apple ou de marques exclusives, disponibles pour compléter ou éviter une réparation inutile.",
    image:
      "https://nathreparation.com/wp-content/uploads/2020/02/accessoiresnath.jpg",
  },
];

const advantages = [
  {
    icon: Clock3,
    title: "Intervention rapide",
    text: "Nath se déplace en moins de 30 minutes sur Paris et sa proche banlieue selon votre zone d'intervention.",
  },
  {
    icon: ShieldCheck,
    title: "Réparation sous vos yeux",
    text: "Votre téléphone est réparé sur place, avec un process clair et visible, pour une relation de confiance immédiate.",
  },
  {
    icon: CheckCircle2,
    title: "Audit et conseil",
    text: "Un diagnostic 100% gratuit permet de valider si la réparation est pertinente ou s'il vaut mieux envisager une autre solution.",
  },
  {
    icon: Smartphone,
    title: "Spécialiste Apple",
    text: "Une expertise concentrée sur l'univers iPhone pour une intervention précise, fiable et cohérente avec les attentes des clients Apple.",
  },
];

const testimonials = [
  {
    name: "Michaël Cohen",
    service: "Écran iPhone cassé",
    quote:
      "NathReparation a fait un travail fantastique en réparant mon iPhone X après une chute. En 20 minutes, mon téléphone était comme neuf.",
  },
  {
    name: "Laura Sotto",
    service: "iPhone tombé dans l'eau",
    quote:
      "Il a sauvé mon téléphone après un incident dans l'eau. Les pièces abîmées ont été remplacées rapidement et tout a été nettoyé avec sérieux.",
  },
  {
    name: "Jean-Marc Lizard",
    service: "iPhone Total Check-up",
    quote:
      "Batterie, son, performance: tout a été réparé très vite. L'intervention inspire confiance et le résultat est immédiatement visible.",
  },
];

const gallery = [
  "https://nathreparation.com/wp-content/uploads/2019/12/520a6407-a9d4-43c2-80de-7d629dc6ee37.jpg",
  "https://nathreparation.com/wp-content/uploads/2019/12/fb88b8ca-ee80-4a07-bb4f-6cc9ba731ded.jpg",
  "https://nathreparation.com/wp-content/uploads/2019/12/faef48bf-0560-4cf3-9f0c-04fbc8ac5ba7.jpg",
  "https://nathreparation.com/wp-content/uploads/2019/12/83c7cb66-3964-44f7-9583-92cf9a3758e7.jpg",
  "https://nathreparation.com/wp-content/uploads/2019/12/eab88c99-57b7-4f74-90f4-4457102ce6ad-e1577799230907.jpg",
];

function SectionEyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-[#e62938]/20 bg-[#e62938]/8 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.24em] text-[#e62938]">
      <Sparkles className="size-3.5" />
      {children}
    </span>
  );
}

export default function NathReparationPage() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      id="top"
      className="min-h-screen bg-[#f5f8fc] text-[#032549] selection:bg-[#e62938] selection:text-white"
    >
      <header className="sticky top-0 z-50 border-b border-[#032549]/8 bg-white/88 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/nathreparation"
            className="relative h-8 w-[188px] shrink-0 transition-transform duration-300 hover:scale-[1.01]"
          >
            <Image
              src="https://nathreparation.com/wp-content/uploads/2019/12/logonathreparation-1.png"
              alt="Nath Réparation"
              fill
              className="object-contain object-left"
              sizes="188px"
              priority
            />
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-[#032549] transition-colors duration-200 hover:text-[#e62938]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 lg:flex">
            <a
              href="tel:0618186868"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#032549] transition-colors hover:text-[#e62938]"
            >
              <Phone className="size-4" />
              06 18 18 68 68
            </a>
            <Button
              asChild
              size="lg"
              className="h-11 rounded-full bg-[#e62938] px-6 text-white shadow-[0_16px_40px_rgba(230,41,56,0.28)] hover:bg-[#d12031]"
            >
              <a href="#contact">Fixer un RDV</a>
            </Button>
          </div>

          <button
            type="button"
            aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex size-11 items-center justify-center rounded-full border border-[#032549]/10 text-[#032549] lg:hidden"
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {mobileOpen ? (
          <div className="border-t border-[#032549]/8 bg-white lg:hidden">
            <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-4 sm:px-6">
              {navigation.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-2xl px-4 py-3 text-sm font-medium text-[#032549] transition-colors hover:bg-[#032549]/4 hover:text-[#e62938]"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="tel:0618186868"
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e62938] px-4 py-3 text-sm font-semibold text-white"
              >
                <Phone className="size-4" />
                Appeler maintenant
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(230,41,56,0.16),_transparent_30%),radial-gradient(circle_at_top_right,_rgba(4,79,122,0.18),_transparent_28%),linear-gradient(180deg,_#f8fbff_0%,_#eef4fb_100%)]" />
          <div className="mx-auto grid max-w-[1200px] gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.08fr_0.92fr] lg:items-center lg:px-8 lg:py-24">
            <div className="relative z-10">
              <SectionEyebrow>Le spécialiste Apple à domicile</SectionEyebrow>
              <h1 className="mt-6 max-w-[11ch] text-5xl leading-[0.95] font-black tracking-[-0.04em] text-[#032549] sm:text-6xl lg:text-7xl">
                Réparation Apple premium sur Paris.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#032549]/76 sm:text-lg">
                Il n&apos;a jamais été aussi facile de faire réparer votre
                téléphone. Nath Réparation se déplace chez vous, intervient sous
                vos yeux et remet votre iPhone en état en un temps record avec
                des matériaux d&apos;origine.
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Button
                  asChild
                  size="lg"
                  className="h-12 rounded-full bg-[#e62938] px-7 text-base font-semibold text-white shadow-[0_18px_40px_rgba(230,41,56,0.32)] hover:bg-[#d12031]"
                >
                  <a href="tel:0618186868">
                    <Phone className="size-4" />
                    Appeler maintenant
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 rounded-full border-[#032549]/12 bg-white px-7 text-base font-semibold text-[#032549] shadow-[0_10px_30px_rgba(3,37,73,0.08)] hover:border-[#032549]/20 hover:bg-[#032549] hover:text-white"
                >
                  <a href="#contact">
                    <CalendarDays className="size-4" />
                    Fixer un RDV
                  </a>
                </Button>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {trustBadges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-[#032549]/8 bg-white/78 px-4 py-2 text-sm font-medium text-[#032549] shadow-[0_8px_25px_rgba(3,37,73,0.06)]"
                  >
                    {badge}
                  </span>
                ))}
              </div>

              <div className="mt-10 grid max-w-2xl gap-4 rounded-[28px] border border-white/70 bg-white/84 p-4 shadow-[0_30px_80px_rgba(3,37,73,0.1)] backdrop-blur md:grid-cols-3 md:p-5">
                <div className="rounded-2xl bg-[#032549] px-5 py-4 text-white">
                  <p className="text-xs uppercase tracking-[0.22em] text-white/65">
                    Disponibilité
                  </p>
                  <p className="mt-2 text-lg font-semibold">7j/7 · 24h/24</p>
                </div>
                <div className="rounded-2xl px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#032549]/45">
                    Zone
                  </p>
                  <p className="mt-2 text-lg font-semibold text-[#032549]">
                    Paris & proche banlieue
                  </p>
                </div>
                <div className="rounded-2xl px-5 py-4">
                  <p className="text-xs uppercase tracking-[0.22em] text-[#032549]/45">
                    Contact direct
                  </p>
                  <a
                    href="tel:0618186868"
                    className="mt-2 inline-flex text-lg font-semibold text-[#e62938] transition-colors hover:text-[#032549]"
                  >
                    06 18 18 68 68
                  </a>
                </div>
              </div>
            </div>

            <div className="relative z-10">
              <div className="relative mx-auto max-w-[520px] rounded-[36px] border border-white/70 bg-[linear-gradient(180deg,rgba(4,79,122,0.98),rgba(2,34,67,1))] p-6 shadow-[0_34px_100px_rgba(2,34,67,0.28)] sm:p-8">
                <div className="absolute -left-6 top-10 hidden rounded-3xl border border-white/14 bg-white/10 px-4 py-3 backdrop-blur sm:block">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Intervention express
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Moins de 30 minutes
                  </p>
                </div>
                <div className="absolute -right-6 bottom-14 hidden rounded-3xl border border-white/14 bg-white/10 px-4 py-3 backdrop-blur sm:block">
                  <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                    Garantie
                  </p>
                  <p className="mt-1 text-sm font-semibold text-white">
                    Réparations garanties
                  </p>
                </div>
                <div className="flex items-center justify-between rounded-[26px] border border-white/10 bg-white/8 p-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.22em] text-white/60">
                      Nath Réparation
                    </p>
                    <p className="mt-2 text-xl font-semibold text-white">
                      Apple uniquement, à domicile.
                    </p>
                  </div>
                  <div className="rounded-full bg-[#e62938] px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-white">
                    Premium
                  </div>
                </div>
                <div className="relative mt-6 overflow-hidden rounded-[28px] border border-white/10 bg-[radial-gradient(circle_at_top,_rgba(230,41,56,0.2),_transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]">
                  <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/18 to-transparent" />
                  <Image
                    src="https://nathreparation.com/wp-content/uploads/2018/08/iPhone-X.png"
                    alt="iPhone réparé par Nath Réparation"
                    width={604}
                    height={737}
                    className="mx-auto h-auto w-full max-w-[380px] translate-y-4 object-contain transition-transform duration-500 hover:-translate-y-1 hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-end">
              <div className="max-w-2xl">
                <SectionEyebrow>Services essentiels</SectionEyebrow>
                <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-[#032549] sm:text-5xl">
                  Une expertise claire, lisible et immédiatement rassurante.
                </h2>
              </div>
              <p className="max-w-xl text-base leading-8 text-[#032549]/72">
                Le site actuel contient déjà les bons messages. L&apos;enjeu du
                redesign homepage est de les rendre plus premium, plus rapides à
                lire et plus convaincants dès les premières secondes.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {highlights.map((item) => (
                <article
                  key={item.title}
                  className="group overflow-hidden rounded-[28px] border border-[#032549]/8 bg-white shadow-[0_24px_80px_rgba(3,37,73,0.08)] transition-transform duration-300 hover:-translate-y-1"
                >
                  <div className="relative aspect-[1.25] overflow-hidden bg-[#edf3f9]">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 1024px) 100vw, 33vw"
                    />
                  </div>
                  <div className="p-7">
                    <div className="inline-flex rounded-full bg-[#032549]/5 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-[#044f7a]">
                      Nath Réparation
                    </div>
                    <h3 className="mt-4 text-2xl font-black tracking-[-0.02em] text-[#032549]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-7 text-[#032549]/72">
                      {item.text}
                    </p>
                    <a
                      href="tel:0618186868"
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#e62938] transition-colors hover:text-[#032549]"
                    >
                      Demander un avis rapide
                      <ChevronRight className="size-4" />
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="advantages" className="bg-[#032549] py-20 text-white sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
              <div>
                <SectionEyebrow>Pourquoi Nath</SectionEyebrow>
                <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                  Un service pensé comme une intervention haut de gamme, pas
                  comme un simple dépannage.
                </h2>
                <p className="mt-6 max-w-xl text-base leading-8 text-white/72">
                  Nath Réparation conserve son identité d&apos;origine, mais la
                  présentation gagne en prestance: expertise Apple, déplacement
                  à domicile, rapidité d&apos;exécution, transparence et
                  confiance.
                </p>
                <div className="mt-8 rounded-[28px] border border-white/10 bg-white/6 p-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/52">
                    Message clé
                  </p>
                  <p className="mt-3 text-xl leading-8 text-white">
                    “Vous venez de trouver le super héros dont votre téléphone
                    avait besoin.”
                  </p>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {advantages.map((item) => {
                  const Icon = item.icon;

                  return (
                    <article
                      key={item.title}
                      className="rounded-[28px] border border-white/10 bg-white/8 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                    >
                      <div className="flex size-12 items-center justify-center rounded-2xl bg-[#e62938] text-white shadow-[0_14px_30px_rgba(230,41,56,0.3)]">
                        <Icon className="size-5" />
                      </div>
                      <h3 className="mt-5 text-xl font-semibold text-white">
                        {item.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-white/70">
                        {item.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 sm:py-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="rounded-[36px] border border-[#032549]/8 bg-white p-6 shadow-[0_30px_90px_rgba(3,37,73,0.08)] sm:p-8 lg:p-10">
              <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
                <div>
                  <SectionEyebrow>Preuve sociale</SectionEyebrow>
                  <h2 className="mt-6 text-3xl font-black tracking-[-0.03em] text-[#032549] sm:text-5xl">
                    Ils en parlent le mieux.
                  </h2>
                  <p className="mt-5 max-w-lg text-base leading-8 text-[#032549]/72">
                    Les avis clients existaient déjà sur le site d&apos;origine.
                    Ici, ils sont réorganisés pour agir comme de vrais éléments
                    de confiance, visibles et crédibles au bon moment du
                    parcours.
                  </p>
                  <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#e62938]/8 px-4 py-2 text-sm font-semibold text-[#e62938]">
                    <Star className="size-4 fill-current" />
                    Avis clients vérifiés
                  </div>
                </div>

                <div id="avis" className="grid gap-4">
                  {testimonials.map((item) => (
                    <article
                      key={item.name}
                      className="rounded-[26px] border border-[#032549]/8 bg-[#f8fbff] p-6 transition-colors duration-300 hover:border-[#e62938]/20"
                    >
                      <div className="flex items-center gap-1 text-[#e62938]">
                        {Array.from({ length: 5 }).map((_, index) => (
                          <Star key={index} className="size-4 fill-current" />
                        ))}
                      </div>
                      <p className="mt-4 text-[15px] leading-7 text-[#032549]/76">
                        {item.quote}
                      </p>
                      <div className="mt-5 flex items-center justify-between gap-4">
                        <div>
                          <p className="font-semibold text-[#032549]">
                            {item.name}
                          </p>
                          <p className="text-sm text-[#044f7a]">{item.service}</p>
                        </div>
                        <span className="rounded-full border border-[#032549]/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[#032549]/50">
                          Vérifié
                        </span>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-20 sm:pb-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
              {gallery.map((image, index) => (
                <div
                  key={image}
                  className="group relative aspect-[0.85] overflow-hidden rounded-[24px] border border-[#032549]/8 bg-white shadow-[0_18px_40px_rgba(3,37,73,0.06)]"
                >
                  <Image
                    src={image}
                    alt={`Réalisation Nath Réparation ${index + 1}`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="pb-24">
          <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
            <div className="overflow-hidden rounded-[36px] border border-[#032549]/8 bg-[linear-gradient(135deg,#022243_0%,#002359_100%)] shadow-[0_40px_100px_rgba(2,34,67,0.28)]">
              <div className="grid gap-10 px-6 py-8 sm:px-8 sm:py-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-12 lg:py-12">
                <div className="text-white">
                  <SectionEyebrow>Contact direct</SectionEyebrow>
                  <h2 className="mt-6 max-w-[11ch] text-3xl font-black tracking-[-0.03em] text-white sm:text-5xl">
                    Un appel suffit pour lancer l&apos;intervention.
                  </h2>
                  <p className="mt-5 max-w-xl text-base leading-8 text-white/72">
                    Nath intervient 7j/7, 24h/24 sur Paris et sa proche banlieue.
                    Vous expliquez le problème, recevez un tarif et une plage
                    horaire, puis l&apos;intervention est réalisée à domicile.
                  </p>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                    <Button
                      asChild
                      size="lg"
                      className="h-12 rounded-full bg-[#e62938] px-7 text-base font-semibold text-white hover:bg-[#d12031]"
                    >
                      <a href="tel:0618186868">
                        <Phone className="size-4" />
                        06 18 18 68 68
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="h-12 rounded-full border-white/14 bg-white/8 px-7 text-base font-semibold text-white hover:bg-white hover:text-[#032549]"
                    >
                      <a href="#services">
                        <ArrowRight className="size-4" />
                        Voir les services
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      Horaires
                    </p>
                    <p className="mt-3 text-2xl font-semibold">7j/7 · 24h/24</p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 text-white">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      Zone
                    </p>
                    <p className="mt-3 text-2xl font-semibold">
                      Paris et ses portes
                    </p>
                  </div>
                  <div className="rounded-[28px] border border-white/10 bg-white/8 p-6 text-white sm:col-span-2">
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/55">
                      Process
                    </p>
                    <p className="mt-3 text-lg leading-8 text-white/80">
                      Appel, diagnostic, proposition tarifaire, prise de RDV,
                      intervention sur place et réparation sous vos yeux.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <a
        href="tel:0618186868"
        className="fixed inset-x-4 bottom-4 z-50 inline-flex items-center justify-center gap-2 rounded-full bg-[#e62938] px-5 py-4 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(230,41,56,0.35)] lg:hidden"
      >
        <Phone className="size-4" />
        Appeler Nath Réparation
      </a>
    </div>
  );
}
