import * as trpc from '@trpc/server';
import * as trpcNext from '@trpc/server/adapters/next';
import { allPosts, allRoles } from 'contentlayer/generated';
import { octokit } from './db/octokit';
import { prisma } from './db/prisma';

export type ContextOpts = trpcNext.CreateNextContextOptions;
export type Context = trpc.inferAsyncReturnType<typeof createContext>;

export const createContext = async (opts?: ContextOpts) => ({
  req: opts?.req,
  res: opts?.res,
  prisma,
  octokit,
  posts: allPosts,
  roles: allRoles,
});
