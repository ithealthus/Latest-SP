"use client";

import React, { useEffect, useState } from "react";

function PatientGrid() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/patient-testimonials`
        );
        if (!res.ok) throw new Error("Failed to fetch videos");
        const data = await res.json();

        console.log("API Response:", data);

        // If API returns an array directly
        if (Array.isArray(data)) {
          setVideos(data);
        }
        // If API returns { data: [...] }
        else if (data.data && Array.isArray(data.data)) {
          setVideos(data.data);
        } else {
          console.warn("Unexpected API response format:", data);
          setVideos([]);
        }
      } catch (err) {
        console.error("Error fetching videos:", err);
        setVideos([]);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  if (loading) {
    return <p className="text-center py-6">Loading videos...</p>;
  }

  if (videos.length === 0) {
    return <p className="text-center py-6 text-red-500">No videos found.</p>;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
        Patient Stories
      </h2>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow hover:shadow-lg overflow-hidden transition"
          >
            {/* YouTube Embed */}
            <div className="w-full aspect-video">
              <iframe
                width="100%"
                height="100%"
                src={video.youtube_url.replace("watch?v=", "embed/")}
                title={video.youtube_title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video Info */}
            <div className="p-4">
              <h3 className="text-base font-semibold mb-2 line-clamp-2">
                {video.youtube_title}
              </h3>
              <p className="text-sm text-gray-600 line-clamp-2">
                {video.youtube_description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PatientGrid;
