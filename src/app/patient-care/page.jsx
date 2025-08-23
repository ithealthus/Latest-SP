import Admission from '@/components/PatientCare/Admission'
import CareHelpSection from '@/components/PatientCare/CareHelpSection'
import FAQ from '@/components/PatientCare/FAQ'
import Insurance from '@/components/PatientCare/Insurance'
import International from '@/components/PatientCare/International'
import OpdIpdGuideline from '@/components/PatientCare/OpdIpdGuideline'
import PatientCareHero from '@/components/PatientCare/PatientCareHero'
import Technology from '@/components/PatientCare/Technology'
import Telemedicine from '@/components/PatientCare/Telemedicine'
import VitalsCheck from '@/components/PatientCare/VitalsCheck'
import React from 'react'

const patientCare = () => {

  return (
    <>
      <PatientCareHero />
      <OpdIpdGuideline />
      <Admission />
      <Insurance />
      <International />
      <VitalsCheck />
      <Technology />
      <Telemedicine />
      <FAQ />
      <CareHelpSection />
    </>

  )
}

export default patientCare