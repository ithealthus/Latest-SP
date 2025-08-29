import React from 'react';
import Image from 'next/image';

const awards = [
    {
        title: 'NABH Accreditation (In Process)',
        image: '/images/Awardsa/1.webp',
    },
    {
        title: 'Joint Commission International (JCI) Accreditation - 8th Edition',
        image: '/images/Awardsa/2.webp',
    },
    {
        title: 'Recognized as South Kerala’s Most Technologically Advanced Hospital (2025, Kerala Health Awards)',
        image: '/images/Awardsa/3.webp',
    },
    {
        title: 'AI Implementation Excellence Award (South India Healthcare Tech Forum)',
        image: '/images/Awardsa/4.webp',
    },
];

const AwardsSection = () => {
    return (
        <section className="bg-[#EFDAD9] py-10">
            <div className="max-w-5xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    Awards & Accreditations
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                    Recognized Excellence in Healthcare
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 pt-3 pb-10">
                    {awards.map((award, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            style={{ boxShadow: 'rgba(0, 0, 0, 0.1) 0px 4px 12px' }}
                            className="bg-white rounded-xl border border-[#870064]/80 text-center p-6 flex flex-col items-center h-full"
                        >
                            <div className="text-[#870064] mb-4">
                                <Image
                                    className="w-20 mx-auto py-3"
                                    width={150}
                                    height={150}
                                    src={award.image}
                                    alt={award.title}
                                />
                            </div>
                            <p className="text-sm font-bold pb-3 text-[#02033B]">
                                {award.title}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AwardsSection;
