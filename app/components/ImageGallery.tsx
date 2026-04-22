"use client";

import Image from "next/image";
import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Lista de imágenes (poner las que descargaste de Instagram)
const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
];

export default function ImageGallery() {
  const [selected, setSelected] = useState<string | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    align: "center",
    slidesToScroll: 1,
    breakpoints: {
      '(min-width: 768px)': { slidesToScroll: 1 }
    }
  });

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <section id="galeria" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-12">
          Vive la experiencia
        </h2>

        {/* Carrusel */}
        <div className="relative">
          {/* Contenedor del carrusel */}
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="flex-[0_0_80%] sm:flex-[0_0_60%] md:flex-[0_0_40%] lg:flex-[0_0_30%] px-3"
                >
                  <div
                    className="relative aspect-[9/16] cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition"
                    onClick={() => setSelected(img)}
                  >
                    <Image
                      src={img}
                      alt={`Sesión OxyVitalité ${idx + 1}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Botones de navegación */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#295234]/80 hover:bg-[#295234] text-white p-2 rounded-r-lg transition z-10"
            aria-label="Anterior"
          >
            <FaChevronLeft size={24} />
          </button>
          
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#295234]/80 hover:bg-[#295234] text-white p-2 rounded-l-lg transition z-10"
            aria-label="Siguiente"
          >
            <FaChevronRight size={24} />
          </button>
        </div>

        {/* Indicadores de posición (dots) */}
        <div className="flex justify-center gap-2 mt-6">
          {images.map((_, idx) => (
            <button
              key={idx}
              className="w-2 h-2 rounded-full bg-[#295234]/30 hover:bg-[#295234]/60 transition"
              onClick={() => emblaApi && emblaApi.scrollTo(idx)}
            />
          ))}
        </div>

        {/* Modal al hacer clic */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelected(null)}
          >
            <div className="relative max-w-lg w-full aspect-[9/16]">
              <Image
                src={selected}
                alt="Post"
                fill
                className="object-contain"
              />
              <button
                className="absolute top-2 right-2 bg-white rounded-full p-2 text-black hover:bg-gray-200 transition"
                onClick={() => setSelected(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}