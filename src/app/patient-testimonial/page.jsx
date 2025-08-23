import React from 'react';
import Hero from '@/components/health-articles-blogs/Hero';
import Patientgrid from '@/components/patient-testimonial/patientgrid';
function Page() {
  return (
    <div>
      <Hero
        breadcrumb="Home > Patient Testimonial"
        title="Patient Testimonial"
        subtitle="Whay Our Patient Say About Us"
        description="At SP Medifort, we go beyond treatment, we empower you with the latest in health
education, hospital milestones, and expert insights. From wellness blogs and patient
stories to cutting-edge medical updates and doctor-led video explainers, everything
you need to take charge of your health is right here."
        image="/images/blog/blog1.webp" // put an image inside public/images
      />
      <Patientgrid />
    </div>
  );
}

export default Page;
