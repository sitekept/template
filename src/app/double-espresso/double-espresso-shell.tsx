"use client";

import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

import {
  DoubleEspressoFixedActions,
  DoubleEspressoFooter,
  DoubleEspressoHeader,
  type DoubleEspressoLocale,
} from "./double-espresso-ui";

export function DoubleEspressoShell({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const locale: DoubleEspressoLocale = pathname.startsWith(
    "/double-espresso/he"
  )
    ? "he"
    : "en";
  const languageHref =
    locale === "he"
      ? pathname.replace(/^\/double-espresso\/he/, "/double-espresso") ||
        "/double-espresso"
      : pathname.replace(/^\/double-espresso/, "/double-espresso/he");

  return (
    <div dir={locale === "he" ? "rtl" : "ltr"} lang={locale}>
      <DoubleEspressoHeader locale={locale} languageHref={languageHref} />
      {children}
      <DoubleEspressoFooter locale={locale} />
      <DoubleEspressoFixedActions locale={locale} />
    </div>
  );
}
