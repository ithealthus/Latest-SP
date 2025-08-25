import React from 'react';
import Ophthalmology from '@/data/departments/layoutB/Ophthalmology';
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
      <HeroB hero={Ophthalmology.hero} />
      <TextSlider highlightText={Ophthalmology.highlightText} />
      <WhyChooseA whyChoose={Ophthalmology.whyChoose} />
      <OurTeamA team={Ophthalmology.team} />
      <TechnologiesSectionA data={Ophthalmology.technologies} />
      {/* <Cta ctaSection={Ophthalmology.ctaSection} /> */}
      <TextSlider highlightText={Ophthalmology.highlightText} />
      <ComprehensiveServices comprehensiveCare={Ophthalmology.comprehensiveCare} />
      <CommonConditions scopeOfCare={ Ophthalmology.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ Ophthalmology.insuranceFinance}/>
      <PatientJourney patientJourney={Ophthalmology.patientJourney} />
      <SuccessStories successStories={Ophthalmology.successStories} />
      <Faq faqs={Ophthalmology.faqs} />
      <AppointmentConsultation appointmentSection={Ophthalmology.appointmentSection} />
    </div>
  );
}

export default Page;



