interface FooterProps {
  siteName?: string
  subtitle?: string
  address?: {
    street?: string
    city?: string
    zip?: string
  }
  phone?: string
  email?: string
}

export function Footer({
  siteName = 'MUDr. Markéta Plašilová',
  subtitle = 'Praktický lékař pro dospělé',
  address = { street: 'Novosibřinská 111', city: 'Praha 9 - Běchovice', zip: '190 16' },
  phone = '+420 281 970 369',
  email = 'prakticky-lekar@seznam.cz'
}: FooterProps) {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <svg className="w-10 h-10 text-accent" viewBox="0 0 100 100" fill="currentColor">
                {/* Medical cross with heart */}
                <rect x="40" y="20" width="20" height="60" rx="4" fill="currentColor"/>
                <rect x="20" y="40" width="60" height="20" rx="4" fill="currentColor"/>
                <path d="M50 75 C50 75, 35 60, 35 52 C35 46, 42 42, 50 50 C58 42, 65 46, 65 52 C65 60, 50 75, 50 75Z" fill="#1f2937"/>
              </svg>
              <div>
                <div className="font-semibold text-lg">{siteName}</div>
                <div className="text-sm text-gray-400">{subtitle}</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Poskytujeme komplexní zdravotní péči pro dospělé pacienty v příjemném prostředí ordinace v Praze 9.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Rychlé odkazy</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#ordinace" className="hover:text-accent transition-colors">O nás</a></li>
              <li><a href="#ordinacni-doba" className="hover:text-accent transition-colors">Ordinační doba</a></li>
              <li><a href="#pojistovny" className="hover:text-accent transition-colors">Pojišťovny</a></li>
              <li><a href="#kontakt" className="hover:text-accent transition-colors">Kontakt</a></li>
              <li><a href="#objednat" className="hover:text-accent transition-colors">Objednat se</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>{address?.street}</li>
              <li>{address?.zip} {address?.city}</li>
              <li className="pt-2">
                <a href={`tel:${phone?.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">{phone}</a>
              </li>
              <li>
                <a href={`mailto:${email}`} className="hover:text-accent transition-colors">{email}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} {siteName}. Všechna práva vyhrazena.
          </p>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <a href="#" className="hover:text-accent transition-colors">Ochrana osobních údajů</a>
            <span>|</span>
            <a href="#" className="hover:text-accent transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
