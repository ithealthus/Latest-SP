import React from 'react';
import PlasticMicroVascular from '@/data/departments/layoutB/plasticMicrovascularSurgery';
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
      <HeroA hero={PlasticMicroVascular.hero} />
      <TextSlider highlightText={PlasticMicroVascular.highlightText} />
      <WhyChooseA whyChoose={PlasticMicroVascular.whyChoose} />
      <OurTeamA team={PlasticMicroVascular.team} />
      <TechnologiesSectionA data={PlasticMicroVascular.technologies} />
      {/* <Cta ctaSection={PlasticMicroVascular.ctaSection} /> */}
      <TextSlider highlightText={PlasticMicroVascular.highlightText} />
      <ComprehensiveServices comprehensiveCare={PlasticMicroVascular.comprehensiveCare} />
      <CommonConditions scopeOfCare={ PlasticMicroVascular.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ PlasticMicroVascular.insuranceFinance}/>
      <PatientJourney patientJourney={PlasticMicroVascular.patientJourney} />
      <SuccessStories successStories={PlasticMicroVascular.successStories} />
      <Faq faqs={PlasticMicroVascular.faqs} />
      <AppointmentConsultation appointmentSection={PlasticMicroVascular.appointmentSection} />
    </div>
  );
}

export default Page;
