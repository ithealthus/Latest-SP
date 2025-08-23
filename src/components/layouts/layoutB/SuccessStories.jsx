"use client";
import React, { useRef, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const prefix = "/mainClient/out";

export default function SuccessStories({ successStories }) {
  const { items, cta } = successStories;
  const swiperRef = useRef(null);

  const [popupVideo, setPopupVideo] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const handleVideoClick = (src) => {
    setPopupVideo(src);
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
    setPopupVideo(null);
  };

  if (!items || items.length === 0) return null;

  return (
    <section className="relative px-4 py-8 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Top Left Quote */}
        <FaQuoteLeft className="absolute text-purple-800 opacity-30 text-7xl left-0 top-3 -translate-x-1/2 -translate-y-1/2 hidden sm:block" />

        <h2 className="text-2xl md:text-3xl font-bold py-10 text-left">
          Success stories
        </h2>

        {/* Swiper */}
        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          autoplay={{ delay: 1500, disableOnInteraction: false }}
          loop
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 24,
            },
          }}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                className="transition-all duration-300 bg-[#87006480] rounded-xl overflow-hidden shadow-md flex items-center justify-center min-h-[200px] h-[220px] hover:h-[320px] text-top m-2"
                onMouseEnter={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.play();
                  swiperRef.current?.autoplay?.stop();
                }}
                onMouseLeave={(e) => {
                  const video = e.currentTarget.querySelector("video");
                  if (video) video.pause();
                  swiperRef.current?.autoplay?.start();
                }}
              >
                <video
                  src={`${prefix}${item.src}`}
                  className="object-cover w-full h-full cursor-pointer"
                  muted
                  playsInline
                  controls={false}
                  onClick={() => handleVideoClick(`${prefix}${item.src}`)}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Bottom Right Quote */}
        <FaQuoteRight className="absolute text-purple-800 opacity-30 text-7xl right-0 bottom-15 translate-x-1/2 translate-y-1/2 hidden sm:block" />

        {/* CTA Button */}
        {cta && (
          <div className="mt-10 text-center">
            <Link
              href={cta.link}
              className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
            >
              {cta.label}
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
        )}
      </div>

      {/* Video Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={closePopup}
              className="absolute top-2 right-2 text-white text-3xl font-bold z-10"
            >
              &times;
            </button>
            <video
              src={popupVideo}
              className="w-full h-auto max-h-[80vh] rounded-lg shadow-2xl"
              controls
              autoPlay
              muted
              playsInline
            />
          </div>
        </div>
      )}
    </section>
  );
}
