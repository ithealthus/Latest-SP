import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { IoArrowForward } from "react-icons/io5";
import Link from "next/link";
import Image from "next/image";
const HealthCta = () => {
  return (
    <section
      style={{
        background: "url('/images/health-packages/Group 237772.webp')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div
        data-aos="fade-up"
        data-aos-delay={100}
        className=" w-full h-full py-20 px-4"
      >
        <div className="max-w-6xl mx-auto text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-16">
            Need Help Selecting a  Package?
          </h2>
          <div className="flex flex-col lg:flex-row md:gap-16 ">
            <div className="flex flex-col justify-end md:items-start gap-6 mb-10 md:w-1/2">
              <Link href='/find-a-doctor'>
                <button className="flex items-center justify-between px-6 py-3 rounded-full text-white bg-primary font-semibold text-lg w-full md:w-auto hover:scale-105 transition border-[3px] border-white">
                  Book an Appointment
                  <span className="ml-3 text-xl">➜</span>
                </button>
              </Link>
              <Link href='/health-check-packages'>
                <button className="flex items-center justify-between px-6 py-3 rounded-full text-white bg-primary font-semibold text-lg w-full md:w-auto hover:scale-105 transition border-[3px] border-white">
                  Explore Health Packages
                  <span className="ml-3 text-xl">➜</span>
                </button>
              </Link>
            </div>

            <div className="flex flex-col md:items-start gap-6 mb-10 md:w-1/2">
              <div className="flex items-center gap-3 text-white bg-primary pr-5 rounded-full text-lg w-full md:w-auto border-[3px] border-white">
                <Link
                  href="tel:04713100100"
                  className="flex items-center gap-3 w-full"
                >
                  <Image
                    className="border-t-[3px] border-b-[3px] p-2 border-r-[3px] border-white rounded-full"
                    width={50}
                    height={50}
                    alt="call"
                    src="/images/patient/ion_call.webp"
                  />
                  0471 3100 100
                </Link>
              </div>

              <div className="flex items-center gap-3 text-white bg-primary pr-5 rounded-full text-lg w-full md:w-auto border-[3px] border-white">
                <Link
                  href="mailto:patientcare@spmedifort.com"
                  className="flex items-center gap-3 w-full"
                >
                  <Image
                    className="border-t-[3px] border-b-[3px] p-2 border-r-[3px] border-white rounded-full"
                    width={50}
                    height={50}
                    alt="email"
                    src="/images/patient/material-symbols_mail-outline.webp"
                  />
                  patientcare@spmedifort.com
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HealthCta;
