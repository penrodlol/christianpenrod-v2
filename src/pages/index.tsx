import { BioMDX } from '@components/BioMdx';
import { Contact } from '@components/Contact';
import { ContributionCard } from '@components/ContributionCard';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import { Contribution } from '@prisma/client';
import { sortedPosts } from '@utils/contentlayer';
import { prisma } from '@utils/prisma';
import { bio, Bio, Post } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  bio: Bio;
  posts: Array<Post>;
  contributions: Array<Partial<Contribution>>;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
  posts,
  contributions,
}) => {
  return (
    <Layout>
      <div className="flex flex-col gap-fluid-6">
        <div className="flex flex-col xl:flex-row gap-fluid-6 justify-between">
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
          <section className="flex flex-col gap-fluid-2">
            <h3 className="text-fluid-5 text-base-2">Latest Contributions</h3>
            <ul className="flex flex-col gap-4">
              {contributions.map((contribution) => (
                <li key={contribution.id}>
                  <ContributionCard contribution={contribution} />
                </li>
              ))}
            </ul>
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
  const posts = sortedPosts.filter((_, index) => index < 3);
  const contributions = await prisma.contribution.findMany({
    select: { id: true, name: true, description: true, url: true },
    orderBy: { updatedOn: 'desc' },
    take: 3,
  });

  return {
    props: { bio, posts, contributions },
    revalidate: 86400,
  };
};

export default Home;
