'use client';
import React from 'react';
import Link from 'next/link';

function InsuranceAndFinance({ insuranceFinance }) {
  if (!insuranceFinance) return null;

  const { title, subtitle, items, cta } = insuranceFinance;

  return (
    <section className="bg-white border-y border-primary py-12 px-6">
      <div className="max-w-5xl mx-auto space-y-10">
        {/* Title */}
        <div className="text-center">
          <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-lg text-accent font-medium">{subtitle}</p>
        </div>

        {/* Pill-style Cards with Hover Reveal */}
        <div className="space-y-4">
          {items?.map((item, index) => (
            <div
              key={index}
              className="group  border-4 border-primary rounded-full px-6 py-2 text-center transition-all duration-300 ease-in-out hover:rounded-xl hover:shadow-md overflow-hidden "
            >
              {/* Title */}
              <h3 className="text-xl sm:text-2xl font-semibold text-primary transition duration-300">
                {item.title}
              </h3>

              {/* Description revealed on hover */}
              <div className="opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-40 transition-all duration-500 ease-in-out mt-3 text-sm sm:text-base text-gray-700 overflow-hidden">
                {item.description}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* {cta?.label && (
          <div className="flex justify-center sm:justify-start">
            <Link
              href={cta.link}
              className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
            >
              {cta.label}
              <span className="flex items-center justify-center w-9 h-9 rounded-full border border-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="w-5 h-5"
                >
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        )} */}
      </div>
    </section>

  );
}

export default InsuranceAndFinance;
