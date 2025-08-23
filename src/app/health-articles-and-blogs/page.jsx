import React from "react";
import Hero from "@/components/health-articles-blogs/Hero";
import FeaturedTopics from "@/components/health-articles-blogs/FeaturedTopics";
import ArticleSection from "@/components/health-articles-blogs/ArticleSection";

import ContributeSection from "@/components/health-articles-blogs/ContributeSection";
function Page() {
  return (
    <div>
      <Hero
        breadcrumb="Home > Health Blogs"
        title="Health Blogs"
        subtitle="Your Wellness, Backed by Medical Expertise"
        description="SP Medifort’s blog is more than information, it’s your trusted source for expert-written advice, real-life health solutions, and wellness education. Our doctors and specialists regularly contribute insights to help you stay informed, proactive, and confident in your health choices."
        image="/images/blog/blog1.webp" // put an image inside public/images
      />
      <FeaturedTopics/>
      <ArticleSection />
      <ContributeSection />
    </div>
  );
}

export default Page;
