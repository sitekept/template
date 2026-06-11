import { ArrowUpRight, MapPin, Navigation, Phone } from "lucide-react";
import Image from "next/image";

import {
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import { ActionLink, LocationCard, SectionHeader } from "../double-espresso-ui";

export default function DoubleEspressoAddressesPage() {
  return (
    <main>
      <section className="bg-[#4a3024] text-white">
        <div className="grid lg:grid-cols-[0.96fr_1.04fr]">
          <div className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div className="mx-auto max-w-3xl lg:ml-auto">
              <p className="flex items-center gap-3 text-xs font-black tracking-[0.26em] text-[#d7b16d] uppercase">
                <MapPin className="size-4" />
                Our addresses
              </p>
              <h1
                className="mt-6 text-4xl leading-none font-black break-words sm:text-7xl lg:text-8xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                Two Jaffa cafes with one shared menu.
              </h1>
              <p className="mt-7 max-w-2xl text-lg leading-8 text-[#fffaf0]/70">
                Each branch has its own phone, opening hours, image and embedded
                map. The same {doubleEspressoMenuStats.itemCount}-item menu is
                available at both.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <ActionLink href="#locations">
                  <Navigation className="size-4" />
                  View locations
                </ActionLink>
                <ActionLink href="/double-espresso/menu" variant="light">
                  Shared menu <ArrowUpRight className="size-4" />
                </ActionLink>
              </div>
            </div>
          </div>

          <div className="relative min-h-[520px] bg-[#5a3a2b] lg:min-h-full">
            <Image
              src={doubleEspressoGallery[5].src}
              alt={doubleEspressoGallery[5].alt}
              fill
              priority
              sizes="(min-width: 1024px) 52vw, 100vw"
              className="object-cover opacity-[0.9]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(36,20,14,0.04),rgba(36,20,14,0.68))]" />
            <div className="absolute inset-x-0 bottom-0 grid gap-px border-t border-[#f4ead8]/14 bg-[#f4ead8]/14 sm:grid-cols-2">
              {doubleEspressoLocations.map((location) => (
                <div key={location.id} className="bg-[#4a3024]/86 p-5">
                  <p className="text-xs font-black tracking-[0.2em] text-[#d7b16d] uppercase">
                    {location.hours}
                  </p>
                  <p className="mt-3 text-xl leading-tight font-black">
                    {location.address}
                  </p>
                </div>
              ))}
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
              eyebrow="Choose a cafe"
              title="Both address pages are complete."
              description="The cards are immersive first, then practical: photo, phone, hours, note, map and clear directions."
            />
            <ActionLink href="/double-espresso/menu" variant="outline">
              See shared menu <ArrowUpRight className="size-4" />
            </ActionLink>
          </div>

          <div className="grid gap-10">
            {doubleEspressoLocations.map((location) => (
              <LocationCard key={location.id} location={location} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#fffaf0] px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <SectionHeader
              eyebrow="Before you go"
              title="Call directly or open directions from the nearest card."
              description="The mobile footer also keeps Call and Directions visible, so customers can act from any page."
            />
            <div className="mt-8 flex flex-wrap gap-3">
              <ActionLink href={doubleEspressoLocations[0].phoneHref}>
                <Phone className="size-4" />
                Jerusalem Blvd
              </ActionLink>
              <ActionLink
                href={doubleEspressoLocations[1].phoneHref}
                variant="outline"
              >
                <Phone className="size-4" />
                Yehuda HaYamit
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
                  alt={image.alt}
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
