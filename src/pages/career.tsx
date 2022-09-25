import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { ctx } from '@server/context';
import { router } from '@server/routers/_app';
import { createProxySSGHelpers } from '@trpc/react/ssg';
import { trpc } from '@utils/trpc';
import { GetStaticProps, NextPage } from 'next';

const Career: NextPage = () => {
  const { data: roles } = trpc.role.getAll.useQuery();

  return (
    <Layout title="Career" subTitle="What has Christian done?">
      <section className="flex flex-col gap-8 max-w-max mx-auto">
        {roles?.map((role) => (
          <RoleTimeline key={role._id} role={role} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = createProxySSGHelpers({ router, ctx: await ctx() });

  await ssg.role.getAll.prefetch();

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Career;
