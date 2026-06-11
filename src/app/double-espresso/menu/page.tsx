import { ArrowUpRight, MapPin, Utensils } from "lucide-react";
import Image from "next/image";

import {
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import { ActionLink, MenuBoard, SectionHeader } from "../double-espresso-ui";

const menuFacts = [
  ["Categories", doubleEspressoMenuStats.sectionCount],
  ["Items", doubleEspressoMenuStats.itemCount],
  ["Served at", "2 cafes"],
] as const;

export default function DoubleEspressoMenuPage() {
  return (
    <main>
      <section className="bg-[#4a3024] text-white">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
          <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl lg:ml-auto">
              <p className="text-xs font-black tracking-[0.28em] text-[#d7b16d] uppercase">
                Shared at both cafes
              </p>
              <h1
                className="mt-6 text-4xl leading-none font-black break-words sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                Complete Double Espresso menu.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/70">
                Ten categories and {doubleEspressoMenuStats.itemCount} items,
                arranged as an elegant board while preserving prices, Hebrew
                item names and descriptions for local customers.
              </p>

              <div className="mt-10 grid border-y border-[#f4ead8]/14 sm:grid-cols-3">
                {menuFacts.map(([label, value]) => (
                  <div
                    key={label}
                    className="border-b border-[#f4ead8]/14 py-5 sm:border-r sm:border-b-0 sm:px-5"
                  >
                    <p className="text-xs font-black tracking-[0.22em] text-[#d7b16d] uppercase">
                      {label}
                    </p>
                    <p className="mt-3 text-2xl leading-tight font-black text-white">
                      {value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-wrap gap-3">
                <ActionLink href="#menu">
                  <Utensils className="size-4" />
                  Browse menu
                </ActionLink>
                <ActionLink
                  href="/double-espresso/our-addresses"
                  variant="light"
                >
                  <MapPin className="size-4" />
                  Choose address
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#5a3a2b] lg:min-h-full">
            <Image
              src={doubleEspressoGallery[17].src}
              alt={doubleEspressoGallery[17].alt}
              fill
              priority
              sizes="(min-width: 1024px) 48vw, 100vw"
              className="object-cover opacity-[0.88]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,20,14,0.04),rgba(36,20,14,0.72))]" />
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
              <div className="max-w-md border border-[#f4ead8]/16 bg-[#4a3024]/82 p-5 backdrop-blur">
                <p className="text-xs font-black tracking-[0.24em] text-[#d7b16d] uppercase">
                  Same card, both locations
                </p>
                <p className="mt-4 text-xl leading-8 font-black">
                  Jerusalem Blvd 77 and Yehuda HaYamit 13 serve the same full
                  menu every day.
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
              eyebrow="The full card"
              title="Browse by category."
              description="The board keeps the full menu accessible without turning the page into a dense admin screen."
            />
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <ActionLink
                href="/double-espresso/our-addresses"
                variant="outline"
              >
                <MapPin className="size-4" />
                Our addresses
              </ActionLink>
              <ActionLink href="/double-espresso/about-us">
                About us <ArrowUpRight className="size-4" />
              </ActionLink>
            </div>
          </div>
          <MenuBoard />
        </div>
      </section>

      <section className="bg-[#fffaf0]">
        <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
          <div className="relative min-h-[420px] bg-[#5a3a2b]">
            <Image
              src={doubleEspressoGallery[20].src}
              alt={doubleEspressoGallery[20].alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          <div className="px-4 py-16 sm:px-8 lg:px-12 lg:py-24">
            <div className="max-w-2xl">
              <SectionHeader
                eyebrow="Same menu at both cafes"
                title="Pick the closest address. The card stays the same."
                description="The menu page supports both branches at once, so the visitor chooses location only when they are ready to call or navigate."
              />
              <div className="mt-10 grid gap-px border border-[#d9cab5] bg-[#d9cab5]">
                {doubleEspressoLocations.map((location) => (
                  <div
                    key={location.id}
                    className="grid gap-4 bg-[#f7f1e6] p-5 sm:grid-cols-[1fr_auto] sm:items-center"
                  >
                    <div>
                      <p className="text-xs font-black tracking-[0.2em] text-[#a57245] uppercase">
                        {location.hours}
                      </p>
                      <p className="mt-2 text-xl font-black text-[#5a3a2b]">
                        {location.address}
                      </p>
                    </div>
                    <ActionLink href={location.mapsUrl} variant="outline">
                      Directions <ArrowUpRight className="size-4" />
                    </ActionLink>
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
