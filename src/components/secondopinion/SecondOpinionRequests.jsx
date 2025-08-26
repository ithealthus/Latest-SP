"use client";
import Image from "next/image";

export default function SecondOpinionRequests() {
  const requests = [
    {
      icon: "/images/second-opinion/1.svg",
      title: "Heart Conditions",
      description: "When advised for bypass surgery, angioplasty, or valve replacement.",
    },
    {
      icon: "/images/second-opinion/2.svg",
      title: "Cancer Care",
      description: "To confirm diagnosis or explore advanced chemo, radiation, or surgical options.",
    },
    {
      icon: "/images/second-opinion/3.svg",
      title: "Joint Replacement",
      description: "Before undergoing knee or hip replacement surgery.",
    },
    {
      icon: "/images/second-opinion/4.svg",
      title: "Spine or Brain Surgery",
      description: "For complex tumors, spine stabilization, or stroke treatments.",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 md:px-10 py-12">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-primary mb-4">
        Our Common Second Opinion Requests
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {requests.map((item, index) => (
          <div
            key={index}
            className="flex items-start gap-4 border-2 border-primary rounded-xl p-6 bg-[#fdf5fa] hover:shadow-md transition"
          >
            <div className="bg-white rounded-full p-3 shadow-md">
              <Image
                src={item.icon}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10"
              />
            </div>
            <div>
              <h3 className="text-lg font-bold text-primary">{item.title}</h3>
              <p className="text-black text-sm mt-1">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
