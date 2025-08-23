import React from "react";
import { MapPin, Share2 } from "lucide-react";
import Link from "next/link";
const HospitalLocation = () => {
  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-8 leading-snug">
          Hospital Location
        </h2>

        <div className="border border-pink-300 rounded-2xl p-4 sm:p-6 flex flex-col md:flex-row gap-6 md:gap-8 items-start">
          {/* Image */}
          <div className="md:w-1/3 w-full rounded-lg overflow-hidden">
            <img
              src="/images/contact/hospitalocation.webp"
              alt="Hospital Interior"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content */}
          <div className="flex-1 relative space-y-3 sm:space-y-4">
            {/* Share icon */}
            <div className="absolute top-0 right-0">
              <Share2 size={20} className="text-gray-600 cursor-pointer" />
            </div>

            {/* Hospital Name */}
            <h3 className="text-base sm:text-lg font-bold text-[#003554]">
              SP Medifort Hospital (Flagship Campus)
            </h3>

            {/* Address */}
            <p className="flex items-start sm:items-center text-sm sm:text-base text-gray-700">
              <img
                src="/images/contact/map.svg"
                alt="Map Icon"
                className="w-3 sm:w-4 mr-2 mt-[2px]"
              />
              Eanchakkal, Thiruvananthapuram – 695008, Kerala, India
            </p>

            {/* Google Maps Link */}
            <p className="flex items-start sm:items-center text-sm sm:text-base text-gray-700 font-bold">
  <img
    src="/images/contact/location.svg"
    alt="Location Icon"
    className="w-4 sm:w-5 mr-2 mt-[2px]"
  />
  <Link
    href="https://maps.app.goo.gl/hKZasriVEor7ed7Z8" // replace with your hospital map link
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-pink-700 transition"
  >
    [View on Google Maps]
  </Link>
</p>

            {/* Additional Info */}
            <p className="text-sm sm:text-base md:text-lg text-[#002D39A8] pt-6 sm:pt-10 font-medium leading-relaxed">
              Ample multi-level covered parking available <br />
              Easily accessible from the city centre, the airport, and the
              railway station
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HospitalLocation;
