'use client';
import React from 'react';

function CommonConditions({ scopeOfCare }) {
  if (!scopeOfCare || scopeOfCare.length === 0) return null;

  return (
    <section className="bg-primary py-10 px-4 sm:px-6 md:px-10 border-y border-primary">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center">
          <h2 className="text-3xl sm:text-3xl md:text-4xl font-roboto font-semibold text-white">
            Conditions We Treat
          </h2>
        </div>

        {scopeOfCare.map((section, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-2xl sm:text-2xl font-semibold text-white">
              {section.title}
            </h3>
            <p className="text-base sm:text-lg text-white mb-4 ">
              {section.overview}
            </p>

           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  {/* First Card */}
  <div className="bg-white border border-primary/10 rounded-xl p-8">
    {/* <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6">
      {scopeOfCare[0].title} - Part 1
    </h4> */}
    <ul className="list-disc pl-5 space-y-1 text-black text-base sm:text-lg">
      {scopeOfCare[0].sections[0].items
        .slice(0, Math.ceil(scopeOfCare[0].sections[0].items.length / 2))
        .map((item, i) => (
          <li key={i}>{item}</li>
        ))}
    </ul>
  </div>

  {/* Second Card */}
  <div className="bg-white border border-primary/10 rounded-xl p-8">
    {/* <h4 className="text-xl sm:text-2xl font-semibold text-black mb-6">
      {scopeOfCare[0].title} - Part 2
    </h4> */}
    <ul className="list-disc pl-5 space-y-1 text-black text-base sm:text-lg">
      {scopeOfCare[0].sections[0].items
        .slice(Math.ceil(scopeOfCare[0].sections[0].items.length / 2))
        .map((item, i) => (
          <li key={i}>{item}</li>
        ))}
    </ul>
  </div>
</div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default CommonConditions;

