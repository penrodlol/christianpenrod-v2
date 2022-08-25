import { Octokit } from '@octokit/rest';

declare global {
  var octokit: Octokit | undefined;
}

export const octokit =
  global.octokit || new Octokit({ auth: process.env.GITHUB_TOKEN });

if (process.env.NODE_ENV !== 'production') global.octokit = octokit;
