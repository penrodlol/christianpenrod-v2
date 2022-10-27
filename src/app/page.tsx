import { BioMDX } from '@ui/BioMDX';
import { Contact } from '@ui/Contact';
import { GithubProject } from '@ui/GithubProject';
import { GithubStats } from '@ui/GithubStats';
import { Line } from '@ui/Line';
import { Posts } from '@ui/Posts';
import { getProfile } from '@utils/octokit/profile';

const HomePage = async () => {
  const profile = await getProfile();

  return (
    <div className="flex flex-col gap-fluid-6">
      <div className="flex flex-col justify-between gap-fluid-7 lg:flex-row">
        <section>
          <h1 className="text-6xl">Hi, I&apos;m Christian</h1>
          <h2 className="text-2 text-2xl">Front-End Web Developer</h2>
          <Line className="my-8 h-2 max-w-lg" />
          <BioMDX />
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
        <Posts />
      </section>
    </div>
  );
};

export default HomePage;
