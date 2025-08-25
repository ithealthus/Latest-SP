import React from 'react';
import MedicalOncology from '@/data/departments/layoutB/Medical-Oncology';
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
      <HeroB hero={MedicalOncology.hero} />
      <TextSlider highlightText={MedicalOncology.highlightText} />
      <WhyChooseA whyChoose={MedicalOncology.whyChoose} />
      <OurTeamA team={MedicalOncology.team} />
      <TechnologiesSectionA data={MedicalOncology.technologies} />
      {/* <Cta ctaSection={MedicalOncology.ctaSection} /> */}
      <TextSlider highlightText={MedicalOncology.highlightText} />
      <ComprehensiveServices comprehensiveCare={MedicalOncology.comprehensiveCare} />
      <CommonConditions scopeOfCare={ MedicalOncology.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ MedicalOncology.insuranceFinance}/>
      <PatientJourney patientJourney={MedicalOncology.patientJourney} />
      <SuccessStories successStories={MedicalOncology.successStories} />
      <Faq faqs={MedicalOncology.faqs} />
      <AppointmentConsultation appointmentSection={MedicalOncology.appointmentSection} />
    </div>
  );
}

export default Page;



