import { Posts } from '@ui/Posts';
import { Title } from '@ui/Title';

const BlogPage = () => {
  return (
    <>
      <Title title="Blog" subtitle="What has Christian wrote?" />
      <section>
        <Posts />
      </section>
    </>
  );
};

export default BlogPage;
