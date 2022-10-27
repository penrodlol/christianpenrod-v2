import env from '@env/server.mjs';
import {
  ContributionsCollection,
  IssueConnection,
  PinnableItemConnection,
  PullRequestConnection,
  Repository,
  RepositoryConnection,
} from '@octokit/graphql-schema';
import dayjs from '@utils/dayjs';
import { octokit } from '.';

interface User {
  user: {
    projects: PinnableItemConnection;
    contributions: ContributionsCollection;
    reposForStars: RepositoryConnection;
    pullRequests: PullRequestConnection;
    issues: IssueConnection;
    contributedTo: RepositoryConnection;
    reposForLanguage: RepositoryConnection;
  };
}

export type GetProfile = Awaited<ReturnType<typeof getProfile>>;

export const getProfile = async () => {
  const from = dayjs().subtract(1, 'year').toISOString();
  const { user } = await octokit<User>(QUERY, { from });

  const stars = user.reposForStars.nodes as Array<Repository>;
  const languages = user.reposForLanguage.nodes as Array<Repository>;
  const projects = user.projects.nodes as Array<Repository>;

  return {
    user: {
      commits:
        user.contributions.totalCommitContributions +
        user.contributions.restrictedContributionsCount,
      stars: stars.reduce((acc, n) => acc + n.stargazers.totalCount, 0),
      issues: user.issues.totalCount,
      pullRequests: user.pullRequests.totalCount,
      contributedTo: user.contributedTo.totalCount,
      language: languages
        .sort((a, b) => {
          const aName = a.primaryLanguage?.name;
          const bName = b.primaryLanguage?.name;
          const _a = languages.filter((l) => l.primaryLanguage?.name === aName);
          const _b = languages.filter((l) => l.primaryLanguage?.name === bName);

          return _a.length - _b.length;
        })
        .pop()?.primaryLanguage?.name,
    },
    projects: projects.map((project) => ({
      name: project.name,
      description: project.description,
      url: project.url,
      topic: project.repositoryTopics.nodes?.shift()?.topic.name,
    })),
  };
};

const QUERY = `
  query get_profile($from: DateTime!) {
    user(login: "${env.GITHUB_USERNAME}") {
      projects: pinnedItems(first: 2 types: [REPOSITORY]) {
        nodes {
          ... on Repository {
            name: nameWithOwner
            description
            url
            repositoryTopics(first: 1) {
              nodes {
                topic {
                  name
                }
              }
            }
          }
        }
      }
      contributions: contributionsCollection(from: $from) {
        totalCommitContributions
        restrictedContributionsCount
      }
      reposForStars: repositories(
        ownerAffiliations: OWNER
        last: 100
        orderBy: { direction: DESC, field: STARGAZERS }
      ) {
        nodes {
          stargazers {
            totalCount
          }
        }
      }
      pullRequests(first: 1) {
        totalCount
      }
      issues {
        totalCount
      }
      contributedTo: repositoriesContributedTo(
        first: 1
        contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
      ) {
        totalCount
      }
      reposForLanguage: repositories(isFork: false last: 30) {
        nodes {
          primaryLanguage {
            name
          }
        }
      }
    }
  }
`;
