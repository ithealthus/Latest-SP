"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const ArticleSection = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/blogs`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch blogs: ${res.status}`);
        }
        const data = await res.json();

        const formatted = data
          .sort((a, b) => new Date(b.post_date) - new Date(a.post_date))
          .slice(0, 3)
          .map((item) => ({
            id: item.id,
            slug: item.slug, // make sure your API returns slug
            image: item.image_url,
            title: item.title,
            date: item.post_date,
            author: item.author || "SP Medifort",
          }));

        setArticles(formatted);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="py-16 px-6 md:px-20 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-pink-900 mb-12">
        Featured Blogs
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading articles...</p>
      ) : (
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {articles.map((article) => (
            <Link key={article.id} href={`/blog/${article.slug}`}>
              <div className="bg-white rounded-2xl shadow-md overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:scale-105 hover:border-primary hover:border-2 cursor-pointer">
                <div className="relative w-full h-52">
                  <Image
                    src={article.image || "/fallback-image.jpg"}
                    alt={article.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-2xl"
                  />
                </div>

                <div className="px-5 mt-3">
                  <span className="inline-block bg-primary text-white text-md md:text-md font-semibold px-3 py-1 rounded-md shadow-md">
                    Blog
                  </span>
                </div>

                <div className="p-5 hover:bg-primary hover:text-white transition-colors duration-300">
                  <h3 className="text-lg font-semibold mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-sm">
                    <span className="font-medium">Post Date :</span> {article.date}
                  </p>
                  <p className="text-sm">
                    <span className="font-medium">Author :</span> {article.author}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
};

export default ArticleSection;
