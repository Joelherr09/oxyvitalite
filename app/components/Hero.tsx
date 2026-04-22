"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-10">
        {/* Degradado con diferentes intensidades según dispositivo */}
        <div 
          className="absolute inset-0 z-10" 
          style={{
            background: isMobile 
              ? "linear-gradient(to bottom, rgba(41, 82, 52, 0.3) 0%, rgba(41, 82, 52, 0.2) 40%, rgba(41, 82, 52, 0.1) 70%, transparent 100%)"
              : "linear-gradient(to bottom, #295234 0%, rgba(41, 82, 52, 0.8) 40%, rgba(41, 82, 52, 0.4) 70%, transparent 100%)"
          }}
        />
        
        {/* Imagen responsiva: cambia según el dispositivo */}
        <picture>
          <source 
            srcSet="/hero-mb.png" 
            media="(max-width: 767px)"
          />
          <source 
            srcSet="/hero.png" 
            media="(min-width: 768px)"
          />
          <Image
            src="/hero.png"
            alt="Cámara hiperbárica OxyVitalité"
            fill
            className="object-cover"
            priority
          />
        </picture>
      </div>

      {/* Contenido */}
      <div className="relative z-20 max-w-5xl mx-auto text-center text-white px-6">
        {/* Contenedor para el logo con dimensiones fijas */}
        <div className="relative w-64 h-32 sm:w-64 sm:h-32 md:w-80 md:h-40 lg:w-96 lg:h-48 mx-auto mb-6">
          <Image
            src="/logo-hero.png"
            alt="OxyVitalité Wellness"
            fill
            className="object-contain"
            priority
          />
        </div>
        
        {/* Texto con sombreado para mejor legibilidad */}
        <p className="text-xl md:text-2xl mb-6" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
          Vive la experiencia de la{" "}
          <span className="text-[#af863e] font-semibold" style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
            oxigenación hiperbárica
          </span>
        </p>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto" style={{ textShadow: "1px 1px 3px rgba(0,0,0,0.5)" }}>
          ✨ Próxima apertura en Coquimbo ✨
          <br />
          Recuperación física, claridad mental y bienestar integral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={scrollToContact}
            className="bg-[#af863e] px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            🔥 Promoción de apertura
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#295234] transition"
            style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.3)" }}
          >
            Más información
          </button>
        </div>

        <p className="mt-8 text-sm opacity-90 text-white" style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.5)" }}>
          ⚠️ Cupos limitados – Reserva anticipada
        </p>
      </div>
    </section>
  );
}