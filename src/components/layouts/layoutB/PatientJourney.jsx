'use client';
import React from 'react';
import Link from 'next/link';

export default function PatientJourney({ patientJourney }) {
  if (!patientJourney) return null;

  const { title, subtitle, steps, cta } = patientJourney;

  return (
    <section className="p-6 md:p-12 bg-secondary text-black">
      <div className="max-w-7xl mx-auto">
        {/* Title and Subtitle */}
        <h2 className="text-black font-roboto text-3xl md:text-4xl text-center font-semibold mb-2">{title}</h2>
        <p className="text-lg text-white text-center mb-12">{subtitle}</p>

        <div className="relative">
          {/* Horizontal line centered with cards (on desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-0 w-full h-[2px] bg-primary/30 z-0 transform -translate-y-1/2" />

          {/* Step Cards */}
          <div className="flex flex-wrap md:flex-nowrap justify-center gap-10 relative z-10">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative w-full sm:w-[48%] md:w-full flex-1 flex flex-col items-center text-center"
              >
                {/* Number circle (on top of card) */}
                <div className="absolute -top-6 z-20">
                  <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold shadow-md">
                    {idx + 1}
                  </div>
                </div>

                {/* Dot on the center line (desktop only) */}
                <div className="hidden md:block w-4 h-4 bg-primary rounded-full border-4 border-white shadow-md z-10 relative mb-[-16px]" />

                {/* Card */}
                <div className="bg-white border border-primary/20 rounded-xl pt-5 pb-4 px-4 shadow-md min-h-[100px] flex flex-col justify-start w-full">
                  <h4 className="font-semibold text-sm md:text-sm mb-1">
                    {step.title}
                  </h4>
                  {step.description && (
                    <p className="text-sm text-gray-600">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16 text-center">
          <Link
              href="#"
              className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
            >
              {cta}
              <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-4 h-4 sm:w-5 sm:h-5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>

        </div>
      </div>
    </section>
  );
}
