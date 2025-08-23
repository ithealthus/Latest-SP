'use client';
import React from 'react';
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function AppointmentConsultation({ appointmentSection }) {
  if (!appointmentSection) return null;

  const { heading, helpline, support, form } = appointmentSection;
  return (
    <section
      className="relative bg-cover bg-center bg-no-repeat py-12 bg-secondary"
      style={{ backgroundImage: "url('/images/bg-cardiac.jpg')" }}
    >
      <h2 className="text-3xl md:text-4xl font-bold drop-shadow-lg text-white mb-6 px-4">
        {heading}
      </h2>
      <div className="flex flex-col lg:flex-row lg:items-start">
        {/* Left Side: Pills - Full Width on all screens, pinned to left */}
        <div className="w-full lg:w-1/2 space-y-6 px-4 sm:px-8 md:px-0 xl:pl-0">
          {/* Helpline Pill */}
          <div className="flex bg-white text-[#3a003f] rounded-r-full shadow-lg pl-6 py-4 pr-4 items-center max-w-[70%]">
            <div className="flex-1">
              <p className="text-2xl font-bold leading-tight">{helpline.label}</p>
              <p className="text-xl md:text-2xl font-bold leading-snug">{helpline.number}</p>
            </div>
            <div className="w-16 h-16 bg-[#e9d1e1] rounded-full flex items-center justify-center">
              <Image
                src='/icon/phone.svg'
                alt="Helpline"
                width={35}
                height={18}
              />
            </div>
          </div>

          {/* Support Pill */}
          <div className="flex bg-white text-[#3a003f] rounded-r-full shadow-lg pl-6 py-4 pr-4 items-center max-w-[70%]">
            <div className="flex-1">
              <p className="text-2xl font-bold leading-tight">{support.label}</p>
            </div>
            <div className="w-16 h-16 bg-[#e9d1e1] rounded-full flex items-center justify-center">
              <Image
                src='/icon/ambulance.svg'
                alt="Support"
                width={40}
                height={18}
              />
            </div>
          </div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 mt-12 lg:mt-0">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-[#3a003f]">
            <h3 className="text-2xl font-bold mb-6 text-center">{form.heading}</h3>
            <ContactForm/>
          </div>
        </div>
      </div>
    </section>
  );
}
