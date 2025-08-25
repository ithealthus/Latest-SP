import React from 'react';
import SurgicalOncologyData from '@/data/departments/layoutB/Surgical-Oncology';
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
      <HeroB hero={SurgicalOncologyData.hero} />
      <TextSlider highlightText={SurgicalOncologyData.highlightText} />
      <WhyChooseA whyChoose={SurgicalOncologyData.whyChoose} />
      <OurTeamA team={SurgicalOncologyData.team} />
      <TechnologiesSectionA data={SurgicalOncologyData.technologies} />
      {/* <Cta ctaSection={SurgicalOncologyData.ctaSection} /> */}
      <TextSlider highlightText={SurgicalOncologyData.highlightText} />
      <ComprehensiveServices comprehensiveCare={SurgicalOncologyData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ SurgicalOncologyData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ SurgicalOncologyData.insuranceFinance}/>
      <PatientJourney patientJourney={SurgicalOncologyData.patientJourney} />
      <SuccessStories successStories={SurgicalOncologyData.successStories} />
      <Faq faqs={SurgicalOncologyData.faqs} />
      <AppointmentConsultation appointmentSection={SurgicalOncologyData.appointmentSection} />
    </div>
  );
}

export default Page;



