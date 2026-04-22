import type { NextConfig } from "next";

const nextConfig = {
  images: {
    // Establece un tiempo de vida bajo para la caché durante el desarrollo
    minimumCacheTTL: 60, // 60 segundos
    // Deshabilita la optimización de imágenes si solo quieres usarlas tal cual
    // unoptimized: true,
  },
}
export default nextConfig;
