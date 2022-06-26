import { Octokit } from '@octokit/rest';

const client = new Octokit();

export async function fetchRepo(repo: string) {
  const owner = String(process.env.NEXT_PUBLIC_GITHUB_USER_NAME);
  const { data } = await client.rest.repos.get({ owner, repo });

  return data;
}
