import { TemplateCard } from "@/components/sitekept/template-card";
import { templateCatalog } from "@/lib/template-catalog";

export default function Home() {
  const newTemplates = templateCatalog.filter(
    (template) => template.status === "Nouveau"
  );
  const existingTemplates = templateCatalog.filter(
    (template) => template.status !== "Nouveau"
  );
  const sectors = new Set(templateCatalog.map((template) => template.sector));
  const structures = new Set(
    templateCatalog.map((template) => template.structure)
  );

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,#f7f8fb_0%,#ffffff_42%,#f4f6fb_100%)] px-6 py-12 text-slate-950 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <section className="overflow-hidden rounded-[36px] bg-slate-950 px-6 py-10 text-white shadow-[0_30px_110px_rgba(15,23,42,0.24)] sm:px-8 lg:px-10 lg:py-14">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold tracking-[0.34em] text-white/55 uppercase">
                Catalogue interne
              </p>
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                Templates SiteKept pensées pour des secteurs et des structures
                vraiment différentes.
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                La vague en cours élargit le catalogue sur deux axes: de
                nouveaux métiers à forte intention locale, et des architectures
                de site plus variées que la simple landing page.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              <div className="rounded-[28px] border border-white/12 bg-white/8 p-5">
                <p className="text-3xl font-semibold">
                  {templateCatalog.length}
                </p>
                <p className="mt-2 text-sm text-white/65">Templates listées</p>
              </div>
              <div className="rounded-[28px] border border-white/12 bg-white/8 p-5">
                <p className="text-3xl font-semibold">{sectors.size}</p>
                <p className="mt-2 text-sm text-white/65">Secteurs couverts</p>
              </div>
              <div className="rounded-[28px] border border-white/12 bg-white/8 p-5">
                <p className="text-3xl font-semibold">{structures.size}</p>
                <p className="mt-2 text-sm text-white/65">
                  Structures visibles
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-slate-500 uppercase">
                Vague 1
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                8 nouvelles templates net-new
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Chaque carte expose explicitement le secteur et la structure pour
              rendre visible la diversification du catalogue.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {newTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-slate-500 uppercase">
                QA interne
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Matrice de différenciation
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              Cette vue sert de garde-fou: chaque template doit garder un hero,
              une navigation, un langage de formes et un profil de motion qui ne
              se confondent pas avec les autres.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_70px_rgba(15,23,42,0.08)]">
            <div className="hidden grid-cols-[1.05fr_1fr_1fr_1fr_1.3fr] gap-4 border-b border-slate-200 bg-slate-50 px-6 py-4 text-xs font-semibold tracking-[0.24em] text-slate-500 uppercase lg:grid">
              <span>Template</span>
              <span>Archetype</span>
              <span>Navigation</span>
              <span>Motion</span>
              <span>Pages</span>
            </div>

            <div className="divide-y divide-slate-200">
              {newTemplates.map((template) => (
                <article
                  key={`${template.slug}-qa`}
                  className="grid gap-3 px-6 py-5 lg:grid-cols-[1.05fr_1fr_1fr_1fr_1.3fr] lg:gap-4"
                >
                  <div>
                    <p className="text-sm font-semibold text-slate-950">
                      {template.name}
                    </p>
                    <p className="mt-1 text-xs text-slate-500">
                      {template.shapeLanguage}
                    </p>
                  </div>
                  <p className="text-sm leading-6 text-slate-600">
                    {template.archetype}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    {template.navModel}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    {template.motionProfile}
                  </p>
                  <p className="text-sm leading-6 text-slate-600">
                    {template.pageModel}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-16 pt-2">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold tracking-[0.28em] text-slate-500 uppercase">
                Base existante
              </p>
              <h2 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
                Templates déjà présentes dans le repo
              </h2>
            </div>
            <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
              `En ligne` correspond aux templates actuellement assumées au
              catalogue public. `Lab` signale des variations internes ou des
              pistes encore non promues.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {existingTemplates.map((template) => (
              <TemplateCard key={template.slug} template={template} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
