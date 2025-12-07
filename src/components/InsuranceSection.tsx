interface Insurance {
  code: string
  name: string
}

interface InsuranceSectionProps {
  insurances?: Insurance[]
}

const defaultInsurances: Insurance[] = [
  { code: '111', name: 'VZP' },
  { code: '201', name: 'VOZP' },
  { code: '205', name: 'ČPZP' },
  { code: '207', name: 'OZP' },
  { code: '209', name: 'ZPŠ' },
  { code: '211', name: 'ZPMV' },
  { code: '213', name: 'RBP' },
]

export function InsuranceSection({ insurances }: InsuranceSectionProps) {
  const displayInsurances = insurances && insurances.length > 0 ? insurances : defaultInsurances
  return (
    <section id="pojistovny" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Smluvní partneři</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Pojišťovny</h2>
          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            Máme uzavřeny smlouvy se všemi zdravotními pojišťovnami působícími v České republice.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 max-w-5xl mx-auto">
          {displayInsurances.map((insurance, index) => (
            <div key={index} className="bg-sky-light rounded-xl p-4 flex flex-col items-center justify-center aspect-square hover:shadow-md transition-shadow">
              <div className="text-2xl font-bold text-primary">{insurance.code}</div>
              <div className="text-xs text-gray-500 text-center mt-1">{insurance.name}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
