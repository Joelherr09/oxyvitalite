"use client";

export default function PromoBanner() {
  const scrollToContact = () => {
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="bg-[#295234] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          🔥 PROMOCIÓN DE APERTURA
        </h2>
        <p className="text-xl mb-6">
          Cupos limitados – Solo por lanzamiento
        </p>
        <p className="mb-8 text-lg opacity-90">
          Reserva ahora y vive la experiencia de la oxigenación hiperbárica.
        </p>
        <button
          onClick={scrollToContact}
          className="bg-[#af863e] hover:bg-[#8f6730] text-white font-bold py-3 px-8 rounded-lg text-lg transition shadow-lg"
        >
          Asegura tu cupo →
        </button>
      </div>
    </section>
  );
}