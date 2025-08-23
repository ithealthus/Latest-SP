// import React from "react";
// import { Play } from "lucide-react";

// const VideoBlock = ({
//   videoUrl, // YouTube embed link
//   title,
//   topic,
//   description,
//   buttonText = "Watch Now",
//   buttonLink = "#",
//   videoLeft = true, // switch layout
// }) => {
//   return (
//     <section className="bg-pink-50 py-16 px-6 md:px-20">
//       <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
//         {/* Video */}
//         <div
//           className={`w-full h-[250px] md:h-[315px] ${
//             videoLeft ? "md:order-1" : "md:order-2"
//           }`}
//         >
//           <iframe
//             width="100%"
//             height="100%"
//             src={videoUrl}
//             title={title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             className="rounded-xl shadow-lg"
//           ></iframe>
//         </div>

//         {/* Text Content */}
//         <div
//           className={`space-y-4 ${videoLeft ? "md:order-2" : "md:order-1"}`}
//         >
//           {title && (
//             <h2 className="text-2xl font-semibold text-pink-900">{title}</h2>
//           )}
//           {topic && (
//             <p className="text-gray-700">
//               <span className="font-semibold">Topic:</span> {topic}
//             </p>
//           )}
//           {description && <p className="text-gray-600">{description}</p>}

//           {/* Button */}
//           <a
//             href={buttonLink}
//             className="inline-flex items-center gap-2 bg-pink-800 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
//           >
//             <Play className="w-5 h-5" />
//             {buttonText}
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default VideoBlock;
import React from "react";
import { Play } from "lucide-react";

const VideoBlock = ({
  videoUrl,
  title,
  topic,
  buttonText,
  buttonLink = "#",
  videoLeft = true,
}) => {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-20">
      <div
        className={`grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto ${
          videoLeft ? "" : "md:flex-row-reverse"
        }`}
      >
        {/* Video */}
        <div className="flex justify-center">
          <iframe
            width="100%"
            height="315"
            src={videoUrl}
            title={title || "YouTube video player"}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>

        {/* Text Content */}
        <div className="space-y-4">
          {title && (
            <h2 className="text-2xl font-bold text-pink-900">{title}</h2>
          )}
          {topic && (
            <p className="text-gray-700">
              <span className="font-semibold text-gray-800">Topic:</span> {topic}
            </p>
          )}

          {buttonText && (
            <a
              href={buttonLink}
              className="inline-flex items-center gap-2 mt-4 bg-pink-800 hover:bg-pink-700 text-white px-6 py-3 rounded-full font-medium shadow-md transition"
            >
              <Play className="w-5 h-5" />
              {buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default VideoBlock;
