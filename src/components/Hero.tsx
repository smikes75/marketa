import Image from 'next/image'

interface HeroProps {
  siteName?: string
  subtitle?: string
}

export function Hero({ siteName, subtitle }: HeroProps) {
  return (
    <section className="relative min-h-[500px] md:min-h-[600px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=2000&q=80"
          alt="Lékařská ordinace"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-primary-light/70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Vaše zdraví je naší prioritou
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
            {subtitle || 'Komplexní péče o dospělé pacienty v příjemném prostředí ordinace v Praze 9 - Běchovice'}
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
      </div>

      {/* Decorative tree */}
      <div className="absolute right-0 bottom-0 opacity-10 hidden lg:block">
        <svg className="w-96 h-96" viewBox="0 0 100 100" fill="white">
          <rect x="44" y="70" width="12" height="25" fill="white"/>
          <ellipse cx="50" cy="55" rx="30" ry="20"/>
          <ellipse cx="50" cy="40" rx="25" ry="18" opacity="0.9"/>
          <ellipse cx="50" cy="28" rx="18" ry="14" opacity="0.8"/>
          <ellipse cx="50" cy="18" rx="10" ry="10" opacity="0.7"/>
        </svg>
      </div>
    </section>
  )
}
