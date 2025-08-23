"use client";
import React, { useState } from "react";

export default function TechnologiesSectionA({ data }) {
  const { title, items } = data;
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-secondary px-4 md:px-12 py-16 ">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-white font-title text-3xl md:text-4xl font-semibold font-roboto px-4 sm:px-0 mb-8">
          {title}
        </h2>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Side - Buttons */}
          <div className="w-full lg:w-1/2">
            <div className="p-4 sm:p-0">
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {items.map((tech, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedIndex(idx)}
                    className={`text-xs sm:text-base h-10 sm:h-12 px-4 sm:px-5 rounded-full border-2 font-semibold transition-all duration-200
                      ${
                        idx === selectedIndex
                          ? "bg-primary text-white border-primary shadow-md"
                          : "bg-white text-primary border-primary hover:bg-primary hover:text-white"
                      }`}
                  >
                    {tech.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Description */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-accent/30 h-full">
              <h3 className="text-2xl text-primary font-semibold mb-3">
                {items[selectedIndex].name}
              </h3>
              <p className="text-lg text-black font-roboto">
                {items[selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
