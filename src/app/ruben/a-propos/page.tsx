import { Award, Quote, Star } from "lucide-react";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";

export default function APropos() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              À propos de Ruben Hagège
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Découvrez l&apos;histoire d&apos;un artisan pâtissier passionné,
              lauréat des plus prestigieux concours français
            </p>
          </div>
        </div>
      </section>

      {/* Biography Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <div
                className="h-96 rounded-lg bg-cover bg-center shadow-xl"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')",
                }}
              />
            </div>

            <div>
              <h2 className="mb-6 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
                L&apos;art de la pâtisserie française
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Passionné par l&apos;art culinaire depuis son plus jeune âge,
                  Ruben Hagège a gravi les échelons de la pâtisserie française
                  avec détermination et excellence. Son parcours, marqué par des
                  formations prestigieuses et des rencontres déterminantes,
                  l&apos;a mené vers les plus hautes distinctions.
                </p>
                <p>
                  Formé auprès des plus grands maîtres pâtissiers, Ruben a
                  développé un style unique qui allie tradition française et
                  innovation contemporaine. Chaque création reflète sa vision
                  artistique et son exigence de perfection.
                </p>
                <p>
                  Installé à Alfortville, il partage désormais son savoir-faire
                  exceptionnel avec une clientèle qui apprécie
                  l&apos;authenticité et la qualité de ses créations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Awards and Recognition */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Récompenses et distinctions
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Un parcours jalonné de reconnaissances prestigieuses
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-card p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <Award className="mt-1 h-12 w-12 flex-shrink-0 text-gold" />
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-chocolate">
                    Meilleur Apprenti de France 2021
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    La plus haute distinction décernée aux jeunes artisans
                    français, récompensant l&apos;excellence technique et la
                    maîtrise parfaite des gestes traditionnels de la pâtisserie.
                  </p>
                  <div className="text-sm font-medium text-chocolate">
                    Catégorie : Pâtisserie-Confiserie
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-card p-8 shadow-lg">
              <div className="flex items-start space-x-4">
                <Star className="mt-1 h-12 w-12 flex-shrink-0 text-gold" />
                <div>
                  <h3 className="mb-2 font-serif text-2xl font-bold text-chocolate">
                    Rabelais des Jeunes Talents
                  </h3>
                  <p className="mb-4 text-muted-foreground">
                    Prix prestigieux célébrant l&apos;innovation et le talent
                    dans l&apos;art culinaire français, décerné aux jeunes chefs
                    prometteurs qui révolutionnent leur domaine.
                  </p>
                  <div className="text-sm font-medium text-chocolate">
                    Catégorie : Innovation Pâtissière
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-16">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Quote className="mx-auto mb-6 h-12 w-12 text-gold" />
          <blockquote className="mb-6 font-serif text-2xl text-chocolate italic sm:text-3xl">
            &ldquo;La pâtisserie, c&apos;est l&apos;art de transformer des
            ingrédients simples en émotions gustatives. Chaque création doit
            raconter une histoire et éveiller les sens.&rdquo;
          </blockquote>
          <cite className="text-lg text-muted-foreground">- Ruben Hagège</cite>
        </div>
      </section>

      {/* Values */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Nos valeurs
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-2xl">🎨</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-chocolate">
                Créativité
              </h3>
              <p className="text-muted-foreground">
                Innovation constante dans la création de nouvelles saveurs et
                textures, tout en respectant les traditions françaises.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-chocolate">
                Excellence
              </h3>
              <p className="text-muted-foreground">
                Sélection rigoureuse des meilleurs ingrédients et maîtrise
                parfaite des techniques pour garantir une qualité
                exceptionnelle.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="mb-3 font-serif text-xl font-semibold text-chocolate">
                Passion
              </h3>
              <p className="text-muted-foreground">
                Amour sincère pour l&apos;art pâtissier qui se ressent dans
                chaque création et dans l&apos;attention portée aux détails.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
