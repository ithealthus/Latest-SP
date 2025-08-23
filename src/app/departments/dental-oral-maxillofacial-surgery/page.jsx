import React from 'react';
import dentalOralMaxillofacialSurgeryData from '@/data/departments/layoutA/DentalOral&MaxillofacialSurgery';
import HeroA from '@/components/layouts/layoutA/HeroA';
import WhyChooseA from '@/components/layouts/layoutA/WhyChooseA';
import OurTeamA from '@/components/layouts/layoutA/OurTeamA';
import TechnologiesSectionA from '@/components/layouts/layoutA/TechnologiesSectionA';
import Cta from '@/components/layouts/layoutA/Cta';
import TextSlider from '@/components/layouts/layoutA/TextSlider';
import ComprehensiveServices from '@/components/layouts/layoutA/ComprehensiveServices';
import CommonConditions from '@/components/layouts/layoutA/CommonConditions';
import InsuranceAndFinance from '@/components/layouts/layoutA/InsuranceAndFinance';
import PatientJourney from '@/components/layouts/layoutA/PatientJourney';
import SuccessStories from '@/components/layouts/layoutA/SuccessStories';
import Faq from '@/components/layouts/layoutA/Faq';
import AppointmentConsultation from '@/components/layouts/layoutA/AppointmentConsultation';

// Page component for the Critical Care department
function Page(hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare ,insuranceFinance ,patientJourney, successStories, faqs, appointmentSection) {
  return (
    <div>
      <HeroA hero={dentalOralMaxillofacialSurgeryData.hero} />
      <TextSlider highlightText={dentalOralMaxillofacialSurgeryData.highlightText} />
      <WhyChooseA whyChoose={dentalOralMaxillofacialSurgeryData.whyChoose} />
      <OurTeamA team={dentalOralMaxillofacialSurgeryData.team} />
      <TechnologiesSectionA data={dentalOralMaxillofacialSurgeryData.technologies} />
      {/* <Cta ctaSection={dentalOralMaxillofacialSurgeryData.ctaSection} /> */}
      <TextSlider highlightText={dentalOralMaxillofacialSurgeryData.highlightText} />
      <ComprehensiveServices comprehensiveCare={dentalOralMaxillofacialSurgeryData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ dentalOralMaxillofacialSurgeryData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ dentalOralMaxillofacialSurgeryData.insuranceFinance}/>
      <PatientJourney patientJourney={dentalOralMaxillofacialSurgeryData.patientJourney} />
      <SuccessStories successStories={dentalOralMaxillofacialSurgeryData.successStories} />
      <Faq faqs={dentalOralMaxillofacialSurgeryData.faqs} />
      <AppointmentConsultation appointmentSection={dentalOralMaxillofacialSurgeryData.appointmentSection} />
    </div>
  );
}

export default Page;



