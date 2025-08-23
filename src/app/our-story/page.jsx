import React from 'react'
import OurStoryMain from "@/components/ourStory/OurStoryMain"
import OurJourney from '@/components/ourStory/OurJourney'
import CoreValuesAccordion from '@/components/ourStory/CoreValuesAccordion'
import LeadershipSection from '@/components/ourStory/LeadershipSection'
import Infrastructure from '@/components/ourStory/Infrastructure'
import MedifortTeam from '@/components/ourStory/MedifortTeam'
import AwardsSection from '@/components/ourStory/AwardsSection'
import CSRSection from '@/components/ourStory/CSRSection'
import HospitalGroup from '@/components/ourStory/HospitalGroup'

const Page = () => {
  return (
    <>
      <OurStoryMain />
      <OurJourney />
      <CoreValuesAccordion />
      <LeadershipSection />
      <Infrastructure />
      <MedifortTeam />
      <AwardsSection />
      <CSRSection />
      <HospitalGroup />
    </>
  )
}

export default Page