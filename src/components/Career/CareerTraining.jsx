import React from "react";
import { IoArrowForward } from "react-icons/io5";

function CareerTraining() {
  const data = {
    whyChoose: [
      "PG residency programs (CCT-EM, MRCEM pathways)",
      "NSDC-recognized General Duty Assistant (GDA) training",
      "Hands-on internships for MBBS, MSW, and MHA students",
      "Workshops in advanced surgical techniques & patient safety",
    ],
  };
  return (
    <div>
      {/* Why Choose Section */}
      {data.whyChoose?.length > 0 && (
        <section className="py-12 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-2xl sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight font-bold tracking-[-0.4px] text-[#41002d] mb-8">
                Training & Continuing Education
              </h2>

              <ul className="space-y-4">
                {data.whyChoose.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base md:text-lg text-black leading-relaxed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 min-w-6 text-[#a10072] mt-[2px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {/* Button */}
              {/* <div className="mt-6">
                <button className="flex items-center gap-3 bg-gradient-to-r from-[#D95DB0] to-[#D95DB0] text-white text-lg font-semibold px-8 py-3 rounded-full border-4 border-white hover:scale-105 transition-all duration-300">
                  Explore Training program
                  <span className="w-8 h-8 flex items-center justify-center bg-transparent border-2 border-[#870064] rounded-full">
                    <IoArrowForward className="text-[#870064]" size={20} />
                  </span>
                </button>
              </div> */}
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto">
                <img
                  src="/images/services/audioSpeech/Audiology-&-Speech-Therapy(why choose).webp"
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default CareerTraining;
