import { z } from 'zod';
import { createRouter } from '../create-router';

export const githubRouter = createRouter()
  .query('get-repo', {
    input: z.string(),
    resolve: async ({ ctx, input: repo }) => {
      const owner = 'penrodlol';
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
  .query('get-contributions', {
    resolve: ({ ctx }) =>
      ctx.prisma.contribution.findMany({
        select: { name: true, description: true, url: true },
        orderBy: { updatedOn: 'desc' },
        take: 3,
      }),
  });
