// "use client";

// import React, { useState } from "react";

// const PhotoGrid = ({ photos }) => {
//   const ITEMS_PER_PAGE = 16;
//   const [currentPage, setCurrentPage] = useState(1);
//   const [lightboxPhoto, setLightboxPhoto] = useState(null);

//   const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
//   const currentPhotos = photos.slice(
//     (currentPage - 1) * ITEMS_PER_PAGE,
//     currentPage * ITEMS_PER_PAGE
//   );

//   const goToPage = (page) => {
//     if (page >= 1 && page <= totalPages) setCurrentPage(page);
//   };

//   return (
//     <section className="py-10 bg-gray-100">
//       <div className="max-w-7xl mx-auto px-4">
//         <h2 className="text-5xl font-bold mb-6 text-center">Photo Gallery</h2>

//         {/* Grid */}
//         <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
//           {currentPhotos.map((photo) => (
//             <div
//               key={photo.id}
//               className="relative overflow-hidden rounded-lg shadow cursor-pointer"
//               onClick={() => setLightboxPhoto(photo.url)}
//             >
//               <img
//                 src={photo.url}
//                 alt={photo.alt || "Photo"}
//                 loading="lazy"
//                 className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
//               />
//               {photo.alt && (
//                 <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2">
//                   {photo.alt}
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>

//         {/* Pagination */}
//         <div className="flex justify-center items-center mt-6 space-x-4">
//           <button
//             onClick={() => goToPage(currentPage - 1)}
//             disabled={currentPage === 1}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
//           >
//             Previous
//           </button>
//           <span className="text-lg font-medium">
//             Page {currentPage} of {totalPages}
//           </span>
//           <button
//             onClick={() => goToPage(currentPage + 1)}
//             disabled={currentPage === totalPages}
//             className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
//           >
//             Next
//           </button>
//         </div>
//       </div>

//       {/* Lightbox */}
//       {lightboxPhoto && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
//           onClick={() => setLightboxPhoto(null)}
//         >
//           <img src={lightboxPhoto} className="max-h-full max-w-full" />
//         </div>
//       )}
//     </section>
//   );
// };

// export default PhotoGrid;
"use client";

import React, { useState } from "react";

const PhotoGrid = ({ photos }) => {
  const ITEMS_PER_PAGE = 16;
  const [currentPage, setCurrentPage] = useState(1);
  const [lightboxPhoto, setLightboxPhoto] = useState(null);

  const totalPages = Math.ceil(photos.length / ITEMS_PER_PAGE);
  const currentPhotos = photos.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <section className="py-10 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-5xl font-bold mb-6 text-center">Photo Gallery</h2>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {currentPhotos.map((photo, index) => (
            <div
              key={photo.id || index}
              className="relative overflow-hidden rounded-lg shadow cursor-pointer"
              onClick={() => setLightboxPhoto(photo.url)}
            >
              <img
                src={photo.url}
                alt={photo.alt || `Photo ${index + 1}`}
                loading="lazy"
                className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
              />
              {/* {photo.alt && (
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white text-sm p-2 truncate">
                  {photo.alt}
                </div>
              )} */}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-lg font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightboxPhoto && (
        <div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setLightboxPhoto(null)}
        >
          <img
            src={lightboxPhoto}
            alt="Enlarged Photo"
            className="max-h-full max-w-full rounded"
          />
        </div>
      )}
    </section>
  );
};

export default PhotoGrid;
