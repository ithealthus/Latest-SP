'use client';
import React from 'react';
import Image from 'next/image';

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
    <p className="font-semibold text-lg leading-tight">{helpline.label}</p>
    <p className="text-xl md:text-2xl font-bold leading-snug">{helpline.number}</p>
  </div>
  <div className="w-9 h-9 bg-[#e9d1e1] rounded-full flex items-center justify-center">
    <Image
      src={helpline.icon || '/icons/phone.svg'}
      alt="Helpline"
      width={18}
      height={18}
    />
  </div>
</div>

{/* Support Pill */}
<div className="flex bg-white text-[#3a003f] rounded-r-full shadow-lg pl-6 py-4 pr-4 items-center max-w-[70%]">
  <div className="flex-1">
    <p className="font-semibold text-lg leading-tight">{support.label}</p>
  </div>
  <div className="w-9 h-9 bg-[#e9d1e1] rounded-full flex items-center justify-center">
    <Image
      src={support.icon || '/icons/support.svg'}
      alt="Support"
      width={18}
      height={18}
    />
  </div>
</div>
        </div>

        {/* Right Side: Appointment Form */}
        <div className="w-full lg:w-1/2 px-4 sm:px-6 md:px-8 mt-12 lg:mt-0">
          <div className="bg-white rounded-3xl p-6 sm:p-10 shadow-2xl text-[#3a003f]">
            <h3 className="text-2xl font-bold mb-6 text-center">{form.heading}</h3>
            <form className="space-y-4">
              {form.fields.map((field, index) => (
                <div key={index}>
                  <label className="block font-semibold mb-1">{field}:</label>
                  <input
                    type="text"
                    placeholder={field}
                    className="w-full rounded-md bg-[#c076a540] px-4 py-2 border-none focus:ring-2 focus:ring-primary outline-none"
                  />
                </div>
              ))}
              <button
                type="submit"
                className="w-full mt-4 bg-[#870064] text-white font-semibold py-3 rounded-full hover:bg-[#690050] transition"
              >
                {form.submitLabel}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
