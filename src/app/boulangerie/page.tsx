import {
  Award,
  Calendar,
  Clock,
  Gift,
  Heart,
  Mail,
  MapPin,
  Phone,
  Sparkles,
  Star,
  Users,
  Wheat,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

export default function Boulangerie() {
  return (
    <div className="min-h-screen bg-amber-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Wheat className="mr-2 h-8 w-8 text-amber-600" />
              <span className="font-serif text-2xl font-bold text-amber-800">
                Le Fournil d&apos;Or
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#accueil"
                className="text-amber-800 transition-colors hover:text-orange-600"
              >
                Accueil
              </a>
              <a
                href="#produits"
                className="text-amber-800 transition-colors hover:text-orange-600"
              >
                Nos produits
              </a>
              <a
                href="#apropos"
                className="text-amber-800 transition-colors hover:text-orange-600"
              >
                À propos
              </a>
              <a
                href="#galerie"
                className="text-amber-800 transition-colors hover:text-orange-600"
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="text-amber-800 transition-colors hover:text-orange-600"
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
              "url('https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-amber-900/50 via-amber-900/20 to-amber-50/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-orange-400" />
            <span className="text-lg font-medium text-orange-500">
              Maître Boulanger depuis 1978
            </span>
            <Sparkles className="ml-3 h-8 w-8 text-orange-400" />
          </div>
          <h1 className="mb-6 font-serif text-6xl font-bold text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            Le Fournil
            <span className="block text-orange-400">d&apos;Or</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:text-2xl">
            L&apos;art de la boulangerie traditionnelle française. Du pain
            croustillant aux viennoiseries dorées, chaque produit est façonné
            avec passion et savoir-faire ancestral.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#produits">
              <Button
                size="lg"
                className="bg-orange-600 px-8 py-3 text-lg font-medium text-white hover:bg-orange-700"
              >
                Découvrir nos produits
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white px-8 py-3 text-white hover:bg-white hover:text-amber-800"
              >
                Commander maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Produits Section */}
      <section id="produits" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-amber-800 sm:text-5xl">
              Nos spécialités artisanales
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Découvrez notre gamme complète de produits de boulangerie, chacun
              préparé selon les méthodes traditionnelles avec des ingrédients
              soigneusement sélectionnés.
            </p>
          </div>

          {/* Catégories de produits */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-amber-800">
                Pains & Baguettes
              </h3>
              {[
                {
                  name: "Baguette Tradition",
                  description:
                    "Baguette au levain, farine française T65, croûte dorée et mie alvéolée",
                  price: "1,30€",
                  image:
                    "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Pain de Campagne",
                  description:
                    "Pain au levain naturel, mélange de farines, croûte épaisse",
                  price: "4,50€",
                  image:
                    "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Pain aux Céréales",
                  description:
                    "Pain complet aux graines de tournesol, lin et sésame",
                  price: "3,80€",
                  image:
                    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-amber-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-amber-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-amber-800">
                Viennoiseries & Pâtisseries
              </h3>
              {[
                {
                  name: "Croissant au Beurre",
                  description:
                    "Croissant pur beurre AOP, pâte feuilletée croustillante",
                  price: "1,20€",
                  image:
                    "https://images.unsplash.com/photo-1555507036-ab794f4afe7a?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Pain au Chocolat",
                  description:
                    "Pâte feuilletée pur beurre, chocolat noir de qualité",
                  price: "1,40€",
                  image:
                    "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Chausson aux Pommes",
                  description:
                    "Pâte feuilletée, compotée de pommes fraîches à la cannelle",
                  price: "2,50€",
                  image:
                    "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-amber-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-amber-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-orange-600">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="bg-amber-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
                Une tradition familiale depuis 1978
              </h2>
              <p className="mb-6 text-lg">
                Fondée par Maître Boulanger Henri Dubois, notre boulangerie
                perpétue l&apos;art ancestral du pain français depuis plus de 45
                ans. Chaque matin, notre équipe se lève avant l&apos;aube pour
                préparer des produits frais qui régalent toute la famille.
              </p>
              <p className="mb-8 text-lg">
                Nous utilisons exclusivement des farines françaises de qualité,
                du levain naturel et des méthodes de fermentation lente pour
                obtenir des saveurs authentiques et des textures incomparables.
                Notre four à bois traditionnel donne à nos pains cette croûte
                dorée si caractéristique.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="mx-auto mb-2 h-12 w-12 text-orange-400" />
                  <div className="text-2xl font-bold text-orange-400">8+</div>
                  <div className="text-sm">Concours remportés</div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-12 w-12 text-orange-400" />
                  <div className="text-2xl font-bold text-orange-400">
                    5000+
                  </div>
                  <div className="text-sm">Clients fidèles</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-orange-600 p-6 text-white shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">46</div>
                  <div className="text-sm font-medium">
                    Années d&apos;expérience
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="bg-amber-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-amber-800 sm:text-5xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Françoise Martin",
                text: "La meilleure boulangerie du quartier ! Leur baguette tradition est croustillante à souhait et se conserve parfaitement. Je recommande vivement.",
                rating: 5,
                event: "Cliente fidèle",
              },
              {
                name: "Philippe Dubois",
                text: "Des croissants divins tous les matins ! La pâte feuilletée est parfaite et le beurre de qualité exceptionnelle. Un vrai plaisir quotidien.",
                rating: 5,
                event: "Amateur de viennoiseries",
              },
              {
                name: "Anne Lefevre",
                text: "Pain de campagne exceptionnel, comme autrefois. La mie est alvéolée, la croûte croustillante. Un savoir-faire authentique qui se ressent.",
                rating: 5,
                event: "Passionnée de pain",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-orange-600"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-amber-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-orange-600">
                    {testimonial.event}
                  </div>
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
            <h2 className="mb-6 font-serif text-4xl font-bold text-amber-800 sm:text-5xl">
              Notre savoir-faire en images
            </h2>
            <p className="text-xl text-muted-foreground">
              Découvrez l&apos;art de la boulangerie traditionnelle française
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1555507036-ab794f4afe7a?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1586444248902-2f64eddc13df?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1608039829572-78524f79c4c7?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1566419052333-545adad5b5b5?auto=format&fit=crop&w=500&q=80",
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

      {/* Services spécialisés */}
      <section className="bg-orange-600 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl">
              Services personnalisés
            </h2>
            <p className="text-xl text-white/90">
              Nous nous adaptons à tous vos besoins et événements spéciaux
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Événements familiaux",
                description:
                  "Commandes spéciales pour mariages, baptêmes et anniversaires",
              },
              {
                icon: Gift,
                title: "Plateaux gourmands",
                description:
                  "Assortiments de viennoiseries et pâtisseries pour vos réunions",
              },
              {
                icon: Calendar,
                title: "Livraison matinale",
                description:
                  "Service de livraison pour entreprises et collectivités",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <service.icon className="mx-auto mb-6 h-16 w-16 text-white" />
                <h3 className="mb-4 font-serif text-2xl font-semibold text-white">
                  {service.title}
                </h3>
                <p className="text-white/90">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Informations pratiques */}
      <section id="contact" className="bg-amber-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-4xl font-bold sm:text-5xl">
                Venez découvrir notre fournil
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Adresse</h3>
                    <p className="text-white/80">
                      12 Place du Marché
                      <br />
                      33000 Bordeaux, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-1 text-white/80">
                      <p>Mardi - Samedi : 6h30 - 19h30</p>
                      <p>Dimanche : 7h00 - 13h00</p>
                      <p className="text-orange-400">Fermé le lundi</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Téléphone</h3>
                    <p className="text-white/80">05 56 78 90 12</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-orange-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-white/80">contact@fournil-dor.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-serif text-2xl font-semibold">
                Commandez vos produits frais
              </h3>
              <p className="mb-8 text-white/80">
                Réservez vos produits préférés pour être sûr de les trouver !
                Commandes spéciales acceptées 48h à l&apos;avance pour les
                événements.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-orange-600 text-white hover:bg-orange-700"
                >
                  Passer commande
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-amber-800"
                >
                  Demander un devis
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/60">
                * Produits frais préparés chaque matin
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
                <Wheat className="mr-2 h-8 w-8 text-amber-600" />
                <span className="font-serif text-2xl font-bold text-amber-800">
                  Le Fournil d&apos;Or
                </span>
              </div>
              <p className="text-muted-foreground">
                Maître Boulanger depuis 1978. L&apos;art de la boulangerie
                traditionnelle française.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-amber-800">
                Liens rapides
              </h4>
              <div className="space-y-2">
                <a
                  href="#produits"
                  className="block text-muted-foreground hover:text-amber-800"
                >
                  Nos produits
                </a>
                <a
                  href="#apropos"
                  className="block text-muted-foreground hover:text-amber-800"
                >
                  À propos
                </a>
                <a
                  href="#galerie"
                  className="block text-muted-foreground hover:text-amber-800"
                >
                  Galerie
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-amber-800"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-amber-800">
                Qualité artisanale
              </h4>
              <p className="mb-4 text-muted-foreground">
                Farines françaises, levain naturel, fermentation lente.
                Savoir-faire transmis de génération en génération.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2024 Le Fournil d&apos;Or. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
