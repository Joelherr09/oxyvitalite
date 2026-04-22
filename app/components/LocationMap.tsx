"use client";

import { useEffect, useRef } from "react";
import { FaMapMarkerAlt, FaExternalLinkAlt } from "react-icons/fa";

// Cargamos Leaflet solo en el cliente (evita errores con Next.js)
export default function LocationMap() {
  const mapRef = useRef<HTMLDivElement>(null);
  const address = "Los Perales Edif 2 0679 DP 902, Serena Pacífico, La Serena, Chile";
  const encodedAddress = encodeURIComponent(address);
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  useEffect(() => {
    // Cargar Leaflet dinámicamente solo en el cliente
    const loadMap = async () => {
      const L = await import("leaflet");
      await import("leaflet/dist/leaflet.css");

      // Configuración del ícono por defecto de Leaflet
      delete (L.Icon.Default.prototype as any)._getIconUrl;
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
        iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
        shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
      });

      if (!mapRef.current) return;

      // Crear el mapa centrado en La Serena (ajusta coordenadas si es necesario)
      const map = L.map(mapRef.current).setView([-29.903, -71.257], 15);

      // Capa de mapa gratis de OpenStreetMap
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
        maxZoom: 19,
      }).addTo(map);

      // Añadir marcador
      L.marker([-29.903, -71.257]).addTo(map)
        .bindPopup("<b>OxyVitalité Wellness</b><br>Los Perales Edif 2 0679 DP 902<br>Serena Pacífico, La Serena")
        .openPopup();
    };

    loadMap();
  }, []);

  return (
    <section id="mapa" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-4">
          Nuestra ubicación
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Te esperamos en Serena Pacífico, La Serena
        </p>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Información de ubicación */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <FaMapMarkerAlt className="text-[#af863e] text-4xl mb-4" />
            <h3 className="text-xl font-bold text-[#295234] mb-3">
              Dirección
            </h3>
            <p className="text-gray-700 mb-4">
              Los Perales Edif 2 0679 DP 902<br />
              Serena Pacífico, La Serena, Chile
            </p>
            
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 bg-[#295234] text-white px-6 py-3 rounded-lg hover:bg-[#1d3b26] transition"
            >
              <FaExternalLinkAlt size={16} />
              Abrir en Google Maps
            </a>
          </div>

          {/* Mapa interactivo (gratis, sin API key) */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden h-[400px]">
            <div ref={mapRef} className="w-full h-full" />
            <div className="text-center text-xs text-gray-500 p-2">
              © <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener noreferrer" className="hover:text-[#af863e]">OpenStreetMap</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}