"use client";
import {
  Award,
  Building,
  CheckCircle,
  Clock,
  Home,
  Lightbulb,
  MapPin,
  Phone,
  Settings,
  Shield,
  Star,
  Users,
  Wrench,
  Zap,
} from "lucide-react";
import Image from "next/image";

export default function AnnecyElecPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-blue-900 p-4 text-white shadow-lg">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <div className="flex items-center space-x-2">
            <Zap className="h-8 w-8 text-yellow-400" />
            <span className="text-xl font-bold">Annecy Electricians</span>
          </div>
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="h-4 w-4" />
              <span>+33 6 89 86 37 91</span>
            </div>
            <button className="rounded-lg bg-yellow-500 px-4 py-2 font-semibold text-blue-900 transition-colors hover:bg-yellow-400">
              Devis Gratuit
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <h1 className="mb-6 text-5xl font-bold">
            Électriciens Professionnels à Annecy
          </h1>
          <p className="mx-auto mb-8 max-w-3xl text-xl">
            Services d&apos;électricité de qualité depuis plus de 15 ans.
            Installation, réparation et maintenance électrique pour particuliers
            et professionnels.
          </p>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-lg bg-yellow-500 px-8 py-3 text-lg font-semibold text-blue-900 transition-colors hover:bg-yellow-400">
              Intervention d&apos;urgence 24h/24
            </button>
            <button className="rounded-lg border-2 border-white px-8 py-3 text-lg font-semibold text-white transition-colors hover:bg-white hover:text-blue-900">
              Devis gratuit
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Nos Services Électriques
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Home className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">
                Installation Résidentielle
              </h3>
              <p className="text-gray-600">
                Installation complète de systèmes électriques pour maisons
                neuves et rénovations. Mise aux normes NF C 15-100.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Building className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">
                Électricité Commerciale
              </h3>
              <p className="text-gray-600">
                Solutions électriques pour entreprises, bureaux et commerces.
                Éclairage professionnel et systèmes de sécurité.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Wrench className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">Dépannage Urgent</h3>
              <p className="text-gray-600">
                Intervention rapide 24h/24 et 7j/7 pour tous vos problèmes
                électriques. Panne de courant, court-circuit, disjoncteur.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Lightbulb className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">Éclairage LED</h3>
              <p className="text-gray-600">
                Installation d&apos;éclairage LED économique et écologique.
                Intérieur, extérieur et éclairage décoratif.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Settings className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">Tableau Électrique</h3>
              <p className="text-gray-600">
                Rénovation et mise aux normes de tableaux électriques.
                Installation de disjoncteurs et protection différentielle.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
              <Shield className="mb-4 h-12 w-12 text-blue-600" />
              <h3 className="mb-3 text-xl font-semibold">Mise aux Normes</h3>
              <p className="text-gray-600">
                Diagnostic et mise en conformité de vos installations
                électriques selon les normes en vigueur.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-800">
                Annecy Electricians France Services
              </h2>
              <p className="mb-6 text-lg text-gray-600">
                Depuis 2008, notre équipe d&apos;électriciens qualifiés
                intervient dans toute la région d&apos;Annecy pour vos travaux
                d&apos;installation, de réparation et de maintenance électrique.
                Nous garantissons un service de qualité, rapide et sécurisé.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Plus de 15 ans d&apos;expérience</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Électriciens certifiés et assurés</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Intervention 24h/24 et 7j/7</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span>Devis gratuit et sans engagement</span>
                </div>
              </div>
            </div>
            <div className="rounded-lg bg-gray-100 p-8">
              <Image
                src="https://images.unsplash.com/photo-1621905252507-b35492cc74b4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                alt="Électricien au travail"
                className="h-64 w-full rounded-lg object-cover"
                width={1000}
                height={256}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Témoignages de nos Clients
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                &quot;Intervention très rapide pour un dépannage d&apos;urgence.
                Travail soigné et prix correct. Je recommande vivement !&quot;
              </p>
              <p className="font-semibold">- Marie L., Annecy</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                &quot;Rénovation complète de mon installation électrique. Équipe
                professionnelle et respectueuse des délais.&quot;
              </p>
              <p className="font-semibold">- Pierre M., Cran-Gevrier</p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <div className="mb-4 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 fill-current text-yellow-400"
                  />
                ))}
              </div>
              <p className="mb-4 text-gray-600">
                &quot;Installation d&apos;éclairage LED dans mon commerce.
                Résultat parfait et économies d&apos;énergie garanties !&quot;
              </p>
              <p className="font-semibold">- Sophie R., Seynod</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Nos Réalisations
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Installation électrique"
                className="h-48 w-full object-cover"
                width={500}
                height={192}
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Tableau électrique"
                className="h-48 w-full object-cover"
                width={500}
                height={192}
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Éclairage LED"
                className="h-48 w-full object-cover"
                width={500}
                height={192}
              />
            </div>
            <div className="overflow-hidden rounded-lg bg-gray-100">
              <Image
                src="https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=80"
                alt="Électricien professionnel"
                className="h-48 w-full object-cover"
                width={500}
                height={192}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specialized Services */}
      <section className="bg-blue-50 py-16">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-800">
            Services Spécialisés
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Urgence 24h/24</h3>
              <p className="text-gray-600">
                Service d&apos;urgence disponible tous les jours de
                l&apos;année. Intervention rapide en moins de 2 heures.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <Award className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">Garantie 2 ans</h3>
              <p className="text-gray-600">
                Tous nos travaux sont garantis 2 ans. Matériel de qualité et
                main d&apos;œuvre assurée.
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-600">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">
                Conseil Personnalisé
              </h3>
              <p className="text-gray-600">
                Étude personnalisée de vos besoins et conseils d&apos;experts
                pour optimiser votre installation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-900 py-16 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Contactez-nous
          </h2>
          <div className="grid gap-12 md:grid-cols-2">
            <div>
              <h3 className="mb-6 text-xl font-semibold">
                Informations de Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-yellow-400" />
                  <span>2 rue des carillons, 74940 Annecy</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-yellow-400" />
                  <span>+33 6 89 86 37 91</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-5 w-5 text-yellow-400" />
                  <span>Lun-Ven: 8h-18h | Sam: 9h-17h | Urgences: 24h/24</span>
                </div>
              </div>
              <div className="mt-8">
                <h4 className="mb-4 text-lg font-semibold">
                  Zone d&apos;Intervention
                </h4>
                <p className="text-gray-300">
                  Annecy, Cran-Gevrier, Seynod, Meythet, Annecy-le-Vieux,
                  Epagny, Poisy, Argonay et communes environnantes.
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-6 text-xl font-semibold">Demande de Devis</h3>
              <form className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Nom et Prénom"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Téléphone"
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Description de vos travaux électriques"
                    rows={4}
                    className="w-full rounded-lg border border-gray-700 bg-gray-800 p-3 text-white placeholder-gray-400 focus:border-yellow-400 focus:outline-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-yellow-500 py-3 font-semibold text-gray-900 transition-colors hover:bg-yellow-400"
                >
                  Envoyer la Demande
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 py-8 text-gray-400">
        <div className="mx-auto max-w-7xl px-4 text-center">
          <div className="mb-4 flex items-center justify-center space-x-2">
            <Zap className="h-6 w-6 text-yellow-400" />
            <span className="text-lg font-semibold text-white">
              Annecy Electricians
            </span>
          </div>
          <p className="mb-4">
            Votre électricien de confiance à Annecy - Services professionnels
            depuis 2008
          </p>
          <p className="text-sm">
            © 2024 Annecy Electricians France Services. Tous droits réservés.
          </p>
        </div>
      </footer>
    </div>
  );
}
