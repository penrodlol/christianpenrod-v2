import env from '@env/server';
import { prisma } from '@utils/prisma';
import { createHash } from 'crypto';
import type { NextApiRequest, NextApiResponse } from 'next';
import { z } from 'zod';

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const post = z.string().parse(req.query.slug);
  const data = `${req.headers['x-forwarded-for'] ?? '0.0.0.0'}${env.SHA_256}`;
  const user = createHash('md5').update(data, 'utf8').digest('hex');

  await prisma.postLike.upsert({
    update: {},
    create: { post, user },
    where: { post_user: { post, user } },
  });

  res.status(200).json({ post });
};
