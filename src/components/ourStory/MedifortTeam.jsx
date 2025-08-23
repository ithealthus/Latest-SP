import React from 'react';
import Image from 'next/image';

const teamData = [
    {
        title: '50+ Specialty Consultants',
        image: '/images/spTeam/1.webp',
    },
    {
        title: 'Critical Care Experts available 24x7',
        image: '/images/spTeam/2.webp',
    },
    {
        title: 'Trained Emergency Response Team',
        image: '/images/spTeam/3.webp',
    },
    {
        title: 'Skilled Nursing Staff with ICU Care Expertise',
        image: '/images/spTeam/4.webp',
    },
    {
        title: 'Diagnostic, Lab & Imaging Technicians',
        image: '/images/spTeam/5.webp',
    },
    {
        title: 'Rehabilitation & Physiotherapy Experts',
        image: '/images/spTeam/6.webp',
    },
];

const MedifortTeam = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    The SP Medifort Team
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                    Compassionate. Competent. Committed.
                </p>

                <h3 className="text-left font-semibold text-black mb-4 text-2xl">Our team includes:</h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-3 pb-10">
                    {teamData.map((member, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="border-b-8 bg-white border border-[#D95DB0] rounded-md shadow-sm p-4"
                        >
                            <div className="rounded-lg">
                                <Image
                                    className="my-3 mx-auto rounded-xl"
                                    width={600}
                                    height={600}
                                    src={member.image}
                                    alt={member.title}
                                />
                            </div>
                            <h3 className="text-2xl font-medium text-left text-[#252B42] w-[70%] mb-2">
                                {member.title}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MedifortTeam;
