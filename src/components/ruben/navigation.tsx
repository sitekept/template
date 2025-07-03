"use client";

import { Instagram, Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navigation = [
    { name: "Accueil", href: "/ruben" },
    { name: "À propos", href: "/ruben/a-propos" },
    { name: "Créations", href: "/ruben/creations" },
    { name: "Commande", href: "/ruben/commande" },
    { name: "Événements", href: "/ruben/evenements" },
    { name: "Contact", href: "/ruben/contact" },
  ];

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex items-center">
            <Link href="/ruben" className="flex-shrink-0">
              <h1 className="font-serif text-2xl font-bold text-chocolate">
                Ruben Hagège
              </h1>
              <p className="text-xs text-muted-foreground">Pâtisserie</p>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden items-center space-x-8 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium text-foreground transition-colors duration-200 hover:text-chocolate"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://instagram.com/rubenhagege"
              target="_blank"
              className="text-muted-foreground transition-colors duration-200 hover:text-chocolate"
            >
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-chocolate"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-b border-border bg-background px-2 pt-2 pb-3 sm:px-3">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-foreground transition-colors duration-200 hover:bg-accent hover:text-chocolate"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://instagram.com/rubenhagege"
              target="_blank"
              className="flex items-center rounded-md px-3 py-2 text-base font-medium text-muted-foreground transition-colors duration-200 hover:bg-accent hover:text-chocolate"
              onClick={() => setIsOpen(false)}
            >
              <Instagram className="mr-2 h-5 w-5" />
              Instagram
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
