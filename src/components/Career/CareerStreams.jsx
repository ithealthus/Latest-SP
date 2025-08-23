import React from "react";
import { MdHelpOutline } from "react-icons/md";

const data = {
  faqs: [
    {
      question: "Nursing",
      answer:
        "Be part of our compassionate frontline, where empathy meets clinical expertise. Opportunities in ICU, OT, paediatric, oncology, and general nursing.",
    },
    {
      question: "Physicians & Surgeons",
      answer:
        "Join South Kerala’s leading specialists in oncology, neurology, cardiology, urology, and more. Collaborate across disciplines and practice in high-acuity care environments.",
    },
    {
      question: "Allied Health Professionals",
      answer:
        "Technologists in radiology, lab medicine, physiotherapy, audiology, pharmacy, and speech therapy play a crucial role in our integrated care delivery.",
    },
    {
      question: "Administrative, Operations & IT",
      answer:
        "Behind every successful surgery and happy patient is a team managing HR, accounts, IT systems, quality, supply chain, and facility services. Your skills can shape systems.",
    },
    {
      question: "Volunteer & Internship Programs",
      answer:
        "Students and civic-minded individuals can gain experience, contribute to patient comfort, and explore future healthcare careers through structured volunteering and internship pathways.",
    },
  ],
};

const CareerStreams = () => {
  return (
    <>
      {/* FAQs */}
      {data.faqs?.length > 0 && (
        <section className="py-16 px-4 md:px-0 bg-[#EFDAD952]">
          <div className="w-full max-w-[1600px] mx-auto">
            <h2 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[48px] text-[#44002E] mb-14 text-center tracking-tight">
              Career Streams at SP Medifort
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.faqs.map((faq, idx) => {
                const isLastOdd =
                  data.faqs.length % 2 !== 0 && idx === data.faqs.length - 1;

                return (
                  <div
                    key={idx}
                    className={`flex flex-col md:flex-row items-start bg-white rounded-xl border-2 border-[#870064] px-7 py-7 md:py-8 transition-shadow duration-200 ${
                      isLastOdd ? "md:col-span-2 md:mx-auto md:w-1/2" : ""
                    }`}
                  >
                    <span className="flex-shrink-0 w-9 h-9 bg-[#8A226F] rounded-full flex items-center justify-center mr-0 md:mr-5 mb-3 md:mb-0 mt-1">
                      <MdHelpOutline className="text-white text-2xl" />
                    </span>
                    <div>
                      <h4 className="text-lg md:text-xl font-extrabold text-[#44002E] mb-2 leading-snug">
                        {faq.question}
                      </h4>
                      <p className="text-base md:text-lg text-[#626262]">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default CareerStreams;
