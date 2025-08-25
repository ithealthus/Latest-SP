import React from 'react';
import AnesthesiologyData from '@/data/departments/layoutA/Anesthesiology';
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
function Page(hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare ,insuranceFinance ,patientJourney, successStories, faqs, appointmentSection) {
  return (
    <div>
      <HeroA hero={AnesthesiologyData.hero} />
      <TextSlider highlightText={AnesthesiologyData.highlightText} />
      <WhyChooseA whyChoose={AnesthesiologyData.whyChoose} />
      <OurTeamA team={AnesthesiologyData.team} />
      <TechnologiesSectionA data={AnesthesiologyData.technologies} />
      {/* <Cta ctaSection={AnesthesiologyData.ctaSection} /> */}
      <TextSlider highlightText={AnesthesiologyData.highlightText} />
      <ComprehensiveServices comprehensiveCare={AnesthesiologyData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ AnesthesiologyData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={AnesthesiologyData.insuranceFinance}/>
      <PatientJourney patientJourney={AnesthesiologyData.patientJourney} />
      <SuccessStories successStories={AnesthesiologyData.successStories} />
      <Faq faqs={AnesthesiologyData.faqs} />
      <AppointmentConsultation appointmentSection={AnesthesiologyData.appointmentSection} />
    </div>
  );
}

export default Page;
