// Header.jsx
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import MegaMenu from "./MegaMenu";
import MobileMenu from "./MobileHeader";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "#", label: "DISCOVER SP MEDIFORT" },
  { href: "#", label: "SPECIALITES & TREATMENT" },
  { href: "/services", label: "SERVICES" },
  { href: "/patient-care", label: "INTERNATIONAL PATIENTS" },
  { href: "/hospital-facilities", label: "HOSPITAL FACILITIES" },
  { href: "/contact", label: "CONTACT US" },
];

const discoverItems = [
  { name: "About Us", href: "/our-story" },
  { name: "Careers", href: "/career" },
  { name: "Blogs", href: "/blog" },
  { name: "News & Resources", href: "/news-and-resources" },
  // { name: "Latest News Update", href: "/latest-news-update" },
  { name: "Health Blogs", href: "/health-articles-and-blogs" },
  { name: "Videos & Media Gallery", href: "/videos-and-media-gallery" },
  { name: "SP Medifort Podcasts", href: "/videos-and-media-gallery/podcast" },
];

const treatmentItems = [
  {
    name: "Physiotherapy & Rehabilitation",
    href: "/services/physiotherapy-rehabilitation-in-trivandrum",
  },
  { name: "Clinical Laboratory", href: "/services/clinical-laboratory-in-trivandrum" },
  { name: "Pharmacy", href: "/services/pharmacy-in-trivandrum" },
  { name: "Cath Lab", href: "/services/cath-lab-in-trivandrum" },
  { name: "Nursing Services", href: "/services/nursing-services-in-trivandrum" },
  { name: "Blood Centre", href: "/services/blood-centre-in-trivandrum" },
  { name: "Medical Records", href: "/services/medical-records-in-trivandrum" },
  {
    name: "Audiology & Speech Therapy",
    href: "/services/audio-speech-in-trivandrum",
  },
  { name: "Imaging Services", href: "/services/imaging-in-trivandrum" },
  { name: "EMG / EEG / ECG", href: "/services/emg-eeg-ecg-in-trivandrum" },
  { name: "Dietetics & Nutrition", href: "/services/dietetics-nutrition-in-trivandrum" },
  {
    name: "CSSD (Central Sterile Services Department)",
    href: "/services/cssd-in-trivandrum",
  },
];


const departmentItems = [
  { name: "Cardiac Science", href: "/departments/cardiac-hospital-in-trivandrum" },
  { name: "Anesthesiology", href: "/departments/anesthesiology-hospital-in-trivandrum" },
  { name: "Critical Care", href: "/departments/critical-care-hospital-in-trivandrum" },
  {
    name: "Dental Oral & Maxillo Facial Surgery",
    href: "/departments/dental-oral-maxillofacial-surgery-hospital-in-trivandrum",
  },
  {
    name: "General Surgery",
    href: "/departments/department-of-surgery/general-surgery-hospital-in-trivandrum",
  },
  {
    name: "Plastic & Micro Vascular Surgery",
    href: "/departments/plastic-micro-vascular-hospital-in-trivandrum",
  },
  {
    name: "Minimal Access Surgery",
    href: "/departments/department-of-surgery/minimal-access-surgery-hospital-in-trivandrum",
  },
  {
    name: "Robotic and General Surgery",
    href: "/departments/department-of-surgery/robotic-laparoscopic-and-general-surgery-hospital-in-trivandrum",
  },

  { name: "Dermatology", href: "/departments/dermatology-hospital-in-trivandrum" },
  { name: "Emergency Medicine", href: "/departments/emergency-medicine-hospital-in-trivandrum" },
  { name: "Endocrinology", href: "/departments/endocrinology-hospital-in-trivandrum" },
  { name: "ENT", href: "/departments/ent-hospital-in-trivandrum" },
  { name: "Family Medicine", href: "/departments/family-medicine-hospital-in-trivandrum" },
  { name: "Gastroenterology", href: "/departments/gastroenterology-hospital-in-trivandrum" },
  { name: "General Medicine", href: "/departments/general-medicine-hospital-in-trivandrum" },
  { name: "Laryngology", href: "/departments/laryngology-hospital-in-trivandrum" },
  { name: "Nephrology", href: "/departments/nephrology-hospital-in-trivandrum" },
  { name: "Neuroscience", href: "/departments/neurosciences-hospital-in-trivandrum" },
  {
    name: "Obstetrics & Gynaecology",
    href: "/departments/obstetrics-and-gynaecology-hospital-in-trivandrum",
  },
  {
    name: "Medical Oncology",
    href: "/departments/oncology/medical-oncology-hospital-in-trivandrum",
  },

  {
    name: "Surgical Oncology",
    href: "/departments/oncology/surgical-oncology-hospital-in-trivandrum",
  },
  { name: "Ophthalmology", href: "/departments/ophthalmology-hospital-in-trivandrum" },
  { name: "Orthopedics & Spine", href: "/departments/orthopedics-spine-hospital-in-trivandrum" },
  {
    name: "Pediatrics Surgery",
    href: "/departments/pediatrics/pediatric-surgery-hospital-in-trivandrum",
  },
  {
    name: "Pediatrics",
    href: "/departments/pediatrics/pediatrics-hospital-in-trivandrum",
  },

  { name: "Psychiatry", href: "/departments/psychiatry-hospital-in-trivandrum" },
  { name: "Radiodiagnosis", href: "/departments/radiodiagnosis" },
  {
    name: "Respiratory Medicine",
    href: "/departments/respiratory-medicine-hospital-in-trivandrum",
  },
  { name: "Rheumatology", href: "/departments/rheumatology-hospital-in-trivandrum" },
  { name: "Speech Therapy", href: "/departments/speech-therapy-hospital-in-trivandrum" },
  // { name: "Urology", href: "/departments/urology" },
];


const servicesItems = [
  // { name: "Medical Services", href: "/services/medical-services" },
  { name: "Health Check Packages", href: "/health-check-packages" },
  { name: "Find a Doctor", href: "/find-a-doctor" },
  // { name: "Book Appointment", href: "/services/#" },
  // { name: "Patient Testimonial", href: "/services/#" },
];

const patientsItems = [
  // { name: 'Patient Care', href: '/international/patient-Care' },
  // { name: 'International Patient Care', href: '/international/international-patient-care' },
];

const facilitiesItems = [
  { name: "Hospital Facilities", href: "/hospital-facilities" },
  { name: "Advanced Technology & Infrastructure", href: "/facilities/parking" },
];

const contactItems = [
  { name: "Contact Us", href: "/contact/info" },
  { name: "Book Appointment", href: "/contact/feedback" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  useEffect(() => {
    if (!isHomePage) return;
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);
  const getMenuProps = (label) => {
    switch (label) {
      case "SPECIALITES & TREATMENT":
        return {
          type: "specialities",
          data: {
            treatment: treatmentItems,
            department: departmentItems,
          },
        };
      case "DISCOVER SP MEDIFORT":
        return { type: "simple", data: { items: discoverItems } };
      case "SERVICES":
        return { type: "simple", data: { items: servicesItems } };
      case "INTERNATIONAL PATIENTS":
        return { type: "simple", data: { items: patientsItems } };
      case "HOSPITAL FACILITIES":
        return { type: "simple", data: { items: facilitiesItems } };
      case "CONTACT US":
        return { type: "simple", data: { items: contactItems } };
      default:
        return null;
    }
  };

  return (
    <header
      className={`w-full top-0 z-50 font-body transition-colors duration-300 ${isHomePage
        ? scrolled
          ? "bg-primary fixed text-white shadow-md"
          : "bg-transparent fixed text-white"
        : "bg-primary sticky text-white shadow-md"
        }`}
    >
      <div className="max-w-[1440px] mx-auto flex items-center justify-between px-4">
        {/* Desktop Navigation */}
        <div className="hidden lg:flex justify-between items-center w-full">
          {/* Left-side links */}
          <div className="flex gap-6" style={{ lineHeight: "100px" }}>
            {navLinks.slice(0, 3).map((link) => {
              const menuProps = getMenuProps(link.label);
              return menuProps ? (
                <div key={link.label} className="group">
                  <span className="cursor-pointer text-xs font-thin xl:text-sm lg:font-medium">
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  </span>
                  <MegaMenu {...menuProps} label={link.label} />
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <div className="relative w-[140px] h-[70px]">
              <Image
                src="/images/navbar/sp-medifort-logo.png"
                alt="SP Medifort"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Right-side links */}
          <div className="flex gap-6" style={{ lineHeight: "100px" }}>
            {navLinks.slice(3).map((link) => {
              const menuProps = getMenuProps(link.label);
              return menuProps ? (
                <div key={link.label} className={`group `}>
                  <span className="cursor-pointer text-xs font-thin xl:text-sm lg:font-medium">
                    <Link
                      key={link.href}
                      href={link.href}
                      className="text-sm font-semibold"
                    >
                      {link.label}
                    </Link>
                  </span>

                  {/* <MegaMenu {...menuProps} label={link.label} /> */}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-semibold"
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Mobile Logo */}
        <div className="lg:hidden lg:mx-auto">
          <Link href="/">
            <Image
              src="/images/navbar/sp-medifort-logo.png"
              alt="SP Medifort"
              width={200}
              height={40}
              className="w-24 lg:w-28 py-2 object-contain"
              priority
            />
          </Link>
        </div>
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
        <div className="absolute top-24 md:top-[84px] bg-white text-black w-full left-0">
          {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-dark px-4 py-4 space-y-3 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
