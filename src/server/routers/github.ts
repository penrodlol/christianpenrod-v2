import dayjs from 'dayjs';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const githubRouter = createRouter()
  .query('get-repo', {
    input: z.string(),
    resolve: async ({ ctx, input: repo }) => {
      const owner = process.env.GITHUB_USERNAME!;
      const { data } = await ctx.octokit.repos.get({ repo, owner });

      return {
        id: data.id,
        name: data.name,
        description: data.description,
        html_url: data.html_url,
        stargazers_count: data.stargazers_count,
        forks_count: data.forks_count,
        language: data.language,
        topics: data.topics,
      };
    },
  })
  .query('get-porfolio', {
    resolve: async ({ ctx }) => {
      const from = dayjs().subtract(5, 'month').toISOString();
      const tops = 'repositoryTopics(first: 1) { nodes { topic { name } } }';
      const fields = `name: nameWithOwner description url ${tops}`;
      // prettier-ignore
      const { user: { projects, contributions } } = await ctx.octokit.graphql(`
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {
            projects: pinnedItems(first: 2, types: [REPOSITORY]) {
              nodes { ... on Repository { ${fields} } }
            }
            contributions: contributionsCollection(from: "${from}") {
              repos: repositoryContributions(first: 100) {
                nodes { date: occurredAt repo: repository { ${fields} } }
              }
              pulls: pullRequestContributions(first: 100) {
                nodes { pullRequest { date: createdAt repo: repository { ${fields} } } }
              }
              issues: issueContributions(first: 100) {
                nodes { issue { date: createdAt repo: repository { ${fields} } } }
              }
            }
          }
        }
      `);

      return {
        projects: (projects.nodes as Array<Record<string, any>>).map((n) => ({
          name: n.name as string,
          description: n.description as string,
          url: n.url as string,
          topic: n.repositoryTopics.nodes[0].topic.name as string,
        })),
        contributions: [
          ...contributions.repos.nodes,
          ...contributions.pulls.nodes.map((n: any) => n.pullRequest),
          ...contributions.issues.nodes.map((n: any) => n.issue),
        ]
          .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))
          .slice(0, 2)
          .map(({ repo }) => ({
            name: repo.name as string,
            description: repo.description as string,
            url: repo.url as string,
            topic: repo.repositoryTopics.nodes[0].topic.name as string,
          })),
      };
    },
  });
