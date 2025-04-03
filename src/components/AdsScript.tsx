"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    linkvertise?: (id: number, options: { whitelist: string[]; blacklist: string[] }) => void;
  }
}

export default function AdsScript() {
  const pathname = usePathname();

  useEffect(() => {
    const applyLinkvertise = () => {
      if (typeof window.linkvertise === "function") {
        window.linkvertise(1334819, {
          whitelist: [],
          blacklist: ["of-directory.vercel.app", ""],
        });
      }
    };

    // Esperamos un poco para asegurarnos de que el contenido ya se generó
    setTimeout(() => {
      applyLinkvertise();
    }, 1000);

    // Observamos cambios en el DOM para volver a aplicar Linkvertise si es necesario
    const observer = new MutationObserver(() => {
      applyLinkvertise();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, [pathname]); // Se ejecuta cada vez que cambia la ruta

  return null;
}
