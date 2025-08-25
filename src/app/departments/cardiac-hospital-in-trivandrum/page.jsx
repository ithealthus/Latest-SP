import React from 'react';
import cardiacScienceData from '@/data/departments/layoutA/cardiac-science';
import HeroA from '@/components/layouts/layoutA/HeroA';
import WhyChooseA from '@/components/layouts/layoutA/WhyChooseA';
import OurTeamA from '@/components/layouts/layoutA/OurTeamA';
import Tech2 from '@/components/layouts/layoutA/Tech2';
import Cta from '@/components/layouts/layoutA/Cta';
import TextSlider from '@/components/layouts/layoutA/TextSlider';
import ComprehensiveServices from '@/components/layouts/layoutA/ComprehensiveServices';
import CommonConditions2 from '@/components/layouts/layoutA/CommonConditions2';
import InsuranceAndFinance from '@/components/layouts/layoutA/InsuranceAndFinance';
import PatientJourney from '@/components/layouts/layoutA/PatientJourney';
import SuccessStories from '@/components/layouts/layoutA/SuccessStories';
import Faq from '@/components/layouts/layoutA/Faq';
import AppointmentConsultation from '@/components/layouts/layoutA/AppointmentConsultation';

// Page component for the Cardiac Science department
function Page(hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare ,insuranceFinance ,patientJourney, successStories, faqs, appointmentSection , ) {
  return (
    <div>
      <HeroA hero={cardiacScienceData.hero} />
      <TextSlider highlightText={cardiacScienceData.highlightText} />
      <WhyChooseA whyChoose={cardiacScienceData.whyChoose} />
      <OurTeamA team={cardiacScienceData.team} />
      <Tech2 data={cardiacScienceData.technologies} />
      {/* <Cta ctaSection={cardiacScienceData.ctaSection} /> */}
      <TextSlider highlightText={cardiacScienceData.highlightText} />
      <ComprehensiveServices comprehensiveCare={cardiacScienceData.comprehensiveCare} />
      <CommonConditions2 scopeOfCare={cardiacScienceData.scopeOfCare} />
      <InsuranceAndFinance insuranceFinance={cardiacScienceData.insuranceFinance}/>
      <PatientJourney patientJourney={cardiacScienceData.patientJourney} />
      <SuccessStories successStories={cardiacScienceData.successStories} />
      <Faq faqs={cardiacScienceData.faqs} />
      <AppointmentConsultation appointmentSection={cardiacScienceData.appointmentSection} />
    </div>
  );
}

export default Page;
