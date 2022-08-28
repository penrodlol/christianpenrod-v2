import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import { GetStaticProps, NextPage } from 'next';

const Career: NextPage = () => {
  const { data: roles } = trpc.useQuery(['role.get-all']);

  return (
    <Layout title="Career" subTitle="What has Christian done?">
      <section className="flex flex-col gap-8 max-w-max mx-auto">
        {roles!.map((role) => (
          <RoleTimeline key={role._id} role={role} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const ssg = await createSSG();

  await ssg.prefetchQuery('role.get-all');

  return { props: { trpcState: ssg.dehydrate() } };
};

export default Career;
