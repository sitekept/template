import { ArrowUpRight, Clock, Navigation, Phone, Utensils } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  doubleEspressoLocations,
  doubleEspressoMenu,
  doubleEspressoMenuStats,
} from "@/lib/double-espresso-data";
import { cn } from "@/lib/utils";

export type DoubleEspressoLocale = "en" | "he";
type DoubleEspressoLocationRecord = (typeof doubleEspressoLocations)[number];
type DoubleEspressoLocationId = DoubleEspressoLocationRecord["id"];

const doubleEspressoNavByLocale = {
  en: [
    { href: "/double-espresso", label: "Home" },
    { href: "/double-espresso/menu", label: "Menu" },
    { href: "/double-espresso/about-us", label: "About Us" },
    { href: "/double-espresso/our-addresses", label: "Our Addresses" },
  ],
  he: [
    { href: "/double-espresso/he", label: "בית" },
    { href: "/double-espresso/he/menu", label: "תפריט" },
    { href: "/double-espresso/he/about-us", label: "עלינו" },
    { href: "/double-espresso/he/our-addresses", label: "כתובות" },
  ],
} as const;

export const doubleEspressoNavigation = doubleEspressoNavByLocale.en;

const doubleEspressoChromeCopy = {
  en: {
    brand: "Double Espresso",
    subtitle: "Jaffa coffee house",
    navLabel: "Double Espresso navigation",
    call: "Call",
    directions: "Directions",
    menu: "Menu",
    visit: "Visit us",
    city: "Tel Aviv-Yafo",
    footerText:
      "Two Jaffa cafes with one shared menu for coffee, brunch, pasta, salads, desserts and late drinks.",
    openMaps: "Open maps",
    languageHref: "/double-espresso/he",
    languageLabel: "עברית",
    languageAria: "עברית",
  },
  he: {
    brand: "דאבל אספרסו",
    subtitle: "בית קפה ביפו",
    navLabel: "ניווט דאבל אספרסו",
    call: "התקשרו",
    directions: "ניווט",
    menu: "תפריט",
    visit: "בואו לבקר",
    city: "תל אביב-יפו",
    footerText:
      "שני בתי קפה ביפו עם תפריט משותף לקפה, בראנץ׳, פסטות, סלטים, קינוחים ושתייה עד הערב.",
    openMaps: "פתחו מפה",
    languageHref: "/double-espresso",
    languageLabel: "EN",
    languageAria: "English",
  },
} as const;

const doubleEspressoUiCopy = {
  en: {
    categories: "Categories",
    items: "items",
    hours: "Hours",
    phone: "Phone",
    menu: "Menu",
    alsoListed: "Also listed:",
    sameMenuPrefix: "Same",
    sameMenuSuffix: "items at this cafe",
    directions: "Directions",
    call: "Call",
    featureStrip: [
      { label: "Cafes", value: "Two Jaffa addresses" },
      { label: "Menu", value: "125 shared items" },
      { label: "Hours", value: "Open daily into late evening" },
      { label: "Best for", value: "Coffee, brunch and laptop tables" },
    ],
  },
  he: {
    categories: "קטגוריות",
    items: "פריטים",
    hours: "שעות פתיחה",
    phone: "טלפון",
    menu: "תפריט",
    alsoListed: "מספר נוסף:",
    sameMenuPrefix: "אותם",
    sameMenuSuffix: "פריטים בבית הקפה הזה",
    directions: "ניווט",
    call: "התקשרו",
    featureStrip: [
      { label: "בתי קפה", value: "שתי כתובות ביפו" },
      { label: "תפריט", value: "125 פריטים משותפים" },
      { label: "שעות", value: "פתוח כל יום עד הערב" },
      { label: "מתאים ל", value: "קפה, בראנץ׳ ועבודה עם מחשב" },
    ],
  },
} as const;

const doubleEspressoLocationCopy = {
  en: {
    "jerusalem-blvd": {
      name: "Double Espresso Jerusalem Boulevard",
      address: "Jerusalem Blvd 77, Tel Aviv-Yafo",
      hours: "Daily 04:00-23:00",
      note: "Same full Double Espresso menu with boulevard seating and quick coffee stops.",
    },
    "yehuda-hayamit": {
      name: "Double Espresso Yehuda HaYamit",
      address: "Yehuda HaYamit 13, Tel Aviv-Yafo",
      hours: "Daily 06:00-23:00",
      note: "Same menu at the second Jaffa cafe, close to the college and old-city walks.",
    },
  },
  he: {
    "jerusalem-blvd": {
      name: "דאבל אספרסו שדרות ירושלים",
      address: "שדרות ירושלים 77, תל אביב-יפו",
      hours: "כל יום 04:00-23:00",
      note: "אותו תפריט מלא של דאבל אספרסו, עם ישיבה על השדרה ועצירות קפה מהירות.",
    },
    "yehuda-hayamit": {
      name: "דאבל אספרסו יהודה הימית",
      address: "יהודה הימית 13, תל אביב-יפו",
      hours: "כל יום 06:00-23:00",
      note: "אותו תפריט בבית הקפה השני ביפו, קרוב למכללה ולטיולים בעיר העתיקה.",
    },
  },
} as const satisfies Record<
  DoubleEspressoLocale,
  Record<
    DoubleEspressoLocationId,
    { name: string; address: string; hours: string; note: string }
  >
>;

export function getDoubleEspressoLocationCopy(
  location: DoubleEspressoLocationRecord,
  locale: DoubleEspressoLocale = "en"
) {
  return doubleEspressoLocationCopy[locale][location.id];
}

export const doubleEspressoGalleryCaptions = {
  en: {
    diningRoom: "Dining room",
    sameMenu: "Same menu here",
    telAvivYafo: "Tel Aviv-Yafo",
  },
  he: {
    diningRoom: "חלל הישיבה",
    sameMenu: "אותו תפריט גם כאן",
    telAvivYafo: "תל אביב-יפו",
  },
} as const;

const routeByLocale = {
  en: {
    home: "/double-espresso",
    menu: "/double-espresso/menu",
    about: "/double-espresso/about-us",
    addresses: "/double-espresso/our-addresses",
  },
  he: {
    home: "/double-espresso/he",
    menu: "/double-espresso/he/menu",
    about: "/double-espresso/he/about-us",
    addresses: "/double-espresso/he/our-addresses",
  },
} as const;

function getRoutes(locale: DoubleEspressoLocale) {
  return routeByLocale[locale];
}

export const doubleEspressoHebrewMenuRoot = routeByLocale.he.menu;

const primaryLocation = doubleEspressoLocations[0];

type ActionLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "dark" | "outline" | "light" | "quiet";
  className?: string;
  ariaLabel?: string;
};

export function ActionLink({
  href,
  children,
  variant = "primary",
  className,
  ariaLabel,
}: ActionLinkProps) {
  const isExternal = href.startsWith("http");

  return (
    <Link
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={ariaLabel}
      className={cn(
        "inline-flex min-h-11 min-w-0 items-center justify-center gap-2 rounded-[4px] px-4 py-3 text-xs font-black tracking-[0.12em] uppercase transition focus-visible:ring-2 focus-visible:ring-[#e44825] focus-visible:ring-offset-2 focus-visible:outline-none",
        variant === "primary" && "bg-[#e44825] text-white hover:bg-[#c9371c]",
        variant === "dark" && "bg-[#5a3a2b] text-white hover:bg-[#6b4938]",
        variant === "outline" &&
          "border border-[#5a3a2b] text-[#5a3a2b] hover:bg-[#5a3a2b] hover:text-white",
        variant === "light" &&
          "border border-white/24 bg-white/8 text-white hover:bg-white/16",
        variant === "quiet" &&
          "border-b border-[#a57245] px-0 text-[#a57245] hover:border-[#e44825] hover:text-[#e44825]",
        className
      )}
    >
      {children}
    </Link>
  );
}

export function DoubleEspressoHeader({
  locale = "en",
  languageHref,
}: {
  locale?: DoubleEspressoLocale;
  languageHref?: string;
}) {
  const copy = doubleEspressoChromeCopy[locale];
  const navigation = doubleEspressoNavByLocale[locale];
  const routes = getRoutes(locale);
  const isHebrew = locale === "he";
  const switchHref = languageHref ?? copy.languageHref;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 border-b border-[#f4ead8]/10 bg-[#4a3024]/24 text-[#fffaf0] backdrop-blur-md"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <div className="mx-auto grid max-w-7xl gap-3 px-4 py-3 sm:px-6 lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-8">
        <div className="flex min-w-0 items-start justify-between gap-3">
          <Link href={routes.home} className="min-w-0">
            <p
              className="text-2xl leading-none font-black"
              style={{ fontFamily: "var(--font-double-display)" }}
            >
              {copy.brand}
            </p>
            <p className="mt-1 text-[0.68rem] font-black tracking-[0.24em] text-[#e8dcc9]/62 uppercase">
              {copy.subtitle}
            </p>
          </Link>
          <ActionLink
            href={switchHref}
            variant="light"
            className="min-h-9 shrink-0 px-3 py-2 text-[0.68rem] sm:hidden"
            ariaLabel={copy.languageAria}
          >
            {copy.languageLabel}
          </ActionLink>
        </div>

        <nav
          aria-label={copy.navLabel}
          className={cn(
            "grid w-full grid-cols-2 gap-px border border-[#f4ead8]/14 bg-[#f4ead8]/10 text-center text-[0.62rem] font-black text-[#fffaf0]/82 uppercase sm:flex sm:w-auto sm:flex-wrap sm:justify-center sm:border-0 sm:bg-transparent sm:text-[0.72rem]",
            isHebrew
              ? "tracking-[0.02em]"
              : "tracking-[0.08em] sm:tracking-[0.18em]"
          )}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="min-w-0 bg-[#4a3024]/18 px-2 py-3 transition hover:bg-[#f4ead8]/10 hover:text-white sm:bg-transparent sm:px-4 sm:py-2"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden w-full grid-cols-2 gap-2 sm:flex sm:w-auto sm:flex-wrap sm:justify-end">
          <ActionLink
            href={primaryLocation.phoneHref}
            className={cn(
              "w-full px-3 text-[0.68rem] sm:w-auto sm:px-4 sm:text-xs",
              isHebrew
                ? "tracking-[0.02em]"
                : "tracking-[0.08em] sm:tracking-[0.12em]"
            )}
          >
            <Phone className="size-4" />
            {copy.call}
          </ActionLink>
          <ActionLink
            href={routes.addresses}
            variant="light"
            className={cn(
              "w-full px-3 text-[0.68rem] sm:w-auto sm:px-4 sm:text-xs",
              isHebrew
                ? "tracking-[0.02em]"
                : "tracking-[0.08em] sm:tracking-[0.12em]"
            )}
          >
            <Navigation className="size-4" />
            {copy.directions}
          </ActionLink>
          <ActionLink
            href={switchHref}
            variant="light"
            className="w-full px-3 text-[0.68rem] sm:w-auto sm:px-4 sm:text-xs"
            ariaLabel={copy.languageAria}
          >
            {copy.languageLabel}
          </ActionLink>
        </div>
      </div>
    </header>
  );
}

export function DoubleEspressoFooter({
  locale = "en",
}: {
  locale?: DoubleEspressoLocale;
}) {
  const copy = doubleEspressoChromeCopy[locale];
  const routes = getRoutes(locale);

  return (
    <footer
      className="border-t border-[#806250] bg-[#4a3024] px-4 py-14 pb-28 text-[#fffaf0] sm:px-6 lg:px-8 lg:pb-14"
      dir={locale === "he" ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr_0.7fr] lg:items-start">
          <div>
            <p className="text-xs font-black tracking-[0.28em] text-[#d7b16d] uppercase">
              {copy.city}
            </p>
            <p
              className="mt-4 text-5xl leading-none font-black"
              style={{ fontFamily: "var(--font-double-display)" }}
            >
              {copy.brand}
            </p>
            <p className="mt-5 max-w-sm text-sm leading-7 text-[#fffaf0]/62">
              {copy.footerText}
            </p>
          </div>

          <div className="grid gap-px border border-[#f4ead8]/12 bg-[#f4ead8]/12 sm:grid-cols-2">
            {doubleEspressoLocations.map((location) => (
              <div key={location.id} className="bg-[#5a3a2b] p-5">
                {(() => {
                  const locationCopy = getDoubleEspressoLocationCopy(
                    location,
                    locale
                  );

                  return (
                    <>
                      <p className="text-xs font-black tracking-[0.22em] text-[#d7b16d] uppercase">
                        {copy.visit}
                      </p>
                      <p className="mt-4 text-lg leading-tight font-black text-white">
                        {locationCopy.address}
                      </p>
                      <p className="mt-3 text-sm text-[#fffaf0]/60">
                        {locationCopy.hours}
                      </p>
                    </>
                  );
                })()}
                <Link
                  href={location.mapsUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-xs font-black tracking-[0.18em] text-[#d7b16d] uppercase hover:text-white"
                >
                  {copy.openMaps} <ArrowUpRight className="size-4" />
                </Link>
              </div>
            ))}
          </div>

          <div className="grid gap-3 lg:justify-items-end">
            <ActionLink href={routes.menu} variant="light">
              <Utensils className="size-4" />
              {copy.menu}
            </ActionLink>
            <ActionLink href={primaryLocation.phoneHref}>
              <Phone className="size-4" />
              {copy.call}
            </ActionLink>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function DoubleEspressoFixedActions({
  locale = "en",
}: {
  locale?: DoubleEspressoLocale;
}) {
  const copy = doubleEspressoChromeCopy[locale];
  const routes = getRoutes(locale);

  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 border-t border-[#ded3c1] bg-[#f7f1e6]/96 p-3 shadow-[0_-12px_40px_rgba(90,58,43,0.14)] backdrop-blur lg:hidden"
      dir={locale === "he" ? "rtl" : "ltr"}
    >
      <div className="mx-auto grid w-full max-w-lg grid-cols-[minmax(0,1fr)_minmax(0,1fr)] gap-2">
        <ActionLink
          href={primaryLocation.phoneHref}
          className={cn(
            "px-2 text-[0.62rem]",
            locale === "he" ? "tracking-[0.02em]" : "tracking-[0.08em]"
          )}
        >
          <Phone className="size-4" />
          {copy.call}
        </ActionLink>
        <ActionLink
          href={routes.addresses}
          variant="dark"
          className={cn(
            "px-2 text-[0.62rem]",
            locale === "he" ? "tracking-[0.02em]" : "tracking-[0.08em]"
          )}
        >
          <Navigation className="size-4" />
          {copy.directions}
        </ActionLink>
      </div>
    </div>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  description,
  inverted = false,
  align = "left",
  className,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  inverted?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-4xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      <p
        className={cn(
          "text-xs font-black tracking-[0.28em] uppercase",
          inverted ? "text-[#d7b16d]" : "text-[#a57245]"
        )}
      >
        {eyebrow}
      </p>
      <h2
        className={cn(
          "mt-4 text-4xl leading-none font-black break-words sm:text-6xl",
          inverted ? "text-white" : "text-[#5a3a2b]"
        )}
        style={{ fontFamily: "var(--font-double-display)" }}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={cn(
            "mt-5 text-base leading-8 sm:text-lg",
            align === "center" && "mx-auto max-w-3xl",
            align === "left" && "max-w-3xl",
            inverted ? "text-[#fffaf0]/68" : "text-[#57493d]"
          )}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function MenuPrice({ price }: { price: number }) {
  return (
    <span className="shrink-0 text-lg font-black tracking-[0.04em] text-[#e44825]">
      ₪{price}
    </span>
  );
}

export function MenuBoard({
  locale = "en",
  basePath,
}: {
  locale?: DoubleEspressoLocale;
  basePath?: string;
}) {
  const copy = doubleEspressoUiCopy[locale];
  const menuRoot = basePath ?? getRoutes(locale).menu;
  const isHebrew = locale === "he";

  return (
    <div
      className="grid gap-10 lg:grid-cols-[260px_1fr] lg:items-start"
      dir={isHebrew ? "rtl" : "ltr"}
    >
      <aside className="border-y border-[#d9cab5] py-5 lg:sticky lg:top-32">
        <div className="flex items-center justify-between pb-5">
          <span
            className={cn(
              "text-xs font-black text-[#a57245] uppercase",
              isHebrew ? "tracking-[0.04em]" : "tracking-[0.24em]"
            )}
          >
            {copy.categories}
          </span>
          <span className="text-xs font-black tracking-[0.2em] text-[#5a3a2b]">
            {doubleEspressoMenuStats.sectionCount}
          </span>
        </div>
        <div className="grid gap-px border border-[#d9cab5] bg-[#d9cab5]">
          {doubleEspressoMenu.map((section) => (
            <Link
              key={section.id}
              href={`${menuRoot}#menu-${section.id}`}
              className="flex items-center justify-between gap-3 bg-[#f7f1e6] px-4 py-4 text-sm font-black text-[#5a3a2b] transition hover:bg-white"
              dir="rtl"
            >
              <span>{section.title}</span>
              <span className="text-xs font-black tracking-[0.16em] text-[#a57245]">
                {section.items.length}
              </span>
            </Link>
          ))}
        </div>
      </aside>

      <div className="grid gap-12">
        {doubleEspressoMenu.map((section) => (
          <section
            key={section.id}
            id={`menu-${section.id}`}
            className="scroll-mt-32 border-t border-[#5a3a2b] bg-[#fffaf0]"
            dir="rtl"
          >
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-[#d9cab5] px-0 py-6">
              <div className="flex items-center gap-4">
                <Image
                  src={section.icon}
                  alt=""
                  width={54}
                  height={45}
                  className="h-11 w-12 object-contain opacity-70"
                />
                <div>
                  <h3
                    className="text-4xl leading-none font-black text-[#5a3a2b]"
                    style={{ fontFamily: "var(--font-double-display)" }}
                  >
                    {section.title}
                  </h3>
                  <p
                    className={cn(
                      "mt-2 text-xs font-black text-[#a57245] uppercase",
                      isHebrew ? "tracking-[0.04em]" : "tracking-[0.22em]"
                    )}
                  >
                    {section.items.length} {copy.items}
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2">
              {section.items.map((item) => (
                <article
                  key={item.id}
                  className="min-h-32 border-b border-[#e4d8c6] px-0 py-5 md:px-5 md:even:border-r"
                >
                  <div className="flex items-start justify-between gap-5">
                    <h4 className="text-xl leading-tight font-black text-[#5a3a2b]">
                      {item.name}
                    </h4>
                    <MenuPrice price={item.price} />
                  </div>
                  {item.description ? (
                    <p className="mt-3 text-sm leading-7 text-[#615143]">
                      {item.description}
                    </p>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export function LocationCard({
  location,
  locale = "en",
}: {
  location: DoubleEspressoLocationRecord;
  locale?: DoubleEspressoLocale;
}) {
  const copy = doubleEspressoUiCopy[locale];
  const locationCopy = getDoubleEspressoLocationCopy(location, locale);

  return (
    <article
      className="grid overflow-hidden border border-[#d9cab5] bg-[#fffaf0] lg:grid-cols-[1.05fr_0.95fr]"
      dir={locale === "he" ? "rtl" : "ltr"}
    >
      <div className="relative min-h-[430px] bg-[#5a3a2b]">
        <Image
          src={location.image}
          alt={locationCopy.name}
          fill
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover opacity-90"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(90,58,43,0.05),rgba(90,58,43,0.82))]" />
        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <p
            className={cn(
              "text-xs font-black text-[#d7b16d] uppercase",
              locale === "he" ? "tracking-[0.04em]" : "tracking-[0.26em]"
            )}
          >
            {doubleEspressoChromeCopy[locale].visit}
          </p>
          <h2
            className="mt-4 max-w-xl text-4xl leading-none font-black sm:text-5xl"
            style={{ fontFamily: "var(--font-double-display)" }}
          >
            {locationCopy.address}
          </h2>
        </div>
      </div>

      <div className="grid gap-7 p-6 sm:p-8">
        <div className="grid gap-px border border-[#d9cab5] bg-[#d9cab5]">
          <InfoRow
            icon={<Clock className="size-5" />}
            label={copy.hours}
            locale={locale}
          >
            {locationCopy.hours}
          </InfoRow>
          <InfoRow
            icon={<Phone className="size-5" />}
            label={copy.phone}
            locale={locale}
          >
            {location.phone}
            {"secondaryPhone" in location && location.secondaryPhone ? (
              <span className="mt-1 block text-sm font-normal text-[#615143]">
                {copy.alsoListed} {location.secondaryPhone}
              </span>
            ) : null}
          </InfoRow>
          <InfoRow
            icon={<Utensils className="size-5" />}
            label={copy.menu}
            locale={locale}
          >
            {copy.sameMenuPrefix} {doubleEspressoMenuStats.itemCount}{" "}
            {copy.sameMenuSuffix}
          </InfoRow>
        </div>

        <p className="text-base leading-8 text-[#57493d]">
          {locationCopy.note}
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          <ActionLink href={location.mapsUrl} variant="dark">
            <Navigation className="size-5" />
            {copy.directions}
          </ActionLink>
          <ActionLink href={location.phoneHref} variant="outline">
            <Phone className="size-5" />
            {copy.call}
          </ActionLink>
        </div>

        <div className="min-h-[300px] overflow-hidden border border-[#d9cab5] bg-[#5a3a2b]">
          <iframe
            title={`${locationCopy.name} ${locale === "he" ? "מפה" : "map"}`}
            src={location.embedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full min-h-[300px] w-full"
          />
        </div>
      </div>
    </article>
  );
}

function InfoRow({
  icon,
  label,
  children,
  locale = "en",
}: {
  icon: ReactNode;
  label: string;
  children: ReactNode;
  locale?: DoubleEspressoLocale;
}) {
  return (
    <div className="grid gap-4 bg-[#f7f1e6] p-5 sm:grid-cols-[44px_1fr] sm:items-start">
      <span className="flex size-11 items-center justify-center rounded-[4px] bg-[#5a3a2b] text-white">
        {icon}
      </span>
      <span>
        <span
          className={cn(
            "block text-xs font-black text-[#a57245] uppercase",
            locale === "he" ? "tracking-[0.04em]" : "tracking-[0.22em]"
          )}
        >
          {label}
        </span>
        <span className="mt-2 block text-lg font-black text-[#5a3a2b]">
          {children}
        </span>
      </span>
    </div>
  );
}

export function FeatureStrip({
  locale = "en",
}: {
  locale?: DoubleEspressoLocale;
}) {
  const copy = doubleEspressoUiCopy[locale];

  return (
    <div className="border-y border-[#d9cab5] bg-[#fffaf0]">
      <div
        className="mx-auto grid max-w-7xl divide-y divide-[#d9cab5] px-4 sm:grid-cols-2 sm:divide-x sm:divide-y-0 sm:px-6 lg:grid-cols-4 lg:px-8"
        dir={locale === "he" ? "rtl" : "ltr"}
      >
        {copy.featureStrip.map((item) => (
          <div key={item.label} className="py-6 sm:px-5 lg:py-8">
            <p
              className={cn(
                "text-xs font-black text-[#a57245] uppercase",
                locale === "he" ? "tracking-[0.04em]" : "tracking-[0.24em]"
              )}
            >
              {item.label}
            </p>
            <p className="mt-3 text-lg leading-tight font-black text-[#5a3a2b]">
              {item.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
