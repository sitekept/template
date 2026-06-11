import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import type { TemplateCatalogEntry } from "@/lib/template-catalog";

const adminStatusLabel: Record<TemplateCatalogEntry["adminStatus"], string> = {
  "sitekept-public": "SiteKept public",
  "admin-only": "Admin only",
  lab: "Lab",
  archived: "Archivé",
};

function CardBody({ template }: { template: TemplateCatalogEntry }) {
  return (
    <>
      <div className="relative aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={template.previewImage}
          alt={`Aperçu de ${template.name}`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/15 to-transparent" />
        <div className="absolute top-4 left-4 rounded-full border border-white/18 bg-slate-950/70 px-3 py-1 text-xs font-semibold tracking-[0.24em] text-white uppercase backdrop-blur">
          {template.status}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-200">
            {template.sector}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-800">
            {template.structure}
          </span>
          <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-900">
            {template.navModel}
          </span>
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-800">
            {adminStatusLabel[template.adminStatus]}
          </span>
        </div>

        <h3 className="mt-4 text-2xl font-semibold text-slate-950">
          {template.name}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-slate-600">
          {template.description}
        </p>

        <div className="mt-4 space-y-2 rounded-2xl bg-slate-50 p-4 text-xs leading-5 text-slate-600">
          <p>
            <span className="font-semibold text-slate-900">Archetype:</span>{" "}
            {template.archetype}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Motion:</span>{" "}
            {template.motionProfile}
          </p>
          <p>
            <span className="font-semibold text-slate-900">Shape:</span>{" "}
            {template.shapeLanguage}
          </p>
          {template.adminNote ? (
            <p>
              <span className="font-semibold text-slate-900">Note:</span>{" "}
              {template.adminNote}
            </p>
          ) : null}
        </div>

        <div className="mt-5 flex flex-wrap items-center gap-3 border-t border-slate-200 pt-4 text-sm font-medium text-slate-950">
          <Link
            href={template.href}
            className="inline-flex items-center gap-1 rounded-full bg-slate-950 px-4 py-2 text-white transition hover:bg-slate-800"
          >
            {template.primaryCta}
            <ArrowUpRight className="size-4" />
          </Link>
          <a
            href={template.vercelUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-4 py-2 transition hover:border-slate-400"
          >
            Vercel
            <ArrowUpRight className="size-4" />
          </a>
          {template.sitekeptUrl ? (
            <a
              href={template.sitekeptUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-full border border-blue-200 px-4 py-2 text-blue-800 transition hover:border-blue-400"
            >
              SiteKept
              <ArrowUpRight className="size-4" />
            </a>
          ) : null}
        </div>
      </div>
    </>
  );
}

export function TemplateCard({ template }: { template: TemplateCatalogEntry }) {
  const className =
    "group flex h-full flex-col overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_25px_90px_rgba(15,23,42,0.14)]";

  return (
    <article className={className}>
      <CardBody template={template} />
    </article>
  );
}
