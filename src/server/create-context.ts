import { graphql } from '@octokit/graphql';
import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { allPosts, allRoles } from 'contentlayer/generated';
import dayjs from 'dayjs';
import { prisma } from './db/prisma';

export type ContextOpts = trpcNext.CreateNextContextOptions;
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createContext = async (opts?: ContextOpts) => ({
  req: opts?.req,
  res: opts?.res,
  prisma,
  octokit: graphql.defaults({
    headers: { authorization: `token ${process.env.GITHUB_TOKEN}` },
  }),
  posts: [...allPosts].sort((a, b) =>
    dayjs(a.published).isAfter(dayjs(b.published)) ? -1 : 1,
  ),
  roles: [...allRoles].sort((a, b) =>
    dayjs(a.start).isAfter(dayjs(b.start)) ? -1 : 1,
  ),
});
