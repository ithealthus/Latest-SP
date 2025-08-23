"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const HospitalFacilitiesHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section>
      <div className="bg-[#f3dede]  flex items-center justify-center px-6 py-20">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Text Section */}
          <div data-aos="fade-right" className="space-y-5">
            <div>
              <div className="inline-block border-[3px] border-primary text-primary text-base font-medium px-4 py-2 rounded-md mb-6">
                Home &gt; Hospital Facilities
              </div>
              <h1 className="text-4xl lg:text-6xl font-medium text-[#800065] mb-4">
                Hospital Facilities at SP Medifort Hospital
              </h1>
            </div>
            <div className="">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#44002E] mb-2">
                Driven by Care, Powered by Precision
              </h2>
              <p className="font-semibold text-[#44002E] mb-6">
                The Silent Strength Behind Seamless Healing.
              </p>
            </div>
            <p className="text-[#44002E] text-base leading-relaxed mb-5">
              At SP Medifort Hospital, delivering world-class healthcare goes
              beyond clinical expertise. It includes a robust support system
              working silently behind the scenes. From digital infrastructure to
              sanitation, and from insurance coordination to engineering, our
              hospital facilities are meticulously designed to ensure safety,
              hygiene, comfort, and operational efficiency across every
              department.
              {/* <span className="font-bold">
                            seamless, efficient, and deeply supportive.
                        </span> */}
            </p>

            <p className="text-[#44002E] text-base leading-relaxed">
              Our non-clinical departments serve as the backbone of hospital
              excellence, working 24*7 to create an environment where healing
              can truly thrive.
              {/* <span className="font-bold">
                            seamless, efficient, and deeply supportive.
                        </span> */}
            </p>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src="/images/HospitalFacilities/Hospital Facilities at SP Medifort Hospital.png"
              alt="Nurse with patient"
              className="w-full lg:h-[600px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-[#870064] h-14"></div>
    </section>
  );
};

export default HospitalFacilitiesHero;
