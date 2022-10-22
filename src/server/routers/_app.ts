import { trpc } from '@server/trpc';
import { githubRouter } from './github';

export type AppRouter = typeof router;

export const router = trpc.router({
  github: githubRouter,
});
