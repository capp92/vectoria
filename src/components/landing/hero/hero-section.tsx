'use client';

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section id="hero" className="relative h-screen pt-16 flex items-center justify-center text-center bg-vectoria-gradient overflow-hidden">
      <motion.div
        className="container mx-auto px-4 z-10"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <motion.h1
          className="text-5xl md:text-7xl font-bold text-black leading-tight mb-4"
          variants={itemVariants}
        >
          Automatización con IA a tu medida
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-black mb-8"
          variants={itemVariants}
          transition={{ delay: 0.2 }}
        >
          Diseñamos e implementamos soluciones personalizadas para optimizar tus procesos de marketing, ventas y atención al cliente.
        </motion.p>
        <motion.div variants={itemVariants} transition={{ delay: 0.4 }}>
          <Button className="bg-vectoria-cta-orange text-vectoria-white hover:bg-orange-600 px-10 py-4 text-xl rounded-full shadow-lg transition-all duration-300 ease-in-out">
            Contáctanos
          </Button>
        </motion.div>
      </motion.div>
      {/* Animated background element */}
      <motion.div
        className="absolute inset-0 z-0 bg-vectoria-blue-pastel rounded-full"
        initial={{ scale: 0.8, opacity: 0.3 }}
        animate={{ scale: 1.2, opacity: 0.5 }}
        transition={{
          repeat: Infinity,
          repeatType: "reverse",
          duration: 6,
          ease: "easeInOut",
        }}
        style={{ filter: 'blur(100px)' }}
      ></motion.div>
      {/* Placeholder para elementos visuales/animaciones adicionales */}
      <div className="absolute inset-0 z-0 opacity-20">
        {/* Aquí podríamos añadir partículas animadas, formas abstractas, etc. */}
      </div>
    </section>
  );
} 