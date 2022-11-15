import { getPost } from '@lib/contentlayer/posts';
import { SEO } from '@ui/Seo';

const Head = ({ params }: { params: { slug: string } }) => {
  const { title, description } = getPost(params.slug);
  return <SEO title={title} description={description} />;
};

export default Head;
