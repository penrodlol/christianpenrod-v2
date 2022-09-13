import { graphql } from '@octokit/graphql';

const octokitGlobal = global as typeof global & { octokit?: typeof graphql };

export const octokit =
  octokitGlobal.octokit ||
  graphql.defaults({
    headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
  });

if (process.env.NODE_ENV !== 'production') octokitGlobal.octokit = octokit;
