import React from 'react';
import respiratoryMedicine from '@/data/departments/layoutB/respiratoryMedicine';
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
      <HeroA hero={respiratoryMedicine.hero} />
      <TextSlider highlightText={respiratoryMedicine.highlightText} />
      <WhyChooseA whyChoose={respiratoryMedicine.whyChoose} />
      <OurTeamA team={respiratoryMedicine.team} />
      <TechnologiesSectionA data={respiratoryMedicine.technologies} />
      {/* <Cta ctaSection={respiratoryMedicine.ctaSection} /> */}
      <TextSlider highlightText={respiratoryMedicine.highlightText} />
      <ComprehensiveServices comprehensiveCare={respiratoryMedicine.comprehensiveCare} />
      <CommonConditions scopeOfCare={ respiratoryMedicine.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ respiratoryMedicine.insuranceFinance}/>
      <PatientJourney patientJourney={respiratoryMedicine.patientJourney} />
      <SuccessStories successStories={respiratoryMedicine.successStories} />
      <Faq faqs={respiratoryMedicine.faqs} />
      <AppointmentConsultation appointmentSection={respiratoryMedicine.appointmentSection} />
    </div>
  );
}

export default Page;
