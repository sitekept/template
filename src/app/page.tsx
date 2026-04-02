import Link from "next/link";

const templates = [
  { href: "/annecyelec", label: "Annecy Elec" },
  { href: "/boulangerie", label: "Boulangerie" },
  { href: "/fleuriste", label: "Fleuriste" },
  { href: "/ordinateur", label: "Ordinateur" },
  { href: "/osteopathe-kor-pantin", label: "Ostéopathe KOR Pantin" },
  { href: "/pattiserie", label: "Pattiserie" },
  { href: "/ruben", label: "Ruben" },
  { href: "/nathreparation", label: "Nath Reparation" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 py-16 text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-semibold">Templates</h1>
        <p className="mt-3 text-slate-300">
          Liste des templates disponibles dans ce repo.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {templates.map((template) => (
            <Link
              key={template.href}
              href={template.href}
              className="rounded-xl border border-slate-800 bg-slate-900 px-5 py-4 transition hover:border-slate-600 hover:bg-slate-800"
            >
              {template.label}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
