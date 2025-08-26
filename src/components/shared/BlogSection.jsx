"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function BlogSection() {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/blogs-latest`);
        const data = await res.json();
        setBlogData(data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section className="bg-pink-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">What's New at SP Medifort?</h2>
      <p className="text-gray-600 mt-2 mb-10">Stay up to date with news from our doctors and medical team.</p>

      {loading ? (
        <p className="text-gray-500">Loading blogs...</p>
      ) : blogData.length === 0 ? (
        <p className="text-gray-500">No blogs available.</p>
      ) : (
        <div className="grid gap-6 md:grid-cols-3 max-w-5xl items-center mx-auto">
          {blogData.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-left">
              <div className="relative w-full h-56">
                <Image
                  src={blog.image_url || "/images/fallback.webp"}
                  alt={blog.title}
                  layout="fill"
                  objectFit="cover"
                />
              </div>
              <div className="p-4">
                <p className="text-xs text-black mb-1">{blog.post_date}</p>
                <p className="text-xs text-gray-500 mb-2">{blog.read_time}</p>
                <h3 className="text-base font-semibold text-black mb-4">{blog.title}</h3>
                <Link
                  href={`/blog/${blog.slug}`}
                  className="text-sm text-primary font-medium flex items-center gap-2 group"
                >
                  Know More
                  <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <svg
                      className="w-3.5 h-3.5 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mt-10">
        <Link
          href="/blog"
          className="inline-block px-6 py-2 bg-primary text-white rounded-full hover:bg-accent transition"
        >
          View All Blogs
        </Link>
      </div>
    </section>
  );
}
