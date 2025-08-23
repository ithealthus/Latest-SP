"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";

const Page = ({ params }) => {
  const { slug } = params;
  const [news, setNews] = useState(null);
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch main news
        const resNews = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/news/${slug}`
        );
        if (!resNews.ok) throw new Error("Failed to fetch main news");
        const dataNews = await resNews.json();
        setNews({
          title: dataNews.title,
          date: dataNews.post_date,
          author: dataNews.author || "SP Medifort",
          content: dataNews.full_content || dataNews.content,
          image: dataNews.image_url,
          readTime: dataNews.read_time || "1 minute read",
        });

        // Fetch related news
        const resRelated = await fetch(
          `https://spmedifort.com/masterlogin/wp-json/custom-api/v1/news-related/${slug}`
        );
        if (!resRelated.ok) throw new Error("Failed to fetch related news");
        const dataRelated = await resRelated.json();
        const formattedRelated = dataRelated.map((item) => ({
          id: item.id,
          title: item.title,
          slug: item.slug,
          image: item.image_url,
          date: item.post_date,
        }));
        setRelatedNews(formattedRelated);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [slug]);

  if (loading) return <p className="text-center py-10">Loading news...</p>;
  if (!news) return <p className="text-center py-10">News not found.</p>;

  return (
    <div>
      {/* Main News Section */}
      <section className="w-full">
        {/* Hero Image */}
        <div className="bg-[#F3DEDE]">
          <div className="relative top-28 md:top-48 max-w-7xl mx-auto h-full p-4">
            <img
              src={news.image || "/fallback-image.jpg"}
              alt={news.title || "News image"}
              className="w-full h-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute hidden lg:block inset-0 bg-black bg-opacity-30"></div>

            {/* Title */}
            <div className="hidden lg:flex absolute bottom-16 justify-center px-4">
              <h1 className="text-white text-center font-bold text-2xl md:text-4xl max-w-4xl leading-snug">
                {news.title}
              </h1>
            </div>

            {/* Blue underline */}
            <div className="hidden lg:block absolute bottom-14 left-1/2 -translate-x-1/2 w-24 h-[2px] bg-blue-500"></div>
          </div>
        </div>

        {/* Meta Info */}
        <div className="max-w-4xl mx-auto pt-28 md:pt-48 px-4 py-4 flex flex-wrap gap-4 text-gray-500 text-sm items-center border-b border-gray-200 pb-4 mt-2">
          <span>
            by <span className="font-medium text-gray-800">{news.author}</span>
          </span>
          <span className="flex items-center gap-1">
            <Clock size={14} /> {news.readTime}
          </span>
        </div>

        {/* Content */}
        <div className="max-w-6xl mx-auto">
          <div className="prose prose-blue max-w-none px-4 py-8">
            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-10">
          <h2 className="text-3xl font-bold mb-6">Related News</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {relatedNews.map((item) => (
              <Link
                key={item.id}
                href={`/latest-news-update/${item.slug}`}
                className="block rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-500">{item.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Page;
