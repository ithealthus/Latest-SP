import React from "react";

const VideoCard = ({ video }) => {
  const url = video?.url || ""; // ensure url is a string
  const isYouTube = url.includes("youtube.com") || url.includes("youtu.be");

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden hover:shadow-lg transition">
      {/* Video Container with 16:9 ratio */}
      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        {url ? (
          isYouTube ? (
            <iframe
              src={url}
              title={video.title || "Untitled Video"}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full"
            ></iframe>
          ) : (
            <video
              controls
              className="absolute top-0 left-0 w-full h-full object-cover"
              src={url}
            ></video>
          )
        ) : (
          <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center">
            <span className="text-gray-500">No video available</span>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">{video.title || "Untitled Video"}</h3>
        <p className="text-gray-600 text-sm">{video.description || "No description available."}</p>
      </div>
    </div>
  );
};

export default VideoCard;
