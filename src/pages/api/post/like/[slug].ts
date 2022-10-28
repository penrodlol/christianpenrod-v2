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

  await prisma.postLike.upsert({
    update: {},
    create: { post, user },
    where: { post_user: { post, user } },
  });

  res.status(200).json({ post });
};
