import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { sortedRoles } from '@utils/contentlayer';
import { Role } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  roles: Array<Role>;
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

export const getStaticProps: GetStaticProps<{ roles: Role[] }> = () => {
  return { props: { roles: sortedRoles } };
};

export default Career;
