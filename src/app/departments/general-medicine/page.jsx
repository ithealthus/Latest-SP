import React from 'react';
import GeneralMedicineData from '@/data/departments/layoutB/GeneralMedicine';
import HeroA from '@/components/layouts/layoutB/HeroB';
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
      <HeroA hero={GeneralMedicineData.hero} />
      <TextSlider highlightText={GeneralMedicineData.highlightText} />
      <WhyChooseA whyChoose={GeneralMedicineData.whyChoose} />
      <OurTeamA team={GeneralMedicineData.team} />
      <TechnologiesSectionA data={GeneralMedicineData.technologies} />
      {/* <Cta ctaSection={GeneralMedicineData.ctaSection} /> */}
      <TextSlider highlightText={GeneralMedicineData.highlightText} />
      <ComprehensiveServices comprehensiveCare={GeneralMedicineData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ GeneralMedicineData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ GeneralMedicineData.insuranceFinance}/>
      <PatientJourney patientJourney={GeneralMedicineData.patientJourney} />
      <SuccessStories successStories={GeneralMedicineData.successStories} />
      <Faq faqs={GeneralMedicineData.faqs} />
      <AppointmentConsultation appointmentSection={GeneralMedicineData.appointmentSection} />
    </div>
  );
}

export default Page;



