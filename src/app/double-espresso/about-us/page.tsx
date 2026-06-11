import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";

import {
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import { ActionLink, SectionHeader } from "../double-espresso-ui";

const storyColumns = [
  {
    label: "Morning",
    title: "Espresso, pastries and a quick table.",
    text: "The cafe opens early enough for commuters, neighborhood regulars and people starting the day around Jaffa.",
  },
  {
    label: "Midday",
    title: "Sandwiches, salads, pasta and plates.",
    text: "The menu is broad without feeling scattered, so visitors can stop for coffee or stay for a full meal.",
  },
  {
    label: "Evening",
    title: "Terrace energy and late drinks.",
    text: "Both addresses stay useful into the evening with a relaxed street-cafe rhythm.",
  },
] as const;

export default function DoubleEspressoAboutPage() {
  return (
    <main>
      <section className="bg-[#f7f1e6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="About us"
              title="A Jaffa cafe built around the full day."
              description="Double Espresso brings together early coffee, brunch, quick plates, laptop tables and terrace seating across two nearby addresses."
            />
            <div className="mt-10 grid gap-px border-y border-[#d9cab5] bg-[#d9cab5] sm:grid-cols-3">
              {[
                ["Cafes", doubleEspressoLocations.length],
                ["Menu items", doubleEspressoMenuStats.itemCount],
                ["Open", "Daily"],
              ].map(([label, value]) => (
                <div key={label} className="bg-[#f7f1e6] py-5 sm:px-5">
                  <p className="text-xs font-black tracking-[0.22em] text-[#a57245] uppercase">
                    {label}
                  </p>
                  <p className="mt-3 text-2xl font-black text-[#5a3a2b]">
                    {value}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href="/double-espresso/menu">View menu</ActionLink>
              <ActionLink
                href="/double-espresso/our-addresses"
                variant="outline"
              >
                Our addresses
              </ActionLink>
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            <div className="relative col-span-3 min-h-[520px] overflow-hidden border border-[#d9cab5] bg-[#5a3a2b]">
              <Image
                src={doubleEspressoGallery[9].src}
                alt={doubleEspressoGallery[9].alt}
                fill
                priority
                sizes="(min-width: 1024px) 38vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="col-span-2 grid gap-3">
              {[doubleEspressoGallery[10], doubleEspressoGallery[15]].map(
                (image) => (
                  <div
                    key={image.src}
                    className="relative min-h-[254px] overflow-hidden border border-[#d9cab5] bg-[#5a3a2b]"
                  >
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(min-width: 1024px) 22vw, 40vw"
                      className="object-cover"
                    />
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#4a3024] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 border-b border-[#f4ead8]/14 pb-14 lg:grid-cols-[0.95fr_1.05fr] lg:items-end">
            <div>
              <p className="text-xs font-black tracking-[0.28em] text-[#d7b16d] uppercase">
                The rhythm
              </p>
              <h2
                className="mt-5 text-4xl leading-none font-black sm:text-7xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                Neighborhood comfort, with enough menu depth to stay longer.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-[#fffaf0]/68">
              The story is simple: a reliable Jaffa cafe where customers can
              grab an espresso, sit down for brunch, bring a laptop, or choose a
              full plate without changing venue.
            </p>
          </div>

          <div className="grid divide-y divide-[#f4ead8]/14 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
            {storyColumns.map((item) => (
              <article key={item.label} className="py-10 lg:px-8">
                <p className="text-xs font-black tracking-[0.24em] text-[#d7b16d] uppercase">
                  {item.label}
                </p>
                <h3 className="mt-4 text-2xl leading-tight font-black">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[#fffaf0]/62">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0]">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="relative min-h-[520px] bg-[#5a3a2b] lg:min-h-[700px]">
            <Image
              src={doubleEspressoGallery[5].src}
              alt={doubleEspressoGallery[5].alt}
              fill
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,58,43,0.02),rgba(90,58,43,0.56))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <p className="max-w-xl text-3xl leading-tight font-black text-white sm:text-5xl">
                Terrace tables, counter service and a menu that works for more
                than coffee.
              </p>
            </div>
          </div>

          <div className="px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Two locations"
                title="The same experience, minutes apart."
                description="The site treats both cafes as one brand system, then gives each address its own phone, image and directions when the customer is ready to visit."
              />
              <div className="mt-10 grid gap-px border border-[#d9cab5] bg-[#d9cab5]">
                {doubleEspressoLocations.map((location) => (
                  <div key={location.id} className="bg-[#f7f1e6] p-5">
                    <p className="flex items-center gap-3 text-xs font-black tracking-[0.2em] text-[#a57245] uppercase">
                      <MapPin className="size-4" />
                      Visit us
                    </p>
                    <p className="mt-4 text-2xl leading-tight font-black text-[#5a3a2b]">
                      {location.address}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#615143]">
                      {location.hours}. Same menu at this cafe.
                    </p>
                    <div className="mt-5">
                      <ActionLink href={location.mapsUrl} variant="quiet">
                        Directions <ArrowUpRight className="size-4" />
                      </ActionLink>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
