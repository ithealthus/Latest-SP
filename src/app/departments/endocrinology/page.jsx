import React from 'react';
import EndocrinologyData from '@/data/departments/layoutA/Endocrinology';
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
      <HeroA hero={EndocrinologyData.hero} />
      <TextSlider highlightText={EndocrinologyData.highlightText} />
      <WhyChooseA whyChoose={EndocrinologyData.whyChoose} />
      <OurTeamA team={EndocrinologyData.team} />
      <TechnologiesSectionA data={EndocrinologyData.technologies} />
      {/* <Cta ctaSection={EndocrinologyData.ctaSection} /> */}
      <TextSlider highlightText={EndocrinologyData.highlightText} />
      <ComprehensiveServices comprehensiveCare={EndocrinologyData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ EndocrinologyData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ EndocrinologyData.insuranceFinance}/>
      <PatientJourney patientJourney={EndocrinologyData.patientJourney} />
      <SuccessStories successStories={EndocrinologyData.successStories} />
      <Faq faqs={EndocrinologyData.faqs} />
      <AppointmentConsultation appointmentSection={EndocrinologyData.appointmentSection} />
    </div>
  );
}

export default Page;




