import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';
import { createRouter } from '../create-router';

export const roleRouter = createRouter().query('get-all', {
  resolve: ({ ctx }) => {
    return ctx.roles.map((role) => ({
      ...pick(role, ['_id', 'company']),
      content: role.body.code,
      start: dayjs.utc(role.start).format('MMM Do, YYYY'),
      end: role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present',
    }));
  },
});
