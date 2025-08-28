const OphthalmologyData = {
  hero: {
    title: 'Ophthalmology Hospital in Thiruvananthapuram ',
    description: [
      "At SP Medifort, the Ophthalmology Department offers comprehensive eye care services including routine OP procedures. Whether it’s cataracts, glaucoma, diabetic eye disease, or retina problems, our expert team ensures early diagnosis & treatment for long-term eye health.",
      "Recognized as a top centre for eye care in Trivandrum, we serve patients of all ages with compassion and clinical excellence."
    ],
    cta: { label: 'Book an Eye checkup', href: '/appointments/ophthalmology' },
    image: { src: '/images/departments/ophthalmology.webp', alt: 'Ophthalmology' },
    highlightText: [
      'Cataract Surgery with Premium Lens Options',
      'Diabetic Eye Screening & Retina Clinics',
      'LASIK & Advanced Vision Correction',
    ],
  },

  whyChoose: {
    title: 'Why choose SP Medifort for Eye Care?',
    subTitle: 'Advanced Eye Care with personalized attention',
    cards: [
      { icon: 'iconamoon:3d-bold', title: 'Dedicated paediatric & diabetic eye care clinics' },
      { icon: 'fluent:laser-tool-20-filled', title: 'Computerized eye diagnostics' },
      { icon: 'mdi:heart-pulse', title: 'Multidisciplinary eye care for neuro, diabetes, and hypertension patients' },
    ],
    description: 'SP Medifort is one of the best eye hospitals in Thiruvananthapuram, offering precise, safe, and efficient eye treatments.',
    cta: {
      label: 'Explore our Eye services',
      href: '/facilities#ophthalmology',
    },
  },

  team: {
    title: 'Our Team of Experts',
    subTitle: 'Your vision, in experienced hands',
    doctors: [
      {
        name: 'Dr. Aisha Beevi P K',
        designation: 'MBBS, DO(Ophthalmology)',
        position: 'Senior Consultant, Ophthalmology',
        image: '/images/doctors-card/shibu.png',
      },
    ],
    description: 'Our eye specialists in Trivandrum are known for accurate diagnoses, gentle surgical techniques, and personalized eye care.',
    cta: {
      label: 'Meet our Ophthalmologists',
      href: '/our-doctors#ophthalmology',
    },
  },

  technologies: {
    title: 'Advanced technology and expertise',
    categoryTabs: ['High-definition Eye diagnostics and surgeries'],
    items: [
      { name: 'MRI GE SIGNA', description: 'Enhances accuracy in advanced eye procedures.' },
      { name: '128 Slice CT GE Revolution', description: 'Real-time imaging for orbital and neurological eye conditions.' },
      { name: 'Ultrasound (USG) Scan', description: 'Quick and detailed evaluation of ocular structures.' },
    ],
    cta: {
      label: 'Know our Eye Care infrastructure',
      link: '/departments/ophthalmology#facilities',
    },
  },

  ctaSection: {
    text: "SP Medifort offers state-of-the-art eye diagnostics and surgical care for cataracts, retina, glaucoma, and more.",
    button: {
      label: "Know our Eye Care infrastructure",
      link: "/departments/ophthalmology#facilities",
    },
  },

  highlightText: [
    'Cataract Surgery with Premium Lens Options',
    'Diabetic Eye Screening & Retina Clinics',
    'LASIK & Advanced Vision Correction',
  ],

  comprehensiveCare: {
    title: 'Services offered',
    subtitle: 'Comprehensive Eye Care',
    description: 'Our services cover preventive, diagnostic, and advanced surgical eye treatments.',
    items: [
      { title: 'Comprehensive eye exams', icon: 'mdi:stethoscope', description: 'Routine vision checks and preventive screenings.' },
      { title: 'Glaucoma diagnosis and pressure control', icon: 'mdi:eye-check', description: 'Early detection and pressure management.' },
      { title: 'Retina screening', icon: 'mdi:eye', description: 'Specialized care for diabetic and age-related retina issues.' },
      { title: 'Squint screening and pediatric eye care', icon: 'mdi:baby-face', description: 'Care for children with squint or lazy eye.' },
      { title: 'Dry eye, allergy, and infection treatment', icon: 'mdi:eye-plus', description: 'Effective management of eye surface issues.' },
      { title: 'Computer vision syndrome care', icon: 'mdi:laptop', description: 'Relief for digital eye strain and related issues.' },
      { title: 'Driving licence purposes', icon: 'mdi:card-account-details', description: 'Eye exams for driver’s license applications.' },
      { title: 'Second opinion', icon: 'mdi:comment-question', description: 'Expert consultation before eye procedures.' },
      { title: 'Pre surgical eye assessment', icon: 'mdi:clipboard-check', description: 'Comprehensive evaluation before eye surgery.' },
    ],
  },

  scopeOfCare: [
    {
      title: 'Ophthalmology',
      overview: 'Comprehensive diagnosis, treatment, and long-term care for eye conditions.',
      sections: [
        {
          title: 'Common eye conditions we treat',
          items: [
            'Glaucoma (high eye pressure)',
            'Diabetic retinopathy',
            'Age-related macular degeneration',
            'Myopia, hyperopia & astigmatism',
            'Red eye, dry eye, and infections',
            'Eye trauma or injury',
            'Pediatric squint or lazy eye',
            'Corneal foreign body removal',
            'Drug-Induced eye changes evaluation',
          ],
        },
      ],
    },
  ],

  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Clear coverage for every procedure",
    items: [
      { title: "Eye surgeries covered under all major plans", description: "Covered by all leading insurers and TPAs" },
      { title: "Cashless facility with Ayushman Bharat, TPA & CGHS", description: "Covered by all leading insurers and TPAs" },
      { title: "Laser & advanced procedures covered under specific plans", description: "Covered by all leading insurers and TPAs" },
      { title: "Finance support for advanced care", description: "Covered by all leading insurers and TPAs" },
      { title: "Insurance Approval for Planned Surgeries", description: "We assist patients in obtaining prior insurance approval." },
      { title: "Insurance Support & Patient Counselling", description: "Personalized guidance for understanding coverage and claims." },
    ],
    cta: {
      label: "Verify your Eye Care coverage",
      link: "#",
    },
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "From diagnosis to recovery, we stay with you",
    steps: [
      { title: "Eye evaluation by specialist" },
      { title: "Vision testing, pressure check" },
      { title: "Diagnosis and discussion" },
      { title: "Medical treatment (as needed)" },
      { title: "Follow-up for long-term visual care" },
    ],
    cta: "Understand the Eye Care pathway",
  },

  successStories: {
    items: [
      { type: 'text', text: '“Their diabetic eye screening saved my vision!” — Shireen M., Muscat' },
      { type: 'video', src: '/videos/Genesys-Vide-2.mp4', alt: 'Happy patient' },
    ],
    cta: {
      label: 'More patient testimonials',
      link: '/patient-stories'
    },
  },

  faqs: [
    {
      question: 'How long does cataract surgery take?',
      answer: 'It’s usually a 15–20 minute painless procedure. You can go home the same day.',
    },
    {
      question: 'Is LASIK safe for everyone?',
      answer: 'Not always. That’s why we perform a thorough eye exam and corneal mapping first.',
    },
  ],

  appointmentSection: {
    heading: "Appointments and Contact",
    helpline: {
      label: "Eye Care helpline:",
      number: "+91-XXXXXXXXXX",
      icon: "/icons/phone-plus.svg"
    },
    support: {
      label: "24/7 Patient Support",
      icon: "/icons/ambulance.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Upload eye prescription",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Book your eye checkup today"
    }
  }
};

export default OphthalmologyData;
