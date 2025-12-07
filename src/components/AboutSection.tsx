interface TeamMember {
  name: string
  role: string
}

interface AboutSectionProps {
  siteName?: string
  description?: string
  team?: TeamMember[]
  services?: string[]
}

const defaultTeam: TeamMember[] = [
  { name: 'MUDr. Markéta Plašilová', role: 'Praktický lékař' },
  { name: 'Bc. Martina Fialová', role: 'Zdravotní sestra' },
]

const defaultServices: string[] = [
  'Pracovně lékařské prohlídky',
  'Preventivní prohlídky',
  'Očkování',
  'CRP',
  'FOB test',
  'Glukometr',
  'Strep A test',
  'Vyšetření INR',
  'EKG',
]

export function AboutSection({
  siteName = 'MUDr. Markéta Plašilová',
  description,
  team,
  services,
}: AboutSectionProps) {
  const displayTeam = team && team.length > 0 ? team : defaultTeam
  const displayServices = services && services.length > 0 ? services : defaultServices

  return (
    <section id="ordinace" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-sky-light to-sky overflow-hidden shadow-lg">
              <div className="absolute inset-0 flex items-center justify-center text-primary/40">
                <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </div>
            </div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <span className="text-primary font-semibold text-sm uppercase tracking-wider">O naší ordinaci</span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2 mb-6">
              {siteName}
            </h2>
            <div className="prose prose-lg text-gray-600 space-y-4">
              {description ? (
                <p>{description}</p>
              ) : (
                <p>
                  Zajišťujeme komplexní péči v oboru všeobecné lékařství pro dospělé.
                </p>
              )}
            </div>

            {/* Team info */}
            <div className="mt-8 p-6 bg-sky-light rounded-xl">
              <h3 className="font-semibold text-gray-900 mb-4">Náš tým</h3>
              <div className="space-y-3">
                {displayTeam.map((member, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-medium text-gray-900">{member.name}</div>
                      <div className="text-sm text-gray-500">{member.role}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Services list */}
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {displayServices.map((service, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                    </svg>
                  </div>
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
