
const FamilyMedicineData = {
  hero: {
    title: 'Family Medicine & Primary Care Servicesi n Thiruvananthapuram',
    description: [
      "At SP Medifort, our Family Medicine department serves as your first and ongoing point of contact for lifelong healthcare. Whether it’s a child with a fever, a senior with diabetes, or a young adult needing vaccination, our family physicians manage prevention, diagnosis, and continuity of care.We ensure that every age group receives integrated, relationship-based care with access to specialists when needed."
    ],
    cta: { label: 'Book an appointment with a family physician', href: '/appointments/cardiology' },
    image: { src: '/images/departments/Family-Medicine.webp', alt: 'Cardiology' },
    highlightText: [
      'Compassionate Cardiac Care, Always',
      'Hello World!',
    ],
  },

  whyChoose: {
    title: 'Why choose SP Medifort for Family Medicine?',
    subTitle: 'Personalized primary care with advanced backup',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: 'Trusted general physicians in Trivandrum',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: 'Seamless referrals to 30+ specialty departments',

      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Electronic health records for tracking long-term conditions',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Daily outpatient OPD + in-patient care',

      },
      {
        icon: 'material-symbols:heart-check',
        title: 'Annual health maintenance & wellness planning',
      },
    ],
    description: 'From cold and flu to hypertension and fatigue, we’re here for everyday health needs and early intervention',
    cta: {
      label: 'See how family medicine helps your household',
      href: '/facilities#cardiac',
    }


  },
  team: {
    title: 'Our Team of Experts',
    subTitle: 'Our physicians are trained in diagnosing, treating, and coordinating care for patients of all ages.',
    doctors: [
      {
        name: 'Dr. Dhanya Louis J S,',
        designation: 'MBBS, DNB(Family Medicine)',
        position: 'Family Medicine, Senior Consultant,',
        image: '/images/doctors-card/dp-images/family-medicine/1.png'
      },
    ],
    description: 'Whether you"re searching for a family doctor near you in Trivandrum, or need regular chronic care, we are here.',
    cta: {
      label: 'Meet our family medicine experts',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    
    items: [
      {
        name: 'Prognosis Machine',
        description:
          ' Enables rapid triage and early warning detection through vital signs monitoring, ideal for evaluating flu-like symptoms and chronic illness follow-up.',
      },
      {
        name: 'Registration Kiosk',
        description:
          ' Streamlines patient check-in and record access, reducing wait times and improving continuity of care.',
      },
      {
        name: 'Ultrasound (USG) Scan',
        description:
          ' Offers non-invasive imaging to assess abdominal pain, detect gallstones, or evaluate thyroid nodules in a routine OPD setting.',
      },
      {
        name: 'FULLY MOTORIZED X-RAY SUITE – DRX-COMPASS',
        description:
          ' High-speed digital imaging for quick assessment of respiratory infections, bone injuries, and joint pain.',
      },
      {
        name: 'GE Prodigy Advance DEXA Scan',
        description:
          ' Measures bone density and body composition to support early osteoporosis detection and metabolic health management.',
      },
    ],

  },
  ctaSection: {
    text: "Our team offers the capabilities of a general physician in Trivandrum with the tech access of a tertiary hospital.",
    button: {
      label: "View health services available in OPD",
      link: "/departments/cardiac-science#cath-lab",
    },
  },
  highlightText: [
    'One-Stop Primary Care for All Age Groups',
    'Chronic Disease Management & Follow-ups',
    'Continuity of Care Through Family-Centered Services',
    
  ],
  comprehensiveCare: {
    title: 'Everyday care that builds long-term health',
    
    items: [
      {
        title: 'Flu, viral fever, and respiratory illness management',
        icon: 'mdi:stethoscope',
        description: '  Timely diagnosis and treatment plans for infections like the flu, COVID-like illness, or bronchitis, especially during seasonal outbreaks.',
      },
      {
        title: 'Headaches, acidity, and common digestive issues',
        icon: 'mdi:heart-flash',
        description: ' Symptom-focused evaluation and management of migraines, gastritis, bloating, and IBS-like symptoms.',
      },
      {
        title: 'Diabetes, thyroid, and hypertension treatment',
        icon: 'mdi:hospital-box-outline',
        description: 'Ongoing medical support for common lifestyle diseases, with lab-based monitoring and personalized medication plans.',
      },

      {
        title: 'Health education, weight & stress management',
        icon: 'mdi:heart-pulse',
        description: ' Preventive care with counseling support to promote balanced lifestyles, emotional wellbeing, and sustainable habits.',
      },
      {
        title: 'Seasonal infections and allergy treatment',
        icon: 'mdi:heart-plus-outline',
        description: ' Expert care for skin allergies, sinus problems, or infections linked to weather or pollution changes.',
      },

      
    ],
  },
  scopeOfCare: [
    {
      title: 'Family Medicine',
      

      sections: [
        {
          title: 'Common conditions we treat',
          items: [
            'Persistent cough, cold, or fever',
            'Fatigue, dizziness, and appetite loss',
            'High blood pressure, diabetes',
            'Joint pains, mild injuries, and infections',
            'Preventive counseling for smoking, alcohol, and diet',
            'Adolescent issues (depression, anxiety,  mental health concerns, eating disorders etc.)',
          ],
        },
        
      ],
    },
  ],




  insuranceFinance: {
    title: " Insurance and Finance",
   
    items: [
      {
        title: "Walk-ins & insured patients accepted",
        
      },
      {
        title: "Covered by 40+ insurance networks",
       
      },
      {
        title: "Special packages for annual consultations",
       
      },
    ],
    cta: {
      label: "Check insurance eligibility",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "Your family’s health flow at SP Medifort",
    steps: [
      { title: "OPD walk-in or appointment" },
      { title: "Doctor consult + vitals screening" },
      { title: "On-spot labs, X-rays, ECG (if required)" },
      { title: "Diagnosis, prescription, and guidance" },
      { title: "Follow-up consult or specialty referral" },
      { title: "Health record stored for long-term use" },
    ],
    cta: "Plan your family’s visit",
  },
  successStories: {
    items: [
      {
        type: 'text',
        text: "“My parents have been visiting this family clinic for 3 years. Everything from BP to diet is managed here.” — Anjali S., Trivandrum."
      },
      { type: 'image', src: '/images/card1.webp', alt: 'Happy patient' },
      {
        type: 'text',
        text: "“As an NRI, I booked my annual tests, and the results were delivered digitally. Very smooth.” — Joseph M., UAE."
      },
      { type: 'image', src: '/images/card1.webp', alt: 'Happy patient' },
    ],
    cta: {
      label: 'Read more reviews',
      link: '/patient-stories'
    }
  },


  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: 'Is family medicine different from general medicine?',
      answer: 'Yes. Family medicine focuses on continuous, full-life care across age groups.',
    },
    {
      question: 'Can I get referred to a specialist?',
      answer: 'Yes, we coordinate seamless referrals within SP Medifort.',
    },

  ],
  appointmentSection: {
    heading: "Build a healthier family , One visit at a time",
    helpline: {
      label: "Call:",
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
      heading: "Post your health question",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Book appointment"
    }
  }

};

export default FamilyMedicineData;
