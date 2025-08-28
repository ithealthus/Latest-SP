const plasticMicrovascularSurgery = {
  hero: {
    title: 'Plastic & Microvascular Surgery Hospital in Thiruvananthapuram',
    description: [
      "The Department of Plastic & Microvascular Surgery at SP Medifort provides advanced care for both reconstructive and aesthetic surgical needs. Whether you're recovering from trauma, managing a birth defect, or seeking cosmetic refinement, our team offers precision surgical solutions with personalized attention and safety.",
      "We are recognized as a leading hospital for plastic and reconstructive surgery in Thiruvananthapuram, combining artistry with clinical excellence."
    ],
    cta: { label: 'Book a surgical consultation', href: '/appointments/plastic-surgery' },
    image: { src: '/images/departments/plastic-and-microvascular-surgery.webp', alt: 'Plastic Surgery' },
    highlightText: [
      'Plastic surgery in Trivandrum',
      'Burn and trauma reconstruction experts',
      'Breast reconstruction and cosmetic solutions',
      'Microsurgery and revascularization excellence',
      'Compassionate care with high-end precision'
    ],
  },

  whyChoose: {
    title: 'Why choose SP Medifort for Plastic surgery?',
    subTitle: 'Specialized Expertise. Safe Recovery.',
    cards: [
      { icon: 'fluent:people-team-24-filled', title: 'Burn unit with surgical and critical care' },
      { icon: 'mdi:arm-flex-outline', title: 'Reconstructive microsurgery for trauma, cancer, or birth defects' },
      { icon: 'mdi:face-woman-outline', title: 'Cosmetic procedures with confidential, custom approach' },
      { icon: 'material-symbols:handshake', title: 'Hand surgery and limb replantation' },
      { icon: 'mdi:account-group-outline', title: 'Multidisciplinary team for complex reconstruction' }
    ],
    description: 'SP Medifort delivers functional restoration and aesthetic improvement with utmost safety and compassion.',
    cta: { label: 'Explore reconstructive & cosmetic options', href: '/departments/plastic-surgery#services' }
  },

  team: {
    title: 'Our team of experts',
    subTitle: 'Surgical precision meets human touch',
    doctors: [
      {
        name: 'Dr. Shreelal Shreedharan',
        designation: 'Plastic & Microvascular Surgery',
        position: 'Senior Consultant',
        image: '/images/doctors-card/dr-shreelal.png'
      }
    ],
    description: 'Our plastic surgeons in Thiruvananthapuram work closely with trauma, oncology, and ICU teams for integrated care.',
    cta: { label: 'Meet our surgeons', href: '/our-doctors#plastic' }
  },

  technologies: {
    title: 'Advanced technology and expertise',
    categoryTabs: ['Surgical Technology', 'Diagnostics'],
    items: [
      { name: 'Robotic Visualization System KINEVO 900', description: 'Offers magnified, steady, and precise surgical views for microvascular reconstruction and intricate procedures.' },
      { name: 'MRI – GE SIGNA', description: 'High-resolution MRI for pre-surgical planning and soft tissue visualization.' },
      { name: '128 Slice CT GE Revolution', description: 'Enables detailed imaging for trauma reconstruction and cosmetic evaluation.' },
      { name: 'Ultrasound (USG) Scan', description: 'Real-time assessment for flap evaluation, vascular access, and trauma management.' },
      { name: 'Operating microscope', description: 'Used for intricate nerve and vessel repair under high magnification.' }
    ]
  },

  ctaSection: {
    text: "SP Medifort offers precise microsurgical techniques and aesthetic solutions with a high success rate in functional and cosmetic outcomes.",
    button: {
      label: "View surgical facilities",
      link: "/departments/plastic-surgery#technology"
    }
  },

  comprehensiveCare: {
    title: 'Key procedures offered',
    subtitle: 'Comprehensive surgical care includes:',
    description: 'From complex reconstructions to cosmetic refinement, our services cover the full spectrum of plastic and microvascular surgery.',
    items: [
      { title: 'Replant and Revascularization surgery', icon: 'mdi:hand-heart', description: '' },
      { title: 'Brachial Plexus surgery', icon: 'mdi:brain', description: '' },
      { title: 'Cleft Palate surgery', icon: 'mdi:face-outline', description: '' },
      { title: 'Congenital Anomaly correction', icon: 'mdi:human-child', description: '' },
      { title: 'Post-Mastectomy reconstruction', icon: 'mdi:human-female-female', description: '' },
      { title: 'Body contouring & Liposuction', icon: 'mdi:scale-balance', description: '' },
      { title: 'Rhinoplasty', icon: 'mdi:face-woman-profile', description: '' },
      { title: 'Breast reduction', icon: 'mdi:human-female', description: '' },
      { title: 'Breast augmentation', icon: 'mdi:human-female', description: '' },
      { title: 'Autologous fat transfer', icon: 'mdi:needle', description: '' },
      { title: 'Cosmetic Genital surgeries', icon: 'mdi:gender-transgender', description: '' },
      { title: 'Microsurgical procedures', icon: 'mdi:microscope', description: '' }
    ]
  },

  scopeOfCare: [
    {
      title: 'Common conditions treated',
      overview: 'We provide advanced care for both acute injuries and planned cosmetic corrections.',
      sections: [
        {
          title: 'Reconstructive conditions',
          items: [
            'Trauma',
            'Diabetic Foot',
            'Lymphoedema',
            'Brachial plexus',
            'Congenital deformities',
            'Burns & post burn contracture'
          ]
        },
        {
          title: 'Cosmetic and functional issues',
          items: [
            'Hand injury, tendon & nerve repair',
            'Cosmetic correction',
            'Post-mastectomy reconstruction'
          ]
        }
      ]
    }
  ],

  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Coverage for Restorative & Reconstructive care",
    items: [
      {
        title: "All major trauma & disease-related surgeries covered",
        description: "Burns, trauma care, and congenital anomaly procedures are insurance eligible."
      },
      {
        title: "Pre-surgery insurance approval",
        description: "We help patients with documentation and TPA coordination before surgery."
      },
      {
        title: "Insurance Support & Patient Counseling",
        description: "Dedicated team to assist with claims, approvals, and policy understanding."
      }
    ],
    cta: { label: "Check surgery coverage options", link: "#" }
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "From evaluation to aesthetic or reconstructive results",
    steps: [
      { title: "Specialist consultation and assessment" },
      { title: "Pre-surgical imaging and workup" },
      { title: "Surgery planning (aesthetic or reconstructive)" },
      { title: "Procedure + ICU/PACU recovery if needed" },
      { title: "Wound care or rehab" },
      { title: "Cosmetic follow-up or functional therapy" }
    ],
    cta: "Understand the surgery pathway"
  },

  successStories: {
    items: [
      { type: 'text', text: '“After my accident, the reconstructive surgery team gave me back my smile and confidence.” — Lincy V.' },
      { type: 'text', text: '“The burn care and skin grafting saved my hand. Forever grateful.” — Anand T., Oman' }
    ],
    cta: {
      label: 'Read patient experiences',
      link: '/patient-stories#plastic'
    }
  },

  faqs: [
    {
      question: 'Is plastic surgery only cosmetic?',
      answer: 'No — it also includes reconstructive procedures to restore form and function after trauma, illness, or congenital issues.'
    },
    {
      question: 'Will insurance cover my procedure?',
      answer: 'All reconstructive and trauma-related procedures are generally covered. Cosmetic surgeries are typically not, unless bundled under a package.'
    }
  ],

  appointmentSection: {
    heading: "Appointments and contact",
    helpline: {
      label: "Reconstructive surgery desk:",
      number: "+91-XXXXXXXXXX",
      icon: "/icons/phone-plus.svg"
    },
    support: {
      label: "Upload case photos",
      icon: "/icons/upload.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Schedule surgical evaluation",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit"
    }
  }
};

export default plasticMicrovascularSurgery;
