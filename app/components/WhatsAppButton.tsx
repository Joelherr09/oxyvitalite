import { MessageCircle } from 'lucide-react'

export default function WhatsAppButton() {
  const phoneNumber = "569XXXXXXXX" // Cambia por el número real
  const message = "Hola, vengo de su página web. Me interesa reservar una sesión de oxigenación hiperbárica."
  
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`
  
  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition z-50"
    >
      <MessageCircle size={28} />
    </a>
  )
}