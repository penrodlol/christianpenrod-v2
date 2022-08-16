import { repos, ReposGet } from '@utils/octokit';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res<Partial<ReposGet>>) {
  const repo = String(req.query.slug);
  const owner = String(process.env.GITHUB_USERNAME);
  const { data } = await repos.get({ repo, owner });

  res.status(200).json({
    id: data.id,
    name: data.name,
    description: data.description,
    html_url: data.html_url,
    stargazers_count: data.stargazers_count,
    forks_count: data.forks_count,
    language: data.language,
    topics: data.topics,
  });
}
