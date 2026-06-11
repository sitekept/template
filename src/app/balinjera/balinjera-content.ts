export type BalinjeraLang = "he" | "en";

export type BalinjeraPageKey = "home" | "about" | "events" | "blog";

export type BalinjeraBlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  body: readonly string[];
};

export const BALINJERA_ORDER_HREF =
  "https://wolt.com/he/isr/tel-aviv/restaurant/balinjera";

export const languageLabels: Record<
  BalinjeraLang,
  { current: string; switchTo: string; switchLabel: string; dir: "rtl" | "ltr" }
> = {
  he: {
    current: "עברית",
    switchTo: "EN",
    switchLabel: "Switch to English",
    dir: "rtl",
  },
  en: {
    current: "English",
    switchTo: "עברית",
    switchLabel: "החלפה לעברית",
    dir: "ltr",
  },
};

export function resolveLang(value?: string | string[]): BalinjeraLang {
  const raw = Array.isArray(value) ? value[0] : value;

  return raw === "en" ? "en" : "he";
}

export function hrefWithLang(href: string, lang: BalinjeraLang) {
  const [basePath, hash] = href.split("#");
  const path = basePath || "/balinjera";
  const separator = path.includes("?") ? "&" : "?";

  return `${path}${separator}lang=${lang}${hash ? `#${hash}` : ""}`;
}

export const balinjeraCopy = {
  he: {
    navLabel: "תפריט ראשי",
    menuLabel: "פתיחת תפריט",
    orderLabel: "הזמינו",
    contactLabel: "צרו קשר",
    menuCta: "תפריט",
    moreInfo: "מידע נוסף",
    orderWolt: "הזמינו דרך Wolt",
    readyTitle: ["מוכנים לאכול?", "הזמינו שולחן עכשיו!"],
    madeBy: "Made By Shushan Studio",
    footerTagline: "מסעדת באלינג׳רה,\nמטבח אתיופי מסורתי",
    footerColumns: [
      {
        title: "כתובת",
        lines: ["מל״ן 4 / הכובשים 39", "תל אביב"],
      },
      {
        title: "שמרו על קשר",
        lines: ["03-525-2527", "fantaprada25@gmail.com", "הצהרת נגישות"],
      },
      {
        title: "שעות פתיחה",
        lines: ["ראשון-חמישי", "12:00-20:00", "שישי", "11:00-15:00"],
      },
    ],
    follow: "עקבו אחרינו",
    quick: {
      accessibility: "אפשרויות נגישות",
      actions: "פעולות מהירות",
      wolt: "הזמנה ב-Wolt",
      whatsapp: "WhatsApp",
    },
    nav: [
      { key: "home", label: "ראשי", href: "/balinjera" },
      { key: "about", label: "אודותינו", href: "/balinjera/about" },
      { key: "menu", label: "תפריט", href: "/balinjera#menu" },
      { key: "events", label: "אירועים", href: "/balinjera/events" },
      { key: "blog", label: "בלוג", href: "/balinjera/blog" },
      { key: "order", label: "הזמינו", href: BALINJERA_ORDER_HREF },
    ],
    hero: {
      eyebrow: "ביסטרו אתיופי כשר בכרם התימנים",
      title: "מסעדת באלינג׳רה,\nמטבח אתיופי\nמסורתי",
      body: "אנו מציעים חוויה אתיופית אמיתית. תוכלו למצוא אצלנו את המנות האתיופיות המוכרות כמו אינג׳רה לצד מנות שטרם יצא לכם להכיר. התפריט של ״באלינג׳רה״ מבוסס על חומרי גלם טריים בריאים וטבעיים עם תיבול אתיופי ייחודי שמתאים גם לחיך הישראלי.",
    },
    intro: {
      title: "מסעדה אתיופית כשרה בכרם התימנים",
      body: "קשה להסביר במילים את מה שאנחנו מציעים בבאלינג׳רה, אבל אם כבר הבנתם מהשם של המקום, אז כן, אנחנו מכינים אוכל אתיופי מסורתי, בריא, טעים ובעיקר עם מלא מלא צבע! זה בסדר לא נעלבנו אם תגידו לנו שזו הפעם הראשונה שאתם מגיעים אלינו, רק לפני כמה שנים החלטנו להרים את הכפפה או יותר נכון את הסירים ולחשוף לכולם את הטעמים והריחות של מסורת אתיופית/יהודית ארוכת שנים. ואם כבר אתיופי אז אין כמו אינג׳רה טרייה שאנחנו מכינים יום יום (ללא גלוטן). אתם מוזמנים להגיע לטעום ולחוות חוויה יוצאת דופן שכמוה עוד לא חוויתם, אחר כך כבר תחזרו לבד.",
    },
    featureCards: [
      {
        title: "אירועים",
        description:
          "אתם מוזמנים להגיע לטעום ולחוות חוויה יוצאת דופן שכמוה עוד לא חוויתם, אחר כך כבר תחזרו לבד.",
        href: "/balinjera/events",
        media: "event",
      },
      {
        title: "מסעדה",
        description:
          "ביסטרו קליל וצעיר בפאתי שוק הכרמל המשמש כאכסניה חמה למטבח האתיופי.",
        href: "/balinjera/about",
        media: "restaurant",
      },
      {
        title: "מוצרים מאתיופיה",
        description:
          "אנחנו מכינים אוכל אתיופי מסורתי, בריא, טעים ובעיקר עם מלא מלא צבע!",
        media: "products",
      },
    ],
    name: {
      title: "איך בא לי אינג׳ירה",
      body: "משמעות השם של המקום הוא משחק מילים בין המילה אינג׳ירה שהוא הלחם האתיופי הלאומי, והמילה באלינג׳רה באמהרית שמשמעותה לאכול ביחד, הדרך המסורתית לאכול באתיופיה היא במשותף.",
    },
    quote: {
      body: "אחת מתחנות הביקור שלי בשוק הכרמל היתה מסקרנת במיוחד: ״באלינג׳רה״ מסעדה אתיופית שהוקמה ע״י פאנטה. התרגום של שם המסעדה הוא: ״ביחד״ וכך גם היתה התחושה שלי הן לגבי המקום והן לגבי הדרך שאוכלים כאן. זאת הפעם הראשונה שלי במסעדה אתיופית ואני שמח שניסיתי. טעמתי אוכל נהדר ומפתיע מאוד.",
      cite: "שאול לוי",
    },
    aboutPage: {
      eyebrow: "אודות באלינג׳רה",
      title: "בית קטן למטבח אתיופי מסורתי בלב תל אביב",
      body: "באלינג׳רה נולדה מתוך רצון לפתוח שולחן אתיופי אמיתי: אינג׳רה טרייה, תבשילים מתובלים, ירקות, קטניות, בשר וטעמים שמגיעים ממסורת משפחתית. המסעדה יושבת בפאתי שוק הכרמל וכרם התימנים, ומחברת בין אוכל ביתי, הכנסת אורחים וחוויה צבעונית שלא מנסה להיראות כמו שום דבר אחר.",
      highlights: [
        "אינג׳רה טרייה ללא גלוטן מקמח טף",
        "מנות בשריות וטבעוניות לפי המסורת האתיופית",
        "חוויה משפחתית של אכילה משותפת סביב שולחן אחד",
      ],
      storyTitle: "הסיפור של המקום",
      story:
        "רק לפני כמה שנים החלטנו להרים את הסירים ולחשוף לכולם את הטעמים והריחות של מסורת אתיופית/יהודית ארוכת שנים. בבאלינג׳רה לא רק מזמינים מנה, אלא פותחים את השולחן, קורעים אינג׳רה בידיים ואוכלים ביחד.",
    },
    eventsPage: {
      eyebrow: "אירועים בבאלינג׳רה",
      title: "אירוע קטן, צבעוני ומלא טעמים",
      body: "המסעדה מתאימה למפגשים משפחתיים, ימי הולדת, ארוחות צוות וחוויות טעימה סביב המטבח האתיופי. אנחנו שומרים על האופי החם של המקום, עם תפריט שמבוסס על אינג׳רה טרייה, תבשילים בשריים או טבעוניים ושולחן שמזמין לאכול ביחד.",
      options: [
        "ארוחות קבוצתיות סביב שולחן משותף",
        "טעימות היכרות עם המטבח האתיופי",
        "תפריט בשרי או טבעוני לפי אופי האירוע",
      ],
      ctaTitle: "רוצים לתכנן אירוע?",
      ctaBody:
        "שלחו לנו פרטים ונבנה יחד ארוחה שמתאימה לקבוצה, לשעה ולסגנון האירוח.",
      form: {
        title: "ספרו לנו על האירוע",
        body: "הטופס מוכן לעיצוב ולבדיקה מקומית. שליחה אמיתית דרך Resend תחובר רק אחרי שהפרויקט יעבור לריפו הסופי.",
        submit: "שליחת פרטים",
        success:
          "הפרטים נשמרו בממשק המקומי. בשלב הזה לא נשלח אימייל, והחיבור ל-Resend יתווסף בריפו הסופי.",
        consent: "אני מאשר/ת שיחזרו אליי לגבי האירוע.",
        fields: {
          name: {
            label: "שם מלא",
            placeholder: "איך לפנות אליכם",
          },
          email: {
            label: "אימייל",
            placeholder: "name@example.com",
          },
          phone: {
            label: "טלפון",
            placeholder: "050-000-0000",
          },
          date: {
            label: "תאריך רצוי",
            placeholder: "בחרו תאריך",
          },
          guests: {
            label: "מספר משתתפים",
            placeholder: "לדוגמה 18",
          },
          message: {
            label: "מה חשוב שנדע?",
            placeholder: "סוג האירוע, שעה מועדפת, העדפות אוכל וכל פרט שיעזור לנו לחזור אליכם.",
          },
        },
      },
    },
    blogPage: {
      eyebrow: "בלוג באלינג׳רה",
      title: "סיפורים, טעמים ומסורת מהמטבח האתיופי",
      body: "הבלוג נותן מקום לסיפורים שמאחורי האוכל: אינג׳רה, טף, אכילה משותפת והטעמים שמחברים בין מסורת אתיופית לחיים בתל אביב.",
      articleEyebrow: "מאמר מהבלוג",
      backLabel: "חזרה לבלוג",
      posts: [
        {
          slug: "injera-heart-of-meal",
          title: "מה הופך אינג׳רה ללב הארוחה?",
          excerpt:
            "אינג׳רה היא גם לחם, גם צלחת וגם הדרך שבה כולם חולקים את אותה ארוחה.",
          image: "/balinjera/injera-wide.jpg",
          body: [
            "אינג׳רה היא הרבה יותר מלחם שמונח ליד המנה. היא הבסיס של הארוחה האתיופית: עליה מניחים את התבשילים, איתה אוספים כל ביס, וסביבה נוצרת שיחה.",
            "בבאלינג׳רה אנחנו מכינים אינג׳רה טרייה מקמח טף, ללא גלוטן, עם המרקם האוורירי והחמצמצות העדינה שמאזנת את התבלינים. זו הסיבה שכל שולחן מתחיל ממנה.",
            "כשהאינג׳רה מגיעה למרכז השולחן, כולם אוכלים מאותו מגש בקצב טבעי. זה אוכל שמבקש להיות משותף, לא רק מוגש.",
          ],
        },
        {
          slug: "eat-together-balinjera",
          title: "איך אוכלים ביחד בבאלינג׳רה",
          excerpt: "השם באלינג׳רה מזכיר את הרעיון הפשוט והיפה של אכילה משותפת.",
          image: "/balinjera/food-table.jpg",
          body: [
            "השם באלינג׳רה מחזיק בתוכו את הרעיון המרכזי של המקום: לאכול ביחד. בארוחה אתיופית מסורתית האוכל לא בנוי ממנות נפרדות לכל סועד, אלא משולחן שנפתח במרכז.",
            "כל אחד קורע חתיכת אינג׳רה, אוסף איתה תבשיל, ירקות או קטניות, וממשיך את השיחה סביב אותו מגש. יש בזה קצב אחר, קרוב יותר, שמזכיר אוכל ביתי ומשפחתי.",
            "גם בלב תל אביב, ליד שוק הכרמל וכרם התימנים, אנחנו רוצים לשמור על התחושה הזו: אוכל צבעוני, ידיים סביב השולחן, וטעמים שמחברים אנשים.",
          ],
        },
      ],
    },
  },
  en: {
    navLabel: "Main navigation",
    menuLabel: "Open menu",
    orderLabel: "Order",
    contactLabel: "Contact us",
    menuCta: "Menu",
    moreInfo: "More info",
    orderWolt: "Order with Wolt",
    readyTitle: ["Ready to eat?", "Reserve your table now"],
    madeBy: "Made By Shushan Studio",
    footerTagline: "Balinjera Restaurant,\ntraditional Ethiopian cuisine",
    footerColumns: [
      {
        title: "Address",
        lines: ["Malan 4 / HaKovshim 39", "Tel Aviv"],
      },
      {
        title: "Stay in touch",
        lines: ["03-525-2527", "fantaprada25@gmail.com", "Accessibility"],
      },
      {
        title: "Opening hours",
        lines: ["Sunday-Thursday", "12:00-20:00", "Friday", "11:00-15:00"],
      },
    ],
    follow: "Follow us",
    quick: {
      accessibility: "Accessibility options",
      actions: "Quick actions",
      wolt: "Order on Wolt",
      whatsapp: "WhatsApp",
    },
    nav: [
      { key: "home", label: "Home", href: "/balinjera" },
      { key: "about", label: "About", href: "/balinjera/about" },
      { key: "menu", label: "Menu", href: "/balinjera#menu" },
      { key: "events", label: "Events", href: "/balinjera/events" },
      { key: "blog", label: "Blog", href: "/balinjera/blog" },
      { key: "order", label: "Order", href: BALINJERA_ORDER_HREF },
    ],
    hero: {
      eyebrow: "Kosher Ethiopian bistro in Kerem HaTeimanim",
      title: "Balinjera Restaurant,\ntraditional\nEthiopian cuisine",
      body: "We offer a true Ethiopian experience. You will find familiar Ethiopian dishes such as injera alongside dishes you may not have met before. Balinjera's menu is based on fresh, healthy and natural ingredients with unique Ethiopian seasoning that also suits the Israeli palate.",
    },
    intro: {
      title: "A kosher Ethiopian restaurant in Kerem HaTeimanim",
      body: "It is hard to explain in words what we offer at Balinjera, but the name already gives a clue: we prepare traditional Ethiopian food that is healthy, tasty and full of color. A few years ago we decided to lift the pots and share the tastes and aromas of a long Ethiopian-Jewish tradition. And if it is Ethiopian, nothing beats fresh injera that we make every day from teff flour, naturally gluten free.",
    },
    featureCards: [
      {
        title: "Events",
        description:
          "Come taste and experience something different, warm and memorable. After the first visit, you will know your way back.",
        href: "/balinjera/events",
        media: "event",
      },
      {
        title: "Restaurant",
        description:
          "A light, young bistro on the edge of Carmel Market and a warm home for Ethiopian cuisine.",
        href: "/balinjera/about",
        media: "restaurant",
      },
      {
        title: "Ethiopian products",
        description:
          "We prepare traditional Ethiopian food that is healthy, tasty and especially full of color.",
        media: "products",
      },
    ],
    name: {
      title: "Craving injera",
      body: "The restaurant name is a play on the word injera, Ethiopia's national bread, and the Amharic word Balinjera, meaning to eat together. Traditionally, Ethiopian food is shared around the same table.",
    },
    quote: {
      body: "One of my visits near Carmel Market was especially intriguing: Balinjera, an Ethiopian restaurant founded by Fanta. The restaurant name means together, and that was exactly the feeling I had in the place and in the way people eat here. It was my first time in an Ethiopian restaurant and I am glad I tried it. I tasted wonderful and surprising food.",
      cite: "Shaul Levy",
    },
    aboutPage: {
      eyebrow: "About Balinjera",
      title: "A small home for traditional Ethiopian cuisine in Tel Aviv",
      body: "Balinjera was born from the wish to open a true Ethiopian table: fresh injera, seasoned stews, vegetables, legumes, meat and flavors rooted in family tradition. The restaurant sits by Carmel Market and Kerem HaTeimanim, connecting homemade food, hospitality and a colorful experience with its own identity.",
      highlights: [
        "Fresh gluten-free injera made from teff flour",
        "Meat and vegan dishes from Ethiopian tradition",
        "A shared family-style meal around one table",
      ],
      storyTitle: "The story of the place",
      story:
        "A few years ago we decided to lift the pots and reveal the flavors and aromas of a long Ethiopian-Jewish tradition. At Balinjera you do not only order a dish. You open the table, tear injera by hand and eat together.",
    },
    eventsPage: {
      eyebrow: "Events at Balinjera",
      title: "Small, colorful events full of flavor",
      body: "The restaurant is suited for family gatherings, birthdays, team meals and tasting experiences around Ethiopian cuisine. We keep the warm character of the place, with a menu based on fresh injera, meat or vegan stews and a table that invites everyone to eat together.",
      options: [
        "Group meals around a shared table",
        "Introductory tastings of Ethiopian cuisine",
        "Meat or vegan menu according to the event style",
      ],
      ctaTitle: "Planning an event?",
      ctaBody:
        "Send us the details and we will shape a meal that fits the group, timing and hosting style.",
      form: {
        title: "Tell us about the event",
        body: "The form is ready for local design and testing. Real Resend delivery will be connected only after the project is extracted into its final repository.",
        submit: "Send details",
        success:
          "The details were captured in the local interface. No email is sent at this stage; Resend will be connected in the final repository.",
        consent: "I agree to be contacted about this event request.",
        fields: {
          name: {
            label: "Full name",
            placeholder: "How should we address you?",
          },
          email: {
            label: "Email",
            placeholder: "name@example.com",
          },
          phone: {
            label: "Phone",
            placeholder: "050-000-0000",
          },
          date: {
            label: "Preferred date",
            placeholder: "Choose a date",
          },
          guests: {
            label: "Group size",
            placeholder: "For example 18",
          },
          message: {
            label: "What should we know?",
            placeholder:
              "Event type, preferred time, food preferences and anything that will help us respond.",
          },
        },
      },
    },
    blogPage: {
      eyebrow: "Balinjera Blog",
      title: "Stories, flavors and tradition from the Ethiopian kitchen",
      body: "The blog makes room for the stories behind the food: injera, teff, shared eating and the flavors that connect Ethiopian tradition with life in Tel Aviv.",
      articleEyebrow: "From the blog",
      backLabel: "Back to the blog",
      posts: [
        {
          slug: "injera-heart-of-meal",
          title: "Why injera is the heart of the meal",
          excerpt:
            "Injera is bread, plate and the way everyone shares the same meal.",
          image: "/balinjera/injera-wide.jpg",
          body: [
            "Injera is much more than bread served next to the dish. It is the base of the Ethiopian meal: stews are placed on it, every bite is gathered with it, and conversation forms around it.",
            "At Balinjera we prepare fresh injera from teff flour, naturally gluten free, with the airy texture and gentle tang that balance the spices. That is why every table starts with it.",
            "When injera arrives at the center of the table, everyone eats from the same platter at a natural pace. It is food designed to be shared, not only served.",
          ],
        },
        {
          slug: "eat-together-balinjera",
          title: "How people eat together at Balinjera",
          excerpt:
            "The name Balinjera carries the simple and beautiful idea of a shared meal.",
          image: "/balinjera/food-table.jpg",
          body: [
            "The name Balinjera carries the core idea of the place: eating together. In a traditional Ethiopian meal, the food is not built as separate plates for each guest, but as a table opened in the center.",
            "Each person tears a piece of injera, gathers stew, vegetables or legumes, and keeps the conversation moving around the same platter. It creates a slower, closer rhythm that feels like family food.",
            "Even in the heart of Tel Aviv, near Carmel Market and Kerem HaTeimanim, we want to keep that feeling: colorful food, hands around the table and flavors that bring people closer.",
          ],
        },
      ],
    },
  },
} as const;

export function getBlogPostSlugs(): string[] {
  return balinjeraCopy.he.blogPage.posts.map((post) => post.slug);
}

export function getBlogPost(
  lang: BalinjeraLang,
  slug: string
): BalinjeraBlogPost | undefined {
  return balinjeraCopy[lang].blogPage.posts.find((post) => post.slug === slug);
}
