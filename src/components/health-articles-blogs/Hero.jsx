import React from "react";
import Image from "next/image";
import Link from "next/link";

function Hero({ breadcrumb, title, subtitle, image }) {
  return (
    <section className="relative w-full h-[40vh] md:h-[60vh] flex items-center justify-center text-center">
      {/* Background Image */}
      {image && (
        <Image
          src={image}
          alt={title || "hero background"}
          fill
          priority
          className="object-cover"
        />
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/40 to-primary/40"></div>

      {/* Breadcrumb at Top-Left */}
      {breadcrumb && (
        <div className="absolute top-6 left-6">
          <span className="inline-block  backdrop-blur-md text-white text-md font-medium px-4 py-2 rounded-xl shadow-md border-[3px] border-primary">
            <Link href='/'>Home </Link>
            {breadcrumb}
          </span>
        </div>
      )}

      {/* Center Content */}
      <div className="relative z-10 max-w-3xl px-6 text-white">
        {title && (
          <h1 className="text-3xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            {title}
          </h1>
        )}

        {subtitle && (
          <h2 className="text-md md:text-2xl font-semibold mt-2 md:mt-4 drop-shadow-md">
            {subtitle}
          </h2>
        )}
      </div>
    </section>
  );
}

export default Hero;
