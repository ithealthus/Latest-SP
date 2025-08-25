import React from 'react';
import Psychiatry from '@/data/departments/layoutB/Psychiatry';
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
      <HeroA hero={Psychiatry.hero} />
      <TextSlider highlightText={Psychiatry.highlightText} />
      <WhyChooseA whyChoose={Psychiatry.whyChoose} />
      <OurTeamA team={Psychiatry.team} />
      <TechnologiesSectionA data={Psychiatry.technologies} />
      {/* <Cta ctaSection={Psychiatry.ctaSection} /> */}
      <TextSlider highlightText={Psychiatry.highlightText} />
      <ComprehensiveServices comprehensiveCare={Psychiatry.comprehensiveCare} />
      <CommonConditions scopeOfCare={ Psychiatry.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ Psychiatry.insuranceFinance}/>
      <PatientJourney patientJourney={Psychiatry.patientJourney} />
      <SuccessStories successStories={Psychiatry.successStories} />
      <Faq faqs={Psychiatry.faqs} />
      <AppointmentConsultation appointmentSection={Psychiatry.appointmentSection} />
    </div>
  );
}

export default Page;
