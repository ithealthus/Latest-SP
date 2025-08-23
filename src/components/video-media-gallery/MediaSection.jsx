import React from "react";
import { Youtube, Camera, Podcast, Instagram, Linkedin } from "lucide-react";

const MediaSection = () => {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-20 text-center">
      {/* Section Title */}
      <h2 className="text-3xl font-bold text-pink-900 mb-10">Explore Our Media</h2>

      {/* Content Cards */}
<div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
  {/* Video Categories */}
  <div className="bg-white rounded-xl shadow-md p-6 text-left transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-pink-700 mb-4">Popular Video Categories</h3>
    <ul className="space-y-2 text-gray-700">
      <li><span className="font-semibold">Doctor Talks:</span> Condition explainers & health awareness</li>
      <li><span className="font-semibold">Patient Testimonials:</span> Real people, real outcomes</li>
      <li><span className="font-semibold">Hospital Infrastructure:</span> Virtual walkthroughs & OT tours</li>
      <li><span className="font-semibold">Events & CSR:</span> Camps, blood drives, workshops</li>
      <li><span className="font-semibold">Press & Media:</span> Conferences and interviews</li>
    </ul>
  </div>

  {/* Photo Highlights */}
  <div className="bg-white rounded-xl shadow-md p-6 text-left transform transition duration-300 hover:-translate-y-2 hover:shadow-xl">
    <h3 className="text-lg font-semibold text-pink-700 mb-4">Photo Gallery Highlights</h3>
    <ul className="space-y-2 text-gray-700 list-disc pl-5">
      <li>New ICU wing inauguration</li>
      <li>Women’s Day Health Camp</li>
      <li>Academic workshop snapshots</li>
      <li>Robotic surgery demo day</li>
    </ul>
  </div>
</div>


      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mt-10">
        <a
          href="/videos-and-media-gallery/videos-albums"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          🎥 Watch All Videos
        </a>
        <a
          href="/videos-and-media-gallery/photo-album"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          📸 Browse Photo Albums
        </a>
        <a
          href="https://www.youtube.com/@spmedifort"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          <Youtube className="w-5 h-5" /> YouTube
        </a>
        <a
          href="/videos-and-media-gallery/podcast"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          <Podcast className="w-5 h-5" /> Podcast
        </a>
        <a
          href="https://www.instagram.com/spmedifort/"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          <Instagram className="w-5 h-5" /> Instagram
        </a>
        <a
          href="https://in.linkedin.com/company/sp-medifort-hospital"
          className="flex items-center gap-2 bg-pink-800 text-white px-5 py-2 rounded-md shadow hover:bg-pink-700 transition"
        >
          <Linkedin className="w-5 h-5" /> LinkedIn
        </a>
      </div>
    </section>
  );
};

export default MediaSection;
