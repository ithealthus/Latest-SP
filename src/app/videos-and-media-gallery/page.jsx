import React from 'react';
import Hero from '@/components/health-articles-blogs/Hero';
import VideoBlock from '@/components/video-media-gallery/VideoBlock';
import MediaSection from '@/components/video-media-gallery/MediaSection';
function Page() {
  return (
    <div>
      <Hero
        breadcrumb="Home > Videos & Media Gallery"
        title="Videos & Media
Gallery"
        subtitle="See SP Medifort in Action , Through the Lens of Healing"
        description="From advanced robotic surgeries and doctor explainers to patient journeys and hospital
events, explore our video library and image gallery."
        image="/images/blog/blog9.webp" // put an image inside public/images
      />
      <VideoBlock
  videoUrl="https://www.youtube.com/embed/2YuTBNkgLEI?si=DS_q_ZWB1DKV8k2w"
  title="Patient Experience"
  topic="How Versius is revolutionizing minimally invasive surgeries in oncology."
  buttonText="Watch Now"
  buttonLink="https://www.youtube.com/@spmedifort"
  videoLeft={true}
/>

    <MediaSection />
    </div>
  );
}

export default Page;
