'use client'

import { useState } from 'react'

export function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = {
      name: formData.get('name'),
      phone: formData.get('phone'),
      email: formData.get('email'),
      birthDate: formData.get('birthdate'),
      preferredDate: formData.get('preferred-date'),
      preferredTime: formData.get('preferred-time'),
      reason: formData.get('reason'),
    }

    try {
      const response = await fetch('/api/appointments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitted(true)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <section id="objednat" className="py-20 bg-gradient-to-br from-primary to-primary-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-8 text-center">
              <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Děkujeme za vaši žádost</h3>
              <p className="text-gray-600">Budeme vás kontaktovat pro potvrzení termínu.</p>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="objednat" className="py-20 bg-gradient-to-br from-primary to-primary-light">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <span className="text-sky-light font-semibold text-sm uppercase tracking-wider">Rezervace termínu</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Objednejte se online</h2>
            <p className="text-white/80 mt-4">
              Vyplňte formulář a my vás budeme kontaktovat pro potvrzení termínu.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Jméno a příjmení *</label>
                <input type="text" id="name" name="name" required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="Jan Novák"/>
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Telefon *</label>
                <input type="tel" id="phone" name="phone" required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="+420 123 456 789"/>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">E-mail *</label>
                <input type="email" id="email" name="email" required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"
                  placeholder="jan.novak@email.cz"/>
              </div>

              <div>
                <label htmlFor="birthdate" className="block text-sm font-medium text-gray-700 mb-2">Datum narození</label>
                <input type="date" id="birthdate" name="birthdate"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"/>
              </div>

              <div>
                <label htmlFor="preferred-date" className="block text-sm font-medium text-gray-700 mb-2">Preferovaný termín</label>
                <input type="date" id="preferred-date" name="preferred-date"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors"/>
              </div>

              <div>
                <label htmlFor="preferred-time" className="block text-sm font-medium text-gray-700 mb-2">Preferovaný čas</label>
                <select id="preferred-time" name="preferred-time"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors">
                  <option value="">Vyberte čas</option>
                  <option value="morning">Dopoledne (7:00 - 12:00)</option>
                  <option value="afternoon">Odpoledne (12:00 - 18:00)</option>
                  <option value="any">Kdykoli</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-2">Důvod návštěvy</label>
              <textarea id="reason" name="reason" rows={4}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
                placeholder="Popište prosím důvod vaší návštěvy..."></textarea>
            </div>

            <div className="mt-6">
              <label className="flex items-start gap-3 cursor-pointer">
                <input type="checkbox" required
                  className="mt-1 w-4 h-4 text-primary border-gray-300 rounded focus:ring-primary"/>
                <span className="text-sm text-gray-600">
                  Souhlasím se zpracováním osobních údajů za účelem objednání k lékaři.
                  Vaše údaje budou použity pouze pro tento účel a nebudou poskytnuty třetím stranám.
                </span>
              </label>
            </div>

            <div className="mt-8">
              <button type="submit" disabled={isSubmitting}
                className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-4 px-8 rounded-xl transition-colors text-lg disabled:opacity-50">
                {isSubmitting ? 'Odesílám...' : 'Odeslat žádost o termín'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
