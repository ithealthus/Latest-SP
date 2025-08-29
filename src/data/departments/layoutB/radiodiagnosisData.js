const radiodiagnosisData = {
  hero: {
    title: 'Precision that powers diagnosis, decisions, and direction.',
    description: [
      "SP Medifort’s Radiodiagnosis department offers comprehensive and high-accuracy imaging services that support faster, more accurate clinical decisions across every specialty.",
      "With the latest diagnostic machines and experienced radiologists, we ensure your scans are safe, swift, and clinically actionable. Recognized as one of the most advanced imaging centers in Thiruvananthapuram, our department operates 24x7 for emergency and elective scans."
    ],
    cta: { label: 'Book a diagnostic scan', href: '/appointments/radiodiagnosis' },
    image: { src: '/images/departments/radiodiagnosis.webp', alt: 'Radiodiagnosis' },
    highlightText: [
      'Radiodiagnosis in Trivandrum',
      'Best imaging center in Thiruvananthapuram',
      '128-slice CT scan Trivandrum',
      '1.5 Tesla MRI Trivandrum',
      'Ultrasound scan in Trivandrum',
      'Digital X-ray Trivandrum',
      'Diagnostic center in Kerala',
      'Fetal scan Trivandrum'
    ]
  },

  whyChoose: {
    title: 'Why choose SP Medifort for imaging?',
    subTitle: 'Image clarity that saves lives.',
    cards: [
      { icon: 'mdi:scanner', title: '128-slice CT scanner with ultra-low radiation' },
      { icon: 'mdi:cloud-sync', title: 'Image-guided procedures and interventional radiology support' },
      { icon: 'mdi:magnet', title: '1.5 Tesla MRI with silent scan capability' },
      { icon: 'mdi:human-pregnant', title: '4D ultrasound & fetal anomaly scanning' },
      { icon: 'mdi:x-ray', title: 'Fully automated digital X-ray suite' },
      { icon: 'mdi:cloud-sync', title: 'PACS-enabled reporting & inter-departmental access' }
    ],
    description: 'Our diagnostic services in Kerala are built on speed, accuracy, and expert interpretation.',
    cta: { label: 'View all diagnostic services', href: '/departments/radiodiagnosis#services' }
  },

  team: {
    title: 'Our team of experts',
    subTitle: 'Radiologists with precision, insight & experience.',
    doctors: [
      {
        name: 'Dr. Natasha Krishna',
        designation: 'HOD, Consultant & RSO',
        position: 'MBBS, MD (Radiodiagnosis)',
        image: '/images/doctors-card/dr-natasha.png'
      },
      {
        name: 'Dr. Jayakrishnan J',
        designation: 'Consultant',
        position: 'MBBS, MD (Radiology), FRCR (UK), EDIR, DICRI',
        image: '/images/doctors-card/dr-jayakrishnan.png'
      }
    ],
    description: 'Our radiology team in Trivandrum works closely with every department to deliver real-time, high-value insights.',
    cta: { label: 'Meet our Radiodiagnosis team', href: '/our-doctors#radiodiagnosis' }
  },

  technologies: {
    title: 'Advanced technology and expertise',
    categoryTabs: ['Imaging Technology'],
    items: [
      { name: 'MRI GE SIGNA', description: 'High-definition MRI for detailed neurological and body imaging.' },
      { name: '128 Slice CT GE Revolution', description: 'Advanced CT imaging with faster scans and lower radiation exposure.' },
      { name: 'FULLY MOTORIZED X-RAY SUITE - DRX-COMPASS', description: 'Automated and digital X-ray for rapid acquisition and diagnosis.' },
      { name: 'Ultrasound (USG) Scan', description: 'Real-time imaging for soft tissue and fetal evaluation.' },
      { name: 'GE Prodigy Advance DEXA scan', description: 'Bone density and health assessment with precision.' },
      { name: '1st 3D cath lab in India - GE Allia', description: 'AI-powered cardiac imaging and interventional planning.' }
    ]
  },

  ctaSection: {
    text: 'Accurate imaging. Fast results. Expert analysis - all under one roof at SP Medifort.',
    button: {
      label: 'Explore imaging infrastructure',
      link: '/departments/radiodiagnosis#technology'
    }
  },

  comprehensiveCare: {
    title: 'Key services & Imaging modalities',
    subtitle: '',
    description: 'Our imaging suite supports every specialty with precise diagnostic scans and interventions.',
    items: [
      { title: 'CT scan', icon: 'mdi:scanner', description: '(brain, spine, chest, abdomen, angiograms)' },
      { title: 'MRI', icon: 'mdi:magnet', description: '(neuro, spine, musculoskeletal, abdominal, pelvis)' },
      { title: 'Ultrasound', icon: 'mdi:ultrasound', description: '(abdomen, obstetric, Doppler, soft tissue)' },
      { title: 'Digital X-ray', icon: 'mdi:x-ray', description: '(contrast, portable, full skeletal)' },
      { title: 'Special investigations', icon: 'mdi:flask-outline', description: '(barium, hysterosalpingogram)' },
      { title: 'USG-guided procedures', icon: 'mdi:needle', description: 'FNAC, aspirations, biopsies' },
      { title: 'DEXA scan', icon: 'mdi:bone', description: 'Bone health assessment' }
    ]
  },

  scopeOfCare: [
    {
      title: 'When should you get scanned?',
      overview: 'Early and accurate imaging can transform treatment outcomes.',
      sections: [
        {
          title: 'Scan indications include:',
          items: [
            'Unexplained pain, swelling, or injury',
            'Pregnancy-related fetal evaluation',
            'Stroke symptoms (MRI/CT brain)',
            'Cancer staging or tumor screening',
            'Fracture or orthopedic injury',
            'Kidney stones or abdominal pain',
            'Preventive screening (lung, liver, brain, heart)'
          ]
        }
      ]
    }
  ],

  insuranceFinance: {
    title: 'Insurance and Finance',
    subtitle: 'Diagnostic clarity that’s also covered',
    items: [
      { title: 'Most imaging tests covered by insurance', description: 'Including pre-op, emergency, and injury imaging.' },
      { title: 'TPA cover for all modalities', description: 'Cashless approvals available for CT, MRI, and others.' },
      { title: 'Insurance approval for planned surgeries', description: 'Assistance with documentation and coordination.' },
      { title: 'Support & Counseling', description: 'We help patients understand policy terms and claim processes.' }
    ],
    cta: { label: 'Check imaging coverage', link: '#' }
  },

  patientJourney: {
    title: 'Patient journey',
    subtitle: 'From doctor’s advice to diagnostic insights',
    steps: [
      { title: 'Doctor recommends imaging test' },
      { title: 'Scan scheduled with or without contrast' },
      { title: 'Procedure briefing by radiologist or tech' },
      { title: 'Image acquisition and post-scan care' },
      { title: 'Report preparation and review' },
      { title: 'Consultation with referring specialist' }
    ],
    cta: 'Know the imaging process'
  },

  successStories: {
    items: [
      { type: 'text', text: '“My stroke was diagnosed in time with the emergency MRI. The speed saved my life.” - Ravi N.' },
      { type: 'text', text: '“The anomaly scan during my pregnancy gave us peace of mind and clarity.” - Zainab A., UAE' }
    ],
    cta: {
      label: 'Read more imaging testimonials',
      link: '/patient-stories#radiodiagnosis'
    }
  },

  faqs: [
    {
      question: 'Do I need a referral for a scan?',
      answer: 'Yes, a valid doctor prescription is required for all diagnostic imaging unless part of a health package.'
    },
    {
      question: 'Are scans safe for children and pregnant women?',
      answer: 'Ultrasound and MRI are safe. CT and X-ray are used with strict protocols only when essential.'
    }
  ],

  appointmentSection: {
    heading: 'Appointments and contact',
    helpline: {
      label: 'Imaging desk:',
      number: '+91-XXXXXXXXXX',
      icon: '/icons/phone-plus.svg'
    },
    support: {
      label: 'Upload prescription',
      icon: '/icons/upload.svg'
    },
    whatsapp: {
      icon: '/icons/whatsapp.svg',
      link: 'https://wa.me/919999999999'
    },
    form: {
      heading: 'Schedule a scan',
      fields: ['Name', 'Phone', 'Email', 'Scan Type'],
      submitLabel: 'Submit'
    }
  }
};

export default radiodiagnosisData;