import React from "react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-vectoria-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Vectoria</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            Automatización con IA a tu medida. Optimizando procesos para pymes y empresas medianas en Chile. Simplifica, escala y crece con nuestras soluciones inteligentes.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
          <Link href="#" className="text-gray-300 hover:text-vectoria-blue-pastel transition-colors">Privacidad</Link>
          <Link href="#" className="text-gray-300 hover:text-vectoria-blue-pastel transition-colors">Términos de Servicio</Link>
          <Link href="#" className="text-gray-300 hover:text-vectoria-blue-pastel transition-colors">Contacto</Link>
          <Link href="#" className="text-gray-300 hover:text-vectoria-blue-pastel transition-colors">Blog</Link>
        </div>

        <div className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Vectoria. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
} 