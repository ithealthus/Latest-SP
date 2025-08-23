"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/health-articles-blogs/Hero";
import PodcastSection from "@/components/video-media-gallery/PodcastSection";

const Page = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPodcasts = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/podcasts`);
        if (!res.ok) throw new Error("Failed to fetch podcasts");
        const data = await res.json();
        setPodcasts(data);
      } catch (err) {
        console.error("Error fetching podcasts:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPodcasts();
  }, []);

  if (loading) return <p className="text-center py-10">Loading podcasts...</p>;
  if (podcasts.length === 0) return <p className="text-center py-10">No podcasts available.</p>;

  return (
    <div>
      <Hero
        breadcrumb="Home > Podcast"
        title="Health & Wellness Podcasts"
        subtitle="Listen to Expert Insights Anytime"
        tagline="Your health journey, now in audio form"
        description="Explore our collection of health and wellness podcasts designed to keep you informed, inspired, and motivated. Tune in for expert advice, fitness tips, nutrition guides, and real stories from people like you."
        image="/images/blog/blog10.webp"
      />

      <PodcastSection podcasts={podcasts} />
    </div>
  );
};

export default Page;
