
import MinimalAccessSurgery from '@/data/departments/layoutA/MinimalAccessSurgery';
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
      <HeroA hero={MinimalAccessSurgery.hero} />
      <TextSlider highlightText={MinimalAccessSurgery.highlightText} />
      <WhyChooseA whyChoose={MinimalAccessSurgery.whyChoose} />
      <OurTeamA team={MinimalAccessSurgery.team} />
      <TechnologiesSectionA data={MinimalAccessSurgery.technologies} />
      {/* <Cta ctaSection={MinimalAccessSurgery.ctaSection} /> */}
      <TextSlider highlightText={MinimalAccessSurgery.highlightText} />
      <ComprehensiveServices comprehensiveCare={MinimalAccessSurgery.comprehensiveCare} />
      <CommonConditions scopeOfCare={ MinimalAccessSurgery.scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={ MinimalAccessSurgery.insuranceFinance}/>
      <PatientJourney patientJourney={MinimalAccessSurgery.patientJourney} />
      <SuccessStories successStories={MinimalAccessSurgery.successStories} />
      <Faq faqs={MinimalAccessSurgery.faqs} />
      <AppointmentConsultation appointmentSection={MinimalAccessSurgery.appointmentSection} />
    </div>
  );
}

export default Page;



