"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const PatientCareHero = () => {
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
                Home &gt; International Patient Care
              </div>
              <h1 className="text-4xl lg:text-6xl font-medium text-[#800065] mb-4">
                Patient Care at SP Medifort Hospital
              </h1>
            </div>
            <div className="">
              <h2 className="text-xl lg:text-2xl font-semibold text-[#44002E] mb-2">
                From Your First Visit to Full Recover
              </h2>
              <p className="font-semibold text-[#44002E] mb-6">
                Compassionate Support at Every Step.
              </p>
            </div>
            <p className="text-[#44002E] text-base leading-relaxed">
              At SP Medifort Hospital, we believe every patient deserves more
              than treatment, they deserve an experience rooted in trust,
              transparency, and care. From outpatient visits and admissions to
              insurance support and global patient coordination, our patient
              care services are designed to be{" "}
              <span className="font-bold">
                seamless, efficient, and deeply supportive.
              </span>
            </p>
          </div>

          {/* Image Section */}
          <div
            data-aos="fade-left"
            className="rounded-3xl overflow-hidden shadow-md"
          >
            <img
              src="/images/patient/patienthero.webp"
              alt="Nurse with patient"
              className="w-full lg:h-[550px] object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-primary h-14"></div>
    </section>
  );
};

export default PatientCareHero;
