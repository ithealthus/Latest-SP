"use client";
import React, { useState } from "react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import LayoutA from "@/components/layouts/layoutA/TextSlider";
import cardiacScienceData from "@/data/departments/layoutA/cardiac-science";
import "swiper/css";
import "swiper/css/pagination";
import {
  MdPhone,
  MdEmail,
  MdBroadcastOnPersonal,
  MdBloodtype,
  MdFavorite,
  MdLocalHospital,
  MdGroups,
  MdInvertColors,
  MdFiberNew,
  MdViewList,
  MdOutlineDevicesOther,
  MdHelpOutline,
} from "react-icons/md";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

const techImg1 =
  "/images/services/physiotherapyRehabilitation/Advanced-Electrotherapy-Units-(TENS,-IFT,-Ultrasound).webp";
const techImg2 =
  "/images/services/physiotherapyRehabilitation/Laser-Therapy-&-Shockwave-Therapy.webp";
const techImg3 =
  "/images/services/physiotherapyRehabilitation/Robotic-assisted-rehab-(on-select-cases).webp";
const techImg4 =
  "/images/services/physiotherapyRehabilitation/Parallel-Bars,-Tilt-Tables-&-Gait-Trainers.webp";
const techImg5 =
  "/images/services/physiotherapyRehabilitation/Motorized-CPM-Machines-(Post-Knee-Surgery).webp";
const techImg6 =
  "/images/services/physiotherapyRehabilitation/Separate-zones-for-ortho,-neuro,-cardio-&-paediatric-rehab.webp";

const techImages = [techImg1, techImg2, techImg3, techImg4, techImg5, techImg6];
const icons = [
  MdBroadcastOnPersonal,
  MdBloodtype,
  MdFavorite,
  MdLocalHospital,
  MdGroups,
  MdInvertColors,
  MdFiberNew,
  MdViewList,
  MdOutlineDevicesOther,
];

// Add your sample hero data here (edit as needed)
const data = {
  hero: {
    title: "Physiotherapy & Rehabilitation at SP Medifort Hospital",
    tagline:
      "Restoring Strength, One Step at a Time Personalized Care for Every Recovery Journey.",
  },
  overview: {
    heading: "Overview",
    description:
      "The Department of Physiotherapy & Rehabilitation at SP Medifort Hospital provides personalized therapy programs for patients recovering from injury, surgery, or chronic conditions. Our team of expert physiotherapists uses evidence-based practices and modern modalities to improve mobility, reduce pain, and restore function.\nWe are recognized as a leading rehabilitation centre in Trivandrum, offering both inpatient and outpatient care across orthopaedics, neurology, cardiopulmonary, and paediatric rehab.",
  },
  whatWeOffer: [
    "Musculoskeletal Physiotherapy",
    "Neurological Rehabilitation",
    "Post-Surgical Rehabilitation",
    "Paediatric Physiotherapy",
    "Cardiac & Pulmonary Rehab",
    "Geriatric Rehab & Fall Prevention",
    "Pain Management Clinic",
    "Post-COVID Rehab Programs",
    "Mobility Training & Gait Re-education",
    "Advanced Electrotherapy Services",
    "Strengthening, Balance & Flexibility Training",
  ],
  team: [
    "Orthopedic & Sports Physiotherapist",
    "Neurological & Pediatric Physiotherapist",
    "Women’s Heath, Geriatric & Ergonomic Specialist",
    "Cardiorespiratory Physiotherapist",
  ],
  technologies: [
    "Advanced Electrotherapy Units (TENS, IFT, Ultrasound)",
    "Laser Therapy & Shockwave Therapy",
    "Robotic-assisted rehab (on select cases)",
    "Parallel Bars, Tilt Tables & Gait Trainers",
    "Motorized CPM Machines (Post Knee Surgery)",
    "Separate zones for ortho, neuro, cardio & paediatric rehab",
  ],
  whenToUse: [
    "After fractures, joint replacements, or spine surgery",
    "Following a stroke, head injury, or nerve weakness",
    "For sports injuries, ligament tears, or chronic joint pain",
    "To manage arthritis, frozen shoulder, or back pain",
    "In elderly patients, for mobility support and fall prevention",
    "In children with delayed milestones or neurological issues",
    "As part of post-COVID or prolonged ICU recovery",
    "For posture correction and ergonomic rehabilitation in working professionals",
  ],
  whyChoose: [
    "One of the most advanced physiotherapy centres in Trivandrum",
    "Personalized therapy plans tailored to the patient condition",
    "Coordination with doctors, nurses & caregivers",
    "Both inpatient and outpatient rehab support",
    "Child-friendly & elder-friendly therapy zones",
    "Early mobility protocols for faster recovery",
  ],
  successStories: [
    {
      content:
        "After my spine surgery, the therapists at SP Medifort helped me walk again. It’s the best rehabilitation centre in Trivandrum I’ve experienced.",
      author: "Ramesh V.",
    },
    {
      content:
        "My mother recovered from a stroke with their neuro rehab program. The compassion and expertise made all the difference.",
      author: "Ritika S.",
    },
  ],
  faqs: [
    {
      question: "Do I need a referral for physiotherapy?",
      answer:
        "According to the NCAHP Act, 2021, physiotherapists in India are recognized as independent healthcare practitioners. This means you do not need a referral from a doctor to consult a physiotherapist. You can directly access physiotherapy services for evaluation and treatment.\nHowever, for insurance purposes, a referral may still be requested, so it’s a good idea to check with your healthcare provider.",
    },
    {
      question: "How often do I need to come for therapy?",
      answer:
        "The number of sessions depends on your condition and recovery goals. Some patients improve in a few visits, while others may need ongoing therapy for several weeks.",
    },
    {
      question: "Is physiotherapy painful?",
      answer:
        "Some discomfort may be experienced during certain treatments or exercises, especially in early sessions. Your physiotherapist will work with you to ensure it is safe and manageable.",
    },
    {
      question: "What should I wear to my physiotherapy appointment?",
      answer:
        "Wear loose, comfortable clothing that allows easy movement. If your problem is with a specific body part (e.g., knee, shoulder), wear clothing that allows access to that area.",
    },
    {
      question: "What happens during my first physiotherapy session?",
      answer:
        "Your physiotherapist will:\n- Take a detailed history\n- Perform a physical assessment\n- Discuss your goals\n- Create a personalized treatment plan\n- Treatment may start on the same day.",
    },
    {
      question: "Do you provide at-home physiotherapy?",
      answer:
        "Yes, for eligible patients. Please contact our rehab desk for scheduling.",
    },
  ],
  appointmentSection: {
    heading: "Regain Movement, Regain Life",
    description:
      "Visit SP Medifort – Trusted for physiotherapy and rehabilitation in Trivandrum",
    callToAction: "Call Us: +91-XXXXXXXXXX",
    buttons: ["Book a Session", "WhatsApp Now"],
  },
};


const MyPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

const toggleIndex = (index) => {
  setActiveIndex(index === activeIndex ? null : index);
};
  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      {/* Header */}
      <section className="relative w-full bg-[#EFDAD9] overflow-hidden">
        <div className="px-4 sm:px-4 md:px-12 py-4 md:py-12">
          {/* Replace or remove Breadcrumb if not defined */}
          <Breadcrumb />
        </div>

        <div className="w-full max-w-[1800px] mx-auto px-4 md:px-8 pb-6 flex flex-col-reverse lg:flex-row items-center justify-between">
          {/* Left - Title */}
          <div className="text-left lg:text-left">
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-medium leading-tight text-[#030c3d] mb-4 lg:mb-0">
              {data.hero?.title}
            </h1>
          </div>

          {/* Right - Tagline */}
          <div className="text-left lg:text-right mt-6 lg:mt-0 lg:ml-8">
            <p className="text-2xl pb-3 sm:text-4xl md:text-5xl font-bold leading-tight text-[#870064]">
              {data.hero?.tagline}
            </p>
          </div>
        </div>



        <div className="relative w-full max-w-[1800px] mx-auto px-4 md:px-8">
          <div className="overflow-hidden rounded-t-2xl">
            <img
              src="/images/services/banner-img/Physiotherapy-&-Rehabilitation.webp"
              alt="Blood Vials"
              className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-t-2xl"
            />
          </div>
        </div>

        <div className="w-full h-[60px] sm:h-[70px] md:h-[81px] bg-[#870064]"></div>
      </section>

      {/* Overview Section */}
      {data.overview && (
        <section className="bg-[#f7eff9] py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 w-full">
              <h2 className="text-[28px] sm:text-[34px] md:text-[42px] leading-[115%] font-bold text-[#93005d] mb-6">
                {data.overview.heading}
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] font-normal not-italic text-[#1e1e1e] max-w-[700px]">
                {data.overview.description}
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="w-[280px] sm:w-[400px] md:w-[520px] h-[210px] sm:h-[320px] md:h-[391px] rounded-2xl overflow-hidden shadow-xl border-[3px] border-[#ecd7ee]">
                <img
                  src="/images/services/overview-img/Physiotherapy-&-Rehabilitation.webp"
                  alt="Blood Centre Overview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* What We Offer Section */}
      {data.whatWeOffer?.length > 0 && (
        <section className="bg-[#870064] py-12 sm:py-14 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="w-full max-w-[1800px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-start">
              What the Service Includes
            </h2>
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              slidesPerView={1}
              spaceBetween={32}
              speed={1500}
              className="w-full max-w-[1800px] mx-auto !pb-14"
            >
              {Array.from({
                length: Math.ceil(data.whatWeOffer.length / 4),
              }).map((_, slideIndex) => {
                const startIdx = slideIndex * 4;
                const group = data.whatWeOffer.slice(startIdx, startIdx + 4);
                return (
                  <SwiperSlide key={slideIndex}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {group.map((item, idx) => {
                        const Icon = icons[(startIdx + idx) % icons.length];
                        return (
                          <div
                            key={idx}
                            className="flex items-center border-l-8 border-[#D95DB0]  bg-white rounded-2xl shadow-xl py-6 px-5 md:px-6 w-full relative overflow-hidden"
                          >
                           {/* <div className="w-[16px] h-[112px] rounded-l-2xl bg-[#D95DB0] absolute left-0 top-0" /> */}
                            <div className="flex items-center pl-6">
                              <span className="flex items-center justify-center w-12 h-12 bg-[#D95DB0] rounded-md mr-4">
                                <Icon className="text-white text-2xl" />
                              </span>
                              <span className="font-semibold text-[20px] sm:text-[22px] md:text-[26px] leading-[28px] tracking-[0.1px] text-[#1e1831]">
                                {item}
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </div>
        </section>
      )}

      {/* Who Performs Section */}
      {data.team?.length > 0 && (
        <section className="py-12 sm:py-14 px-4 md:px-0 bg-[#f7eff9]">
          <div className="max-w-[1200px] mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#93005d] mb-10 md:mb-12 text-center">
              Who Performs the Service?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
              {data.team.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl overflow-hidden shadow-inner"
                >
                  <div className="bg-[#93005d] h-[100px] sm:h-[120px] px-6 relative flex items-start justify-end">
                    <img
                      src="/images/services/sp-md-fort-logo.png"
                      alt="Icon"
                      className=" h-[72px] sm:h-[96px] mt-4"
                    />
                  </div>
                  <div className="bg-[#fff] py-6 px-6 min-h-[100px] flex items-center">
                    <p className="text-[#870064] text-[20px] sm:text-[24px] font-medium leading-snug">
                      {item}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Technology Section */}
      <section className="bg-white py-10 sm:py-12 px-4 md:px-16">
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-[#870064] mb-8 sm:mb-10">
          Technology & Infrastructure
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {data.technologies.map((item, idx) => (
            <div
              key={idx}
              className="relative aspect-square w-full rounded-xl overflow-hidden group shadow-md"
            >
              <img
                src={techImages[idx]}
                alt={item}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 flex items-end p-4 z-10">
                <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-snug">
                  {typeof item === "string" ? item : item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* When to Use */}
      {data.whenToUse?.length > 0 && (
        <section className="py-14 sm:py-16 md:py-20 px-4 md:px-10 lg:px-20 bg-[#EFDAD9]">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold text-center text-[#44002E] mb-10 sm:mb-12">
            When Should You Use This Service?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 py-10">
            {data.whenToUse.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-between min-h-[200px]"
              >
                <p className="text-lg sm:text-xl font-semibold text-[#41002d]">
                  {item}
                </p>
                <div className="mt-6 flex justify-between items-center border-t pt-4">
                  <span className="text-xl font-bold text-[#910067]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <img
                    src="/images/services/sp-md-fort-logo-2.png"
                    alt="Icon"
                    className="w-[38px] sm:w-[46px] h-[36px] sm:h-[44px] object-contain"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Why Choose Section */}
      {data.whyChoose?.length > 0 && (
        <section className="bg-[#f4eafd] py-12 px-4 md:px-20">
          <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-[32px] sm:text-[40px] md:text-[48px] font-bold tracking-[-0.4px] text-[#41002d] mb-8">
                Why Choose SP Medifort Rehab?
              </h2>
              <ul className="space-y-4">
                {data.whyChoose.map((item, idx) => (
                  <li
                    key={idx}
                    className="flex items-start gap-3 text-base md:text-lg text-black leading-relaxed"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6 min-w-6 text-[#a10072] mt-[2px]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden w-full max-w-[427px] mx-auto">
                <img
                  src="/images/services/physiotherapyRehabilitation/Physiotherapy-&-Rehabilitation(why-choose).webp"
                  alt="Why Choose SP Medifort"
                  className="w-full h-auto object-cover rounded-2xl"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Patient Experience */}
      {data.successStories?.length > 0 && (
        <section className="bg-[#9C3480] py-16 px-4 md:px-24">
          <h2 className="text-white text-4xl font-bold mb-12">
            Patient Experience
          </h2>
          <div className="relative">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{ prevEl: ".custom-prev" }}
              autoplay={{ delay: 1500, disableOnInteraction: false }}
              loop
            >
              {data.successStories.map((story, idx) => (
                <SwiperSlide key={idx}>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-4">
                      <div className="custom-prev w-10 h-10 rounded-full bg-white flex items-center justify-center cursor-pointer shadow-md">
                        <svg
                          className="w-4 h-4 text-[#870064]"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M12.293 16.293a1 1 0 010 1.414L7.707 11l4.586-4.707a1 1 0 00-1.414-1.414l-5 5a1 1 0 000 1.414l5 5a1 1 0 001.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                      {story.image && (
                        <img
                          src={story.image}
                          alt={story.author}
                          className="w-24 h-24 object-cover rounded-full border-4 border-white"
                        />
                      )}
                    </div>
                    <div className="text-white">
                      <p className="text-xl font-semibold">{story.author}</p>
                      <p className="italic text-lg leading-relaxed mt-1">
                        “{story.content}”
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      )}

      {/* FAQs */}
      {data.faqs?.length > 0 && (
        <section className="py-16 px-4 md:px-0 bg-white">
          <div className="w-full max-w-[1600px] mx-auto">
            <h2 className="font-bold text-[48px] text-[#44002E] mb-14 text-center tracking-tight">
              Frequently Asked Questions
            </h2>
            <div className="max-w-5xl mx-auto grid grid-cols-1 gap-5 px-3">
              {data.faqs.map((item, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={index * 200}
                  className={`border border-[#870064] rounded-2xl p-4 cursor-pointer transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-xl' : 'bg-white shadow-xl'
                    }`}
                  onClick={() => toggleIndex(index)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-[#000] ">
                        0{index + 1}. {item.question}
                      </p>
                      {activeIndex === index && (
                        <p className="text-sm text-[#002D39] mt-3 font-medium duration-700">{item.answer}</p>
                      )}
                    </div>
                    <div className="text-[#870064]">
                      {activeIndex === index ? <Minus className='border-2 border-[#870064] rounded-2xl' /> : <Plus className='border-2 border-[#870064] rounded-2xl' />}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Marquee Text */}
      <LayoutA highlightText={cardiacScienceData.highlightText} />

      {/* Appointment CTA */}
      {data.appointmentSection && (
        <section className="relative w-full min-h-[350px] flex items-center overflow-hidden px-4 md:px-16 py-14 md:py-28">
          <img
            src="/images/services/physiotherapyRehabilitation/Physiotherapy-&-Rehabilitation(footer).webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 bg-[#aa41a2] opacity-80"
            style={{ zIndex: 1 }}
          />
          <div className="relative z-10 w-full max-w-[550px] ml-0 md:ml-[7vw] lg:ml-24">
            <div className="bg-[#D95DB0] rounded-xl px-6 py-6 md:py-8 mb-10 shadow-lg border border-white border-opacity-60 text-center w-full md:w-[526px] md:h-[193px] flex flex-col justify-center items-center">
              <h2
                className="font-extrabold text-[30px] text-[#44002E] mb-3 leading-tight tracking-tight"
                style={{ fontWeight: 800 }}
              >
                {data.appointmentSection.heading}
              </h2>
              <p
                className="font-medium text-[17px] text-white mb-2 leading-relaxed"
                style={{ fontWeight: 500 }}
              >
                {data.appointmentSection.description}
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start w-full">
              <Link
                href="tel:04713100100"
                className="relative flex items-center bg-[#EA6ACB] border-2 border-white rounded-full px-12 py-2 font-bold text-white text-[20px] md:text-[28px] tracking-wide min-h-[56px] md:min-h-[66px] w-fit shadow-md"
                style={{ letterSpacing: ".01em" }}
              >
                <span
                  className="absolute -left-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EA6ACB] border-2 border-white rounded-full p-2"
                  style={{ boxShadow: "0 0 0 4px #EA6ACB" }}
                >
                  <MdPhone className="text-[#44002E] text-[1.8rem] md:text-[2.2rem]" />
                </span>
                <span className="pl-10 md:pl-14">0471 3100 100</span>
              </Link>
              <Link
                href="mailto:care@spmedifort.com"
                className="relative flex items-center bg-[#EA6ACB] border-2 border-white rounded-full px-12 py-2 font-bold text-white text-[20px] md:text-[28px] tracking-wide min-h-[56px] md:min-h-[66px] w-fit shadow-md"
                style={{ letterSpacing: ".01em" }}
              >
                <span
                  className="absolute -left-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-[#EA6ACB] border-2 border-white rounded-full p-2"
                  style={{ boxShadow: "0 0 0 4px #EA6ACB" }}
                >
                  <MdEmail className="text-[#44002E] text-[1.8rem] md:text-[2.2rem]" />
                </span>
                <span className="pl-10 md:pl-14">care@spmedifort.com</span>
              </Link>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default MyPage;
