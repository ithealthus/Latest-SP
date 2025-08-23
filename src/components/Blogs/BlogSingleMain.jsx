"use client";

import React, { useEffect, useState } from "react";
import { Clock } from "lucide-react";

const BlogSingleMain = ({ slug }) => {
  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/blog/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch blog");

        const data = await res.json();
        setBlog(data || {}); // ✅ fallback empty object
      } catch (err) {
        console.error("Error fetching blog:", err);
        setBlog({});
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);


  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 animate-pulse">
        <div className="w-full h-[400px] bg-gray-300 rounded-lg"></div>
        <div className="mt-6 h-6 bg-gray-300 rounded w-3/4"></div>
        <div className="mt-4 h-4 bg-gray-200 rounded w-full"></div>
      </div>
    );
  }

  // Agar blog me title na ho to "Blog not found"
  if (!blog || !blog.title) {
    return <p className="text-center py-12 text-red-500">Blog not found</p>;
  }

  return (
    <section className="w-full">
      {/* Hero Image */}
      <div className="bg-[#F3DEDE]">
        <div className="relative top-28 md:top-48 max-w-7xl mx-auto h-full p-4">
          <img
            src={blog.image_url || "/fallback-image.jpg"}
            alt={blog.title || "Blog image"}
            className="w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute hidden lg:block inset-0 bg-black bg-opacity-30"></div>

          {/* Title */}
          <div className="hidden lg:flex absolute bottom-16 justify-center px-4">
            <h1 className="text-white text-center font-bold text-2xl md:text-4xl max-w-4xl leading-snug">
              {blog.title || ""}
            </h1>
          </div>

          {/* Blue underline */}
          <div className="hidden lg:block absolute bottom-14 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-blue-500"></div>
        </div>
      </div>

      {/* Meta Info */}
      <div className="max-w-4xl mx-auto pt-28 md:pt-48 px-4 py-4 flex flex-wrap gap-4 text-gray-500 text-sm items-center border-b border-gray-200 pb-4 mt-2">
        <span>
          by{" "}
          <span className="font-medium text-gray-800">
            {blog.author || "Joanna Wellick"}
          </span>
        </span>
        <span className="flex items-center gap-1">
          <Clock size={14} /> {blog.read_time || "2 minute read"}
        </span>
      </div>

      {/* Content */}<div className="max-w-6xl mx-auto">
        <div className="prose prose-blue max-w-none px-4 py-8">

          <h1>{blog.title || ""}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: blog.full_content || "<p>No content available.</p>",
            }}
          />
        </div>
      </div>
    </section>
  );
};

export default BlogSingleMain;