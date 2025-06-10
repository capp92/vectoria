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
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
