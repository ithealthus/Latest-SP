import React from "react";
import Image from "next/image";

function HealthPackagesCard() {
  const hospitals = [
    {
      name: "Basic Health Check",
      desc: {
        line1: "CBC, Blood Sugar, Lipid Profile, ECG, Chest X-ray",
        line2: "Ideal for individuals below 40 years",
      },
      logo: "/images/health-packages/Health-Check-1.png",
    },
    {
      name: "Executive Health Check (Men/Women)",
      desc: {
        line1: "Tailored for busy professionals seeking preventive care",
        line2: "Includes full-body screening, USG, liver/kidney panels",
      },
      logo: "/images/health-packages/Health-Check-2.png",
    },
    {
      name: "Cardiac Risk Package",
      desc: {
        line1: "ECG, 2D Echo, TMT, Cholesterol, HbA1C",
        line2: "For those with a family history or lifestyle risk",
      },
      logo: "/images/health-packages/Health-Check-3.png",
    },
    {
      name: "Diabetic Wellness Package",
      desc: {
        line1: "FBS, PPBS, HbA1C, Eye & Foot Screening, Creatinine",
        // line2: "Ideal for individuals below 40 years",
      },
      logo: "/images/health-packages/Health-Check-4.png",
    },
    {
      name: "Senior Citizen Screening",
      desc: {
        line1: "Bone Density, Vision, Thyroid, Cancer Markers, Vitamin B12/D3",
        // line2: "Ideal for individuals below 40 years",
      },
      logo: "/images/health-packages/Health-Check-5.png",
    },
  ];

  return (
    <div>
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl md:text-5xl font-bold text-[#870064] mb-10"
          >
            Our Health Check Packages
          </h2>
          <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left items-stretch">
            <div data-aos="fade-up" data-aos-delay="200" className="">
              <img
                src="/images/health-packages/Medical-Records(why-choose).jpg"
                alt=""
              />
            </div>
            {hospitals.map((hospital, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 200}
                style={{
                  boxShadow:
                    "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
                }}
                className="bg-white border border-[#87006480] rounded-xl shadow flex flex-col gap-2 min-h-[400px]"
              >
                <Image
                  width={1000}
                  height={1000}
                  src={hospital.logo}
                  alt={hospital.name}
                  className="object-contain mx-auto rounded-t-xl"
                />
                <div className="px-6 flex flex-col flex-grow">
                  <p className="text-[#852065] font-semibold mb-2 text-2xl">
                    {hospital.name}
                  </p>
                  <ul className="text-sm text-[#000000] list-disc pl-5 mb-auto">
                    <li className="mb-2">{hospital.desc.line1}</li>
                    {hospital.desc.line2 && <li>{hospital.desc.line2}</li>}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HealthPackagesCard;
