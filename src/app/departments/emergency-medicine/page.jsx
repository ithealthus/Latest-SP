import React from 'react';
import EmergencyMedicineData from '@/data/departments/layoutA/EmergencyMedicine';
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
      <HeroA hero={EmergencyMedicineData.hero} />
      <TextSlider highlightText={EmergencyMedicineData.highlightText} />
      <WhyChooseA whyChoose={EmergencyMedicineData.whyChoose} />
      <OurTeamA team={EmergencyMedicineData.team} />
      <TechnologiesSectionA data={EmergencyMedicineData.technologies} />
      {/* <Cta ctaSection={EmergencyMedicineData.ctaSection} /> */}
      <TextSlider highlightText={EmergencyMedicineData.highlightText} />
      <ComprehensiveServices comprehensiveCare={EmergencyMedicineData.comprehensiveCare} />
      <CommonConditions scopeOfCare={ EmergencyMedicineData.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ EmergencyMedicineData.insuranceFinance}/>
      <PatientJourney patientJourney={EmergencyMedicineData.patientJourney} />
      <SuccessStories successStories={EmergencyMedicineData.successStories} />
      <Faq faqs={EmergencyMedicineData.faqs} />
      <AppointmentConsultation appointmentSection={EmergencyMedicineData.appointmentSection} />
    </div>
  );
}

export default Page;



