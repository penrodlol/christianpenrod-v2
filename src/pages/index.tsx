import { BioMDX } from '@components/BioMdx';
import { Contact } from '@components/Contact';
import { GithubProject } from '@components/GithubProject';
import { GithubStats } from '@components/GithubStats';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import { createSSG } from '@server/create-ssg';
import { trpc } from '@utils/trpc';
import { Bio, bio } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  bio: Bio;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
}) => {
  const { data: posts } = trpc.useQuery(['post.get-many', { limit: 3 }]);
  const { data: projects } = trpc.useQuery(['github.get-projects']);

  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <div className="flex flex-col lg:flex-row gap-fluid-7 justify-between">
          <section>
            <h1 className="text-fluid-8">Hi, I&apos;m Christian</h1>
            <h2 className="text-2 text-fluid-5">Front-End Web Developer</h2>
            <Line className="h-2 my-8 max-w-lg" />
            <BioMDX bio={bio} />
            <div className="mt-fluid-5 sm:max-w-max">
              <Contact />
            </div>
          </section>
          <section className="flex flex-col gap-fluid-4 lg:w-2/5">
            <div className="flex flex-col gap-1">
              <h3 className="text-fluid-5 text-2">Projects</h3>
              <ul className="flex flex-col gap-4">
                {projects?.map((project) => (
                  <li key={project.name}>
                    <GithubProject project={project} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-fluid-5 text-2">Open Source</h3>
              <GithubStats />
            </div>
          </section>
        </div>
        <section className="flex flex-col gap-fluid-2">
          <h3 className="text-fluid-5 text-2">Recent Posts</h3>
          <Posts posts={posts!} />
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const ssg = await createSSG();

  await Promise.all([
    ssg.prefetchQuery('post.get-many', { limit: 3 }),
    ssg.prefetchQuery('github.get-projects'),
  ]);

  return { props: { trpcState: ssg.dehydrate(), bio } };
};

export default Home;
