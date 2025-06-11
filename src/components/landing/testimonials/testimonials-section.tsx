'use client';

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Testimonial {
  quote: string;
  author: string;
  title: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "Vectoria transformó completamente nuestro departamento de marketing. Las automatizaciones son rápidas, eficientes y nos han permitido escalar sin aumentar costos.",
    author: "Sofía R.",
    title: "Directora de Marketing, Startup Tecnológica",
  },
  {
    quote: "El bot de WhatsApp de Vectoria ha sido un cambio de juego para nuestro equipo de ventas. Los agendamientos fluyen automáticamente y la atención al cliente ha mejorado drásticamente.",
    author: "Carlos P.",
    title: "Gerente Comercial, Pyme de Servicios",
  },
  {
    quote: "Los videos personalizados para leads nos han diferenciado enormemente. Vemos una tasa de conversión mucho más alta y un feedback excelente de nuestros potenciales clientes.",
    author: "Andrea G.",
    title: "Fundadora, Agencia de Publicidad Digital",
  },
  {
    quote: "La implementación fue sorprendentemente sencilla y el soporte de Vectoria ha sido impecable. Es una inversión que vale la pena para cualquier empresa que busque eficiencia.",
    author: "Javier M.",
    title: "CEO, Consultora de Negocios",
  },
];

export function TestimonialsSection() {
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1, // Staggered animation
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section id="testimonials" className="py-20 bg-vectoria-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">Lo Que Dicen Nuestros Clientes</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-4xl mx-auto"
        >
          <CarouselContent className="-ml-4">
            {testimonialsData.map((testimonial, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <CarouselItem className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Card className="h-full flex flex-col justify-between p-6 bg-white border border-vectoria-blue-pastel hover:border-vectoria-cta-orange shadow-md">
                    <CardContent className="flex flex-col items-center justify-center text-center p-0">
                      <p className="text-base font-normal text-black mb-4">&quot;{testimonial.quote}&quot;</p>
                      <p className="text-lg font-normal text-black">{testimonial.author}</p>
                      <p className="text-sm text-black">{testimonial.title}</p>
                    </CardContent>
                  </Card>
                </CarouselItem>
              </motion.div>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
} 