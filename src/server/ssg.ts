import { router } from '@server/routers/_app';
import { createSSGHelpers } from '@trpc/react/ssg';
import { ctx } from './context';

export const createSSG = async () =>
  createSSGHelpers({ router, ctx: await ctx() });
