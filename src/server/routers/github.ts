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
  .query('get-projects', {
    resolve: async ({ ctx }) => {
      const { user } = await ctx.octokit.graphql<any>(`
        query {
          user(login: "${process.env.GITHUB_USERNAME}") {
            projects: pinnedItems(first: 2, types: [REPOSITORY]) {
              nodes { ... on Repository {
                name: nameWithOwner description url
                repositoryTopics(first: 1) { nodes { topic { name } } }
              } }
            }
          }
        }
      `);

      return (user.projects.nodes as Array<Record<string, any>>).map((n) => ({
        name: n.name as string,
        description: n.description as string,
        url: n.url as string,
        topic: n.repositoryTopics.nodes[0].topic.name as string,
      }));
    },
  });
