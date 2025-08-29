"use client";

import React, { useRef } from "react";
import { Icon } from "@iconify/react";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

function ComprehensiveServices({ comprehensiveCare }) {
  if (!comprehensiveCare) return null;

  const { title, subtitle, description, items } = comprehensiveCare;

  // Create refs for navigation buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className="bg-white py-12 px-6 border-y border-primary">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Heading */}
        <div className="text-left">
          <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2">
            {title}
          </h2>
          <p className="text-xl font-semibold text-accent mt-2">{subtitle}</p>
          <p className="text-base text-gray-700 mt-4">{description}</p>
        </div>

        {/* Swiper Slider */}
        <div className="relative px-12 md:px-16">
          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Navigation]}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="w-full bg-primary/5 p-6 rounded-xl border border-primary/10 h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                      <Icon icon={item.icon} className="w-6 h-6" />
                    </span>
                    <h3 className="text-lg font-semibold text-primary">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-sm text-purple">{item.description}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons with React Icons */}
          <button
            ref={prevRef}
            className="swiper-button-prev !text-black !bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 z-20 hover:bg-primary hover:text-white transition"
          >
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>
          <button
            ref={nextRef}
            className="swiper-button-next !text-black !bg-white shadow-md w-10 h-10 rounded-full flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 z-20 hover:bg-primary hover:text-white transition"
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveServices;
