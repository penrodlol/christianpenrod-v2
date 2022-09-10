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
          issues: IssueConnection;
          pullRequests: PullRequestConnection;
        };
      }>(`
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {
            projects: pinnedItems(first: 2, types: [REPOSITORY]) {
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
              first: 100, ownerAffiliations: OWNER, orderBy: {direction: DESC, field: STARGAZERS}
            ) { nodes { stargazers { totalCount } } }
            pullRequests(first: 1) { totalCount }
            issues { totalCount }
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
        },
        projects: user.projects.nodes?.map((n) => ({
          name: n?.name!,
          description: n?.description!,
          url: n?.url as string,
          topic: (n as Repository).repositoryTopics.nodes?.[0]?.topic.name!,
        })),
      };
    },
  });
