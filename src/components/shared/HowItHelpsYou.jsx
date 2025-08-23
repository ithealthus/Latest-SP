import React from 'react';
import Image from 'next/image';


const insuranceFeatures = [
  {
    text: "Faster, safer, more accurate diagnoses",
    image: "/images/AdvanceTechnology/pacemaker.svg", // replace with your stethoscope icon
  },
  {
    text: "Less invasive surgeries, quicker recovery",
    image: "/images/AdvanceTechnology/surgical.svg", // replace with scalpel/pencil icon
  },
  {
    text: "Fewer complications and better outcomes",
    image: "/images/AdvanceTechnology/admin_meds.svg", // replace with clipboard icon
  },
  {
    text: "Transparent tracking & digital reporting",
    image: "/images/AdvanceTechnology/ecg.svg", // replace with heart monitor icon
  },
  {
    text: "Enhanced ICU and emergency responsiveness",
    image: "/images/AdvanceTechnology/ambulance.svg", // replace with ambulance icon
  },
];


const HowItHelpsYou = () => {
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
              <div className="flex flex-col items-center text-center">
  {/* Icon Wrapper with fixed height */}
  <div className="h-28 flex items-center justify-center mb-4">
    <Image
      className="w-20 mx-auto"
      width={150}
      height={150}
      src={feature.image}
      alt={`Insurance Icon ${index + 1}`}
    />
  </div>

  {/* Text */}
  <div className="mt-4">
    <p className="text-xl  pb-3 text-black">
      {feature.text}
    </p>
  </div>
</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItHelpsYou;
