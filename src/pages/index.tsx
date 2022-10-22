import { BioMDX } from '@components/BioMdx';
import { Contact } from '@components/Contact';
import { GithubProject } from '@components/GithubProject';
import { GithubStats } from '@components/GithubStats';
import { Layout } from '@components/Layout';
import { Line } from '@components/Line';
import { Posts } from '@components/Posts';
import { GetSortedPosts, getSortedPosts } from '@utils/contentlayer/posts';
import { GetProfile, getProfile } from '@utils/octokit/profile';
import { Bio, bio } from 'contentlayer/generated';
import { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';

interface StaticProps {
  bio: Bio;
  posts: GetSortedPosts;
  profile: GetProfile;
}

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = ({
  bio,
  posts,
  profile,
}) => (
  <Layout>
    <div className="flex flex-col gap-fluid-6">
      <div className="flex flex-col lg:flex-row gap-fluid-7 justify-between">
        <section>
          <h1 className="text-6xl">Hi, I&apos;m Christian</h1>
          <h2 className="text-2 text-2xl">Front-End Web Developer</h2>
          <Line className="h-2 my-8 max-w-lg" />
          <BioMDX bio={bio} />
          <div className="mt-fluid-5 sm:max-w-max">
            <Contact />
          </div>
        </section>
        <div className="flex flex-col gap-fluid-4 lg:w-2/5">
          <section className="flex flex-col gap-2">
            <h3 className="text-xl text-2">Projects</h3>
            <ul className="flex flex-col gap-4">
              {profile.projects.map((project) => (
                <li key={project.name}>
                  <GithubProject project={project} />
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-xl text-2">Open Source</h3>
            <GithubStats user={profile.user} />
          </section>
        </div>
      </div>
      <section className="flex flex-col gap-fluid-2">
        <h3 className="text-xl text-2">Recent Posts</h3>
        <Posts posts={posts} />
      </section>
    </div>
  </Layout>
);

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = getSortedPosts();
  const profile = await getProfile();

  console.log(profile);

  return { props: { bio, posts, profile } };
};

export default Home;
