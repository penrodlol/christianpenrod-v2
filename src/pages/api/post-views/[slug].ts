import { prisma } from '@utils/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res<number>) {
  const { views } = await prisma.postView.update({
    data: { views: { increment: 1 } },
    where: { post: String(req.query.slug) },
  });

  res.status(200).json(views);
}
