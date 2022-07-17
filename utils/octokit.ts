import { Octokit } from '@octokit/rest';

export const client = new Octokit();

export const { repos } = client;
