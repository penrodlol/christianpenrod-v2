import { prisma } from '@utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const post = String(req.query.slug);
  const { views } = await prisma.postView.upsert({
    update: { views: { increment: 1 } },
    create: { post },
    where: { post },
    select: { views: true },
  });

  res.status(200).json(views);
};
