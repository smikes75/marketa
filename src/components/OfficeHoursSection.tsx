interface OfficeHour {
  day: string
  hours: string
  note?: string
}

interface OfficeHoursSectionProps {
  hours?: OfficeHour[]
  note?: string
}

const defaultHours: OfficeHour[] = [
  { day: 'Pondělí', hours: '7:00 - 12:30' },
  { day: 'Úterý', hours: '7:00 - 12:30' },
  { day: 'Středa', hours: '12:00 - 18:00' },
  { day: 'Čtvrtek', hours: '7:00 - 12:30' },
  { day: 'Pátek', hours: '7:00 - 12:30' },
]

export function OfficeHoursSection({
  hours,
  note = 'Doporučujeme objednání předem. Akutní pacienti jsou přijímáni bez objednání dle aktuálních možností ordinace.'
}: OfficeHoursSectionProps) {
  const displayHours = hours && hours.length > 0 ? hours : defaultHours

  return (
    <section id="ordinacni-doba" className="py-20 bg-sky-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Kdy nás najdete</span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">Ordinační doba</h2>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="divide-y divide-gray-100">
              {displayHours.map((hour, index) => (
                <div key={index} className="flex items-center justify-between px-6 py-5 hover:bg-gray-50 transition-colors">
                  <span className="font-medium text-gray-900">{hour.day}</span>
                  <span className="text-gray-600">{hour.hours}</span>
                </div>
              ))}
            </div>

            {note && (
              <div className="bg-primary/5 px-6 py-4 border-t border-gray-100">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  <p className="text-sm text-gray-600">{note}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
