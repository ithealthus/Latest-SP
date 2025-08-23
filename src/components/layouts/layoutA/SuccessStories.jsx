'use client';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';
export default function SuccessStories({ successStories }) {
  const { items, cta } = successStories;
  if (!items || items.length === 0) return null;

  const firstRow = items.slice(0, 4);
  const remainingItems = items.slice(4);

  const secondRowPairs = [];
  let leftover = null;

  for (let i = 0; i < remainingItems.length; i += 2) {
    const first = remainingItems[i];
    const second = remainingItems[i + 1];

    if (second) {
      if (first.type === 'image') {
        secondRowPairs.push([first, second]);
      } else {
        secondRowPairs.push([second, first]);
      }
    } else {
      leftover = first;
    }
  }

  return (
    <section className="px-4 py-8 bg-white text-gray-800">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold py-10 text-left">Success Stories</h2>

        {/* First Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-4 mx-auto w-full">
          {firstRow.map((item, index) => (
            <div
              key={index}
              className={`bg-[#87006480] rounded-xl overflow-hidden shadow-sm flex items-center justify-center min-h-[200px] text-top ${item.type === 'text' ? 'p-2' : ''
                }`}
            >
              {item.type === 'text' ? (
                <p className="text-lg font-medium leading-snug text-purple-950">{item.text}</p>
              ) : (
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={100}
                  height={200}
                  className="object-cover w-full h-[200px] rounded-xl shadow-2xl"
                />
              )}
            </div>
          ))}
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mx-auto w-full">
          {secondRowPairs.map(([img, txt], index) => (
            <React.Fragment key={index}>
              <div className="bg-[#87006480] rounded-xl overflow-hidden shadow-sm flex items-center justify-center min-h-[200px] text-top">
                <Image
                  src={img.src}
                  alt={img.alt}
                  width={100}
                  height={200}
                  className="object-cover w-full h-[200px] rounded-xl shadow-xl"
                />
              </div>
              <div className="bg-[#87006480] text-purple-950 rounded-xl overflow-hidden shadow-sm flex items-center justify-center min-h-[100px] text-top">
                <p className="text-lg font-medium leading-snug">{txt.text}</p>
              </div>
            </React.Fragment>
          ))}
        </div>

        {/* Optional leftover */}


        {/* CTA Button */}
        {/* CTA Button */}

        {/* <div className="mt-10 text-center">
    <Link
      href={cta.link}
      className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
    >
      {cta.label}
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
  </div> */}
      </div>
    </section>
  );
}
