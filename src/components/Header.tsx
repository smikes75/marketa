'use client'

import { useState } from 'react'
import Link from 'next/link'

interface HeaderProps {
  siteName?: string
}

export function Header({ siteName = 'Praktický lékař s.r.o.' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="bg-white/95 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 transition-transform hover:scale-105">
            <svg className="w-12 h-12 text-primary" viewBox="0 0 100 100" fill="currentColor">
              <rect x="44" y="70" width="12" height="25" fill="#8B7355"/>
              <ellipse cx="50" cy="55" rx="30" ry="20" fill="currentColor"/>
              <ellipse cx="50" cy="40" rx="25" ry="18" fill="currentColor" opacity="0.9"/>
              <ellipse cx="50" cy="28" rx="18" ry="14" fill="currentColor" opacity="0.8"/>
              <ellipse cx="50" cy="18" rx="10" ry="10" fill="currentColor" opacity="0.7"/>
            </svg>
            <div>
              <div className="font-semibold text-primary text-lg leading-tight">{siteName}</div>
              <div className="text-sm text-gray-500">Praktický lékař</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#ordinace" className="text-gray-600 hover:text-primary transition-colors font-medium">O nás</a>
            <a href="#ordinacni-doba" className="text-gray-600 hover:text-primary transition-colors font-medium">Ordinační doba</a>
            <a href="#pojistovny" className="text-gray-600 hover:text-primary transition-colors font-medium">Pojišťovny</a>
            <a href="#kontakt" className="text-gray-600 hover:text-primary transition-colors font-medium">Kontakt</a>
            <a href="#objednat" className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg font-medium transition-colors">
              Objednat se
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4">
            <div className="flex flex-col gap-3">
              <a href="#ordinace" className="text-gray-600 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>O nás</a>
              <a href="#ordinacni-doba" className="text-gray-600 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Ordinační doba</a>
              <a href="#pojistovny" className="text-gray-600 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Pojišťovny</a>
              <a href="#kontakt" className="text-gray-600 hover:text-primary transition-colors font-medium py-2" onClick={() => setMobileMenuOpen(false)}>Kontakt</a>
              <a href="#objednat" className="bg-primary hover:bg-primary-light text-white px-5 py-2.5 rounded-lg font-medium transition-colors text-center" onClick={() => setMobileMenuOpen(false)}>
                Objednat se
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
