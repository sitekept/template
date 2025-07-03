"use client";

import { Clock, Info, MapPin, ShoppingCart } from "lucide-react";
import { useState } from "react";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";
import { Button } from "@/components/ui/button";

const produits = [
  { id: 1, name: "Saint-Honoré revisité", price: "35€" },
  { id: 2, name: "Tarte aux fruits de saison", price: "28€" },
  { id: 3, name: "Éclair au chocolat noir", price: "6€" },
  { id: 4, name: "Mille-feuille signature", price: "8€" },
  { id: 5, name: "Paris-Brest aux noisettes", price: "12€" },
  { id: 6, name: "Religieuse café", price: "7€" },
  { id: 7, name: "Tarte citron meringuée", price: "25€" },
  { id: 8, name: "Création personnalisée", price: "Sur devis" },
];

export default function Commande() {
  const [formData, setFormData] = useState({
    nom: "",
    telephone: "",
    email: "",
    date: "",
    produit: "",
    quantite: "1",
    notes: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Formulaire non-fonctionnel comme demandé
    alert(
      "Cette fonctionnalité n&apos;est pas encore disponible. Veuillez nous contacter directement."
    );
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Passer commande
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Réservez vos pâtisseries d&apos;exception en quelques clics.
              Chaque création est préparée avec soin selon vos souhaits.
            </p>
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-16 grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-card p-6 text-center shadow-lg">
              <Clock className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Délai de préparation
              </h3>
              <p className="text-muted-foreground">
                Minimum 48h pour les pâtisseries classiques, 1 semaine pour les
                créations sur mesure
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 text-center shadow-lg">
              <MapPin className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Retrait & Livraison
              </h3>
              <p className="text-muted-foreground">
                Retrait à l&apos;atelier ou livraison possible dans un rayon de
                15km autour d&apos;Alfortville
              </p>
            </div>

            <div className="rounded-lg bg-card p-6 text-center shadow-lg">
              <ShoppingCart className="mx-auto mb-4 h-12 w-12 text-gold" />
              <h3 className="mb-2 font-serif text-lg font-semibold text-chocolate">
                Paiement
              </h3>
              <p className="text-muted-foreground">
                Acompte de 30% à la commande, solde au retrait. CB, espèces,
                chèque acceptés
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Order Form */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg bg-card p-8 shadow-xl">
            <h2 className="mb-6 text-center font-serif text-2xl font-bold text-chocolate">
              Formulaire de précommande
            </h2>

            <div className="mb-8 rounded-lg border border-gold/20 bg-gold/10 p-4">
              <div className="flex items-start space-x-3">
                <Info className="mt-0.5 h-5 w-5 flex-shrink-0 text-gold" />
                <div className="text-sm text-gold-foreground">
                  <p className="mb-1 font-medium">
                    Formulaire de démonstration
                  </p>
                  <p>
                    Ce formulaire est uniquement à des fins de présentation.
                    Pour passer une vraie commande, veuillez nous contacter
                    directement.
                  </p>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="nom"
                    className="mb-2 block text-sm font-medium text-chocolate"
                  >
                    Nom complet *
                  </label>
                  <input
                    type="text"
                    id="nom"
                    name="nom"
                    value={formData.nom}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                    placeholder="Votre nom et prénom"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="telephone"
                    className="mb-2 block text-sm font-medium text-chocolate"
                  >
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    id="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                    placeholder="06 12 34 56 78"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-chocolate"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                  placeholder="votre.email@exemple.fr"
                />
              </div>

              {/* Order Details */}
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="date"
                    className="mb-2 block text-sm font-medium text-chocolate"
                  >
                    Date souhaitée *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                    min={
                      new Date(Date.now() + 2 * 24 * 60 * 60 * 1000)
                        .toISOString()
                        .split("T")[0]
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="quantite"
                    className="mb-2 block text-sm font-medium text-chocolate"
                  >
                    Quantité
                  </label>
                  <select
                    id="quantite"
                    name="quantite"
                    value={formData.quantite}
                    onChange={handleInputChange}
                    className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                  >
                    {[...Array(10)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>
                        {i + 1}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor="produit"
                  className="mb-2 block text-sm font-medium text-chocolate"
                >
                  Sélection de produit *
                </label>
                <select
                  id="produit"
                  name="produit"
                  value={formData.produit}
                  onChange={handleInputChange}
                  className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                  required
                >
                  <option value="">Choisissez une pâtisserie</option>
                  {produits.map((produit) => (
                    <option key={produit.id} value={produit.name}>
                      {produit.name} - {produit.price}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="notes"
                  className="mb-2 block text-sm font-medium text-chocolate"
                >
                  Notes et demandes spéciales
                </label>
                <textarea
                  id="notes"
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full rounded-md border border-border px-3 py-2 focus:border-transparent focus:ring-2 focus:ring-gold"
                  placeholder="Allergies, préférences, instructions de livraison, personnalisations..."
                />
              </div>

              {/* Submit Button */}
              <div className="pt-6 text-center">
                <Button
                  type="submit"
                  size="lg"
                  disabled
                  className="cursor-not-allowed bg-muted px-8 py-3 text-muted-foreground"
                >
                  Précommander (Non disponible)
                </Button>
                <p className="mt-2 text-sm text-muted-foreground">
                  Fonctionnalité de démonstration uniquement
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="bg-chocolate py-16 text-chocolate-foreground">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold">
            Prêt à commander ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-chocolate-foreground/80">
            Contactez-nous directement pour discuter de vos envies et finaliser
            votre commande personnalisée.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-gold px-8 py-3 text-gold-foreground hover:bg-gold/90"
              asChild
            >
              <a href="/contact">Nous contacter</a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-chocolate-foreground px-8 py-3 text-chocolate-foreground hover:bg-chocolate-foreground hover:text-chocolate"
              asChild
            >
              <a href="tel:0123456789">Appeler directement</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
