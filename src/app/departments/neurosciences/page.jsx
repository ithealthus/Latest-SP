import React from 'react';
import Neuroscience from '@/data/departments/layoutB/Neuroscience';
import HeroB from '@/components/layouts/layoutB/HeroB';
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
      <HeroB hero={Neuroscience.hero} />
      <TextSlider highlightText={Neuroscience.highlightText} />
      <WhyChooseA whyChoose={Neuroscience.whyChoose} />
      <OurTeamA team={Neuroscience.team} />
      <TechnologiesSectionA data={Neuroscience.technologies} />
      {/* <Cta ctaSection={Neuroscience.ctaSection} /> */}
      <TextSlider highlightText={Neuroscience.highlightText} />

      {/* Show first comprehensive care */}
      <ComprehensiveServices comprehensiveCare={Neuroscience.comprehensiveCare} />

      {/* Show second comprehensive care */}
      <ComprehensiveServices comprehensiveCare={Neuroscience.comprehensiveCare2} />

      <CommonConditions2 scopeOfCare={Neuroscience.scopeOfCare} />
      <InsuranceAndFinance insuranceFinance={Neuroscience.insuranceFinance}/>
      <PatientJourney patientJourney={Neuroscience.patientJourney} />
      <SuccessStories successStories={Neuroscience.successStories} />
      <Faq faqs={Neuroscience.faqs} />
      <AppointmentConsultation appointmentSection={Neuroscience.appointmentSection} />
    </div>
  );
}
export default Page;




