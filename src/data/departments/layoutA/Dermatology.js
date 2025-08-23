import React from 'react';

const Dermatology = {
  hero: {
    title: 'Expert skin, hair & nail care – Beyond beauty, focused on health',
    description: [
      "At SP Medifort, our Dermatology department offers expert care for skin, hair, and nail conditions, combining medical science with compassionate treatment. Whether it’s acne, pigmentation issues, autoimmune skin diseases, or cosmetic dermatology, we focus on accurate diagnosis, personalized therapy, and visible, lasting results.We are more than just a skin clinic. We are a full-service dermatology hospital in Trivandrum dedicated to both clinical excellence and patient well-being."
    ],
    cta: { label: 'Book a Dermatology consultation', href: '/appointments/cardiology' },
    image: { src: '/images/departments/dermatology.webp', alt: 'Cardiology' },

  },

  whyChoose: {
    title: 'Why choose SP Medifort?',
    subTitle: 'Comprehensive Clinical + Cosmetic Dermatology',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: '  Experienced dermatologists in medical & aesthetic care',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: 'Skin biopsy, dermatoscopy & patch testing facilities',

      },
      {
        icon: 'mdi:heart-pulse',
        title: 'Combined management with all superspecialities',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: ' Cosmetic care under medical supervision',

      },

    ],
    description: 'Our dermatology unit is known for both evidence-based care and cosmetic finesse making us one of the best skin hospitals in Thiruvananthapuram.',
    cta: {
      label: 'See our skin & hair care facilities',
      href: '/facilities#cardiac',
    }
  },
  team: {
    title: 'Our team of experts',
    subTitle: 'Your skin is in safe, Experienced hands',
    doctors: [
      {
        name: 'DR. ABDUL SAMAD K',
        designation: 'DERMATOLOGY',
        position: 'SENIOR CONSULTANT',
        image: '/images/doctors-card/dp-images/dermatology/1.png'
      },
      {
        name: 'DR. SUNIL KUMAR S',
        designation: 'DERMATOLOGY',
        position: 'CONSULTANT',
        image: '/images/doctors-card/dp-images/dermatology/2.png'
      },
    ],
    description: 'Our skin specialists in Trivandrum are trained in India’s top institutions and bring years of clinical and cosmetic experience.',
    cta: {
      label: 'Meet our Dermatology team',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
  technologies: {
    title: 'Advanced technology and expertise',
    
    items: [
      {
        name: 'Dermatoscope',
        description:
          ' A high-resolution magnifying tool used to examine moles, lesions, and pigmented skin changes for accurate diagnosis and early skin cancer detection.',
      },
      {
        name: 'Excimer Laser or Phototherapy Booth (for UV Therapy)',
        description:
          'Delivers targeted narrow-band UVB light for conditions like vitiligo, psoriasis, and eczema with reduced risk to surrounding skin',
      },
      {
        name: 'CO₂ Laser / Erbium:YAG Laser',
        description:
          ' Used for scar revision, mole removal, wart ablation, and skin resurfacing with high precision and minimal damage to adjacent tissue.',
      },
      {
        name: 'Fractional Laser Technology',
        description:
          ' Targets pigmentation, wrinkles, acne scars, and textural issues through controlled micro-injury and collagen stimulation.',
      },
      {
        name: 'Q-switched Nd:YAG Laser',
        description:
          ' Effective for treating pigmented lesions, melasma, and tattoo removal. Often used in skin-brightening protocols.',
      },
      {
        name: 'Radiofrequency (RF) & Electrosurgical Units',
        description:
          'Separates plasma from the patient’s blood to prepare high-quality PRP used for hair restoration and skin rejuvenation.',
      },

      {
        name: 'Chemical Peel Station with Safety Protocols',
        description:
          'Designated area and tools for preparing and applying medical-grade chemical peels under supervision.',
      },
      {
        name: 'Nail Dermoscopy & Microscopy Setup',
        description:
          ' Used to assess nail disorders and fungal infections, enabling rapid diagnosis and treatment monitoring.',
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
    'USFDA-Approved Laser Skin & Hair Treatments',
    'Advanced Cosmetic Procedures by Experts',
    'Scar, Acne & Hair Loss Solutions Under One Roof',
  ],
  comprehensiveCare: {
    title: 'Core Dermatology services include',
    subtitle: 'Personalized skin, hair, and nail care backed by medical expertise',
    description:
      'From chronic conditions to aesthetic concerns, our dermatology team offers advanced treatments using evidence-based protocols and precision technology.',
    items: [
      {
        title: 'UltraViolet (UV) Light Therapy',
        icon: 'mdi:stethoscope',
        description: '  Used for treating psoriasis, eczema, and vitiligo, this therapy exposes the skin to controlled doses of UV light. It helps reduce inflammation and slow down abnormal skin cell growth.',
      },
      {
        title: 'Mole Removal',
        icon: 'mdi:heart-flash',
        description: 'We offer cosmetic and medical mole removal depending on the type and risk factors. Procedures are performed with minimal scarring and quick recovery.',
      },
      {
        title: 'Chemical Peel Procedure',
        icon: 'mdi:hospital-box-outline',
        description: 'Peels are customized for acne, pigmentation, and anti-aging. They help exfoliate the top skin layer, revealing fresher and more even-toned skin.',
      },

      {
        title: 'Vitiligo Surgery',
        icon: 'mdi:heart-pulse',
        description: 'For stable vitiligo patches, we offer grafting and melanocyte transfer techniques. These promote repigmentation and improved skin appearance.',
      },
      {
        title: 'PRP Therapy',
        icon: 'mdi:heart-plus-outline',
        description: 'Platelet-rich plasma (PRP) is used for skin rejuvenation and hair restoration. It boosts natural healing by stimulating collagen and follicle growth.',
      },
      {
        title: 'Electrosurgery',
        icon: 'mdi:stethoscope',
        description: '  This technique uses electric current to remove skin lesions like warts, tags, and corns. It’s a quick, low-downtime procedure with excellent cosmetic outcomes.',
      },
      {
        title: 'Intralesional Therapy',
        icon: 'mdi:heart-flash',
        description: 'Medications are injected directly into skin lesions such as keloids or cystic acne. This delivers targeted treatment with faster results and fewer side effects.',
      },
      {
        title: 'Laser Treatments',
        icon: 'mdi:hospital-box-outline',
        description: ' Our dermatology lasers address pigmentation, scars, wrinkles, and unwanted hair. Sessions are quick, effective, and customized to your skin type.',
      },

      {
        title: 'Nail Infection & Dystrophy Management',
        icon: 'mdi:heart-pulse',
        description: 'We treat fungal infections, psoriasis-related nail changes, and structural nail deformities. Diagnostic clarity and targeted antifungal or restorative therapies are prioritized.',
      },



    ],
  },
  scopeOfCare: [
    {
      title: 'Dermatology',
      

      sections: [

        {
          title: 'Common conditions we treat',
          items: [
            'Acne, rosacea, blackheads',
            'Psoriasis, dermatitis, eczema',
            'Fungal infections (ringworm, candidiasis)',
            'Hair thinning, alopecia',
            'Dandruff, scalp itching',
            'Vitiligo, pigmentation',
            'Skin rashes, urticaria, sun allergy',
            'Warts, moles, skin growths',
            'Viral & parasite infection of skin',
            'All skin condition associated with systematic diseases including Diabetes mellitus, Thyroid disorders etc',

          ],
        },
      ],
    },
  ],




  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Medical Dermatology is covered but Cosmetic is optional",
    items: [
      {
        title: "Skin diseases (psoriasis, infections, eczema) are covered",
       
      },
      {
        title: "Insurance may apply for biopsies and procedures. ",
      },


    ],
    cta: {
      label: "Know what’s covered",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey",
    
    steps: [
      { title: "Dermatology consultation" },
      { title: "Clinical evaluation & imaging/tests (if needed)" },
      { title: "Diagnosis and treatment plan" },
      { title: "Medication/cosmetic procedure" },
      { title: "Review after 2–4 weeks" },
      { title: "Maintenance therapy or advanced treatment" },

    ],
    cta: "Start your skin journey",
  },
  successStories: {
    items: [
      { type: 'text', text: '“My psoriasis was finally under control after trying everything else.” — Sreekanth V.' },
      { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
      { type: 'text', text: '“I had cystic acne for 5 years. At SP Medifort, it cleared up in 3 months.” — Sana M.' },
      { type: 'image', src: '/images/card2.jpg', alt: 'Patient smiling' },
      
    ],
    cta: {
      label: 'More skin & hair testimonials',
      link: '/patient-stories'
    }
  },

  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: 'Are cosmetic dermatology services done in hospital?',
      answer: 'Yes all aesthetic services are provided under dermatological supervision inside the hospital.',
    },
    {
      question: 'Can I get permanent acne scar treatment?',
      answer: 'Yes depending on the scar, we offer lasers, peels, and microneedling.',
    },

  ],
  appointmentSection: {
    heading: "Appointment and consultations",
    helpline: {
      label: "Call :",
      number: "0471 3100100",
      icon: "/icons/phone-plus.svg" // or any other icon path
    },
    support: {
      label: "Consult a Dermatologist",
      icon: "/icons/ambulance.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Post a Dermatology query",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit"
    }
  }

};


export default Dermatology;
