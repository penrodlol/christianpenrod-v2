import { Octokit } from '@octokit/rest';

export const username = String(process.env.NEXT_PUBLIC_GITHUB_USER_NAME)!;
export const owner = String(process.env.NEXT_PUBLIC_GITHUB_USER_NAME)!;

export const client = new Octokit();

export const { repos } = client;
