"use client";
import React, { useEffect } from 'react';
import Image from 'next/image';
import AOS from "aos";

  
const teamData = [
{
  title: "Global Accreditation",
  image: "/images/second/2.webp",
  description:
    " Kerala’s first hospital to achieve JCI 8th Edition standards.",
},
{
  title: "Advanced Technology",
  image: "/images/second/3.webp",
  description:
    "Robotic-assisted surgeries, AI-powered cath lab, and 3D imaging for accurate planning.",
},
{
  title: "Expert Multispecialty Care",
  image: "/images/second/4.webp",
  description:
    " Leading specialists across cardiology, oncology, neurology, orthopedics, and more.",
},
{
  title: "International Patient Support",
  image: "/images/second/5.webp",
  description:
    " End-to-end assistance for global patients, including teleconsultations and dedicated care managers.",
},

    
];

const MedifortTeams = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    Why Choose SP Medifort for Second Opinion?
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                   SP Medifort is redefining healthcare standards with technology, precision, and patient-first care. Here’s why patients trust us:
                </p>

                <h3 className="text-left font-semibold text-black mb-4 text-2xl">Our team includes:</h3>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 text-left pt-3 pb-10">
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
          width={400}
          height={600}
          src={member.image}
          alt={member.title}
        />
      </div>
      <h3 className="text-xl font-medium text-left text-black w-[90%] mb-2">
        {member.title}
      </h3>
      <p className="text-sm text-black">{member.description}</p>
    </div>
  ))}
</div>

            </div>
        </section>
    );
};

export default MedifortTeams;
