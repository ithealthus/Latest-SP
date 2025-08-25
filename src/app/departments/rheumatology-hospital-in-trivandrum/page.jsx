import React from 'react';
import rheumatology from '@/data/departments/layoutB/rheumatology';
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
      <HeroA hero={rheumatology.hero} />
      <TextSlider highlightText={rheumatology.highlightText} />
      <WhyChooseA whyChoose={rheumatology.whyChoose} />
      <OurTeamA team={rheumatology.team} />
      <TechnologiesSectionA data={rheumatology.technologies} />
      {/* <Cta ctaSection={rheumatology.ctaSection} /> */}
      <TextSlider highlightText={rheumatology.highlightText} />
      <ComprehensiveServices comprehensiveCare={rheumatology.comprehensiveCare} />
      <CommonConditions scopeOfCare={ rheumatology.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ rheumatology.insuranceFinance}/>
      <PatientJourney patientJourney={rheumatology.patientJourney} />
      <SuccessStories successStories={rheumatology.successStories} />
      <Faq faqs={rheumatology.faqs} />
      <AppointmentConsultation appointmentSection={rheumatology.appointmentSection} />
    </div>
  );
}

export default Page;
