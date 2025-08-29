"use client";
import React from "react";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";
import Breadcrumb from "@/components/shared/Breadcrumb";

const HealthHero = () => {
  return (
    <section className="bg-primary text-white rounded-bl-[50px] rounded-br-[40px] overflow-hidden lg:mx-14 pt-10">
      {/* Breadcrumb */}
      <div className="px-5 md:px-20">
        <Breadcrumb textColor="text-white" borderColor="border-white" />
      </div>

      {/* Content */}
      <div className="px-5 md:px-8 lg:px-12 xl:px-20 flex flex-col md:flex-row items-stretch justify-between gap-10">
        {/* Text Section */}
        <div className="w-full md:w-2/3 flex flex-col justify-center mt-6 md:mt-0 space-y-5 md:pr-10">
          <div className="lg:-mt-24">
            <h1 className="text-3xl lg:text-5xl font-medium  my-5 lg:mb-5">
              Prevention is Better Than Cure
            </h1>
            <p className="text-xl lg:text-2xl font-medium font-roboto">
              At SP Medifort, we offer curated health screening packages
              designed to detect problems early, when they’re easiest to treat.
            </p>
          </div>

          <p className="text-base lg:text-xl font-normal">
            Regular health checkups empower you with knowledge about your body,
            reduce risks, and help in timely intervention for a healthier life.
          </p>

          {/* CTA Button */}
          <Link href="/health-packages">
            <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-2 mt-2 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
              Explore Packages
              <span className="w-8 h-8 flex items-center justify-center border-2 border-[#fff] rounded-full">
                <IoArrowForward className="text-[#fff]" size={20} />
              </span>
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-end">
          <img
            src="/images/health-packages/doctor.png"
            alt="Doctor"
            className="object-contain h-[400px] lg:h-[500px] xl:h-[550px] 2xl:h-[650px] lg:w-full mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HealthHero;
