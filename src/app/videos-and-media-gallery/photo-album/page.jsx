// import React from "react";
// import Hero from "@/components/health-articles-blogs/Hero";
// import PhotoGrid from "@/components/video-media-gallery/PhotoGrid";

// function Page() {
//   // Example video data (You can fetch this dynamically from an API later)
  
// const photos = Array.from({ length: 50 }).map((_, index) => ({
//   url: `https://picsum.photos/400/300?random=${index}`,
//   title: `Photo ${index + 1}`,
// }));
//   return (
//     <div>
//       <Hero
//         breadcrumb="Home > Videos & Media Gallery > Photo Gallery"
//         title="Photo Gallery"
//         image="/images/blog/blog10.webp" // image in public/images
//       />

//        <PhotoGrid photos={photos} />
//     </div>
//   );
// }

// export default Page;
"use client";
import React, { useEffect, useState } from "react";
import Hero from "@/components/health-articles-blogs/Hero";
import PhotoGrid from "@/components/video-media-gallery/PhotoGrid";

function Page() {
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        const res = await fetch(
          `${process.env.NEXT_PUBLIC_API_BLOGS}/wp-json/custom-api/v1/photos-albums`
        );
        if (!res.ok) throw new Error(`Failed to fetch photos: ${res.status}`);

        const data = await res.json();
        console.log(data); // check API structure

        // Map API response to PhotoGrid props
        const formatted = data.map((item) => ({
          url: item.url || "",
          alt: item.alt || "Photo",
        }));

        setPhotos(formatted);
      } catch (err) {
        console.error("Error fetching photos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotos();
  }, []);

  return (
    <div>
      <Hero
        breadcrumb="Home > Videos & Media Gallery > Photo Gallery"
        title="Photo Gallery"
        image="/images/blog/blog8.webp"
      />

      {loading ? (
        <p className="text-center py-10 text-gray-600">Loading photos...</p>
      ) : (
        <PhotoGrid photos={photos} />
      )}
    </div>
  );
}

export default Page;
