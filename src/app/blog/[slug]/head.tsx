import { Head as _Head } from '@ui/Head';
import { getPost } from '@utils/contentlayer/posts';

const Head = ({ params }: { params: { slug: string } }) => {
  const post = getPost(params.slug);
  return post && <_Head title={post.title} description={post.description} />;
};

export default Head;
