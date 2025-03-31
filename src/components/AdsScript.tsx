"use client";
import { useEffect } from "react";
import Script from "next/script";

export default function AdsScript() {
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.adsbyjuicy = window.adsbyjuicy || [];
    }
  }, []);

  return <Script src="https://poweredby.jads.co/js/jads.js" strategy="afterInteractive" />;
}
