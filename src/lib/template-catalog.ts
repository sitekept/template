export type TemplateStatus = "En ligne" | "Nouveau" | "Lab";

export type TemplateStructure =
  | "Commerce gourmand"
  | "Landing lead-gen"
  | "Multi-page service"
  | "Portfolio éditorial"
  | "Hospitality éditoriale"
  | "Listings multi-page"
  | "Multi-page créateur";

export type TemplateCatalogEntry = {
  slug: string;
  href: string;
  name: string;
  sector: string;
  structure: TemplateStructure;
  archetype: string;
  navModel: string;
  motionProfile: string;
  shapeLanguage: string;
  pageModel: string;
  primaryCta: string;
  previewImage: string;
  status: TemplateStatus;
  description: string;
  hardReload?: boolean;
};

export const templateCatalog: TemplateCatalogEntry[] = [
  {
    slug: "dentiste",
    href: "/dentiste",
    name: "Dentiste",
    sector: "Santé",
    structure: "Multi-page service",
    archetype: "Clinique premium structurée",
    navModel: "Top nav + rail sticky de réservation",
    motionProfile: "Micro-transitions sobres",
    shapeLanguage: "Rayons 12-16px, lignes nettes",
    pageModel:
      "Accueil, soins, technologies, équipe, première-visite, rendez-vous, contact",
    primaryCta: "Prendre rendez-vous",
    previewImage:
      "https://images.unsplash.com/photo-1629909615184-74f495363b67?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Cabinet rassurant et structuré autour de la prise de rendez-vous, des soins et de l'expertise clinique.",
  },
  {
    slug: "plombier-chauffagiste",
    href: "/plombier-chauffagiste",
    name: "Plombier Chauffagiste",
    sector: "Habitat",
    structure: "Landing lead-gen",
    archetype: "Landing d'urgence locale",
    navModel: "Ancres + barre d'appel mobile",
    motionProfile: "Pulsation hotline et transitions courtes",
    shapeLanguage: "Angles francs 6-10px, badges urgence",
    pageModel: "Landing unique orientée triage et conversion immédiate",
    primaryCta: "Appel d'urgence",
    previewImage:
      "https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Landing locale pensée pour l'urgence, les interventions rapides et la capture immédiate du lead.",
  },
  {
    slug: "architecte-interieur",
    href: "/architecte-interieur",
    name: "Architecte d'intérieur",
    sector: "Architecture intérieure",
    structure: "Portfolio éditorial",
    archetype: "Portfolio chapitre / case-study",
    navModel: "Rail éditorial / sommaire de chapitres",
    motionProfile: "Parallax lent et masques image",
    shapeLanguage: "Très peu de rayon, cadres éditoriaux",
    pageModel:
      "Accueil, projets, projet-detail, méthode, studio, journal, contact",
    primaryCta: "Découvrir les projets",
    previewImage:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Approche premium, narrative et image-led pour vendre une direction artistique et des études de cas.",
  },
  {
    slug: "salon-coiffure",
    href: "/salon-coiffure",
    name: "Salon de coiffure",
    sector: "Beauté",
    structure: "Multi-page service",
    archetype: "Marque lifestyle / booking visuel",
    navModel: "Nav flottante centrée",
    motionProfile: "Reveals en cascade et hover image",
    shapeLanguage: "Rayons larges 36-56px, capsules",
    pageModel:
      "Accueil, prestations, stylists, lookbook, reservation, journal, contact",
    primaryCta: "Réserver un créneau",
    previewImage:
      "https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Template booking-first avec galerie, prestations, équipe et codes premium inspirés des salons urbains.",
  },
  {
    slug: "menage-nettoyage",
    href: "/menage-nettoyage",
    name: "Ménage & Nettoyage",
    sector: "Services à domicile",
    structure: "Landing lead-gen",
    archetype: "Quote-first pragmatique",
    navModel: "Navigation par étapes de devis",
    motionProfile: "Progression, ticks et slider avant/après",
    shapeLanguage: "Rayons 18-22px, blocs check-list",
    pageModel: "Landing devis, formules, zones, entreprises, faq",
    primaryCta: "Obtenir un devis",
    previewImage:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Page claire et rassurante pour vendre des formules, des zones couvertes et une promesse de simplicité.",
  },
  {
    slug: "restaurant-bistrot",
    href: "/restaurant-bistrot",
    name: "Restaurant Bistrot",
    sector: "Restauration",
    structure: "Hospitality éditoriale",
    archetype: "Hospitality immersive",
    navModel: "Overlay sombre et réservation latérale",
    motionProfile: "Crossfades et reveals d'ambiance",
    shapeLanguage: "Panneaux rigides, coins faibles",
    pageModel:
      "Accueil, menu, reservation, galerie, histoire, privatisation, contact",
    primaryCta: "Réserver une table",
    previewImage:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Univers d'hospitalité axé ambiance, carte, réservation et récit de lieu plutôt que simple menu.",
  },
  {
    slug: "balinjera",
    href: "/balinjera",
    name: "Balinjera",
    sector: "Restauration",
    structure: "Hospitality éditoriale",
    archetype: "Clone Elementor RTL",
    navModel: "Navigation RTL superposée + actions fixes",
    motionProfile: "Parallax léger et sections image/texte",
    shapeLanguage: "Panneaux francs, gradients bas de carte",
    pageModel: "Accueil one-page restaurateur avec footer contact",
    primaryCta: "Commander / réserver",
    previewImage: "/balinjera/hero.jpg",
    status: "En ligne",
    description:
      "Template restaurant Balinjera avec accueil immersif, pages éditoriales, version hébreu/anglais et accès direct commande/contact.",
  },
  {
    slug: "cabinet-avocat",
    href: "/cabinet-avocat",
    name: "Cabinet d'avocat",
    sector: "Juridique",
    structure: "Landing lead-gen",
    archetype: "Autorité documentaire",
    navModel: "Nav compacte + sommaire de lecture",
    motionProfile: "Underlines et transitions minimales",
    shapeLanguage: "Rayons 4-8px, blocs dossier",
    pageModel:
      "Accueil, expertises, cas-types, methode, publications, consultation",
    primaryCta: "Demander une consultation",
    previewImage:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Landing sobre et autoritaire pour convertir sur une consultation initiale avec preuve d'expertise.",
  },
  {
    slug: "avocate-tel-aviv",
    href: "/avocate-tel-aviv",
    name: "Rebecca Zarroug Avocate",
    sector: "Juridique",
    structure: "Multi-page service",
    archetype: "Cabinet chic transfrontalier",
    navModel: "Header sticky sobre + contact",
    motionProfile: "Transitions minimales",
    shapeLanguage: "Rayons 4-8px, bordures fines",
    pageModel: "Accueil, expertises, blog, contact",
    primaryCta: "Prendre contact",
    previewImage:
      "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Site alpha chic pour une avocate à Tel Aviv spécialisée en immobilier et successions France-Israël.",
  },
  {
    slug: "agence-immobiliere",
    href: "/agence-immobiliere",
    name: "Agence immobilière",
    sector: "Immobilier",
    structure: "Listings multi-page",
    archetype: "Explorateur de biens",
    navModel: "Navigation orientée recherche",
    motionProfile: "Hover cartes et interactions de filtres",
    shapeLanguage: "Rayons 16-20px, panneaux listing",
    pageModel:
      "Accueil, biens, fiche-bien, services, agents, estimation, quartiers",
    primaryCta: "Demander une estimation",
    previewImage:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
    status: "Nouveau",
    description:
      "Modèle multi-page pour biens, agents et génération de leads acquéreurs comme vendeurs.",
  },
  {
    slug: "annecyelec",
    href: "/annecyelec",
    name: "Annecy Elec",
    sector: "Électricité",
    structure: "Multi-page service",
    archetype: "Service local classique",
    navModel: "Top nav standard",
    motionProfile: "Transitions basiques",
    shapeLanguage: "Cartes arrondies et hero utilitaire",
    pageModel: "Accueil service local",
    primaryCta: "Demander un devis",
    previewImage:
      "https://images.unsplash.com/photo-1555963966-b7ae5404b6ed?auto=format&fit=crop&w=1200&q=80",
    status: "Lab",
    description:
      "Template service local centrée dépannage et installation électrique, avec positionnement rassurant.",
  },
  {
    slug: "boulangerie",
    href: "/boulangerie",
    name: "Boulangerie",
    sector: "Boulangerie",
    structure: "Commerce gourmand",
    archetype: "Commerce gourmand de proximité",
    navModel: "Nav classique à ancres",
    motionProfile: "Transitions douces",
    shapeLanguage: "Coins chaleureux et vitrines produit",
    pageModel: "Showcase commerce alimentaire",
    primaryCta: "Voir les créations",
    previewImage:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=1200&q=80",
    status: "En ligne",
    description:
      "Commerce de proximité chaleureux, rythmé par les produits, la tradition artisanale et les horaires.",
  },
  {
    slug: "fleuriste",
    href: "/fleuriste",
    name: "Fleuriste",
    sector: "Floral",
    structure: "Portfolio éditorial",
    archetype: "Portfolio floral éditorial",
    navModel: "Nav minimaliste centrée",
    motionProfile: "Reveals éditoriaux",
    shapeLanguage: "Grandes courbes et panneaux image",
    pageModel: "Accueil narratif orienté projets",
    primaryCta: "Explorer les projets",
    previewImage:
      "https://images.unsplash.com/photo-1468327768560-75b778cbb551?auto=format&fit=crop&w=1200&q=80",
    status: "En ligne",
    description:
      "Narration haut de gamme pour vendre une sensibilité visuelle plus qu'un simple catalogue produit.",
  },
  {
    slug: "ordinateur",
    href: "/ordinateur",
    name: "Ordinateur",
    sector: "Réparation tech",
    structure: "Multi-page service",
    archetype: "Réparation technique démonstrative",
    navModel: "Top nav sticky classique",
    motionProfile: "Transitions utilitaires",
    shapeLanguage: "Cards techniques et rayons moyens",
    pageModel: "Accueil service réparation",
    primaryCta: "Diagnostic gratuit",
    previewImage:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    status: "En ligne",
    description:
      "Positionnement technique, rassurant et rapide pour réparation d'ordinateurs et smartphones.",
  },
  {
    slug: "osteopathe-kor-pantin",
    href: "/osteopathe-kor-pantin",
    name: "Ostéopathe KOR Pantin",
    sector: "Santé",
    structure: "Landing lead-gen",
    archetype: "Landing santé praticien",
    navModel: "Scroll landing classique",
    motionProfile: "Animations d'apparition",
    shapeLanguage: "Arrondis premium et sections santé",
    pageModel: "Landing HTML externe",
    primaryCta: "Prendre rendez-vous",
    previewImage:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
    status: "Lab",
    description:
      "Landing santé axée praticien, motifs de consultation, FAQ et contact immédiat.",
    hardReload: true,
  },
  {
    slug: "pattiserie",
    href: "/pattiserie",
    name: "Pâtisserie",
    sector: "Pâtisserie",
    structure: "Commerce gourmand",
    archetype: "Showcase pâtisserie premium",
    navModel: "Navigation éditoriale",
    motionProfile: "Transitions gourmandes lentes",
    shapeLanguage: "Courbes premium et vitrines",
    pageModel: "Showcase commerce premium",
    primaryCta: "Découvrir la collection",
    previewImage:
      "https://images.unsplash.com/photo-1481391032119-d89fee407e44?auto=format&fit=crop&w=1200&q=80",
    status: "En ligne",
    description:
      "Showcase gourmand premium pensé pour des créations d'exception et les commandes événementielles.",
  },
  {
    slug: "ruben",
    href: "/ruben",
    name: "Ruben",
    sector: "Créateur culinaire",
    structure: "Multi-page créateur",
    archetype: "Univers créateur personnel",
    navModel: "Navigation multi-page artiste",
    motionProfile: "Transitions créatives",
    shapeLanguage: "Cards éditoriales et rayons mixtes",
    pageModel: "Accueil, créations, commande, événements, contact",
    primaryCta: "Voir les créations",
    previewImage:
      "https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&w=1200&q=80",
    status: "Lab",
    description:
      "Univers personnel et multi-page pour artisan-créateur, avec commandes et pages éditoriales dédiées.",
  },
  {
    slug: "nathreparation",
    href: "/nathreparation",
    name: "Nath Reparation",
    sector: "Réparation mobile",
    structure: "Multi-page service",
    archetype: "Clone service réparation détaillé",
    navModel: "Header classique + sticky call",
    motionProfile: "Reveals progressifs",
    shapeLanguage: "Sections longues et accents techniques",
    pageModel: "Accueil + pages services/faq/contact",
    primaryCta: "Fixer un rendez-vous",
    previewImage:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=1200&q=80",
    status: "Lab",
    description:
      "Template détaillée pour réparation smartphone avec pages services, concept, FAQ et prise de contact.",
  },
];
