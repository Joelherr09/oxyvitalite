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
      <Hero />

      <Benefits />

      <Services />

      <PromoBanner />

      <ImageGallery />

      <LocationMap />

      <ContactForm />
    </main>
  );
}