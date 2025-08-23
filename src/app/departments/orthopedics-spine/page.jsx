export const dynamic = "force-dynamic"; // disable static prerender

import React from "react";

import Orthopedic from "@/data/departments/layoutB/Orthopedic";
import HeroB from "@/components/layouts/layoutB/HeroB";
import WhyChooseA from "@/components/layouts/layoutA/WhyChooseA";
import OurTeamA from "@/components/layouts/layoutA/OurTeamA";
import TechnologiesSectionA from "@/components/layouts/layoutA/TechnologiesSectionA";
import Cta from "@/components/layouts/layoutA/Cta";
import TextSlider from "@/components/layouts/layoutA/TextSlider";
import ComprehensiveServices from "@/components/layouts/layoutA/ComprehensiveServices";
import CommonConditions from "@/components/layouts/layoutA/CommonConditions";
import InsuranceAndFinance from "@/components/layouts/layoutA/InsuranceAndFinance";
import PatientJourney from "@/components/layouts/layoutA/PatientJourney";
import SuccessStories from "@/components/layouts/layoutA/SuccessStories";
import Faq from "@/components/layouts/layoutA/Faq";
import AppointmentConsultation from "@/components/layouts/layoutA/AppointmentConsultation";

export default function Page() {
  return (
    <div>
      <HeroB hero={Orthopedic?.hero || {}} />
      <TextSlider highlightText={Orthopedic?.highlightText || []} />
      <WhyChooseA whyChoose={Orthopedic?.whyChoose || []} />
      <OurTeamA team={Orthopedic?.team || []} />
      <TechnologiesSectionA data={Orthopedic?.technologies || []} />
      {/* <Cta ctaSection={Orthopedic?.ctaSection || {}} /> */}
      <TextSlider highlightText={Orthopedic?.highlightText || []} />
      <ComprehensiveServices
        comprehensiveCare={Orthopedic?.comprehensiveCare || []}
      />
      <ComprehensiveServices
        comprehensiveCare={Orthopedic?.comprehensiveCare2 || []}
      />
      <ComprehensiveServices
        comprehensiveCare={Orthopedic?.comprehensiveCare3 || []}
      />
      <ComprehensiveServices
        comprehensiveCare={Orthopedic?.comprehensiveCare4 || []}
      />
      <CommonConditions scopeOfCare={Orthopedic?.scopeOfCare || []} />
      <InsuranceAndFinance
        insuranceFinance={Orthopedic?.insuranceFinance || []}
      />
      <PatientJourney patientJourney={Orthopedic?.patientJourney || []} />
      <SuccessStories successStories={Orthopedic?.successStories || []} />
      <Faq faqs={Orthopedic?.faqs || []} />
      <AppointmentConsultation
        appointmentSection={Orthopedic?.appointmentSection || {}}
      />
    </div>
  );
}
