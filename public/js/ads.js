function applyLinkvertise() {
    if (typeof window.linkvertise === "function") {
      window.linkvertise(1334819, {
        whitelist: [],
        blacklist: ["of-directory.vercel.app", ""],
      });
    }
  }
  
  // Ejecutar después de que la página haya cargado completamente
  document.addEventListener("DOMContentLoaded", applyLinkvertise);
  
  // Detectar cambios en el contenido dinámico
  const observer = new MutationObserver(() => {
    applyLinkvertise();
  });
  
  observer.observe(document.body, { childList: true, subtree: true });