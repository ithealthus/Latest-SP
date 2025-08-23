import React from "react";
import Image from "next/image";
import Link from "next/link";
import Breadcrumb from "@/components/shared/Breadcrumb";

function HeroB({ hero }) {
  if (!hero) return null;

  return (
    <section className="bg-[url('/images/bg.png')] bg-cover bg-center bg-no-repeat px-4 md:px-12 py-8 md:py-12">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="mb-4">
              <Breadcrumb />
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-5xl font-medium text-primary font-roboto">
              {hero.title}
            </h1>
            {hero.description?.map((text, i) => (
              <p
                key={i}
                className="font-roboto font-normal text-base md:text-lg leading-snug md:leading-[24px] text-black mt-4"
              >
                {text}
              </p>
            ))}
            {hero.cta?.href && (
              <div className="mt-6">
                <Link
                  href={hero.cta.href}
                  className="inline-flex items-center gap-4 bg-primary text-white px-6 py-3 rounded-full font-roboto font-bold text-lg leading-tight hover:bg-accent/80 transition duration-300"
                >
                  {hero.cta.label}
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
            )}
          </div>

          {/* Right Column — Image */}
          <div className="relative w-full">
            <Image
              src={hero.image.src}
              alt={hero.image.alt}
              width={1000}
              height={1000}
              // fill
              // sizes="(max-width: 768px) 100vw, 50vw"
              className="rounded-xl  object-cover"
            // priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroB;
