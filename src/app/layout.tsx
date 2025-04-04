import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";
import LinkvertiseEnhancer from "@/components/linkvertiser";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>OnlyFans Models Directory</title>
        <link rel="shortcut icon" href="/images/favicon.png" />
        <Script
          src="https://publisher.linkvertise.com/cdn/linkvertise.js"
          strategy="beforeInteractive"
        />
      </head>
      <body className="bg-primary text-gray-900">
      <LinkvertiseEnhancer />
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
        
        
      </body>
    </html>
  );
}
