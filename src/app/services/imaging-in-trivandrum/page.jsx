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
  "/images/services/imaging/1.5-Tesla-MRI-with-advanced-software.webp";
const techImg2 =
  "/images/services/imaging/128-Slice-CT-Scanner-with-low-dose-radiation-settings.webp";
const techImg3 =
  "/images/services/imaging/Digital-PACS-Reporting-(accessible-by-consultants-instantly).webp";
const techImg4 = "/images/services/imaging/Dedicated-Mammography-Suite.webp";
const techImg5 =
  "/images/services/imaging/Real-time-Doppler-Imaging-for-vascular-studies.webp";
const techImg6 =
  "/images/services/imaging/Integrated-EMR-for-physician-access.webp";

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
    title: "Services Images Diagnostic Services in Thiruvananthapuram",
    tagline:
      "Clarity That Diagnoses, Precision That Heals - Powered by the Latest in Medical Imaging.",
  },
  overview: {
    heading: "Overview",
    description:
      "The Imaging Services Department at SP Medifort Hospital offers advanced diagnostic tools that help clinicians visualize and interpret internal structures with high accuracy. Equipped with cutting-edge radiology technology, our facility delivers fast, detailed scans to aid early diagnosis and effective treatment planning.\nAs a trusted radiology and imaging centre in Trivandrum, we provide patient-centric care with 24*7 access to routine and emergency scans.",
  },
  whatWeOffer: [
    "MRI (Magnetic Resonance Imaging) – 1.5 Tesla high-definition scans",
    "CT Scan – 128-slice high-speed CT for full-body and contrast studies",
    "Digital X-Ray – Chest, limb, spine, dental, and contrast X-rays",
    "Ultrasound & Doppler Studies – Abdominal, pelvic, thyroid, vascular, fetal",
    "3D/4D Pregnancy Ultrasound",
    "Mammography – Digital breast cancer screening",
    "Fluoroscopy – Dynamic imaging for GI and musculoskeletal studies",
    "Bone Densitometry (DEXA Scan)",
    // "Portable Imaging Units – For bedside & ICU scans",
  ],
  team: [
    "Radiologists (MD, DNB) for image interpretation & reporting",
    "Imaging Technologists trained in CT, MRI, and ultrasound operations",
    "Radiographers & X-Ray Technicians for routine and emergency work",
    "Sonographers for fetal and abdominal scanning",
  ],
  technologies: [
    "1.5 Tesla MRI with advanced software",
    "128-Slice CT Scanner with low-dose radiation settings",
    "Digital PACS Reporting (accessible by consultants instantly)",
    "Dedicated Mammography Suite",
    "Real-time Doppler Imaging for vascular studies",
    "Integrated EMR for physician access",
  ],
  whenToUse: [
    "Post-trauma or injury to rule out fractures or internal bleeding",
    "Neurological symptoms (stroke, seizure, headache)",
    "Cancer screening and staging",
    "Pregnancy monitoring or fetal abnormalities",
    "Chronic abdominal, joint, or chest issues",
    "Emergency scans ordered by the ER or the ICU",
    "Pre-operative surgical planning",
    "Follow-up imaging to monitor disease progression or treatment response",
    "For routine health check-ups and early disease detection"
  ],
  whyChoose: [
    "24*7 availability for emergency and admitted patients",
    "Latest MRI, CT, and Ultrasound machines",
    "Rapid report turnaround (most within 4–6 hours)",
    "PACS-enabled digital access for clinicians",
    "Patient privacy and comfort prioritized",
    "Low-radiation safety technology, especially for children & pregnant women",
  ],
  successStories: [
    {
      content:
        "I had an MRI scheduled for early morning. The process was smooth, and I got the report within hours. Truly the best imaging hospital in Trivandrum.",
      author: "Joseph M.",
    },
    {
      content:
        "Clean, efficient, and very professional. Their CT scan in Trivandrum was the quickest we’ve ever experienced.",
      author: "Maya D.",
    },
  ],
  faqs: [
    {
      question: "Do I need a prescription for an imaging test?",
      answer:
        "Yes, unless it’s part of a health check-up package or wellness scan.",
    },
    {
      question: "How long does a CT or MRI scan take?",
      answer:
        "MRI: 20–45 minutes, depending on area. CT: 10–15 minutes including prep.",
    },
    {
      question: "Are imaging reports available online?",
      answer:
        "Yes. Reports can be shared via email or downloaded from our secure portal.",
    },
    {
      question: "Is contrast imaging safe?",
      answer:
        "Yes. We perform a screening and obtain consent before any contrast-based study.",
    },
  ],
  appointmentSection: {
    heading: "Book Your Scan Today",
    description:
      "Visit SP Medifort – Trusted diagnostic imaging centre in Trivandrum",
    callToAction: "Call Us: +91-XXXXXXXXXX",
    buttons: ["Book a Scan", "WhatsApp Now"],
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
      <section className="relative  bg-[#EFDAD9] overflow-hidden">
        <div className="max-w-[1280px] mx-auto md:pt-16">   
          <div className="lg:flex items-start gap-8">
            <div className="w-full  px-4 md:px-8 pb-6 ">
              <div className="pt-6 lg:pt-0 pb-3">
                <Breadcrumb />
              </div>
              <div className="text-left ">
                <h1 className="text-3xl py-5 md:text-4xl font-bold text-primary">
                  {data.hero?.title}
                </h1>
              </div>
              <div className="text-left">
                <p className="text-xl md:text-2xl font-medium leading-tight text-[#030c3d] mb-4 lg:mb-0">
                  {data.hero?.tagline}
                </p>
              </div>
              <div className="mt-6 sm:mt-4 md:mt-10">
              <Link
                href='/find-a-doctor'
                className="inline-flex items-center gap-3 sm:gap-4 md:gap-6 bg-primary text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-roboto font-bold text-[16px] sm:text-[18px] md:text-[22px] leading-tight hover:bg-accent/80 transition duration-300"
              >
                Book Appointment
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
            </div>

            <div className="relative w-full  px-4 md:px-8">
              <div className="overflow-hidden rounded-t-2xl">
                <img
                  src="/images/services/banner-img/Imaging-Services.webp"
                  alt="Blood Vials"
                  className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover rounded-t-2xl"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[60px] sm:h-[70px] md:h-[81px] bg-[#870064]"></div>
      </section>

      {/* Overview Section */}
      {data.overview && (
        <section className="bg-[#f7eff9] py-12 sm:py-16 md:py-20 px-4 md:px-10 lg:px-24 xl:px-32">
          <div className="w-full max-w-[1800px] mx-auto flex flex-col md:flex-row items-start gap-4 md:gap-6 lg:gap-8">
            <div className="flex-1 w-full">
              <h2 className="text-3xl py-5 md:text-4xl font-bold text-primary">
                {data.overview.heading}
              </h2>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] leading-[28px] md:leading-[34px] font-normal not-italic text-[#1e1e1e] max-w-[700px]">
                {data.overview.description}
              </p>
            </div>
            <div className="flex-1 flex justify-center md:justify-end w-full">
              <div className="w-full sm:w-[400px] md:w-[520px] h-[210px] sm:h-[320px] md:h-[391px] rounded-2xl overflow-hidden shadow-xl border-[3px] border-[#ecd7ee]">
                <img
                  src="/images/services/overview-img/Imaging-Services.webp"
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-12 text-start">
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
      className="flex items-center border-l-8 border-[#D95DB0] bg-white rounded-2xl shadow-xl py-6 px-5 md:px-6 w-full relative overflow-hidden"
    >
      <div className="flex items-center gap-4 pl-6">
        {/* Icon Box */}
        <span className="flex items-center justify-center 
                        w-14 h-14 md:w-16 md:h-16 
                        bg-[#D95DB0] rounded-xl flex-shrink-0">
          <Icon className="text-white text-3xl md:text-4xl" />
        </span>

        {/* Text */}
        <span className="font-semibold 
                        text-lg sm:text-xl md:text-2xl 
                        leading-tight text-[#1e1831]">
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
        <h2 className="text-3xl py-5 md:text-4xl font-bold text-primary sm:mb-5">
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
        <section className="py-14 sm:py-12 px-4 md:px-10 lg:px-20 bg-[#EFDAD9]">
          <h2 className="text-3xl py-5 md:text-4xl font-bold text-primary text-center">
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
                  {/* <span className="text-xl font-bold text-[#910067]">
                    {String(idx + 1).padStart(2, "0")}
                  </span> */}
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
              <h2 className="text-3xl py-5 md:text-4xl font-bold text-primary text-center mb-8">
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
                  src="/images/services/imaging/Imaging-Services(why-choose).webp"
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
          <h2 className="text-white text-3xl md:text-4xl font-bold mb-12">
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
            <h2 className="text-3xl py-5 md:text-4xl font-bold text-primary text-center mb-5">
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
        <section className="relative w-full min-h-[280px] flex items-center overflow-hidden px-4 md:px-16 py-14 md:py-14">
          <img
            src="/images/services/imaging/Imaging-Services(footer).webp"
            alt=""
            className="absolute inset-0 w-full h-full object-cover"
            style={{ zIndex: 0 }}
          />
          <div
            className="absolute inset-0 "
            style={{ zIndex: 1 }}
          />
          <div className="relative z-10 w-full  ml-0 md:ml-[7vw] lg:ml-24">
            <div className=" py-6 md:py-8 mb-5   border-opacity-60 text-left w-full  justify-start items-center">
              <h2
              className="text-3xl py-5 md:text-5xl font-semibold text-white"
              >
                {data.appointmentSection.heading}
              </h2>
              <p
                className="font-medium text-xl text-white mb-2 leading-relaxed"
              >
                {data.appointmentSection.description}
              </p>
            </div>
            <div className="flex flex-col gap-6 items-start w-full">
              <Link
                href="tel:04713100100"
                className="relative flex items-center bg-primary border-4 border-white rounded-full px-12 py-2 font-bold text-white text-[20px] md:text-[28px] tracking-wide min-h-[56px] md:min-h-[66px] w-fit shadow-md"
                style={{ letterSpacing: ".01em" }}
              >
                <span
                  className="absolute -left-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary border-l-0 border-4 border-white rounded-full p-2"
                  // style={{ boxShadow: "0 0 0 4px #EA6ACB" }}
                >
                  <MdPhone className="text-[#fff] text-[1.8rem] md:text-[2.2rem]" />
                </span>
                <span className="pl-10 md:pl-14">0471 3100 100</span>
              </Link>
              <Link
                href="mailto:care@spmedifort.com"
               className="relative flex items-center bg-primary border-4 border-white rounded-full px-12 py-2 font-bold text-white text-[20px] md:text-[28px] tracking-wide min-h-[56px] md:min-h-[66px] w-fit shadow-md"
                style={{ letterSpacing: ".01em" }}
              >
                <span
                   className="absolute -left-0 flex items-center justify-center w-12 h-12 md:w-16 md:h-16 bg-primary border-l-0 border-4 border-white rounded-full p-2"
            
                >
                  <MdEmail className="text-[#fff] text-[1.8rem] md:text-[2.2rem]" />
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
