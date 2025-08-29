'use client'
import React from 'react';
import Image from 'next/image';

const csrItems = [
    {
        title: 'Monthly Free Health Camps for rural and underprivileged populations',
        icon: '/images/story/Group.svg'
    },
    {
        title: 'Cancer Awareness Drives in schools and colleges',
        icon: '/images/story/Vector.svg'
    },
    {
        title: 'Mobile Medical Units for tribal and remote regions',
        icon: '/images/story/mobile.svg'
    },
    {
        title:
            "Health Education on lifestyle diseases, women’s wellness, and elder care",
        icon: '/images/story/health.svg'
    },
    {
        title: 'Blood donation camps with local NGOs',
        icon: '/images/story/blood.svg'
    },
    {
        title:
            "School Campaign: ‘Healthy Start with SP Medifort’ - Total Healthcare Partner for Schools",
        icon: '/images/story/school.svg'
    },
];

const CSRSection = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-6xl mx-auto px-4 text-center">                
                 <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    CSR & Community Outreach
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                   Healthcare Beyond the Hospital
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-left pt-5 pb-10">
                    {csrItems.map((item, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            className="bg-[#870064] text-white p-4 rounded-xl flex gap-3 items-center"
                            style={{boxShadow:'rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px'}}
                        >
                           <div className="text-[#870064] mt-1 w-[30%]">
                                <Image
                                    className='w-20 mx-auto p-2'
                                    width={150}
                                    height={150}
                                    src={item.icon}
                                    alt={item.title} />
                            </div>
                            <p className="text-xl font-bold text-left text-[#fff] w-[70%]">{item.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CSRSection;
