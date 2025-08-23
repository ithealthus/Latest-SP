import React from 'react';
import GeneralSurgery from '@/data/departments/layoutA/GeneralSurgery';
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
      <HeroA hero={GeneralSurgery.hero} />
      <TextSlider highlightText={GeneralSurgery.highlightText} />
      <WhyChooseA whyChoose={GeneralSurgery.whyChoose} />
      <OurTeamA team={GeneralSurgery.team} />
      <TechnologiesSectionA data={GeneralSurgery.technologies} />
      {/* <Cta ctaSection={GeneralSurgery.ctaSection} /> */}
      <TextSlider highlightText={GeneralSurgery.highlightText} />
      <ComprehensiveServices comprehensiveCare={GeneralSurgery.comprehensiveCare} />
      <CommonConditions scopeOfCare={ GeneralSurgery.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ GeneralSurgery.insuranceFinance}/>
      <PatientJourney patientJourney={GeneralSurgery.patientJourney} />
      <SuccessStories successStories={GeneralSurgery.successStories} />
      <Faq faqs={GeneralSurgery.faqs} />
      <AppointmentConsultation appointmentSection={GeneralSurgery.appointmentSection} />
    </div>
  );
}

export default Page;



