import env from '@env/server.mjs';
import {
  ContributionsCollection,
  IssueConnection,
  PullRequestConnection,
  Repository,
  RepositoryConnection,
} from '@octokit/graphql-schema';
import { octokit } from '@utils/octokit';
import { Bug, Clock, Code2, GitPullRequest, Star, Users } from 'lucide-react';
import { cloneElement, ReactElement } from 'react';

export const Stats = async () => {
  const user = await getUser();

  return (
    <div className="flex flex-wrap justify-between gap-x-4 gap-y-1 rounded-md bg-2 py-4 px-6 text-sm elevation-3">
      <div className="flex flex-col gap-1">
        <Stat label="Total Commits:" data={user.commits} icon={<Clock />} />
        <Stat label="Total Stars:" data={user.stars} icon={<Star />} />
        <Stat label="Total Issues:" data={user.issues} icon={<Bug />} />
      </div>
      <div className="flex flex-col gap-1">
        <Stat label="Total PRs:" data={user.prs} icon={<GitPullRequest />} />
        <Stat label="Contributed To:" data={user.help} icon={<Users />} />
        <Stat label="Top Language:" data={user.language} icon={<Code2 />} />
      </div>
    </div>
  );
};

type StatProps = { label: string; data?: string | number; icon: ReactElement };
const Stat = ({ label, data, icon }: StatProps) => (
  <div className="flex gap-2">
    <div className="flex items-center gap-2">
      {cloneElement(icon, { className: 'h-5 w-5' })}
      <span>{label}</span>
    </div>
    <span className="text-brand-1">{data}</span>
  </div>
);

export const getUser = async () => {
  const pastYear = new Date().setFullYear(new Date().getFullYear() - 1);
  const from = new Date(pastYear).toISOString();
  const query = `query { user(login: "${env.GITHUB_USERNAME}") { contributions: contributionsCollection(from: "${from}") { totalCommitContributions restrictedContributionsCount } reposForStars: repositories(ownerAffiliations: OWNER last: 100 orderBy: { direction: DESC, field: STARGAZERS }) { nodes { stargazers { totalCount } } } pullRequests(first: 1) { totalCount } issues { totalCount } contributedTo: repositoriesContributedTo(first: 1 contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]) { totalCount }       reposForLanguage: repositories(isFork: false last: 30) { nodes { primaryLanguage { name } } } } }`;
  return octokit<{
    user: {
      contributions: ContributionsCollection;
      reposForStars: RepositoryConnection;
      pullRequests: PullRequestConnection;
      issues: IssueConnection;
      contributedTo: RepositoryConnection;
      reposForLanguage: RepositoryConnection;
    };
  }>(query).then(({ user }) => {
    const stars = user.reposForStars.nodes as Array<Repository>;
    const languages = user.reposForLanguage.nodes as Array<Repository>;

    return {
      commits:
        user.contributions.totalCommitContributions +
        user.contributions.restrictedContributionsCount,
      stars: stars.reduce((acc, n) => acc + n.stargazers.totalCount, 0),
      issues: user.issues.totalCount,
      prs: user.pullRequests.totalCount,
      help: user.contributedTo.totalCount,
      language: languages
        .sort((a, b) => {
          const aName = a.primaryLanguage?.name;
          const bName = b.primaryLanguage?.name;
          const _a = languages.filter((l) => l.primaryLanguage?.name === aName);
          const _b = languages.filter((l) => l.primaryLanguage?.name === bName);

          return _a.length - _b.length;
        })
        .pop()?.primaryLanguage?.name,
    };
  });
};
