import { getPosts } from '@lib/contentlayer/posts';
import { Posts } from '@ui/Posts';
import { Title } from '@ui/Title';

const BlogPage = () => {
  const posts = getPosts();

  return (
    <>
      <Title title="Blog" subtitle="What has Christian wrote?" />
      <section>
        <Posts posts={posts} />
      </section>
    </>
  );
};

export default BlogPage;
