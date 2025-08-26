import React from 'react';
import Hero from '@/components/secondopinion/Hero';
import SecondOpinionSection from '@/components/secondopinion/SecondOpinionSection';
import MedifortTeams from '@/components/secondopinion/MedifortTeam';
import SecondOpinionRequests from '@/components/secondopinion/SecondOpinionRequests';
import FAQ from '@/components/secondopinion/FAQ';
import Admission from '@/components/secondopinion/Admission';
import HealthCta from '@/components/secondopinion/HealthCta';

function Page() {
  return (
    <div>
      <Hero />
      <SecondOpinionSection />
      <MedifortTeams />
      <SecondOpinionRequests />
      <FAQ />
      <Admission />
      <HealthCta />
    </div>
  );
}

export default Page;
