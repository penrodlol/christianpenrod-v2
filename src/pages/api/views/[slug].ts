import { prisma } from '@utils/prisma';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = z.string().safeParse(req.query.slug);

  if (!payload.success) return res.status(400).json({ error: 'Invalid post' });

  const post = payload.data;
  const { views } = await prisma.postView.upsert({
    update: { views: { increment: 1 } },
    create: { post },
    where: { post },
    select: { views: true },
  });

  res.status(200).json(views);
};

export default handler;
