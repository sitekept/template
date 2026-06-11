export type DoubleEspressoMenuItem = {
  id: number;
  name: string;
  description: string;
  price: number;
};

export type DoubleEspressoMenuSection = {
  id: string;
  title: string;
  note: string;
  icon: string;
  items: readonly DoubleEspressoMenuItem[];
};

export type DoubleEspressoLocation = {
  id: string;
  name: string;
  address: string;
  phone: string;
  phoneHref: string;
  secondaryPhone?: string;
  secondaryPhoneHref?: string;
  hours: string;
  coordinates: {
    latitude: number;
    longitude: number;
  };
  mapsUrl: string;
  embedUrl: string;
  image: string;
  note: string;
};

export const doubleEspressoGallery = [
  {
    src: "/double-espresso/gallery/google-01.jpg",
    alt: "Double Espresso cafe photo 01",
    caption: "Storefront",
  },
  {
    src: "/double-espresso/gallery/google-02.jpg",
    alt: "Double Espresso cafe photo 02",
    caption: "Pasta plate",
  },
  {
    src: "/double-espresso/gallery/google-03.jpg",
    alt: "Double Espresso cafe photo 03",
    caption: "Schnitzel plate",
  },
  {
    src: "/double-espresso/gallery/google-04.jpg",
    alt: "Double Espresso cafe photo 04",
    caption: "Fresh sandwiches",
  },
  {
    src: "/double-espresso/gallery/google-07.jpg",
    alt: "Double Espresso cafe photo 07",
    caption: "Evening exterior",
  },
  {
    src: "/double-espresso/gallery/google-08.jpg",
    alt: "Double Espresso cafe photo 08",
    caption: "Terrace tables",
  },
  {
    src: "/double-espresso/gallery/google-09.jpg",
    alt: "Double Espresso cafe photo 09",
    caption: "House products",
  },
  {
    src: "/double-espresso/gallery/google-10.jpg",
    alt: "Double Espresso cafe photo 10",
    caption: "Pastry case",
  },
  {
    src: "/double-espresso/gallery/google-11.jpg",
    alt: "Double Espresso cafe photo 11",
    caption: "Street counter",
  },
  {
    src: "/double-espresso/gallery/google-12.jpg",
    alt: "Double Espresso cafe photo 12",
    caption: "Dining room",
  },
  {
    src: "/double-espresso/gallery/google-13.jpg",
    alt: "Double Espresso cafe photo 13",
    caption: "Lunch plate",
  },
  {
    src: "/double-espresso/gallery/google-14.jpg",
    alt: "Double Espresso cafe photo 14",
    caption: "Croissant sandwich",
  },
  {
    src: "/double-espresso/gallery/google-15.jpg",
    alt: "Double Espresso cafe photo 15",
    caption: "Counter snacks",
  },
  {
    src: "/double-espresso/gallery/google-16.jpg",
    alt: "Double Espresso cafe photo 16",
    caption: "Boulevard table",
  },
  {
    src: "/double-espresso/gallery/google-17.jpg",
    alt: "Double Espresso cafe photo 17",
    caption: "Pasta close-up",
  },
  {
    src: "/double-espresso/gallery/google-18.jpg",
    alt: "Double Espresso cafe photo 18",
    caption: "Toast plate",
  },
  {
    src: "/double-espresso/gallery/google-19.jpg",
    alt: "Double Espresso cafe photo 19",
    caption: "Cafe counter",
  },
  {
    src: "/double-espresso/gallery/google-20.jpg",
    alt: "Double Espresso cafe photo 20",
    caption: "Breakfast table",
  },
  {
    src: "/double-espresso/gallery/google-21.jpg",
    alt: "Double Espresso cafe photo 21",
    caption: "Salad bar",
  },
  {
    src: "/double-espresso/gallery/google-22.jpg",
    alt: "Double Espresso cafe photo 22",
    caption: "Green drink",
  },
  {
    src: "/double-espresso/gallery/google-23.jpg",
    alt: "Double Espresso cafe photo 23",
    caption: "Coffee and sandwich",
  },
  {
    src: "/double-espresso/gallery/google-24.jpg",
    alt: "Double Espresso cafe photo 24",
    caption: "Service counter",
  },
  {
    src: "/double-espresso/gallery/google-25.jpg",
    alt: "Double Espresso cafe photo 25",
    caption: "Dessert",
  },
  {
    src: "/double-espresso/gallery/google-26.jpg",
    alt: "Double Espresso cafe photo 26",
    caption: "Chopped salad",
  },
] as const;

export const doubleEspressoLocations = [
  {
    id: "jerusalem-blvd",
    name: "Double Espresso Jerusalem Boulevard",
    address: "Jerusalem Blvd 77, Tel Aviv-Yafo",
    phone: "03-600-7265",
    phoneHref: "tel:+97236007265",
    hours: "Daily 04:00-23:00",
    coordinates: {
      latitude: 32.0481264,
      longitude: 34.7588792,
    },
    mapsUrl:
      "https://www.google.com/maps/place/Double+Espresso/@32.0481264,34.7563043,17z/data=!3m1!4b1!4m6!3m5!1s0x151d4cba3e072ec9:0x988e09ab6d19cb33!8m2!3d32.0481264!4d34.7588792!16s%2Fg%2F11cn951r8l?entry=ttu",
    embedUrl:
      "https://www.google.com/maps?q=32.0481264,34.7588792&z=16&output=embed",
    image: "/double-espresso/gallery/google-01.jpg",
    note: "Same full Double Espresso menu with boulevard seating and quick coffee stops.",
  },
  {
    id: "yehuda-hayamit",
    name: "Double Espresso Yehuda HaYamit",
    address: "Yehuda HaYamit 13, Tel Aviv-Yafo",
    phone: "03-600-6275",
    phoneHref: "tel:+97236006275",
    secondaryPhone: "03-600-7265",
    secondaryPhoneHref: "tel:+97236007265",
    hours: "Daily 06:00-23:00",
    coordinates: {
      latitude: 32.0494479,
      longitude: 34.7585429,
    },
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=32.0494479,34.7585429",
    embedUrl:
      "https://www.google.com/maps?q=32.0494479,34.7585429&z=16&output=embed",
    image: "/double-espresso/gallery/google-08.jpg",
    note: "Same menu at the second Jaffa cafe, close to the college and old-city walks.",
  },
] as const satisfies readonly DoubleEspressoLocation[];

export const doubleEspressoMenu = [
  {
    id: "10960088",
    title: "ספיישלים",
    note: "",
    icon: "/double-espresso/menu-icons/specials.png",
    items: [
      {
        id: 10960090,
        name: "סיאדיה",
        description:
          "פירות ים מוקפצים עם בצל, שום, צ'יילי, אורז צהוב וסלט קצוץ",
        price: 55,
      },
      {
        id: 10960091,
        name: "עוף אסיאתי",
        description:
          "רצועות עוף מוקפצת בפלפלים בצבעים, בצל סגול, גזר, פטריות בתיבול אסייתי ותוספת אורז לבן",
        price: 49,
      },
      {
        id: 10960093,
        name: "עוף בטריאקי",
        description: "פילה עוף ברוטב טריאקי מתוק בליווי אורז ופירות יבשים",
        price: 49,
      },
      {
        id: 10960095,
        name: "צ'יקן אלפרדו",
        description: "פילה עוף ברוטב שמנת פטריות, בליווי אורז ופירות יבשים",
        price: 49,
      },
      {
        id: 10960096,
        name: "טורטייה צ'יקן",
        description:
          "נתחי פילה עוף בפפריקה מעושנת, אילוי, בצל סגול, עגבניה, חסה וגמבה בליווי צ'יפס / סלט ירוק",
        price: 41,
      },
      {
        id: 10960100,
        name: "טורטייה רוסטביף",
        description:
          "פרוסות דקות צרובות על הגריל עם בצל מאודה, איולי, עגבניה וחסה בליווי צ'יפס / סלט ירוק",
        price: 44,
      },
      {
        id: 10960123,
        name: "טורטייה סלמון",
        description: "גבינת שמנת עם בצל סגול עגבניה וחסה בליווי סלט",
        price: 41,
      },
      {
        id: 10960125,
        name: "המבורגר",
        description:
          "אלף האיים, טבעות בצל, עגבניה ומלפפון חמוץ, מוגש עם צ'יפס בצד",
        price: 47,
      },
      {
        id: 10960126,
        name: "מיקס פירות ים תאילנדי",
        description:
          "מיקס פירות ים מופצים בפלפלים בצבעים, בצל סגול, גזר, פטריות בתיבול אסייתי ותוספת אורז לבן",
        price: 55,
      },
      {
        id: 10960127,
        name: "לחם הבית",
        description:
          "ג'בטה דגנים / לבן, מוגשת עם 3 תוספות: לבנה / שמנת, זעתר עם שמן זית וזיתים",
        price: 18,
      },
      {
        id: 10960128,
        name: "לחם שום",
        description: "",
        price: 12,
      },
    ],
  },
  {
    id: "10960135",
    title: "טוסטים",
    note: "",
    icon: "/double-espresso/menu-icons/toast.png",
    items: [
      {
        id: 10960137,
        name: "טוסט דאבל אספרסו",
        description: "פסטו, ממרח עגבניות מיובשות, זיתים וגבינה צהובה",
        price: 39,
      },
      {
        id: 10960138,
        name: "טוסט יווני",
        description: "פסטו, רוטב עגבניות, גבינה בולגרית וגבינה צהובה",
        price: 41,
      },
      {
        id: 10960141,
        name: "טוסט אלפרדו",
        description: "פסטו, גבינה צהובה, בטטה, בולגרית ורקוטב שמנת פטריות",
        price: 47,
      },
      {
        id: 10960178,
        name: "טוסט אנטיפסטי",
        description: "פסטו, פטה צאו, בטטה, פלפל קלוי וגבינה צהובה",
        price: 43,
      },
      {
        id: 10960213,
        name: "טוסט טונה",
        description: "סלט טונה, עגבניה, ביצה קשה וגבינה צהובה",
        price: 43,
      },
    ],
  },
  {
    id: "10960248",
    title: "מנות ילדים",
    note: "",
    icon: "/double-espresso/menu-icons/kids.png",
    items: [
      {
        id: 10960250,
        name: "שניצלונים וצ'יפס",
        description: "",
        price: 32,
      },
      {
        id: 10960280,
        name: "פסטה פנה",
        description: "ברוטב עגבניות / שמנת",
        price: 28,
      },
    ],
  },
  {
    id: "10960320",
    title: "כריכים",
    note: "",
    icon: "/double-espresso/menu-icons/toast.png",
    items: [
      {
        id: 10960335,
        name: "כריך חביתה",
        description: "חביתה משתי ביצים, איולי, עגבניה, מלפפון חמוץ וחסה",
        price: 35,
      },
      {
        id: 10960340,
        name: "כריך בגדדי",
        description:
          "חציל קלוי, ביצה קשה פרוסה, פטרוזיליה, עגבניה, מלפפון חמוץ וטחינה",
        price: 36,
      },
      {
        id: 10960344,
        name: "כריך בלקני",
        description: "פסטו, גבינת פטה, חצילים קלויים, פלפלים קלויים וחסה",
        price: 37,
      },
      {
        id: 10960350,
        name: "כריף בולגרי",
        description: "פסטו, גבינה בולגרית, בטטה, עגבניות וחסה",
        price: 36,
      },
      {
        id: 10960920,
        name: "כריך אבוקדו",
        description: "אבוקדו, ביצה קשה פרוסה, עגבניה, מלפפון חמוץ וחסה",
        price: 37,
      },
      {
        id: 10960942,
        name: "כריך טונה",
        description: "סלט טונה עם רוטב שקשוקה, ביצה קשה פרוסה וחסה",
        price: 38,
      },
      {
        id: 10960944,
        name: "כריך חלומי",
        description: "ממרח שמנת, פרוסות חלומי, עגבניה, מלפפון חמוץ וחסה",
        price: 43,
      },
      {
        id: 10960992,
        name: "כריך עוף קטאלוני",
        description:
          "נתחי פילה עוף בפפריקה מעושנת, איולי, בצל סגול, עגבניה וחסה",
        price: 42,
      },
      {
        id: 10960993,
        name: "כריך רוסטביף",
        description:
          "פרוסות דקות צרובות על בגריל עם בצל מאודה, איול, עגבניה וחסה",
        price: 46,
      },
      {
        id: 10960994,
        name: "כריך סלמון",
        description: "גבינת שמנת עם בצל סגול, עגבניה וחסה",
        price: 46,
      },
    ],
  },
  {
    id: "10960996",
    title: "סלטים",
    note: "",
    icon: "/double-espresso/menu-icons/salad.png",
    items: [
      {
        id: 10960999,
        name: "סלט בנדורא'ס",
        description:
          "חסה, עגבניות שרי, עגבניות מיובשות, גבינת צאן מגורדת ברוטב שמןזית ולימון",
        price: 38,
      },
      {
        id: 10961000,
        name: "סלט לבנוני",
        description:
          "עגבניה, מלפפון ועשבים קצוצים עם בורגול גס, טחינה משובחת וגרגירי חומוס",
        price: 39,
      },
      {
        id: 10961002,
        name: "סלט טבולה",
        description: "פטרוזיליה, בורגול גס ועגבניות קצוצות מעל",
        price: 32,
      },
      {
        id: 10961010,
        name: "סלט הדייגים",
        description:
          "מיקס פירות ים צרובים על סלט חסה ועלים צעירים, עגבניות שרי, צנוניות וגבינה בולגרית משובחת מגורדת",
        price: 49,
      },
      {
        id: 10961031,
        name: "סלט יווני",
        description:
          "חסה, עגבניה, מלפפון, עדבי תיבול, בצל סגול, זיתי קלמטה, קוביות גבינה בולגרית, בתיבול שמן זית ולימון",
        price: 39,
      },
      {
        id: 10961051,
        name: "סלט טונה",
        description:
          "חסה, עגבניה, מלפפון, סצל סגול, ביצה קשה, בתיבול שמן זית ולימון",
        price: 41,
      },
      {
        id: 10961142,
        name: "סלט עוף",
        description:
          "חסות ועלים צעירים עם סלק צלוי, בטטות, בצל סגול, עגבניות שרי, עוף מוקפץ עם פטריות, בצל וגבינת פטה ברוטב ויניגרט הדרים",
        price: 53,
      },
      {
        id: 10961143,
        name: "סלט שניצל",
        description:
          "חסה\\ מלפפון, עגבניה, תירס, זיתים ירוקים, בצל ושניצל מטוגן",
        price: 53,
      },
      {
        id: 10961145,
        name: "סלט ערבי יפואי",
        description:
          "עגבניה, מלפפון, בצל סגול, עשבי תיבול ברוטב שמן זית ולימון",
        price: 29,
      },
      {
        id: 10961147,
        name: "סלט חלומי",
        description:
          "חסות רעננות ועלים צעירים, עגניות שרי, בצל סגול וקוביות חלומי צרובות ברוטב ויניגרט הדרים",
        price: 51,
      },
      {
        id: 10961278,
        name: "סלט קיסר עוף",
        description:
          "חסה, עגבניות שרי, בצל, קרוטונים, פרמז'ן, רוטב קיסר, רצועות עוף מוקפצות",
        price: 52,
      },
      {
        id: 10961283,
        name: "סלט קיסר פירות ים",
        description:
          "חסה, עגבניות שרי, בצל, קרוטונים, פרמז'ן, רוטב קיסר, מיקס פירות ים מוקפצים",
        price: 55,
      },
    ],
  },
  {
    id: "10961319",
    title: "פסטה",
    note: "",
    icon: "/double-espresso/menu-icons/pasta.png",
    items: [
      {
        id: 10961324,
        name: "טריפוליני רוזה",
        description:
          "פסטה ארוכה ומשוננת ברוטב עגבניות, מעט שמנת, עגבניות מיובשות, בזיליקום ופרמז'ן מגורד",
        price: 39,
      },
      {
        id: 10961328,
        name: "פסטה אווז מעושן",
        description:
          "פסטה עבה וארוכה ברוטב שמנת, חזה אווז מעושן, בצל סגול, עגבניות שרי, עשבי תיבול ופרמז'ן מגורד",
        price: 55,
      },
      {
        id: 10961332,
        name: "פסטה עוף",
        description:
          "פסטה פנה עם רצועות עוף ברוטב שמנת, בצל סגול, עגבניות מיובשות, עגבניות שרי, בזיליקום ופרמז'ן מגורד",
        price: 49,
      },
      {
        id: 10961348,
        name: "פפרדלה גבינת עיזים",
        description: "פסטה עבה ארוכה ברוטב שמנת, גבינת עיזים וקוביות בטטה",
        price: 49,
      },
      {
        id: 10961349,
        name: "ניוקי בקרם פורטובלו",
        description: "כופתאות תפוחי אדמה עם קרם פורטובלו ופרמז'ן מגורד",
        price: 49,
      },
      {
        id: 10961350,
        name: "פסטה פירות ים",
        description:
          "פסטה עבה וארוכה עם מיקס פירות ים ברוטב חמאה ושום, עגבניות שרי צלויות, פלפל צ'ילי ועשבי תיבול",
        price: 55,
      },
      {
        id: 10961351,
        name: "ניוקי פירות ים",
        description: "כופתאות תפוחי רדמה עם מיקס פירות ים ברוטב שמנת פטריות",
        price: 55,
      },
      {
        id: 10961353,
        name: "רביולי בטטה",
        description: "פסטה ממולאת בטטה מוגשת עם רוטב לבחירה",
        price: 46,
      },
      {
        id: 10961354,
        name: "רביולי ארבע גבינות",
        description: "פסטה ממולאת ארבעה סוגי גבינות מוגשת עם רוטב לבחירה",
        price: 46,
      },
      {
        id: 10961355,
        name: "פסטה פנה",
        description: "ברוטב שמנת פטריות",
        price: 49,
      },
    ],
  },
  {
    id: "10961358",
    title: "קינוחים",
    note: "",
    icon: "/double-espresso/menu-icons/dessert.png",
    items: [
      {
        id: 10961360,
        name: "סופלה שוקולד",
        description: "",
        price: 36,
      },
      {
        id: 10961364,
        name: "פאדג' שוקולד חמה",
        description: "",
        price: 36,
      },
      {
        id: 10961366,
        name: "עוגת טופי",
        description: "",
        price: 36,
      },
      {
        id: 10961368,
        name: "פאי שוקולד",
        description: "",
        price: 36,
      },
      {
        id: 10961369,
        name: "קינדר בואנו",
        description: "",
        price: 31,
      },
      {
        id: 10961370,
        name: "וופל בלגי",
        description: "",
        price: 41,
      },
      {
        id: 10961372,
        name: "דאבל ברולה",
        description: "",
        price: 35,
      },
      {
        id: 10961375,
        name: "עוגת גבינה פירורים",
        description: "",
        price: 31,
      },
      {
        id: 10961377,
        name: "פאי תפוחי עץ",
        description: "",
        price: 36,
      },
      {
        id: 10961379,
        name: "מלבי פירות יער",
        description: "",
        price: 15,
      },
      {
        id: 10961383,
        name: "כדור גלידה",
        description: "",
        price: 9,
      },
      {
        id: 10961384,
        name: "כדור שוקולד",
        description: "",
        price: 3,
      },
      {
        id: 10961385,
        name: "אלפחורס",
        description: "",
        price: 7,
      },
      {
        id: 10961394,
        name: "אפרופו - פיסטוק ודבש",
        description: "",
        price: 5,
      },
      {
        id: 10961395,
        name: "מעמול תמרים",
        description: "",
        price: 4,
      },
      {
        id: 10961396,
        name: "רוגעלך לוקום",
        description: "",
        price: 3,
      },
      {
        id: 10961397,
        name: "עוגיית ריבה",
        description: "",
        price: 4,
      },
      {
        id: 10961398,
        name: "עוגיית שקדים ג'ינג'ר",
        description: "",
        price: 2,
      },
      {
        id: 10961399,
        name: "עוגיית חמאה",
        description: "",
        price: 2,
      },
      {
        id: 10961431,
        name: "עוגיינת טחינה",
        description: "",
        price: 5,
      },
    ],
  },
  {
    id: "10961463",
    title: "קפה ומאפה",
    note: "",
    icon: "/double-espresso/menu-icons/pastry.png",
    items: [
      {
        id: 10961471,
        name: "מבצע מאפה וקפה גדול",
        description: "",
        price: 21,
      },
      {
        id: 10961474,
        name: "מבצע מאפה וקפה קטן",
        description: "",
        price: 19,
      },
      {
        id: 10961476,
        name: "מבחר מאפי דאבל אספרסו",
        description: "",
        price: 14,
      },
      {
        id: 10961478,
        name: "מאפה קטן",
        description: "",
        price: 4,
      },
    ],
  },
  {
    id: "10961480",
    title: "משקאות חמים",
    note: "",
    icon: "/double-espresso/menu-icons/drinks.png",
    items: [
      {
        id: 10961483,
        name: "אספרסו קצר",
        description: "",
        price: 8,
      },
      {
        id: 10961484,
        name: "אספרסו ארוך",
        description: "",
        price: 8,
      },
      {
        id: 10961485,
        name: "אספרסו כפול",
        description: "",
        price: 10,
      },
      {
        id: 10961486,
        name: "אספרסו כפול ארוך",
        description: "",
        price: 10,
      },
      {
        id: 10961487,
        name: "מקיאטו קצר",
        description: "",
        price: 9,
      },
      {
        id: 10961488,
        name: "מקיאטו ארוך",
        description: "",
        price: 9,
      },
      {
        id: 10961489,
        name: "מקיאטו כפול",
        description: "",
        price: 11,
      },
      {
        id: 10961491,
        name: "מקיאטו כפול ארוך",
        description: "",
        price: 11,
      },
      {
        id: 10961492,
        name: "הפוך קטן",
        description: "",
        price: 9,
      },
      {
        id: 10961493,
        name: "הפוך גדול",
        description: "",
        price: 11,
      },
      {
        id: 10961494,
        name: "אמריקנו",
        description: "",
        price: 11,
      },
      {
        id: 10961495,
        name: "אפוגטו",
        description: "אספרסו כפול עם כדור גלידה וניל",
        price: 17,
      },
      {
        id: 10961496,
        name: "נס קפה",
        description: "",
        price: 12,
      },
      {
        id: 10961498,
        name: "נס על חלב",
        description: "",
        price: 14,
      },
      {
        id: 10961499,
        name: "קפה שחור",
        description: "",
        price: 10,
      },
      {
        id: 10961500,
        name: "קפה מוקה",
        description: "",
        price: 16,
      },
      {
        id: 10961502,
        name: "שוקו חם אבקה",
        description: "",
        price: 10,
      },
      {
        id: 10961503,
        name: "שוקו חם פרלינים",
        description: "",
        price: 18,
      },
      {
        id: 10961504,
        name: "שוקולטה עם קצפת",
        description: "",
        price: 19,
      },
      {
        id: 10961506,
        name: "תה",
        description: "",
        price: 10,
      },
      {
        id: 10961507,
        name: "תה בטעמים",
        description: "",
        price: 12,
      },
      {
        id: 10961508,
        name: "חליטות",
        description: "שאל את הטלפן",
        price: 18,
      },
      {
        id: 10961510,
        name: "סיידר חם עם קוביות תפוח ומקל קינמון",
        description: "",
        price: 19,
      },
      {
        id: 10961512,
        name: "צ'אי לאטה",
        description: "",
        price: 16,
      },
      {
        id: 10961515,
        name: "סחלב",
        description: "קינמון, קוקוס, בוטנים",
        price: 19,
      },
      {
        id: 10961519,
        name: "משקה ילדים - שוקו קר עם קצפת וסוגריות צבעוניות",
        description: "",
        price: 16,
      },
      {
        id: 10961521,
        name: "משקה ילדים - שוקו חם עם קצפת וסוגריות צבעוניות",
        description: "",
        price: 16,
      },
    ],
  },
  {
    id: "10961524",
    title: "משקאות קרים",
    note: "",
    icon: "/double-espresso/menu-icons/drinks.png",
    items: [
      {
        id: 10961529,
        name: "בקבוק קוקה קולה זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961533,
        name: "בקבוק קוקה קולה זירו זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961535,
        name: "בקבוק ספרייט זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961536,
        name: "בקבוק ספרייט זירו זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961539,
        name: "בקבוק דיאט ספרייט זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961540,
        name: "בקבוק פאנטה זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961542,
        name: "בקבוק ענבים זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961543,
        name: "בקבוק אשכוליות זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961544,
        name: "בקבוק נסטי זכוכית",
        description: "",
        price: 12,
      },
      {
        id: 10961545,
        name: "בקבוק מים",
        description: "",
        price: 10,
      },
      {
        id: 10961548,
        name: "בקבוק סודה",
        description: "",
        price: 10,
      },
      {
        id: 10961549,
        name: "מיץ תפוזים סחוט טבעי",
        description: "",
        price: 14,
      },
      {
        id: 10961551,
        name: "מיץ גזר סחוט טבעי",
        description: "",
        price: 14,
      },
      {
        id: 10961552,
        name: "מיץ לימונדה סחוט טבעי",
        description: "",
        price: 14,
      },
      {
        id: 10961553,
        name: "לימונענע גרוס",
        description: "",
        price: 17,
      },
      {
        id: 10961554,
        name: "אייס קפה",
        description: "",
        price: 16,
      },
      {
        id: 10961555,
        name: "אייס קפה עם קצפת",
        description: "",
        price: 19,
      },
      {
        id: 10961557,
        name: "מילקשייק שוקו",
        description: "",
        price: 21,
      },
      {
        id: 10961559,
        name: "מילקשייק וניל",
        description: "",
        price: 21,
      },
      {
        id: 10961561,
        name: "מילקשייק מנגו",
        description: "",
        price: 21,
      },
      {
        id: 10961563,
        name: "מילקשייק פירות יער",
        description: "",
        price: 21,
      },
      {
        id: 10961565,
        name: "קפה קר",
        description: "",
        price: 14,
      },
      {
        id: 10961567,
        name: "אמריקנו קר",
        description: "",
        price: 14,
      },
      {
        id: 10961569,
        name: "שוקו קר",
        description: "",
        price: 14,
      },
    ],
  },
] satisfies readonly DoubleEspressoMenuSection[];

export const doubleEspressoMenuStats = {
  sectionCount: 10,
  itemCount: 125,
  source: "Mishlohim public menu snapshot",
} as const;

const doubleEspressoFeaturedMenuIds = new Set([
  10960137, 10960944, 10961147, 10961350, 10961360, 10961554,
]);

export const doubleEspressoFeaturedMenuItems = doubleEspressoMenu
  .flatMap((section) =>
    section.items.map((item) => ({
      ...item,
      section: section.title,
    }))
  )
  .filter((item) => doubleEspressoFeaturedMenuIds.has(item.id));
