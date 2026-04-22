"use client";

import { useState } from "react";
import emailjs from "emailjs-com";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);

    // Configurar EmailJS (reemplazar con tus keys)
    const serviceId = "service_xxx";
    const templateId = "template_xxx";
    const userId = "user_xxx";

    try {
      await emailjs.send(serviceId, templateId, form, userId);
      setSent(true);
      setForm({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      alert("Hubo un error, escríbenos por WhatsApp.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contacto" className="py-20 px-6 bg-gray-50">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#295234] mb-8">
          Reserva tu lugar
        </h2>
        <p className="text-center text-gray-600 mb-12">
          Escribe tus datos y te contactaremos para agendar tu sesión.
        </p>

        {sent ? (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded text-center">
            ✅ ¡Mensaje enviado! Te responderemos pronto.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Nombre completo"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#af863e]"
            />
            <input
              type="email"
              name="email"
              placeholder="Correo electrónico"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#af863e]"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Teléfono (WhatsApp)"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#af863e]"
            />
            <textarea
              name="message"
              placeholder="¿Para qué deseas la terapia? (deporte, post-operatorio, bienestar)"
              rows={4}
              value={form.message}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#af863e]"
            />
            <button
              type="submit"
              disabled={sending}
              className="w-full bg-[#af863e] text-white font-bold py-3 rounded-lg hover:bg-[#8f6730] transition"
            >
              {sending ? "Enviando..." : "Solicitar información →"}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}