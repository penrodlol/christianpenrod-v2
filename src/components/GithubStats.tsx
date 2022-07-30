import { CommitSquare, CommitSummary } from '@prisma/client';
import TrendingUpIcon from '@svg/trending-up.svg';
import useSWR from 'swr';
import { Chip } from './Chip';
import { Line } from './Line';

interface Payload {
  summary: CommitSummary;
  squares: Array<CommitSquare>;
}

export const GithubStats = () => {
  const { data: stats } = useSWR<Payload>(
    '/api/github-stats',
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );

  return (
    <div className="bg-surface-2 rounded-md shadow-2 p-5 max-w-md mx-auto flex flex-col gap-fluid-1">
      <div className="max-w-max mx-auto">
        <h2 className="flex gap-3 items-center text-fluid-4">
          Monthly Github Statistics
          <TrendingUpIcon
            className="fill-base-2 mb-1 hidden sm:block"
            width={30}
            height={30}
          />
        </h2>
        <Line />
      </div>
      <div className="flex gap-fluid-3 text-fluid-3 justify-center">
        <div className="flex flex-col">
          <span>Total Commits:</span>
          <span>Top Language:</span>
        </div>
        <div className="flex flex-col text-brand-1">
          <span>{stats?.summary.commits || '--'}</span>
          <span>{stats?.summary.language || '--'}</span>
        </div>
      </div>
      <div className="flex flex-wrap gap-3 justify-center mt-3 pb-2 capitalize">
        {stats?.summary.topics.split('|').map((topic) => (
          <Chip key={topic}>{topic}</Chip>
        ))}
      </div>
    </div>
  );
};
