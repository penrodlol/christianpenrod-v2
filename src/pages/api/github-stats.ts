import { CommitSquare, CommitSummary } from '@prisma/client';
import { prisma } from '@utils/prisma';
import dayjs from 'dayjs';
import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

interface Payload {
  summary: CommitSummary | null;
  squares: Array<CommitSquare> | null;
}

export default async function handler(_: Req, res: Res<Payload>) {
  const min = dayjs().subtract(1, 'M').startOf('M').subtract(1, 'y').toDate();

  const batch = await prisma.$transaction([
    prisma.commitSummary.findFirst({
      orderBy: { createdAt: 'desc' },
    }),
    prisma.commitSquare.findMany({
      where: { date: { gte: min } },
      orderBy: { date: 'asc' },
    }),
  ]);

  res.status(200).json({ summary: batch[0], squares: batch[1] });
}
