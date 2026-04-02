import {
  ArrowRight,
  BriefcaseMedical,
  CalendarDays,
  ChevronRight,
  CircleCheckBig,
  Clock3,
  HeartPulse,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Wallet,
} from "lucide-react";
import Image from "next/image";

const consultationReasons = [
  {
    title: "Douleur du rachis",
    description:
      "Lombaires, dorsales ou cervicales pouvant limiter les mouvements et gêner le quotidien.",
  },
  {
    title: "Tensions musculaires",
    description:
      "Contractures, raideurs ou tendinites avec travail ciblé pour retrouver du confort.",
  },
  {
    title: "Douleurs nerveuses",
    description:
      "Sciatique, névralgie cervico-brachiale ou douleurs irradiantes avec prise en charge adaptée.",
  },
  {
    title: "Douleurs digestives",
    description:
      "Ballonnements, reflux ou inconfort abdominal avec approche manuelle douce.",
  },
  {
    title: "Blessures sportives",
    description:
      "Chutes, traumatismes récents ou anciens, récupération musculaire et articulaire.",
  },
  {
    title: "Maux de tête / vertiges",
    description:
      "Tensions cervicales, troubles posturaux ou douleurs récurrentes à fréquence variable.",
  },
];

const strengths = [
  "15 années d'expérience",
  "Ostéopathe agréé et certifié",
  "Séances personnalisées",
  "Cabinet facile d'accès",
];

const reviewSummaries = [
  {
    name: "Daniel Z.",
    text: "Les retours publics mettent en avant un praticien pédagogue, à l'écoute et efficace dès les premières séances.",
  },
  {
    name: "Mara G.",
    text: "Les patients soulignent un vrai soulagement sur les douleurs de dos, sciatiques et tensions d'épaules.",
  },
  {
    name: "Pierre M.",
    text: "L'accompagnement est souvent décrit comme clair, rassurant et complété par de bons conseils d'exercices.",
  },
];

const processSteps = [
  {
    step: "01",
    title: "Accueil et échange",
    description:
      "La séance commence par un échange sur le motif de consultation, les antécédents et le contexte général.",
  },
  {
    step: "02",
    title: "Tests et examen clinique",
    description:
      "Des tests cliniques et des mobilisations permettent d'identifier les zones à traiter.",
  },
  {
    step: "03",
    title: "Traitement ostéopathique",
    description:
      "Les techniques sont adaptées à chaque patient et aux douleurs articulaires, musculaires ou digestives.",
  },
  {
    step: "04",
    title: "Conseils personnalisés",
    description:
      "La séance se termine par des recommandations ciblées et une indication sur le suivi utile.",
  },
];

const faqs = [
  {
    question: "Combien de séances d'ostéopathie prévoir ?",
    answer:
      "Pour des douleurs récentes, 1 à 3 séances espacées de quelques semaines suffisent souvent. Les situations chroniques peuvent demander davantage de suivi selon l'ancienneté du trouble et la récupération du patient.",
  },
  {
    question: "Quelle tenue est recommandée ?",
    answer:
      "Une tenue souple et confortable est préférable afin de faciliter l'examen clinique et les mobilisations pendant la consultation.",
  },
  {
    question: "Est-ce pris en charge par la sécurité sociale ?",
    answer:
      "L'ostéopathie n'est pas remboursée par la sécurité sociale, mais de nombreuses mutuelles prennent en charge une à plusieurs séances chaque année.",
  },
  {
    question: "Quelle est la différence entre ostéopathie et kinésithérapie ?",
    answer:
      "La kinésithérapie est centrée sur la rééducation fonctionnelle d'une zone précise, tandis que l'ostéopathie adopte une approche plus globale du corps et de ses équilibres.",
  },
  {
    question: "Quel est le tarif de la consultation ?",
    answer:
      "La séance est indiquée à 70 €. Une tarification à 50 € est mentionnée pour les patients CMU avec attestation. Les règlements annoncés sont chèque, espèces, Wero ou SumUp.",
  },
];

const bookingUrl =
  "https://www.doctolib.fr/osteopathe/pantin/thibaut-muller/booking";
const phoneUrl = "tel:+33695941715";
const mapsUrl =
  "https://www.google.com/maps/search/?api=1&query=73+rue+victor+hugo+93500+Pantin";

function PrimaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#2D8A8A] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#236d6d]"
    >
      {children}
    </a>
  );
}

function SecondaryButton({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-[#1B2529]/20 bg-white/70 px-6 py-3 text-sm font-semibold text-[#1B2529] transition hover:border-[#2D8A8A] hover:text-[#2D8A8A]"
    >
      {children}
    </a>
  );
}

export default function OsteopatheKorPantinPage() {
  return (
    <main className="bg-[#F4F1E1] text-[#1B2529]">
      <header className="sticky top-0 z-50 border-b border-[#1B2529]/10 bg-[#F4F1E1]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <a href="#top" className="text-xl font-semibold tracking-tight">
            Thibaut Muller
          </a>
          <nav className="flex flex-wrap items-center gap-4 text-sm font-medium">
            <a href="#a-propos" className="transition hover:text-[#2D8A8A]">
              À propos
            </a>
            <a href="#avis" className="transition hover:text-[#2D8A8A]">
              Avis
            </a>
            <a href="#deroulement" className="transition hover:text-[#2D8A8A]">
              Déroulement
            </a>
            <a href="#faq" className="transition hover:text-[#2D8A8A]">
              Questions
            </a>
            <a href="#contact" className="transition hover:text-[#2D8A8A]">
              Contact
            </a>
          </nav>
          <PrimaryButton href={bookingUrl}>
            Prendre rendez-vous
            <ArrowRight className="h-4 w-4" />
          </PrimaryButton>
        </div>
      </header>

      <section id="top" className="relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[34rem] bg-[radial-gradient(circle_at_top_right,_rgba(45,138,138,0.18),_transparent_42%),radial-gradient(circle_at_left,_rgba(27,37,41,0.1),_transparent_36%)]" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-24">
          <div className="flex flex-col justify-center">
            <div className="mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-[#1B2529]/10 bg-white/70 px-4 py-2 text-sm text-[#1B2529]/80">
              <Sparkles className="h-4 w-4 text-[#2D8A8A]" />
              Ostéopathe à Pantin
            </div>
            <h1 className="max-w-2xl font-sans text-5xl font-semibold tracking-tight sm:text-6xl">
              Soulagez vos douleurs
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#1B2529]/75">
              Une approche globale pour restaurer la mobilité du corps,
              diminuer les tensions et retrouver un meilleur confort au
              quotidien.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <PrimaryButton href={bookingUrl}>
                <CalendarDays className="h-4 w-4" />
                Prendre rendez-vous en ligne
              </PrimaryButton>
              <SecondaryButton href={phoneUrl}>
                <Phone className="h-4 w-4" />
                06 95 94 17 15
              </SecondaryButton>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-[#1B2529]/10 bg-white/75 p-5 shadow-[0_20px_60px_rgba(27,37,41,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#EBF8F8] p-3 text-[#2D8A8A]">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2529]/65">Cabinet KOR</p>
                    <p className="font-medium">
                      73 rue Victor Hugo, 93500 Pantin
                    </p>
                  </div>
                </div>
              </div>
              <div className="rounded-[28px] border border-[#1B2529]/10 bg-white/75 p-5 shadow-[0_20px_60px_rgba(27,37,41,0.08)]">
                <div className="flex items-center gap-3">
                  <div className="rounded-2xl bg-[#EBF8F8] p-3 text-[#2D8A8A]">
                    <Star className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm text-[#1B2529]/65">Réputation</p>
                    <p className="font-medium">5/5 basé sur 61 avis Google</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {strengths.map((strength) => (
                <div
                  key={strength}
                  className="rounded-[26px] border border-[#2D8A8A]/20 bg-[#EBF8F8] px-4 py-4 text-sm font-medium"
                >
                  {strength}
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-6 top-12 h-28 w-28 rounded-full bg-[#2D8A8A]/10 blur-2xl" />
            <div className="absolute -right-4 bottom-12 h-32 w-32 rounded-full bg-[#1B2529]/10 blur-2xl" />
            <div className="relative w-full max-w-[34rem] rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-4 shadow-[0_30px_90px_rgba(27,37,41,0.12)]">
              <div className="overflow-hidden rounded-[28px] bg-[#EBF8F8]">
                <Image
                  src="https://osteopathe-kor-pantin.fr/wp-content/uploads/2025/12/xpdva6i3nmdrcsz3jtxh.webp"
                  alt="Portrait de Thibaut Muller"
                  width={589}
                  height={700}
                  className="h-[34rem] w-full object-cover object-center"
                />
              </div>
              <div className="absolute -left-4 bottom-8 rounded-[24px] border border-[#1B2529]/10 bg-white px-5 py-4 shadow-[0_20px_50px_rgba(27,37,41,0.15)]">
                <p className="text-sm text-[#1B2529]/60">Patients aidés</p>
                <p className="text-2xl font-semibold">+5000</p>
              </div>
              <div className="absolute -right-4 top-8 rounded-[24px] border border-[#2D8A8A]/20 bg-[#EBF8F8] px-5 py-4 shadow-[0_20px_50px_rgba(27,37,41,0.12)]">
                <p className="text-sm text-[#1B2529]/60">Accès</p>
                <p className="font-semibold">Métro 5, Église de Pantin</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/60 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)] lg:p-10">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
              Motifs de consultation
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
              Des solutions adaptées à chaque douleur
            </h2>
            <p className="mt-4 text-base leading-8 text-[#1B2529]/72">
              L&apos;ostéopathie vise à rétablir l&apos;équilibre du corps dans
              sa globalité, que la douleur soit aiguë, persistante ou traitée
              dans une logique préventive.
            </p>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {consultationReasons.map((reason) => (
              <article
                key={reason.title}
                className="rounded-[28px] border border-[#2D8A8A]/16 bg-[#F5FCFC] p-6 transition hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(27,37,41,0.08)]"
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#2D8A8A] shadow-sm">
                  <HeartPulse className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-xl font-semibold">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[#1B2529]/72">
                  {reason.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="a-propos"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
              Votre ostéopathe
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
              Thibaut Muller
            </h2>
            <p className="mt-6 text-base leading-8 text-[#1B2529]/75">
              Kinésithérapeute diplômé en 2009 puis ostéopathe depuis 2015, il
              exerce au cabinet KOR à Pantin avec une pratique manuelle adaptée
              à différents profils de patients.
            </p>
            <p className="mt-4 text-base leading-8 text-[#1B2529]/75">
              L&apos;approche présentée sur le site insiste sur la mobilité, le
              confort, le suivi individualisé et la formation continue.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              <div className="rounded-[24px] bg-[#EBF8F8] p-5">
                <div className="flex items-center gap-2 text-sm text-[#1B2529]/65">
                  <Clock3 className="h-4 w-4 text-[#2D8A8A]" />
                  Durée de séance
                </div>
                <p className="mt-2 text-2xl font-semibold">45 min</p>
              </div>
              <div className="rounded-[24px] bg-[#EBF8F8] p-5">
                <div className="flex items-center gap-2 text-sm text-[#1B2529]/65">
                  <Wallet className="h-4 w-4 text-[#2D8A8A]" />
                  Tarification
                </div>
                <p className="mt-2 text-2xl font-semibold">70 €</p>
              </div>
              <div className="rounded-[24px] bg-[#EBF8F8] p-5">
                <div className="flex items-center gap-2 text-sm text-[#1B2529]/65">
                  <ShieldCheck className="h-4 w-4 text-[#2D8A8A]" />
                  Remboursement
                </div>
                <p className="mt-2 text-2xl font-semibold">85%</p>
                <p className="text-sm text-[#1B2529]/65">des mutuelles</p>
              </div>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href={bookingUrl}>
                Réserver sur Doctolib
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
              <SecondaryButton href={phoneUrl}>
                Appeler le cabinet
              </SecondaryButton>
            </div>
          </div>

          <div className="space-y-8">
            <div className="overflow-hidden rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-4 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
              <Image
                src="https://osteopathe-kor-pantin.fr/wp-content/uploads/2026/02/traitement-cervicale-thibaut-muller-osteopathe-pantin.png"
                alt="Traitement cervical"
                width={1024}
                height={1536}
                className="h-[22rem] w-full rounded-[28px] object-cover"
              />
            </div>
            <div className="rounded-[36px] border border-[#1B2529]/10 bg-[#EBF8F8] p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-white p-3 text-[#2D8A8A]">
                  <BriefcaseMedical className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm text-[#1B2529]/65">Praticienne au sein du cabinet</p>
                  <h3 className="font-sans text-2xl font-semibold">
                    Léa Nahmias
                  </h3>
                </div>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#1B2529]/72">
                Le site présente également une prise en charge cognitive et
                fonctionnelle, centrée sur la douleur musculo-squelettique, avec
                formation COP en 5 ans et une approche globale du patient.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="overflow-hidden rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-4 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
            <Image
              src="https://osteopathe-kor-pantin.fr/wp-content/uploads/2026/01/cabinet-kor-pantin-osteopathe.png"
              alt="Cabinet KOR Pantin"
              width={1280}
              height={720}
              className="h-full min-h-[26rem] w-full rounded-[28px] object-cover"
            />
          </div>
          <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
              Santé & équilibre
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
              Retrouvez bien-être et mobilité avec l&apos;ostéopathie
            </h2>
            <p className="mt-6 text-base leading-8 text-[#1B2529]/75">
              L&apos;ostéopathie est présentée ici comme une médecine manuelle
              visant à soulager les douleurs articulaires et musculaires, tout
              en restaurant la mobilité corporelle.
            </p>
            <p className="mt-4 text-base leading-8 text-[#1B2529]/75">
              La page met aussi en avant le travail sur la posture, la détente,
              le stress, la circulation, le système digestif et le sommeil dans
              une logique curative ou préventive.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              <div className="rounded-[24px] bg-[#F5FCFC] p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2D8A8A]">
                  <Stethoscope className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-lg font-semibold">
                  Approche globale
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  Lecture d&apos;ensemble du corps, des tensions et du contexte
                  de consultation.
                </p>
              </div>
              <div className="rounded-[24px] bg-[#F5FCFC] p-5">
                <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-[#2D8A8A]">
                  <CircleCheckBig className="h-5 w-5" />
                </div>
                <h3 className="font-sans text-lg font-semibold">
                  Suivi personnalisé
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  Conseils, prévention et adaptation des techniques à chaque
                  patient.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="avis"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
                Avis
              </p>
              <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
                5/5 basé sur 61 avis Google
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#1B2529]/72">
                Les retours publics visibles sur le site insistent sur
                l&apos;écoute, l&apos;explication des douleurs, la qualité du
                suivi et l&apos;efficacité ressentie après la consultation.
              </p>
            </div>
            <PrimaryButton href={bookingUrl}>
              Prendre rendez-vous
              <ArrowRight className="h-4 w-4" />
            </PrimaryButton>
          </div>
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {reviewSummaries.map((review) => (
              <article
                key={review.name}
                className="rounded-[28px] border border-[#2D8A8A]/14 bg-[#F5FCFC] p-6"
              >
                <div className="flex items-center gap-1 text-[#2D8A8A]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <p className="mt-4 text-sm leading-7 text-[#1B2529]/78">
                  {review.text}
                </p>
                <p className="mt-5 text-sm font-semibold">{review.name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="deroulement"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="rounded-[36px] border border-[#1B2529]/10 bg-[#1B2529] p-8 text-white shadow-[0_20px_70px_rgba(27,37,41,0.18)]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8fd0d0]">
            À quoi s&apos;attendre ?
          </p>
          <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
            Déroulement d&apos;une séance
          </h2>
          <div className="mt-10 grid gap-5 lg:grid-cols-2">
            {processSteps.map((step) => (
              <article
                key={step.step}
                className="grid gap-0 overflow-hidden rounded-[28px] border border-white/10 bg-white/6 md:grid-cols-[9rem_1fr]"
              >
                <div className="flex items-center justify-center border-b border-white/10 bg-[#2D8A8A] px-6 py-8 text-center md:border-b-0 md:border-r">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/75">
                      Étape
                    </p>
                    <p className="mt-2 text-4xl font-semibold">{step.step}</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-sans text-xl font-semibold">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-white/78">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="grid gap-8 lg:grid-cols-[0.92fr_1.08fr]">
          <div className="overflow-hidden rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-4 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
            <Image
              src="https://osteopathe-kor-pantin.fr/wp-content/uploads/2026/01/cabinet-kor-pantin-osteopathe.png"
              alt="Cabinet du praticien"
              width={1280}
              height={720}
              className="h-full min-h-[32rem] w-full rounded-[28px] object-cover"
            />
          </div>
          <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
              Des questions ?
            </p>
            <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
              Informations utiles avant la consultation
            </h2>
            <div className="mt-8 space-y-3">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-[24px] border border-[#1B2529]/10 bg-[#F5FCFC] p-5 open:bg-[#EBF8F8]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-sans text-lg font-semibold">
                    <span>{faq.question}</span>
                    <ChevronRight className="h-5 w-5 text-[#2D8A8A] transition group-open:rotate-90" />
                  </summary>
                  <p className="mt-4 pr-6 text-sm leading-7 text-[#1B2529]/75">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
            <div className="mt-8">
              <PrimaryButton href={bookingUrl}>
                Réserver une consultation
                <ArrowRight className="h-4 w-4" />
              </PrimaryButton>
            </div>
          </div>
        </div>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12"
      >
        <div className="rounded-[36px] border border-[#1B2529]/10 bg-white/70 p-8 shadow-[0_20px_70px_rgba(27,37,41,0.06)]">
          <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#2D8A8A]">
                Informations
              </p>
              <h2 className="mt-3 font-sans text-3xl font-semibold sm:text-4xl">
                Prendre rendez-vous en ligne ou par téléphone
              </h2>
              <p className="mt-5 text-base leading-8 text-[#1B2529]/72">
                Coordonnées publiques relevées sur le site cible: téléphone,
                adresse du cabinet, accès métro et prise de rendez-vous via
                Doctolib.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <PrimaryButton href={bookingUrl}>
                  <CalendarDays className="h-4 w-4" />
                  Prendre rendez-vous
                </PrimaryButton>
                <SecondaryButton href={phoneUrl}>
                  <Phone className="h-4 w-4" />
                  Appeler au 06 95 94 17 15
                </SecondaryButton>
              </div>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <a
                href={mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-[28px] border border-[#2D8A8A]/18 bg-[#EBF8F8] p-6 transition hover:-translate-y-1"
              >
                <MapPin className="h-6 w-6 text-[#2D8A8A]" />
                <h3 className="mt-5 font-sans text-xl font-semibold">
                  Cabinet KOR
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  73 rue Victor Hugo
                  <br />
                  93500 Pantin
                </p>
              </a>
              <div className="rounded-[28px] border border-[#2D8A8A]/18 bg-[#EBF8F8] p-6">
                <Phone className="h-6 w-6 text-[#2D8A8A]" />
                <h3 className="mt-5 font-sans text-xl font-semibold">
                  Contact direct
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  06 95 94 17 15
                  <br />
                  Cabinet accessible via métro ligne 5
                </p>
              </div>
              <div className="rounded-[28px] border border-[#2D8A8A]/18 bg-[#EBF8F8] p-6">
                <CalendarDays className="h-6 w-6 text-[#2D8A8A]" />
                <h3 className="mt-5 font-sans text-xl font-semibold">
                  Réservation
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  Réservation en ligne via Doctolib pour le praticien mis en
                  avant sur la page.
                </p>
              </div>
              <div className="rounded-[28px] border border-[#2D8A8A]/18 bg-[#EBF8F8] p-6">
                <ShieldCheck className="h-6 w-6 text-[#2D8A8A]" />
                <h3 className="mt-5 font-sans text-xl font-semibold">
                  Remboursement
                </h3>
                <p className="mt-2 text-sm leading-7 text-[#1B2529]/72">
                  Une grande partie des mutuelles rembourse les consultations
                  selon le texte affiché sur le site source.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#1B2529]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-8 text-sm text-[#1B2529]/65 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>©2025 - Thibaut Muller</p>
          <div className="flex flex-wrap gap-5">
            <a
              href="https://osteopathe-kor-pantin.fr/mentions-legales/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#2D8A8A]"
            >
              Mentions légales
            </a>
            <a
              href="https://osteopathe-kor-pantin.fr/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[#2D8A8A]"
            >
              Site source inspecté
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
