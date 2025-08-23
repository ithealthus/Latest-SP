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

export default function LayoutA({ hero, whyChoose, team,technologies, ctaSection ,highlightText ,comprehensiveCare , scopeOfCare ,insuranceFinance ,patientJourney, successStories, faqs, appointmentSection}) {
  return (
    <div>
      <HeroA hero={hero} />
      <TextSlider highlightText={highlightText} />
      <WhyChooseA whyChoose={whyChoose} />
      <OurTeamA team={team} />
      <TechnologiesSectionA data={technologies} />
      {/* <Cta ctaSection={ctaSection} /> */}
      <TextSlider highlightText={highlightText} />
      <ComprehensiveServices comprehensiveCare={comprehensiveCare} />
      <CommonConditions scopeOfCare={ scopeOfCare } />
      <InsuranceAndFinance insuranceFinance={insuranceFinance}/>
      <PatientJourney patientJourney={patientJourney} />
      <SuccessStories successStories={successStories} />
      <Faq faqs={faqs} />
      <AppointmentConsultation appointmentSection={appointmentSection} />
    </div>
  );
}
