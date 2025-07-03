import {
  Award,
  Calendar,
  Clock,
  Flower,
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

export default function Fleuriste() {
  return (
    <div className="min-h-screen bg-green-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Flower className="mr-2 h-8 w-8 text-green-600" />
              <span className="font-serif text-2xl font-bold text-green-800">
                Fleurs d&apos;Émeraude
              </span>
            </div>
            <div className="hidden space-x-8 md:flex">
              <a
                href="#accueil"
                className="text-green-800 transition-colors hover:text-rose-500"
              >
                Accueil
              </a>
              <a
                href="#compositions"
                className="text-green-800 transition-colors hover:text-rose-500"
              >
                Compositions
              </a>
              <a
                href="#apropos"
                className="text-green-800 transition-colors hover:text-rose-500"
              >
                À propos
              </a>
              <a
                href="#galerie"
                className="text-green-800 transition-colors hover:text-rose-500"
              >
                Galerie
              </a>
              <a
                href="#contact"
                className="text-green-800 transition-colors hover:text-rose-500"
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
              "url('https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=2000&q=80')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-green-50/80" />
        <div className="relative z-10 mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <div className="mb-6 flex items-center justify-center">
            <Sparkles className="mr-3 h-8 w-8 text-rose-400" />
            <span className="text-lg font-medium text-rose-500">
              Artisan Fleuriste depuis 1992
            </span>
            <Sparkles className="ml-3 h-8 w-8 text-rose-400" />
          </div>
          <h1 className="mb-6 font-serif text-6xl font-bold text-white drop-shadow-lg sm:text-7xl lg:text-8xl">
            Fleurs
            <span className="block text-rose-400">d&apos;Émeraude</span>
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl text-white/90 sm:text-2xl">
            L&apos;art floral à l&apos;état pur. Chaque bouquet raconte une
            histoire, chaque composition exprime vos émotions les plus
            profondes.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="#compositions">
              <Button
                size="lg"
                className="bg-rose-500 px-8 py-3 text-lg font-medium text-white hover:bg-rose-600"
              >
                Découvrir nos créations
              </Button>
            </Link>
            <Link href="#contact">
              <Button
                variant="outline"
                size="lg"
                className="border-white px-8 py-3 text-white hover:bg-white hover:text-green-800"
              >
                Commander maintenant
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Compositions Section */}
      <section id="compositions" className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-green-800 sm:text-5xl">
              Nos compositions florales
            </h2>
            <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
              Découvrez notre gamme complète de créations florales, chacune
              conçue avec passion et réalisée avec des fleurs fraîches
              sélectionnées pour leur beauté et leur qualité.
            </p>
          </div>

          {/* Catégories de fleurs */}
          <div className="mb-16 grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-green-800">
                Bouquets & Compositions
              </h3>
              {[
                {
                  name: "Bouquet Romantique",
                  description:
                    "Roses rouges, pivoines blanches, eucalyptus et verdure de saison",
                  price: "65€",
                  image:
                    "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Composition Champêtre",
                  description:
                    "Tournesols, lavande, blé et fleurs des champs dans un panier osier",
                  price: "45€",
                  image:
                    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Orchidée Élégance",
                  description:
                    "Orchidées phalaenopsis dans un vase contemporain avec mousse végétale",
                  price: "85€",
                  image:
                    "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-green-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-green-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-rose-500">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-8">
              <h3 className="mb-6 font-serif text-2xl font-semibold text-green-800">
                Plantes & Jardinières
              </h3>
              {[
                {
                  name: "Jardinière de Saison",
                  description:
                    "Mélange harmonieux de plantes fleuries selon la saison",
                  price: "35€",
                  image:
                    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Plante Verte d'Intérieur",
                  description:
                    "Monstera, ficus ou palmier dans un cache-pot décoratif",
                  price: "28€",
                  image:
                    "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=400&q=80",
                },
                {
                  name: "Cactus & Succulentes",
                  description:
                    "Composition de plantes grasses dans un terrarium design",
                  price: "22€",
                  image:
                    "https://images.unsplash.com/photo-1509423350716-97f2360af3e4?auto=format&fit=crop&w=400&q=80",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-4 rounded-lg bg-green-50/50 p-4"
                >
                  <div
                    className="h-20 w-20 rounded-lg bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.image}')` }}
                  />
                  <div className="flex-1">
                    <h4 className="font-serif text-lg font-semibold text-green-800">
                      {item.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-rose-500">
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* À propos Section */}
      <section id="apropos" className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 font-serif text-4xl font-bold sm:text-5xl">
                Une passion florale depuis 1992
              </h2>
              <p className="mb-6 text-lg">
                Fondée par Maître Floraliste Isabelle Verdier, notre boutique
                cultive l&apos;art floral depuis plus de 30 ans. Chaque jour,
                nous sélectionnons les plus belles fleurs pour créer des
                compositions uniques qui subliment vos moments précieux.
              </p>
              <p className="mb-8 text-lg">
                Spécialisés dans les créations sur mesure, nous travaillons avec
                des producteurs locaux et importons directement des marchés aux
                fleurs internationaux pour vous offrir la fraîcheur et la
                qualité exceptionnelles que vous méritez.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <Award className="mx-auto mb-2 h-12 w-12 text-rose-400" />
                  <div className="text-2xl font-bold text-rose-400">12+</div>
                  <div className="text-sm">Prix & Reconnaissances</div>
                </div>
                <div className="text-center">
                  <Users className="mx-auto mb-2 h-12 w-12 text-rose-400" />
                  <div className="text-2xl font-bold text-rose-400">8000+</div>
                  <div className="text-sm">Clients heureux</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square overflow-hidden rounded-lg shadow-2xl">
                <div
                  className="h-full w-full bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=800&q=80')",
                  }}
                />
              </div>
              <div className="absolute -right-6 -bottom-6 rounded-lg bg-rose-500 p-6 text-white shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold">32</div>
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
      <section className="bg-green-50 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-green-800 sm:text-5xl">
              Ce que disent nos clients
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Claire Moreau",
                text: "Des compositions florales d&apos;une beauté époustouflante ! Le bouquet de mariage était exactement ce dont je rêvais. Service impeccable.",
                rating: 5,
                event: "Mariage",
              },
              {
                name: "Thomas Dubois",
                text: "Je commande régulièrement pour offrir à ma femme. Les fleurs sont toujours fraîches et les arrangements sublimes. Très professionnel.",
                rating: 5,
                event: "Client fidèle",
              },
              {
                name: "Marie Lefevre",
                text: "Livraison ponctuelle et bouquet magnifique pour l'anniversaire de ma mère. Elle était aux anges ! Je recommande vivement.",
                rating: 5,
                event: "Anniversaire",
              },
            ].map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-8 shadow-lg">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-current text-rose-500"
                    />
                  ))}
                </div>
                <p className="mb-6 text-muted-foreground italic">
                  &quot;{testimonial.text}&quot;
                </p>
                <div>
                  <div className="font-semibold text-green-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-rose-500">
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
            <h2 className="mb-6 font-serif text-4xl font-bold text-green-800 sm:text-5xl">
              Galerie florale
            </h2>
            <p className="text-xl text-muted-foreground">
              Un aperçu de nos plus belles créations florales
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {[
              "https://images.unsplash.com/photo-1487070183336-b863922373d4?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1518709268805-4e9042af2176?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1485955900006-10f4d324d411?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1509423350716-97f2360af3e4?auto=format&fit=crop&w=500&q=80",
              "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=500&q=80",
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
      <section className="bg-rose-500 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="mb-6 font-serif text-4xl font-bold text-white sm:text-5xl">
              Services personnalisés
            </h2>
            <p className="text-xl text-white/90">
              Nous créons l&apos;atmosphère florale parfaite pour tous vos
              événements
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                icon: Heart,
                title: "Mariages",
                description:
                  "Bouquets de mariée, compositions d&apos;église et décoration florale complète",
              },
              {
                icon: Gift,
                title: "Événements privés",
                description:
                  "Anniversaires, fêtes et célébrations avec créations florales sur mesure",
              },
              {
                icon: Calendar,
                title: "Entreprises",
                description:
                  "Décoration florale de bureaux, événements corporate et réceptions",
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
      <section id="contact" className="bg-green-800 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-8 font-serif text-4xl font-bold sm:text-5xl">
                Visitez notre boutique
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="mt-1 h-6 w-6 text-rose-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Adresse</h3>
                    <p className="text-white/80">
                      45 Avenue des Jardins
                      <br />
                      69003 Lyon, France
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Clock className="mt-1 h-6 w-6 text-rose-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">
                      Horaires d&apos;ouverture
                    </h3>
                    <div className="space-y-1 text-white/80">
                      <p>Lundi - Samedi : 8h00 - 19h00</p>
                      <p>Dimanche : 9h00 - 12h00</p>
                      <p className="text-rose-400">Fermé les jours fériés</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Phone className="mt-1 h-6 w-6 text-rose-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Téléphone</h3>
                    <p className="text-white/80">04 78 95 12 34</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <Mail className="mt-1 h-6 w-6 text-rose-400" />
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <p className="text-white/80">contact@fleurs-emeraude.fr</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="mb-6 font-serif text-2xl font-semibold">
                Commandez vos fleurs
              </h3>
              <p className="mb-8 text-white/80">
                Passez votre commande dès maintenant. Nous préparons vos
                bouquets avec soin. Commande recommandée 24h à l&apos;avance
                pour les compositions sur mesure.
              </p>
              <div className="space-y-4">
                <Button
                  size="lg"
                  className="w-full bg-rose-500 text-white hover:bg-rose-600"
                >
                  Commander en ligne
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-white text-white hover:bg-white hover:text-green-800"
                >
                  Demander un devis
                </Button>
              </div>
              <p className="mt-6 text-sm text-white/60">
                * Livraison gratuite dans Lyon et communes limitrophes
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
                <Flower className="mr-2 h-8 w-8 text-green-600" />
                <span className="font-serif text-2xl font-bold text-green-800">
                  Fleurs d&apos;Émeraude
                </span>
              </div>
              <p className="text-muted-foreground">
                L&apos;art floral depuis 1992. Créations florales
                d&apos;exception pour tous vos moments précieux.
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-green-800">
                Liens rapides
              </h4>
              <div className="space-y-2">
                <a
                  href="#compositions"
                  className="block text-muted-foreground hover:text-green-800"
                >
                  Nos compositions
                </a>
                <a
                  href="#apropos"
                  className="block text-muted-foreground hover:text-green-800"
                >
                  À propos
                </a>
                <a
                  href="#galerie"
                  className="block text-muted-foreground hover:text-green-800"
                >
                  Galerie
                </a>
                <a
                  href="#contact"
                  className="block text-muted-foreground hover:text-green-800"
                >
                  Contact
                </a>
              </div>
            </div>
            <div>
              <h4 className="mb-4 font-semibold text-green-800">Suivez-nous</h4>
              <p className="mb-4 text-muted-foreground">
                Découvrez nos nouvelles créations et conseils floraux sur nos
                réseaux sociaux.
              </p>
              <div className="text-sm text-muted-foreground">
                © 2024 Fleurs d&apos;Émeraude. Tous droits réservés.
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
