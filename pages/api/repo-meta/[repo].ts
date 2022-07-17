import { repos } from '@utils/octokit';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res) {
  const repo = String(req.query.repo);
  const owner = String(process.env.GITHUB_USER_NAME);
  const payload = await repos.get({ repo, owner });

  res.status(200).json({ ...payload.data });
}
