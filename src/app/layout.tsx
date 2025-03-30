import "@/styles/globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <body className="bg-gray-100 text-gray-900">
        <Header />
        <main className="container mx-auto p-4 min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}