"use client";

import Image from "next/image";
import { useState } from "react";

// Lista de imágenes (poner las que descargaste de Instagram)
const images = [
  "/images/post1.jpg",
  "/images/post2.jpg",
  "/images/post3.jpg",
  "/images/post4.jpg",
];

export default function ImageGallery() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section id="galeria" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-12">
          Vive la experiencia
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, idx) => (
            <div
              key={idx}
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
          ))}
        </div>

        {/* Modal al hacer clic */}
        {selected && (
          <div
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
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
                className="absolute top-2 right-2 bg-white rounded-full p-2 text-black"
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