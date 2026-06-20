import { AlexSpaClient } from "./alex-spa-client";
import { createAlexSpaLocalBusinessSchema } from "./alex-spa-schema";

export default function AlexSpaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(createAlexSpaLocalBusinessSchema()).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <AlexSpaClient />
    </>
  );
}
