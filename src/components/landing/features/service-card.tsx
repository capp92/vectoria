'use client';

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Drawer, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

interface Service {
  id: string;
  title: string;
  description: string;
  details: string;
  cta: string;
  image?: string;
}

interface ServiceCardProps {
  service: Service;
}

export function ServiceCard({ service }: ServiceCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
    >
      <Card className="flex flex-col h-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-[1.02] bg-vectoria-light-sky border-none">
        <CardHeader>
          {service.image && (
            <div className="mb-4">
              {/* Placeholder for service image */}
              <div className="w-full h-48 bg-gray-300 rounded-md flex items-center justify-center text-black">
                Imagen de {service.title}
              </div>
            </div>
          )}
          <CardTitle className="text-2xl font-bold text-black">{service.title}</CardTitle>
          <CardDescription className="text-black">{service.description}</CardDescription>
        </CardHeader>
        <CardContent className="flex-grow">
          {/* Content visible without drawer */}
          <p className="text-black">{service.details.substring(0, 100)}...</p>
        </CardContent>
        <CardFooter className="mt-auto flex justify-end">
          <Drawer>
            <DrawerTrigger asChild>
              <Button className="bg-vectoria-cta-orange text-vectoria-white hover:bg-orange-600">
                Ver Detalles
              </Button>
            </DrawerTrigger>
            <DrawerContent className="h-[80vh]">
              <DrawerHeader>
                <DrawerTitle className="text-black">{service.title}</DrawerTitle>
                <DrawerDescription className="text-black">{service.description}</DrawerDescription>
              </DrawerHeader>
              <div className="p-4 flex-grow overflow-y-auto">
                <p className="text-black mb-4">{service.details}</p>
                {/* More detailed content goes here if needed */}
              </div>
              <DrawerFooter>
                <Button className="bg-vectoria-cta-orange text-vectoria-white hover:bg-orange-600">
                  {service.cta}
                </Button>
                <DrawerClose asChild>
                  <Button variant="outline" className="text-black border-black">Cerrar</Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </CardFooter>
      </Card>
    </motion.div>
  );
} 