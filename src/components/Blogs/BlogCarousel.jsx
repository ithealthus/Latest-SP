"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const BlogCarousel = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="w-full py-16 bg-gray-50">
      <h2 className="text-center text-3xl font-bold mb-12 text-primary">
        Recent Highlights
      </h2>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="overflow-visible pb-16">
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".blog-swiper-button-next",
              prevEl: ".blog-swiper-button-prev",
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            centeredSlides
            loop
            spaceBetween={20}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1, spaceBetween: 16 },
              640: { slidesPerView: 1.2, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 24 },
              1024: { slidesPerView: 3, spaceBetween: 40 },
            }}
          >
            {data.map((card, index) => {
              const isActive = index === activeIndex;
              return (
                <SwiperSlide key={`${card.id}-${index}`}>
                  {/* Wrap the whole card with Link */}
                  <Link
                    href={`/latest-news-update/${card.slug}`}
                    className={`group relative overflow-hidden transition-transform duration-300 ease-in-out bg-white rounded-2xl p-4 cursor-pointer shadow-md flex flex-col justify-between h-[460px] ${
                      isActive
                        ? "scale-105 shadow-2xl hover:scale-110 z-20"
                        : "scale-90 opacity-70"
                    }`}
                  >
                    <img
                      src={card.image}
                      alt={card.title}
                      className="rounded-t-2xl w-full h-48 object-cover relative z-[1]"
                    />
                    <div className="p-4 text-left flex flex-col flex-grow relative z-[3]">
                      <span className="bg-primary text-white text-sm px-3 py-1 rounded-md inline-block mb-3">
                        {card.category || "blogs"}
                      </span>
                      <h3 className="text-lg font-semibold mb-2 line-clamp-2">
                        {card.title}
                      </h3>
                      <p className="text-gray-500 text-sm mb-4">
                        Published on {card.date} by {card.author}
                      </p>
                      <span className="mt-auto bg-primary text-white px-5 py-2 rounded-full hover:bg-primary/90 transition inline-block text-center cursor-pointer">
                        Read More →
                      </span>
                    </div>
                  </Link>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-center gap-6 mt-6 md:mt-0 md:absolute md:top-1/2 md:-translate-y-1/2 md:w-full">
          <div className="blog-swiper-button-prev w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg cursor-pointer hover:bg-primary/90 md:absolute md:-left-16 md:top-1/2 md:-translate-y-1/2">
            <FaArrowLeft size={18} />
          </div>
          <div className="blog-swiper-button-next w-10 h-10 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-primary text-white shadow-lg cursor-pointer hover:bg-primary/90 md:absolute md:-right-16 md:top-1/2 md:-translate-y-1/2">
            <FaArrowRight size={18} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogCarousel;
