// src/components/ui/carousel.jsx
'use client';

import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';

export const Carousel = ({ children, className }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true });

  return (
    <div className={className}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">{children}</div>
      </div>
    </div>
  );
};

export const CarouselContent = ({ children }) => {
  return <>{children}</>;
};

export const CarouselItem = ({ children, className }) => {
  return <div className={`shrink-0 w-full ${className}`}>{children}</div>;
};
