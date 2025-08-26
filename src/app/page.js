'use client';
import { useRef } from 'react';
import Image from "next/image";
import OurTeamB from '@/components/layouts/layoutB/OurTeamB';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import SpecialtiesSlider from '@/components/shared/SpecialtiesSlider';
import { FaSearch } from 'react-icons/fa';
import {
  FaMicroscope,
  FaCogs,
  FaXRay,
  FaParking,
  FaProcedures,
  FaFireAlt
} from 'react-icons/fa';
import BlogSection from '@/components/shared/BlogSection';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import VideoCard from '@/components/shared/VideoCard';
import 'swiper/css/navigation';
import { GiHospitalCross } from 'react-icons/gi';
import InsurancePartners from '@/components/shared/InsurancePartners';
import FaqSection from '@/components/shared/FaqSection';
import {
  Stethoscope,
  ClipboardList,
  Laptop,
  Home as HomeIcon
} from 'lucide-react';
import ContactSection from '@/components/shared/ContactSection';
const doctors = [
  // Anesthesiology
  { name: "Doctor 1", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/1.png" },
  { name: "Doctor 2", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/2.png" },
  { name: "Doctor 3", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/3.png" },
  { name: "Doctor 4", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/4.png" },
  { name: "Doctor 5", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/5.png" },
  { name: "Doctor 6", specialty: "ANESTHESIOLOGY", image: "/images/doctors-card/dp-images/anesthesiology/6.png" },

  // Cardiology
  { name: "Doctor 1", specialty: "CARDIOLOGY", image: "/images/doctors-card/dp-images/cardiology/1.png" },
  { name: "Doctor 2", specialty: "CARDIOLOGY", image: "/images/doctors-card/dp-images/cardiology/2.png" },
  { name: "Doctor 3", specialty: "CARDIOLOGY", image: "/images/doctors-card/dp-images/cardiology/3.png" },

  // Critical Care
  { name: "Doctor 1", specialty: "CRITICAL CARE", image: "/images/doctors-card/dp-images/critical-care/1.png" },
  { name: "Doctor 2", specialty: "CRITICAL CARE", image: "/images/doctors-card/dp-images/critical-care/2.png" },
  { name: "Doctor 3", specialty: "CRITICAL CARE", image: "/images/doctors-card/dp-images/critical-care/3.png" },

  // Dental Oral Maxillo Facial Surgery
  { name: "Doctor 1", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/1.png" },
  { name: "Doctor 2", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/2.png" },
  { name: "Doctor 3", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/3.png" },
  { name: "Doctor 4", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/4.png" },
  { name: "Doctor 5", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/5.png" },
  { name: "Doctor 6", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/6.png" },
  { name: "Doctor 7", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/7.png" },
  { name: "Doctor 8", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/8.png" },
  { name: "Doctor 9", specialty: "DENTAL ORAL MAXILLO FACIAL SURGERY", image: "/images/doctors-card/dp-images/dental-oral-maxillo-facial-surgery/9.png" },

  // Dentistry
  { name: "Doctor 1", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/1.png" },
  { name: "Doctor 2", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/2.png" },
  { name: "Doctor 3", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/3.png" },
  { name: "Doctor 4", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/4.png" },
  { name: "Doctor 5", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/5.png" },
  { name: "Doctor 6", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/6.png" },
  { name: "Doctor 7", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/7.png" },
  { name: "Doctor 8", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/8.png" },
  { name: "Doctor 9", specialty: "DENTISTRY", image: "/images/doctors-card/dp-images/dentistry/9.png" },

  // Dermatology
  { name: "Doctor 1", specialty: "DERMATOLOGY", image: "/images/doctors-card/dp-images/dermatology/1.png" },
  { name: "Doctor 2", specialty: "DERMATOLOGY", image: "/images/doctors-card/dp-images/dermatology/2.png" },

  // Emergency Medicine
  { name: "Doctor 1", specialty: "EMERGENCY MEDICINE", image: "/images/doctors-card/dp-images/emergency-medicine/1.png" },
  { name: "Doctor 2", specialty: "EMERGENCY MEDICINE", image: "/images/doctors-card/dp-images/emergency-medicine/2.png" },

  // Endocrinology
  { name: "Doctor 1", specialty: "ENDOCRINOLOGY", image: "/images/doctors-card/dp-images/endocrinology/1.png" },

  // ENT
  { name: "Doctor 1", specialty: "ENT", image: "/images/doctors-card/dp-images/ent/1.png" },
  { name: "Doctor 2", specialty: "ENT", image: "/images/doctors-card/dp-images/ent/2.png" },
  { name: "Doctor 3", specialty: "ENT", image: "/images/doctors-card/dp-images/ent/3.png" },
  { name: "Doctor 4", specialty: "ENT", image: "/images/doctors-card/dp-images/ent/4.png" },
  { name: "Doctor 5", specialty: "ENT", image: "/images/doctors-card/dp-images/ent/5.png" },

  // Family Medicine
  { name: "Doctor 1", specialty: "FAMILY MEDICINE", image: "/images/doctors-card/dp-images/family-medicine/1.png" },

  // Gastroenterology
  { name: "Doctor 1", specialty: "GASTROENTEROLOGY", image: "/images/doctors-card/dp-images/gastroenterology/1.png" },
  { name: "Doctor 2", specialty: "GASTROENTEROLOGY", image: "/images/doctors-card/dp-images/gastroenterology/2.png" },
  { name: "Doctor 3", specialty: "GASTROENTEROLOGY", image: "/images/doctors-card/dp-images/gastroenterology/3.png" },

  // Gynecology
  { name: "Doctor 1", specialty: "GYNAECOLOGY", image: "/images/doctors-card/dp-images/gynaecology/1.png" },

  // Internal Medicine
  { name: "Doctor 1", specialty: "INTERNAL MEDICINE", image: "/images/doctors-card/dp-images/INTERNAL MEDICINE/1.png" },
  { name: "Doctor 2", specialty: "INTERNAL MEDICINE", image: "/images/doctors-card/dp-images/INTERNAL MEDICINE/2.png" },

  // Nephrology
  { name: "Doctor 1", specialty: "NEPHROLOGY", image: "/images/doctors-card/dp-images/nephrology/1.png" },
  { name: "Doctor 2", specialty: "NEPHROLOGY", image: "/images/doctors-card/dp-images/nephrology/2.png" },

  // Neuroscience
  { name: "Doctor 1", specialty: "NEUROSCIENCE", image: "/images/doctors-card/dp-images/neuroscience/1.png" },
  { name: "Doctor 2", specialty: "NEUROSCIENCE", image: "/images/doctors-card/dp-images/neuroscience/2.png" },
  { name: "Doctor 3", specialty: "NEUROSCIENCE", image: "/images/doctors-card/dp-images/neuroscience/3.png" },

  // Oncology
  { name: "Doctor 1", specialty: "ONCOLOGY", image: "/images/doctors-card/dp-images/oncology/1.png" },
  { name: "Doctor 2", specialty: "ONCOLOGY", image: "/images/doctors-card/dp-images/oncology/2.png" },
  { name: "Doctor 3", specialty: "ONCOLOGY", image: "/images/doctors-card/dp-images/oncology/3.png" },
  { name: "Doctor 4", specialty: "ONCOLOGY", image: "/images/doctors-card/dp-images/oncology/4.png" },
  { name: "Doctor 5", specialty: "ONCOLOGY", image: "/images/doctors-card/dp-images/oncology/5.png" },

  // Ophthalmology
  { name: "Doctor 1", specialty: "OPHTHALMOLOGY", image: "/images/doctors-card/dp-images/ophthalmology/1.png" },

  // Orthopedics
  { name: "Doctor 1", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/1.png" },
  { name: "Doctor 2", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/2.png" },
  { name: "Doctor 3", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/3.png" },
  { name: "Doctor 4", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/4.png" },
  { name: "Doctor 5", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/5.png" },
  { name: "Doctor 6", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/6.png" },
  { name: "Doctor 7", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/7.png" },
  { name: "Doctor 8", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/8.png" },
  { name: "Doctor 9", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/9.png" },
  { name: "Doctor 10", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/10.png" },
  { name: "Doctor 11", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/11.png" },
  { name: "Doctor 12", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/12.png" },
  { name: "Doctor 13", specialty: "ORTHOPEDICS", image: "/images/doctors-card/dp-images/orthopedics/13.png" },

  // Pediatrics
  { name: "Doctor 1", specialty: "PEDIATRICS", image: "/images/doctors-card/dp-images/pediatrics/1.png" },
  { name: "Doctor 2", specialty: "PEDIATRICS", image: "/images/doctors-card/dp-images/pediatrics/2.png" },
  { name: "Doctor 3", specialty: "PEDIATRICS", image: "/images/doctors-card/dp-images/pediatrics/3.png" },

  // Physiotherapy
  { name: "Doctor 1", specialty: "PHYSIOTHERAPY", image: "/images/doctors-card/dp-images/physiotherapy/1.png" },

  // Plastic Surgery
  { name: "Doctor 1", specialty: "PLASTIC SURGERY", image: "/images/doctors-card/dp-images/PLASTIC SURGERY/1.png" },
  { name: "Doctor 2", specialty: "PLASTIC SURGERY", image: "/images/doctors-card/dp-images/PLASTIC SURGERY/2.png" },
  { name: "Doctor 3", specialty: "PLASTIC SURGERY", image: "/images/doctors-card/dp-images/PLASTIC SURGERY/3.png" },
  { name: "Doctor 4", specialty: "PLASTIC SURGERY", image: "/images/doctors-card/dp-images/PLASTIC SURGERY/4.png" },
  { name: "Doctor 5", specialty: "PLASTIC SURGERY", image: "/images/doctors-card/dp-images/PLASTIC SURGERY/5.png" },

  // Psychiatry
  { name: "Doctor 1", specialty: "PSYCHIATRY", image: "/images/doctors-card/dp-images/psychiatrypsychiatry/1.png" },

  // Radiology
  { name: "Doctor 1", specialty: "RADIOLOGY", image: "/images/doctors-card/dp-images/radiology/1.png" },
  { name: "Doctor 2", specialty: "RADIOLOGY", image: "/images/doctors-card/dp-images/radiology/2.png" },

  // Respiratory Medicine
  { name: "Doctor 1", specialty: "RESPIRATORY MEDICINE", image: "/images/doctors-card/dp-images/RESPIRATORY MEDICINE/1.png" },

  // Urology
  { name: "Doctor 1", specialty: "UROLOGY", image: "/images/doctors-card/dp-images/urology/1.png" },
  { name: "Doctor 2", specialty: "UROLOGY", image: "/images/doctors-card/dp-images/urology/2.png" },
];

import InternationalPatients from '@/components/shared/InternationalPatients';
import Link from 'next/link';
import AppDownloadBanner from '@/components/shared/AppDownloadBanner';

export default function Home() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };
  // const [active, setActive] = useState('second-opinion');

  const buttons = [
    {
      key: "second-opinion",
      label: "Second Opinion",
      icon: <Stethoscope size={24} />,
      link: "/second-opinion",
    },
    {
      key: "health-checkup",
      label: "Get Health Checkup",
      icon: <ClipboardList size={24} />,
      link: "/health-check-packages",
    },
    {
      key: "virtual-consult",
      label: "Book Consultation",
      icon: <Laptop size={24} />,
      link: "/find-a-doctor",
    },
    {
      key: "homecare",
      label: "Homecare",
      icon: <HomeIcon size={24} />,
      link: "/patient-care",
    },
  ];


  const slides = [
    {
      image: '/images/img1.webp',
      title: 'Experience Healthcare in a New Light',
      description: `At SP Medifort, we've created an advanced hospital setup in South Kerala with 475 beds, 10 high-tech operation theatres, and 170 ICU beds, designed to offer the kind of care that makes a real difference.`,
    },
    {
      image: '/images/img2.webp',
      title: 'Driven by Innovation. Guided by Compassion',
      description: `Combining cutting-edge technology with human touch to create better patient outcomes every day.`,
    },
    {
      image: '/images/img3.webp',
      title: 'Your Health, Our Priority',
      description: `Our team of expert doctors and support staff work around the clock to ensure holistic and trusted care.`,
    },
  ];
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const whyChooseCards = [
    {
      icon: <FaMicroscope size={28} className="text-primary" />,
      text: '1st Fully Robotic Zeiss Kinevo Neuro Microscope in South Kerala',
    },
    {
      icon: <FaCogs size={28} className="text-primary" />,
      text: '1st 3D Hybrid Cath Lab (GE Allia) with AI in South Asia',
    },
    {
      icon: <FaXRay size={28} className="text-primary" />,
      text: '1st Fully Motorized X-ray Suite in the Region',
    },
    {
      icon: <FaParking size={28} className="text-primary" />,
      text: 'Multi-Level 650-Car Covered Parking',
    },
    {
      icon: <FaProcedures size={28} className="text-primary" />,
      text: '170 ICU Beds with Remote Monitoring 24x7 & Level-D Isolation',
    },
    {
      icon: <FaFireAlt size={28} className="text-primary" />,
      text: '30-Bed Emergency Wing with an Independent Burns Unit',
    },
  ];
  const team = {
    title: 'Your Ambassadors of Care',
    subTitle: 'Meet the experts committed to your recovery...',
    doctors: [
      {
        name: 'Dr. John Doe',
        designation: 'Cardiologist',
        position: 'Senior Consultant',
        image: '/images/doctors/john-doe.jpg',
      },
      {
        name: 'Dr. Jane Smith',
        designation: 'Neurosurgeon',
        position: 'Head of Department',
        image: '/images/doctors/jane-smith.jpg',
      },
      {
        name: 'Dr. Rahul Patel',
        designation: 'Orthopaedic Surgeon',
        position: 'Consultant',
        image: '/images/doctors/rahul-patel.jpg',
      },
      {
        name: 'Dr. Rahul Patel',
        designation: 'Orthopaedic Surgeon',
        position: 'Consultant',
        image: '/images/doctors-card/aathithya.png',
      },
      
    ],
    description:
      'Our team brings decades of surgical excellence, international experience, and compassionate care to every patient.',
    cta: {
      label: 'See All Doctors',
      href: '/doctors',
    },
  };

  return (
    <>
      <section className="relative w-full min-h-screen flex items-end justify-center text-white overflow-hidden pb-10">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src="/videos/sp.mp4" type="video/mp4" />
        </video>


        <div className="absolute top-0 left-0 w-full h-[80dvh] bg-gradient-to-b from-primary to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-5xl px-4">
          {/* Search */}
          <div className="w-full max-w-3xl mx-auto mb-4 rounded-full flex items-center px-4 py-3 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search For Doctors & Specialities..."
              className="flex-1 bg-transparent text-primary placeholder-primary font-semibold text-sm md:text-base focus:outline-none"
            />
            <button className="text-white bg-primary p-2 rounded-full hover:bg-primary transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-4.35-4.35M10 18a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>

          {/* Buttons */}
          <div className="relative rounded-2xl shadow-lg bg-white overflow-hidden">
            {/* Simulated thick white inner border */}
            <div className="absolute inset-0 m-2 rounded-2xl border-4 border-white  z-10 pointer-events-none"></div>

            {/* Actual content with z-20 so it's above the border layer */}
            <div
              className="relative z-20 flex flex-col md:flex-row 
                divide-y-2 md:divide-y-0 md:divide-x-2 justify-center rounded-2xl border-4 border-white"
            >
              {buttons.map((btn, index) => (
        <Link
          key={btn.key}
          href={btn.link}
          passHref
          className={`flex-1 flex items-center gap-3 justify-center px-4 py-3 font-semibold text-sm md:text-base transition
            text-primary hover:bg-primary hover:text-white
            ${index === 0 ? 'lg:rounded-l-2xl' : 'rounded-2xl lg:rounded-none'}
            ${index === buttons.length - 1 ? 'lg:rounded-r-2xl' : 'rounded-2xl lg:rounded-none'}`}
        >
          <span className="text-xl">{btn.icon}</span>
          <span>{btn.label}</span>
        </Link>
      ))}

            </div>
            <div className="absolute inset-0 m-2 rounded-2xl border-4 border-white  z-10 pointer-events-none"></div>
          </div>



        </div>
      </section>

      {/* 🔹 Image Slider Section */}
      <section className="relative w-full h-[80vh]">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000 }}
          loop
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 max-w-4xl h-full mx-auto px-6 flex flex-col justify-center text-white space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm md:text-lg max-w-2xl">{slide.description}</p>
                <Link href='/health-check-packages' >
                <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold w-max shadow hover:bg-gray-100 flex items-center gap-2">
                  Read More
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      <AppDownloadBanner />
      <section className="relative max-w-7xl mx-auto overflow-hidden w-full py-12">
        <div className="max-w-8xl mx-auto    grid grid-cols-1 md:grid-cols-2 items-center relative z-10">

          {/* ⬅️ Text Content */}
          <div className="p-6 md:p-10 relative max-w-2xl px-5">
            {/* Optional Watermark Icon */}
            <div className="absolute right-0 bottom-0 opacity-10 w-28 h-28 md:w-40 md:h-40 bg-[url('/images/watermark.svg')] bg-no-repeat bg-contain pointer-events-none"></div>

            <h2 className="text-2xl md:text-3xl font-bold text-black mb-4">
              Why SP Medifort is Among the Best Hospitals in Thiruvananthapuram
            </h2>

            <p className="text-black mb-4">
              SP Medifort is a leading multispecialty hospital in Thiruvananthapuram, offering expert care across 50+ medical fields. Equipped with cutting-edge technology like robotic surgery and AI-based diagnostics, we combine advanced infrastructure with a compassionate, patient-first approach. From 24/7 emergency services to evidence-based treatments, our experienced doctors are committed to ensuring a seamless and supportive healing journey, making us a trusted choice among Thiruvananthapuram private hospitals.

            </p>


            <Link href='/our-story'>
              <button className="bg-primary text-white px-6 py-2 rounded-full font-semibold flex items-center gap-2 hover:bg-primary transition">
                Know More About Us
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </Link>
          </div>

          {/* ➡️ Image Block with Background Accent */}
          <div className="relative w-full h-[200px] md:h-[300px]">
            {/* 🟣 Background Shape — sticks to RIGHT, rounded on LEFT */}
            <div
              className="absolute right-0 top-0 
               w-[60%] md:w-[55%] 
               h-[240px] md:h-[360px] 
               bg-primary 
               rounded-tl-[80px] rounded-bl-[80px] md:rounded-tl-[120px] md:rounded-bl-[120px] 
               z-0"
            />

            {/* 🖼️ Foreground Image — slightly narrower, overlays from left */}
            <div
              className="relative left-0 top-10
               w-[100%] md:w-[100%] 
               h-[180px] md:h-[280px] 
               rounded-tl-[80px] rounded-bl-[80px] md:rounded-tl-[120px] md:rounded-bl-[120px] 
               overflow-hidden z-10 shadow-xl"
            >
              <img
                src="/images/spmed.webp"
                alt="SP Medifort Lobby"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>
      </section>
      <SpecialtiesSlider />
      {/* <section className="w-full bg-[#8B1C68] py-10 px-4">
        <div className="max-w-6xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-10 flex flex-col md:flex-row gap-6 justify-between items-start md:items-center relative z-10">

        
          <div className="w-full md:w-1/2">
            <h3 className="text-[#8B1C68] font-semibold text-lg md:text-xl mb-4">
              Find Diseases & Conditions By Alphabet
            </h3>
            <div className="flex flex-wrap gap-2">
              {alphabets.map((char) => (
                <button
                  key={char}
                  className={`w-8 h-8 rounded-full border-2 border-[#8B1C68] text-[#8B1C68] text-sm font-semibold flex items-center justify-center hover:bg-[#8B1C68] hover:text-white transition ${char === 'A' ? 'bg-[#8B1C68] text-white' : ''
                    }`}
                >
                  {char}
                </button>
              ))}
            </div>
          </div>

         
          <div className="hidden md:block w-px bg-gray-300 h-40 mx-4"></div>

         
          <div className="w-full md:w-1/2 space-y-4">
            <h3 className="text-[#8B1C68] font-semibold text-lg md:text-xl">
              Search Diseases and Conditions
            </h3>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="w-full border border-[#8B1C68] rounded-full px-4 py-2 pr-10 text-sm focus:outline-none"
              />
              <button className="absolute right-3 top-2.5 text-[#8B1C68]">
                <FaSearch />
              </button>
            </div>
            <p className="text-sm text-gray-700">
              Quickly find the information you need. Search our database to explore detailed information on various diseases and conditions, including symptoms, causes, and treatment options.
            </p>
          </div>
        </div>
      </section> */}
      {/* 🌟 Why Choose SP Medifort Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto text-center px-4">
          <h2 className="text-2xl md:text-4xl font-bold text-[#222] mb-2">Why Choose SP Medifort?</h2>
          <p className="text-primary font-medium mb-8">South Kerala’s 1st JCI Accredited hospital</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {whyChooseCards.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center space-y-3"
              >
                {item.icon}
                <p className="text-md text-bold text-black">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* 👨‍⚕️ Our Doctors Slider Section */}
      {/* 👨‍⚕️ Our Doctors Slider Section */}
      <section className="py-16 bg-[#ffeff9]">
        <div className="max-w-6xl mx-auto px-4 relative">
          <h2 className="text-2xl md:text-4xl font-bold text-center text-primary mb-5">
            Your Ambassadors of Care
          </h2>
          <p className="text-md md:text-lg  text-center text-gray-500 mb-3">Meet the experts committed to your recovery. Our doctors bring global experience,
            surgical precision, and personalized care across every specialty</p>

          {/* Arrows */}
          <div className="absolute -left-5 top-[50%] z-10 hidden md:block">
            <button className="bg-white shadow-lg p-2 rounded-full text-primary hover:bg-primary hover:text-white transition" id="doctor-prev">
              <FaArrowLeft />
            </button>
          </div>
          <div className="absolute -right-5 top-[50%] z-10 hidden md:block">
            <button className="bg-white shadow-lg p-2 rounded-full text-primary hover:bg-primary hover:text-white transition" id="doctor-next">
              <FaArrowRight />
            </button>
          </div>

          {/* Swiper */}
          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={{
              nextEl: '#doctor-next',
              prevEl: '#doctor-prev',
            }}
            autoplay={{ delay: 4000 }}
            loop
            className="pb-10"
          >
            {doctors.map((doc, index) => (
              <SwiperSlide key={index}>
                <div >
                  {/* Full Width Image */}
                  <div className="w-full h-full overflow-hidden">
                    <img
                      src={doc.image}
                      alt={doc.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Doctor Info */}

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="mt-8 flex justify-center">
            <a
              href="/find-a-doctor"
              className="bg-primary text-white px-3 py-2 rounded-full font-semibold flex items-center gap-3 hover:bg-primary transition"
            >
              See All Doctors
              <span className="bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </a>
          </div>


        </div>
      </section>
      <InternationalPatients />
      <section className="bg-[#FDEDF8] py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Section Title */}
          <h2 className="text-2xl md:text-4xl font-bold text-primary mb-4">
            Building the Future of Healthcare
          </h2>
          <p className="text-black mb-12 max-w-3xl mx-auto text-lg">
            Empowering the next generation of healthcare professionals through globally recognized
            clinical education, skill development programs, and observership opportunities.
          </p>

          {/* Cards Grid */}
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src="/images/demo/img7.png"
                  alt="Medicine Program"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-primary font-bold text-lg mb-2">
                  Medicine – CCT-EM (SEMI), MRCEM (UK)
                </h3>
                <ul className="text-sm list-disc list-inside text-[#222] space-y-1">
                  <li>Duration: 3 Years</li>
                  <li>MBBS eligibility, MCI/FMGE recognition</li>
                  <li>Prepares for MRCEM (UK)</li>
                  <li>Rotations: ED, ICU, OT</li>
                  <li>Training: Trauma and critical care procedures</li>
                </ul>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src="/images/29.webp"
                  alt="NSDC Course"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-primary font-bold text-lg mb-2">
                  NSDC Course: General Duty Assistant
                </h3>
                <ul className="text-sm list-disc list-inside text-[#222] space-y-1">
                  <li>Duration: 1 Year (Theory + OJT)</li>
                  <li>Class XII Science, age 18–26</li>
                  <li>Jobs: Hospitals, Clinics and Homecare</li>
                </ul>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="h-[200px] w-full overflow-hidden">
                <img
                  src="/images/demo/img8.png"
                  alt="Other Programs"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 text-left">
                <h3 className="text-primary font-bold text-lg mb-2">Other Programs:</h3>
                <ul className="text-sm list-disc list-inside text-[#222] space-y-1">
                  <li>MBBS Observership (Intl. students)</li>
                  <li>Physiotherapy</li>
                  <li>MSW, MHA and Paramedical</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-3 py-2 rounded-full font-semibold hover:bg-primary transition"
          >
            Explore Academic Opportunities
            <span className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-primary"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </Link>
        </div>
      </section>

      <section className="bg-white py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            Healing Stories
          </h2>
          <p className="text-black text-2xl mb-12">Healing That Feels Like Home</p>

          {/* Grid Layout */}
          <div className="hidden md:grid grid-cols-5 gap-4 auto-rows-[450px]">
            {/* Column 1 - Center Aligned */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-full">
                <VideoCard
                  src="/videos/vid1.mp4"

                  quote="I came from Dubai for my father's surgery. We felt like family from day one."
                  name="Mr. Sharma, Bangalore"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-4">
              <VideoCard
                src="/videos/vid2.mp4"

                title="Liver Failure"
                name="Baby Bhavika"
              />
              <VideoCard
                src="/videos/vid2.mp4"

                title="Jaw Cancer"
                name="Dr. Abhilasha Agarwal"
              />
            </div>

            {/* Column 3 - Tall Video */}
            <div>
              <VideoCard
                src="/videos/vid3.mp4"
                title="Pre-term Babies"
                name="Ms Sakshi"
                tall
              />
            </div>

            {/* Column 4 */}
            <div className="flex flex-col gap-4">
              <VideoCard
                src="/videos/vid4.mp4"

                title="Neurosurgical Treatment"
                name="Mr. Devender Jeet Singh"
              />
              <VideoCard
                src="/videos/vid4.mp4"

                title="Bone Marrow Transplant"
                name="Patient Father Mr Halder"
              />
            </div>

            {/* Column 5 - Center Aligned */}
            <div className="flex flex-col justify-center items-center">
              <div className="w-full">
                <VideoCard
                  src="/videos/vid1.mp4"

                  quote="The ICU team saved my husband’s life. I’m forever grateful."
                  name="Mrs. Leela K., Kollam"
                />
              </div>
            </div>
          </div>

          {/* Mobile View - Stack */}
          <div className="md:hidden">
  <div className="relative h-[250px] rounded-2xl overflow-hidden shadow-lg">
    <video
      src="/videos/vid1.mp4"
      autoPlay
      muted
      loop
      playsInline
      className="w-full h-full object-cover"
    />
  </div>
</div>

      

          
        </div>
      </section>


      <BlogSection />
      <InsurancePartners />

      <section className="bg-primary py-16 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
          {/* Left Content */}
          <div className="text-white">
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Step Inside SP Medifort – Virtually
            </h2>
            <p className="mb-6 max-w-lg leading-relaxed text-white/90">
              Experience our world-class facilities, high-tech operating suites,
              private ICUs, and healing spaces from anywhere.
            </p>

            <Link
              href="https://spmedifort.com/virtual-tour"
              className="inline-flex items-center gap-2 px-4 py-2 border border-white rounded-full hover:bg-white hover:text-primary transition group"
            >
              Launch Virtual Tour
              <span className="w-6 h-6 flex items-center justify-center rounded-full bg-white">
                <svg
                  className="w-4 h-4 text-primary"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </span>
            </Link>

          </div>

          {/* Right Image */}
          <div>
            <img

              src="images/demo/img9.png"
              alt="Virtual Tour"
              className="rounded-2xl"
              priority
            />
          </div>
        </div>
      </section>
      <FaqSection />

      <ContactSection />
      


    </>
  );
}
