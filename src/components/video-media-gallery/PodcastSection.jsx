"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const PodcastSection = ({ podcasts }) => {
  const [visibleCount, setVisibleCount] = useState(6); // Show first 6 initially

  const handleShowMore = () => {
    setVisibleCount((prev) => prev + 6); // Load 6 more
  };

  return (
    <section className="py-12 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
          Subscribe to SP Medifort Podcast
        </h2>

        {/* Intro Text */}
        <p className="text-black text-lg max-w-3xl mx-auto mb-6 leading-relaxed">
          Subscribe for engaging conversations with <strong>SP Medifort experts</strong> 
          as they discuss a wide range of health topics, from the intricacies of the human body to the latest innovations in healthcare.
        </p>

        {/* Divider */}
        <div className="w-16 h-1 bg-primary mx-auto mb-10"></div>

        {/* Podcast Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
         {(podcasts || []).slice(0, visibleCount).map((podcast, index) => (
  <Link
    key={index}
    href={`/videos-and-media-gallery/podcast/${podcast.slug}`} 
    className="block bg-white rounded-lg shadow hover:shadow-lg transition overflow-hidden"
  >
    <Image
      src={podcast.image_url || "/fallback-image.jpg"}
      alt={podcast.title || "Podcast"}
      width={400}
      height={250}
      className="w-full h-56 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-bold text-gray-900 mb-2">
        {podcast.title || "Untitled"}
      </h3>
      <p className="text-gray-600 text-sm">
        {podcast.short_content
          ? podcast.short_content.length > 100
            ? podcast.short_content.substring(0, 100) + "..."
            : podcast.short_content
          : ""}
      </p>
      <p className="text-gray-400 text-xs mt-2">
        {podcast.post_date || ""} • {podcast.read_time || ""}
      </p>
    </div>
  </Link>
))}
        </div>

        {/* Show More Button */}
        {visibleCount < podcasts.length && (
          <div className="mt-10">
            <button
              onClick={handleShowMore}
              className="bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-primary/90 transition"
            >
              Show More
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default PodcastSection;
