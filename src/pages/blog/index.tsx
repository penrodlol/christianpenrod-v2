import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { createSSG } from '@server/create-ssg';
import { Query } from '@utils/trpc';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  posts: Query<'post.get-all'>;
}

const Blog: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  posts,
}) => {
  return (
    <Layout title="Blog" subTitle="What has Christian wrote?">
      <section>
        <Posts posts={posts} />
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const ssg = await createSSG();
  const posts = await ssg.fetchQuery('post.get-all');

  return { props: { trpcState: ssg.dehydrate(), posts } };
};

export default Blog;
