import { alexSpaBusiness, alexSpaPreviewReviews } from "./alex-spa-data";

export type AlexSpaGoogleReview = {
  id: string;
  authorName: string;
  authorUrl?: string;
  authorPhoto?: string;
  rating: number;
  text: string;
  relativeTime?: string;
  publishTime?: string;
};

export type AlexSpaPlaceSummary = {
  placeId: string;
  displayName: string;
  rating: number;
  reviewCount: number;
  googleMapsUrl: string;
  reviewUrl: string;
  reviews: AlexSpaGoogleReview[];
  source: "google" | "preview";
};

type GoogleText = {
  text?: string;
  languageCode?: string;
};

type GooglePlaceReview = {
  name?: string;
  rating?: number;
  text?: GoogleText;
  originalText?: GoogleText;
  relativePublishTimeDescription?: string;
  publishTime?: string;
  googleMapsUri?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
};

export type AlexSpaGooglePlaceDetailsResponse = {
  id?: string;
  name?: string;
  displayName?: GoogleText;
  rating?: number;
  userRatingCount?: number;
  googleMapsUri?: string;
  reviews?: GooglePlaceReview[];
};

export function buildAlexSpaGoogleReviewUrl(placeId: string): string {
  return `https://search.google.com/local/writereview?placeid=${encodeURIComponent(
    placeId
  )}`;
}

export function getAlexSpaReviewUrl(placeId: string): string {
  return (
    process.env["NEXT_PUBLIC_ALEX_SPA_REVIEW_URL"] ??
    buildAlexSpaGoogleReviewUrl(placeId)
  );
}

export function buildAlexSpaGoogleMapsSearchUrl(
  placeId: string = alexSpaBusiness.placeId
): string {
  const params = new URLSearchParams({
    api: "1",
    query: alexSpaBusiness.name,
    query_place_id: placeId,
  });

  return `https://www.google.com/maps/search/?${params.toString()}`;
}

export function normalizeAlexSpaGooglePlaceDetails(
  response: AlexSpaGooglePlaceDetailsResponse
): AlexSpaPlaceSummary {
  const placeId =
    response.id ??
    response.name?.replace("places/", "") ??
    alexSpaBusiness.placeId;
  const reviews = (response.reviews ?? [])
    .map((review, index) => {
      const normalizedReview: AlexSpaGoogleReview = {
        id: review.name ?? `${placeId}-${index}`,
        authorName: review.authorAttribution?.displayName ?? "Google reviewer",
        rating: review.rating ?? 5,
        text: review.text?.text ?? review.originalText?.text ?? "",
      };

      if (review.authorAttribution?.uri) {
        normalizedReview.authorUrl = review.authorAttribution.uri;
      }

      if (review.authorAttribution?.photoUri) {
        normalizedReview.authorPhoto = review.authorAttribution.photoUri;
      }

      if (review.relativePublishTimeDescription) {
        normalizedReview.relativeTime = review.relativePublishTimeDescription;
      }

      if (review.publishTime) {
        normalizedReview.publishTime = review.publishTime;
      }

      return normalizedReview;
    })
    .filter((review) => review.text.trim().length > 0);

  return {
    placeId,
    displayName: response.displayName?.text ?? alexSpaBusiness.name,
    rating: response.rating ?? alexSpaBusiness.rating,
    reviewCount: response.userRatingCount ?? alexSpaBusiness.reviewCount,
    googleMapsUrl:
      response.googleMapsUri ?? buildAlexSpaGoogleMapsSearchUrl(placeId),
    reviewUrl: getAlexSpaReviewUrl(placeId),
    reviews,
    source: "google",
  };
}

export function createAlexSpaPreviewPlaceSummary(): AlexSpaPlaceSummary {
  return {
    placeId: alexSpaBusiness.placeId,
    displayName: alexSpaBusiness.name,
    rating: alexSpaBusiness.rating,
    reviewCount: alexSpaBusiness.reviewCount,
    googleMapsUrl: alexSpaBusiness.googleMapsUrl,
    reviewUrl: getAlexSpaReviewUrl(alexSpaBusiness.placeId),
    reviews: alexSpaPreviewReviews.map((review) => ({ ...review })),
    source: "preview",
  };
}

export async function fetchAlexSpaPlaceSummary(): Promise<AlexSpaPlaceSummary> {
  const response = await fetch("/api/alex-spa-google-reviews", {
    headers: { Accept: "application/json" },
  });

  if (!response.ok) {
    throw new Error(`Alex Spa reviews endpoint failed: ${response.status}`);
  }

  const summary = (await response.json()) as AlexSpaPlaceSummary;

  if (summary.reviews.length === 0) {
    return createAlexSpaPreviewPlaceSummary();
  }

  return summary;
}
