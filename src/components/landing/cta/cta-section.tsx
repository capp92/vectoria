'use client';

import React from "react";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, Clock, Lightbulb, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';

export function CtaSection() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="cta" className="py-20 bg-vectoria-white text-black">
      <motion.div
        className="container mx-auto px-4 text-center"
        initial="hidden"
        whileInView="visible"
        variants={sectionVariants}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Automatiza tu Negocio en <span className="text-vectoria-cta-orange">7 Días</span>
        </h2>
        <p className="text-xl mb-12 max-w-3xl mx-auto text-black">
          Completa el formulario y obtén una consulta estratégica gratuita para transformar tu empresa con inteligencia artificial. Sin compromiso, solo resultados.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Formulario */}
          <motion.div variants={cardVariants}>
            <Card className="bg-white border border-vectoria-blue-pastel hover:border-vectoria-cta-orange transition-colors duration-300 text-left p-6">
              <CardHeader className="p-0 mb-6">
                <CardTitle className="text-2xl font-bold text-black mb-2">Solicita tu Consulta Estratégica</CardTitle>
                <CardDescription className="text-gray-700">Completa los datos y te contactaremos en menos de 24 horas</CardDescription>
              </CardHeader>
              <CardContent className="p-0">
                <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="fullName" className="block text-gray-700 text-sm font-semibold mb-2">Nombre Completo *</label>
                    <Input id="fullName" placeholder="Tu nombre completo" className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange" />
                  </div>
                  <div>
                    <label htmlFor="corporateEmail" className="block text-gray-700 text-sm font-semibold mb-2">Email Corporativo *</label>
                    <Input id="corporateEmail" placeholder="tu@empresa.com" className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange" />
                  </div>
                  <div>
                    <label htmlFor="whatsapp" className="block text-gray-700 text-sm font-semibold mb-2">Teléfono/WhatsApp *</label>
                    <Input id="whatsapp" placeholder="+569 9 519 70 38" className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange" />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-gray-700 text-sm font-semibold mb-2">Empresa *</label>
                    <Input id="company" placeholder="Nombre de tu empresa" className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange" />
                  </div>
                  <div>
                    <label htmlFor="annualRevenue" className="block text-gray-700 text-sm font-semibold mb-2">Ingresos Anuales *</label>
                    <Select>
                      <SelectTrigger className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange">
                        <SelectValue placeholder="Selecciona un rango" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black border-vectoria-blue-pastel">
                        <SelectItem value="<100k">Menos de $100K</SelectItem>
                        <SelectItem value="100k-500k">$100K - $500K</SelectItem>
                        <SelectItem value="500k-1m">$500K - $1M</SelectItem>
                        <SelectItem value=">1m">Más de $1M</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label htmlFor="serviceInterest" className="block text-gray-700 text-sm font-semibold mb-2">Servicio de Interés *</label>
                    <Select>
                      <SelectTrigger className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange">
                        <SelectValue placeholder="Selecciona un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-white text-black border-vectoria-blue-pastel">
                        <SelectItem value="content">Sistema de Contenido Automatizado</SelectItem>
                        <SelectItem value="whatsapp">Bot de Agendamiento WhatsApp</SelectItem>
                        <SelectItem value="videos">Videos Personalizados para Leads</SelectItem>
                        <SelectItem value="other">Otro</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="md:col-span-2">
                    <label htmlFor="challenge" className="block text-gray-700 text-sm font-semibold mb-2">Cuéntanos tu Desafío (Opcional)</label>
                    <Textarea id="challenge" placeholder="Describe brevemente el principal desafío que quieres resolver con IA..." className="bg-white border-vectoria-blue-pastel text-black placeholder:text-gray-500 focus:border-vectoria-cta-orange h-32" />
                  </div>
                  <div className="md:col-span-2 mt-4">
                    <Button type="submit" className="w-full bg-vectoria-cta-orange text-vectoria-white hover:bg-orange-600 px-10 py-6 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105">
                      Obtener Consulta Estratégica GRATIS
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contacto Directo y Garantías */}
          <div className="space-y-6">
            <motion.div variants={cardVariants}>
              <Card className="bg-white border border-vectoria-blue-pastel hover:border-vectoria-cta-orange transition-colors duration-300 text-left p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-black">Contacto Directo</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="text-vectoria-blue-pastel" size={24} />
                    <span className="text-gray-800">crprieto.panizo@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="text-vectoria-blue-pastel" size={24} />
                    <span className="text-gray-800">+569 9 519 70 38</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={cardVariants}>
              <Card className="bg-white border border-vectoria-blue-pastel hover:border-vectoria-cta-orange transition-colors duration-300 text-left p-6">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-black">Garantías</CardTitle>
                </CardHeader>
                <CardContent className="p-0 space-y-3">
                  <div className="flex items-center space-x-2">
                    <Lightbulb className="text-vectoria-blue-pastel" size={20} />
                    <span className="text-gray-800">Respuesta en 24hrs garantizada</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="text-vectoria-blue-pastel" size={20} />
                    <span className="text-gray-800">Consulta 100% gratuita</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="text-vectoria-blue-pastel" size={20} />
                    <span className="text-gray-800">Sin compromiso de compra</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CheckCircle className="text-vectoria-blue-pastel" size={20} />
                    <span className="text-gray-800">ROI garantizado o reembolso</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
} 