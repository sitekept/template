import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "דאבל אספרסו - בית קפה ביפו",
  description:
    "גרסה עברית לאתר דאבל אספרסו ביפו: תפריט מלא, שתי כתובות, שעות פתיחה, טלפונים וניווט.",
  openGraph: {
    title: "דאבל אספרסו - בית קפה ביפו",
    description:
      "שני בתי קפה ביפו עם תפריט משותף לקפה, בראנץ׳, פסטות, סלטים וקינוחים.",
    locale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "דאבל אספרסו - בית קפה ביפו",
    description:
      "תפריט מלא, שתי כתובות, שעות פתיחה, טלפונים וניווט בגרסה עברית.",
  },
};

export default function DoubleEspressoHebrewLayout({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
