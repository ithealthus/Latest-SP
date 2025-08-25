import React from 'react';

import Pediatrics from '@/data/departments/layoutB/Pediatrics';
import HeroB from '@/components/layouts/layoutB/HeroB';
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
      <HeroB hero={Pediatrics.hero} />
      <TextSlider highlightText={Pediatrics.highlightText} />
      <WhyChooseA whyChoose={Pediatrics.whyChoose} />
      <OurTeamA team={Pediatrics.team} />
      <TechnologiesSectionA data={Pediatrics.technologies} />
      {/* <Cta ctaSection={Pediatrics.ctaSection} /> */}
      <TextSlider highlightText={Pediatrics.highlightText} />
      <ComprehensiveServices comprehensiveCare={Pediatrics.comprehensiveCare} />
      <CommonConditions scopeOfCare={ Pediatrics.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ Pediatrics.insuranceFinance}/>
      <PatientJourney patientJourney={Pediatrics.patientJourney} />
      <SuccessStories successStories={Pediatrics.successStories} />
      <Faq faqs={Pediatrics.faqs} />
      <AppointmentConsultation appointmentSection={Pediatrics.appointmentSection} />
    </div>
  );
}

export default Page;




