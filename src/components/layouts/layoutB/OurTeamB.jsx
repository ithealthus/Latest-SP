"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import "swiper/css";
import "swiper/css/navigation";

export default function OurTeamB({ team }) {
  useEffect(() => {
    // Refresh Swiper navigation elements
    setTimeout(() => {
      const event = new Event("resize");
      window.dispatchEvent(event);
    }, 200);
  }, []);

  return (
    <section className="bg-white px-4 md:px-12 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2">
          {team.title}
        </h2>
        <p className="text-xl font-roboto text-black mb-8">{team.subTitle}</p>

        {/* Swiper Slider with custom arrows */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            navigation={{
              nextEl: ".swiper-button-next-custom",
              prevEl: ".swiper-button-prev-custom",
            }}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            className="team-swiper mb-10"
          >
            {team.doctors.map((doc, index) => (
              <SwiperSlide key={index}>
                <div className="relative bg-white rounded-xl shadow-lg text-left h-full overflow-hidden ">
                  <Image
                    src={doc.image || "/images/doctor-placeholder.jpg"}
                    alt={doc.name}
                    width={300}
                    height={400}
                    className="w-full h-128 object-cover"
                  />

                  {/* Overlay Text */}
                  <div className="absolute bottom-0 left-0 w-full bg-primary p-4 rounded-lg text-white">
                    <h3 className="text-lg font-semibold mb-1">{doc.name}</h3>
                    <p className="text-sm font-medium">{doc.designation}</p>
                    <p className="text-sm">{doc.position}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Arrow Buttons */}
          <div className="swiper-button-prev-custom absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button className="w-12 h-12 rounded-full bg-primary hover:bg-accent text-white flex items-center justify-center shadow-md transition">
              <ChevronLeft className="w-6 h-6" />
            </button>
          </div>
          <div className="swiper-button-next-custom absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button className="w-12 h-12 rounded-full bg-primary hover:bg-accent text-white flex items-center justify-center shadow-md transition">
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Description & CTA */}
        <p className="text-2xl md:text-2xl text-black font-roboto  mb-6 max-w-4xl mx-auto">
          {team.description}
        </p>

        <Link
          href={team.cta.href}
          className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
        >
          {team.cta.label}
          <span className="flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-4 h-4 sm:w-5 sm:h-5"
            >
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </span>
        </Link>
      </div>
    </section>
  );
}
