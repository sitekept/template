"use client";

import { useEffect, useRef } from "react";

export default function NathReparationPage() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (!iframe) {
      return;
    }

    const syncHeight = () => {
      const doc = iframe.contentDocument;

      if (!doc) {
        return;
      }

      const bodyHeight = doc.body?.scrollHeight ?? 0;
      const htmlHeight = doc.documentElement?.scrollHeight ?? 0;
      const nextHeight = Math.max(bodyHeight, htmlHeight, window.innerHeight);

      iframe.style.height = `${nextHeight}px`;
    };

    const handleLoad = () => {
      syncHeight();
      iframe.contentWindow?.addEventListener("resize", syncHeight);
    };

    iframe.addEventListener("load", handleLoad);
    window.addEventListener("resize", syncHeight);

    const timer = window.setInterval(syncHeight, 1000);

    return () => {
      iframe.removeEventListener("load", handleLoad);
      iframe.contentWindow?.removeEventListener("resize", syncHeight);
      window.removeEventListener("resize", syncHeight);
      window.clearInterval(timer);
    };
  }, []);

  return (
    <iframe
      ref={iframeRef}
      src="/templates/nathreparation/index.html"
      title="Nath Reparation template"
      className="block min-h-screen w-full border-0 bg-white"
    />
  );
}
