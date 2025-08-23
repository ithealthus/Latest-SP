"use client";
import React from "react";
import { MdCall } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";

const CtaSection = () => {
  return (
    <section className="bg-primary text-white flex flex-col lg:flex-row items-center justify-between overflow-hidden mt-20">
      {/* Left Decorative Image */}
      <div className="w-full lg:w-[28%] relative min-h-[250px] sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px]">
        <img
          src="/images/spimg.svg"
          alt="Background Decoration"
          className="absolute bottom-0 left-[-100px] sm:left-[-120px] md:left-[-140px] lg:left-[-160px] w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full lg:w-[72%] px-4 sm:px-6 md:px-8 lg:px-10 py-10 sm:py-12 flex flex-col justify-center space-y-6 sm:space-y-8">
        {/* Heading & Text */}
        <div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-semibold">
            How to Apply?
          </h2>
          <ul className="list-disc list-inside space-y-4 mt-3 ms-4">
            <li className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-lg leading-relaxed">
              <strong>Step 1:</strong> Browse our current openings on the
              [Careers Portal]
            </li>
            <li className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-lg leading-relaxed">
              <strong>Step 2:</strong> Click "Apply Now" and fill out the online
              form
            </li>
            <li className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-lg leading-relaxed">
              <strong>Step 3:</strong> Upload your updated CV and certifications
            </li>
            <li className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-lg leading-relaxed">
              <strong>Step 4:</strong> Shortlisted candidates will be contacted
              for an interview
            </li>
          </ul>
          <div className="mt-6">
            <h3 className="text-[22px] sm:text-[26px] md:text-[28px] lg:text-[32px]">
              No openings right now?
            </h3>
            <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px]">
              You can still share your profile for future roles.
            </p>
          </div>
        </div>

        {/* Buttons */}
        {/* <div className="flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4 sm:gap-3">
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-[16px] sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-full border-4 border-white hover:scale-105 transition-all duration-300">
            Apply Now
            <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
              <IoArrowForward className="text-[#870064]" size={20} />
            </span>
          </button>
          <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-[16px] sm:text-lg font-semibold px-6 sm:px-8 py-3 rounded-full border-4 border-white hover:scale-105 transition-all duration-300">
            Submit Resume
            <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
              <IoArrowForward className="text-[#870064]" size={20} />
            </span>
          </button>
        </div> */}
      </div>
    </section>
  );
};

export default CtaSection;
