import CareHelpSection from '@/components/HospitalFacilities/CareHelpSection'
import HospitalFacilitiesHero from '@/components/HospitalFacilities/HospitalFacilitiesHero'
import Technology from '@/components/HospitalFacilities/Technology'
import VitalsCheck from '@/components/HospitalFacilities/VitalsCheck'
import React from 'react'

const hospital = () => {
  return (
    <>
      <HospitalFacilitiesHero />
      <Technology />
      <VitalsCheck />
      <CareHelpSection />
    </>
  )
}

export default hospital