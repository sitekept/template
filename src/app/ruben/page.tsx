import { Award, ChefHat, Star } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=2089&q=80')",
          }}
        />
        <div className="hero-gradient absolute inset-0" />

        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h1 className="mb-6 font-serif text-5xl font-bold text-chocolate sm:text-6xl lg:text-7xl">
            Haute pâtisserie
            <span className="block text-gold">par Ruben Hagège</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-chocolate/80 sm:text-2xl">
            Découvrez l&apos;univers d&apos;exception d&apos;un artisan
            pâtissier primé, où tradition française et créativité se
            rencontrent.
          </p>
          <Link href="/ruben/creations">
            <Button
              size="lg"
              className="bg-chocolate px-8 py-3 text-lg font-medium text-chocolate-foreground hover:bg-chocolate/90"
            >
              Découvrir nos créations
            </Button>
          </Link>
        </div>
      </section>

      {/* Awards Section */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Excellence reconnue
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Un savoir-faire récompensé par les plus prestigieuses institutions
            </p>
          </div>

          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <Award className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h3 className="mb-2 font-serif text-xl font-semibold text-chocolate">
                Meilleur Apprenti de France 2021
              </h3>
              <p className="text-chocolate/70">
                Distinction nationale récompensant l&apos;excellence du
                savoir-faire artisanal
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 text-center shadow-lg">
              <Star className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h3 className="mb-2 font-serif text-xl font-semibold text-chocolate">
                Rabelais des Jeunes Talents
              </h3>
              <p className="text-chocolate/70">
                Prix célébrant l&apos;innovation et le talent dans l&apos;art
                culinaire français
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Creations */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Créations signature
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Un aperçu de nos pâtisseries d&apos;exception, alliant tradition
              et innovation
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Saint-Honoré revisité",
                description:
                  "Une interprétation moderne du grand classique français",
                image:
                  "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Tarte aux fruits de saison",
                description:
                  "Pâte sablée vanille et crème diplomate aux fruits frais",
                image:
                  "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
              {
                name: "Éclair au chocolat noir",
                description:
                  "Pâte à choux garnie de crème pâtissière au chocolat Valrhona",
                image:
                  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
              },
            ].map((creation, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg bg-card shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url('${creation.image}')` }}
                />
                <div className="p-6">
                  <h3 className="mb-2 font-serif text-xl font-semibold text-chocolate">
                    {creation.name}
                  </h3>
                  <p className="text-muted-foreground">
                    {creation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/ruben/creations">
              <Button
                variant="outline"
                size="lg"
                className="border-chocolate text-chocolate hover:bg-chocolate hover:text-chocolate-foreground"
              >
                Voir toutes nos créations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <ChefHat className="mx-auto mb-6 h-16 w-16 text-gold-foreground" />
          <h2 className="mb-4 font-serif text-3xl font-bold text-gold-foreground sm:text-4xl">
            Commandez vos pâtisseries d&apos;exception
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gold-foreground/80">
            Réservez dès maintenant vos créations pour vos événements spéciaux
            ou pour le plaisir de déguster l&apos;excellence artisanale.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/ruben/commande">
              <Button
                size="lg"
                className="bg-chocolate px-8 py-3 text-chocolate-foreground hover:bg-chocolate/90"
              >
                Passer commande
              </Button>
            </Link>
            <Link href="/ruben/contact">
              <Button
                variant="outline"
                size="lg"
                className="border-gold-foreground px-8 py-3 text-gold-foreground hover:bg-gold-foreground hover:text-gold"
              >
                Nous contacter
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
