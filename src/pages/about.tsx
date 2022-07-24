import { CommitSummary } from '@components/CommitSummary';
import { Layout } from '@components/Layout';
import { RoleTimeline } from '@components/RoleTimeline';
import { sortedRoles } from '@utils/contentlayer';
import { Role } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import Image from 'next/image';

const About: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  roles,
}) => {
  return (
    <Layout title="About" subTitle="Who is Christian?">
      <div className="flex flex-col gap-fluid-6">
        <section className="flex flex-col lg:flex-row gap-12">
          <div className="flex flex-col gap-7">
            <div className="relative p-2 pb-0 bg-surface-1 rounded-md shadow-2 max-w-[300px]">
              <Image
                src="/img/selfie.webp"
                alt="Picture of me"
                className="rounded-md"
                priority={true}
                height={400}
                width={300}
                quality={100}
              />
            </div>
            <div className="text-center">
              <h2 className="text-4xl">Christian Penrod</h2>
              <h3 className="text-2xl text-base-2">Front-End Web Developer</h3>
            </div>
          </div>
          <CommitSummary />
        </section>
        <section className="flex flex-col gap-8 max-w-max mx-auto">
          {roles.map((role) => (
            <RoleTimeline key={role._id} role={role} />
          ))}
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<{ roles: Role[] }> = () => {
  return { props: { roles: sortedRoles } };
};

export default About;
