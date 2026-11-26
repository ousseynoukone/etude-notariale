import AppointmentBand from '@/components/AppointmentBand/AppointmentBand'
import DomainsOverview from '@/components/home/DomainsOverview'
import Hero from '@/components/home/Hero'
import IntroSection from '@/components/home/IntroSection'
import LatestListings from '@/components/home/LatestListings'
import RoleBand from '@/components/home/RoleBand'
import TeamPreview from '@/components/home/TeamPreview'

export default function HomePage() {
  return (
    <>
      <Hero />
      <IntroSection />
      <DomainsOverview />
      <RoleBand />
      <LatestListings />
      <TeamPreview />
      <AppointmentBand />
    </>
  )
}
