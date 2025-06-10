import React from "react";
import { ServiceCard } from "@/components/landing/features/service-card";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  cta: string;
  image?: string; // Optional for now
}

const servicesData: Service[] = [
  {
    id: "content-automation",
    title: "Sistema de Contenido Automatizado",
    description: "Publica, monitorea y crea contenido sin mover un dedo.",
    details: "Publicación automática de blogs desde Airtable. Detección de menciones sobre tu marca o industria en foros como Reddit. Generación de contenido diario con texto e imágenes AI. Publicaciones automáticas según las últimas noticias de tu rubro.",
    cta: "Automatiza tu contenido",
  },
  {
    id: "whatsapp-bot",
    title: "Bot de Agendamiento Inteligente por WhatsApp",
    description: "Recibe agendamientos automáticos 24/7.",
    details: "El bot gestiona tu calendario, responde dudas básicas y cierra reuniones sin intervención humana.",
    cta: "Automatiza tus agendamientos",
  },
  {
    id: "personalized-videos",
    title: "Videos Personalizados para Leads",
    description: "Convierte más con un toque personal.",
    details: "Nuestro sistema detecta nuevos leads, analiza su sitio web y crea automáticamente un video con tu avatar, destacando mejoras que puedes ofrecerles.",
    cta: "Automatiza tus ventas",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-vectoria-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">Nuestros Servicios</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
} 