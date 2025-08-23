import React from "react";
import { FaHeartbeat, FaFemale, FaTemperatureHigh, FaChild, FaBriefcaseMedical, FaRegLifeRing, FaAppleAlt } from "react-icons/fa"; 

// Example icons above, you can replace them with your own or custom SVGs

const topics = [
  { icon: <FaHeartbeat size={30} />, title: "Preventive Health" },
  { icon: <FaFemale size={30} />, title: "Women’s Wellness" },
  { icon: <FaTemperatureHigh size={30} />, title: "Chronic Condition Management" },
  { icon: <FaChild size={30} />, title: "Paediatric & Elderly Care" },
  { icon: <FaBriefcaseMedical size={30} />, title: "Mental Health Awareness" },
  { icon: <FaRegLifeRing size={30} />, title: "Post-surgery Recovery Tips" },
  { icon: <FaAppleAlt size={30} />, title: "Nutrition & Lifestyle" },
];

function FeaturedTopics() {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      {/* Title */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-10">
        Featured Topics
      </h2>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center max-w-5xl mx-auto">
        {topics.map((topic, index) => (
          <div
  key={index}
  className="w-full max-w-xs flex flex-col items-center justify-center p-6 border border-gray-200 rounded-xl shadow-sm 
             hover:bg-gradient-to-r hover:from-pink-900 hover:to-pink-600 hover:text-white 
             hover:scale-105 hover:shadow-xl transform transition-all duration-300 group"
>
  <div className="text-primary mb-4 group-hover:text-white">
    {topic.icon}
  </div>
  <h3 className="text-lg font-medium text-gray-800 group-hover:text-white text-center">
    {topic.title}
  </h3>
</div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedTopics;
