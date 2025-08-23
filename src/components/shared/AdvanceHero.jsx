"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "./Breadcrumb";
const AdvanceHero = () => {
    useEffect(() => {
        AOS.init({ duration: 1000, once: true });
    }, []);

    return (
        <section >
        <div className="bg-white  flex items-center justify-center px-6 py-20">
            <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                {/* Text Section */}
                <div data-aos="fade-right" className="space-y-14">
                    <div>
                        <div className="inline-block border-2 border-white text-white text-sm font-medium px-4 py-2 rounded-md mb-6">
                           <Breadcrumb />
                        </div>
                        <h1 className="text-4xl lg:text-6xl font-medium text-primary mb-4">
                            Patient Care at SP Medifort Hospital
                        </h1>
                    </div>
                    <div className="pb-6">
                        <h2 className="text-xl lg:text-2xl font-semibold text-primary mb-2">
                            Welcome to the 
Technology Behind 
Better Healing
                        </h2>
                        <p className="font-semibold text-primary mb-6">
                            SP Medifort is built on the belief that compassionate 
care and cutting-edge technology should go hand in 
hand. Across our departments, patients benefit from 
precision diagnostics, robotic surgery systems, AIpowered monitoring, and seamless imaging; all 
under one roof.
                        </p>
                    </div>
                    
                </div>

                {/* Image Section */}
                <div data-aos="fade-left" className="rounded-3xl overflow-hidden shadow-md">
                    <img
                        src="/images/AdvanceTechnology/advanceTech.jpg"
                        alt="Nurse with patient"
                        className="w-full h-[550px] object-cover"
                    />
                </div>
            </div>
        </div>
            <div className="bg-accent h-14"></div>
            </section>
    );
};

export default AdvanceHero;
