import React from 'react';
import RoboticLaparoscopicGeneralSurgeryData from '@/data/departments/layoutA/RoboticLaparoscopicGeneralSurgery';
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
      <HeroA hero={RoboticLaparoscopicGeneralSurgeryData.hero} />
      <TextSlider highlightText={RoboticLaparoscopicGeneralSurgeryData.highlightText} />
      <WhyChooseA whyChoose={RoboticLaparoscopicGeneralSurgeryData.whyChoose} />
      <OurTeamA team={RoboticLaparoscopicGeneralSurgeryData.team} />
      <TechnologiesSectionA data={RoboticLaparoscopicGeneralSurgeryData.technologies} />
      {/* <Cta ctaSection={RoboticLaparoscopicGeneralSurgeryData.ctaSection} /> */}
      <TextSlider highlightText={RoboticLaparoscopicGeneralSurgeryData.highlightText} />
      <ComprehensiveServices comprehensiveCare={RoboticLaparoscopicGeneralSurgeryData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ RoboticLaparoscopicGeneralSurgeryData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ RoboticLaparoscopicGeneralSurgeryData.insuranceFinance}/>
      <PatientJourney patientJourney={RoboticLaparoscopicGeneralSurgeryData.patientJourney} />
      <SuccessStories successStories={RoboticLaparoscopicGeneralSurgeryData.successStories} />
      <Faq faqs={RoboticLaparoscopicGeneralSurgeryData.faqs} />
      <AppointmentConsultation appointmentSection={RoboticLaparoscopicGeneralSurgeryData.appointmentSection} />
    </div>
  );
}

export default Page;



