import React from 'react';

const CriticalCare = {
  hero: {
    title: 'Round-the-Clock Life Support, Expertly Delivered',
    description: [
      "At SP Medifort, our Critical Care Department provides continuous, specialized medical care to patients facing life-threatening conditions. Our ICU in Trivandrum is managed by experienced intensivists, trained nurses, and supported by high-end monitoring systems, all focused on stabilizing, supporting, and reviving patients through every crisis."
    ],
    cta: { label: 'Contact our Critical Care team', href: '/appointments/cardiology' },
    image: { src: '/images/departments/CriticalCare.webp', alt: 'Critical Care' },
    
  },

  whyChoose: {
    title: 'Why choose SP Medifort for ICU services?',
    subTitle: 'One of Kerala’s largest & most advanced critical care units',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: '170+ Level-D ICU beds with isolation',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: '24*7 in-house intensivists, anaesthetists, and nurses',

      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Separate Neuro, Cardiac, Medical & Surgical ICUs',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Real-time central monitoring',

      },
      {
        icon: 'material-symbols:heart-check',
        title: 'Protocol-based sepsis, ventilator, and trauma care',

      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Isolation Rooms for Infection Control with Positive Pressure & Negative Pressure facilities',

      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Burn unit', 

      },
    ],
    description: 'Recognized as a top ICU hospital in Thiruvananthapuram, our ICU protocols follow NABH and international safety standards.',
    cta: {
      label: 'Explore ICU capabilities',
      href: '/facilities#cardiac',
    }


  },
  team: {
    title: 'Our team of experts',
    subTitle: 'Dedicated to saving lives, Every minute',
    doctors: [
      {
        name: 'DR. SUJEESH  R',
        designation: 'CRITICAL CARE',
        position: 'HOD, SENIOR CONSULTANT & INFECTION CONTROL OFFICER',
        image: '/images/doctors-card/dp-images/critical-care/1.png'
      },
      {
        name: 'DR. SABARI  JAYARAM',
        designation: 'CRITICAL CARE',
        position: 'INTENSIVIST',
        image: '/images/doctors-card/dp-images/critical-care/2.png'
      },
      {
        name: 'DR. NEELIMA V S',
        designation: 'CRITICAL CARE',
        position: 'INTENSIVIST',
        image: '/images/doctors-card/dp-images/critical-care/3.png'
      },


    ],
    description: 'Each ICU is managed by full-time critical care doctors and supported by on-call surgeons, neurologists, cardiologists, and pulmonologists.',
    cta: {
      label: 'Meet our critical care team',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    categoryTabs: ['Interventional Cardiology', 'Cardiology'],
    items: [
      {
        name: 'CRRT (Continuous Renal Replacement Therapy) machines',
        description:
          'These machines offer continuous blood purification for patients with acute kidney injury, ensuring safe fluid and toxin removal in hemodynamically unstable cases.',
      },
      {
        name: 'Hemodialysis machines',
        description:
          'Used in both acute and chronic kidney conditions, these machines help manage electrolyte imbalance, fluid overload, and uremia through intermittent renal support.',
      },
      {
        name: 'Prognosis machine',
        description:
          ' A clinical decision support tool that helps assess patient severity and predict outcomes, enabling early interventions and prioritization of care.',
      },
      {
        name: 'Ultrasound (USG) scan',
        description:
          'A non-invasive, bedside imaging tool used for real-time assessment of cardiac, abdominal, and vascular conditions, guiding critical procedures like line placement or fluid therapy.',
      },
      {
        name: '128 Slice CT GE Revolution',
        description:
          'Delivers rapid, high-resolution imaging for complex emergencies including stroke, trauma, and chest pathologies, enabling faster and more accurate diagnoses.',
      },
      {
        name: 'MRI GE SIGNA',
        description:
          'Provides detailed imaging for brain, spine, and soft tissue conditions, essential in diagnosing causes of altered consciousness, cerebral edema, or spinal cord injury.',
      },

    ],

  },
  ctaSection: {
    text: "This makes SP Medifort a top cardiology hospital in Kerala for both diagnostics and interventions. These tools empower us to offer accurate, fast, and low-risk cardiac interventions.",
    button: {
      label: "View dental technology used",
      link: "/departments/cardiac-science#cath-lab",
    },
  },
  highlightText: [
    '170+ ICU Beds with Remote Monitoring',
    'Level-D Isolation Units for Infection Control',
    '24x7 Intensivist-Led Critical Care Services',
  ],
  comprehensiveCare: {
    title: 'Our Comprehensive services include:',
    subtitle: 'ICU Critical Care for every emergency',
    description:
      'ICU Critical Care for every emergency, offering advanced monitoring, timely intervention, and organ support across a wide range of life-threatening conditions.',
    items: [
      {
        title: 'Palliative care',
        icon: 'mdi:stethoscope',
        description: ' Focused on symptom relief and quality of life for patients with serious illness, our palliative services support both patients and families through compassionate, multidisciplinary care.',
      },
      {
        title: 'Advanced ventilators',
        icon: 'mdi:heart-flash',
        description: ' Our ICU ventilators offer precise control of respiratory parameters, supporting patients with ARDS, pneumonia, or neuromuscular respiratory failure.',
      },
      {
        title: 'CRRT',
        icon: 'mdi:hospital-box-outline',
        description: 'Provides gentle, continuous dialysis for critically ill patients, preventing fluid overload and toxin accumulation without compromising blood pressure stability.',
      },

      {
        title: 'ECMO',
        icon: 'mdi:heart-pulse',
        description: ' Delivers temporary heart-lung bypass support for patients in severe cardiac or respiratory failure, allowing the body time to heal while maintaining vital organ function.',
      },
      {
        title: 'Parenteral nutrition',
        icon: 'mdi:heart-plus-outline',
        description: 'Supplies essential nutrients intravenously when enteral feeding is not possible, ensuring metabolic support during prolonged critical illness.',
      },
      {
        title: 'Cardiogenic shock',
        icon: 'mdi:stethoscope',
        description: ' Managed with advanced hemodynamic monitoring, inotropes, and, when needed, mechanical circulatory support to stabilize heart function and maintain perfusion.',
      },
      {
        title: 'Cerebral Edema',
        icon: 'mdi:heart-flash',
        description: 'Managed through neurocritical care protocols that include intracranial pressure monitoring, medication, and supportive therapies to prevent brain damage.',
      },
      {
        title: 'Acute Respiratory Failure',
        icon: 'mdi:hospital-box-outline',
        description: ' Immediate respiratory interventions ranging from high-flow oxygen to invasive ventilation are provided based on the severity and underlying cause.',
      },

      {
        title: 'Acute Liver Failure',
        icon: 'mdi:heart-pulse',
        description: 'Intensive support for rapid liver deterioration includes monitoring of coagulopathy, encephalopathy, and metabolic imbalances, along with infection control.',
      },
      {
        title: 'Stroke',
        icon: 'mdi:heart-pulse',
        description: ' Timely ICU care for ischemic and hemorrhagic strokes, including neuroimaging, thrombolysis coordination, and post-stroke monitoring to reduce complications.',
      },



    ],
  },
  scopeOfCare: [
    {
      title: 'Critical Care',
      overview:
        'Focuses on medical diagnosis, monitoring, and non-invasive management of heart-related symptoms and diseases.',

      sections: [
        
        {
          title: 'Conditions we commonly treat',
          items: [
            'Respiratory failure & pneumonia',
            'Stroke & seizures',
            'Septic shock and infections',
            'Cardiac arrest/post-MI observation',
            'Post-operative complications',
            'Road traffic accidents and polytrauma',
            'COVID-19 & ARDS',
          ],
        },
      ],
    },
  ],




  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Critical care that’s accessible to all",
    items: [
      {
        title: "Covered under 40+ private insurance companies",
        
      },
      {
        title: "Transparent, daily ICU cost tracking shared with family & Insurance companies",
        
      },
      {
        title: "Insurance Support & Patient Counseling",
        description:
          "Our dedicated insurance department offers end-to-end support for patients, including personalized counseling to help them understand their coverage and navigate the claims process with ease.",
      },

    ],
    cta: {
      label: "Check ICU insurance coverage",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "From diagnosis to recovery,We stay with you",
    steps: [
      { title: "Emergency assessment or ward transfer" },
      { title: "ICU admission & initial stabilization" },
      { title: "Investigations and multi-specialist review" },
      { title: "Family counselling & daily updates" },
      { title: "ICU care & infection control" },
      { title: "Discharge planning or referral to ward/home" },

    ],
    cta: "Understand the ICU process",
  },
  successStories: {
    items: [
      { type: 'text', text: 'My father had severe COVID-19 and was on a ventilator. He’s home now thanks to the ICU team.' },
      { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
      { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
      { type: 'image', src: '/images/card2.jpg', alt: 'Patient smiling' },
      { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
      { type: 'image', src: '/images/card3.jpg', alt: 'Covered woman smiling' },
      { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
      { type: 'image', src: '/images/card4.jpg', alt: 'Covered woman smiling' },
      { type: 'text', text: 'After a stroke, I thought my mother wouldn’t survive. They brought her back' },
    ],
    cta: {
      label: 'Read more ICU recovery stories',
      link: '/patient-stories'
    }
  },

  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: 'Can I get ICU admission without a prior booking?',
      answer: 'Yes, we accept emergency walk-ins and referrals 24*7.',
    },
    {
      question: 'How many visitors are allowed in the ICU?',
      answer: 'Limited visitors, our team coordinates family interaction with safety in mind.',
    },

  ],
  appointmentSection: {
    heading: "Appointment and consultations",
    helpline: {
      label: "24x7 ICU helpline:",
      number: "+91-XXXXXXXXXX",
      icon: "/icons/phone-plus.svg" // or any other icon path
    },
    support: {
      label: "Emergency transfer",
      icon: "/icons/ambulance.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Post a Critical Care  query",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit"
    }
  }

};

export default CriticalCare;
