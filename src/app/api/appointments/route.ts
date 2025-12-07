import { NextRequest, NextResponse } from 'next/server'
import { getPayload } from 'payload'
import configPromise from '@payload-config'

export async function POST(request: NextRequest) {
  try {
    const payload = await getPayload({ config: configPromise })
    const data = await request.json()

    // Basic validation
    if (!data.name || !data.phone || !data.email) {
      return NextResponse.json(
        { error: 'Jméno, telefon a email jsou povinné údaje.' },
        { status: 400 }
      )
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Neplatný formát emailu.' },
        { status: 400 }
      )
    }

    // Phone format validation (Czech format)
    const phoneRegex = /^(\+420)?[\s]?[0-9]{3}[\s]?[0-9]{3}[\s]?[0-9]{3}$/
    const cleanPhone = data.phone.replace(/\s/g, '')
    if (!phoneRegex.test(cleanPhone) && !/^[0-9]{9,15}$/.test(cleanPhone.replace('+', ''))) {
      return NextResponse.json(
        { error: 'Neplatný formát telefonního čísla.' },
        { status: 400 }
      )
    }

    // Create appointment in Payload CMS
    const appointment = await payload.create({
      collection: 'appointments',
      data: {
        name: data.name,
        phone: data.phone,
        email: data.email,
        birthDate: data.birthDate || undefined,
        preferredDate: data.preferredDate || undefined,
        preferredTime: data.preferredTime || undefined,
        reason: data.reason || undefined,
        status: 'new',
      },
    })

    // TODO: Send email notification to clinic
    // TODO: Send confirmation email to patient

    return NextResponse.json(
      {
        success: true,
        message: 'Žádost o termín byla úspěšně odeslána.',
        id: appointment.id
      },
      { status: 201 }
    )
  } catch (error) {
    console.error('Error creating appointment:', error)
    return NextResponse.json(
      { error: 'Nastala chyba při odesílání žádosti. Zkuste to prosím znovu.' },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}
