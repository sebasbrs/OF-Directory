import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>OnlyFans Models Directory</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script src="https://publisher.linkvertise.com/cdn/linkvertise.js"></script>        
      </head>
      <body className="bg-primary text-gray-900">
        <Header />
        

        {/* 🔹 Contenido principal con Ads ajustados */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* 🟢 Anuncio Izquierdo (Solo en pantallas medianas y grandes) */}
            <div className="hidden md:block">
            </div>

            {/* 🔹 Contenido Principal */}
            <div className="md:col-span-3">
              {children}
            </div>

            {/* 🔵 Anuncio Derecho (Solo en pantallas medianas y grandes) */}
            <div className="hidden md:block">
            </div>
          </div>

          {/* 🔻 Anuncio Inferior (Siempre visible) */}
          <div className="mt-4 text-center">
          </div>
        </div>

        <Footer />

        {/* 🔻 Último anuncio (Solo en pantallas grandes) */}
        <div className="hidden md:block text-center mt-4">
        </div>
        <script src="/js/ads.js"></script>
        
      </body>
    </html>
  );
}
