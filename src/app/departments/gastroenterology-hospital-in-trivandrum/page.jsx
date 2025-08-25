import React from 'react';
import GastroenterologyData from '@/data/departments/layoutA/Gastroenterology';
import HeroA from '@/components/layouts/layoutA/HeroA';
import WhyChooseA from '@/components/layouts/layoutA/WhyChooseA';
import OurTeamA from '@/components/layouts/layoutA/OurTeamA';
import TechnologiesSectionA from '@/components/layouts/layoutA/TechnologiesSectionA';
import Cta from '@/components/layouts/layoutA/Cta';
import TextSlider from '@/components/layouts/layoutA/TextSlider';
import ComprehensiveServices from '@/components/layouts/layoutA/ComprehensiveServices';
import CommonConditions2 from '@/components/layouts/layoutA/CommonConditions2';
import InsuranceAndFinance from '@/components/layouts/layoutA/InsuranceAndFinance';
import PatientJourney from '@/components/layouts/layoutA/PatientJourney';
import SuccessStories from '@/components/layouts/layoutA/SuccessStories';
import Faq from '@/components/layouts/layoutA/Faq';
import AppointmentConsultation from '@/components/layouts/layoutA/AppointmentConsultation';


// Page component for the Critical Care department
function Page() {
  return (
    <div>
      <HeroA hero={GastroenterologyData.hero} />
      <TextSlider highlightText={GastroenterologyData.highlightText} />
      <WhyChooseA whyChoose={GastroenterologyData.whyChoose} />
      <OurTeamA team={GastroenterologyData.team} />
      <TechnologiesSectionA data={GastroenterologyData.technologies} />
      {/* <Cta ctaSection={GastroenterologyData.ctaSection} /> */}
      <TextSlider highlightText={GastroenterologyData.highlightText} />

      {/* Show first comprehensive care */}
      <ComprehensiveServices comprehensiveCare={GastroenterologyData.comprehensiveCare} />

      {/* Show second comprehensive care */}
      <ComprehensiveServices comprehensiveCare={GastroenterologyData.comprehensiveCare2} />

      <CommonConditions2 scopeOfCare={GastroenterologyData.scopeOfCare} />
      <InsuranceAndFinance insuranceFinance={GastroenterologyData.insuranceFinance}/>
      <PatientJourney patientJourney={GastroenterologyData.patientJourney} />
      <SuccessStories successStories={GastroenterologyData.successStories} />
      <Faq faqs={GastroenterologyData.faqs} />
      <AppointmentConsultation appointmentSection={GastroenterologyData.appointmentSection} />
    </div>
  );
}
export default Page;




