import { Box } from '@components/Box';
import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { sortedRoles } from '@utils/contentlayer';
import { Role } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  roles,
}) => {
  return (
    <Layout title="About" subTitle="Who is Christian?">
      <Box display="flex" flexDirection="column" gap="7">
        {roles.map((role) => (
          <RoleTimeline key={role._id} role={role} />
        ))}
      </Box>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ roles: Role[] }> = () => {
  return { props: { roles: sortedRoles } };
};

export default About;
