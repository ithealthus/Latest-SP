'use client'
import Image from 'next/image';
import React from 'react'
const Infrastructure = () => {
    const infrastructure = [
        {
            title: "500,000+ sq. ft. hospital campus",
            image: "/images/AdvanceTechnology/adv4.jpg",
        },
        {
            title: "475+ beds, including 170 Level-D ICU beds",
            image: "/images/AdvanceTechnology/adv4.jpg",
        },
        {
            title: "10 Modular Operating Theatres",
            image: "/images/AdvanceTechnology/adv4.jpg",
        },
        {
            title: "30-bed Emergency Wing with dedicated Burns Unit",
            image: "/images/AdvanceTechnology/adv4.jpg",
        },
        {
            title: "South Asia’s 1st 3D Hybrid Cath Lab (GE Allia) with AI",
            image: "/images/AdvanceTechnology/cathlab.jpg",
        },
        {
            title: "South Kerala’s 1st Robotic Zeiss Kinevo Neuro Microscope",
            image: "/images/infrastructure/adv4.jpg",
        },
        {
            title: "Fully motorized X-ray suite",
            image: "/images/AdvanceTechnology/adv4.jpg",
        },
        {
            title: "Multi-level covered parking for 650+ vehicles",
            image: "/images/infrastructure/parking.jpg",
        },
        {
            title: "In-house pharmacy",
            image: "/images/AdvanceTechnology/pharmacy.jpg",
        },
        {
            title: "Dedicated physiotherapy zone",
            image: "/images/AdvanceTechnology/physiotherapy.jpg",
        },
        {
            title: "Advanced lab & radiology facilities",
            image: "/images/AdvanceTechnology/lab.jpg",
        },
        {
            title: "Infection-controlled, efficiency-driven architecture",
            image: "/images/AdvanceTechnology/architecture.jpg",
        },
    ];


    return (
        <section className="py-12">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    Infrastructure & Facilities
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                    A Healing Environment Built for the Future
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {infrastructure.map((tech, idx) => (
                        <div
                            key={idx}
                            data-aos="fade-up"
                            data-aos-delay={idx * 100}
                            className="relative w-full rounded-xl overflow-hidden group shadow-lg aspect-[1.2/1]"
                        >
                            <img
                                src={tech.image}
                                alt={tech.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t text-left from-black/70 via-black/30 to-transparent p-4 flex flex-col justify-end transition-all">
                                <p className="text-white font-bold text-lg md:text-2xl leading-tight">
                                    {tech.title}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

        </section>
    )
}

export default Infrastructure