import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";
function HeroA({ hero }) {
  if (!hero) return null;
  return (
    <section className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat px-4 sm:px-4 md:px-12 py-4 md:py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Column */}
        <div className="text-left">
          <div className="mb-4 sm:mb-6">
            <Breadcrumb />
          </div>
          <h1 className="text-3xl md:text-4xl font-semibold font-title sm:text-3xl text-primary font-roboto mb-4">
            {/* reduced bottom margin for mobile from mb-8 to mb-4 */}
            {hero.title}
          </h1>
          <div className="">
            {/* reduced vertical padding for mobile and sm from py-6/4 to py-2 */}
            {hero.description?.map((text, i) => (
              <p
                key={i}
                className="font-roboto font-normal text-base md:text-[18px] leading-snug md:leading-[24px] text-black "
              >
                {text}
              </p>
            ))}
          </div>
          {/* CTA */}
         
            <div className="mt-6 sm:mt-4 md:mt-10">
              <Link
                href='/find-a-doctor'
                className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
              >
                {hero.cta.label}
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
        {/* Right Column - Responsive Image */}
        <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px]">
          <Image
            src={hero.image.src}
            alt={hero.image.alt}
            layout="fill"
            objectFit="cover"
            className="rounded-xl shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
export default HeroA;
