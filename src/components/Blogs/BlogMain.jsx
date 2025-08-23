"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import Image from "next/image";
const ourStoryMain = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);
  return (
    <>
      <section className="relative bg-[#6e2452] text-white py-16 h-[215px] lg:h-[350px] ">
        <div className="absolute inset-0">
          <Image
            width={2000}
            height={500}
            src="https://www.manipalhospitals.com/uploads/images/default-page-banner.webp"
            alt="Our Team"
            className="w-full h-full object-cover opacity-40 object-center"
          />
        </div>
        <div className=" relative z-10 flex flex-col items-center justify-center px-4 md:px-10 ">
          <h2 className="block relative text-5xl text-white font-semibold top-16">
            Our Blogs
          </h2>
         
        </div>
      </section>
  
    </>
  );
};

export default ourStoryMain;
