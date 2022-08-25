import dayjs from 'dayjs';
import advancedFormatPlugin from 'dayjs/plugin/advancedFormat';
import utcPlugin from 'dayjs/plugin/utc';
import { createRouter } from '../create-router';
import { githubRouter } from './github';
import { postRouter } from './post';
import { roleRouter } from './role';

dayjs.extend(advancedFormatPlugin);
dayjs.extend(utcPlugin);

export type AppRouter = typeof appRouter;

export const appRouter = createRouter()
  .merge('post.', postRouter)
  .merge('github.', githubRouter)
  .merge('role.', roleRouter);
