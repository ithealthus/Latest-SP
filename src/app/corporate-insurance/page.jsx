'use client';
import React from 'react';
import Breadcrumb from '@/components/shared/Breadcrumb';
import InsurancePartners from '@/components/shared/InsurancePartners';
function Page() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative w-full bg-[#EFDAD9] overflow-hidden">
        <div className="px-4 sm:px-4 md:px-12 py-8 md:py-12 mb-4 sm:mb-6">
          <Breadcrumb />
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 pb-6 flex flex-col lg:flex-row items-center justify-between">
          <div className="text-left">
            <h1 className="text-[32px] sm:text-[40px] md:text-[48px] font-medium leading-[110%] text-black mb-4 lg:mb-0">
              Corporate & Insurance
            </h1>
          </div>
        </div>

        <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="/images/corporate.jpg"
              alt="Blood Vials"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-t-2xl"
            />
          </div>
        </div>

        <div className="w-full h-[60px] sm:h-[70px] md:h-[81px] bg-[#870064]"></div>
      </section>

      {/* Insurance + Contact Us Section */}
      <section 
  className="w-full bg-cover bg-center bg-no-repeat py-12 px-4 md:px-12" 
  style={{ backgroundImage: "url('/images/bg-img.png')" }}
>
        <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-12 items-start justify-between">
          
          {/* Left Text Content */}
          <div className="flex-1 px-16 py-8 ">
            <h2 className="text-3xl font-semibold text-[#870064] mb-4">Insurance</h2>
            <p className="text-gray-700 leading-relaxed text-[24px] ">
              At SP Medifort, we welcome all insured patients, ensuring you receive the care 
              you need without financial stress. Understanding insurance can be complex, but 
              our knowledgeable team is here to help. For comprehensive details about your 
              insurance options, please reach out to our front desk. We're dedicated to making 
              your experience seamless and stress-free. Contact us today to learn more about 
              how we can support your health and wellness.
            </p>
          </div>

          {/* Contact Form */}
          <div className="flex-1 w-full max-w-md bg-white rounded-2xl shadow-xl p-6">
            <h3 className="text-center text-xl font-semibold text-[#870064] mb-6">Contact Us</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Name:</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 rounded-full bg-[#d38abf] text-white placeholder-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Phone:</label>
                <input
                  type="text"
                  placeholder="Enter your phone"
                  className="w-full px-4 py-2 rounded-full bg-[#d38abf] text-white placeholder-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Email:</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-full bg-[#d38abf] text-white placeholder-white focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-800 mb-1">Query:</label>
                <textarea
                  rows="4"
                  placeholder="Enter your query"
                  className="w-full px-4 py-2 rounded-2xl bg-[#d38abf] text-white placeholder-white focus:outline-none"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-2 rounded-full bg-[#870064] text-white font-medium hover:bg-[#6b004f] transition"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

        </div>
      </section>
      <InsurancePartners />
    </div>
  );
}

export default Page;
