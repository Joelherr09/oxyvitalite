"use client";

import Image from "next/image";

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center">
      {/* Imagen de fondo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Overlay */}
        <Image
          src="/hero.png"
          alt="Cámara hiperbárica OxyVitalité"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Contenido */}
      <div className="relative z-20 max-w-5xl mx-auto text-center text-white px-6">
        {/* Contenedor para el logo con dimensiones fijas */}
<div className="relative w-48 h-24 sm:w-64 sm:h-32 md:w-80 md:h-40 lg:w-96 lg:h-48 mx-auto mb-6">
  <Image
    src="/logo-hero.png"
    alt="OxyVitalité Wellness"
    fill
    className="object-contain"
    priority
  />
</div>
        
        <p className="text-xl md:text-2xl mb-6">
          Vive la experiencia de la{" "}
          <span className="text-[#af863e] font-semibold">
            oxigenación hiperbárica
          </span>
        </p>
        
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          ✨ Próxima apertura en Coquimbo ✨
          <br />
          Recuperación física, claridad mental y bienestar integral.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={scrollToContact}
            className="bg-[#af863e] px-8 py-3 rounded-lg font-bold text-lg hover:scale-105 transition shadow-lg"
          >
            🔥 Promoción de apertura
          </button>
          <button
            onClick={scrollToContact}
            className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-[#295234] transition"
          >
            Más información
          </button>
        </div>

        <p className="mt-8 text-sm opacity-90">
          ⚠️ Cupos limitados – Reserva anticipada
        </p>
      </div>
    </section>
  );
}