import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Ads from "@/components/Ads";
import AdsScript from "@/components/AdsScript";
import { ReactNode } from "react";

declare global {
  interface Window {
    adsbyjuicy?: unknown[];
  }
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Only Fans Directory</title>
        <meta name="juicyads-site-verification" content="04321ba5bf22611c2b9d166f5d0059a2" />
        <link rel="shortcut icon" href="/images/favicon.png" />
        <script type="text/javascript" src="https://js.juicyads.com/jp.php?c=44542313t214u4r2o2c4z2d484&u=http%3A%2F%2Fwww.juicyads.rocks"></script>
      </head>
      <body className="bg-primary text-gray-900">
        <Header />
        <AdsScript />

        {/* 🔹 Contenido principal con Ads ajustados */}
        <div className="container mx-auto p-4">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
            {/* 🟢 Anuncio Izquierdo (Solo en pantallas medianas y grandes) */}
            <div className="hidden md:block">
              <Ads adzone={"1086247"} adheight={"600"} adwidth={"160"} />
            </div>

            {/* 🔹 Contenido Principal */}
            <div className="md:col-span-3">
              <Ads adzone={"1086245"} adheight={"90"} adwidth={"728"} />
              {children}
            </div>

            {/* 🔵 Anuncio Derecho (Solo en pantallas medianas y grandes) */}
            <div className="hidden md:block">
              <Ads adzone={"1086254"} adheight={"600"} adwidth={"160"} />
            </div>
          </div>

          {/* 🔻 Anuncio Inferior (Siempre visible) */}
          <div className="mt-4 text-center">
            <Ads adzone={"1086242"} adheight={"290"} adwidth={"774"} />
          </div>
        </div>

        <Footer />

        {/* 🔻 Último anuncio (Solo en pantallas grandes) */}
        <div className="hidden md:block text-center mt-4">
          <Ads adzone={"1086245"} adheight={"90"} adwidth={"728"} />
        </div>

        <script src="/js/ads.js"></script>
      </body>
    </html>
  );
}
