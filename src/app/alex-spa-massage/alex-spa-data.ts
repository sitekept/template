export const alexSpaBusiness = {
  name: "Alex Spa Massage",
  phoneDisplay: "+357 99 757073",
  phoneHref: "+35799757073",
  placeId: "ChIJEXn4CQAH5xQRDe36Tuyd2EM",
  googleMapsUrl:
    "https://www.google.com/maps/place/Alex+Spa+Massage/@34.7569257,32.4131528,17z/data=!3m1!4b1!4m6!3m5!1s0x14e7070009f8f911:0x43d89eec4efaed0d!8m2!3d34.7569257!4d32.4131528!16s%2Fg%2F11vx77wvjp",
  shortMapsUrl: "https://maps.app.goo.gl/Tac5JhnqCT9QfpKN7?g_st=iw",
  addressLine: "Shop 6, Lidas Street 5, Basilica Gardens, Block 4",
  cityLine: "Paphos 8041, Cyprus",
  studioLine: "Inside Gossip Hair and Beauty Studio",
  rating: 5,
  reviewCount: 168,
  closesAt: "20:00",
  coordinates: {
    lat: 34.7569257,
    lng: 32.4131528,
  },
  paphosHarbour: {
    lat: 34.7561,
    lng: 32.4086,
  },
} as const;

export const alexSpaServiceCatalog = [
  {
    id: "relaxing-massage",
    name: "Relaxing Massage",
    durationMinutes: 60,
    priceEuro: 45,
  },
  {
    id: "sport-massage",
    name: "Sport Massage",
    durationMinutes: 55,
    priceEuro: 50,
  },
  {
    id: "back-neck-shoulders",
    name: "Back Neck-Shoulders",
    durationMinutes: 30,
    priceEuro: 30,
  },
  {
    id: "lymph-drainage",
    name: "Lymph Drainage",
    durationMinutes: 55,
    priceEuro: 45,
  },
  {
    id: "cupping-relax-massage",
    name: "Cupping & Relax Massage",
    durationMinutes: 60,
    priceEuro: 45,
  },
  {
    id: "indian-head-massage",
    name: "Indian Head Massage",
    durationMinutes: 30,
    priceEuro: 30,
  },
  {
    id: "anti-cellulite-massage",
    name: "Anti-Cellulite Massage",
    durationMinutes: 40,
    priceEuro: 45,
  },
  {
    id: "mini-facial-massage",
    name: "Mini Facial Massage",
    durationMinutes: 30,
    priceEuro: 25,
  },
  {
    id: "anti-aging-facial-massage",
    name: "Anti-Aging Facial Massage",
    durationMinutes: 60,
    priceEuro: 40,
  },
  {
    id: "deep-tissue",
    name: "Deep Tissue",
    durationMinutes: 55,
    priceEuro: 50,
  },
  {
    id: "couple-massage",
    name: "Couple Massage",
    durationMinutes: 60,
    priceEuro: 80,
  },
  {
    id: "organic-scrub",
    name: "Organic Scrub",
    durationMinutes: 60,
    priceEuro: 45,
  },
  {
    id: "foot-massage",
    name: "Foot Massage",
    durationMinutes: 30,
    priceEuro: 30,
  },
  {
    id: "reflexology",
    name: "Reflexology",
    durationMinutes: 30,
    priceEuro: 35,
  },
  {
    id: "hot-stones",
    name: "Hot Stones",
    durationMinutes: 60,
    priceEuro: 45,
  },
  {
    id: "therapeutic",
    name: "Therapeutic",
    durationMinutes: 45,
    priceEuro: 40,
  },
  {
    id: "mud-wraps",
    name: "Mud Wraps",
    durationMinutes: 60,
    priceEuro: 45,
  },
  {
    id: "seaweed-wraps",
    name: "Seaweed wraps",
    durationMinutes: 60,
    priceEuro: 45,
  },
] as const;

export const alexSpaPreviewReviews = [
  {
    id: "preview-1",
    authorName: "Google reviewer",
    rating: 5,
    text: "Professional, calm and attentive care.",
    relativeTime: "Google preview",
    authorUrl: alexSpaBusiness.googleMapsUrl,
  },
  {
    id: "preview-2",
    authorName: "Google reviewer",
    rating: 5,
    text: "A welcoming space and a relaxing massage experience.",
    relativeTime: "Google preview",
    authorUrl: alexSpaBusiness.googleMapsUrl,
  },
  {
    id: "preview-3",
    authorName: "Google reviewer",
    rating: 5,
    text: "Clean, thoughtful and easy to reach in Paphos.",
    relativeTime: "Google preview",
    authorUrl: alexSpaBusiness.googleMapsUrl,
  },
] as const;
