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
  { href: "", label: "SERVICES" },
  { href: "/patient-care", label: "INTERNATIONAL PATIENTS" },
  { href: "/hospital-facilities", label: "HOSPITAL FACILITIES" },
  { href: "/contact", label: "CONTACT US" },
];

const discoverItems = [
  { name: "About Us", href: "/our-story" },
  { name: "Careers", href: "/career" },
];

const treatmentItems = [
  {
    name: "Physiotherapy & Rehabilitation",
    href: "/services/physiotherapyRehabilitation",
  },
  { name: "Clinical Laboratory", href: "/services/clinicalLaboratory" },
  { name: "Pharmacy", href: "/services/pharmacy" },
  { name: "Cath Lab", href: "/services/cathLab" },
  { name: "Nursing Services", href: "/services/nursingServices" },
  { name: "Blood Centre", href: "/services/bloodCentre" },
  { name: "Medical Records", href: "/services/medicalRecords" },
  {
    name: "Audiology & Speech Therapy",
    href: "/services/audioSpeech",
  },
  { name: "Imaging Services", href: "/services/imaging" },
  { name: "EMG / EEG / ECG", href: "/services/emgEeGEcg" },
  { name: "Dietetics & Nutrition", href: "/services/dieteticsNutrition" },
  {
    name: "CSSD (Central Sterile Services Department)",
    href: "/services/cssd",
  },
];

const departmentItems = [
  { name: "Cardiac Science", href: "/departments/cardiac" },
  { name: "Anesthesiology", href: "/departments/anesthesiology" },
  { name: "Critical Care", href: "/departments/critical-care" },
  {
    name: "Dental Oral & Maxillo Facial Surgery",
    href: "/departments/dental-oral-maxillofacial-surgery",
  },
  {
    name: "General Surgery",
    href: "/departments/department-of-surgery/general-surgery",
  },
  {
    name: "Minimal Access Surgery",
    href: "/departments/department-of-surgery/minimal-access-surgery",
  },
  {
    name: "Robotic and General Surgery",
    href: "/departments/department-of-surgery/robotic-laparoscopic-and-general-surgery",
  },

  { name: "Dermatology", href: "/departments/dermatology" },
  { name: "Emergency Medicine", href: "/departments/emergency-medicine" },
  { name: "Endocrinology", href: "/departments/endocrinology" },
  { name: "ENT", href: "/departments/ent" },
  { name: "Family Medicine", href: "/departments/family-medicine" },
  { name: "Gastroenterology", href: "/departments/gastroenterology" },
  { name: "General Medicine", href: "/departments/general-medicine" },
  { name: "Laryngology", href: "/departments/laryngology" },
  { name: "Nephrology", href: "/departments/nephrology" },
  { name: "Neuroscience", href: "/departments/neurosciences" },
  {
    name: "Obstetrics & Gynaecology",
    href: "/departments/obstetrics-and-gynaecology",
  },
  { name: "Medical Oncology", href: "/departments/oncology/medical-oncology" },
  {
    name: "Surgical Oncology",
    href: "/departments/oncology/surgical-oncology",
  },
  { name: "Ophthalmology", href: "/departments/ophthalmology" },
  { name: "Orthopedics & Spine", href: "/departments/orthopedics-spine" },
  {
    name: "Pediatrics Surgery",
    href: "/departments/pediatrics/pediatric-surgery",
  },
  { name: "Pediatrics", href: "/departments/pediatrics/pediatrics" },
  {
    name: "Plastic & Micro Vascular Surgery",
    href: "/departments/plastic-micro-vascular",
  },
  { name: "Psychiatry", href: "/departments/psychiatry" },
  { name: "Radiodiagnosis", href: "/departments/radiodiagnosis" },
  { name: "Respiratory Medicine", href: "/departments/respiratory-medicine" },
  { name: "Rheumatology", href: "/departments/rheumatology" },
  { name: "Speech Therapy", href: "/departments/speech-therapy" },
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
      className={`w-full top-0 z-50 font-body transition-colors duration-300 ${
        isHomePage
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
