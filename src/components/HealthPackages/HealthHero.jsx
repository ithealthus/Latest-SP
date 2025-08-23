"use client";
import React from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";

const HealthHero = () => {
  return (
    <section className="bg-primary text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden mx-3 lg:mx-20 pt-16">
      <div className="px-4 sm:px-4 md:px-64">
        <Breadcrumb textColor="text-white" borderColor="border-white" />
      </div>
      <div className="px-4 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-stretch justify-between h-full gap-10">
        {/* Text Block */}
        <div className="md:w-2/3 w-full space-y-10 mt-6 md:mt-0 md:pr-10 flex flex-col justify-center">
          <div className="mb-6">
            <h1 className="text-4xl lg:text-7xl font-medium not-italic mb-16 leading-none">
              Prevention is Better Than Cure
            </h1>
            <p className="text-3xl lg:text-4xl font-medium not-italic font-roboto">
              At SP Medifort, we offer curated health screening packages
              designed to detect problems early, when they’re easiest to treat.
            </p>
          </div>
        </div>

        {/* Image Block */}
        <div className="md:w-1/2 w-full flex justify-end">
          <img
            src="/images/health-packages/doctor.png"
            alt="Doctor"
            className="lg:w-[70%] object-cover h-[650px] mx-auto object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthHero;
