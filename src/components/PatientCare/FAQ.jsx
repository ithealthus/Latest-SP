'use client'
import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';

const FAQData = [
    {
        title: 'What documents do I need for admission?',
        description: 'We treat every patient like family',
    },
    {
        title: 'Can I opt for cashless insurance at the hospital?',
       description: 'We treat every patient like family',
    },
    {
        title: 'How do I get a copy of my discharge summary and reports?',
        description: 'We treat every patient like family',
    },
    {
        title: 'Is there any support for international patients during travel?',
      description: 'We treat every patient like family',
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const toggleIndex = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };
    return (
        <>
            <div className="max-w-4xl mx-auto py-10 lg:py-16 px-3">
                <h2
                    data-aos="fade-up"
                    className="text-2xl md:text-5xl font-bold text-[#870064] mb-8 text-center lg:text-left"
                >
                    Frequently Asked Questions (FAQs)
                </h2>


                <div className="space-y-3">
                    {FAQData.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className={`border border-[#870064] rounded-2xl p-4 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-xl' : 'bg-white shadow-xl'
                                }`}
                            onClick={() => toggleIndex(index)}
                        >
                            <div className="flex justify-between items-center">
                                <div>
                                    <p className="font-semibold text-[#000] ">
                                        0{index + 1}. {item.title}
                                    </p>
                                    {activeIndex === index && (
                                        <p className="text-sm text-[#002D39] mt-3 font-medium duration-700">{item.description}</p>
                                    )}
                                </div>
                                <div className="text-[#870064]">
                                    {activeIndex === index ? <Minus className='border-2 border-[#870064] rounded-2xl' /> : <Plus className='border-2 border-[#870064] rounded-2xl' />}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FAQ