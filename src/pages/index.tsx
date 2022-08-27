import { BioMDX } from '@components/BioMdx';
import { Contact } from '@components/Contact';
import { Github } from '@components/Github';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import { createSSG } from '@server/create-ssg';
import { Query } from '@utils/trpc';
import { Bio, bio } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  bio: Bio;
  posts: Query<'post.get-all'>;
  portfolio: Query<'github.get-porfolio'>;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
  posts,
  portfolio,
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <div className="flex flex-col xl:flex-row gap-fluid-7 justify-between">
          <section>
            <h1 className="text-fluid-8">Hi, I&apos;m Christian</h1>
            <h2 className="text-base-2 text-fluid-5">
              Front-End Web Developer
            </h2>
            <Line className="h-2 my-8 max-w-lg" />
            <BioMDX bio={bio} />
            <div className="mt-fluid-5 sm:max-w-max">
              <Contact />
            </div>
          </section>
          <section className="flex flex-col gap-fluid-5">
            <div className="flex flex-col gap-1">
              <h3 className="text-fluid-5 text-base-2">Recent Projects</h3>
              <ul className="flex flex-col gap-4">
                {portfolio.projects.map((project) => (
                  <li key={project.name}>
                    <Github repo={project} />
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-1">
              <h3 className="text-fluid-5 text-base-2">Recent Contributions</h3>
              <ul className="flex flex-col gap-4">
                <ul className="flex flex-col gap-4">
                  {portfolio.contributions.map((contribution) => (
                    <li key={contribution.name}>
                      <Github repo={contribution} />
                    </li>
                  ))}
                </ul>
              </ul>
            </div>
          </section>
        </div>
        <section className="flex flex-col gap-fluid-2">
          <h3 className="text-fluid-5 text-base-2">Recent Posts</h3>
          <Posts posts={posts} />
        </section>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const ssg = await createSSG();
  const posts = await ssg.fetchQuery('post.get-all', { limit: 3 });
  const portfolio = await ssg.fetchQuery('github.get-porfolio');

  return {
    props: { trpcState: ssg.dehydrate(), bio, posts, portfolio },
    revalidate: 86400,
  };
};

export default Home;
