"use client";
import React from "react";
import Link from "next/link";
import { FaCircleArrowRight } from "react-icons/fa6";

const buttons = [
  {
    href: "/find-a-doctor",
    img: "/images/floticon/doctor.png",
    alt: "Book Appointment",
    label: "Book Appt.",
  },
  {
    href: "/health-check-packages",
    img: "/images/floticon/healthcare.png",
    alt: "Health Check",
    label: "Health Checkup",
  },
  {
    href: "/second-opinion",
    img: "/images/floticon/medical.png",
    alt: "Second Opinion",
    label: "Second Opinion",
  },
  {
    href: "tel:04713100100",
    img: "/images/floticon/phone.png",
    alt: "Call Us",
    label: "Call Us",
  },
];

const FloatingButton = () => {
  return (
    <>
      {/* Desktop View (Left Vertical) */}
      <div className="hidden md:flex fixed left-4 top-1/2 -translate-y-1/2 flex-col items-start gap-4 z-50">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            href={btn.href}
            className="group flex items-center justify-between gap-3 bg-[#370025] text-white rounded-full shadow-lg h-12 w-12 overflow-hidden transition-all duration-500 hover:w-60 cursor-pointer border-2 border-white"
          >
            <div className="flex items-center gap-3">
            <img
              src={btn.img}
              alt={btn.alt}
              className="ml-2 h-7 w-7 object-contain"
            />
            <span className="flex gap-3 items-center whitespace-nowrap font-semibold text-white opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 ease-in-out">
              {btn.alt}
            </span>
            </div>
              <FaCircleArrowRight className="text-2xl mr-3" />
          </Link>
        ))}
      </div>

      {/* Mobile View (Bottom Horizontal Bar) */}
      <div className="md:hidden fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 flex justify-around items-center py-2 shadow-md">
        {buttons.map((btn, index) => (
          <Link
            key={index}
            href={btn.href}
            className="flex flex-col items-center justify-center text-xs text-[#370025] font-medium"
          >
            <img
              src={btn.img}
              alt={btn.alt}
              className="h-6 w-6 object-contain mb-1"
            />
            {btn.label}
          </Link>
        ))}
      </div>
    </>
  );
};

export default FloatingButton;
