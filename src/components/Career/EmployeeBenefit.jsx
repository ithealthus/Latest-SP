import React from "react";
import { MapPin, Share2 } from "lucide-react";

const data = [
  {
    title: "Health & Wellness",
    description: [
      "Comprehensive health insurance",
      "Free annual checkups",
      "Mental wellness programs",
      "Fitness centre access",
    ],
  },
  {
    title: "Financial Support",
    description: [
      "Competitive pay",
      "Retirement fund (EPF, Gratuity)",
      "Loan assistance & financial planning",
    ],
  },
  {
    title: "Work-Life Harmony",
    description: [
      "Flexible duty scheduling",
      "Paid time off and holidays",
      "Employee assistance programs",
    ],
  },
  {
    title: "Career Development",
    description: [
      "CME credit support",
      "Tuition reimbursement",
      "Mentorship & preceptorship programs",
    ],
  },
  {
    title: "Recognition & Rewards",
    description: [
      "Star Performer Awards",
      "Long-service appreciation",
      "Birthday & festival celebrations",
      "Team building retreats",
    ],
  },
];

const HospitalLocation = () => {
  return (
    <div className="bg-two py-20 px-6">
      <h2 className="text-2xl md:text-4xl font-semibold text-primary mb-16 text-center">
        Employee Benefits & Perks
      </h2>
      <div className="max-w-5xl mx-auto flex flex-wrap gap-10 justify-center px-3">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-full sm:w-[45%] lg:w-[30%]  bg-[#f9f3f2] rounded-2xl shadow-xl p-6 font-nunito flex flex-col"
          >
            {/* Title Row with Number Badge */}
            <div className="flex items-center relative mb-4">
              <div className="absolute -left-12 -top-2 w-16 h-16 rounded-full bg-[#870064] border-4 border-white text-white flex items-center justify-center font-bold font-montserrat text-2xl shadow-lg z-10">
                {index + 1}
              </div>
              <h3 className="text-2xl font-bold font-montserrat text-two pl-10">
                {item.title}
              </h3>
            </div>

            {/* Description as bullet points */}
            <ul className="text-lg list-disc pl-5 text-two mb-6 space-y-2">
              {(Array.isArray(item.description)
                ? item.description
                : [item.description]
              ).map((desc, i) => (
                <li key={i}>{desc}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HospitalLocation;
