const successStories = {
  items: [
    {
      type: "image",
      src: "/images/patients/story1.jpg",
      alt: "Recovered Patient",
    },
    {
      type: "text",
      text: "Our experts helped Mr. Sharma walk again after spine surgery.",
    },
    {
      type: "image",
      src: "/images/patients/story2.jpg",
      alt: "Heart Surgery Success",
    },
    {
      type: "text",
      text: "A successful cardiac bypass gave Mrs. Joshi a second chance at life.",
    },
  ],
  cta: {
    label: "View All Success Stories",
    link: "/success-stories",
  },
};

const faqs = [
  {
    question: "Do I need a referral to visit a department?",
    answer: "No, you can directly book an appointment with our specialists.",
  },
  {
    question: "Is emergency care available?",
    answer: "Yes, our Emergency Medicine department operates 24/7.",
  },
  {
    question: "Can I book consultations online?",
    answer: "Yes, online and tele-consultations are available for most departments.",
  },
];

const appointmentSection = {
  heading: "Need Help Finding the Right Department?",
  helpline: {
    label: "Call Us Now",
    number: "1800-123-4567",
    icon: "/icons/phone.svg",
  },
  support: {
    label: "Talk to a Care Coordinator",
    icon: "/icons/support.svg",
  },
  form: {
    heading: "Book a Specialist Appointment",
    fields: ["Name", "Phone", "Preferred Department", "Message"],
    submitLabel: "Submit Request",
  },
};

export default {
  successStories,
  faqs,
  appointmentSection,
};
