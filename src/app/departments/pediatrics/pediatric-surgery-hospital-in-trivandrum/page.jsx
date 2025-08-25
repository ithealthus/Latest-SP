import React from 'react';

import PediatricSurgery from '@/data/departments/layoutB/PaediatricSurgery';
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
      <HeroB hero={PediatricSurgery.hero} />
      <TextSlider highlightText={PediatricSurgery.highlightText} />
      <WhyChooseA whyChoose={PediatricSurgery.whyChoose} />
      <OurTeamA team={PediatricSurgery.team} />
      <TechnologiesSectionA data={PediatricSurgery.technologies} />
      {/* <Cta ctaSection={PediatricSurgery.ctaSection} /> */}
      <TextSlider highlightText={PediatricSurgery.highlightText} />
      <ComprehensiveServices comprehensiveCare={PediatricSurgery.comprehensiveCare} />
      <CommonConditions scopeOfCare={ PediatricSurgery.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ PediatricSurgery.insuranceFinance}/>
      <PatientJourney patientJourney={PediatricSurgery.patientJourney} />
      <SuccessStories successStories={PediatricSurgery.successStories} />
      <Faq faqs={PediatricSurgery.faqs} />
      <AppointmentConsultation appointmentSection={PediatricSurgery.appointmentSection} />
    </div>
  );
}

export default Page;




