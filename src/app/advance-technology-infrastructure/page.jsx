'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PatientCareHero from '@/components/shared/PatientCareHero';
import Breadcrumb from '@/components/shared/Breadcrumb';
import AdvanceHero from '@/components/shared/AdvanceHero';
import InfoSection from '@/components/shared/InfoSection';
import HowItHelpsYou from '@/components/shared/HowItHelpsYou';
import CareHelp from '@/components/shared/CareHelpSection';
const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
     <AdvanceHero />
     <div><h2 className='text-4xl text-center mt-6 font-bold text-primary'>Infrastructure Highlights</h2>
     <InfoSection
      
      subtitle="Diagnostic Excellence"
      items={[
        "1.5 Tesla MRI",
        "128-Slice CT Scan",
        "Digital X-ray Suite",
        "4D Ultrasound",
      ]}
      imageSrc="/images/advanceTechnology/adv1.webp"
      bgColor="bg-white"
      textColor="text-primary"
      reverse={false} // change to true if you want image on left
    />
    <InfoSection
      title="Surgical Advancements"
      subtitle="Cutting-Edge Robotics & Precision"
      items={[
        "Versius Robotic Surgery System",
        "Zeiss Kinevo Robotic Neuro Microscope",
        "Robotic Navigation for Neurosurgery",
        "Fully equipped Laparoscopic OT",
      ]}
      imageSrc="/images/advanceTechnology/adv2.jpg"   // <-- replace with your actual image
      bgColor="bg-lighter"
      textColor="text-primary"
      iconSrc="/images/group.svg"       // custom bullet icon
      reverse={true}                    // set to false if you want image on right
    />
    <InfoSection
      
      subtitle="Critical Care & Support"
      items={[
        "24*7 Remote ICU Monitoring",
        "Dedicated Specialty ICUs",
        "30 Emergency Beds with Burns Unit",
        "Bone Bank",
      ]}
      imageSrc="/images/advanceTechnology/adv3.jpg" // replace with your actual image
      bgColor="bg-white"
      textColor="text-primary"
      iconSrc="/images/group.svg"
      reverse={false} // set true if you want the image on the left
    />
    <InfoSection
      
      subtitle="Interventional & Imaging Suites"
      items={[
        "3D Cath Lab (GE Allia)",
        "AI-based surgical planning tools",
        "Fully Motorized Patient-Friendly X-ray",
        "PACS Integrated Reporting System",
      ]}
      imageSrc="/images/advanceTechnology/adv4.jpg" // replace with your actual image
      bgColor="bg-lighter"
      textColor="text-primary"
      iconSrc="/images/group.svg"
      reverse={true} // set false if you want the image on the right
    />
    </div>
    <HowItHelpsYou />
    <CareHelp />
    </>
  );
};

export default Page;