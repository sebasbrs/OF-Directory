"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

declare global {
  interface Window {
    linkvertise?: (id: number, options: { whitelist: string[]; blacklist: string[] }) => void;
  }
}

export default function LinkvertiseEnhancer() {
  const pathname = usePathname();

  useEffect(() => {
    const applyLinkvertise = () => {
      const links = document.querySelectorAll('a[href*="onlyfans.com"]');
      links.forEach((link) => {
        // Añade el atributo requerido por Linkvertise
        link.setAttribute("data-linkvertise-target", "");
      });

      // Ejecutar Linkvertise nuevamente si ya cargó
      if (typeof window.linkvertise === "function") {
        console.log("🔁 Ejecutando linkvertise()");
        window.linkvertise(1334819, {
          whitelist: [],
          blacklist: ["of-directory.vercel.app", ""],
        });
      } else {
        console.warn("⚠️ window.linkvertise no está disponible aún.");
      }
    };

    // Esperamos un poco para asegurar que el contenido dinámico esté en el DOM
    const timeout = setTimeout(applyLinkvertise, 1000);

    return () => clearTimeout(timeout);
  }, [pathname]);

  return null;
}
