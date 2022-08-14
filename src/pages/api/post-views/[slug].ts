import { prisma } from '@utils/prisma';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

export default async function handler(req: Req, res: Res<number>) {
  const post = String(req.query.slug);

  const { views } = await prisma.postView.upsert({
    update: { views: { increment: 1 } },
    create: { post },
    where: { post },
  });

  res.status(200).json(views);
}
