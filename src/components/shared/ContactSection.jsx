'use client'
import Image from "next/image";
import { MdLocationOn, MdPhone, MdComputer } from "react-icons/md";
import ContactForm from "../layouts/layoutA/ContactForm";
import HomeForm from "../layouts/layoutA/HomeForm";

export default function ContactSection() {
  return (
    <section className="w-full bg-gradient-to-r from-[#72005F] to-[#9A007D]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 ">
        {/* Form Section */}
        <div className="w-full lg:w-1/2 text-white">
          {/* <h2 className="text-2xl font-bold mb-2">Post A Medical Query:</h2>
          <p className="mb-6">Post A Question, And We Will Get Back To You Soon.</p> */}

       <HomeForm/>
        </div>

        {/* Image + Info Cards */}
        <div className="w-full lg:w-full relative">
          <div className="w-full h-full relative overflow-visible">
            <Image
              src="/images/Homepage/img12.webp"
              alt="Doctors"
              width={800}
              height={800}
              className="w-full h-full object-cover"
            />
          </div>

          {/* <div className="absolute hidden lg:block top-20 right-0 space-y-4  pr-2 mt-[12rem]">
       
            <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
              <div className="bg-primary p-2 rounded-full text-white text-lg">
                <MdLocationOn />
              </div>
              <p className="text-sm">
                <span className="font-bold text-[#72005F]">Visit Us:</span> Reach
                Our Thiruvananthapuram Campus With Ease Using Online Directions
              </p>
            </div>

          
            <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
              <div className="bg-[#72005F] p-2 rounded-full text-white text-lg">
                <MdPhone />
              </div>
              <p className="text-sm">
                <span className="font-bold text-[#72005F]">Emergency 24x7:</span>{" "}
                Reach Us On Our Emergency Helpline: +91-0471 3100 100
              </p>
            </div>

            
            <div className="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
              <div className="bg-[#72005F] p-2 rounded-full text-white text-lg">
                <MdComputer />
              </div>
              <p className="text-sm">
                <span className="font-bold text-[#72005F]">Online Consultation:</span>{" "}
                Talk To Our Doctors From Where You Sit
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
