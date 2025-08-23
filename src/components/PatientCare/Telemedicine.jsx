import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Telemedicine = () => {
    return (
        <section className="bg-white py-6 lg:py-12 px-4 md:px-16">
            <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#870064] mb-3 text-center">
                Telemedicine & Online Consultations
            </h2>
            <p data-aos="fade-up" data-aos-delay={100} className="text-base text-black mb-8 lg:mb-16 text-center">
                Expert Care. Now Just a Click Away
            </p>
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Left Text Section */}
                <div data-aos="fade-right" className="space-y-10">
                    <p className="text-[#44002E] text-lg font-medium mb-6">
                        Skip the travel and waiting room, connect with our top doctors from anywhere using SP Medifort’s secure telemedicine platform. Whether it’s a follow-up, second opinion, or first consultation, your care is now just a video call away.
                    </p>

                    <ul className="space-y-3 text-[#44002E] text-sm md:text-base font-medium mb-6 px-5">
                        <li className="flex items-center gap-2">
                            <div className="w-[3%]">
                                <div className="w-3 h-3 bg-[#870064] rounded-full"></div>
                            </div>
                            Video Consultations with Senior Specialists
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-[3%]">
                                <div className="w-3 h-3 bg-[#870064] rounded-full"></div>
                            </div>
                            Digital Prescriptions & Reports
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-[3%]">
                                <div className="w-3 h-3 bg-[#870064] rounded-full"></div>
                            </div>
                            Secure Online Payment Gateway
                        </li>
                        <li className="flex items-center gap-2">
                            <div className="w-[3%]">
                                <div className="w-3 h-3 bg-[#870064] rounded-full"></div>
                            </div>
                            Available for International Patients Too
                        </li>
                    </ul>

                    {/* <button className="bg-[#870064] hover:bg-[#6e0056] text-white font-semibold text-sm px-6 py-3 rounded-full transition flex gap-5 items-center hover:shadow-xl">
                        Book Online
                        <FaArrowRight className="text-3xl p-1 border-2 border-white rounded-full" />

                    </button> */}
                </div>

                {/* Right Image Section */}
                <div data-aos="fade-left" className="rounded-xl overflow-hidden">
                    <Image
                        src="/images/patient/Frame 171.png"
                        alt="Telemedicine Consultation"
                        width={600}
                        height={400}
                        className="w-full h-auto object-cover rounded-xl"
                    />
                </div>
            </div>
        </section>
    );
};

export default Telemedicine;
