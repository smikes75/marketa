const services = [
  {
    name: 'CRP',
    description: 'Stanovení C-reaktivního proteinu',
  },
  {
    name: 'FOB test',
    description: 'Vyšetření skrytého krvácení do stolice',
  },
  {
    name: 'Glukometr',
    description: 'Vyšetření hladiny krevního cukru glukometrem',
  },
  {
    name: 'Strep A test',
    description: 'Rychlá diagnostika streptokoka - bakterie vyvolávající angínu a spálu',
  },
  {
    name: 'Vyšetření INR',
    description: 'Vyšetření při léčbě Warfarinem',
  },
  {
    name: 'EKG',
    description: 'Elektrokardiografické vyšetření srdce',
  },
]

export function ServicesSection() {
  return (
    <section id="sluzby" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Co nabízíme</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">V naší ordinaci provádíme</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div key={index} className="bg-sky-light rounded-xl p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">{service.name}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional services */}
        <div className="mt-12 max-w-3xl mx-auto">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="font-semibold text-gray-900 mb-4 text-center">Dále nabízíme</h3>
            <div className="grid sm:grid-cols-3 gap-4 text-center">
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-gray-700 font-medium">Pracovně lékařské prohlídky</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-gray-700 font-medium">Preventivní prohlídky</span>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-sm">
                <span className="text-gray-700 font-medium">Očkování</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
