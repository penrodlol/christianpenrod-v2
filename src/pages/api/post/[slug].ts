import { prisma } from '@utils/prisma';
import { getUser } from '@utils/user';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const payload = z.string().safeParse(req.query.slug);

  if (!payload.success) return res.status(400).json({ error: 'Invalid post' });

  const post = payload.data;
  const user = getUser(req);
  const transaction = await prisma.$transaction([
    prisma.postView.upsert({
      update: { views: { increment: 1 } },
      create: { post },
      where: { post },
      select: { views: true },
    }),
    prisma.postLike.aggregate({ _count: { post: true }, where: { post } }),
    prisma.postLike.findUnique({ where: { post_user: { post, user } } }),
  ]);

  res.status(200).json({
    views: transaction[0].views ?? 0,
    likes: transaction[1]._count.post ?? 0,
    liked: !!transaction[2],
  });
};
