'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Breadcrumb from '@/components/shared/Breadcrumb';
const page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <main className="font-body text-text bg-white">
      {/* Breadcrumb */}
      

      {/* Terms & Conditions */}
      <section className="py-12 px-6" data-aos="fade-up">
        
        <div className="max-w-5xl mx-auto">
          <Breadcrumb />
          <h1 className="text-4xl font-title text-primary mb-8 mt-6">Terms & Conditions</h1>
          <p className="mb-6 text-sm text-dark">Effective Date: [DD/MM/YYYY]</p>

          {[
            {
              title: '1. Introduction',
              content:
                'Welcome to SP Medifort Hospital’s official website. By accessing or using our website and digital services, including appointment booking, teleconsultations, or any other service that involves online payments, you agree to be bound by these Terms and Conditions.',
            },
            {
              title: '2. Use of Services',
              content:
                'The website is intended for use by individuals seeking healthcare information and services. You agree to provide accurate and complete personal and medical information during appointments or registrations. SP Medifort reserves the right to cancel any service or appointment due to scheduling conflicts, medical reasons, or technical issues.',
            },
            {
              title: '3. Consultation & Telemedicine',
              content:
                'Telemedicine consultations are provided by qualified medical professionals in compliance with government guidelines. The information shared during online consultations is for medical assessment and is not a replacement for in-person examination when necessary.',
            },
            {
              title: '4. Payments & Refunds',
              content:
                'All online payments are processed via secure payment gateways. Refunds for cancelled appointments or services will be initiated as per our Refund Policy (within 7-10 working days). No refunds will be made for missed consultations unless cancelled at least 24 hours in advance.',
            },
            {
              title: '5. Intellectual Property',
              content:
                'All content on this website, including text, logos, graphics, and videos, is the property of SP Medifort and may not be reused or reproduced without permission.',
            },
            {
              title: '6. Limitation of Liability',
              content:
                'SP Medifort will not be liable for any indirect, incidental, or consequential damages resulting from the use of our services or delays due to technical issues.',
            },
            {
              title: '7. Amendments',
              content:
                'SP Medifort reserves the right to update these terms at any time without prior notice.',
            },
          ].map((section, index) => (
            <div key={index} className="mb-10" data-aos="fade-up" data-aos-delay={index * 100}>
              <h2 className="text-xl font-semibold text-dark mb-2">{section.title}</h2>
              <p className="text-sm text-dark leading-relaxed">{section.content}</p>
            </div>
          ))}

          <div className="mt-10">
            <p className="text-sm">
              For questions or concerns, contact us at:{' '}
              <a
                href="mailto:support@spmedifort.com"
                className="underline text-primary hover:text-accent transition"
              >
                support@spmedifort.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
