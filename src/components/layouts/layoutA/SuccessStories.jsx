'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { RiArrowRightWideLine } from 'react-icons/ri';

export default function SuccessStories({ successStories }) {
  const { items } = successStories;
  if (!items || items.length === 0) return null;

  // ✅ Only filter text type items
  const textItems = items.filter(item => item.type === 'text');

  return (
    <section className="relative px-6 py-16 bg-gradient-to-b from-purple-50 via-white to-purple-100 text-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-4xl font-semibold text-primary">
            Success Stories
          </h2>
          <p className="mt-4 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from patients who experienced world-class cardiac care with us.
          </p>
        </div>

        {/* Carousel with custom arrows */}
        <div className="relative px-10">
          {/* Custom Nav Buttons */}
          <button className="swiper-button-prev w-6 h-6 absolute top-1/2 -left-20 z-10 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition">
            {/* <RiArrowRightWideLine size={24} /> */}
          </button>
          <button className="swiper-button-next absolute top-1/2 -right-6 z-10 -translate-y-1/2 bg-primary text-white p-3 rounded-full shadow-lg hover:bg-purple-700 transition">
            {/* <RiArrowRightWideLine size={24} /> */}
          </button>

          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={32}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {textItems.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="h-[300px] mb-10 bg-white rounded-3xl shadow-xl border border-purple-100 p-10 flex flex-col justify-center items-start text-left group hover:shadow-2xl transition-all duration-300">
                  {/* Quotation marks */}
                  <span className="text-6xl text-primary/60 font-serif leading-none mb-1">“</span>

                  {/* Text */}
                  <p className="text-xl md:text-2xl font-medium text-gray-800 leading-snug flex-1">
                    {item.text}
                  </p>

                  <span className="text-6xl text-primary/60 font-serif leading-none mt-1 self-end">”</span>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
