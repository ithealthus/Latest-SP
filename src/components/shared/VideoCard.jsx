import React from 'react';

const VideoCard = ({ src, poster, title, name, quote, tall = false }) => {
  return (
    <div
      className={`relative rounded-2xl overflow-hidden shadow-xl w-full group ${
        tall ? 'md:row-span-2 md:h-[440px] h-[380px]' : 'aspect-[3/4]'
      }`}
    >
      {/* Video */}
      <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
        >
          <source src={src} type="video/mp4" />
        </video>

      {/* Gradient Overlay */}
      <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent px-4 py-3 text-white">
        {/* {quote ? (
          <p className="text-sm italic leading-snug">
            “{quote}”
            <br />
            <span className="text-xs font-light">- {name}</span>
          </p>
        ) : (
          <>
            <p className="text-sm font-semibold">{title}</p>
            <p className="text-xs">{name}</p>
          </>
        )} */}
      </div>
    </div>
  );
};

export default VideoCard;
