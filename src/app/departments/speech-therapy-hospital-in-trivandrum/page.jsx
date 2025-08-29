import React from 'react';
import speechTherapy from '@/data/departments/layoutB/speechTherapy';
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
      <HeroA hero={speechTherapy.hero} />
      <TextSlider highlightText={speechTherapy.highlightText} />
      <WhyChooseA whyChoose={speechTherapy.whyChoose} />
      <OurTeamA team={speechTherapy.team} />
      <TechnologiesSectionA data={speechTherapy.technologies} />
      {/* <Cta ctaSection={speechTherapy.ctaSection} /> */}
      <TextSlider highlightText={speechTherapy.highlightText} />
      <ComprehensiveServices comprehensiveCare={speechTherapy.comprehensiveCare} />
      <CommonConditions scopeOfCare={ speechTherapy.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ speechTherapy.insuranceFinance}/>
      <PatientJourney patientJourney={speechTherapy.patientJourney} />
      {/* <SuccessStories successStories={speechTherapy.successStories} /> */}
      <Faq faqs={speechTherapy.faqs} />
      <AppointmentConsultation appointmentSection={speechTherapy.appointmentSection} />
    </div>
  );
}

export default Page;
