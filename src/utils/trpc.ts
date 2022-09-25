import { AppRouter } from '@server/routers/_app';
import { httpBatchLink } from '@trpc/client';
import { createTRPCNext } from '@trpc/next';
import type { inferProcedureOutput as Output } from '@trpc/server';

type PostRouter = AppRouter['post'];
type RoleRouter = AppRouter['role'];
type GithubRouter = AppRouter['github'];

export type QPost<K extends keyof AppRouter['post']> = Output<PostRouter[K]>;
export type QRole<K extends keyof RoleRouter> = Output<RoleRouter[K]>;
export type QGithub<K extends keyof GithubRouter> = Output<GithubRouter[K]>;

export const trpc = createTRPCNext<AppRouter>({
  ssr: false,
  config: () => ({ links: [httpBatchLink({ url: '/api/trpc' })] }),
});
