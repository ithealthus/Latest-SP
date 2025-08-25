import React from 'react';
import CriticalCare from '@/data/departments/layoutA/CriticalCare';
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
      <HeroA hero={CriticalCare.hero} />
      <TextSlider highlightText={CriticalCare.highlightText} />
      <WhyChooseA whyChoose={CriticalCare.whyChoose} />
      <OurTeamA team={CriticalCare.team} />
      <TechnologiesSectionA data={CriticalCare.technologies} />
      {/* <Cta ctaSection={CriticalCare.ctaSection} /> */}
      <TextSlider highlightText={CriticalCare.highlightText} />
      <ComprehensiveServices comprehensiveCare={CriticalCare.comprehensiveCare} />
      <CommonConditions scopeOfCare={ CriticalCare.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ CriticalCare.insuranceFinance}/>
      <PatientJourney patientJourney={CriticalCare.patientJourney} />
      <SuccessStories successStories={CriticalCare.successStories} />
      <Faq faqs={CriticalCare.faqs} />
      <AppointmentConsultation appointmentSection={CriticalCare.appointmentSection} />
    </div>
  );
}

export default Page;
