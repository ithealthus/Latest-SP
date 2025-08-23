'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaFileMedical,
  FaGlobe,
  FaHeartbeat,
  FaVideo,
} from 'react-icons/fa';
import Breadcrumb from '@/components/shared/Breadcrumb';

const Page = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const intro = {
    heading: 'Patient Care at SP Medifort Hospital',
    subheading: 'From Your First Visit to Full Recovery — Compassionate Support at Every Step.',
    overview: `At SP Medifort Hospital, we believe every patient deserves more than treatment, they deserve an experience rooted in trust, transparency, and care. From outpatient visits and admissions to insurance support and global patient coordination, our patient care services are designed to be seamless, efficient, and deeply supportive.`
  };

  const sections = [
    {
      title: 'Admission & Discharge Process',
      icon: <FaFileMedical className="text-4xl text-primary" />,
      content: [
        'Admissions are based on the consultant’s recommendation',
        'Room category and facilities are explained before admission',
        'Final bill settlement, discharge summary, and medication instructions are provided at the time of discharge',
        'A nurse educator explains post-discharge care to the family',
      ],
      type: 'cards'
    },
    {
      title: 'Insurance & Billing',
      icon: <FaFileMedical className="text-4xl text-primary" />,
      content: [
        'We support most leading insurance providers and TPAs',
        'Dedicated helpdesk for cashless treatment, document handling, and claim queries',
        'Insurance Approval for Planned Surgeries: We assist patients in obtaining prior insurance approval for all planned surgical procedures',
        'Daily billing updates shared with patient or attendant',
        'Guidance on financial estimation for planned procedures',
        'View all insurance providers we have',
      ],
      type: 'block'
    },
    {
      title: 'International Patient Care',
      icon: <FaGlobe className="text-4xl text-primary" />,
      content: [
        'Priority appointment scheduling & medical opinion before travel',
        'Visa invitation letter & travel assistance',
        'Airport pickup/drop off and accommodation guidance',
        'Language translator support (Arabic, French, Hindi, Divehi, Tamil, Malayalam, etc.)',
        'Dedicated International Coordinator throughout the stay',
        'International counselling desk',
        'Currency exchange services',
        'Prayer Room/ Spiritual support',
        'Second Opinion',
      ],
      cta: {
        phone: '+91 7593899135',
        email: 'internationaldesk@spmedifort.com'
      },
      type: 'grid'
    },
    {
      title: 'Emergency Services (24x7)',
      icon: <FaHeartbeat className="text-4xl text-primary" />,
      content: [
        'Advanced Emergency & Trauma Unit with ICU backup & burn unit',
        'Ambulances with critical care facilities available round-the-clock',
        'Expert team for cardiac, neurological, and accident cases',
        'No prior booking required, walk-in or ambulance supported',
        'Care Champions: Specially trained staff who support patients without bystanders',
      ],
      cta: {
        phone: '0471 3100101'
      },
      type: 'cards'
    },
    {
      title: 'Telemedicine & Online Consultations',
      icon: <FaVideo className="text-4xl text-primary" />,
      content: [
        
        'Skip the travel and waiting room, connect with our top doctors from anywhere using SP Medifort’s secure telemedicine platform.',
        'Video Consultations with Senior Specialists',
        'Digital Prescriptions & Reports',
        'Secure Online Payment Gateway',
        'Available for International Patients Too',
      ],
      type: 'block'
    },
  ];

  const CTAButtons = ({ phone, email }) => (
    <div className="mt-6 flex justify-center items-center gap-6 flex-wrap">
      {phone && (
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-accent transition">
          📞 {phone}
          <span className="ml-2 w-6 h-6 bg-white text-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      )}
      {email && (
        <button className="flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-full shadow hover:bg-accent transition">
          ✉️ {email}
          <span className="ml-2 w-6 h-6 bg-white text-primary rounded-full flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" className="w-4 h-4">
              <path fillRule="evenodd" d="M10.293 15.707a1 1 0 010-1.414L13.586 11H4a1 1 0 110-2h9.586l-3.293-3.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </span>
        </button>
      )}
    </div>
  );

  return (
    <main className="font-body text-text bg-white">
      <section className="bg-light py-10 px-6 border-b border-primary/20" data-aos="fade-down">
        <div className="max-w-6xl mx-auto">
          <Breadcrumb />
          <h1 className="text-3xl font-bold text-primary mb-2">{intro.heading}</h1>
          <h2 className="text-xl text-dark mb-4">{intro.subheading}</h2>
          <p className="text-md text-gray-700 max-w-4xl leading-relaxed">{intro.overview}</p>
        </div>
      </section>

      <section className="py-16 px-6" data-aos="fade-up">
        {sections.map((section, index) => (
          <div key={index} className="max-w-6xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              {section.icon}
              <h2 className="text-2xl font-bold text-primary">{section.title}</h2>
            </div>

            {section.type === 'cards' && (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {section.content.map((item, i) => (
                  <div key={i} className="p-6 border rounded-xl shadow-md hover:bg-primary hover:text-white transition duration-300">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {section.type === 'block' && (
              <div className="space-y-4">
                {section.content.map((item, i) => (
                  <div key={i} className="bg-primary/5 p-5 rounded-xl hover:bg-primary hover:text-white transition duration-300">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {section.type === 'grid' && (
              <div className="grid md:grid-cols-2 gap-6">
                {section.content.map((item, i) => (
                  <div key={i} className="bg-light border border-primary p-6 rounded-xl hover:bg-primary hover:text-white transition duration-300">
                    {item}
                  </div>
                ))}
              </div>
            )}

            {section.cta && <CTAButtons {...section.cta} />}
          </div>
        ))}
      </section>
    </main>
  );
};

export default Page;
