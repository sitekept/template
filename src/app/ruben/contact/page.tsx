import { Clock, Instagram, Mail, MapPin, Phone } from "lucide-react";

import { Footer } from "@/components/ruben/footer";
import { Navigation } from "@/components/ruben/navigation";
import { Button } from "@/components/ui/button";

const contactInfo = [
  {
    icon: MapPin,
    title: "Adresse",
    content: "25 Rue de la République\n94140 Alfortville, France",
    action: "Voir sur Google Maps",
    href: "https://maps.google.com/maps?q=Alfortville,France",
  },
  {
    icon: Phone,
    title: "Téléphone",
    content: "01 23 45 67 89",
    action: "Appeler",
    href: "tel:+33123456789",
  },
  {
    icon: Mail,
    title: "Email",
    content: "contact@rubenhagege.fr",
    action: "Envoyer un email",
    href: "mailto:contact@rubenhagege.fr",
  },
  {
    icon: Instagram,
    title: "Instagram",
    content: "@rubenhagege",
    action: "Suivre",
    href: "https://instagram.com/rubenhagege",
  },
];

const horaires = [
  { jour: "Lundi", heures: "Fermé" },
  { jour: "Mardi", heures: "8h00 - 19h00" },
  { jour: "Mercredi", heures: "8h00 - 19h00" },
  { jour: "Jeudi", heures: "8h00 - 19h00" },
  { jour: "Vendredi", heures: "8h00 - 19h00" },
  { jour: "Samedi", heures: "8h00 - 18h00" },
  { jour: "Dimanche", heures: "8h00 - 13h00" },
];

const instagramPosts = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Éclair au chocolat",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1565958011703-44f9829ba187?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Tarte aux fruits",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1586985289906-406988974504?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Saint-Honoré",
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1571115764595-644a1f56a55c?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Paris-Brest",
  },
  {
    id: 5,
    image:
      "https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Mille-feuille",
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1486887396153-fa416526c108?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    alt: "Religieuse",
  },
];

export default function Contact() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="bg-cream pt-24 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h1 className="mb-4 font-serif text-4xl font-bold text-chocolate sm:text-5xl">
              Contact
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-chocolate/70">
              Venez nous rencontrer dans notre atelier à Alfortville ou
              contactez-nous pour discuter de vos projets pâtissiers
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="rounded-lg bg-card p-6 text-center shadow-lg transition-shadow duration-300 hover:shadow-xl"
              >
                <info.icon className="mx-auto mb-4 h-12 w-12 text-gold" />
                <h3 className="mb-3 font-serif text-lg font-semibold text-chocolate">
                  {info.title}
                </h3>
                <p className="mb-4 whitespace-pre-line text-muted-foreground">
                  {info.content}
                </p>
                <Button
                  size="sm"
                  className="bg-chocolate text-chocolate-foreground hover:bg-chocolate/90"
                  asChild
                >
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {info.action}
                  </a>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map and Hours */}
      <section className="bg-secondary py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
            {/* Map */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-chocolate">
                Nous trouver
              </h2>
              <div className="overflow-hidden rounded-lg bg-card shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.95383859105!2d2.3521478!3d48.8080537!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e673c4ce2f3cef%3A0x5db2c3c8a1e0b51d!2sAlfortville%2C%20France!5e0!3m2!1sen!2s!4v1699000000000!5m2!1sen!2s"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Alfortville"
                />
              </div>
              <div className="mt-4 rounded-lg bg-card p-4 shadow">
                <p className="text-sm text-muted-foreground">
                  <MapPin className="mr-2 inline h-4 w-4 text-gold" />
                  Notre atelier est situé au cœur d&apos;Alfortville, facilement
                  accessible en transports en commun (RER D - Station
                  Alfortville) ou en voiture avec parking à proximité.
                </p>
              </div>
            </div>

            {/* Hours */}
            <div>
              <h2 className="mb-6 font-serif text-2xl font-bold text-chocolate">
                Horaires d&apos;ouverture
              </h2>
              <div className="rounded-lg bg-card p-6 shadow-lg">
                <div className="mb-4 flex items-center">
                  <Clock className="mr-3 h-6 w-6 text-gold" />
                  <h3 className="font-serif text-lg font-semibold text-chocolate">
                    Atelier & Boutique
                  </h3>
                </div>
                <div className="space-y-3">
                  {horaires.map((horaire, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between border-b border-border py-2 last:border-b-0"
                    >
                      <span className="font-medium text-chocolate">
                        {horaire.jour}
                      </span>
                      <span
                        className={`text-sm ${horaire.heures === "Fermé" ? "text-muted-foreground" : "font-medium text-gold"}`}
                      >
                        {horaire.heures}
                      </span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-lg bg-gold/10 p-3">
                  <p className="text-sm text-gold-foreground">
                    <strong>Sur rendez-vous :</strong> Consultations pour
                    événements et commandes spéciales disponibles en dehors des
                    horaires d&apos;ouverture.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Instagram Feed */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-chocolate">
              Suivez-nous sur Instagram
            </h2>
            <p className="mx-auto mb-6 max-w-2xl text-xl text-muted-foreground">
              Découvrez nos dernières créations et les coulisses de
              l&apos;atelier
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:from-purple-600 hover:to-pink-600"
              asChild
            >
              <a href="https://instagram.com/rubenhagege" target="_blank">
                <Instagram className="mr-2 h-5 w-5" />
                @rubenhagege
              </a>
            </Button>
          </div>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-6">
            {instagramPosts.map((post) => (
              <div
                key={post.id}
                className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-300 hover:scale-105"
                  style={{ backgroundImage: `url('${post.image}')` }}
                  title={post.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Contact */}
      <section className="bg-gold py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="mb-4 font-serif text-3xl font-bold text-gold-foreground sm:text-4xl">
            Une question ? Un projet ?
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-xl text-gold-foreground/80">
            N&apos;hésitez pas à nous contacter pour discuter de vos envies
            pâtissières. Nous serons ravis de vous conseiller et de créer
            ensemble vos gourmandises idéales.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Button
              size="lg"
              className="bg-chocolate px-8 py-3 text-chocolate-foreground hover:bg-chocolate/90"
              asChild
            >
              <a href="tel:+33123456789">
                <Phone className="mr-2 h-5 w-5" />
                Appelez-nous
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-gold-foreground px-8 py-3 text-gold-foreground hover:bg-gold-foreground hover:text-gold"
              asChild
            >
              <a href="mailto:contact@rubenhagege.fr">
                <Mail className="mr-2 h-5 w-5" />
                Écrivez-nous
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
