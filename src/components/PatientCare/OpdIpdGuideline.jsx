import React from 'react';
import Image from 'next/image';

const teamData = [
  {
    text: '50+ Specialty Consultants',
    image: '/images/patient/tdesign_time.png',
  },
  {
    text: 'Critical Care Experts available 24x7',
    image: '/images/patient/mdi_calendar-outline.png',
  },
  {
    text: 'Trained Emergency Response Team',
    image: '/images/patient/tabler_id.png',
  },
];

const OpdIpdGuideline = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4 text-left">
        <h2
          data-aos="fade-up"
          className="text-3xl md:text-5xl font-bold text-[#870064] mb-8"
        >
          OPD & IPD Guidelines
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-3 pb-10">
          {teamData.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 200}
              className="border-l-8 flex items-center justify-center gap-3 bg-white border border-[#870064] rounded-md shadow-sm p-4"
            >
              <div className="bg-[#870064] rounded-lg mt-1 w-[30%]">
                <Image
                  className="w-20 py-5 px-3 mx-auto"
                  width={150}
                  height={150}
                  src={item.image}
                  alt={item.text}
                />
              </div>
              <p className="text-2xl font-medium text-left text-[#252B42] w-[70%]">
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OpdIpdGuideline;
