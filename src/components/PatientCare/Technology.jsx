import React from "react";

const technologies = [
  {
    title: "Advanced Emergency & Trauma Unit with ICU backup & burn unit",
    image: "/images/patient/Advanced Emergency & Trauma Unit with ICU backup & burn unit.jpg",
  },
  {
    title: "Ambulances with critical care facilities available round-the-clock",
    image: "/images/patient/Ambulances with critical care facilities available round-the-clock.jpg",
  },
  {
    title: "Expert team for cardiac, neurological, and accident cases",
    image: "/images/patient/Expert team for cardiac, neurological, and accident cases.jpg",
  },
  {
    title: "No prior booking required- walk-ins and ambulance support available 24/7",
    image: "/images/patient/No prior booking required- walk-ins and ambulance support available 247.jpg",
  },
  {
    title: "Emergency Helpline: 0471 3100101",
    image: "/images/patient/Emergency Helpline_ 0471 3100101.jpg",
  },
  {
    title: "Care Champions:  Specially trained staff to provide dedicated support to patients",
    image: "/images/patient/Care Champions_  Specially trained staff to provide dedicated support to patients.jpg",
  },
];

const Technology = () => {
  return (
    <section className="max-w-7xl mx-auto bg-white py-8 sm:py-12 px-4 md:px-16">
      <h2 data-aos="fade-up" className="text-2xl sm:text-3xl md:text-5xl font-bold text-[#870064] mb-8 sm:mb-10 text-center">
        Emergency Services (24x7)
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {technologies.map((tech, idx) => (
          <div
            key={idx}
             data-aos="fade-up"
             data-aos-delay={idx * 100}
            className="relative aspect-square w-full rounded-xl overflow-hidden group shadow-md"
          >
            <img
              src={tech.image}
              alt={tech.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex items-end p-4 bg-gradient-to-t from-black/70 to-transparent z-10">
              <p className="text-white text-[18px] sm:text-[20px] md:text-[24px] font-medium leading-snug">
                {tech.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technology;
