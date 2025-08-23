'use client'
import React from "react";

const technologies = [
  {
    title: "Information Technology",
    image: "/images/HospitalFacilities/Information Technology.png",
    description: "Ensuring EMR systems, data security, seamless connectivity, and technology uptime across all clinical and administrative workflows.",
  },
  {
    title: "Guest Relations & Helpdesk",
    image: "/images/HospitalFacilities/Guest Relations & Helpdesk.png",
    description: "Your first point of contact — helping with appointments, information, feedback resolution, and guiding patient experiences.",
  },
  {
    title: "Insurance & TPA Desk",
    image: "/images/HospitalFacilities/Insurance & TPA Desk.png",
    description: "Facilitating cashless hospitalization, insurance verification, document submission, and real-time coordination with TPAs.",
  },
  {
    title: "Biomedical Engineering",
    image: "/images/HospitalFacilities/Biomedical Engineering.png",
    description: "Managing and maintaining medical equipment, from ventilators to imaging devices, while ensuring safety and uninterrupted care.",
  },
  {
    title: "Administration & Operations",
    image: "/images/HospitalFacilities/Administration & Operations.png",
    description: "Overseeing non-medical operations, regulatory compliance, and cross-departmental coordination for daily hospital functioning.",
  },
  {
    title: "Facility & Engineering Services",
    image: "/images/HospitalFacilities/Facility & Engineering Services.png",
    description: "Providing utility support, medical gas pipeline maintenance, HVAC systems, fire safety, and overall infrastructure management.",
  },
   {
    title: "Food & Beverage Services",
    image: "/images/HospitalFacilities/Food & Beverage Services.png",
    description: "Offering dietitian-supervised, hygienic meals tailored to medical conditions while maintaining FSSAI and safety standards.",
  },
   {
    title: "Housekeeping & Sanitation",
    image: "/images/HospitalFacilities/Housekeeping & Sanitation.png",
    description: "Sterilization, waste disposal, and infection control through professional cleaning across wards, ICUs, OTs, and public areas.",
  },
   {
    title: "Linen & Laundry",
    image: "/images/HospitalFacilities/Linen & Laundry.png",
    description: "Hygienic cleaning and distribution of hospital linens, patient garments, surgical gowns, and isolation wear.",
  },
   {
    title: "Maintenance & Utilities",
    image: "/images/HospitalFacilities/Maintenance & Utilities.png",
    description: "24*7 support for hospital infrastructure, including power supply, plumbing, elevators, and emergency breakdown response.",
  },
   {
    title: "Security Services",
    image: "/images/HospitalFacilities/Security Services.png",
    description: "Trained staff ensuring patient safety, surveillance monitoring, access control, and emergency incident readiness across campus.",
  },
   {
    title: "Human Resources",
    image: "/images/HospitalFacilities/Human Resources.png",
    description: "Recruiting, onboarding, certifying, and upskilling staff, ensuring high-performance standards and employee well-being",
  },
   {
    title: "Finance & Accounts",
    image: "/images/HospitalFacilities/Finance & Accounts.png",
    description: "Handling billing, refunds, claims, vendor payments, and transparent patient account management for financial clarity.",
  },
   {
    title: "Quality Management",
    image: "/images/HospitalFacilities/Quality Management.png",
    description: "Upholding NABH and internal quality standards, driving process improvements, and ensuring compliance across departments.",
  },
   {
    title: "Supply Chain & Inventory",
    image: "/images/HospitalFacilities/Supply Chain & Inventory.png",
    description: "Efficient procurement and tracking of medicines, surgical instruments, PPE, consumables, and diagnostic tools.",
  },
   {
    title: "Marketing & Outreach",
    image: "/images/HospitalFacilities/Marketing & Outreach.png",
    description: "Communicating hospital services, running wellness drives, digital campaigns, and building community trust.",
  },
   {
    title: "Mortuary Services",
    image: "/images/HospitalFacilities/Mortuary Services.png",
    description: "Respectful care for the deceased with 24*7 access, documentation support, and sensitive coordination with families.",
  },
   {
    title: "Our Commitment",
    image: "/images/HospitalFacilities/Our Commitment.png",
    description: "We are more than a hospital, we are a finely tuned ecosystem where every detail is designed for your safety, dignity, and healing.",
  },
];

const Technology = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-12 px-4 md:px-8">
      <h2 className="text-3xl md:text-5xl font-bold text-[#870064] mb-5 lg:mb-12">
        Our Key Support Facilities
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
             data-aos="fade-up"
             data-aos-delay={idx * 100}
            className="relative w-full rounded-xl overflow-hidden group shadow-lg aspect-[1.2/1]"
          >
            <img
              src={tech.image}
              alt={tech.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0  p-4 flex flex-col justify-end transition-all">
              <p className="text-white font-bold text-lg md:text-xl leading-tight">
                {tech.title}
              </p>
              <p className="text-white text-sm mt-2 opacity-90">
                {tech.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
