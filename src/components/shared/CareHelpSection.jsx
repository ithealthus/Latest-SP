import Image from 'next/image';
import React from 'react';
import { FaWhatsapp, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const CareHelpSection = () => {
    return (
        <section
            style={{
                background: "url('/images/patient/Group 52.png')",
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover'
            }}
        >
            <div className=" w-full h-full py-20 px-4">
                <div className="max-w-6xl mx-auto text-white">
                    <h2 className="text-3xl md:text-5xl font-bold mb-16">
                        Need Help with Your <br className="hidden md:block" /> Care Journey?
                    </h2>
                    <div className="flex flex-col lg:flex-row md:gap-16 ">
                        <div className="flex flex-col justify-end md:items-start gap-6 mb-10 md:w-1/2">
                            <button className="flex items-center justify-between px-6 py-3 rounded-full text-white bg-[#D95DB0] font-semibold text-lg w-full md:w-auto hover:scale-105 transition border-[3px] border-white">
                                Book an Appointment
                                <span className="ml-3 text-xl">➜</span>
                            </button>
                            <button className="flex items-center justify-between px-6 py-3 rounded-full text-white bg-[#D95DB0] font-semibold text-lg w-full md:w-auto hover:scale-105 transition border-[3px] border-white">
                                Explore Health Packages
                                <span className="ml-3 text-xl">➜</span>
                            </button>
                        </div>

                        <div className="flex flex-col  md:items-start gap-6 mb-10 md:w-1/2">
                            {/* <div className="flex items-center gap-3 bg-white text-[#870064] px-5 py-3 rounded-full text-lg w-full md:w-auto"> */}
                            {/* <Image width={60} height={60} alt="whatsapp" src="/images/patient/Group 2.png" /> */}
                            {/* </div> */}
                            <div className="flex items-center gap-3 text-white bg-[#D95DB0] pr-5  rounded-full text-lg w-full md:w-auto border-[3px] border-white">
                                <Image className='border-t-[3px] border-b-[3px] p-2 border-r-[3px] border-white rounded-full' width={50} height={50} alt="whatsapp" src="/images/patient/ion_call.png" />
                                00000000
                            </div>
                            <div className="flex items-center gap-3 text-white bg-[#D95DB0] pr-5  rounded-full text-lg w-full md:w-auto border-[3px] border-white">
                                <Image className='border-t-[3px] border-b-[3px] p-2 border-r-[3px] border-white rounded-full' width={50} height={50} alt="whatsapp" src="/images/patient/material-symbols_mail-outline.png" />
                                patientcare@spmedifort.com
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CareHelpSection;
