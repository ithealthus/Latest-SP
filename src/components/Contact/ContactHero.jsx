"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Link from "next/link";
import { IoArrowForward } from "react-icons/io5";

import Breadcrumb from "@/components/shared/Breadcrumb";

const ContactHero = () => {
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
            <h1 className="text-4xl lg:text-7xl font-medium leading-none mb-5">
              Contact Us
            </h1>
            <p className="text-3xl lg:text-4xl font-medium font-roboto">
              SP Medifort Hospital
            </p>
          </div>

          <p className="text-xl font-medium">
            We are here when you need us – for emergencies, appointments, or just a question.
          </p>

          {/* CTA Button */}
          <Link href="/find-a-doctor">
            <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-2 mt-2 rounded-full border-2 border-white hover:scale-105 transition-transform duration-300">
              Contact Us
              <span className="w-8 h-8 flex items-center justify-center border-2 border-[#fff] rounded-full">
                <IoArrowForward className="text-[#fff]" size={20} />
              </span>
            </button>
          </Link>
        </div>

        {/* Image Section */}
        <div className="w-full md:w-[50%] flex justify-end">
          <img
            src="/images/contact/Contact-us.webp"
            alt="Doctor"
            className="object-contain h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[650px] lg:w-full mx-auto scale-x-[-1]"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
