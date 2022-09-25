import { trpc } from '@server/trpc';
import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';

export const roleRouter = trpc.router({
  getAll: trpc.procedure.query(({ ctx }) =>
    ctx.roles.map((role) => ({
      ...pick(role, ['_id', 'company']),
      content: role.body.code,
      start: dayjs.utc(role.start).format('MMM Do, YYYY'),
      end: role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present',
    })),
  ),
});
