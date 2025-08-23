import React from 'react';
import EntData from '@/data/departments/layoutA/Ent';
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
      <HeroA hero={EntData.hero} />
      <TextSlider highlightText={EntData.highlightText} />
      <WhyChooseA whyChoose={EntData.whyChoose} />
      <OurTeamA team={EntData.team} />
      <TechnologiesSectionA data={EntData.technologies} />
      {/* <Cta ctaSection={EntData.ctaSection} /> */}
      <TextSlider highlightText={EntData.highlightText} />
      <ComprehensiveServices comprehensiveCare={EntData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ EntData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ EntData.insuranceFinance}/>
      <PatientJourney patientJourney={EntData.patientJourney} />
      <SuccessStories successStories={EntData.successStories} />
      <Faq faqs={EntData.faqs} />
      <AppointmentConsultation appointmentSection={EntData.appointmentSection} />
    </div>
  );
}

export default Page;



