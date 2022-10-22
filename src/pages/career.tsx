import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { getSortedRoles } from '@utils/contentlayer/roles';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  roles: ReturnType<typeof getSortedRoles>;
}

const Career: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  roles,
}) => {
  return (
    <Layout title="Career" subTitle="What has Christian done?">
      <section className="flex flex-col gap-8 max-w-max mx-auto">
        {roles.map((role) => (
          <RoleTimeline key={role._id} role={role} />
        ))}
      </section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = () => {
  return { props: { roles: getSortedRoles() } };
};

export default Career;
