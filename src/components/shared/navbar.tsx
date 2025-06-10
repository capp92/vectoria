'use client';

import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50; // Adjust scroll threshold as needed
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 p-4 transition-colors duration-300 ${scrolled ? "bg-white shadow-md" : "bg-transparent"}`}>
      <div className="container mx-auto flex justify-between items-center">
        {/* Placeholder for Logo */}
        <div className="text-2xl font-bold text-black">
          {/* Aquí irá el logo de Vectoria */}
          <span className="sr-only">Vectoria Logo</span>
          <span className="h-8 w-auto block bg-gray-200 rounded-md"></span> 
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex space-x-6">
          <li>
            <Link href="#hero" className="text-black hover:text-vectoria-blue-pastel transition-colors">
              Inicio
            </Link>
          </li>
          <li>
            <Link href="#services" className="text-black hover:text-vectoria-blue-pastel transition-colors">
              Servicios
            </Link>
          </li>
          <li>
            <Link href="#faq" className="text-black hover:text-vectoria-blue-pastel transition-colors">
              FAQ
            </Link>
          </li>
          <li>
            <Link href="#testimonials" className="text-black hover:text-vectoria-blue-pastel transition-colors">
              Testimonios
            </Link>
          </li>
        </ul>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button className="text-black focus:outline-none">
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-white p-4 w-64">
              <nav className="flex flex-col space-y-4 pt-8">
                <Link href="#hero" className="text-black hover:text-vectoria-blue-pastel text-lg font-semibold">
                  Inicio
                </Link>
                <Link href="#services" className="text-black hover:text-vectoria-blue-pastel text-lg font-semibold">
                  Servicios
                </Link>
                <Link href="#faq" className="text-black hover:text-vectoria-blue-pastel text-lg font-semibold">
                  FAQ
                </Link>
                <Link href="#testimonials" className="text-black hover:text-vectoria-blue-pastel text-lg font-semibold">
                  Testimonios
                </Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
} 