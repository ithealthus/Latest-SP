"use client";
import React from "react";
import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { FaCalendarCheck, FaHospital, FaVials, FaPhone } from "react-icons/fa";

const FloatingButton = () => {
  return (
    <div className="group z-50 fixed bottom-3 left-3 p-2 flex items-end justify-start w-24 h-24 drop-shadow-xl">
      {/* Main Floating Icon Button */}
      <div className="text-white shadow-xl flex items-center justify-center p-3 rounded-full bg-gradient-to-r from-primary to-secondary z-50 absolute cursor-pointer">
        <MessageCircle color="white" size={25} />
      </div>

      {/* Button 1: Book Appointment */}
      <Link
        href="/find-a-doctor"
        className="absolute rounded-full transition-all duration-200 ease-out scale-0 group-hover:scale-100 group-hover:translate-x-14 group-hover:translate-y-[18px] flex p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
      >
        <FaCalendarCheck className="text-2xl" />
      </Link>

      {/* Button 2: Our Hospitals */}
      {/* <Link
        href="#our-hospitals"
        className="absolute rounded-full transition-all duration-200 ease-out scale-0 group-hover:scale-100 group-hover:translate-x-[6rem] group-hover:-translate-y-[3rem] flex p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
      >
        <FaHospital className="text-2xl" />
      </Link> */}

      {/* Button 3: Book Health Check */}
      <Link
        href="/health-check-packages"
        className="absolute rounded-full transition-all duration-200 ease-out scale-0 group-hover:scale-100 group-hover:translate-x-[3rem] group-hover:-translate-y-[2.5rem] flex p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
      >
        <FaVials className="text-2xl" />
      </Link>

      {/* Button 4: Call Us */}
      <Link
         href="tel:04713100100"
        className="absolute rounded-full transition-all duration-200 ease-out scale-0 group-hover:scale-100 group-hover:-translate-y-[4rem] flex p-2.5 hover:p-3 bg-dark hover:bg-primary text-white"
      >
        <FaPhone className="text-2xl" />
      </Link>
    </div>
  );
};

export default FloatingButton;
