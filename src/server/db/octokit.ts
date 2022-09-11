import { graphql } from '@octokit/graphql';

declare global {
  var octokit: typeof graphql | undefined;
}

export const octokit =
  global.octokit ||
  graphql.defaults({
    headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
  });

if (process.env.NODE_ENV !== 'production') global.octokit = octokit;
