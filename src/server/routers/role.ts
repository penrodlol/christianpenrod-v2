import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';
import { createRouter } from '../create-router';

export const roleRouter = createRouter().query('get-all', {
  resolve: ({ ctx }) => {
    return [...ctx.roles]
      .sort((a, b) => {
        const aDate = dayjs(a.start);
        const bDate = dayjs(b.start);
        return aDate.isAfter(bDate) ? -1 : 1;
      })
      .map((role) => ({
        ...pick(role, ['_id', 'company']),
        content: role.body.code,
        start: dayjs.utc(role.start).format('MMM Do, YYYY'),
        end: role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present',
      }));
  },
});