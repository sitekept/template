import {
  Award,
  Calendar,
  ChefHat,
  Clock,
  Gift,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Pattiserie() {
  return (
    <div className="min-h-screen bg-cream">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <ChefHat className="mr-2 h-8 w-8 text-chocolate" />
              <span className="font-serif text-2xl font-bold text-chocolate">
                Pâtisserie Douceur
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#accueil"
                className="text-chocolate transition-colors hover:text-gold"
              >
                Accueil
              </a>
              <a
                href="#specialites"
                className="text-chocolate transition-colors hover:text-gold"
              >
                Spécialités
              </a>
              <a
                href="#apropos"
                className="text-chocolate transition-colors hover:text-gold"
              >
                À propos
              </a>
              <a
                href="#galerie"
                className="text-chocolate transition-colors hover:text-gold"
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="text-chocolate transition-colors hover:text-gold"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="accueil"
        className="relative flex h-screen items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-cream/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-gold" />
            <span className="text-lg font-medium text-gold">
              Artisan Pâtissier depuis 1985
            </span>
            <Sparkles className="ml-3 h-8 w-8 text-gold" />
          </div>
          <h1 className="mb-6 font-serif text-6xl font-bold text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            Pâtisserie
            <span className="block text-gold">Douceur</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:text-2xl">
            L&apos;art de la pâtisserie française à son apogée. Chaque création
            est une œuvre d&apos;art gustative, façonnée avec passion et
            savoir-faire traditionnel.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#specialites">
              <Button
                size="lg"
                className="bg-gold px-8 py-3 text-lg font-medium text-gold-foreground hover:bg-gold/90"
              >
                Découvrir nos créations
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white px-8 py-3 text-white hover:bg-white hover:text-chocolate"
              >
                Commander maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Spécialités Section */}
      <section id="specialites" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Nos spécialités d&apos;exception
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Découvrez notre gamme complète de pâtisseries artisanales, chacune
              préparée avec des ingrédients de première qualité et un
              savoir-faire transmis de génération en génération.
            </p>
          </div>

          {/* Catégories de pâtisseries */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-chocolate">
                Entremets & Gâteaux
              </h3>
              {[
                {
                  name: "Opéra Royal",
                  description:
                    "Biscuit Joconde, ganache chocolat, crème au beurre café, glaçage miroir",
                  price: "45€",
                  image:
                    "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Fraisier Traditionnel",
                  description:
                    "Génoise vanille, crème mousseline, fraises fraîches de saison",
                  price: "38€",
                  image:
                    "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Saint-Honoré Revisité",
                  description:
                    "Pâte feuilletée, choux caramélisés, crème Chiboust vanille",
                  price: "42€",
                  image:
                    "https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-cream/30 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-chocolate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-gold">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-chocolate">
                Pâtisseries Individuelles
              </h3>
              {[
                {
                  name: "Éclair au Chocolat Valrhona",
                  description:
                    "Pâte à choux, crème pâtissière chocolat, glaçage fondant",
                  price: "6€",
                  image:
                    "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Tartelette Citron Yuzu",
                  description:
                    "Pâte sablée, crème citron-yuzu, meringue italienne flambée",
                  price: "7€",
                  image:
                    "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Paris-Brest Praliné",
                  description:
                    "Choux pralinés, crème praliné noisette, amandes effilées",
                  price: "8€",
                  image:
                    "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-cream/30 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-chocolate">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-gold">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="bg-chocolate py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
                Une passion familiale depuis 1985
              </h2>
              <p className="mb-6 text-lg">
                Fondée par Maître Pierre Douceur, notre pâtisserie perpétue un
                savoir-faire artisanal d&apos;exception depuis près de 40 ans.
                Chaque jour, notre équipe de passionnés crée des merveilles
                gustatives qui éveillent les sens et créent des souvenirs
                inoubliables.
              </p>
              <p className="mb-8 text-lg">
                Récompensés par de nombreux prix prestigieux, nous continuons
                d&apos;innover tout en respectant les traditions de la
                pâtisserie française. Notre laboratoire utilise exclusivement
                des ingrédients de première qualité, sourcés auprès de
                producteurs locaux.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="mx-auto mb-2 h-12 w-12 text-gold" />
                  <div className="text-2xl font-bold text-gold">15+</div>
                  <div className="text-sm">Prix & Distinctions</div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-12 w-12 text-gold" />
                  <div className="text-2xl font-bold text-gold">10000+</div>
                  <div className="text-sm">Clients satisfaits</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-gold p-6 text-gold-foreground shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">38</div>
                  <div className="text-sm font-medium">
                    Années d&apos;expertise
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-cream py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Marie Dubois",
                text: "Une pâtisserie d&apos;exception ! Chaque création est un véritable chef-d&apos;œuvre. Le Saint-Honoré était absolument divin pour notre mariage.",
                rating: 5,
                event: "Mariage",
              },
              {
                name: "Jean-Luc Martin",
                text: "Un savoir-faire remarquable. Les éclairs au chocolat sont les meilleurs de la région. L&apos;accueil est toujours chaleureux.",
                rating: 5,
                event: "Client régulier",
              },
              {
                name: "Sophie Leroy",
                text: "Commande pour l&apos;anniversaire de ma fille. Le gâteau était magnifique et délicieux. Toute la famille a été conquise !",
                rating: 5,
                event: "Anniversaire",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-gold" />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-chocolate">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gold">{testimonial.event}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Galerie gourmande
            </h2>
            <p className="text-xl text-muted-foreground">
              Un aperçu visuel de nos créations les plus emblématiques
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1586985289906-406988974504?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=500&q=80",
            ].map((image, index) => (
              <div
                key={index}
                className="aspect-square overflow-hidden rounded-lg shadow-lg transition-shadow hover:shadow-xl"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url('${image}')` }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services & Événements */}
      <section className="bg-gold py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-gold-foreground sm:text-5xl">
              Services sur mesure
            </h2>
            <p className="text-xl text-gold-foreground/80">
              Nous créons des moments d&apos;exception pour tous vos événements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Mariages",
                description:
                  "Pièces montées, wedding cakes et buffets sucrés pour votre jour J",
              },
              {
                icon: Gift,
                title: "Anniversaires",
                description:
                  "Gâteaux personnalisés et créations thématiques pour tous les âges",
              },
              {
                icon: Calendar,
                title: "Événements d&apos;entreprise",
                description:
                  "Cocktails sucrés, pause-café gourmande et réceptions professionnelles",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <service.icon className="mx-auto mb-6 h-16 w-16 text-gold-foreground" />
                <h3 className="mb-4 font-serif text-2xl font-semibold text-gold-foreground">
                  {service.title}
                </h3>
                <p className="text-gold-foreground/80">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Informations pratiques */}
      <section id="contact" className="bg-chocolate py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-4xl font-bold sm:text-5xl">
                Venez nous rendre visite
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-gold" />
                  <div>
                    <h3 className="mb-1 font-semibold">Adresse</h3>
                    <p className="text-white/80">
                      123 Rue de la Gourmandise
                      <br />
                      75001 Paris, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 h-6 w-6 text-gold" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-1 text-white/80">
                      <p>Mardi - Samedi : 7h00 - 19h30</p>
                      <p>Dimanche : 8h00 - 13h00</p>
                      <p className="text-gold">Fermé le lundi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-gold" />
                  <div>
                    <h3 className="mb-1 font-semibold">Téléphone</h3>
                    <p className="text-white/80">01 42 33 44 55</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-gold" />
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-white/80">
                      contact@patisserie-douceur.fr
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-serif text-2xl font-semibold">
                Commandez en ligne
              </h3>
              <p className="mb-8 text-white/80">
                Passez votre commande dès maintenant pour une préparation
                soignée. Nous recommandons de commander 48h à l&apos;avance pour
                les gâteaux sur mesure.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-gold text-gold-foreground hover:bg-gold/90"
                >
                  Commander en ligne
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-chocolate"
                >
                  Demander un devis
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/60">
                * Livraison possible dans un rayon de 20km
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-white py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center">
                <ChefHat className="mr-2 h-8 w-8 text-chocolate" />
                <span className="font-serif text-2xl font-bold text-chocolate">
                  Pâtisserie Douceur
                </span>
              </div>
              <p className="text-muted-foreground">
                L&apos;art de la pâtisserie française depuis 1985. Créations
                artisanales d&apos;exception.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-chocolate">
                Liens rapides
              </h4>
              <div className="space-y-2">
                <a
                  href="#specialites"
                  className="block text-muted-foreground hover:text-chocolate"
                >
                  Nos spécialités
                </a>
                <a
                  href="#apropos"
                  className="block text-muted-foreground hover:text-chocolate"
                >
                  À propos
                </a>
                <a
                  href="#galerie"
                  className="block text-muted-foreground hover:text-chocolate"
                >
                  Galerie
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-chocolate"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-chocolate">Suivez-nous</h4>
              <p className="mb-4 text-muted-foreground">
                Restez informés de nos nouvelles créations et événements
                spéciaux.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2024 Pâtisserie Douceur. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
