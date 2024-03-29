import dayjs from '@utils/dayjs';
import { allRoles } from 'contentlayer/generated';

export type GetSortedRoles = ReturnType<typeof getSortedRoles>;

export const getSortedRoles = () =>
  allRoles
    .sort((a, b) => dayjs(b.start).unix() - dayjs(a.start).unix())
    .map((role) => ({
      ...role,
      start: dayjs.utc(role.start).format('MMM Do, YYYY'),
      end: role.end ? dayjs.utc(role.end).format('MMM Do, YYYY') : 'Present',
    }));
