import { Layout } from '@components/Layout';
import { Posts } from '@components/Posts';
import { ctx } from '@server/context';
import { router } from '@server/routers/_app';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import { trpc } from '@utils/trpc';
import { GetStaticProps, NextPage } from 'next';

const Blog: NextPage = () => {
  const { data: posts } = trpc.post.getMany.useQuery();

  return (
    <Layout title="Blog" subTitle="What has Christian wrote?">
      <section>{posts && <Posts posts={posts} />}</section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = createProxySSGHelpers({ router, ctx: await ctx() });

  await ssg.post.getMany.prefetch();

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Blog;
