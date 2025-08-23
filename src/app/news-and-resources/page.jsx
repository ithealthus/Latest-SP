import React from 'react';
import Hero from '@/components/health-articles-blogs/Hero';
import ContentBlock from '@/components/news-and-resources/ContentBlock';
function Page() {
  return (
    <div>
      <Hero
        breadcrumb="Home > News & Resources"
        title="News & Resources"
        subtitle="Stay Informed. Stay Healthy."
        description="At SP Medifort, we go beyond treatment, we empower you with the latest in health
education, hospital milestones, and expert insights. From wellness blogs and patient
stories to cutting-edge medical updates and doctor-led video explainers, everything
you need to take charge of your health is right here."
        image="/images/blog/blog1.webp" // put an image inside public/images
      />
      <ContentBlock
  title="Health Blogs"
  subtitle="Trustworthy, doctor-written content for a healthier tomorrow."
  description="Explore articles written by our specialists on prevention, chronic conditions, lifestyle & wellness."
  listItems={[
    "6 Lifestyle Changes to Protect Your Heart",
    "The Truth About Thyroid Disorders",
    "How Robotics Is Changing Surgery in India",
    "Signs Your Child May Need ENT Help",
  ]}
  buttonText="Read Articles"
  buttonLink="/health-articles-and-blogs"
  image="/images/blog/blog6.webp"
  imageLeft={false}
/>
<ContentBlock
  title="Latest News & Updates"
  subtitle="See what's new at SP Medifort."
  description="Stay up-to-date with hospital milestones, new technology, events, and community outreach."
  listItems={[
    "Kerala's First Versius Robotic Surgical System",
    "Launch of Women's Wellness OPD - March 2025",
    "Health Camp Schedule (May-June 2025)",
    "CME Workshop on Trauma Management",
  ]}
  buttonText="View All News"
  buttonLink="/latest-news-update"
  image="/images/blog/blog7.webp"
  imageLeft={true}
/>
<ContentBlock
  title="Videos & Media Gallery"
  subtitle="Watch expert-led sessions, patient stories & virtual tours."
  description="Explore articles written by our specialists on prevention, chronic
conditions, lifestyle & wellness."
  listItems={[
    "Doctor explainers & health education",
    "Patient testimonials",
    "Virtual tour of SP Medifort",
    "Event highlights and awareness campaigns",
  ]}
  buttonText="Watch Now"
  buttonLink="/videos-and-media-gallery"
  image="/images/blog/blog8.webp"
  imageLeft={false}
/>

    </div>
  );
}

export default Page;
