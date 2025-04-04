(function () {
    function loadLinkvertiseScript() {
      return new Promise((resolve, reject) => {
        if (typeof window.linkvertise === "function") {
          resolve();
          return;
        }
  
        const script = document.createElement("script");
        script.src = "https://publisher.linkvertise.com/cdn/linkvertise.js";
        script.async = true;
        script.onload = () => {
          console.log("✅ Linkvertise.js cargado");
          resolve();
        };
        script.onerror = () => {
          console.error("❌ Error al cargar linkvertise.js");
          reject();
        };
  
        document.body.appendChild(script);
      });
    }
  
    function executeLinkvertise() {
      if (typeof window.linkvertise === "function") {
        console.log("🚀 Ejecutando linkvertise()");
        window.linkvertise(1334819, {
          whitelist: [],
          blacklist: ["of-directory.vercel.app", ""],
        });
      } else {
        console.warn("⚠️ linkvertise no está definido aún");
      }
    }
  
    function waitForContentAndRun() {
      const checkInterval = setInterval(() => {
        const modelLinks = document.querySelectorAll('a[href*="onlyfans.com"]');
        if (modelLinks.length > 0 && typeof window.linkvertise === "function") {
          clearInterval(checkInterval);
          console.log("🔗 Enlaces detectados, ejecutando linkvertise...");
          executeLinkvertise();
        }
      }, 1000); // cada 1 segundo
    }
  
    window.addEventListener("load", () => {
      loadLinkvertiseScript()
        .then(() => {
          waitForContentAndRun();
  
          const observer = new MutationObserver(() => {
            waitForContentAndRun();
          });
  
          observer.observe(document.body, {
            childList: true,
            subtree: true,
          });
        })
        .catch((err) => console.error("❌ Error en el script:", err));
    });
  })();
  