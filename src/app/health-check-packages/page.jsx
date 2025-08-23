import React from "react";
import HealthHero from "@/components/HealthPackages/HealthHero";
import HealthPackagesCard from "@/components/HealthPackages/HealthPackagesCard";
import WhyChoose from "@/components/HealthPackages/WhyChoose";
import HealthCta from "@/components/HealthPackages/HealthCta";

const page = () => {
  return (
    <>
      <HealthHero />
      <HealthPackagesCard />
      <WhyChoose />
      <HealthCta />
    </>
  );
};

export default page;
