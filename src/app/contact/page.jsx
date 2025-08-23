import ContactHero from "@/components/Contact/ContactHero";
import HospitalGroup from "@/components/Contact/HospitalGroup";
import HospitalLocation from "@/components/Contact/HospitalLocation";
import CtaSection from "@/components/Contact/Cta";
import React from "react";

const contact = () => {
  return (
    <>
      <ContactHero />
      <HospitalLocation />
      <HospitalGroup />
      <CtaSection />
    </>
  );
};

export default contact;
