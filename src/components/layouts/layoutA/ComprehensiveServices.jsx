// 'use client';

// import React from 'react';
// import { Icon } from '@iconify/react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Pagination } from 'swiper/modules';
// import 'swiper/css';
// import 'swiper/css/pagination';

// function ComprehensiveServices({ comprehensiveCare }) {
//   if (!comprehensiveCare) return null;

//   const { title, subtitle, description, items } = comprehensiveCare;

//   return (
//     <section className="bg-white py-12 px-6 border-y border-primary">
//       <div className="max-w-5xl mx-auto space-y-8">
//         {/* Heading */}
//         <div className="text-left">
//           <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2">
//             {title}
//           </h2>
//           <p className="text-xl font-semibold text-accent mt-2">{subtitle}</p>
//           <p className="text-base text-gray-700 mt-4">{description}</p>
//         </div>

//         {/* Swiper Slider */}
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}
//           breakpoints={{
//             640: { slidesPerView: 1 },
//             768: { slidesPerView: 3 },
//             1024: { slidesPerView: 3 },
//           }}
//           pagination={{ clickable: true }}
//           modules={[Pagination]}
//           className="!px-2"
//         >
//           {items.map((item, index) => (
//             <SwiperSlide key={index}>
//               <div className="w-full bg-primary/5 p-6 rounded-xl border border-primary/10 h-full">
//                 <div className="flex items-center gap-3 mb-4">
//                   <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
//                     <Icon icon={item.icon} className="w-6 h-6" />
//                   </span>
//                   <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
//                 </div>
//                 <p className="text-sm text-purple">{item.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </section>
//   );
// }

// export default ComprehensiveServices;
'use client';

import React, { useEffect, useRef } from 'react';
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

function ComprehensiveServices({ comprehensiveCare }) {
  if (!comprehensiveCare) return null;

const { title, subtitle, description, items } = comprehensiveCare;

  const cardRefs = useRef([]);

  // Equal height logic
  useEffect(() => {
    if (!cardRefs.current) return;
    let maxHeight = 0;
    cardRefs.current.forEach(card => {
      if (card) {
        card.style.height = 'auto';
        maxHeight = Math.max(maxHeight, card.offsetHeight);
      }
    });
    cardRefs.current.forEach(card => {
      if (card) card.style.height = `${maxHeight}px`;
    });
  }, [items]);

  return (
    <section className="bg-white py-12 px-6 border-y border-primary">
      <div className="max-w-6xl mx-auto space-y-8 relative">
        {/* Header */}
        <div className="text-left">
          <h2 className="text-primary font-title text-3xl md:text-4xl font-semibold mb-2">
            {title}
          </h2>
          {subtitle && (
            <p className="text-xl font-semibold text-accent mt-2">{subtitle}</p>
          )}
          {description && (
            <p className="text-base text-gray-700 mt-4">{description}</p>
          )}
        </div>

        {/* Swiper with Autoplay + Navigation */}
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          speed={800} // smooth animation
          autoplay={{
            delay: 3000, // 3 seconds
            disableOnInteraction: false,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          modules={[Navigation, Autoplay]}
          className="!px-2"
        >
          {items?.map((item, index) => (
            <SwiperSlide key={index}>
              <div
                ref={el => (cardRefs.current[index] = el)}
                className="w-full bg-primary/5 p-6 rounded-xl border border-primary/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <span className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Icon icon={item.icon} className="w-6 h-6" />
                  </span>
                  <h3 className="text-lg font-semibold text-primary">{item.title}</h3>
                </div>
                <p className="text-sm text-purple">{item.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Navigation Arrows */}
        <div className="absolute top-[60%] -left-6 lg:-left-8 z-10 swiper-button-prev-custom cursor-pointer">
          <Icon icon="ic:round-arrow-back-ios" className="text-primary w-8 h-8" />
        </div>
        <div className="absolute top-[60%] -right-6 lg:-right-8 z-10 swiper-button-next-custom cursor-pointer">
          <Icon icon="ic:round-arrow-forward-ios" className="text-primary w-8 h-8" />
        </div>
      </div>
    </section>
  );
}

export default ComprehensiveServices;
