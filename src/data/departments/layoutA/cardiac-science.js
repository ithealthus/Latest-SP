const cardiacScienceData = {
  hero: {
    title: 'Advanced Heart Care with a Human Touch',
    description: [
      "SP Medifort’s Cardiac Science Department is one of the most comprehensive heart care centers in South Kerala. From emergency cardiac support to preventive heart screenings and interventional procedures, we provide personalized cardiology services in Trivandrum backed by innovation, empathy, and outcomes.Whether it's managing hypertension or performing a complex angioplasty, our approach is focused on quick diagnosis, minimally invasive treatment, and long-term heart wellness."
    ],
    cta: { label: 'Book a Cardiology consultation', href: '/appointments/cardiology' },
    image: { src: '/images/departments/Cardiac-Science.webp', alt: 'Cardiology' },
    
  },

  whyChoose: {
    title: 'Why choose SP Medifort for Cardiac care?',
    subTitle: 'Pioneering Cardiac Interventions in Kerala',
    cards: [
      {
        icon: 'iconamoon:3d-bold',
        title: 'First 3D AI-powered Cath Lab (GE Allia) in South Asia',

      },
      {
        icon: 'fluent:laser-tool-20-filled',
        title: 'First Laser Angioplasty in South Kerala',

      },
      {
        icon: 'mdi:heart-pulse',
        title: '24*7 Heart Emergency Unit & Cardiac ICU',

      },
      {
        icon: 'mdi:heart-cog-outline',
        title: 'Complex coronary angioplasties & device closures',

      },
      {
        icon: 'material-symbols:heart-check',
        title: ' Preventive cardiology & lifestyle management',

      },
      {
        icon: 'streamline-plump:customer-support-7-remix',
        title: 'Cardiac rehabilitation & post-op support',

      },
    ],
    description: 'We are proud to be considered the best heart hospital in Trivandrum with a record of exceptional cardiac outcomes.',
    cta: {
      label: 'See our Cardiac facilities',
      href: '/facilities#cardiac',
    }


  },
  team: {
    title: 'Our Team of Experts',
    subTitle: 'Meet Kerala’s leading heart specialists',
    doctors: [
      {
        name: 'DR. SHIFAS BABU M',
        designation: 'INTERVENTIONAL CARDIOLOGY',
        position: 'SENIOR CONSULTANT, MD, DM, DrNB, MNAMS, FACC',
        image: '/images/doctors-card/dp-images/cardiology/1.png'
      },
      {
        name: 'DR. PRAVEEN G L',
        designation: 'INTERVENTIONAL CARDIOLOGY',
        position: 'CONSULTANT, MBBS, MD, DM, DrNB (Cardiology)',
        image: '/images/doctors-card/dp-images/cardiology/2.png'
      },
      {
        name: 'DR. K VENUGOPAL',
        designation: 'INTERVENTIONAL CARDIOLOGY',
        position: 'SENIOR CONSULTANT, MD, DM, FCSI, FICC, FACC, FESC',
        image: '/images/doctors-card/dp-images/cardiology/3.png'
      },
      // {
      //   name: 'DR. TAHSIN NEDUVANCHERY',
      //   designation: 'INTERVENTIONAL CARDIOLOGY',
      //   position: 'SENIOR CONSULTANT, MBBS, MD, DM',
      //   image: '/images/doctors-card/shibu.png'
      // }  
    ],
    description: 'Each of our cardiologists in Thiruvananthapuram combines technical skill with a commitment to compassionate care.',
    cta: {
      label: 'Meet our Cardiologists',
      href: '/our-doctors#cardiology'
    }
  },

  // ...existing data
 technologies : {
  title: 'Advanced technology and expertise',
  categoryTabs: ['Cardiology', 'Interventional Cardiology'],
  items: [
    // Cardiology
    [
      {
        name: '128 Slice CT – GE Revolution',
        description:
          'High-resolution (down to 0.28 mm), ultra-fast cardiac CT that provides detailed 3D images of the heart and blood vessels, enabling precise evaluation of coronary artery disease.',
      },
      {
        name: 'MRI – GE SIGNA',
        description:
          'Advanced cardiac MRI offers functional and structural heart assessment, ideal for detecting myocardial damage, perfusion, and congenital anomalies.',
      },
      {
        name: 'Ultrasound (USG) Scan',
        description:
          'Real-time imaging for assessing blood flow and cardiac structures, used for general cardiovascular screening and follow-up.',
      },
      {
        name: 'Electrocardiogram (ECG)',
        description:
          'A baseline and essential test that records the heart’s electrical activity to detect rhythm disturbances and myocardial ischemia.',
      },
      {
        name: 'Holter Monitoring',
        description:
          'Continuous 24 to 48-hour ECG monitoring to detect intermittent arrhythmias not captured during a routine ECG.',
      },
      {
        name: 'Treadmill Stress Test (TMT)',
        description:
          'Evaluates cardiac function under physical stress to diagnose ischemic heart disease and determine exercise tolerance.',
      },
      {
        name: '2D/3D Echocardiography with Strain Imaging',
        description:
          'Non-invasive ultrasound-based cardiac imaging with strain analysis to detect subtle myocardial dysfunction before symptoms arise.',
      },
      {
        name: 'CT Coronary Angiogram',
        description:
          'A non-invasive imaging test to visualize coronary arteries and detect blockages with high precision using contrast-enhanced CT.',
      },
      {
        name: 'Blood Tests',
        description:
          'Cardiac Enzymes (e.g., Troponin): Detects myocardial infarction and cardiac muscle damage.',
      },
      {
        name: 'Cardiac Risk Factors Screening',
        description:
          'Comprehensive blood tests evaluating diabetes, hypertension, and inflammation markers linked to heart disease.',
      },
    ],

    // Interventional Cardiology
    [
      {
        name: 'Advanced 3D Cath Lab (GE Allia)',
        description:
          'India’s first AI-powered 3D cath lab delivers real-time, high-resolution imaging and intelligent dose management. It enhances precision in complex procedures such as angioplasty, TAVI, and congenital device closures. Integrated tools like 3DStent and AutoRight ensure optimized outcomes.',
      },
      {
        name: 'Coronary Angiography (Radial/Femoral Access)',
        description:
          'A diagnostic technique using contrast dye and X-ray imaging to assess coronary artery blockages. Radial access (via the wrist) provides faster recovery and lower complication rates, while femoral access is preferred for more complex interventions.',
      },
      {
        name: 'Coronary Angioplasty with Drug-Eluting Stents (DES)',
        description:
          'A catheter-based procedure to open blocked coronary arteries. Drug-eluting stents slowly release medication to reduce the risk of restenosis, ensuring long-term vessel patency and better clinical outcomes.',
      },
      {
        name: 'Laser Angioplasty',
        description:
          'Utilizes laser energy to vaporize hardened plaque when traditional balloon angioplasty is ineffective. Particularly beneficial in cases of in-stent restenosis and severely calcified arterial lesions.',
      },
      {
        name: 'Balloon Valvotomy (Mitral/Aortic)',
        description:
          'A minimally invasive technique using a balloon catheter to widen narrowed heart valves, typically in cases of rheumatic mitral or aortic stenosis, leading to improved valve function and symptom relief.',
      },
      {
        name: 'Pacemaker & ICD Implantation',
        description:
          'Maintains a regular heartbeat in bradycardia (slow rhythm).Detects and corrects life-threatening arrhythmias such as ventricular fibrillation.',
      },
      {
        name: 'Device Closure of ASD, VSD, PDA',
        description:
          'Catheter-delivered devices used to close congenital heart defects: Atrial Septal Defect (ASD), Ventricular Septal Defect (VSD), and Patent Ductus Arteriosus (PDA), offering a non-surgical alternative to open-heart procedures.',
      },
      {
        name: 'Primary PCI for Heart Attack (STEMI/NSTEMI)',
        description:
          'Emergency percutaneous coronary intervention is performed during a heart attack to promptly restore blood flow, reduce heart muscle damage, and improve survival outcomes.',
      },
      {
        name: 'Rotablation for Hard Calcified Lesions',
        description:
          'Employs a high-speed rotating burr to remove resistant, calcified plaque, facilitating successful balloon expansion and stent placement in heavily diseased arteries.',
      },
      {
        name: 'TAVI & Structural Heart Procedures',
        description:
          'TAVI (Transcatheter Aortic Valve Implantation): Minimally invasive valve replacement for aortic stenosis in patients at high surgical risk. Also includes repair of paravalvular leaks and valve-in-valve procedures for previously implanted prosthetic valves.',
      },
    ],
  ],
},

  
  ctaSection: {
    text: "This makes SP Medifort a top cardiology hospital in Kerala for both diagnostics and interventions. These tools empower us to offer accurate, fast, and low-risk cardiac interventions.",
    button: {
      label: "Explore our Cath Lab capabilities",
      link: "/departments/cardiac-science#cath-lab",
    },
  },
  highlightText: [
    '1st 3D Hybrid Cath Lab (GE Allia) in South Asia',
    '24x7 Cardiac Emergency Response Team',
    'Advanced Interventional Cardiology Without Open Surgery',
  ],
  comprehensiveCare: {
    title: 'Comprehensive Cardiology Services',
    subtitle: 'Full spectrum of Heart care',
    description:
      'Our cardiac services support every stage of heart health, from early detection and prevention to critical care and recovery, providing complete, patient-focused care.',
    items: [
      {
        title: 'Coronary Care Unit (CCU)',
        icon: 'mdi:stethoscope',
        description: ' A dedicated intensive care unit for critically ill cardiac patients. Provides advanced monitoring and treatment for heart attacks, arrhythmias, and acute coronary syndromes using continuous cardiac telemetry and life-support systems.',
      },
      {
        title: '24x7 Chest Pain Clinic',
        icon: 'mdi:heart-flash',
        description: 'An emergency service available at all times for the rapid evaluation and management of chest pain. Equipped with ECG, cardiac enzyme testing, and imaging for quick diagnosis of heart attacks and other cardiovascular conditions.',
      },
      {
        title: 'Executive Cardiac Checkups:',
        icon: 'mdi:hospital-box-outline',
        description: 'Comprehensive screening designed for executives and individuals at increased risk of heart disease. Includes ECG, echocardiography, lipid profile, treadmill testing (TMT), and expert consultations to detect early cardiac issues.',
      },

      {
        title: 'Preventive Cardiology',
        icon: 'mdi:heart-pulse',
        description: 'Focused on reducing cardiovascular risk through regular screenings, lifestyle counseling, and medication management. Addresses conditions such as hypertension, diabetes, obesity, and high cholesterol.',
      },
      {
        title: 'Structured Cardiac Rehabilitation',
        icon: 'mdi:heart-plus-outline',
        description: 'A medically supervised program for patients recovering from heart attacks or cardiac surgery. Integrates exercise, nutrition, stress management, and education to improve heart function and reduce future risk.',
      },
    ],
  },
  // scopeOfCare: [
  //   {
  //     title: 'Cardiology',
  //     overview:
  //       'Focuses on medical diagnosis, monitoring, and non-invasive management of heart-related symptoms and diseases.',

  //     sections: [
  //       {
  //         title: 'Symptoms & Risk Conditions',
  //         items: [
  //           'Chest pain',
  //           'Irregular heartbeat (Arrhythmia)',
  //           'High blood pressure (Hypertension)',
  //           'High cholesterol',
  //           'Palpitations & syncope (fainting spells)',
  //           'Breathlessness (dyspnea)',
  //           'Recurrent chest pain or breathlessness',
  //         ],
  //       },
  //       {
  //         title: 'Medical Cardiac Conditions',
  //         items: [
  //           'Coronary Artery Disease (CAD) – early stages',
  //           'Heart failure & Cardiomyopathy',
  //           'Valve disorders (initial diagnosis and follow-up)',
  //           'Bradycardia, Tachycardia (managed with medication or monitoring)',
  //           'Weak heart (low ejection fraction)',
  //           'Inflammatory conditions:\n - Pericarditis\n - Endocarditis',
  //           'Heart block (early detection & monitoring)',
  //         ],
  //       },
  //     ],
  //   },
  // ],

 scopeOfCare : [
  {
    title: 'Cardiac Conditions',
    overview:
      'Focuses on medical diagnosis, monitoring, and non-invasive management of heart-related symptoms and diseases:',
    sections: [
      {
        title: 'Symptoms & Risk Conditions',
        items: [
          'Chest pain',
          'Irregular heartbeat (Arrhythmia)',
          'High blood pressure (Hypertension)',
          'High cholesterol',
          'Palpitations & syncope (fainting spells)',
          'Breathlessness (dyspnea)',
          'Recurrent chest pain or breathlessness',
        ],
      },
      {
        title: 'Medical Cardiac Conditions',
        items: [
          'Coronary Artery Disease (CAD) – early stages',
          'Heart failure & Cardiomyopathy',
          'Valve disorders (initial diagnosis and follow-up)',
          'Bradycardia, Tachycardia (managed with medication or monitoring)',
          'Weak heart (low ejection fraction)',
          'Inflammatory conditions: Pericarditis, Endocarditis',
          'Heart block (early detection & monitoring)',
        ],
      },
    ],
  },
  {
    title: 'Interventional Cardiology Conditions',
    overview:
      'Deals with advanced, often minimally invasive procedures to treat structural or vascular heart diseases:',
    sections: [
      {
        title: 'Advanced Cardiac Conditions',
        items: [
          'Heart attack (Myocardial Infarction – MI)',
          'Coronary Artery Disease (CAD) – advanced stage requiring angioplasty/stenting',
          'Valve stenosis (Mitral/Aortic) – requiring balloon valvotomy or valve replacement',
          'Heart block – requiring pacemaker implantation',
          'Weak heart (severe cases requiring device therapy)',
          'Recurrent/restenting in Restenosis cases',
          'Arrhythmias – requiring device-based therapy like ICD or ablation',
          'Structural heart diseases – requiring device closure or valve intervention',
        ],
      },
    ],
  },
],





  insuranceFinance: {
    title: "Insurance and Finance",
    subtitle: "Affordable & accessible Cardiac care",
    items: [
      {
        title: "Insurance Approval for Cardiac Procedures",
        description: "Covered by all leading insurers and TPAs",
      },
      {
        title: "Insurance Support & Financial Counseling",
        description:
          "Cost-effective packages for all diagnostic & treatment procedures like ASD, VSD Closure, CAVG, PTCA, CAG, Valve Replacements, Pacemaker Implanmtation , EPS & RF Ablation",
      },
      {
        title: "Insurance Approval for Planned Surgeries",
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
      label: "Explore coverage & payment plans",
      link: "#", // update with actual route if needed
    },
  },

  patientJourney: {
    title: "Patient journey",
    subtitle: "From diagnosis to recovery, We stay with you",
    steps: [
      { title: "OPD Consult + ECG" },
      { title: "Tests (Echo, TMT, Angio, etc.)" },
      { title: "Medication or procedure planning" },
      { title: "Admission (if needed)" },
      { title: "Stenting / surgery" },
      { title: "ICU + ward recovery" },
      { title: "Cardiac rehab & follow-up" },
    ],
    cta: "Start your Cardiac journey with us",
  },
  successStories: {
    items: [
      { type: 'text', text: 'Advance video consult for cardiac second opinions' },
      { type: 'image', src: '/images/card1.png', alt: 'Happy patient' },
      { type: 'text', text: 'Airport pickup, translator, and post-op guidance' },
      { type: 'image', src: '/images/card2.jpg', alt: 'Patient smiling' },
      { type: 'text', text: 'Pre-booked angioplasty slots' },
      { type: 'image', src: '/images/card3.jpg', alt: 'Covered woman smiling' },
      { type: 'text', text: 'Pre-booked angioplasty slots' },
      { type: 'image', src: '/images/card4.jpg', alt: 'Covered woman smiling' },
      { type: 'text', text: 'Telemonitoring post-discharge for overseas patients' },
    ],
    cta: {
      label: 'Internation Cardiac coordination',
      link: '/patient-stories'
    }
  },

  /* The above code is a JavaScript object containing an array of FAQs (Frequently Asked Questions). Each
  FAQ object in the array has a question and an answer property. */
  faqs: [
    {
      question: 'How fast can I get a stent in an emergency?',
      answer: 'We provide 24*7 angioplasty with a door-to-balloon time under 60 minutes.',
    },
    {
      question: 'Are checkups needed if I have no symptoms?',
      answer: 'Yes,  heart disease can be silent. Annual screenings help prevent emergencies.',
    },
  ],
  appointmentSection: {
    heading: "Appointment and consultations",
    helpline: {
      label: "Cardiac helpline:",
      number: "04713100100",
      icon: "/images/call.png" // or any other icon path
    },
    support: {
      label: "24/7 Patience Support",
      icon: "/icon/ambulance.svg"
    },
    whatsapp: {
      icon: "/icons/whatsapp.svg",
      link: "https://wa.me/919999999999"
    },
    form: {
      heading: "Post a Cardiac query",
      fields: ["Name", "Phone", "Email", "Query"],
      submitLabel: "Submit"
    }
  }

};

export default cardiacScienceData;

// const cardiacScienceData = {
//   seo: {
//     title: "Cardiac Science at SP Medifort Hospital, Thiruvananthapuram",
//     description:
//       "SP Medifort – Best cardiology hospital in Trivandrum offering advanced heart care, minimally invasive treatments, and 24x7 cardiac emergency support.",
//     keywords: [
//       "Cardiology hospital in Trivandrum",
//       "Best heart hospital in Thiruvananthapuram",
//       "Cardiology center Trivandrum",
//       "Heart specialist hospital in Trivandrum",
//       "Top cardiology hospital in Thiruvananthapuram",
//       "Best cardiologist in Trivandrum",
//       "Heart specialist in Thiruvananthapuram",
//       "Top heart surgeon in Trivandrum",
//       "Best cardiology hospital in Kerala",
//       "Affordable heart surgery in Trivandrum",
//       "Laser angioplasty",
//       "3D Cathlab with AI"
//     ],
//     breadcrumb: ["Home", "Specialties & Treatments", "Cardiology"],
//   },

//   hero: {
//     title: "Advanced Heart Care with a Human Touch",
//     description: [
//       "SP Medifort’s Cardiac Science Department is one of the most comprehensive heart care centers in South Kerala.",
//       "From emergency cardiac support to preventive heart screenings and interventional procedures, we provide personalized cardiology services in Trivandrum backed by innovation, empathy, and outcomes.",
//       "Whether it's managing hypertension or performing a complex angioplasty, our approach is focused on quick diagnosis, minimally invasive treatment, and long-term heart wellness."
//     ],
//     cta: { label: "Book a Cardiology consultation", href: "/appointments/cardiology" },
//     image: { src: "/images/departments/Cardiac-Science.webp", alt: "Cardiology" },
//     highlightText: [
//       "1st 3D Hybrid Cath Lab (GE Allia) in South Asia",
//       "24x7 Cardiac Emergency Response Team",
//       "Advanced Interventional Cardiology Without Open Surgery"
//     ],
//   },

//   whyChoose: {
//     title: "Why choose SP Medifort for Cardiac care?",
//     subTitle: "Pioneering Cardiac Interventions in Kerala",
//     cards: [
//       { icon: "iconamoon:3d-bold", title: "First 3D AI-powered Cath Lab (GE Allia) in South Asia" },
//       { icon: "fluent:laser-tool-20-filled", title: "First Laser Angioplasty in South Kerala" },
//       { icon: "mdi:heart-pulse", title: "24x7 Heart Emergency Unit & Cardiac ICU" },
//       { icon: "mdi:heart-cog-outline", title: "Complex coronary angioplasties & device closures" },
//       { icon: "material-symbols:heart-check", title: "Preventive cardiology & lifestyle management" },
//       { icon: "streamline-plump:customer-support-7-remix", title: "Cardiac rehabilitation & post-op support" },
//     ],
//     description:
//       "We are proud to be considered the best heart hospital in Trivandrum with a record of exceptional cardiac outcomes.",
//     cta: { label: "See our Cardiac facilities", href: "/facilities#cardiac" },
//     subSpecialties: ["Cardiology", "Interventional Cardiology"],
//   },

//   team: {
//     title: "Our Team of Experts",
//     subTitle: "Meet Kerala’s leading heart specialists",
//     doctors: [
//       { name: "DR. SHIFAS BABU M", designation: "INTERVENTIONAL CARDIOLOGY", position: "SENIOR CONSULTANT, MD, DM, DrNB, MNAMS, FACC", image: "/images/doctors-card/shibu.png" },
//       { name: "DR. PRAVEEN G L", designation: "INTERVENTIONAL CARDIOLOGY", position: "CONSULTANT, MBBS, MD, DM, DrNB(Cardiology)", image: "/images/doctors-card/shibu.png" },
//       { name: "DR. K VENUGOPAL", designation: "INTERVENTIONAL CARDIOLOGY", position: "SENIOR CONSULTANT, MD, DM, FCSI, FICC, FACC, FESC", image: "/images/doctors-card/shibu.png" },
//       { name: "DR. TAHSIN NEDUVANCHERY", designation: "INTERVENTIONAL CARDIOLOGY", position: "SENIOR CONSULTANT, MBBS, MD, DM", image: "/images/doctors-card/shibu.png" }
//     ],
//     description: "Each of our cardiologists in Thiruvananthapuram combines technical skill with a commitment to compassionate care.",
//     cta: { label: "Meet our Cardiologists", href: "/our-doctors#cardiology" },
//   },

//   technologies: {
//     title: "Advanced technology and expertise",
//     tagline: "Beyond Stents; we see in 3D, we act in minutes",
//     categoryTabs: ["Interventional Cardiology", "Cardiology"],
//     items: [
//       {
//         name: "128 Slice CT – GE Revolution",
//         description:
//           "High-resolution (0.28 mm), ultra-fast cardiac CT that provides detailed 3D images of the heart and blood vessels, enabling precise evaluation of coronary artery disease."
//       },
//       {
//         name: "MRI – GE SIGNA",
//         description:
//           "Advanced cardiac MRI for functional and structural heart assessment, detecting myocardial damage, perfusion, and congenital anomalies."
//       },
//       {
//         name: "Ultrasound (USG) Scan",
//         description:
//           "Real-time imaging to assess blood flow and cardiac structures for cardiovascular screening and follow-up."
//       },
//       {
//         name: "Electrocardiogram (ECG)",
//         description:
//           "Baseline test recording heart’s electrical activity to detect rhythm disturbances and ischemia."
//       },
//       {
//         name: "Holter Monitoring",
//         description:
//           "Continuous 24–48 hour ECG monitoring to detect intermittent arrhythmias not captured during routine ECG."
//       },
//       {
//         name: "Treadmill Stress Test (TMT)",
//         description:
//           "Evaluates cardiac function under physical stress to diagnose ischemic heart disease and exercise tolerance."
//       },
//       {
//         name: "2D/3D Echocardiography with Strain Imaging",
//         description:
//           "Detects subtle myocardial dysfunction using advanced strain analysis."
//       },
//       {
//         name: "CT Coronary Angiogram",
//         description:
//           "Non-invasive imaging to detect coronary blockages with high precision using contrast-enhanced CT."
//       },
//       {
//         name: "Blood Tests & Cardiac Risk Factors Screening",
//         description:
//           "Includes cardiac enzymes (Troponin), lipid profile, and markers for diabetes, hypertension, and inflammation."
//       },
//     ],
//   },

//   insuranceFinance: {
//     title: "Insurance and Finance",
//     subtitle: "Affordable & accessible Cardiac care",
//     items: [
//       { title: "Insurance Approval for Cardiac Procedures", description: "Covered by all leading insurers and TPAs" },
//       { title: "Insurance Support & Financial Counseling", description: "Packages for procedures like ASD, VSD Closure, CAVG, PTCA, CAG, Valve Replacements, Pacemaker Implantation, EPS & RF Ablation" },
//       { title: "Insurance Approval for Planned Surgeries", description: "We assist patients in obtaining prior approval for a hassle-free experience." },
//       { title: "Insurance Support & Patient Counseling", description: "Dedicated department for end-to-end claims assistance and personalized support." },
//     ],
//     cta: { label: "Explore coverage & payment plans", link: "#" },
//   },

//   patientJourney: {
//     title: "Patient journey",
//     subtitle: "From diagnosis to recovery — We stay with you",
//     steps: [
//       { title: "OPD Consult + ECG" },
//       { title: "Tests", description: "Echo, TMT, Angio, etc." },
//       { title: "Medication or procedure planning" },
//       { title: "Admission (if needed)" },
//       { title: "Stenting / surgery" },
//       { title: "ICU + ward recovery" },
//       { title: "Cardiac rehab & follow-up" },
//     ],
//     cta: "Start your Cardiac journey with us",
//   },

//   faqs: [
//     { question: "How fast can I get a stent in an emergency?", answer: "We provide 24x7 angioplasty with a door-to-balloon time under 60 minutes." },
//     { question: "Are checkups needed if I have no symptoms?", answer: "Yes, heart disease can be silent. Annual screenings help prevent emergencies." },
//   ],

//   appointmentSection: {
//     heading: "Appointment and consultations",
//     helpline: { label: "Cardiac helpline:", number: "04713100100", icon: "/icons/phone-plus.svg" },
//     support: { label: "24/7 Patient Support", icon: "/icons/ambulance.svg" },
//     whatsapp: { icon: "/icons/whatsapp.svg", link: "https://wa.me/919999999999" },
//     form: { heading: "Post a Cardiac query", fields: ["Name", "Phone", "Email", "Query"], submitLabel: "Submit" },
//   },
// };

// export default cardiacScienceData;
