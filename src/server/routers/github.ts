import {
  ContributionsCollection,
  IssueConnection,
  PinnableItemConnection,
  PullRequestConnection,
  Repository,
  RepositoryConnection,
} from '@octokit/graphql-schema';
import dayjs from 'dayjs';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const githubRouter = createRouter()
  .query('get-repo', {
    input: z.string(),
    resolve: async ({ ctx, input: repo }) => {
      const { user } = await ctx.octokit<{ user: { repo: Repository } }>(`
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {
            repo: repository(name: "${repo}") {
              id
              name
              description
              url
              stargazerCount
              forkCount
              primaryLanguage { name }
            }
          }
        }
      `);

      return {
        id: user.repo.id,
        name: user.repo.name,
        description: user.repo.description,
        url: user.repo.url,
        stars: user.repo.stargazerCount,
        forks: user.repo.forkCount,
        language: user.repo.primaryLanguage?.name,
      };
    },
  })
  .query('get-profile', {
    resolve: async ({ ctx }) => {
      const lastYear = dayjs().subtract(1, 'year').toISOString();
      const { user } = await ctx.octokit<{
        user: {
          projects: PinnableItemConnection;
          contributions: ContributionsCollection;
          reposForStars: RepositoryConnection;
          pullRequests: PullRequestConnection;
          issues: IssueConnection;
          contributedTo: RepositoryConnection;
          reposForLanguage: RepositoryConnection;
        };
      }>(`
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {
            projects: pinnedItems(first: 2 types: [REPOSITORY]) {
              nodes { ... on Repository {
                name: nameWithOwner description url
                repositoryTopics(first: 1) { nodes { topic { name } } }
              } }
            }
            contributions: contributionsCollection(from: "${lastYear}") {
              totalCommitContributions
              restrictedContributionsCount
            }
            reposForStars: repositories(
              ownerAffiliations: OWNER last: 100 orderBy: {direction: DESC, field: STARGAZERS}
            ) { nodes { stargazers { totalCount } } }
            pullRequests(first: 1) { totalCount }
            issues { totalCount }
            contributedTo: repositoriesContributedTo(
              first: 1 contributionTypes: [COMMIT, ISSUE, PULL_REQUEST, REPOSITORY]
            ) { totalCount }
            reposForLanguage: repositories(isFork: false last: 30) {
              nodes { primaryLanguage { name } }
            }
          }
        }
      `);

      return {
        user: {
          commits:
            user.contributions.totalCommitContributions +
            user.contributions.restrictedContributionsCount,
          stars:
            user.reposForStars.nodes
              ?.map((n) => n?.stargazers.totalCount ?? 0)
              .reduce((acc, n) => acc + n, 0) ?? 0,
          issues: user.issues.totalCount,
          pullRequests: user.pullRequests.totalCount,
          contributedTo: user.contributedTo.totalCount,
          language: Object.entries(
            user.reposForLanguage.nodes
              ?.filter((n) => n?.primaryLanguage?.name)
              .map((n) => n?.primaryLanguage?.name)
              .reduce((acc, n) => {
                acc[n as string] = (acc[n as string] ?? 0) + 1;
                return acc;
              }, {} as Record<string, number>) ?? {},
          ).sort((a, b) => b[1] - a[1])[0]?.[0],
        },
        projects: user.projects.nodes?.map((n) => ({
          name: n?.name,
          description: n?.description as string | undefined,
          url: n?.url as string | undefined,
          topic: (n as Repository).repositoryTopics.nodes?.[0]?.topic.name,
        })),
      };
    },
  });
