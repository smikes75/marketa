import { getPayload } from 'payload'
import configPromise from '@payload-config'
import {
  Header,
  Announcement,
  Hero,
  AboutSection,
  ServicesSection,
  OfficeHoursSection,
  InsuranceSection,
  BookingForm,
  ContactSection,
  Footer,
} from '@/components'

async function getData() {
  const payload = await getPayload({ config: configPromise })

  const [siteSettings, announcement] = await Promise.all([
    payload.findGlobal({ slug: 'site-settings' }),
    payload.findGlobal({ slug: 'announcement' }),
  ])

  return { siteSettings, announcement }
}

export default async function Home() {
  const { siteSettings, announcement } = await getData()

  // Map office hours from CMS format to component format
  const dayNames: Record<string, string> = {
    monday: 'Pondělí',
    tuesday: 'Úterý',
    wednesday: 'Středa',
    thursday: 'Čtvrtek',
    friday: 'Pátek',
  }

  const officeHours = siteSettings.officeHours?.map((hour: { day: string; from: string; to: string; note?: string }) => ({
    day: dayNames[hour.day] || hour.day,
    hours: `${hour.from} - ${hour.to}`,
    note: hour.note,
  })) || []

  const insurances = siteSettings.insurances?.map((ins: { code: string; name: string }) => ({
    code: ins.code,
    name: ins.name,
  })) || []

  const team = siteSettings.team?.map((member: { name: string; role: string }) => ({
    name: member.name,
    role: member.role,
  })) || []

  const services = siteSettings.services?.map((s: { name: string }) => s.name) || []

  return (
    <>
      <Announcement
        message={announcement.message || ''}
        type={(announcement.type as 'info' | 'warning' | 'error' | 'success') || 'warning'}
        enabled={announcement.enabled ?? false}
      />
      <Header siteName="Praktický lékař s.r.o." />
      <main>
        <Hero
          siteName={siteSettings.siteName}
          subtitle={siteSettings.subtitle}
        />
{/* AboutSection hidden
        <AboutSection
          siteName={siteSettings.siteName}
          description={siteSettings.description}
          team={team}
          services={services}
        />
*/}
        <ServicesSection />
        <OfficeHoursSection />
        <InsuranceSection />
        <BookingForm />
        <ContactSection
          address={siteSettings.address}
          phone={siteSettings.phone}
          email={siteSettings.email}
        />
      </main>
      <Footer
        siteName={siteSettings.siteName}
        subtitle={siteSettings.subtitle}
        address={siteSettings.address}
        phone={siteSettings.phone}
        email={siteSettings.email}
      />
    </>
  )
}
