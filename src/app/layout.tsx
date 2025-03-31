import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReactNode } from "react";


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <title>Only Fans Directory</title>
        <meta name="juicyads-site-verification" content="04321ba5bf22611c2b9d166f5d0059a2"></meta>
        <script src="/js/ads.js" async></script>
      </head>
      <body className="bg-gray-100 text-gray-900">
        <Header />
        
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="row-span-5">
              <ins id="1086247" data-width="160" data-height="600"></ins>
            </div>
            <div className="col-span-3 row-span-4">{children}</div>
            <div className="row-span-5 col-start-5">
              <ins id="1086247" data-width="160" data-height="600"></ins>
            </div>
            <div className="col-span-3 col-start-2 row-start-5">
              <ins id="1086242" data-width="774" data-height="290"></ins>
            </div>
        </div>
        <Footer />
        <script type="text/javascript" data-cfasync="false" async src="https://poweredby.jads.co/js/jads.js"></script>
      </body>
    </html>
  );
}