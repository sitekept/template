import { alexSpaBusiness } from "./alex-spa-data";

export type AlexSpaLanguageCode = "fr" | "en" | "el" | "he";
export type AlexSpaDirection = "ltr" | "rtl";

export const alexSpaLanguages: Array<{
  code: AlexSpaLanguageCode;
  label: string;
  shortLabel: string;
  dir: AlexSpaDirection;
}> = [
  { code: "fr", label: "Francais", shortLabel: "FR", dir: "ltr" },
  { code: "en", label: "English", shortLabel: "EN", dir: "ltr" },
  { code: "el", label: "Ελληνικά", shortLabel: "EL", dir: "ltr" },
  { code: "he", label: "עברית", shortLabel: "HE", dir: "rtl" },
];

export const alexSpaTranslations = {
  fr: {
    nav: {
      services: "Soins",
      experience: "Experience",
      reviews: "Avis",
      location: "Emplacement",
      contact: "Contact",
    },
    hero: {
      title: "Alex Spa Massage a Paphos",
      subtitle:
        "Massage et bien-etre dans un espace chaleureux, situe dans Gossip Hair and Beauty Studio.",
      primaryCta: `Appeler ${alexSpaBusiness.phoneDisplay}`,
      secondaryCta: "Ouvrir Google Maps",
    },
    proof: {
      location: "Paphos, Chypre",
      inclusive: "LGBTQ+ friendly",
      womanLed: "Gere par une femme",
      hours: "Ferme a 20:00",
    },
    experience: {
      title: "Une parenthese calme, sur mesure.",
      body: "Chaque seance commence par un echange simple pour adapter la pression, le rythme et le soin a votre besoin du jour.",
      rows: [
        ["Ecoute", "Vos preferences guident le soin du debut a la fin."],
        ["Presence", "Une attention constante dans un espace calme."],
        ["Confort", "Un accueil propre, confidentiel et inclusif."],
      ],
      sideNote: "LGBTQ+ friendly · gere par une femme",
    },
    services: {
      title: "Price list Alex Spa Massage.",
      intro:
        "Les soins, durees et prix visibles sur les photos Google de la fiche Alex Spa Massage.",
      priceNote:
        "Tarifs affiches sur la price list Google. Appelez pour confirmer la disponibilite avant de venir.",
      photoSource: "Inspire des photos Google officielles",
      duration: "min",
      cta: "Reserver par telephone",
    },
    reviews: {
      title: "Avis Google",
      countLabel: "avis",
      text: "Le carousel charge les avis Google reels lorsque la cle API ou le proxy officiel est configure.",
      liveLabel: "Donnees Google connectees",
      previewLabel: "Apercu local, en attente de connexion Google",
      leaveReview: "Laisser un avis Google",
      readAll: "Lire les avis sur Google",
      source: "Source: Google Maps",
      previous: "Avis precedent",
      next: "Avis suivant",
    },
    location: {
      title: "Pres du port de Paphos.",
      text: "Alex Spa Massage se trouve a Basilica Gardens, a quelques minutes du port de Paphos et de la promenade.",
      addressTitle: "Adresse",
      hoursTitle: "Horaire",
      harbour: "Proche du port de Paphos",
      studio: "Dans Gossip Hair and Beauty Studio",
      mapsCta: "Ouvrir dans Google Maps",
      callCta: "Appeler",
    },
    cta: {
      title: "Pret a vous detendre ?",
      body: "Appelez Alex Spa Massage pour choisir un horaire et preparer votre seance.",
      route: "Voir l'itineraire",
    },
    footer: {
      managedByWoman: "Gere par une femme",
      inclusive: "LGBTQ+ friendly",
      details: "Reservation par telephone · ouvert jusqua 20:00",
    },
  },
  en: {
    nav: {
      services: "Treatments",
      experience: "Experience",
      reviews: "Reviews",
      location: "Location",
      contact: "Contact",
    },
    hero: {
      title: "Alex Spa Massage in Paphos",
      subtitle:
        "Massage and wellness in a welcoming space inside Gossip Hair and Beauty Studio.",
      primaryCta: `Call ${alexSpaBusiness.phoneDisplay}`,
      secondaryCta: "Open Google Maps",
    },
    proof: {
      location: "Paphos, Cyprus",
      inclusive: "LGBTQ+ friendly",
      womanLed: "Woman-managed",
      hours: "Closes at 20:00",
    },
    experience: {
      title: "A calm, tailored pause.",
      body: "Each session starts with a simple conversation so pressure, rhythm and treatment can match what your body needs that day.",
      rows: [
        [
          "Listening",
          "Your preferences guide the session from start to finish.",
        ],
        ["Presence", "Consistent attention in a quiet space."],
        ["Comfort", "A clean, private and inclusive welcome."],
      ],
      sideNote: "LGBTQ+ friendly · woman-managed",
    },
    services: {
      title: "Alex Spa Massage price list.",
      intro:
        "Treatments, durations and prices visible in the Google photos for Alex Spa Massage.",
      priceNote:
        "Prices shown from the Google price-list photo. Call to confirm availability before visiting.",
      photoSource: "Inspired by official Google photos",
      duration: "min",
      cta: "Book by phone",
    },
    reviews: {
      title: "Google Reviews",
      countLabel: "reviews",
      text: "The carousel loads real Google reviews when the official API key or proxy is configured.",
      liveLabel: "Google data connected",
      previewLabel: "Local preview, waiting for Google connection",
      leaveReview: "Leave a Google review",
      readAll: "Read reviews on Google",
      source: "Source: Google Maps",
      previous: "Previous review",
      next: "Next review",
    },
    location: {
      title: "Near Paphos Harbour.",
      text: "Alex Spa Massage is located at Basilica Gardens, minutes from Paphos Harbour and the promenade.",
      addressTitle: "Address",
      hoursTitle: "Hours",
      harbour: "Near Paphos Harbour",
      studio: "Inside Gossip Hair and Beauty Studio",
      mapsCta: "Open in Google Maps",
      callCta: "Call",
    },
    cta: {
      title: "Ready to relax?",
      body: "Call Alex Spa Massage to choose a time and prepare your session.",
      route: "Get directions",
    },
    footer: {
      managedByWoman: "Woman-managed",
      inclusive: "LGBTQ+ friendly",
      details: "Booking by phone · closes at 20:00",
    },
  },
  el: {
    nav: {
      services: "Υπηρεσίες",
      experience: "Εμπειρία",
      reviews: "Κριτικές",
      location: "Τοποθεσία",
      contact: "Επικοινωνία",
    },
    hero: {
      title: "Alex Spa Massage στην Πάφο",
      subtitle:
        "Μασάζ και ευεξία σε έναν φιλόξενο χώρο μέσα στο Gossip Hair and Beauty Studio.",
      primaryCta: `Καλέστε ${alexSpaBusiness.phoneDisplay}`,
      secondaryCta: "Άνοιγμα Google Maps",
    },
    proof: {
      location: "Πάφος, Κύπρος",
      inclusive: "LGBTQ+ friendly",
      womanLed: "Διαχείριση από γυναίκα",
      hours: "Κλείνει στις 20:00",
    },
    experience: {
      title: "Μια ήρεμη, προσαρμοσμένη παύση.",
      body: "Κάθε συνεδρία ξεκινά με μια απλή συζήτηση, ώστε η πίεση, ο ρυθμός και η φροντίδα να ταιριάζουν στις ανάγκες σας.",
      rows: [
        ["Ακρόαση", "Οι προτιμήσεις σας καθοδηγούν τη συνεδρία."],
        ["Παρουσία", "Σταθερή προσοχή σε έναν ήσυχο χώρο."],
        ["Άνεση", "Καθαρή, ιδιωτική και φιλόξενη εμπειρία."],
      ],
      sideNote: "LGBTQ+ friendly · διαχείριση από γυναίκα",
    },
    services: {
      title: "Τιμοκατάλογος Alex Spa Massage.",
      intro:
        "Θεραπείες, διάρκειες και τιμές που φαίνονται στις φωτογραφίες Google του Alex Spa Massage.",
      priceNote:
        "Τιμές από τη φωτογραφία του τιμοκαταλόγου Google. Καλέστε για επιβεβαίωση διαθεσιμότητας.",
      photoSource: "Με βάση τις επίσημες φωτογραφίες Google",
      duration: "λεπτά",
      cta: "Κράτηση τηλεφωνικά",
    },
    reviews: {
      title: "Κριτικές Google",
      countLabel: "κριτικές",
      text: "Το καρουζέλ φορτώνει πραγματικές κριτικές Google όταν ρυθμιστεί το επίσημο API ή proxy.",
      liveLabel: "Συνδεδεμένα δεδομένα Google",
      previewLabel: "Τοπική προεπισκόπηση, αναμονή σύνδεσης Google",
      leaveReview: "Αφήστε κριτική στο Google",
      readAll: "Διαβάστε κριτικές στο Google",
      source: "Πηγή: Google Maps",
      previous: "Προηγούμενη κριτική",
      next: "Επόμενη κριτική",
    },
    location: {
      title: "Κοντά στο λιμάνι της Πάφου.",
      text: "Το Alex Spa Massage βρίσκεται στα Basilica Gardens, λίγα λεπτά από το λιμάνι και τον παραλιακό δρόμο της Πάφου.",
      addressTitle: "Διεύθυνση",
      hoursTitle: "Ώρες",
      harbour: "Κοντά στο λιμάνι της Πάφου",
      studio: "Μέσα στο Gossip Hair and Beauty Studio",
      mapsCta: "Άνοιγμα στο Google Maps",
      callCta: "Καλέστε",
    },
    cta: {
      title: "Έτοιμοι να χαλαρώσετε;",
      body: "Καλέστε το Alex Spa Massage για να επιλέξετε ώρα και να προετοιμάσετε τη συνεδρία σας.",
      route: "Δείτε διαδρομή",
    },
    footer: {
      managedByWoman: "Διαχείριση από γυναίκα",
      inclusive: "LGBTQ+ friendly",
      details: "Κράτηση τηλεφωνικά · κλείνει στις 20:00",
    },
  },
  he: {
    nav: {
      services: "שירותים",
      experience: "חוויה",
      reviews: "ביקורות",
      location: "מיקום",
      contact: "יצירת קשר",
    },
    hero: {
      title: "Alex Spa Massage בפאפוס",
      subtitle:
        "עיסוי וטיפולי רווחה במקום נעים בתוך Gossip Hair and Beauty Studio.",
      primaryCta: `התקשרו ${alexSpaBusiness.phoneDisplay}`,
      secondaryCta: "פתיחה ב-Google Maps",
    },
    proof: {
      location: "פאפוס, קפריסין",
      inclusive: "ידידותי ל-LGBTQ+",
      womanLed: "מנוהל על ידי אישה",
      hours: "נסגר ב-20:00",
    },
    experience: {
      title: "הפוגה רגועה ומותאמת אישית.",
      body: "כל טיפול מתחיל בשיחה קצרה כדי להתאים את הלחץ, הקצב והטיפול לצורך של הגוף באותו יום.",
      rows: [
        ["הקשבה", "ההעדפות שלכם מובילות את הטיפול מההתחלה ועד הסוף."],
        ["נוכחות", "תשומת לב עקבית במרחב שקט."],
        ["נוחות", "קבלת פנים נקייה, פרטית ומכילה."],
      ],
      sideNote: "ידידותי ל-LGBTQ+ · מנוהל על ידי אישה",
    },
    services: {
      title: "מחירון Alex Spa Massage.",
      intro:
        "טיפולים, משכים ומחירים שמופיעים בתמונות Google של Alex Spa Massage.",
      priceNote:
        "מחירים לפי תמונת המחירון ב-Google. מומלץ להתקשר כדי לאשר זמינות לפני ההגעה.",
      photoSource: "בהשראת תמונות Google הרשמיות",
      duration: "דקות",
      cta: "הזמנה בטלפון",
    },
    reviews: {
      title: "ביקורות Google",
      countLabel: "ביקורות",
      text: "הקרוסלה טוענת ביקורות Google אמיתיות כאשר מוגדר API רשמי או proxy.",
      liveLabel: "נתוני Google מחוברים",
      previewLabel: "תצוגה מקומית, ממתין לחיבור Google",
      leaveReview: "השארת ביקורת בגוגל",
      readAll: "קריאת ביקורות בגוגל",
      source: "מקור: Google Maps",
      previous: "ביקורת קודמת",
      next: "ביקורת הבאה",
    },
    location: {
      title: "קרוב לנמל פאפוס.",
      text: "Alex Spa Massage נמצא ב-Basilica Gardens, כמה דקות מנמל פאפוס ומהטיילת.",
      addressTitle: "כתובת",
      hoursTitle: "שעות",
      harbour: "קרוב לנמל פאפוס",
      studio: "בתוך Gossip Hair and Beauty Studio",
      mapsCta: "פתיחה ב-Google Maps",
      callCta: "התקשרו",
    },
    cta: {
      title: "מוכנים להירגע?",
      body: "התקשרו ל-Alex Spa Massage כדי לבחור שעה ולהכין את הטיפול שלכם.",
      route: "מסלול הגעה",
    },
    footer: {
      managedByWoman: "מנוהל על ידי אישה",
      inclusive: "ידידותי ל-LGBTQ+",
      details: "הזמנה בטלפון · נסגר ב-20:00",
    },
  },
} as const;

export function getAlexSpaDirection(
  language: AlexSpaLanguageCode
): AlexSpaDirection {
  return (
    alexSpaLanguages.find((candidate) => candidate.code === language)?.dir ??
    "ltr"
  );
}
