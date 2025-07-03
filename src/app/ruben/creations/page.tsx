"use client";

import { useState } from "react";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";
import { Button } from "@/components/ui/button";

const categories = [
  { id: "all", name: "Toutes" },
  { id: "signature", name: "Signature" },
  { id: "evenements", name: "Événements" },
  { id: "saisonnier", name: "Saisonnier" },
];

const creations = [
  {
    id: 1,
    name: "Saint-Honoré revisité",
    description:
      "Une interprétation moderne du grand classique français avec crème chiboust vanille et caramel beurre salé",
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    name: "Tarte aux fruits de saison",
    description:
      "Pâte sablée vanille, crème diplomate et fruits frais de saison sélectionnés avec soin",
    category: "saisonnier",
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    name: "Éclair au chocolat noir",
    description:
      "Pâte à choux légère garnie de crème pâtissière au chocolat Valrhona 70% et glaçage brillant",
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    name: "Pièce montée traditionnelle",
    description:
      "Croquembouche façonné à la main avec choux à la crème vanille et caramel doré",
    category: "evenements",
    image:
      "https://images.unsplash.com/photo-1621303837174-89787a7d4729?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    name: "Mille-feuille signature",
    description:
      "Feuilletage croustillant, crème légère vanille bourbon et fondant royal artisanal",
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    name: "Gâteau d&apos;anniversaire personnalisé",
    description:
      "Création sur mesure adaptée à vos goûts et à votre thématique, décoration artistique incluse",
    category: "evenements",
    image:
      "https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 7,
    name: "Tarte citron meringuée",
    description:
      "Pâte sucrée, crème citron acidulée et meringue française légèrement torréfée",
    category: "saisonnier",
    image:
      "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 8,
    name: "Paris-Brest aux noisettes",
    description:
      "Couronne de pâte à choux garnie de crème mousseline aux noisettes du Piémont",
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 9,
    name: "Bûche de Noël artisanale",
    description:
      "Biscuit roulé parfumé, mousse chocolat noir et insert fruits rouges, décoration festive",
    category: "saisonnier",
    image:
      "https://images.unsplash.com/photo-1512717020211-4b688b15629e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 10,
    name: "Wedding cake élégant",
    description:
      "Gâteau de mariage à étages avec décoration florale comestible et saveurs personnalisées",
    category: "evenements",
    image:
      "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 11,
    name: "Religieuse café",
    description:
      "Double choux garnis de crème pâtissière café, glaçage fondant et chantilly maison",
    category: "signature",
    image:
      "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 12,
    name: "Galette des rois frangipane",
    description:
      "Pâte feuilletée pur beurre et frangipane aux amandes, dorure parfaite et fève surprenante",
    category: "saisonnier",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  },
];

export default function Creations() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const filteredCreations =
    selectedCategory === "all"
      ? creations
      : creations.filter((creation) => creation.category === selectedCategory);

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Nos Créations
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Découvrez notre univers gourmand où tradition française et
              innovation se rencontrent pour créer des pâtisseries
              d&apos;exception
            </p>
          </div>
        </div>
      </section>

      {/* Filter Buttons */}
      <section className="border-b border-border bg-background py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  selectedCategory === category.id ? "default" : "outline"
                }
                onClick={() => setSelectedCategory(category.id)}
                className={
                  selectedCategory === category.id
                    ? "bg-chocolate text-chocolate-foreground hover:bg-chocolate/90"
                    : "border-chocolate text-chocolate hover:bg-chocolate hover:text-chocolate-foreground"
                }
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredCreations.map((creation) => (
              <div
                key={creation.id}
                className="overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url('${creation.image}')` }}
                />
                <div className="p-6">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="inline-block rounded bg-gold/20 px-2 py-1 text-xs font-medium text-gold">
                      {
                        categories.find((cat) => cat.id === creation.category)
                          ?.name
                      }
                    </span>
                  </div>
                  <h3 className="mb-3 font-serif text-xl font-semibold text-chocolate">
                    {creation.name}
                  </h3>
                  <p className="leading-relaxed text-muted-foreground">
                    {creation.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {filteredCreations.length === 0 && (
            <div className="py-16 text-center">
              <p className="text-xl text-muted-foreground">
                Aucune création disponible dans cette catégorie.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gold-foreground sm:text-4xl">
            Envie de goûter nos créations ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gold-foreground/80">
            Commandez vos pâtisseries préférées ou créons ensemble une pièce
            unique pour vos événements spéciaux.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-chocolate px-8 py-3 text-chocolate-foreground hover:bg-chocolate/90"
              asChild
            >
              <a href="/ruben/commande">Passer commande</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold-foreground px-8 py-3 text-gold-foreground hover:bg-gold-foreground hover:text-gold"
              asChild
            >
              <a href="/contact">Demander un devis</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
