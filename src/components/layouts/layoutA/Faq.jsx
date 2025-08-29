'use client';
import { useState } from 'react';
import { FaRegQuestionCircle } from 'react-icons/fa';

const Faq = ({ faqs }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
<section className="py-12 px-4 bg-white relative">
  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

    {/* Left Column - Heading (1/3) */}
    <div className="col-span-1 text-center md:text-left">
      <h2 className="text-3xl font-bold mb-4 border-b-2 border-black">Any Questions?</h2>
      <p className="text-base md:text-lg text-gray-600">
        Here are answers to some common queries. Still unsure? Contact us!
      </p>
    </div>

    {/* Right Column - FAQs (2/3) */}
    <div className="col-span-2 space-y-4">
      {faqs.map((faq, index) => (
        <div key={index}>
  <button
    onClick={() => toggleFaq(index)}
    className={`w-full flex items-center justify-between gap-4 border border-primary text-left px-6 py-4 font-semibold text-lg md:text-xl transition-all duration-300 ${
      openIndex === index
        ? 'bg-primary text-[#fff] rounded-t-2xl rounded-b-none'
        : 'bg-primary text-[#fff] rounded-2xl'
    }`}
  >
    <span className="flex items-center gap-3 ">
      <FaRegQuestionCircle className="text-xl" />
      {faq.question}
    </span>
  </button>

  {openIndex === index && (
    <div className="bg-[#c076a540] rounded-b-2xl px-6 py-4 text-base md:text-lg text-[#3a003f] font-medium border-x border-b border-t-0 border-primary">
      {faq.answer}
    </div>
  )}
</div>
      ))}
    </div>
    
  </div>
</section>


  );
};

export default Faq;
