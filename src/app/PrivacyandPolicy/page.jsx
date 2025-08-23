"use client";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Breadcrumb from "@/components/shared/Breadcrumb";
const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-body text-text bg-white">
      {/* Breadcrumb */}
      
      {/* Privacy Policy */}
      <section className="py-12 px-6" data-aos="fade-up">
        <div className="max-w-5xl mx-auto">
          <Breadcrumb />
          <h1 className="text-4xl font-title text-primary mb-8 mt-8">Privacy Policy</h1>
          <p className="mb-6 text-sm text-dark">Effective Date: [DD/MM/YYYY]</p>

          {[ 
            {
              title: "1. Your Privacy Matters",
              content:
                "SP Medifort is committed to protecting your personal and health-related data. This Privacy Policy outlines how we collect, use, store, and protect your information.",
            },
            {
              title: "2. Information We Collect",
              content:
                "Name, email address, phone number, and location. Medical history, symptoms, and appointment details. Payment information (processed securely via payment gateway). IP address and usage analytics (for improving site performance).",
            },
            {
              title: "3. How We Use Your Information",
              content:
                "To confirm appointments and deliver services. To send reminders, updates, and health notifications. For medical records and follow-up treatment. For internal audits and quality monitoring. Never for selling or sharing with third-party advertisers.",
            },
            {
              title: "4. Data Security",
              content:
                "Industry-standard encryption and security protocols. Payment transactions are handled via PCI-DSS-compliant gateway partners. Limited access to patient records among authorized staff only.",
            },
            {
              title: "5. Third-Party Services",
              content:
                "Some services (e.g., payment gateway or cloud storage) may be operated by trusted partners under strict data protection agreements.",
            },
            {
              title: "6. Your Rights",
              content:
                "You can request access to or correct your data. You can opt out of communication at any time. You may request the deletion of data not required for regulatory retention.",
            },
          ].map((section, index) => (
            <div key={index} className="mb-10" data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="text-xl font-semibold text-dark mb-2">{section.title}</h2>
              <p className="text-sm text-dark leading-relaxed whitespace-pre-line">{section.content}</p>
            </div>
          ))}

          <div className="mt-10">
            <p className="text-sm">
              For privacy-related queries, contact us at:{" "}
              <a
                href="mailto:privacy@spmedifort.com"
                className="underline text-primary hover:text-accent transition"
              >
                privacy@spmedifort.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Page;
