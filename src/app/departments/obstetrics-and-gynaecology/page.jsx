import React from 'react';
import ObstetricsGynaecologyData from '@/data/departments/layoutA/ObstetricsGynaecology';
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
function Page() {
  return (
    <div>
      <HeroB hero={ObstetricsGynaecologyData.hero} />
      <TextSlider highlightText={ObstetricsGynaecologyData.highlightText} />
      <WhyChooseA whyChoose={ObstetricsGynaecologyData.whyChoose} />
      <OurTeamA team={ObstetricsGynaecologyData.team} />
      <TechnologiesSectionA data={ObstetricsGynaecologyData.technologies} />
      {/* <Cta ctaSection={ObstetricsGynaecologyData.ctaSection} /> */}
      <TextSlider highlightText={ObstetricsGynaecologyData.highlightText} />

      {/* Show first comprehensive care */}
      <ComprehensiveServices comprehensiveCare={ObstetricsGynaecologyData.comprehensiveCare} />

      {/* Show second comprehensive care */}
      

      <CommonConditions scopeOfCare={ObstetricsGynaecologyData.scopeOfCare} />
      <InsuranceAndFinance insuranceFinance={ObstetricsGynaecologyData.insuranceFinance}/>
      <PatientJourney patientJourney={ObstetricsGynaecologyData.patientJourney} />
      <SuccessStories successStories={ObstetricsGynaecologyData.successStories} />
      <Faq faqs={ObstetricsGynaecologyData.faqs} />
      <AppointmentConsultation appointmentSection={ObstetricsGynaecologyData.appointmentSection} />
    </div>
  );
}
export default Page;




