import { Briefcase, Calendar, Heart, Sparkles, Star } from "lucide-react";
import Link from "next/link";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Mariages",
    description:
      "Gâteaux de mariage sur mesure, pièces montées traditionnelles, buffets sucrés personnalisés",
    features: [
      "Wedding cakes à étages",
      "Pièces montées",
      "Bar à desserts",
      "Macarons personnalisés",
    ],
  },
  {
    icon: Briefcase,
    title: "Événements professionnels",
    description:
      "Cocktails d'entreprise, séminaires, inaugurations avec des créations élégantes et raffinées",
    features: [
      "Verrines sucrées",
      "Petits fours",
      "Plateaux de mignardises",
      "Buffets prestige",
    ],
  },
  {
    icon: Sparkles,
    title: "Fêtes juives",
    description:
      "Spécialités pour Pourim, Rosh Hashana, et autres célébrations avec respect des traditions",
    features: [
      "Gâteaux Pourim",
      "Honey cakes",
      "Desserts casher",
      "Créations thématiques",
    ],
  },
];

const testimonials = [
  {
    name: "Sarah & David",
    event: "Mariage - 120 invités",
    text: "Un wedding cake absolument magnifique ! Ruben a su créer la pièce parfaite qui correspondait exactement à nos rêves. Nos invités en parlent encore.",
    rating: 5,
  },
  {
    name: "Société Dupont & Associés",
    event: "Cocktail d'entreprise - 80 personnes",
    text: "Service irréprochable pour notre événement annuel. Les verrines étaient délicieuses et la présentation parfaite. Nous renouvellerons l'expérience.",
    rating: 5,
  },
  {
    name: "Famille Cohen",
    event: "Célébration Pourim",
    text: "Ruben comprend parfaitement nos traditions et a créé des desserts magnifiques qui ont ravi toute la famille. Un vrai bonheur de travailler avec lui.",
    rating: 5,
  },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Wedding cake élégant à trois étages",
    category: "Mariage",
  },
  {
    src: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Pièce montée traditionnelle",
    category: "Mariage",
  },
  {
    src: "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Gâteau d'anniversaire personnalisé",
    category: "Anniversaire",
  },
  {
    src: "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Buffet de mignardises",
    category: "Entreprise",
  },
  {
    src: "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Plateau de petits fours",
    category: "Entreprise",
  },
  {
    src: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Desserts festifs",
    category: "Fêtes",
  },
];

export default function Evenements() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Événements & Traiteur
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Transformez vos moments précieux en souvenirs inoubliables avec
              nos créations pâtissières sur mesure pour tous vos événements
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Nos services événementiels
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Chaque événement est unique, nos créations le sont aussi
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="rounded-lg bg-card p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <service.icon className="mb-6 h-12 w-12 text-gold" />
                <h3 className="mb-4 font-serif text-xl font-semibold text-chocolate">
                  {service.title}
                </h3>
                <p className="mb-6 text-muted-foreground">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-sm text-muted-foreground"
                    >
                      <div className="mr-3 h-2 w-2 flex-shrink-0 rounded-full bg-gold" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Comment ça marche ?
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-gold-foreground">
                1
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Consultation
              </h3>
              <p className="text-sm text-muted-foreground">
                Échange sur vos besoins, thème, nombre d&apos;invités et budget
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-gold-foreground">
                2
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Conception
              </h3>
              <p className="text-sm text-muted-foreground">
                Création d&apos;un devis personnalisé avec propositions
                artistiques
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-gold-foreground">
                3
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Validation
              </h3>
              <p className="text-sm text-muted-foreground">
                Finalisation des détails et planification de la réalisation
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gold text-lg font-bold text-gold-foreground">
                4
              </div>
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Livraison
              </h3>
              <p className="text-sm text-muted-foreground">
                Installation sur site et présentation parfaite pour votre
                événement
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Galerie d&apos;événements
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
              Découvrez quelques-unes de nos réalisations pour des moments
              d&apos;exception
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <div
                  className="h-64 bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                  style={{ backgroundImage: `url('${image.src}')` }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute bottom-4 left-4 text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="rounded bg-gold px-2 py-1 text-xs font-medium">
                    {image.category}
                  </span>
                  <p className="mt-1 text-sm">{image.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-cream py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate sm:text-4xl">
              Témoignages clients
            </h2>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              La satisfaction de nos clients fait notre fierté
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-gold text-gold" />
                  ))}
                </div>
                <blockquote className="mb-4 text-muted-foreground italic">
                  &ldquo;{testimonial.text}&rdquo;
                </blockquote>
                <div>
                  <p className="font-semibold text-chocolate">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-chocolate py-16 text-chocolate-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <Calendar className="mx-auto mb-6 h-16 w-16 text-chocolate-foreground" />
          <h2 className="mb-4 font-serif text-3xl font-bold sm:text-4xl">
            Planifions votre événement ensemble
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-chocolate-foreground/80">
            Que ce soit pour un mariage, un anniversaire ou un événement
            professionnel, créons ensemble des moments gourmands inoubliables.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/ruben/contact">
              <Button
                size="lg"
                className="bg-gold px-8 py-3 text-gold-foreground hover:bg-gold/90"
              >
                Demander un devis
              </Button>
            </Link>
            <Link href="/ruben/creations">
              <Button
                variant="outline"
                size="lg"
                className="border-chocolate-foreground px-8 py-3 text-chocolate-foreground hover:bg-chocolate-foreground hover:text-chocolate"
              >
                Voir nos créations
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
