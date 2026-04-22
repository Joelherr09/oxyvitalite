import { FaInstagram, FaEnvelope, FaPhone, FaWhatsapp, FaMapMarkedAlt, FaMapMarkerAlt } from 'react-icons/fa'
import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-verde-oxy text-white py-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center gap-3">
            <Image src="/logo-hero.png" alt="OxyVitalité Logo" width={1000} height={400} className="h-12 w-auto" />
          </div>
          <p>Oxigenación hiperbárica de alto nivel</p>
            <p className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-dorado-oxy mt-1 flex-shrink-0" /> 
              <span className="text-sm">
                Los Perales Edif 2 0679 DP 902<br />
                Serena Pacífico, La Serena, Chile
              </span>
            </p>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">Enlaces rápidos</h3>
          <ul className="space-y-2">
            <li><Link href="#beneficios" className="hover:text-dorado-oxy transition">Beneficios</Link></li>
            <li><Link href="#servicios" className="hover:text-dorado-oxy transition">¿Para quién?</Link></li>
            <li><Link href="#galeria" className="hover:text-dorado-oxy transition">Galería</Link></li>
            <li><Link href="#contacto" className="hover:text-dorado-oxy transition">Contacto</Link></li>
          </ul>
        </div>
        
        <div>
          <h3 className="font-bold mb-3">Contáctanos</h3>
          <div className="space-y-2">
            <p className="flex items-center gap-2">
              <FaInstagram className="text-dorado-oxy" /> 
              <a href="https://instagram.com/oxyvitalite" target="_blank" rel="noopener noreferrer" className="hover:text-dorado-oxy transition">
                @oxyvitalite
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope className="text-dorado-oxy" /> 
              <a href="mailto:oxyvitalitewellness@gmail.com" className="hover:text-dorado-oxy transition">           
                oxyvitalitewellness@gmail.com
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaPhone className="text-dorado-oxy" /> 
              <a href="tel:+56975845700" className="hover:text-dorado-oxy transition">
                +56 9 7584 5700
              </a>
            </p>
            <p className="flex items-center gap-2">
              <FaWhatsapp className="text-green-400" /> 
              <a href="https://wa.me/56975845700" target="_blank" rel="noopener noreferrer" className="hover:text-dorado-oxy transition">
                Escríbenos por WhatsApp
              </a>
            </p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-dorado-oxy mt-6 pt-4 text-center text-sm opacity-75">
        © 2024 OxyVitalité Wellness - Todos los derechos reservados
      </div>
    </footer>
  )
}