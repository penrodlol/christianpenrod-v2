import { SEO } from '@ui/Seo';
import { getPost } from '@utils/contentlayer/posts';

const Head = ({ params }: { params: { slug: string } }) => {
  const { title, description } = getPost(params.slug);
  return <SEO title={title} description={description} />;
};

export default Head;
