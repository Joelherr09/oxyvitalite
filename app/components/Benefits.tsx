import { FaHeartbeat, FaBrain, FaLeaf, FaSmile } from "react-icons/fa";

const benefits = [
  {
    icon: <FaHeartbeat className="text-[#af863e] text-4xl mx-auto mb-4" />,
    title: "Recuperación física y muscular",
    desc: "Ideal para deportistas y personas activas.",
  },
  {
    icon: <FaBrain className="text-[#af863e] text-4xl mx-auto mb-4" />,
    title: "Claridad mental y concentración",
    desc: "Mejora tu enfoque y reduce la fatiga mental.",
  },
  {
    icon: <FaLeaf className="text-[#af863e] text-4xl mx-auto mb-4" />,
    title: "Regeneración celular y antiedad",
    desc: "Renueva tu piel y células desde adentro.",
  },
  {
    icon: <FaSmile className="text-[#af863e] text-4xl mx-auto mb-4" />,
    title: "Bienestar integral",
    desc: "Cuerpo y mente en equilibrio.",
  },
];

export default function Benefits() {
  return (
    <section id="beneficios" className="py-20 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-4">
          Beneficios de la oxigenación hiperbárica
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Sesiones de alto nivel para potenciar tu salud y rendimiento.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((b, idx) => (
            <div
              key={idx}
              className="text-center p-6 rounded-xl border border-[#af863e]/30 hover:shadow-lg transition"
            >
              {b.icon}
              <h3 className="text-xl font-semibold text-[#295234] mb-2">
                {b.title}
              </h3>
              <p className="text-gray-600">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}