// "use client";
// import React, { useEffect, useState } from "react";
// import Hero from "@/components/health-articles-blogs/Hero";
// import BlogCarousel from "@/components/Blogs/BlogCarousel";

// function Page() {
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchNews = async () => {
//       try {
//         const res = await fetch(`${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/news `);
//         if (!res.ok) throw new Error("Failed to fetch news");
//         const data = await res.json();

//         // Map API data to match BlogCarousel expected structure
//         const formattedBlogs = data.map((item) => ({
//           id: item.id,
//           title: item.title,
//           date: item.post_date,
//           author: item.author || "SP Medifort",
//           image: item.image_url,
//           category: "news",
//         }));

//         setBlogs(formattedBlogs);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchNews();
//   }, []);

//   return (
//     <div>
//       <Hero
//         breadcrumb="Home > News & Resources"
//         title="News & Resources"
//         subtitle="Stay Informed. Stay Healthy."
//         description="At SP Medifort, we go beyond treatment. We empower you with the latest in health education, hospital milestones, and expert insights. From wellness blogs and patient stories to cutting-edge medical updates and doctor-led video explainers, everything you need to take charge of your health is right here."
//         image="/images/blog/blog1.webp"
//       />

//       {loading ? (
//         <p className="text-center py-10">Loading news...</p>
//       ) : (
//         <BlogCarousel data={blogs} />
//       )}
//     </div>
//   );
// }

// export default Page;
"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/health-articles-blogs/Hero";
import BlogCarousel from "@/components/Blogs/BlogCarousel";

function Page() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/news`
        );
        if (!res.ok) throw new Error("Failed to fetch news");
        const data = await res.json();

        // Map API data to BlogCarousel structure
        const formattedBlogs = data.map((item) => ({
          id: item.id,
          slug: item.slug || item.id, // use slug if available
          title: item.title,
          date: item.post_date,
          author: item.author || "SP Medifort",
          image: item.image_url,
          category: "news",
        }));

        setBlogs(formattedBlogs);
      } catch (error) {
        console.error("Error fetching news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div>
      <Hero
        breadcrumb="Home > News & Resources"
        title="News & Resources"
        subtitle="Stay Informed. Stay Healthy."
        description="At SP Medifort, we go beyond treatment. We empower you with the latest in health education, hospital milestones, and expert insights."
        image="/images/blog/blog1.webp"
      />

      {loading ? (
        <p className="text-center py-10">Loading news...</p>
      ) : (
        <BlogCarousel data={blogs} />
      )}
    </div>
  );
}

export default Page;
