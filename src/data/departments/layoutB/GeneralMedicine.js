
  
const GeneralMedicineData = {
  hero: {
    title: ' Accurate, Safe, and Caring Medical Treatment',
    description: [
      "Welcome to the General Medicine Department at SP Medifort Hospital, Thiruvananthapuram. We provide comprehensive medical care for adults covering everything from sudden illnesses to complex chronic diseases. Our focus is on accurate diagnosis, evidence-based treatment, and compassionate care, making us a trusted choice for general medicine in Trivandrum."
    ],
    cta: { label: 'Book a physician consultation', href: '/appointments/cardiology' },
    image: { src: '/images/departments/General.webp', alt: 'Cardiology' },
    
  },

  whyChoose: {
    title: 'Why choose SP Medifort for general medicine?',
    subTitle: 'Where experience meets technology',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: '10 + senior general physicians & internists',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: ' 24*7 rapid-response medical team & ICU backup',

      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Advanced imaging (3 T MRI, 128-slice CT, echo, stress lab)',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Integrated diabetes & hypertension clinics',

      },
      
    ],
    description: 'Recognized as the best general medicine hospital in Thiruvananthapuram for timely diagnosis, coordinated care, and outstanding patient satisfaction.',
    cta: {
      label: 'Explore our medical facilities',
      href: '/facilities#cardiac',
    }


  },
  team: {
    title: 'Our Team of Experts',
    subTitle: 'Our physicians are trained in diagnosing, treating, and coordinating care for patients of all ages.',
    doctors: [
      {
        name: '',
        designation: 'MBBS, DNB(Family Medicine)',
        position: 'Senior Consultant, Gastroenterology & Hepatology',
        image: '/images/doctors-card/dp-images/gastroenterology/1.png'
      },
      {
        name: '',
        designation: 'MBBS, DNB(Family Medicine)',
        position: 'Consultant, Advanced Endoscopy',
        image: '/images/doctors-card/dp-images/gastroenterology/2.png'
      },
      {
        name: '',
        designation: 'MBBS, DNB(Family Medicine)',
        position: 'Consultant, Liver & Metabolic Disease',
        image: '/images/doctors-card/dp-images/gastroenterology/3.png'
      },
    ],
    description: 'Whether you"re searching for a family doctor near you in Trivandrum, or need regular chronic care, we are here.',
    cta: {
      label: 'Meet our GI physicians',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    
    items: [
      {
        name: 'Point-of-Care Ultrasonography in OPD',
        description:
          ' Enables advanced endoscopic procedures with precise tissue coagulation, ideal for GI bleeding control and tumor ablation.',
      },
      {
        name: '3T MRI & 128-Slice CT for Rapid Imaging',
        description:
          'High-definition scans with minimal wait times, ideal for everything from brain to abdominal diagnostics.',
      },
      {
        name: 'Continuous Glucose Monitoring & Insulin-Pump Setup',
        description:
          'Real-time diabetes monitoring and insulin delivery personalized for optimal glycemic control.',
      },
      {
        name: 'Ambulatory Blood-Pressure & Holter Monitoring',
        description:
          'Tracks cardiac and blood pressure patterns over 24+ hours for accurate diagnosis of arrhythmias and hypertension.',
      },
      {
        name: 'Electronic Health Records',
        description:
          ' Secure data systems that enable care teams to access, share, and act on patient information without delays.',
      },
      
      
    ],

  },
  ctaSection: {
    text: "Our tech-enabled workflows translate into faster answers and more precise therapy.",
    button: {
      label: "Know our diagnostic tech",
      link: "/departments/cardiac-science#cath-lab",
    },
  },
  highlightText: [
    'Holistic Adult Healthcare & Preventive Screenings',
    'Expert Management of Fever, Infections & Lifestyle Disorders',
    'Inpatient & Outpatient Medical Services',
  ],
  comprehensiveCare: {
    title: 'From routine check-ups to complex disease management',
    
    description:
      'Whether it’s a seasonal illness or a chronic condition, our internal medicine team provides expert care tailored to each patient’s needs helping you stay healthy at every stage of life.',
    items: [
      {
        title: 'Diabetes Specialists (Type 1, Type 2, Gestational)',
        icon: 'mdi:stethoscope',
        description: 'Individualized plans for diagnosis, medication, nutrition, and long-term diabetes care.',
      },
      {
        title: 'Hypertension & Lipid Management Program',
        icon: 'mdi:heart-flash',
        description: '  Targeted control of blood pressure and cholesterol to prevent strokes and heart disease.',
      },
      {
        title: 'Infectious-Disease Unit (Fever, Dengue, COVID Care)',
        icon: 'mdi:hospital-box-outline',
        description: '  Evidence-based treatment and containment of viral and bacterial illnesses with isolation protocols.',
      },

      {
        title: 'Respiratory Clinic (Asthma, COPD)',
        icon: 'mdi:heart-pulse',
        description: 'Pulmonary function testing, inhaler therapy, and ongoing care for chronic respiratory conditions.',
      },
      {
        title: 'Thyroid & Endocrine Disorders Clinic',
        icon: 'mdi:heart-plus-outline',
        description: ' Comprehensive hormonal evaluation for thyroid, adrenal, pituitary, and reproductive issues.',
      },

      {
        title: 'Geriatric Medicine & Fall-Prevention Service',
        icon: 'mdi:heart-plus-outline',
        description: ' Multidisciplinary care for seniors including mobility, memory, and chronic condition management.',
      },
      {
        title: 'Lifestyle & Weight-Management Program',
        icon: 'mdi:heart-plus-outline',
        description: '  Personalized nutrition, activity, and behavioral support for sustainable health improvement.',
      },

    ],
  },
  scopeOfCare: [
    {
      title: 'General Medicine',
     

      sections: [
        {
         
          items: [
            'Fever, flu & viral infections',
            'High blood pressure & high cholesterol',
            'Diabetes & pre-diabetes',
            'Asthma, bronchitis, COPD',
            'Thyroid imbalance & hormonal issues',
            'Gastritis, acid reflux & liver disorders',
            'Anemia, fatigue & vitamin deficiencies',
          ],
        },
        
      ],
    },
  ],




  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Transparent pricing & cashless options",
    items: [
      {
        title: "Covered by all major private insurance providers",
       
      },
      {
        title: "Government health schemes (Ayushman Bharat, ECHS, CGHS)",
        
      },
      {
        title: "Cost estimation support before admission",
      },
      {
        title: "EMI options available",
      },
    ],
    cta: {
      label: "Know what your plan covers",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "Medical care with total clarity",
    steps: [
      { title: "Walk-in/online appointment & vital checks" },
      { title: "Physician consultation & targeted investigations" },
      { title: "Diagnosis discussion & personalized plan" },
      { title: "Insurance processing (if applicable)" },
      { title: "Treatment/medication/lifestyle coaching" },
      { title: "Digital prescriptions & follow-up reminders" },
    ],
    cta: "Map your care plan",
  },
  successStories: {
    items: [
      {
        type: 'text',
        text: "“I came for a hernia surgery and was walking the next day. Clean, safe, and excellent staff.” — Manoj T."
      },
      { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
      {
        type: 'text',
        text: "“As an NRI, I appreciated the digital reports and post-op guidance via WhatsApp.” — Zainab R., Qatar."
      },
      { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
    ],
    cta: {
      label: 'View more experiences',
      link: '/patient-stories'
    }
  },


  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: ' Do I need a referral to see a general physician?',
      answer: ' No, you can book directly for any health concern.',
    },
    {
      question: 'Can you manage chronic diseases like diabetes long-term?',
      answer: 'Yes, we offer comprehensive disease-management plans with regular monitoring.',
    },

  ],
  appointmentSection: {
    heading: "Build a healthier family — One visit at a time",
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
      heading: " Post a query",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Book appointment"
    }
  }

};

export default GeneralMedicineData;
