'use client';

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqData = [
  {
    question: "¿Qué tipo de empresas se benefician más de Vectoria?",
    answer: "Vectoria está diseñada para pymes y medianas empresas en Chile que buscan optimizar sus procesos de marketing, ventas y atención al cliente a través de la automatización con inteligencia artificial.",
  },
  {
    question: "¿Necesito conocimientos técnicos para usar las soluciones de Vectoria?",
    answer: "Absolutamente no. Nos encargamos de toda la implementación y configuración. Nuestras soluciones están diseñadas para ser fáciles de usar, permitiéndote enfocarte en el crecimiento de tu negocio sin complicaciones técnicas.",
  },
  {
    question: "¿Con qué herramientas se integra Vectoria?",
    answer: "Nos integramos con las herramientas que ya utilizas, como Airtable, Google Calendar, WhatsApp Business, HubSpot, Notion, y diversas plataformas de redes sociales, para asegurar una automatización fluida y eficiente.",
  },
  {
    question: "¿Qué tan rápido se implementan las automatizaciones?",
    answer: "Nos enfocamos en una implementación rápida y sin fricciones. Desde la definición de tus necesidades hasta la puesta en marcha, nuestro objetivo es que veas resultados en el menor tiempo posible.",
  },
  {
    question: "¿Ofrecen soporte continuo y optimización?",
    answer: "Sí, en Vectoria ofrecemos soporte dedicado y optimización constante para asegurar que tus automatizaciones evolucionen con tu negocio y sigan brindando el máximo valor a largo plazo.",
  },
];

export function FAQSection() {
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
    <section id="faq" className="py-20 bg-vectoria-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-black mb-12">Preguntas Frecuentes</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqData.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                custom={index}
              >
                <AccordionItem value={`item-${index + 1}`}>
                  <AccordionTrigger className="text-lg font-semibold text-black hover:no-underline text-left">{item.question}</AccordionTrigger>
                  <AccordionContent className="text-black leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 