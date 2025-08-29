import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

export default function WhyChooseA({ whyChoose }) {
  if (!whyChoose) return null;

  return (
    <section className="bg-white px-4 sm:px-6 md:px-16 py-12">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2 font-roboto">
          {whyChoose.title}
        </h2>
        <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-black font-title font-medium mb-10 font-roboto">
          {whyChoose.subTitle}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
          {whyChoose.cards?.map((card, index) => (
            <div
              key={index}
              className="bg-primary rounded-xl shadow-md p-6 text-left flex flex-row items-start gap-4"
            >
              <div className="w-16 h-16 text-white flex-shrink-0">
                <Icon icon={card.icon} className="w-16 h-16 text-white" />
              </div>

              <div>
                <h3 className="text-lg font-semibold text-white mb-1">
                  {card.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        {whyChoose.description && (
          <p className="text-base sm:text-lg md:text-lg lg:text-xl xl:text-2xl text-black font-title font-small mb-10 font-roboto">
            {whyChoose.description}
          </p>
        )}

        {/* CTA */}
        {/* {whyChoose.cta?.href && (
          <div className="col-span-1 md:col-span-2 text-left">
            <Link
              href={whyChoose.cta.href}
              className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
            >
              {whyChoose.cta.label}
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
        )} */}
      </div>
    </section>
  );
}
