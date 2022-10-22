import { trpc } from '@server/trpc';
import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import { githubRouter } from './github';
import { roleRouter } from './role';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

export type AppRouter = typeof router;

export const router = trpc.router({
  role: roleRouter,
  github: githubRouter,
});
