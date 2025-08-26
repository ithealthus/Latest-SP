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
  {
    name: 'Dr. Arun Kumar R',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/arun-kumar.png',
  },
  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/aathithya.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/alex-thomas.png',
  },
  {
    name: 'Dr. Arun Kumar R',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/arun-viswanth.png',
  },
  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/ashok-thomas.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/athul-babu-j.png',
  },

  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/hari-kumar.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/justin-thomas.png',
  },
  {
    name: 'Dr. Arun Kumar R',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/niranjan.png',
  },
  {
    name: 'Dr. Aathithya S',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/praveen-s-jose.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/rohit.png',
  },
  {
    name: 'Dr. Alex Thomas N',
    specialty: 'ORTHOPEDICS',
    image: '/images/doctors-card/shibu.png',
  },
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
  const [active, setActive] = useState('second-opinion');

  const buttons = [
    {
      key: 'second-opinion',
      label: 'Second Opinion',
      icon: <Stethoscope size={24} />,
    },
    {
      key: 'health-checkup',
      label: 'Get Health Checkup',
      icon: <ClipboardList size={24} />,
    },
    {
      key: 'virtual-consult',
      label: 'Book Virtual Consultation',
      icon: <Laptop size={24} />,
    },
    {
      key: 'homecare',
      label: 'Homecare',
      icon: <HomeIcon size={24} />,
    },
  ];


  const slides = [
    {
      image: '/images/img1.jpg',
      title: 'Experience Healthcare in a New Light',
      description: `At SP Medifort, we've created an advanced hospital setup in South Kerala with 475 beds, 10 high-tech operation theatres, and 170 ICU beds, designed to offer the kind of care that makes a real difference.`,
    },
    {
      image: '/images/img2.jpg',
      title: 'Driven by Innovation. Guided by Compassion',
      description: `Combining cutting-edge technology with human touch to create better patient outcomes every day.`,
    },
    {
      image: '/images/img3.jpg',
      title: 'Your Health, Our Priority',
      description: `Our team of expert doctors and support staff work around the clock to ensure holistic and trusted care.`,
    },
  ];
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const whyChooseCards = [
    {
      icon: <FaMicroscope size={28} className="text-[#6E2452]" />,
      text: '1st Fully Robotic Zeiss Kinevo Neuro Microscope in South Kerala',
    },
    {
      icon: <FaCogs size={28} className="text-[#6E2452]" />,
      text: '1st 3D Hybrid Cath Lab (GE Allia) with AI in South Asia',
    },
    {
      icon: <FaXRay size={28} className="text-[#6E2452]" />,
      text: '1st Fully Motorized X-ray Suite in the Region',
    },
    {
      icon: <FaParking size={28} className="text-[#6E2452]" />,
      text: 'Multi-Level 650-Car Covered Parking',
    },
    {
      icon: <FaProcedures size={28} className="text-[#6E2452]" />,
      text: '170 ICU Beds with Remote Monitoring 24x7 & Level-D Isolation',
    },
    {
      icon: <FaFireAlt size={28} className="text-[#6E2452]" />,
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


        <div className="absolute top-0 left-0 w-full h-[80dvh] bg-gradient-to-b from-[#6E2452] to-transparent z-10 pointer-events-none" />

        <div className="relative z-20 w-full max-w-5xl px-4">
          {/* Search */}
          <div className="w-full max-w-3xl mx-auto mb-4 rounded-full flex items-center px-4 py-3 bg-white shadow-md">
            <input
              type="text"
              placeholder="Search For Doctors & Specialities..."
              className="flex-1 bg-transparent text-[#6E2452] placeholder-[#6E2452] font-semibold text-sm md:text-base focus:outline-none"
            />
            <button className="text-white bg-[#6E2452] p-2 rounded-full hover:bg-[#5a1d44] transition">
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
                divide-y-2 md:divide-y-0 md:divide-x-2 divide-gray-300 rounded-2xl border-4 border-white"
            >
              {buttons.map((btn, index) => (
                <button
                  key={btn.key}
                  onClick={() => setActive(btn.key)}
                  className={`flex-1 flex items-center gap-3 justify-center px-4 py-3 font-semibold text-sm md:text-base transition
                    ${active === btn.key
                      ? 'bg-[#6E2452] text-white'
                      : 'text-[#6E2452] hover:bg-gray-50'}
                    ${index === 0 ? 'rounded-l-2xl' : ''}
                    ${index === buttons.length - 1 ? 'rounded-r-2xl' : ''}`}
                >
                  <span
                    className={`text-xl transition ${active === btn.key ? 'text-white' : 'text-[#6E2452]'
                      }`}
                  >
                    {btn.icon}
                  </span>
                  <span>{btn.label}</span>
                </button>
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
              <div className="absolute inset-0 bg-gradient-to-b from-[#6E2452]/90 via-[#6E2452]/70 to-transparent z-10" />

              {/* Text Content */}
              <div className="relative z-20 max-w-4xl h-full mx-auto px-6 flex flex-col justify-center text-white space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold leading-tight">{slide.title}</h2>
                <p className="text-sm md:text-lg max-w-2xl">{slide.description}</p>
                <Link href='/health-check-packages' >
                <button className="bg-white text-[#6E2452] px-6 py-2 rounded-full font-semibold w-max shadow hover:bg-gray-100 flex items-center gap-2">
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
              SP Medifort is a leading multispecialty hospital in Thiruvananthapuram, offering expert care across 50+ medical fields. Equipped with cutting-edge technology like robotic surgery and AI-based diagnostics, we combine advanced infrastructure with a compassionate, patient-first approach. From 24/7 emergency services to evidence-based treatments, our experienced doctors are committed to ensuring a seamless and supportive healing journey, making us a trusted choice among Trivandrum private hospitals.

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
               bg-[#6E2452] 
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
          <p className="text-[#6E2452] font-medium mb-8">South Kerala’s 1st JCI Accredited hospital</p>

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
              className="bg-[#6E2452] text-white px-3 py-2 rounded-full font-semibold flex items-center gap-3 hover:bg-[#5a1d44] transition"
            >
              See All Doctors
              <span className="bg-white rounded-full p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4 text-[#6E2452]"
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
          <h2 className="text-2xl md:text-4xl font-bold text-[#6E2452] mb-4">
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
                <h3 className="text-[#6E2452] font-bold text-lg mb-2">
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
                <h3 className="text-[#6E2452] font-bold text-lg mb-2">
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
                <h3 className="text-[#6E2452] font-bold text-lg mb-2">Other Programs:</h3>
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
            href="/news-and-resources"
            className="inline-flex items-center gap-2 bg-[#6E2452] text-white px-3 py-2 rounded-full font-semibold hover:bg-[#5a1d44] transition"
          >
            Explore Academic Opportunities
            <span className="bg-white rounded-full p-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-4 h-4 text-[#6E2452]"
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
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-2">
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
          <div className="grid md:hidden grid-cols-1 gap-4">
            {/* Stack all videos vertically on small screens */}
            {/* You can reuse same VideoCard components here */}
          </div>

          {/* Buttons */}
          {/* <div className="mt-10 flex justify-center gap-4">
            <button className="inline-flex items-center gap-2 border border-primary text-primary px-6 py-2 rounded-full font-semibold hover:bg-primary hover:text-white transition">
              Read More Stories
              <span className="bg-primary text-white rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>

            <button className="inline-flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-semibold hover:bg-[#5a1d44] transition">
              Watch Patient Videos
              <span className="bg-white text-primary rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </button>
          </div> */}
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
      {/* <section class="w-full bg-gradient-to-r from-[#72005F] to-[#9A007D] ">
  <div class="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-10 ">
    
    
    <div class="w-full lg:w-1/2 text-white">
      <h2 class="text-2xl font-bold mb-2">Post A Medical Query:</h2>
      <p class="mb-6">Post A Question, And We Will Get Back To You Soon.</p>
      
      <form class="space-y-4">
        <input type="text" placeholder="Name:" class="w-full px-4 py-2 rounded-full text-black focus:outline-none" />
        
        <div class="flex gap-4">
          <input type="text" placeholder="Mobile:" class="w-1/2 px-4 py-2 rounded-full text-black focus:outline-none" />
          <input type="email" placeholder="Email:" class="w-1/2 px-4 py-2 rounded-full text-black focus:outline-none" />
        </div>
        
        <select class="w-full px-4 py-2 rounded-full text-black focus:outline-none">
          <option>Select Treatment:</option>
          
        </select>
        
        <textarea placeholder="Your Message Here:" rows="4" class="w-full px-4 py-2 rounded-lg text-black focus:outline-none"></textarea>
        
        <div class="flex items-center gap-2">
          <input type="checkbox" id="agree" />
          <label for="agree" class="text-sm">
            I Agree To The T&C And Privacy Policy And I Am Giving My Consent To Receive Updates Through SMS/Email.
          </label>
        </div>
        
        <button type="submit" class="bg-white text-[#72005F] px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
          Submit Now!
        </button>
      </form>
    </div>

    
    <div class="w-full lg:w-full relative">
      <div class="w-full h-full lg:w-full relative overflow-hidden">
  <img src="/images/img10.png" alt="Doctors" class="w-full h-full object-cover" />
</div>




      
      <div class="absolute top-4 right-0 space-y-4 py-20">
        <div class="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
          <div class="bg-primary p-2 rounded-full text-white">
            📍
          </div>
          <p class="text-sm">
            <span class="font-bold text-[#72005F]">Visit Us:</span> Reach Our Thiruvananthapuram Campus With Ease Using Online Directions
          </p>
        </div>

        <div class="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
          <div class="bg-[#72005F] p-2 rounded-full text-white">
            📞
          </div>
          <p class="text-sm">
            <span class="font-bold text-[#72005F]">Emergency 24x7:</span> Reach Us On Our Emergency Helpline: +91-0471 3100 100
          </p>
        </div>

        <div class="bg-white rounded-full shadow px-6 py-2 flex items-center gap-4 w-[370px]">
          <div class="bg-[#72005F] p-2 rounded-full text-white">
            💻
          </div>
          <p class="text-sm">
            <span class="font-bold text-[#72005F]">Online Consultation:</span> Talk To Our Doctors From Where You Sit
          </p>
        </div>
      </div>
    </div>

  </div>
</section> */}


    </>
  );
}
