/* Site configuration — edit these values before going live. */
window.SITE = {
  whatsapp: "995555000000",          // international format, digits only (placeholder)
  phoneDisplay: "+995 555 00 00 00",
  phone: "+995555000000",
  email: "hello@colchis.ge",
  instagram: "https://instagram.com/",
  defaultLang: "he",
  langs: ["he", "ru", "en", "ka"]
};

/* Listings. Text (title/description) lives in the i18n dictionaries under p.{id}.*
   rent = average monthly gross rental revenue in USD.
   rental: long | short | seasonal */
window.PROPERTIES = [
  { id: 1, ref: "BT-127", city: "batumi",    type: "apartment", status: "ready",     price: 68000,  rent: 650,  rental: "short",    area: 48,  rooms: 2, bedrooms: 1, floor: "27/41", img: "p-batumi-sea",   gallery: ["batumi-bay", "boulevard"],  features: ["seaView", "furnished", "pool", "gym", "concierge", "elevator"], featured: true },
  { id: 2, ref: "BT-094", city: "batumi",    type: "apartment", status: "renovated", price: 112000, rent: 950,  rental: "short",    area: 74,  rooms: 3, bedrooms: 2, floor: "18/30", img: "p-batumi-night", gallery: ["batumi-bay", "p-batumi-sea"], features: ["seaView", "balcony", "furnished", "parking", "elevator"] },
  { id: 3, ref: "BT-031", city: "batumi",    type: "studio",    status: "renovated", price: 41000,  rent: 420,  rental: "short",    area: 32,  rooms: 1, bedrooms: 0, floor: "3/5",   img: "p-batumi-old",   gallery: ["boulevard", "batumi-bay"],  features: ["cityView", "furnished", "historic"] },
  { id: 4, ref: "TB-218", city: "tbilisi",   type: "apartment", status: "ready",     price: 245000, rent: 1900, rental: "long",     area: 118, rooms: 4, bedrooms: 3, floor: "6/12",  img: "p-mtatsminda",   gallery: ["hero-tbilisi", "peace-bridge"], features: ["cityView", "balcony", "parking", "concierge", "elevator"], featured: true },
  { id: 5, ref: "TB-156", city: "tbilisi",   type: "apartment", status: "renovated", price: 165000, rent: 1350, rental: "long",     area: 86,  rooms: 3, bedrooms: 2, floor: "2/3",   img: "p-sololaki",     gallery: ["tiles", "oldtown"],         features: ["historic", "balcony", "furnished", "cityView"] },
  { id: 6, ref: "TB-302", city: "tbilisi",   type: "apartment", status: "new",       price: 78000,  rent: 620,  rental: "long",     area: 55,  rooms: 2, bedrooms: 1, floor: "11/16", img: "p-saburtalo",    gallery: ["facade", "hero-tbilisi"],   features: ["furnished", "balcony", "elevator", "cityView"] },
  { id: 7, ref: "GD-045", city: "gudauri",   type: "studio",    status: "ready",     price: 59000,  rent: 700,  rental: "seasonal", area: 38,  rooms: 1, bedrooms: 0, floor: "4/8",   img: "p-gudauri",      gallery: ["kazbegi", "p-gudauri"],     features: ["mountainView", "skiIn", "furnished", "elevator"], featured: true },
  { id: 8, ref: "KA-012", city: "sighnaghi", type: "house",     status: "renovated", price: 185000, rent: 1500, rental: "short",    area: 210, rooms: 6, bedrooms: 5, floor: "2",     img: "p-sighnaghi",    gallery: ["tiles", "kazbegi"],         features: ["mountainView", "garden", "wineCellar", "fireplace", "historic", "terrace"] },
  { id: 9, ref: "TB-009", city: "tbilisi",   type: "penthouse", status: "ready",     price: 390000, rent: 2800, rental: "long",     area: 160, rooms: 4, bedrooms: 3, floor: "9/9",   img: "narikala",       gallery: ["p-mtatsminda", "peace-bridge"], features: ["cityView", "terrace", "fireplace", "parking", "elevator"] }
];

window.PHOTO_CREDITS = [
  ["hero-tbilisi", "File:2025-04-20_Sunset_in_Tbilisi.jpg"],
  ["p-batumi-sea", "File:Batumi_Skyline_(31).jpg"],
  ["p-batumi-night", "File:Panoramic_view_of_Batumi_at_night.jpg"],
  ["p-batumi-old", "File:Batumi_at_night_(2013).jpg"],
  ["p-sololaki", "File:Old_Town,_Tbilisi,_Georgia_(48808296988).jpg"],
  ["oldtown", "File:Old_Town,_Tbilisi,_Georgia_(48808280058).jpg"],
  ["p-saburtalo", "File:Modern_living_room_with_stylish_furniture_and_a_view_of_the_outdoors_in_a_cozy_apartment_setting.jpg"],
  ["p-gudauri", "File:Gudauri_(10).jpg"],
  ["p-sighnaghi", "File:View_of_Sighnaghi_01.jpg"],
  ["p-mtatsminda", "File:Narikala_fortress,_Tbilisi,_Georgia.jpg"],
  ["narikala", "File:Narikala,_Tiflis,_Georgia,_2016-09-29,_DD_91.jpg"],
  ["peace-bridge", "File:Tbilisi_Peace_Bridge_and_Kura_River_by_Falco.jpg"],
  ["tiles", "File:2014_Tbilisi,_Łaźnie_Orbeliani_(01).jpg"],
  ["kazbegi", "File:Kazbegi,_Gergeti_Trinity_Church_and_Mt_Kazbek_(35959311351).jpg"],
  ["batumi-bay", "File:View_of_Batumi_skyline_from_the_Botanical_Garden_(cropped).jpg"],
  ["boulevard", "File:Batumi_Boulevard_Magnolia.jpg"],
  ["facade", "File:2025-11-13_Eastern_façade_of_26_Ilia_Chavchavadze_Avenue.jpg"]
];
