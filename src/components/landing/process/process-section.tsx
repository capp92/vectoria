'use client';

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Settings, Rocket } from 'lucide-react'; // Example icons, adjust as needed

interface ProcessStep {
  id: number;
  title: string;
  description: string;
  icon: React.ElementType;
  duration?: string;
}

const processData: ProcessStep[] = [
  {
    id: 1,
    title: "Consulta Estratégica",
    description: "Analizamos tu negocio e identificamos oportunidades de automatización con mayor ROI.",
    icon: CheckCircle,
    duration: "30 min",
  },
  {
    id: 2,
    title: "Diseño e Implementación",
    description: "Desarrollamos y configuramos tus agentes IA y workflows personalizados.",
    icon: Settings,
    duration: "5-7 días",
  },
  {
    id: 3,
    title: "Lanzamiento y Optimización",
    description: "Desplegamos tu sistema y lo optimizamos continuamente para máximo rendimiento.",
    icon: Rocket,
    duration: "Ongoing",
  },
];

export function ProcessSection() {
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
    <section id="process" className="py-20 bg-vectoria-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">Nuestro Proceso en 3 Pasos</h2>
        <p className="text-xl text-black mb-12">Desde la consulta inicial hasta el lanzamiento, te acompañamos en cada etapa</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {processData.map((step, index) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              custom={index}
            >
              <Card className="h-full flex flex-col items-center justify-center p-6 bg-white border border-vectoria-blue-pastel hover:border-vectoria-cta-orange shadow-md transition-all duration-300">
                <div className="relative mb-6">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-vectoria-cta-orange text-vectoria-white font-bold text-lg absolute -top-6 -right-6 shadow-md">
                    {step.id}
                  </div>
                  <div className="w-20 h-20 flex items-center justify-center rounded-full bg-vectoria-light-sky text-vectoria-blue-pastel text-4xl shadow-md">
                    <step.icon size={40} />
                  </div>
                </div>
                <CardHeader className="p-0 mb-4 text-center">
                  <CardTitle className="text-2xl font-bold text-black">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow p-0 text-center">
                  <CardDescription className="text-black mb-4">{step.description}</CardDescription>
                  {step.duration && (
                    <span className="inline-block bg-vectoria-sky text-black text-sm px-4 py-1 rounded-full">
                      {step.duration}
                    </span>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 