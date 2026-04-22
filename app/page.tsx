// app/page.tsx
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Services from "./components/Services";
import PromoBanner from "./components/PromoBanner";
import ImageGallery from "./components/ImageGallery";
import ContactForm from "./components/ContactForm";
import LocationMap from "./components/LocationMap";

export default function Home() {
  return (
    <main className="bg-white">
      {/* Hero principal */}
      <Hero />

      {/* Sección de beneficios (grid) */}
      <Benefits />

      {/* Para quién / servicios */}
      <Services />

      {/* Banner promocional de apertura */}
      <PromoBanner />

      {/* Galería de imágenes desde Instagram (9:16)    */}
      <ImageGallery />

      <LocationMap />

      {/* Formulario de contacto / reserva */}
      <ContactForm />
    </main>
  );
}