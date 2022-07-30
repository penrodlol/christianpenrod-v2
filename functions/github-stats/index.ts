import { schedule } from '@netlify/functions';
import { Octokit } from '@octokit/rest';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';
import { QUERY } from './query';
import { buildSquares, buildSummary } from './utils';

export const handler = schedule('@monthly', async () => {
  const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const { user } = await graphql(QUERY, {
    from: dayjs().startOf('M').subtract(1, 'M').toISOString(),
    to: dayjs().endOf('M').subtract(1, 'M').subtract(1, 'd').toISOString(),
  });

  const summary = buildSummary(user.contributionsCollection);
  const squares = buildSquares(user.contributionsCollection);

  const prisma = new PrismaClient();
  await prisma.$transaction([
    prisma.commitSummary.create({ data: summary }),
    prisma.commitSquare.createMany({ data: squares }),
  ]);

  return { statusCode: 200 };
});
