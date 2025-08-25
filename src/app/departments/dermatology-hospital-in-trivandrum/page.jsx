import React from 'react';
import DermatologyData from '@/data/departments/layoutA/Dermatology';
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
      <HeroA hero={DermatologyData.hero} />
      <TextSlider highlightText={DermatologyData.highlightText} />
      <WhyChooseA whyChoose={DermatologyData.whyChoose} />
      <OurTeamA team={DermatologyData.team} />
      <TechnologiesSectionA data={DermatologyData.technologies} />
      {/* <Cta ctaSection={DermatologyData.ctaSection} /> */}
      <TextSlider highlightText={DermatologyData.highlightText} />
      <ComprehensiveServices comprehensiveCare={DermatologyData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ DermatologyData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ DermatologyData.insuranceFinance}/>
      <PatientJourney patientJourney={DermatologyData.patientJourney} />
      <SuccessStories successStories={DermatologyData.successStories} />
      <Faq faqs={DermatologyData.faqs} />
      <AppointmentConsultation appointmentSection={DermatologyData.appointmentSection} />
    </div>
  );
}

export default Page;



