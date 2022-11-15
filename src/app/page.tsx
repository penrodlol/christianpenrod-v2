import env from '@env/client.mjs';
import { getPosts } from '@lib/contentlayer/posts';
import { getProfile } from '@lib/octokit/profile';
import { Anchor } from '@ui/Anchor';
import { Contact } from '@ui/Contact';
import { GithubProject } from '@ui/GithubProject';
import { GithubStats } from '@ui/GithubStats';
import { Line } from '@ui/Line';
import { Posts } from '@ui/Posts';
import { ArrowRight } from 'lucide-react';

const HomePage = async () => {
  const profile = await getProfile();
  const posts = getPosts().slice(0, 3);

  return (
    <div className="flex flex-col gap-fluid-6">
      <div className="flex flex-col justify-between gap-fluid-7 lg:flex-row">
        <section>
          <h1 className="text-6xl">Hi, I&apos;m Christian</h1>
          <h2 className="text-2 text-2xl">Front-End Web Developer</h2>
          <Line className="my-8 h-2 max-w-lg" />
          <ul className="flex flex-col gap-1">
            <li className="flex items-center gap-2 text-lg">
              <ArrowRight className="h-7 w-7 min-w-[20px] stroke-accent-2" />
              Web Developer <Anchor href={env.MCKESSON}>@McKesson</Anchor>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <ArrowRight className="h-7 w-7 min-w-[20px] stroke-accent-2" />
              CS Bachelors <Anchor href={env.LAROCHE}>@LaRoche</Anchor>
            </li>
            <li className="flex items-center gap-2 text-lg">
              <ArrowRight className="h-7 w-7 min-w-[20px] stroke-accent-2" />
              Pittsburgh, PA, USA
            </li>
          </ul>
          <div className="mt-fluid-5 sm:max-w-max">
            <Contact />
          </div>
        </section>
        <div className="flex flex-col gap-fluid-4 lg:w-2/5">
          <section className="flex flex-col gap-2">
            <h3 className="text-2 text-xl">Projects</h3>
            <ul className="flex flex-col gap-4">
              {profile.projects.map((project) => (
                <li key={project.name}>
                  <GithubProject project={project} />
                </li>
              ))}
            </ul>
          </section>
          <section className="flex flex-col gap-2">
            <h3 className="text-2 text-xl">Open Source</h3>
            <GithubStats user={profile.user} />
          </section>
        </div>
      </div>
      <section className="flex flex-col gap-fluid-2">
        <h3 className="text-2 text-xl">Recent Posts</h3>
        <Posts posts={posts} />
      </section>
    </div>
  );
};

export default HomePage;
