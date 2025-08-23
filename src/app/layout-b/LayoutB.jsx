import HeroB from "@/components/layouts/layoutB/HeroB";
import WhyChooseB from "@/components/layouts/layoutB/WhyChooseB";
import OurTeamB from "@/components/layouts/layoutB/OurTeamB";
import TechnologiesSectionB from "@/components/layouts/layoutB/TechnologiesSectionB";
import Cta from "@/components/layouts/layoutB/Cta";
import TextSlider from "@/components/layouts/layoutB/TextSlider";
import ComprehensiveServices from "@/components/layouts/layoutB/ComprehensiveServices";
import CommonConditions from "@/components/layouts/layoutB/CommonConditions";
import InsuranceAndFinance from "@/components/layouts/layoutB/InsuranceAndFinance";
import PatientJourney from "@/components/layouts/layoutB/PatientJourney";
import SuccessStories from "@/components/layouts/layoutB/SuccessStories";
import Faq from "@/components/layouts/layoutB/Faq";
import AppointmentConsultation from "@/components/layouts/layoutB/AppointmentConsultation";

export default function LayoutB({
  hero,
  whyChoose,
  team,
  technologies,
  ctaSection,
  highlightText,
  comprehensiveCare,
  scopeOfCare,
  insuranceFinance,
  patientJourney,
  successStories,
  faqs,
  appointmentSection,
}) {
  return (
    <div>
      <HeroB hero={hero} />
      <TextSlider highlightText={highlightText} />
      <WhyChooseB whyChoose={whyChoose} />
      <OurTeamB team={team} />
      <TechnologiesSectionB data={technologies} />
      {/* <Cta ctaSection={ctaSection} /> */}
      <TextSlider highlightText={highlightText} />
      <ComprehensiveServices comprehensiveCare={comprehensiveCare} />
      <CommonConditions scopeOfCare={scopeOfCare} />
      <InsuranceAndFinance insuranceFinance={insuranceFinance} />
      <PatientJourney patientJourney={patientJourney} />
      <SuccessStories successStories={successStories} />
      <Faq faqs={faqs} />
      <AppointmentConsultation appointmentSection={appointmentSection} />
    </div>
  );
}
