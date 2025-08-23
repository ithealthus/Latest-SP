"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/health-articles-blogs/Hero";
import VideoGrid from "@/components/video-media-gallery/VideoGrid";

function Page() {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/videos-albums`);
        if (!res.ok) throw new Error(`Failed to fetch videos: ${res.status}`);

        const data = await res.json();
        console.log(data); // check keys

        // map API data correctly
        const formatted = data.map((item) => ({
          url: item.youtube_url || "", // matches API
          title: item.youtube_title || "Untitled Video",
          description: item.youtube_description || "No description available",
        }));

        setVideos(formatted);
      } catch (err) {
        console.error("Error fetching videos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, []);

  return (
    <div>
      <Hero
        breadcrumb="Home > Videos & Media Gallery > Videos & Media"
        title="Videos & Media"
        image="/images/blog/blog10.webp"
      />

      {loading ? (
        <p className="text-center py-10 text-gray-600">Loading videos...</p>
      ) : (
        <VideoGrid videos={videos} />
      )}
    </div>
  );
}

export default Page;
