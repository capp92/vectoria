import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vectoria - Automatización con IA",
  description: "En Vectoria diseñamos e implementamos automatizaciones con inteligencia artificial personalizadas para optimizar procesos de marketing, ventas y atención al cliente.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={nunito.className}>
        {children}
        {/* Subtle background gradient elements */}
        <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-vectoria-gradient rounded-full opacity-10 blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-[20%] right-[10%] w-80 h-80 bg-vectoria-gradient rounded-full opacity-10 blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute top-[40%] right-[15%] w-48 h-48 bg-vectoria-gradient rounded-full opacity-8 blur-3xl z-0 pointer-events-none"></div>
        <div className="absolute bottom-[5%] left-[20%] w-72 h-72 bg-vectoria-gradient rounded-full opacity-12 blur-3xl z-0 pointer-events-none"></div>
      </body>
    </html>
  );
}
