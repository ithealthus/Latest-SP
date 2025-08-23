import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "1. Commitment to Clinical Excellence",
    answer:
      "A passion for exceptional patient outcomes and continuous improvement drives us. Our teams uphold evidence-based care, cutting-edge research, and best practices in every procedure.",
  },
  {
    question: "2. Interdisciplinary Collaboration",
    answer:
      "Here, departments don’t work in isolation. Physicians, nurses, therapists, and technologists collaborate seamlessly ensuring better treatment decisions and professional bonding.",
  },
  {
    question: "3. Career Growth & Development",
    answer:
      "We invest in your future. From in-house training modules to sponsored certifications and leadership development tracks, we help you grow technically and personally.",
  },
  {
    question: "4. World-Class Infrastructure",
    answer:
      "Our state-of-the-art operation theatres, ICU setups, robotic surgery systems, and diagnostic labs empower staff with the tools needed to perform at their best.",
  },
  {
    question: "5. Inclusive & Empowering Culture",
    answer:
      "Diversity is our strength. Whether you are fresh out of college or a veteran in your field, your voice matters here. We celebrate team efforts and individual milestones alike.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(1);

  const toggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-16 text-center">
          Why Build Your Career with SP Medifort?
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-white border border-[#8C1D55] rounded-[20px] p-4 transition-shadow duration-300 ${
                openIndex === index && faq.answer ? "shadow-lg" : ""
              }`}
            >
              <div
                onClick={() => toggle(index)}
                className="flex justify-between items-center cursor-pointer"
              >
                <h3 className="text-primary font-semibold text-xl">
                  {faq.question}
                </h3>
                <span className="border border-[#8C1D55] text-[#8C1D55] rounded-full w-6 h-6 flex items-center justify-center">
                  {openIndex === index && faq.answer ? (
                    <Minus size={16} />
                  ) : (
                    <Plus size={16} />
                  )}
                </span>
              </div>

              {openIndex === index && faq.answer && (
                <p className="mt-4 text-sm text-black leading-relaxed">
                  {faq.answer
                    .split("advanced medical technology")
                    .map((part, i, arr) =>
                      i === arr.length - 1 ? (
                        part
                      ) : (
                        <>
                          {part}
                          <a href="#" className="text-black">
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
      </div>
    </section>
  );
}
