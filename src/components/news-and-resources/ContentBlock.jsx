import React from "react";
import Image from "next/image";
import { Check } from "lucide-react";

const ContentBlock = ({
  title,
  subtitle,
  description,
  listItems = [],
  buttonText,
  buttonLink = "#",
  image,
  imageLeft = false, // <-- controls layout
}) => {
  return (
    <section className="bg-pink-50 py-16 px-6 md:px-20">
      <div className="grid md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Text Content */}
        <div
          className={`space-y-4 ${imageLeft ? "md:order-2" : "md:order-1"}`}
        >
          {title && (
            <h2 className="text-3xl font-bold text-pink-900">{title}</h2>
          )}
          {subtitle && <p className="text-gray-700 text-lg">{subtitle}</p>}
          {description && <p className="text-gray-600">{description}</p>}

          {/* List */}
          {listItems.length > 0 && (
            <ul className="space-y-2 text-gray-700">
              {listItems.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <Check className="w-6 h-6 text-primary font-bold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {/* Button */}
          {buttonText && (
            <a
              href={buttonLink}
              className="inline-block mt-4 bg-gradient-to-r from-pink-900 to-pink-600 text-white px-6 py-3 rounded-full font-medium shadow-md hover:shadow-lg transition"
            >
              {buttonText}
            </a>
          )}
        </div>

        {/* Image */}
        {image && (
          <div
            className={`flex justify-center ${
              imageLeft ? "md:order-1" : "md:order-2"
            }`}
          >
            <Image
              src={image}
              alt={title || "content image"}
              width={500}
              height={350}
              className="rounded-xl shadow-lg object-cover"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default ContentBlock;
