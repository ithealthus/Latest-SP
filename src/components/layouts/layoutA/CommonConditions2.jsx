'use client';
import React, { useState } from 'react';

export default function CommonConditions2({ scopeOfCare }) {
  if (!scopeOfCare || scopeOfCare.length === 0) return null;
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleToggle = () => {
    setSelectedCategory((prev) => (prev + 1) % scopeOfCare.length);
  };

  return (
    <section className="bg-primary py-12 px-4 sm:px-6 md:px-10 border-y border-primary">
        <div className="max-w-6xl mx-auto space-y-4">
          {/* Title + Toggle Button */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <h2 className="text-3xl sm:text-4xl md:text-4xl font-roboto font-semibold text-white">
              Conditions We Treat
            </h2>

            {/* Single Toggle Button */}
            <button
              onClick={handleToggle}
              className="px-6 py-2 bg-white text-primary font-semibold rounded-full border-2 border-white hover:bg-primary hover:text-white transition-all"
            >
              {scopeOfCare[selectedCategory].title}
            </button>
        </div>

        {/* Content */}
        <div className="space-y-8">
          <p className="text-xl  text-white">
            {scopeOfCare[selectedCategory].overview}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {scopeOfCare[selectedCategory].sections.map((group, groupIndex) => (
              <div
                key={groupIndex}
                className="bg-white border border-primary/10 rounded-xl p-8"
              >
                <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6">
                  {group.title}
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-black text-base sm:text-lg">
                  {group.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
