interface HeroProps {
  siteName?: string
  subtitle?: string
}

export function Hero({ siteName, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-light"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text content - left side */}
          <div className="text-white">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 leading-tight">
              MUDr. Markéta Plašilová
            </h1>
            <p className="text-2xl md:text-3xl text-white/90 mb-6">
              Bc. Martina Fialová – Zdravotní sestra
            </p>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Zajišťujeme komplexní péči v oboru všeobecné lékařství pro dospělé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="#objednat" className="bg-white text-primary hover:bg-gray-100 px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center shadow-lg">
                Objednat se online
              </a>
              <a href="#kontakt" className="border-2 border-white text-white hover:bg-white/10 px-8 py-4 rounded-xl font-semibold text-lg transition-colors text-center">
                Kontaktujte nás
              </a>
            </div>
          </div>

          {/* Phone and logo - right side */}
          <div className="hidden md:flex flex-col justify-center items-center gap-8">
            <a href="tel:+420281970369" className="text-3xl lg:text-4xl font-bold text-white hover:text-white/80 transition-colors">
              +420 281 970 369
            </a>
            <div className="relative">
              <svg className="w-48 h-48 lg:w-64 lg:h-64 text-white/20" viewBox="0 0 100 100" fill="currentColor">
                <rect x="40" y="20" width="20" height="60" rx="4" fill="currentColor"/>
                <rect x="20" y="40" width="60" height="20" rx="4" fill="currentColor"/>
                <path d="M50 75 C50 75, 35 60, 35 52 C35 46, 42 42, 50 50 C58 42, 65 46, 65 52 C65 60, 50 75, 50 75Z" fill="white" opacity="0.3"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative medical cross */}
      <div className="absolute left-0 bottom-0 opacity-10 hidden lg:block">
        <svg className="w-48 h-48" viewBox="0 0 100 100" fill="white">
          <rect x="40" y="10" width="20" height="80" rx="4"/>
          <rect x="10" y="40" width="80" height="20" rx="4"/>
        </svg>
      </div>
    </section>
  )
}
