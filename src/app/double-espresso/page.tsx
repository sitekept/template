import {
  ArrowUpRight,
  MapPin,
  Navigation,
  Phone,
  Utensils,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";

import ScrollExpandMedia from "@/components/ui/scroll-expansion-hero";
import {
  doubleEspressoFeaturedMenuItems,
  doubleEspressoGallery,
  doubleEspressoLocations,
  doubleEspressoMenu,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";

import {
  ActionLink,
  FeatureStrip,
  MenuPrice,
  SectionHeader,
} from "./double-espresso-ui";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    ...doubleEspressoLocations.map((location) => ({
      "@type": "CafeOrCoffeeShop",
      name: location.name,
      telephone: location.phone,
      address: {
        "@type": "PostalAddress",
        streetAddress: location.address.replace(", Tel Aviv-Yafo", ""),
        addressLocality: "Tel Aviv-Yafo",
        addressCountry: "IL",
      },
      servesCuisine: ["Coffee", "Breakfast", "Brunch", "Pasta", "Salads"],
      priceRange: "$$",
      image: location.image,
      url: location.mapsUrl,
      geo: {
        "@type": "GeoCoordinates",
        latitude: location.coordinates.latitude,
        longitude: location.coordinates.longitude,
      },
      openingHours: location.hours.replace("Daily ", "Mo-Su "),
      hasMenu: {
        "@type": "Menu",
        name: "Double Espresso shared menu",
        hasMenuSection: doubleEspressoMenu.map((section) => ({
          "@type": "MenuSection",
          name: section.title,
          hasMenuItem: section.items.map((item) => ({
            "@type": "MenuItem",
            name: item.name,
            description: item.description,
            offers: {
              "@type": "Offer",
              price: item.price,
              priceCurrency: "ILS",
            },
          })),
        })),
      },
    })),
  ],
};

const galleryPreview = [
  doubleEspressoGallery[0],
  doubleEspressoGallery[7],
  doubleEspressoGallery[11],
  doubleEspressoGallery[16],
  doubleEspressoGallery[19],
  doubleEspressoGallery[20],
] as const;

const featuredCardImages = [
  doubleEspressoGallery[17],
  doubleEspressoGallery[13],
  doubleEspressoGallery[18],
  doubleEspressoGallery[14],
  doubleEspressoGallery[22],
  doubleEspressoGallery[19],
] as const;

export default function DoubleEspressoPage() {
  return (
    <>
      <Script
        id="double-espresso-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <main>
        <ScrollExpandMedia
          mediaType="image"
          mediaSrc="/double-espresso/gallery/google-18.jpg"
          bgImageSrc="/double-espresso/gallery/google-01.jpg"
          title="Double Espresso Jaffa"
          date="Two cafes, one menu"
          scrollToExpand="Scroll to open the cafe"
        >
          <section className="grid gap-8 border border-white/12 bg-[#5a3a2b] p-5 text-white sm:p-8 lg:grid-cols-[1.1fr_0.9fr] lg:p-10">
            <div>
              <p className="text-sm font-black text-[#e7b85a]">
                Cafe, brunch and full kitchen in Jaffa
              </p>
              <h1
                className="mt-5 max-w-4xl text-4xl leading-none font-black break-words sm:text-6xl lg:text-7xl"
                style={{ fontFamily: "var(--font-double-display)" }}
              >
                A ready-to-use site for both Double Espresso cafes.
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
                One shared menu, two nearby Jaffa addresses, real cafe photos,
                direct calls and directions. Built to turn Google Maps traffic
                into visits.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <ActionLink href="/double-espresso/menu">
                  <Utensils className="size-5" />
                  View menu
                </ActionLink>
                <ActionLink
                  href="/double-espresso/our-addresses"
                  variant="light"
                >
                  <Navigation className="size-5" />
                  Our addresses
                </ActionLink>
              </div>
            </div>

            <div className="grid gap-px border border-white/12 bg-white/12">
              {doubleEspressoLocations.map((location) => (
                <Link
                  key={location.id}
                  href="/double-espresso/our-addresses"
                  className="group grid gap-4 bg-[#6a4635] p-5 transition hover:bg-[#7a5543]"
                >
                  <span className="flex items-start justify-between gap-4">
                    <span>
                      <span className="block text-xs font-black text-white/50">
                        {location.hours}
                      </span>
                      <span className="mt-2 block text-xl font-black text-white">
                        {location.address}
                      </span>
                    </span>
                    <ArrowUpRight className="size-5 shrink-0 text-[#5fc2b4] transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </span>
                  <span className="text-sm leading-6 text-white/62">
                    Same menu at this cafe.
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </ScrollExpandMedia>

        <FeatureStrip />

        <section className="bg-[#f7f1e6] px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 border-b border-[#d9cab5] pb-12 lg:grid-cols-[0.92fr_1.08fr] lg:items-end">
              <SectionHeader
                eyebrow="Popular picks"
                title="Food, coffee and plates with the real card behind them."
                description={`A complete ${doubleEspressoMenuStats.itemCount}-item menu sits one click away, while the homepage leads with the dishes a visitor can understand instantly.`}
              />
              <div className="max-w-xl lg:justify-self-end">
                <p className="text-sm leading-7 text-[#57493d]">
                  The design keeps the items editorial and food-led instead of
                  presenting the cafe like a utility directory. Prices stay
                  visible, names stay in Hebrew, and each card points back to
                  the full menu.
                </p>
                <div className="mt-6">
                  <ActionLink href="/double-espresso/menu" variant="outline">
                    Full menu <ArrowUpRight className="size-4" />
                  </ActionLink>
                </div>
              </div>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {doubleEspressoFeaturedMenuItems.map((item, index) => {
                const image =
                  featuredCardImages[index % featuredCardImages.length] ??
                  featuredCardImages[0]!;

                return (
                  <article
                    key={item.id}
                    className="group border border-[#d9cab5] bg-[#fffaf0]"
                    dir="rtl"
                  >
                    <div className="relative min-h-72 overflow-hidden bg-[#5a3a2b]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1280px) 30vw, (min-width: 768px) 46vw, 100vw"
                        className="object-cover transition duration-700 group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,58,43,0.02),rgba(90,58,43,0.64))]" />
                      <p className="absolute right-5 bottom-5 text-xs font-black tracking-[0.22em] text-[#fffaf0] uppercase">
                        {image.caption}
                      </p>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between gap-5">
                        <h2 className="text-2xl leading-tight font-black text-[#5a3a2b]">
                          {item.name}
                        </h2>
                        <MenuPrice price={item.price} />
                      </div>
                      <p className="mt-4 text-xs font-black tracking-[0.18em] text-[#a57245] uppercase">
                        {item.section}
                      </p>
                      {item.description ? (
                        <p className="mt-4 text-sm leading-7 text-[#665d52]">
                          {item.description}
                        </p>
                      ) : null}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="bg-[#fffaf0]">
          <div className="grid lg:grid-cols-[0.95fr_1.05fr]">
            <div className="relative min-h-[540px] bg-[#5a3a2b] lg:min-h-[720px]">
              <Image
                src={doubleEspressoGallery[9].src}
                alt={doubleEspressoGallery[9].alt}
                fill
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,58,43,0),rgba(90,58,43,0.58))]" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-10">
                <p className="text-xs font-black tracking-[0.26em] text-[#d7b16d] uppercase">
                  Dining room
                </p>
                <p
                  className="mt-4 max-w-lg text-4xl leading-none font-black sm:text-5xl"
                  style={{ fontFamily: "var(--font-double-display)" }}
                >
                  Local images carry the atmosphere.
                </p>
              </div>
            </div>

            <div className="px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
              <div className="mx-auto max-w-2xl">
                <SectionHeader
                  eyebrow="Cafe gallery"
                  title="A warmer page rhythm than a standard template."
                  description="Large photography, thin rules and short editorial copy make the venue feel established while still keeping the site easy to use."
                />

                <div className="mt-10 grid grid-cols-2 gap-3">
                  {galleryPreview.map((image, index) => (
                    <div
                      key={image.src}
                      className={
                        index === 0
                          ? "relative col-span-2 min-h-80 overflow-hidden border border-[#d9cab5]"
                          : "relative min-h-44 overflow-hidden border border-[#d9cab5]"
                      }
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 24vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>

                <div className="mt-10 border-t border-[#d9cab5] pt-8">
                  <ActionLink href="/double-espresso/about-us" variant="quiet">
                    About the cafe <ArrowUpRight className="size-4" />
                  </ActionLink>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-[#5a3a2b] px-4 py-20 text-white sm:px-6 lg:px-8 lg:py-28">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
              <SectionHeader
                eyebrow="Visit us"
                title="Two nearby cafes, both built for fast decisions."
                description="Hours, phones and directions are visible without forcing customers to search through the page."
                inverted
              />
              <div className="grid gap-px border border-white/12 bg-white/12 md:grid-cols-2">
                {doubleEspressoLocations.map((location) => (
                  <article key={location.id} className="bg-[#6a4635]">
                    <div className="relative min-h-72 overflow-hidden bg-[#4a3024]">
                      <Image
                        src={location.image}
                        alt={location.name}
                        fill
                        sizes="(min-width: 1024px) 28vw, 100vw"
                        className="object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,58,43,0.04),rgba(90,58,43,0.72))]" />
                      <div className="absolute inset-x-0 bottom-0 p-5">
                        <p className="text-xs font-black tracking-[0.24em] text-[#d7b16d] uppercase">
                          Same menu here
                        </p>
                        <h2 className="mt-3 text-2xl leading-tight font-black">
                          {location.address}
                        </h2>
                      </div>
                    </div>

                    <div className="p-5">
                      <div className="grid gap-4 border-y border-white/12 py-5 text-sm text-white/68">
                        <p className="flex items-center gap-3">
                          <MapPin className="size-4 shrink-0 text-[#5fc2b4]" />
                          Tel Aviv-Yafo
                        </p>
                        <p className="flex items-center gap-3">
                          <Phone className="size-4 shrink-0 text-[#5fc2b4]" />
                          {location.phone}
                        </p>
                      </div>
                      <p className="mt-5 text-sm leading-6 text-white/62">
                        {location.hours}. {location.note}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <ActionLink href={location.mapsUrl} variant="light">
                          Directions
                        </ActionLink>
                        <ActionLink href={location.phoneHref}>
                          <Phone className="size-4" />
                          Call
                        </ActionLink>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
