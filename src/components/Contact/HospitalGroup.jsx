// import React from "react";
// import { MapPin, Phone } from "lucide-react"; // Optional icons
// import Image from "next/image";

// const hospitals = [
//   {
//     name: "SP Fort Hospital",
//     city: "Thiruvananthapuram",
//     desc: "A trusted name in multi-specialty tertiary care with decades of experience.",
//     logo: "/images/story/SP Fort Hospital.png",
//     phone: "0471 2450540",
//     mapLink: "#",
//   },
//   {
//     name: "SP Health Plus",
//     city: "Thiruvananthapuram",
//     desc: "An accessible urban healthcare hub offering preventive, outpatient, and diagnostic services.",
//     logo: "/images/story/SP Health Plus.png",
//     phone: "+91 471 245 0850",
//     mapLink: "#",
//   },
//   {
//     name: "SP Well Fort",
//     city: "Thiruvananthapuram",
//     desc: "A wellness-centred hospital promoting recovery through rehabilitation, physiotherapy, and lifestyle management.",
//     logo: "/images/story/SP Well Fort.png",
//     phone: "0471 2450540",
//     mapLink: "#",
//   },
// ];

// const HospitalGroup = () => {
//   return (
//     <section className="bg-white py-10">
//       <div className="max-w-7xl mx-auto px-4 text-center">
//         <h2
//           data-aos="fade-up"
//           className="text-3xl md:text-5xl font-bold text-[#870064] mb-10"
//         >
//           Our Group of Hospitals
//         </h2>
//         <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
//           {hospitals.map((hospital, index) => (
//             <div
//               key={index}
//               data-aos="fade-up"
//               data-aos-delay={index * 200}
//               style={{
//                 boxShadow:
//                   "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px",
//               }}
//               className="bg-white border border-[#87006480] rounded-xl shadow p-4 flex flex-col gap-2"
//             >
//               <Image
//                 width={1000}
//                 height={1000}
//                 src={hospital.logo}
//                 alt={hospital.name}
//                 className="h-48 object-contain mx-auto"
//               />
//               <div>
//                 <p className="text-[#002D39] font-semibold mb-1 text-2xl">
//                   {hospital.name}
//                 </p>
//                 <p className="text-sm font-semibold text-[#002D39]">
//                   {hospital.city}
//                 </p>
//               </div>
//               <p className="text-sm text-gray-600">{hospital.desc}</p>

//               <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 text-sm text-[#870064]">
//                 <div className="flex items-center w-1/2">
//                   <Image
//                     width={50}
//                     height={50}
//                     src="/images/story/add_call.svg"
//                     alt={hospital.name}
//                     className="h-4 object-contain mx-auto  w-[20%]"
//                   />
//                   <span className="w-[80%]">{hospital.phone}</span>
//                 </div>
//                 <div className="flex items-center  w-1/2">
//                   <Image
//                     width={50}
//                     height={50}
//                     src="/images/story/distance.svg"
//                     alt={hospital.name}
//                     className="h-4 object-contain mx-auto w-[20%]"
//                   />
//                   <span className="w-[80%]">View in Map</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HospitalGroup;
import React from 'react';
import Image from 'next/image';

const hospitals = [
    {
        name: 'SP Fort Hospital',
        city: 'Thiruvananthapuram',
        desc: 'A trusted name in multi-specialty tertiary care with decades of experience.',
        logo: '/images/story/SP Fort Hospital.png',
        phone: '0471 2450540',
        mapLink: 'https://maps.app.goo.gl/WgX9ZBbVcFqKn63A8',
    },
    {
        name: 'SP Health Plus',
        city: 'Thiruvananthapuram',
        desc: 'An accessible urban healthcare hub offering preventive, outpatient, and diagnostic services.',
        logo: '/images/story/SP Health Plus.png',
        phone: '+91 471 245 0850',
        mapLink: 'https://maps.app.goo.gl/R17bf3Rgzq4JhjwY8',
    },
    {
        name: 'SP Well Fort',
        city: 'Thiruvananthapuram',
        desc: 'A wellness-centred hospital promoting recovery through rehabilitation, physiotherapy, and lifestyle management.',
        logo: '/images/story/SP Well Fort.png',
        phone: '0471 2450540',
        mapLink: 'https://maps.app.goo.gl/cZpm5wgjmfS4XEwn7',
    },
];

const HospitalGroup = () => {
    return (
        <section className="bg-white py-10">
            <div className="max-w-7xl mx-auto px-4 text-center">
                <h2 data-aos="fade-up" className="text-3xl md:text-5xl font-bold text-[#870064] mb-2">
                    Our Group of Hospitals
                </h2>
                <p data-aos="fade-up" data-aos-delay="200" className="text-[#44002E] text-xl mb-8">
                    Expanding Care, One Campus at a Time 
                </p>

                <h3 data-aos="fade-right" className="text-black pt-5 text-2xl font-semibold mb-6 text-left">
                    Key Members Include :
                </h3>
                <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-left">
                    {hospitals.map((hospital, index) => (
                        <div
                            key={index}
                            data-aos="fade-up"
                            data-aos-delay={index * 200}
                            style={{ boxShadow: 'rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px' }}
                            className="bg-white border border-[#87006480] rounded-xl shadow p-4 flex flex-col gap-2"
                        >
                            <Image
                                width={1000}
                                height={1000}
                                src={hospital.logo}
                                alt={hospital.name}
                                className="h-48 object-contain mx-auto"
                            />
                            <div>
                                <p className="text-[#002D39] font-semibold mb-1 text-2xl">{hospital.name}</p>
                                <p className="text-sm font-semibold text-[#002D39]">{hospital.city}</p>
                            </div>
                            <p className="text-sm text-gray-600">{hospital.desc}</p>

                            <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100 text-sm text-[#870064]">
                                <a href={`tel:${hospital.phone}`} className="flex items-center w-1/2 hover:text-pink-700 transition">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/images/story/add_call.svg"
                                        alt="Call Icon"
                                        className="h-4 object-contain mx-auto w-[20%]"
                                    />
                                    <span className="w-[80%]">{hospital.phone}</span>
                                </a>
                                <a href={hospital.mapLink} target="_blank" rel="noopener noreferrer" className="flex items-center w-1/2 hover:text-pink-700 transition">
                                    <Image
                                        width={50}
                                        height={50}
                                        src="/images/story/distance.svg"
                                        alt="Map Icon"
                                        className="h-4 object-contain mx-auto w-[20%]"
                                    />
                                    <span className="w-[80%]">View in Map</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HospitalGroup;