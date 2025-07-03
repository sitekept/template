import { Instagram } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-chocolate text-chocolate-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 font-serif text-2xl font-bold">Ruben Hagège</h3>
            <p className="mb-4 text-chocolate-foreground/80">
              Pâtisserie d&apos;exception à Alfortville
            </p>
            <p className="text-sm text-chocolate-foreground/80">
              Meilleur Apprenti de France 2021
              <br />
              Rabelais des Jeunes Talents
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">
              Navigation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/ruben/a-propos"
                  className="text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
                >
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/ruben/creations"
                  className="text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
                >
                  Créations
                </Link>
              </li>
              <li>
                <Link
                  href="/ruben/commande"
                  className="text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
                >
                  Commande
                </Link>
              </li>
              <li>
                <Link
                  href="/ruben/evenements"
                  className="text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
                >
                  Événements & Traiteur
                </Link>
              </li>
              <li>
                <Link
                  href="/ruben/contact"
                  className="text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-serif text-lg font-semibold">
              Suivez-nous
            </h4>
            <div className="flex items-center space-x-4">
              <Link
                href="https://instagram.com/rubenhagege"
                target="_blank"
                className="flex items-center text-chocolate-foreground/80 transition-colors hover:text-chocolate-foreground"
              >
                <Instagram className="mr-2 h-5 w-5" />
                @rubenhagege
              </Link>
            </div>
            <div className="mt-6">
              <p className="text-sm text-chocolate-foreground/80">
                📍 Alfortville, Val-de-Marne
                <br />
                📧 contact@rubenhagege.fr
                <br />
                📞 01 23 45 67 89
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-chocolate-foreground/20 pt-8 sm:flex-row">
          <p className="text-sm text-chocolate-foreground/60">
            © 2024 Ruben Hagège Pâtisserie. Tous droits réservés.
          </p>
          <div className="mt-4 flex space-x-4 sm:mt-0">
            <Link
              href="#"
              className="text-sm text-chocolate-foreground/60 transition-colors hover:text-chocolate-foreground/80"
            >
              Mentions légales
            </Link>
            <Link
              href="#"
              className="text-sm text-chocolate-foreground/60 transition-colors hover:text-chocolate-foreground/80"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
