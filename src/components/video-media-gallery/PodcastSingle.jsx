"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import Link from "next/link";

const PodcastSingleMain = ({ slug }) => {
  const [podcast, setPodcast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!slug) return;

    const fetchPodcast = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/podcasts/${slug}`
        );
        if (!res.ok) throw new Error("Failed to fetch podcast");
        const data = await res.json();
        setPodcast(data || {});

        // Fetch related podcasts (simplest way: same endpoint returning list)
        const relatedRes = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/podcasts`
        );
        if (relatedRes.ok) {
          const relatedData = await relatedRes.json();
          setRelated(relatedData.filter(p => p.slug !== slug).slice(0, 3));
        }
      } catch (err) {
        console.error("Error fetching podcast:", err);
        setPodcast({});
      } finally {
        setLoading(false);
      }
    };

    fetchPodcast();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading podcast...</p>;
  if (!podcast || !podcast.title) return <p className="text-center py-10 text-red-500">Podcast not found</p>;

  return (
<section className="w-full">
  {/* Top Section with Extended Background */}
  <div className="bg-[#F3DEDE] relative h-[250px] sm:h-[350px] md:h-[500px]">
    <div className="max-w-7xl mx-auto px-4">
      {/* Breadcrumb */}
      <nav
        className="text-sm sm:text-base md:text-xl text-primary mb-4 border-2 border-primary rounded-md px-2 sm:px-3 py-1 inline-block bg-white mt-8 sm:mt-8 md:mt-24"
        aria-label="Breadcrumb"
      >
        <ol className="flex items-center space-x-1 sm:space-x-2">
          <li>
            <Link href="/" className="hover:underline">
              Home
            </Link>
          </li>
          <li>
            <span>&gt;</span>
          </li>
          <li>
            <span className="font-semibold">Podcast</span>
          </li>
        </ol>
      </nav>

      {/* Title */}
      <h1 className="text-xl sm:text-2xl md:text-4xl font-bold text-primary mb-6 leading-snug">
        {podcast.title}
      </h1>
    </div>
  </div>

  {/* Video Player with Overlap */}
  {podcast.video_url && (
    <div className="relative max-w-7xl mx-auto px-4 -mt-28 sm:-mt-32 md:-mt-64 z-10">
      <div className="w-full aspect-video rounded-lg overflow-hidden shadow-lg">
        <iframe
          width="100%"
          height="100%"
          src={podcast.video_url.replace("watch?v=", "embed/")}
          title={podcast.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  )}

  {/* Bottom Section (White Background) */}
  <div className="max-w-7xl mx-auto px-4 mt-6 md:mt-8">
    {/* Content */}
    <div className="prose max-w-full mb-8 sm:mb-12 p-4 sm:p-6 bg-white rounded-lg shadow">
      <div
        dangerouslySetInnerHTML={{
          __html: podcast.content || "<p>No content available.</p>",
        }}
      />
    </div>

    {/* Related Podcasts */}
    {related.length > 0 && (
      <div className="bg-white p-4 sm:p-6 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <h2 className="text-lg sm:text-xl font-bold">Related Podcasts</h2>
          <Link href="/podcasts" className="text-primary hover:underline text-sm sm:text-base mt-2 sm:mt-0">
            Show More &gt;
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
          {related.map((p, index) => (
            <Link
              key={index}
              href={`/podcast/${p.slug}`}
              className="block rounded shadow hover:shadow-lg overflow-hidden bg-gray-50"
            >
              <div className="w-full aspect-video bg-gray-100">
                {p.video_url && (
                  <iframe
                    width="100%"
                    height="100%"
                    src={p.video_url.replace("watch?v=", "embed/")}
                    title={p.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              <div className="p-2">
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="text-xs text-gray-500">
                  {p.read_time || "1 min read"}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    )}
  </div>
</section>



  );
};

export default PodcastSingleMain;
