import React from "react";
import { IoArrowForward } from "react-icons/io5";

function CareerTraining() {
  const data = {
    whyChoose: [
      "Affordable and customizable",
      "Reports within 24 hours",
      "Follow-up consultation included",
      "Insurance claim assistance",
    ],
  };
  return (
    <div>
      {/* Why Choose Section */}
      {data.whyChoose?.length > 0 && (
        <section className="py-12 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <h2 className="text-2xl sm:text-[36px] md:text-[44px] lg:text-[48px] leading-tight font-bold tracking-[-0.4px] text-[#41002d] mb-8">
                Why Choose Our Packages?
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
                    <span className="">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto">
                <img
                  src="/images/health-packages/why-choose.jpg"
                  alt="Why Choose SP Medifort"
                  data-aos="fade-up"
                  data-aos-delay="200"
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
