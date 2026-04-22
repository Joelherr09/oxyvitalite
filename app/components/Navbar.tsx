"use client";

import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaTimes } from 'react-icons/fa'
import { useState } from 'react'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="bg-verde-oxy text-white py-4 px-6 md:px-12 sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" alt="OxyVitalité Logo" width={50} height={50} className="h-12 w-auto" />
          <span className="font-bold text-xl">OxyVitalité Wellness</span>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          <Link href="#beneficios" className="hover:text-dorado-oxy transition">Beneficios</Link>
          <Link href="#servicios" className="hover:text-dorado-oxy transition">¿Para quién?</Link>
          <Link href="#galeria" className="hover:text-dorado-oxy transition">Galería</Link>
          <Link href="#contacto" className="hover:text-dorado-oxy transition">Contacto</Link>
        </div>
        
        <button className="hidden md:block bg-dorado-oxy px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition">
          Reserva tu cupo
        </button>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-dorado-oxy">
          <div className="flex flex-col gap-4">
            <Link href="#beneficios" className="hover:text-dorado-oxy transition" onClick={() => setIsMenuOpen(false)}>Beneficios</Link>
            <Link href="#servicios" className="hover:text-dorado-oxy transition" onClick={() => setIsMenuOpen(false)}>¿Para quién?</Link>
            <Link href="#galeria" className="hover:text-dorado-oxy transition" onClick={() => setIsMenuOpen(false)}>Galería</Link>
            <Link href="#contacto" className="hover:text-dorado-oxy transition" onClick={() => setIsMenuOpen(false)}>Contacto</Link>
            <button className="bg-dorado-oxy px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition w-full">
              Reserva tu cupo
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}