// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { layoutMap } from "@/data/departments/layoutMap";
// import SuccessStories from "@/components/layouts/layoutB/SuccessStories";
// import Faq from "@/components/layouts/layoutB/Faq";
// import AppointmentConsultation from "@/components/layouts/layoutB/AppointmentConsultation";
// import urology from "@/data/departments/layoutB/urology";
// import { FaSearch } from "react-icons/fa";

// const { successStories, faqs, appointmentSection } = urology;

// export default function DepartmentsListPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   // Prevent error by checking label exists
//   const filteredDepartments = Object.entries(layoutMap).filter(([, value]) =>
//     value?.label?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     // <div className="max-w-7xl mx-auto py-10 px-4">
//     <div>
//       <div className="max-w-7xl mx-auto py-10 px-4">
//           <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
//           Centres of Excellence
//         </h1>

//           {/* Search Bar */}
//           <div className="mb-8 flex justify-center">
//             <div className="flex items-center w-full max-w-xl rounded-full border-2 border-primary px-4 py-2 bg-white shadow-sm">
//               <FaSearch className="text-primary text-lg mr-3" />
//               <input
//                 type="text"
//                 placeholder="Search for Department"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full outline-none text-primary placeholder:text-primary font-medium text-base bg-transparent"
//               />
//             </div>
//           </div>

//           {/* Department Cards */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
//             {filteredDepartments.map(([slug, { label, icon: Icon }]) => (
//               <Link key={slug} href={`/departments/${slug}`}>
//                 <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer">
//                   <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shrink-0">
//                     {Icon ? <Icon /> : <FaSearch />}
//                   </div>
//                   <div className="text-lg font-semibold text-black">{label}</div>
//                 </div>
//               </Link>
//             ))}
//           </div>
//      </div>
//       {/* Success Stories Section */}
//       <SuccessStories successStories={successStories} />

//       {/* FAQ Section */}
//       <Faq faqs={faqs} />

//       {/* Appointment Consultation */}
//       <AppointmentConsultation appointmentSection={appointmentSection} />
//     </div>
//   );
// }
// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { layoutMap } from "@/data/departments/layoutMap";
// import SuccessStories from "@/components/layouts/layoutB/SuccessStories";
// import Faq from "@/components/layouts/layoutB/Faq";
// import AppointmentConsultation from "@/components/layouts/layoutB/AppointmentConsultation";
// import { FaSearch } from "react-icons/fa";
// import departmentsListPageContent from "@/data/departments/departmentsListContent";

// const { successStories, faqs, appointmentSection } = departmentsListPageContent;

// export default function DepartmentsListPage() {
//   const [searchTerm, setSearchTerm] = useState("");

//   const filteredDepartments = Object.entries(layoutMap).filter(([, value]) =>
//     value?.label?.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div>
//       <div className="max-w-7xl mx-auto py-10 px-4">
//         <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
//           Centres of Excellence
//         </h1>

//         {/* Search Bar */}
//         <div className="mb-8 flex justify-center">
//           <div className="flex items-center w-full max-w-xl rounded-full border-2 border-primary px-4 py-2 bg-white shadow-sm">
//             <FaSearch className="text-primary text-lg mr-3" />
//             <input
//               type="text"
//               placeholder="Search for Department"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full outline-none text-primary placeholder:text-primary font-medium text-base bg-transparent"
//             />
//           </div>
//         </div>

//         {/* Department Cards */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
//           {filteredDepartments.map(([slug, { label, icon: Icon }]) => (
//             <Link key={slug} href={`/departments/${slug}`}>
//               <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer">
//                 <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center text-2xl shrink-0">
//                   {Icon ? <Icon /> : <FaSearch />}
//                 </div>
//                 <div className="text-lg font-semibold text-black">{label}</div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Reusable Sections */}
//       <SuccessStories successStories={successStories} />
//       <Faq faqs={faqs} />
//       <AppointmentConsultation appointmentSection={appointmentSection} />
//     </div>
//   );
// }
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { layoutMap } from "@/data/departments/layoutMap";
import SuccessStories from "@/components/layouts/layoutB/SuccessStories";
import Faq from "@/components/layouts/layoutB/Faq";
import AppointmentConsultation from "@/components/layouts/layoutB/AppointmentConsultation";
import { FaSearch } from "react-icons/fa";
import departmentsListPageContent from "@/data/departments/departmentsListContent";

const { successStories, faqs, appointmentSection } = departmentsListPageContent;

export default function DepartmentsListPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDepartments = Object.entries(layoutMap).filter(([, value]) =>
    value?.label?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="max-w-7xl mx-auto py-10 px-4">
        <h1 className="text-3xl sm:text-4xl font-semibold text-black mb-6">
          Centres of Excellence
        </h1>

        {/* Search Bar */}
        <div className="mb-8 flex justify-center">
          <div className="flex items-center w-full max-w-xl rounded-full border-2 border-primary px-4 py-2 bg-white shadow-sm">
            <FaSearch className="text-primary text-lg mr-3" />
            <input
              type="text"
              placeholder="Search for Department"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full outline-none text-primary placeholder:text-primary font-medium text-base bg-transparent"
            />
          </div>
        </div>

        {/* Department Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {filteredDepartments.map(([slug, { label, icon, url }]) => (
  <Link key={slug} href={url}>
    <div className="flex items-center gap-4 p-4 rounded-xl shadow-md bg-white hover:shadow-lg transition cursor-pointer">
      <div className="bg-primary text-white rounded-full w-12 h-12 flex items-center justify-center shrink-0">
        {icon ? (
          <Image
            src={icon}
            alt={label}
            width={32}
            height={32}
            className="object-contain"
          />
        ) : (
          <FaSearch size={20} />
        )}
      </div>
      <div className="text-lg font-semibold text-black">{label}</div>
    </div>
  </Link>
))}

        </div>
      </div>

      {/* Reusable Sections */}
      <SuccessStories successStories={successStories} />
      <Faq faqs={faqs} />
      <AppointmentConsultation appointmentSection={appointmentSection} />
    </div>
  );
}
