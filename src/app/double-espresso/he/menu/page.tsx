import { ArrowUpLeft, MapPin, Utensils } from "lucide-react";
import Image from "next/image";

import {
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import {
  ActionLink,
  MenuBoard,
  SectionHeader,
  getDoubleEspressoLocationCopy,
} from "../../double-espresso-ui";

const menuFacts = [
  ["קטגוריות", doubleEspressoMenuStats.sectionCount],
  ["פריטים", doubleEspressoMenuStats.itemCount],
  ["מוגש ב", "2 בתי קפה"],
] as const;

export default function DoubleEspressoHebrewMenuPage() {
  return (
    <main dir="rtl">
      <section className="bg-[#4a3024] text-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl lg:mr-auto">
              <p className="text-xs font-black tracking-[0.04em] text-[#d7b16d] uppercase">
                משותף לשני בתי הקפה
              </p>
              <h1
                className="mt-6 text-4xl leading-none font-black break-words sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                התפריט המלא של דאבל אספרסו.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/70">
                עשר קטגוריות ו-{doubleEspressoMenuStats.itemCount} פריטים,
                מסודרים ככרטיס תפריט אלגנטי עם שמות, תיאורים ומחירים בעברית.
              </p>

              <div className="mt-10 grid border-y border-[#f4ead8]/14 sm:grid-cols-3">
                {menuFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-[#f4ead8]/14 py-5 sm:border-b-0 sm:border-l sm:px-5"
                  >
                    <p className="text-xs font-black tracking-[0.04em] text-[#d7b16d] uppercase">
                      {label}
                    </p>
                    <p className="mt-3 text-2xl leading-tight font-black text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <ActionLink href="#menu" className="tracking-[0.02em]">
                  <Utensils className="size-4" />
                  עיון בתפריט
                </ActionLink>
                <ActionLink
                  href="/double-espresso/he/our-addresses"
                  variant="light"
                  className="tracking-[0.02em]"
                >
                  <MapPin className="size-4" />
                  בחירת כתובת
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#5a3a2b] lg:min-h-full">
            <Image
              src={doubleEspressoGallery[17].src}
              alt=""
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(74,48,36,0.04),rgba(74,48,36,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="max-w-md border border-[#f4ead8]/16 bg-[#4a3024]/82 p-5 backdrop-blur">
                <p className="text-xs font-black tracking-[0.04em] text-[#d7b16d] uppercase">
                  אותו כרטיס, שתי כתובות
                </p>
                <p className="mt-4 text-xl leading-8 font-black">
                  שדרות ירושלים 77 ויהודה הימית 13 מגישות את אותו תפריט מלא בכל
                  יום.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="menu"
        className="bg-[#f7f1e6] px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-8 border-b border-[#d9cab5] pb-10 lg:grid-cols-[1fr_auto] lg:items-end">
            <SectionHeader
              eyebrow="הכרטיס המלא"
              title="עיון לפי קטגוריה."
              description="לוח התפריט שומר על כל הפריטים נגישים בלי להפוך את העמוד למסך עמוס."
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink
                href="/double-espresso/he/our-addresses"
                variant="outline"
                className="tracking-[0.02em]"
              >
                <MapPin className="size-4" />
                הכתובות שלנו
              </ActionLink>
              <ActionLink
                href="/double-espresso/he/about-us"
                className="tracking-[0.02em]"
              >
                עלינו <ArrowUpLeft className="size-4" />
              </ActionLink>
            </div>
          </div>
          <MenuBoard locale="he" basePath="/double-espresso/he/menu" />
        </div>
      </section>

      <section className="bg-[#fffaf0]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[420px] bg-[#5a3a2b]">
            <Image
              src={doubleEspressoGallery[20].src}
              alt=""
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="אותו תפריט בשני בתי הקפה"
                title="בחרו את הכתובת הקרובה. התפריט נשאר זהה."
                description="עמוד התפריט משרת את שני הסניפים יחד, והלקוח בוחר כתובת רק כשהוא מוכן להתקשר או לנווט."
              />
              <div className="mt-10 grid gap-px border border-[#d9cab5] bg-[#d9cab5]">
                {doubleEspressoLocations.map((location) => {
                  const locationCopy = getDoubleEspressoLocationCopy(
                    location,
                    "he"
                  );

                  return (
                    <div
                      key={location.id}
                      className="grid gap-4 bg-[#f7f1e6] p-5 sm:grid-cols-[1fr_auto] sm:items-center"
                    >
                      <div>
                        <p className="text-xs font-black tracking-[0.04em] text-[#a57245] uppercase">
                          {locationCopy.hours}
                        </p>
                        <p className="mt-2 text-xl font-black text-[#5a3a2b]">
                          {locationCopy.address}
                        </p>
                      </div>
                      <ActionLink
                        href={location.mapsUrl}
                        variant="outline"
                        className="tracking-[0.02em]"
                      >
                        ניווט <ArrowUpLeft className="size-4" />
                      </ActionLink>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
