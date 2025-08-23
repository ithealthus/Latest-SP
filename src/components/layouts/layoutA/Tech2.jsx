// 'use client';
// import React, { useState } from 'react';

// export default function Tech2({ data }) {
//   const { title, categoryTabs, items } = data;

//   // state for category selection
//   const [selectedCategory, setSelectedCategory] = useState(0);
//   // state for technology selection inside category
//   const [selectedIndex, setSelectedIndex] = useState(0);

//   return (
//     <section className="bg-secondary px-4 md:px-12 py-16">
//       <div className="max-w-6xl mx-auto">
//         {/* Title */}
//         <h2 className="text-white font-roboto text-2xl sm:text-3xl md:text-4xl font-semibold mb-8">
//           {title}
//         </h2>

//         {/* Category Tabs */}
//         <div className="flex flex-wrap gap-3 mb-8">
//           {categoryTabs.map((tab, idx) => (
//             <button
//               key={idx}
//               onClick={() => {
//                 setSelectedCategory(idx);
//                 setSelectedIndex(0); // reset to first tech when switching category
//               }}
//               className={`px-4 py-2 rounded-full border-2 font-semibold transition-all duration-200
//                 ${
//                   idx === selectedCategory
//                     ? 'bg-primary text-white border-primary shadow-md'
//                     : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
//                 }`}
//             >
//               {tab}
//             </button>
//           ))}
//         </div>

//         <div className="flex flex-col lg:flex-row gap-8">
//           {/* Technology Buttons */}
//           <div className="w-full lg:w-1/2">
//             <div className="flex flex-wrap gap-2 sm:gap-3">
//               {items[selectedCategory].map((tech, idx) => (
//                 <button
//                   key={idx}
//                   onClick={() => setSelectedIndex(idx)}
//                   className={`text-xs sm:text-base h-10 sm:h-12 px-4 sm:px-5 rounded-full border-2 font-semibold transition-all duration-200
//                     ${
//                       idx === selectedIndex
//                         ? 'bg-primary text-white border-primary shadow-md'
//                         : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
//                     }`}
//                 >
//                   {tech.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Description */}
//           <div className="lg:w-1/2 w-full">
//             <div className="bg-white p-8 rounded-3xl shadow-md border border-accent/30 h-full">
//               <h3 className="text-2xl text-primary font-semibold mb-3">
//                 {items[selectedCategory][selectedIndex].name}
//               </h3>
//               <p className="text-lg text-black font-roboto">
//                 {items[selectedCategory][selectedIndex].description}
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';
import React, { useState } from 'react';

export default function Tech2({ data }) {
  const { title, categoryTabs, items } = data;

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="bg-secondary px-4 md:px-12 py-16">
      <div className="max-w-6xl mx-auto">
        {/* Title and Category Toggle */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <h2 className="text-white font-roboto text-2xl sm:text-3xl md:text-4xl font-semibold">
            {title}
          </h2>

          {/* Pill Toggle */}
          <div className="bg-accent rounded-full p-1 flex border-2 border-primary">
            {categoryTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedCategory(idx);
                  setSelectedIndex(0); // reset to first tech when switching category
                }}
                className={`px-4 py-2 rounded-full font-semibold transition-all duration-200 b
                  ${
                    idx === selectedCategory
                      ? 'bg-primary text-white shadow-md'
                      : 'text-white hover:bg-primary hover:text-white'
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Technology Buttons */}
          <div className="w-full lg:w-1/2">
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {items[selectedCategory].map((tech, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedIndex(idx)}
                  className={`text-xs sm:text-base h-10 sm:h-12 px-4 sm:px-5 rounded-full border-2 font-semibold transition-all duration-200 
                    ${
                      idx === selectedIndex
                        ? 'bg-primary text-white border-primary shadow-md'
                        : 'bg-white text-primary border-primary hover:bg-primary hover:text-white'
                    }`}
                >
                  {tech.name}
                </button>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-white p-8 rounded-3xl shadow-md border border-accent/30 h-full">
              <h3 className="text-2xl text-primary font-semibold mb-3">
                {items[selectedCategory][selectedIndex].name}
              </h3>
              <p className="text-lg text-black font-roboto">
                {items[selectedCategory][selectedIndex].description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
