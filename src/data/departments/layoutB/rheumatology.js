const rheumatology = {
  hero: {
    title: "Best Rheumatology Hospital in Thiruvananthapuram ",
    description: [
      "SP Medifort’s Rheumatology department specializes in diagnosing and managing autoimmune and inflammatory joint disorders. From rheumatoid arthritis to lupus and ankylosing spondylitis, we offer personalized, long-term care using the latest biologics, disease-modifying agents, and physical therapy to reduce flare-ups and prevent joint damage.",
      "We’re known as one of the best hospitals for arthritis and autoimmune care in Thiruvananthapuram, supporting patients with both medical and lifestyle management."
    ],
    cta: { label: "Book a Rheumatology consultation", href: "/appointments/rheumatology" },
    image: { src: "/images/departments/rheumatology.webp", alt: "Rheumatology care" },
    highlightText: [
      "Rheumatology in Trivandrum",
      "Autoimmune disease care specialists",
      "Advanced arthritis treatment and biologics",
      "Joint pain and lupus experts",
      "Top rheumatologist in Kerala"
    ]
  },

  whyChoose: {
    title: "Why choose SP Medifort for Rheumatology?",
    subTitle: "Expert care for complex chronic conditions",
    cards: [
      { icon: "mdi:needle", title: "DMARDs and biologic therapy for autoimmune conditions" },
      { icon: "mdi:human-male-height", title: "Musculoskeletal ultrasound-guided joint injections" },
      { icon: "mdi:account-group-outline", title: "Coordination with orthopedics, nephrology, dermatology" },
      { icon: "mdi:chart-line", title: "Long-term pain and joint function tracking" },
      { icon: "mdi:run", title: "Personalized exercise and physiotherapy plans" }
    ],
    description: "We provide holistic care for chronic inflammation and joint degeneration.",
    cta: { label: "Explore Autoimmune & Arthritis services", href: "/departments/rheumatology#services" }
  },

  team: {
    title: "Our team of experts",
    subTitle: "Precision diagnosis. Lifelong support.",
    doctors: [
      {
        name: "Dr. Anjana Nair",
        designation: "Senior Consultant Rheumatologist",
        position: "Autoimmune & Lupus Care Specialist",
        image: "/images/doctors-card/dr-anjana.png"
      }
    ],
    description: "Our Rheumatologists in Trivandrum are experts in early diagnosis and multidisciplinary management.",
    cta: { label: "Meet our Rheumatology team", href: "/our-doctors#rheumatology" }
  },

  technologies: {
    title: "Advanced technology and expertise",
    categoryTabs: ["Imaging & Diagnostics", "Monitoring Tools"],
    items: [
      { name: "GE Prodigy Advance DEXA Scan", description: "Measures bone density to detect osteoporosis and assess fracture risk." },
      { name: "Ultrasound (USG) Scan", description: "Real-time imaging for joints and soft tissues, used for guided injections." },
      { name: "MRI GE SIGNA", description: "High-definition imaging to evaluate spine and joint abnormalities." },
      { name: "128 Slice CT GE Revolution", description: "Rapid imaging for complex inflammatory and trauma-related disorders." },
      { name: "Prognosis Machine", description: "Advanced analytics to aid treatment planning and monitor therapy outcomes." }
    ]
  },

  ctaSection: {
    text: "SP Medifort’s Rheumatology team combines diagnostics, medication, and rehabilitation for better mobility and flare-up prevention.",
    button: {
      label: "See our Rheumatology diagnostic suite",
      link: "/departments/rheumatology#technology"
    }
  },

  comprehensiveCare: {
    title: "Key conditions treated",
    subtitle: "Autoimmune & inflammatory care includes:",
    description: "We treat a wide range of joint and connective tissue disorders with clinical expertise and long-term support.",
    items: [
      { title: "Rheumatoid Arthritis (RA)", icon: "mdi:hand-heart", description: "" },
      { title: "Systemic Lupus Erythematosus (SLE)", icon: "mdi:water", description: "" },
      { title: "Ankylosing Spondylitis", icon: "mdi:spine", description: "" },
      { title: "Psoriatic Arthritis", icon: "mdi:account-injury", description: "" },
      { title: "Gout and Uric Acid Disorders", icon: "mdi:food-drumstick", description: "" },
      { title: "Osteoarthritis and Fibromyalgia", icon: "mdi:bone", description: "" },
      { title: "Sjögren’s Syndrome", icon: "mdi:eye", description: "" },
      { title: "Vasculitis, Scleroderma, Polymyositis", icon: "mdi:virus", description: "" }
    ]
  },

  scopeOfCare: [
    {
      title: "When to consult a Rheumatologist",
      overview: "Timely care can prevent irreversible joint damage and flare-ups.",
      sections: [
        {
          title: "Common signs and symptoms",
          items: [
            "Persistent joint pain or stiffness",
            "Morning joint swelling",
            "Unexplained fatigue, rash, or fever",
            "Positive RA or ANA test results",
            "Family history of autoimmune disorders",
            "Difficulty walking or climbing stairs"
          ]
        }
      ]
    }
  ],

  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Covered, monitored & sustainable",
    items: [
      {
        title: "Most OPD consults and tests covered",
        description: "Health plans support blood tests, scans, and rheumatology evaluations."
      },
      {
        title: "Biologic infusions with pre-auth support",
        description: "Packages available for long-term treatment with insurance clearance."
      },
      {
        title: "Bundled lab & imaging pricing",
        description: "Affordable autoimmune panel and mobility monitoring packages."
      }
    ],
    cta: { label: "Check insurance coverage for Autoimmune care", link: "#" }
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "Guiding your recovery every step of the way",
    steps: [
      { title: "Initial consult and joint examination" },
      { title: "Blood and imaging tests (RA factor, ANA, MRI)" },
      { title: "Diagnosis and treatment planning" },
      { title: "Medication and physical therapy" },
      { title: "Monitoring and regular follow-up" },
      { title: "Lifestyle support and flare-up control" }
    ],
    cta: "Understand the chronic joint care pathway"
  },

  successStories: {
    items: [
      { type: "text", text: "“I couldn’t walk without pain for years. With SP Medifort’s help, my arthritis is finally under control.” – Manju R." },
      { type: "text", text: "“They diagnosed my lupus early and gave me hope.” – Razan A., Kuwait" }
    ],
    cta: {
      label: "Read real-life recovery stories",
      link: "/patient-stories#rheumatology"
    }
  },

  faqs: [
    {
      question: "Is joint pain always arthritis?",
      answer: "Not always. It could be due to injury, infection, or inflammation. A rheumatologist can confirm the cause."
    },
    {
      question: "Are biologic injections safe long term?",
      answer: "Yes, with proper monitoring and screening, biologics offer long-term relief and joint protection."
    }
  ],

  appointmentSection: {
    heading: "Appointments and contact",
    helpline: {
      label: "Rheumatology desk:",
      number: "+91-XXXXXXXXXX",
      icon: "/icons/phone-plus.svg"
    },
    support: {
      label: "Upload reports",
      icon: "/icons/upload.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Start your Autoimmune care plan",
      fields: ["Name", "Phone", "Email", "Symptoms"],
      submitLabel: "Submit"
    }
  }
};

export default rheumatology;
