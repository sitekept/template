"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { nathNavigation, nathPhone } from "@/lib/nathreparation-data";

export function NathHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#032549]/8 bg-white/88 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link
          href="/nathreparation"
          className="relative h-8 w-[188px] shrink-0 transition-transform duration-300 hover:scale-[1.01]"
        >
          <Image
            src="https://nathreparation.com/wp-content/uploads/2019/12/logonathreparation-1.png"
            alt="Nath Réparation"
            fill
            className="object-contain object-left"
            sizes="188px"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {nathNavigation.map((item) => {
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active
                    ? "text-[#e62938]"
                    : "text-[#032549] hover:text-[#e62938]"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <a
            href="tel:0618186868"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#032549] transition-colors hover:text-[#e62938]"
          >
            <Phone className="size-4" />
            {nathPhone}
          </a>
          <Button
            asChild
            size="lg"
            className="h-11 rounded-full bg-[#e62938] px-6 text-white shadow-[0_16px_40px_rgba(230,41,56,0.28)] hover:bg-[#d12031]"
          >
            <Link href="/nathreparation/contact">Fixer un RDV</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={mobileOpen ? "Fermer le menu" : "Ouvrir le menu"}
          onClick={() => setMobileOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-[#032549]/10 text-[#032549] lg:hidden"
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {mobileOpen ? (
        <div className="border-t border-[#032549]/8 bg-white lg:hidden">
          <div className="mx-auto flex max-w-[1200px] flex-col gap-1 px-4 py-4 sm:px-6">
            {nathNavigation.map((item) => {
              const active = pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-2xl px-4 py-3 text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#032549]/5 text-[#e62938]"
                      : "text-[#032549] hover:bg-[#032549]/4 hover:text-[#e62938]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href="tel:0618186868"
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-[#e62938] px-4 py-3 text-sm font-semibold text-white"
            >
              <Phone className="size-4" />
              Appeler maintenant
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
