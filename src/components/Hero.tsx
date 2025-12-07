import Image from 'next/image'

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
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              MUDr. Markéta Plašilová
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
              Zajišťujeme komplexní péči v oboru všeobecné lékařství pro dospělé.
            </p>

            {/* Team info */}
            <p className="text-white/90 mb-8">
              <span className="font-semibold">Bc. Martina Fialová</span> – Zdravotní sestra
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

          {/* Image - right side */}
          <div className="hidden md:flex justify-center items-center">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <Image
                src="https://images.unsplash.com/photo-1584982751601-97dcc096659c?auto=format&fit=crop&w=800&q=80"
                alt="Fonendoskop"
                fill
                className="object-cover rounded-full shadow-2xl"
                priority
              />
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-white/30"></div>
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
