import { ArrowUpLeft, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

import {
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import {
  ActionLink,
  LocationCard,
  SectionHeader,
  getDoubleEspressoLocationCopy,
} from "../../double-espresso-ui";

export default function DoubleEspressoHebrewAddressesPage() {
  return (
    <main dir="rtl">
      <section className="bg-[#4a3024] text-white">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr]">
          <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl lg:mr-auto">
              <p className="flex items-center gap-3 text-xs font-black tracking-[0.04em] text-[#d7b16d] uppercase">
                <MapPin className="size-4" />
                הכתובות שלנו
              </p>
              <h1
                className="mt-6 text-4xl leading-none font-black break-words sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                שני בתי קפה ביפו עם תפריט אחד.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/70">
                לכל סניף יש טלפון, שעות פתיחה, תמונה ומפה משלו. אותו תפריט של{" "}
                {doubleEspressoMenuStats.itemCount} פריטים זמין בשתי הכתובות.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ActionLink href="#locations" className="tracking-[0.02em]">
                  <Navigation className="size-4" />
                  צפייה בכתובות
                </ActionLink>
                <ActionLink
                  href="/double-espresso/he/menu"
                  variant="light"
                  className="tracking-[0.02em]"
                >
                  תפריט משותף <ArrowUpLeft className="size-4" />
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#5a3a2b] lg:min-h-full">
            <Image
              src={doubleEspressoGallery[5].src}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-[0.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,48,36,0.04),rgba(74,48,36,0.68))]" />
            <div className="absolute inset-x-0 bottom-0 grid gap-px border-t border-[#f4ead8]/14 bg-[#f4ead8]/14 sm:grid-cols-2">
              {doubleEspressoLocations.map((location) => {
                const locationCopy = getDoubleEspressoLocationCopy(
                  location,
                  "he"
                );

                return (
                  <div key={location.id} className="bg-[#4a3024]/86 p-5">
                    <p className="text-xs font-black tracking-[0.04em] text-[#d7b16d] uppercase">
                      {locationCopy.hours}
                    </p>
                    <p className="mt-3 text-xl leading-tight font-black">
                      {locationCopy.address}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section
        id="locations"
        className="bg-[#f7f1e6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 border-b border-[#d9cab5] pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeader
              eyebrow="בחרו בית קפה"
              title="שתי הכתובות מלאות ומוכנות."
              description="כל כרטיס מתחיל בתמונה ואז נותן את כל מה שצריך: טלפון, שעות, הערה, מפה וניווט ברור."
            />
            <ActionLink
              href="/double-espresso/he/menu"
              variant="outline"
              className="tracking-[0.02em]"
            >
              לתפריט המשותף <ArrowUpLeft className="size-4" />
            </ActionLink>
          </div>

          <div className="grid gap-10">
            {doubleEspressoLocations.map((location) => (
              <LocationCard key={location.id} location={location} locale="he" />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="לפני שיוצאים"
              title="התקשרו ישירות או פתחו ניווט מהכרטיס הקרוב."
              description="גם בסלולר כפתורי התקשרות וניווט נשארים גלויים בתחתית המסך, כדי שהלקוח יוכל לפעול מכל עמוד."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink
                href={doubleEspressoLocations[0].phoneHref}
                className="tracking-[0.02em]"
              >
                <Phone className="size-4" />
                שדרות ירושלים
              </ActionLink>
              <ActionLink
                href={doubleEspressoLocations[1].phoneHref}
                variant="outline"
                className="tracking-[0.02em]"
              >
                <Phone className="size-4" />
                יהודה הימית
              </ActionLink>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              doubleEspressoGallery[0],
              doubleEspressoGallery[4],
              doubleEspressoGallery[21],
            ].map((image, index) => (
              <div
                key={image.src}
                className={
                  index === 1
                    ? "relative min-h-[360px] overflow-hidden border border-[#d9cab5]"
                    : "relative mt-10 min-h-[280px] overflow-hidden border border-[#d9cab5]"
                }
              >
                <Image
                  src={image.src}
                  alt=""
                  fill
                  sizes="(min-width: 1024px) 20vw, 33vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
