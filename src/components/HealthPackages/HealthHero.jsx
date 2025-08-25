"use client";
import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";

const HealthHero = () => {
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
          <div className="">
            <h1 className="text-4xl lg:text-6xl font-medium leading-none mb-5">
              Prevention is Better Than Cure
            </h1>
            <p className="text-xl font-medium font-roboto">
              At SP Medifort, we offer curated health screening packages
              designed to detect problems early, when they’re easiest to treat.
            </p>
          </div>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[70%] flex justify-end">
          <img
            src="/images/health-packages/doctor.png"
            alt="Doctor"
            className="object-contain h-[400px] lg:h-[500px]  lg:w-full mx-auto "
          />
        </div>
      </div>
    </section>
  );
};

export default HealthHero;
