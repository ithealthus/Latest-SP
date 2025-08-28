'use client';

import React from 'react';

function TextSlider({ highlightText }) {
  if (!highlightText || highlightText.length === 0) return null;

  return (
    <div className="overflow-hidden border-y-4 border-primary  bg-primary w-full py-6 ">
      <div className="animate-marquee whitespace-nowrap flex gap-10  items-center text-white font-roboto font-medium text-lg">
        {[...Array(5)].flatMap((_, i) =>
          highlightText.map((text, index) => (
            <div key={`${i}-${index}`} className="flex items-center gap-3 px-4">
              <span className="font-roboto text-[22px] md:text-[28px] leading-[100%] text-center block">
                {text}
              </span>
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-8 h-8 border border-white rounded-full p-1"
              >
                <path d="M12 5v14M19 12l-7 7-7-7" />
              </svg>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default TextSlider;
