import { alexSpaBusiness } from "./alex-spa-data";

export function createAlexSpaLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    name: alexSpaBusiness.name,
    telephone: alexSpaBusiness.phoneHref,
    sameAs: [alexSpaBusiness.shortMapsUrl],
    address: {
      "@type": "PostalAddress",
      streetAddress: alexSpaBusiness.addressLine,
      addressLocality: "Paphos",
      postalCode: "8041",
      addressCountry: "CY",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: alexSpaBusiness.coordinates.lat,
      longitude: alexSpaBusiness.coordinates.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5.0",
      reviewCount: "168",
    },
  };
}
