export const dynamic = 'force-dynamic'; // Disable prerender & avoid build crashes

import BlogSingleMain from '@/components/Blogs/BlogSingleMain';
import RelatedBlog from '@/components/Blogs/RelatedBlog';

export default function BlogSinglePage({ params }) {
  const { slug } = params;
  return (
    <>
      <BlogSingleMain slug={slug} />
      <RelatedBlog slug={slug} />
    </>
  );
}
