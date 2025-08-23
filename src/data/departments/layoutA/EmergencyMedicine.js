import React from 'react';
const EmergencyMedicineData = {
  hero: {
    title: 'Every second counts – We are always ready',
    description: [
      "SP Medifort’s Emergency Medicine Department is built to handle every kind of critical situation, whether it's a road traffic accident, cardiac event, stroke, or sudden trauma. With 24*7 emergency care in Trivandrum, we ensure rapid triage, expert evaluation, and life-saving treatment in minutes.Our goal: Stabilize fast, treat efficiently, and save lives."
    ],
    cta: { label: 'Call emergency now', href: '/appointments/cardiology' },
    image: { src: '/images/departments/emergency-medicine.webp', alt: 'Cardiology' },
    
  },

  whyChoose: {
    title: 'Why choose SP Medifort for emergency care?',
    subTitle: 'Speed. Skill. Seamless response.',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: '30-Bed Emergency Wing with resuscitation & isolation',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: 'Dedicated Burns Unit',

      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Dedicated Minor OT',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Isolation ward',

      },
      {
        icon: 'material-symbols:heart-check',
        title: 'Stroke, Cardiac, and Polytrauma protocols',

      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'ER Doctors, Anaesthesiologists & Specialists on standby',
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Integrated 5G ambulance dispatch system',
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Direct access to Radiology department, OT, Cath Lab, ICU & Neuro Unit',
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'All team members are trained in Basic Life Support (BLS)',
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Advanced Cardiac Life Support (ACLS)',
      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: ' Advanced Trauma Life Support (ATLS)',
      },
    ],
    description: 'We are among the most trusted accident and emergency hospitals in Thiruvananthapuram, prepared for any critical scenario.',
    cta: {
      label: 'Emergency services overview',
      href: '/facilities#cardiac',
    }


  },
  team: {
    title: 'Our Team of Experts',
    subTitle: 'Specialists trained to react in minutes',
    doctors: [
      {
        name: 'DR. ARUN  S S',
        designation: 'EMERGENCY MEDICINE',
        position: 'HOD & CONSULTANT',
        image: '/images/doctors-card/dp-images/emergency-medicine/1.png'
      },
      {
        name: 'DR. PRATHYAKSHA R P',
        designation: 'EMERGENCY MEDICINE',
        position: 'EMERGENCY PHYSICIAN',
        image: '/images/doctors-card/dp-images/emergency-medicine/2.png'
      },
      // {
      //   name: 'DR. VENU V S',
      //   designation: 'EMERGENCY MEDICINE',
      //   position: 'EMERGENCY PHYSICIAN',
      //   image: '/images/doctors-card/shibu.png'
      // },
      // {
      //   name: 'DR. ANN CATHERIN JOY',
      //   designation: 'EMERGENCY MEDICINE',
      //   position: 'EMERGENCY PHYSICIAN',
      //   image: '/images/doctors-card/shibu.png'
      // },
    ],
    description: 'Our emergency doctors in Trivandrum are backed by on-call surgeons, cardiologists, anesthetists, neurologists, and intensivists, all working in sync.',
    cta: {
      label: 'Meet our emergency team',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    
    items: [
      {
        name: '128 Slice CT GE Revolution',
        description:
          'High-speed, high-resolution imaging used to detect internal injuries, bleeding, and trauma complications within seconds.',
      },
      {
        name: 'MRI GE SIGNA',
        description:
          '  Advanced imaging that helps evaluate soft tissue injuries, brain trauma, or spinal cord damage with exceptional clarity.',
      },
      {
        name: 'Portable Ultrasound (USG) Scan (FAST | eFAST)',
        description:
          ' Bedside ultrasound for immediate assessment of internal bleeding or fluid in trauma cases, critical for fast decision-making.',
      },
      {
        name: 'Prognosis Machine',
        description:
          ' Offers real-time monitoring of vitals and predictive analytics to guide emergency response and triage.',
      },
      {
        name: 'Hemodialysis Machines',
        description:
          ' Life-saving equipment for patients with acute kidney injury or toxic ingestion needing urgent blood purification.',
      },
      {
        name: 'CRRT (Continuous Renal Replacement Therapy) Machines',
        description:
          ' Enables continuous dialysis in unstable patients, providing gentle and precise removal of waste and fluids in ICU settings',
      },
    ],

  },
  ctaSection: {
    text: "Our trauma & resuscitation systems rival the best emergency hospitals in Trivandrum.",
    button: {
      label: "Explore our emergency setup",
      link: "/departments/cardiac-science#cath-lab",
    },
  },
  highlightText: [
    '30-Bed Emergency Wing with Burn Unit',
    '24x7 Trauma, Stroke & Cardiac Care',
    'Dedicated Emergency Response Team On-Call',
  ],
  comprehensiveCare: {
    title: 'Comprehensive emergency services',
    subtitle: 'Efficient Care for all life-threatening conditions',
    description:
      'We treat all life-threatening conditions with speed, accuracy, and multi-specialty collaboration, available 24x7.',
    items: [
      {
        title: 'Emergency medicine',
        icon: 'mdi:stethoscope',
        description: ' Our ER team stabilizes patients using evidence-based protocols for trauma, shock, and acute medical crises.',
      },
      {
        title: 'Heart attacks',
        icon: 'mdi:heart-flash',
        description: ' Immediate cardiac intervention including ECG, thrombolysis, and cath lab support to restore blood flow and save heart muscle.',
      },
      {
        title: 'Acute strokes',
        icon: 'mdi:hospital-box-outline',
        description: ' Rapid stroke assessment and intervention with thrombolytics, imaging, and neurology input for best outcomes.',
      },

      {
        title: 'Poisoning',
        icon: 'mdi:heart-pulse',
        description: ' Toxicology support, gastric lavage, and antidote administration available round-the-clock for accidental or intentional poisoning.',
      },
      {
        title: 'Anaphylaxis',
        icon: 'mdi:heart-plus-outline',
        description: ' Emergency allergy care with adrenaline shots, oxygen support, and airway management to prevent life-threatening reactions.',
      },
    ],
  },
  scopeOfCare: [
    {
      title: 'Conditions we handle 24*7',
      

      sections: [
        
        {
          title: 'Common emergencies we’re equipped for',
          items: [
            'Loss of consciousness or collapse',
            'Difficulty breathing/chest pain',
            'Severe abdominal pain',
            'Road traffic trauma or fall',
            'Allergic reactions or burns',
            'Fever with convulsions in children',
            'Accidents, industrial injuries, or assaults',
          ],
        },
      ],
    },
  ],




  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "All emergencies are covered",
    items: [
      {
        title: "Immediate stabilization is done without delay or deposit",

      },
      {
        title: "Covered under 40+ private insurers",
        
      },
      {
        title: "24*7 insurance support for planned admissions after ER",
        description:
          "We assist patients in obtaining prior insurance approval for all planned surgical procedures, ensuring a smooth and hassle-free experience.",
      },
      {
        title: "Insurance Support & Patient Counseling",
        description:
          "Our dedicated insurance department offers end-to-end support for patients, including personalized counseling to help them understand their coverage and navigate the claims process with ease.",
      },
    ],
    cta: {
      label: "Check emergency insurance coverage",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey in emergencies",
    subtitle: "How we handle a typical emergency case",
    steps: [
      { title: "Patient arrives / ambulance reaches" },
      { title: "Immediate triage by ER doctor" },
      { title: "Emergency treatment (oxygen, IV, defib, etc.)" },
      { title: "Imaging + diagnostics within 20 mins" },
      { title: "Stabilization or admission to ICU/surgery" },
      { title: "Communication with family throughout" },
    ],
    cta: "Know how we work in emergencies",
  },
  successStories: {
    items: [
      {
        type: 'text',
        text: "“My father had a stroke, and we got emergency care in 15 minutes. He's recovering well today.” — Meenakshi, Trivandrum."
      },
      { type: 'image', src: '/images/card1.webp', alt: 'Happy patient' },
      { type: 'text', text: '“I was brought here after a highway accident. They saved my life.” — Ajay R., Kollam.' },
      { type: 'image', src: '/images/card2.webp', alt: 'Patient smiling' },
    ],
    cta: {
      label: 'More emergency testimonials',
      link: '/patient-stories'
    }
  },


  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: 'Can I walk in without insurance or ID?',
      answer: 'Yes. We will treat you first, insurance is handled later.',
    },
    {
      question: 'Do you offer 24x7 emergency surgery?',
      answer: 'Yes, with trauma surgeons, anesthetists, and OTs always ready.',
    },

  ],
  appointmentSection: {
    heading: "Contact for emergency",
    helpline: {
      label: "Call emergency helpline:",
      number: "04713100100",
      icon: "/icons/phone-plus.svg" // or any other icon path
    },
    support: {
      label: "24/7 Patience Support",
      icon: "/icons/ambulance.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Post a query for follow-up admission",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit"
    }
  }

};

export default EmergencyMedicineData;
