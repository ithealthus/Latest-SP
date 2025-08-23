import React from 'react';
import LaryngologyData from '@/data/departments/layoutA/Laryngology';
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
      <HeroA hero={LaryngologyData.hero} />
      <TextSlider highlightText={LaryngologyData.highlightText} />
      <WhyChooseA whyChoose={LaryngologyData.whyChoose} />
      <OurTeamA team={LaryngologyData.team} />
      <TechnologiesSectionA data={LaryngologyData.technologies} />
      {/* <Cta ctaSection={LaryngologyData.ctaSection} /> */}
      <TextSlider highlightText={LaryngologyData.highlightText} />
      <ComprehensiveServices comprehensiveCare={LaryngologyData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ LaryngologyData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ LaryngologyData.insuranceFinance}/>
      <PatientJourney patientJourney={LaryngologyData.patientJourney} />
      <SuccessStories successStories={LaryngologyData.successStories} />
      <Faq faqs={LaryngologyData.faqs} />
      <AppointmentConsultation appointmentSection={LaryngologyData.appointmentSection} />
    </div>
  );
}

export default Page;



