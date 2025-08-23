import React from "react";
import PodcastSingle from "@/components/video-media-gallery/PodcastSingle";

export default function Page({ params }) {
  const { slug } = params;

  return (
    <div>
      <PodcastSingle slug={slug} />
    </div>
  );
}
