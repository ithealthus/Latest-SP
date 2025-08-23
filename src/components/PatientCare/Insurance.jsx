import React from 'react';
import Image from 'next/image';

const insuranceFeatures = [
  {
    text: 'We support most leading insurance providers and TPAs',
    image: '/images/patient/health_and_safety.webp',
  },
  {
    text: 'Dedicated helpdesk for cashless treatment, document handling, and claim queries',
    image: '/images/patient/fax.webp',
  },
  {
    text: 'Hassle-free Insurance Approval for Planned Surgeries',
    image: '/images/patient/inventory.webp',
  },
  {
    text: 'Daily billing updates are shared with the patient or attendant',
    image: '/images/patient/credit_card_clock.webp',
  },
  {
    text: 'Guidance on financial estimation for planned procedures',
    image: '/images/patient/checkbook.webp',
  },
];

const Insurance = () => {
  return (
    <section className="bg-[#EFDAD952] py-10">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-[#870064] mb-8"
        >
          Insurance & Billing
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 pt-3 pb-10">
          {insuranceFeatures.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              style={{
                boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px',
              }}
              className="bg-white rounded-3xl border border-[#870064]/80 text-center p-6 flex flex-col items-center h-full"
            >
              <div className="text-[#870064] mb-4">
                <Image
                  className="w-20 mx-auto py-3"
                  width={150}
                  height={150}
                  src={feature.image}
                  alt={`Insurance Icon ${index + 1}`}
                />
              </div>
              <p className="text-sm font-bold pb-3 text-[#02033B]">
                {feature.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insurance;
