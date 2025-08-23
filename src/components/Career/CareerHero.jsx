"use client";
import React, { useEffect } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import AOS from "aos";
import { IoArrowForward } from "react-icons/io5";

const ContactHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <section className="bg-primary text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden mx-3 lg:mx-20 pt-16">
      <div className="px-4 sm:px-4 md:px-64">
        <Breadcrumb textColor="text-white" borderColor="border-white" />
      </div>

      <div className="px-4 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-stretch justify-between h-full">
        {/* Text Block */}
        <div className="md:w-2/3 w-full space-y-5 mt-6 md:mt-0 md:pr-10 flex flex-col justify-center">
          <div>
            <h1 className="text-4xl lg:text-7xl font-medium not-italic mb-4 leading-none">
              Welcome to SP <br /> Medifort
            </h1>
            <p className="text-3xl lg:text-[40px] font-medium not-italic font-roboto">
              A Place to Grow, Serve, and Excel
            </p>
          </div>
          <p className="text-lg font-thin not-italic  pb-10">
            At SP Medifort Hospital, we are more than just a healthcare
            institution, we are a mission-driven team of healers, thinkers,
            leaders, and innovators dedicated to putting patients first. Whether
            you are a clinician, support staff, administrator, or aspiring
            student, your career here will be filled with purpose, progress, and
            pride.
          </p>
          {/* Buttons */}
          {/* <div className="flex flex-col md:flex-col lg:flex-row gap-4 lg:gap-10 pb-24">
            <button className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-3 rounded-full border-4 border-white hover:scale-105 transition-all duration-300 w-full lg:w-auto">
              Explore Current Openings
              <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
                <IoArrowForward className="text-[#870064]" size={20} />
              </span>
            </button>

            <button className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-3 rounded-full border-2 border-white hover:scale-105 transition-all duration-300 w-full lg:w-auto">
              Submit Your Resume
              <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
                <IoArrowForward className="text-[#870064]" size={20} />
              </span>
            </button>
          </div> */}
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 w-full flex justify-end">
          <img
            src="/images/career/doctor.png"
            alt="Doctor"
            className="w-full object-bottom"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
