import { SEO } from '@ui/Seo';
import { getPost } from '@utils/contentlayer/posts';

const Head = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  return post && <SEO title={post.title} description={post.description} />;
};

export default Head;
