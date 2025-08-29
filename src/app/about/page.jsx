"use client";

import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from 'framer-motion';
import {
  ChevronRight,
  HeartPulse,
  ShieldCheck,
  Award,
  UserCheck,
  Hospital,
  Users,
  Globe,
  Handshake,
  Building2,
  MessageCircle,
  Smartphone
} from "lucide-react";
import { CheckCircle
 } from 'lucide-react';

const features = [
  "475+ Beds | 170 ICU Beds",
  "10 Modular OTs",
  "3D Hybrid Cath Lab (1st in South Asia)",
  "Robotic Zeiss Kinevo Microscope",
  "Multi-level Parking | Patient-friendly Zones",
  "Labs, Pharmacy, Burn Unit, AI Imaging & More",
];
const Section = ({ title, children }) => (
  <section className="space-y-4" data-aos="fade-up">
    <h2 className="text-2xl md:text-3xl font-title font-bold text-dark border-b-4 border-primary inline-block pb-1 animate__animated animate__fadeInUp">{title}</h2>
    <div className="grid gap-4 md:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mt-2">{children}</div>
  </section>
);

const Card = ({ title, content, icon: Icon }) => (
  <div className="bg-white rounded-2xl border border-primary shadow-md group hover:bg-primary hover:text-white hover:border-secondary transition-all duration-300 p-4 space-y-3 relative overflow-hidden" data-aos="zoom-in-up">
    <div className="absolute -top-4 -right-4 w-16 h-16 bg-secondary opacity-10 rounded-full blur-xl group-hover:scale-110 transition-transform"></div>
    {Icon && <Icon className="w-8 h-8 text-primary group-hover:text-white transition-colors" />}
    <h3 className="text-lg font-semibold font-title leading-snug">{title}</h3>
    <p className="text-sm text-text font-body group-hover:text-white whitespace-pre-line leading-relaxed">{content}</p>
  </div>
);

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="px-4 md:px-10 py-10 bg-gradient-to-br from-light via-white to-light text-dark font-body space-y-14">
      <nav className="text-sm text-text flex items-center space-x-2 mb-2" aria-label="breadcrumb">
        <span>Home</span>
        <ChevronRight className="w-4 h-4" />
        <span className="text-primary font-medium">About Us</span>
      </nav>

      <div className="relative rounded-xl overflow-hidden shadow-xl bg-gradient-to-r from-primary to-secondary" data-aos="fade-up">
        <img
          src="/banner/about-hero.webp"
          alt="SP Medifort Hospital"
          className="w-full h-64 md:h-80 object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-3xl md:text-5xl font-title font-bold text-white mb-2 tracking-tight drop-shadow-lg animate__animated animate__fadeInDown">
            About Us - SP Medifort Hospital
          </h1>
          <p className="text-base md:text-lg text-white max-w-2xl leading-relaxed animate__animated animate__fadeInUp">
            Where Innovation Meets Compassion — A Legacy of Excellence in Patient-Centred Care.
          </p>
          <div className="mt-4 w-16 h-1 bg-white rounded-full animate-pulse"></div>
        </div>
      </div>

      <Section title="Our Story">
        <Card
          title="Our Beginnings"
          icon={HeartPulse}
          content={`Born from a dream to make world-class healthcare accessible in South India, SP Medifort Hospital was founded with a mission to heal, care, and innovate.`}
        />
        <Card
          title="Modern Vision, Rooted in Compassion"
          icon={Globe}
          content={`We blend advanced medical technology with a deeply humane approach to patient care — ensuring holistic healing for every individual.`}
        />
        <Card
          title="Trusted by Thousands"
          icon={Users}
          content={`Over the years, we’ve earned the trust of families across Kerala and beyond by delivering consistent, ethical, and result-oriented care.`}
        />
        <Card
          title="Driven by Purpose"
          icon={Award}
          content={`Every decision we take is guided by our core purpose: to serve with excellence, empathy, and unwavering integrity.`}
        />
        <Card
          title="Care Conversations"
          icon={MessageCircle}
          content={`We listen to our patients through care feedback and proactive support. Conversations lead to improvements in comfort and confidence.`}
        />
        <Card
          title="Mobile Health Access"
          icon={Smartphone}
          content={`Through our mobile platform and telemedicine, we connect patients with specialists from the comfort of their homes.`}
        />
      </Section>

      <Section title="Mission & Vision">
        <Card
          title="Our Mission"
          icon={ShieldCheck}
          content="To deliver compassionate, evidence-based, and ethical care to every patient — every time."
        />
        <Card
          title="Our Vision"
          icon={Award}
          content="To be South India's most trusted healthcare institution by advancing clinical excellence and personalized experiences."
        />
      </Section>

      <Section title="Our Core Values">
        {[{ icon: UserCheck, title: "Compassion", content: "We treat every patient like family." }, { icon: Award, title: "Excellence", content: "We strive for clinical brilliance in everything we do." }, { icon: Globe, title: "Innovation", content: "We invest in the future of medicine." }, { icon: ShieldCheck, title: "Integrity", content: "We uphold transparency, ethics, and trust." }, { icon: Users, title: "Respect", content: "We honour every individual’s dignity, culture, and beliefs." }].map((val, idx) => (
          <Card key={idx} {...val} />
        ))}
      </Section>

      <Section title="Leadership Team">
        {[{ title: "Dr. S P Asokan", content: "Chairman & MD" }, { title: "S P Subramonian", content: "Joint Chairman & MD" }, { title: "Dr. Aathithya S P", content: "Executive Director" }, { title: "Advaith Asokan Bala", content: "Executive Director" }, { title: "Dr. Athulya Asokan Bhagya", content: "Executive Director" }].map((leader, i) => (
          <Card key={i} title={leader.title} content={leader.content} icon={Building2} />
        ))}
      </Section>

        <section className="px-4 py-10 bg-white w-full" id="infrastructure">
      <h2 className="text-2xl md:text-4xl font-bold text-center mb-10">
        Infrastructure & Facilities
      </h2>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto border border-gray-200 rounded-2xl p-6 bg-white shadow-md"
      >
        {/* Card Header */}
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 bg-primary/10 text-primary rounded-full">
            <Hospital size={32} />
          </div>
          <h3 className="text-xl md:text-2xl font-semibold">
            Healing Environment Built for the Future
          </h3>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="flex items-start gap-3 bg-gray-50 border border-gray-200 rounded-xl p-3 hover:shadow-md transition"
            >
              <CheckCircle className="text-primary mt-1" size={20} />
              <p className="text-sm md:text-base text-gray-800">{feature}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </section>

      <Section title="Our Team">
        <Card
          title="Compassionate. Competent. Committed."
          icon={Users}
          content={`• 50+ Specialty Consultants\n• 24x7 Critical Care Experts\n• ICU Trained Nurses\n• Skilled Technicians\n• Rehab & Physio Experts`}
        />
      </Section>

      <Section title="Awards & Accreditations">
        <Card
          title="Recognized Excellence"
          icon={Award}
          content={`• JCI 8th Edition Accredited\n• NABH Accreditation in Process\n• AI Implementation Excellence Award\n• Kerala Health Awards 2025`}
        />
      </Section>

      <Section title="Milestones & Timeline">
        <Card
          title="A Journey of Growth"
          icon={Globe}
          content={`• 2021: Conceptualized by S Pottivelu\n• 2022: Construction Begins\n• 2024: Soft Launch\n• 2025: Grand Opening\n• 2026: Telemedicine Expansion`}
        />
      </Section>

      <Section title="Quality & Safety Initiatives">
        <Card
          title="Every Patient. Every Procedure."
          icon={ShieldCheck}
          content={`• Infection Control\n• Digital EHR & Consents\n• AI ICU Surveillance\n• Clinical Outcome Audits\n• ACLS-Trained Emergency Staff`}
        />
      </Section>

      <Section title="CSR & Community Outreach">
        <Card
          title="Healthcare Beyond the Hospital"
          icon={Handshake}
          content={`• Monthly Free Camps\n• Cancer Awareness in Schools\n• Tribal Medical Units\n• Women's & Elder Wellness Drives\n• \"Healthy Start\" & \"Together\" School Campaigns`}
        />
      </Section>

      <Section title="Our Group of Hospitals">
        <Card
          title="SP Fort Hospital"
          icon={Hospital}
          content={`Thiruvananthapuram\nMulti-specialty tertiary care\n📞 0471 2450540`}
        />
        <Card
          title="SP Health Plus"
          icon={Hospital}
          content={`Urban Healthcare Hub\nPreventive & Diagnostic Focus\n📞 +91 471 245 0850`}
        />
        <Card
          title="SP Well Fort"
          icon={Hospital}
          content={`Recovery & Wellness Center\nRehabilitation & Lifestyle\n📞 0471 4567890`}
        />
      </Section>
    </div>
  );
};

export default AboutUs;