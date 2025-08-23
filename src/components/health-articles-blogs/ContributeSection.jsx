import React from "react";
import Link from "next/link";
const ContributeSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-10 text-center">
        {/* Title */}
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
          Want to Contribute?
        </h2>

        {/* Subtitle */}
        <p className="text-gray-700 mb-6">
          Our patients, staff, and partners are welcome to share their health
          experiences.
        </p>

        {/* Email + Link */}
        <div className="mb-6">
          <p className="text-primary font-medium">blogs@spmedifort.com</p>
          <a
            href="#"
            className="text-primary underline hover:text-pink-800 transition"
          >
            Share Your Story
          </a>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/blog">
  <button className="bg-gradient-to-r from-pink-900 to-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition">
    Read All Blogs
  </button>
</Link>
          <button className="border border-pink-600 text-pink-700 px-6 py-3 rounded-full font-medium hover:bg-pink-50 transition">
            Subscribe to Updates
          </button>
        </div>
      </div>
    </section>
  );
};

export default ContributeSection;
