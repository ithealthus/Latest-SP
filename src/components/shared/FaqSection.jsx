import { useState } from "react";
import { Plus, Minus } from "lucide-react"; // npm install lucide-react

const faqs = [
  {
    question: "Will I receive life-changing treatment at SP Medifort?",
    answer: "Absolutely. At SP Medifort, we specialize in advanced, evidence-based treatments that have helped countless patients recover from complex conditions, including cardiac, neurological, and critical care challenges.",
  },
  {
    question: "Is SP Medifort equipped well?",
    answer:
      "Yes. SP Medifort is equipped with some of South Kerala’s most advanced medical technology, including robotic surgery systems, AI-powered diagnostics, and a 3D hybrid cath lab. ",
  },
  {
    question: "Is emergency care available 24x7 at SP Medifort?",
    answer: "Yes. Our 30-bed emergency wing with ICU, trauma, and burns unit is open round-the-clock for immediate care.",
  },
  {
    question: "Do you offer support for international patients before arrival?",
    answer:
      "Yes. Our International Patient Desk assists with visa, travel, appointments, and accommodation, right from the start.",
  },
  {
    question: "What specialties make SP Medifort stand out as a multispeciality hospital in Thiruvananthapuram?",
    answer:
      "We offer 50+ specialties, with strengths in cardiology, neurology, oncology, orthopaedics, and robotic surgery.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="bg-[#FDEDF8] py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-black mb-8 max-w-6xl">
          Find answers to common questions about our services, treatments,
          appointments, and patient care options to help you make informed
          health decisions.
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white rounded-lg p-4 ${
                openIndex === index && faq.answer ? "shadow-lg" : ""
              }`}
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-primary font-semibold  text-xl">
                  {faq.question}
                </h3>
                <span className="bg-pink-200 text-black rounded-full w-6 h-6 flex items-center justify-center">
                  {openIndex === index && faq.answer ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </div>
              {openIndex === index && faq.answer && (
                <p className="mt-4 text-sm text-black leading-relaxed">
                  {faq.answer.split("advanced medical technology").map((part, i, arr) =>
                    i === arr.length - 1 ? (
                      part
                    ) : (
                      <>
                        {part}
                        <a
                          href="#"
                          className="text-black"
                        >
                          advanced medical technology
                        </a>
                      </>
                    )
                  )}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-6 text-right">
          <a
            href="#"
            className="text-sm font-bold text-purple-900 hover:underline flex items-center justify-end gap-1"
          >
            More FAQs
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
