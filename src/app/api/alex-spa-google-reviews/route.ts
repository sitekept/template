import { NextResponse } from "next/server";

import { alexSpaBusiness } from "@/app/alex-spa-massage/alex-spa-data";
import {
  createAlexSpaPreviewPlaceSummary,
  normalizeAlexSpaGooglePlaceDetails,
  type AlexSpaGooglePlaceDetailsResponse,
} from "@/app/alex-spa-massage/alex-spa-reviews";

export const revalidate = 3600;

const FIELD_MASK = [
  "id",
  "displayName",
  "rating",
  "userRatingCount",
  "googleMapsUri",
  "reviews.authorAttribution",
  "reviews.rating",
  "reviews.text",
  "reviews.originalText",
  "reviews.relativePublishTimeDescription",
  "reviews.publishTime",
  "reviews.googleMapsUri",
].join(",");

function jsonWithCache(data: unknown, init?: ResponseInit) {
  return NextResponse.json(data, {
    ...init,
    headers: {
      "Cache-Control": "s-maxage=3600, stale-while-revalidate=86400",
      ...init?.headers,
    },
  });
}

export async function GET() {
  const apiKey = process.env["GOOGLE_MAPS_API_KEY"];

  if (!apiKey) {
    return jsonWithCache(createAlexSpaPreviewPlaceSummary());
  }

  const url = `https://places.googleapis.com/v1/places/${alexSpaBusiness.placeId}`;
  const response = await fetch(url, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": FIELD_MASK,
    },
    next: { revalidate },
  });

  if (!response.ok) {
    return jsonWithCache(createAlexSpaPreviewPlaceSummary(), { status: 200 });
  }

  const summary = normalizeAlexSpaGooglePlaceDetails(
    (await response.json()) as AlexSpaGooglePlaceDetailsResponse
  );

  return jsonWithCache(
    summary.reviews.length > 0 ? summary : createAlexSpaPreviewPlaceSummary()
  );
}
