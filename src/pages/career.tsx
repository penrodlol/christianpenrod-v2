import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { createSSG } from '@server/create-ssg';
import { Query } from '@utils/trpc';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  roles: Query<'role.get-all'>;
}

const Career: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  roles,
}) => (
  <Layout title="Career" subTitle="What has Christian done?">
    <section className="flex flex-col gap-8 max-w-max mx-auto">
      {roles.map((role) => (
        <RoleTimeline key={role._id} role={role} />
      ))}
    </section>
  </Layout>
);

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const ssg = await createSSG();
  const roles = await ssg.fetchQuery('role.get-all');

  return { props: { trpcState: ssg.dehydrate(), roles } };
};

export default Career;
