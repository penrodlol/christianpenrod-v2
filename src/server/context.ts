import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { allRoles } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { octokit } from './db/octokit';
import { prisma } from './db/prisma';

export type ContextOpts = trpcNext.CreateNextContextOptions;
export type Context = trpc.inferAsyncReturnType<typeof ctx>;

export const ctx = async (opts?: ContextOpts) => ({
  req: opts?.req,
  res: opts?.res,
  prisma,
  octokit,
  roles: [...allRoles].sort((a, b) =>
    dayjs(a.start).isAfter(dayjs(b.start)) ? -1 : 1,
  ),
});
