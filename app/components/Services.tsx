import { FaDumbbell, FaSyringe, FaBatteryFull } from "react-icons/fa";

const services = [
  {
    icon: <FaDumbbell className="text-5xl text-[#af863e] mx-auto mb-4" />,
    title: "Deportistas",
    desc: "Recuperación más rápida, menos fatiga y mejor rendimiento.",
  },
  {
    icon: <FaSyringe className="text-5xl text-[#af863e] mx-auto mb-4" />,
    title: "Post operatorio",
    desc: "Disminuye inflamación, mejora cicatrización y energía.",
  },
  {
    icon: <FaBatteryFull className="text-5xl text-[#af863e] mx-auto mb-4" />,
    title: "Estrés y fatiga crónica",
    desc: "Recupera tu vitalidad y bienestar diario.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-20 px-6 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-4">
          ¿Para quién es ideal?
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Terapia pensada para potenciar tu salud en cada etapa.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <div
              key={idx}
              className="text-center p-8 bg-white rounded-xl shadow-md border-t-4 border-[#af863e]"
            >
              {s.icon}
              <h3 className="text-2xl font-bold text-[#295234] mb-3">
                {s.title}
              </h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}