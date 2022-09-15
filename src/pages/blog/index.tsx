import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import { GetStaticProps, NextPage } from 'next';

const Blog: NextPage = () => {
  const { data: posts } = trpc.useQuery(['post.get-many']);

  return (
    <Layout title="Blog" subTitle="What has Christian wrote?">
      <section>{posts && <Posts posts={posts} />}</section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSG();

  await ssg.prefetchQuery('post.get-many');

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Blog;
