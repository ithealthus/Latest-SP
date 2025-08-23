"use client";
import React from "react";
import { MdAddIcCall } from "react-icons/md";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";

const CtaSection = () => {
  return (
    <section className="bg-primary text-white flex flex-col md:flex-row items-center justify-between overflow-hidden rounded-tr-[40px] rounded-br-[40px] mt-20">
      {/* Left Decorative Image */}
      <div className="w-full md:w-[28%] relative min-h-[300px] sm:min-h-[360px] md:min-h-[400px]">
        <img
          src="/images/spimg.svg"
          alt="Background Decoration"
          className="absolute bottom-0 left-[-120px] sm:left-[-140px] md:left-[-160px] w-[280px] sm:w-[340px] md:w-[400px] object-contain"
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-[72%] px-4 sm:px-6 md:px-10 py-10 sm:py-12 flex flex-col justify-center space-y-8">
        {/* Heading & Text */}
        <div>
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[55px] font-semibold leading-tight">
            Book an Appointment
          </h2>
          <p className="text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-normal mt-3 leading-snug">
            Whether you're a new patient or returning, booking an appointment is
            just a few clicks away.
          </p>
        </div>

        {/* Button */}
        <div>
          <Link href='/find-a-doctor'>
          <button className="flex items-center justify-between gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-6 py-3 rounded-full border-2 border-white hover:scale-105 transition-all duration-300 lg:w-auto">
            Book Online
            <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
              <IoArrowForward className="text-[#870064]" size={20} />
            </span>
          </button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-8">
          <div className="flex items-center gap-2 text-lg">
            <div className="relative">
              <MdAddIcCall
                size={32}
                className="sm:size-[36px] md:size-[40px]"
              />
            </div>
            <span className="ml-3 font-normal not-italic text-[22px] sm:text-[24px] md:text-[28px]">
              0471 3100100
            </span>
          </div>
          <div className="hidden md:block text-2xl">|</div>
          <div className="font-normal not-italic text-[20px] sm:text-[20px] md:text-[24px] leading-snug">
            Appointment slots: Every day | 8 AM to 7 PM
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
