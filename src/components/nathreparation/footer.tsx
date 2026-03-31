import { Facebook, Instagram, Phone } from "lucide-react";
import Image from "next/image";

import { nathFooter, nathPhone, nathSocials } from "@/lib/nathreparation-data";

function SocialIcon({ label }: { label: string }) {
  if (label === "Facebook") {
    return <Facebook className="size-4" />;
  }

  return <Instagram className="size-4" />;
}

export function NathFooter() {
  return (
    <footer className="bg-[linear-gradient(135deg,#022243_0%,#002359_100%)] text-white">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div>
          <div className="relative h-10 w-[230px]">
            <Image
              src={nathFooter.logo}
              alt="Nath Réparation"
              fill
              className="object-contain object-left"
              sizes="230px"
            />
          </div>
          <p className="mt-6 max-w-xl text-sm leading-8 text-white/75">
            {nathFooter.about}
          </p>
          <div className="mt-6 flex gap-3">
            {nathSocials.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/8 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[#032549]"
              >
                <SocialIcon label={item.label} />
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Nos interventions</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/75">
            {nathFooter.interventions.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold">Contact</h2>
          <div className="mt-5 space-y-3 text-sm leading-7 text-white/75">
            {nathFooter.contact.map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-3 px-4 py-5 text-xs text-white/60 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <p>{nathFooter.copyright}</p>
          <a
            href="tel:0618186868"
            className="inline-flex items-center gap-2 font-semibold text-white"
          >
            <Phone className="size-4" />
            {nathPhone}
          </a>
        </div>
      </div>
    </footer>
  );
}
