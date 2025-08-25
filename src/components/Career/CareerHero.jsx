"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import { IoArrowForward } from "react-icons/io5";

import Breadcrumb from "@/components/shared/Breadcrumb";

const CareerHero = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="bg-primary text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden mx-3 lg:mx-20 pt-10">
      {/* Breadcrumb */}
      <div className="px-4 md:px-20">
        <Breadcrumb textColor="text-white" borderColor="border-white" />
      </div>

      {/* Content */}
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center mt-6 md:mt-0 space-y-5 md:pr-10">
          <div className="lg:-mt-24">
            <h1 className="text-4xl lg:text-6xl font-medium leading-none mb-5">
              Welcome to SP <br /> Medifort
            </h1>
            <p className="text-2xl lg:text-3xl font-medium font-roboto">
              A Place to Grow, Serve, and Excel
            </p>
          </div>

          <p className="text-xl font-medium">
            At SP Medifort Hospital, we are more than just a healthcare
            institution we are a mission-driven team of healers, thinkers,
            leaders, and innovators dedicated to putting patients first. Whether
            you're a clinician, support staff, administrator, or aspiring student,
            your career here will be filled with purpose, progress, and pride.
          </p>

          {/* Buttons (Optional) */}
          {/* <div className="flex flex-col md:flex-row gap-4 lg:gap-10 pt-2">
            <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-2 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
              Explore Current Openings
              <span className="w-8 h-8 flex items-center justify-center border-2 border-[#fff] rounded-full">
                <IoArrowForward className="text-white" size={20} />
              </span>
            </button>

            <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-2 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
              Submit Your Resume
              <span className="w-8 h-8 flex items-center justify-center border-2 border-[#fff] rounded-full">
                <IoArrowForward className="text-white" size={20} />
              </span>
            </button>
          </div> */}
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-end">
          <img
            src="/images/career/doctor.png"
            alt="Doctor"
            className="object-contain h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] lg:w-full mx-auto scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default CareerHero;
