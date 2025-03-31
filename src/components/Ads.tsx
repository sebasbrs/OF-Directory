"use client";
import { useEffect } from "react";

interface AdsProps {
  adzone: string;
  adwidth: string;
  adheight: string;
}

export default function Ads({ adzone,adwidth, adheight }: AdsProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && window.adsbyjuicy) {
      window.adsbyjuicy.push({'adzone':adzone });
    }
  }, [adzone]);

  return <ins data-width={adwidth} data-height={adheight} id={adzone}></ins>;
}
