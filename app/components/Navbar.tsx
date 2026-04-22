"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)

  // Evitar hidratación incorrecta
  useEffect(() => {
    setMounted(true)
  }, [])

  // Cerrar menú al hacer clic en un enlace
  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    setIsMenuOpen(false)
    
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  if (!mounted) return null

  return (
    <nav className="bg-verde-oxy text-white py-4 px-6 md:px-12 sticky top-0 z-5000 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="OxyVitalité Logo" width={50} height={50} className="h-12 w-auto" />
          <span className="font-bold text-xl">OxyVitalité Wellness</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <a href="#beneficios" className="hover:text-dorado-oxy transition" onClick={(e) => handleLinkClick(e, '#beneficios')}>Beneficios</a>
          <a href="#servicios" className="hover:text-dorado-oxy transition" onClick={(e) => handleLinkClick(e, '#servicios')}>¿Para quién?</a>
          <a href="#galeria" className="hover:text-dorado-oxy transition" onClick={(e) => handleLinkClick(e, '#galeria')}>Galería</a>
          <a href="#mapa" className="hover:text-dorado-oxy transition" onClick={(e) => handleLinkClick(e, '#mapa')}>Ubicación</a>
          <a href="#contacto" className="hover:text-dorado-oxy transition" onClick={(e) => handleLinkClick(e, '#contacto')}>Contacto</a>
        </div>
        
        <button 
          className="hidden md:block bg-dorado-oxy px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          onClick={() => handleLinkClick(new MouseEvent('click') as any, '#contacto')}
        >
          Reserva tu cupo
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl z-50 relative"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Menú"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu con animación suave */}
      <div 
        className={`
          md:hidden fixed top-0 left-0 w-full h-screen bg-verde-oxy z-40
          transition-all duration-500 ease-in-out
          ${isMenuOpen 
            ? 'opacity-100 visible translate-x-0' 
            : 'opacity-0 invisible translate-x-full'
          }
        `}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8 text-xl">
          <a 
            href="#beneficios" 
            className="hover:text-dorado-oxy transition transform hover:scale-110"
            onClick={(e) => handleLinkClick(e, '#beneficios')}
          >
            Beneficios
          </a>
          <a 
            href="#servicios" 
            className="hover:text-dorado-oxy transition transform hover:scale-110"
            onClick={(e) => handleLinkClick(e, '#servicios')}
          >
            ¿Para quién?
          </a>
          <a 
            href="#galeria" 
            className="hover:text-dorado-oxy transition transform hover:scale-110"
            onClick={(e) => handleLinkClick(e, '#galeria')}
          >
            Galería
          </a>
          <a 
            href="#mapa" 
            className="hover:text-dorado-oxy transition transform hover:scale-110"
            onClick={(e) => handleLinkClick(e, '#mapa')}
          >
            Ubicación
          </a>
          <a 
            href="#contacto" 
            className="hover:text-dorado-oxy transition transform hover:scale-110"
            onClick={(e) => handleLinkClick(e, '#contacto')}
          >
            Contacto
          </a>
          <button 
            className="bg-dorado-oxy px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition mt-4"
            onClick={() => handleLinkClick(new MouseEvent('click') as any, '#contacto')}
          >
            Reserva tu cupo
          </button>
        </div>
      </div>
    </nav>
  )
}