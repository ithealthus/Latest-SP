// components/BlogSection.jsx
import Image from "next/image";
import Link from "next/link";

const blogData = [
  {
    title: "SP Medifort has introduced Kerala’s first Robotic Brain Surgery Unit",
    date: "12-05-2025",
    image: "/images/img4.webp",
    link: "#"
  },
  {
    title: "6 Lifestyle Changes to Protect Your Heart",
    date: "12-05-2025",
    image: "/images/img5.webp",
    link: "#"
  },
  {
    title: "Join us in May 2025 for a free health camp for all",
    date: "12-05-2025",
    image: "/images/img6.webp",
    link: "#"
  }
];

export default function BlogSection() {
  return (
    <section className="bg-pink-50 py-16 px-4 text-center">
      <h2 className="text-3xl font-semibold text-gray-900">What's New at SP Medifort?</h2>
      <p className="text-gray-600 mt-2 mb-10">Stay up to date with news from our doctors and medical team.</p>

      <div className="grid gap-6 md:grid-cols-3 max-w-5xl items-center mx-auto">
        {blogData.map((blog, index) => (
          <div key={index} className="bg-white rounded-xl shadow-md overflow-hidden text-left">
            <div className="relative w-full h-56">
              <Image
                src={blog.image}
                alt={blog.title}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="p-4">
              <p className="text-xs text-black mb-2">Published on {blog.date}</p>
              <h3 className="text-base font-semibold text-black mb-4">{blog.title}</h3>
              <a href={blog.link} className="text-sm text-primary font-medium flex items-center gap-2 group">
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
              </a>
            </div>
          </div>
        ))}
      </div>

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
