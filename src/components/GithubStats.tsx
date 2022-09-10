import ClockIcon from '@svg/clock.svg';
import ExclamationIcon from '@svg/exclamation.svg';
import GithubPrIcon from '@svg/github-pr.svg';
import StarIcon from '@svg/star.svg';
import { Query } from '@utils/trpc';
import { FC } from 'react';

export interface GithubStatsProps {
  stats: Query<'github.get-stats'>;
}

export const GithubStats: FC<GithubStatsProps> = ({ stats }) => (
  <div className="flex gap-10 bg-2 shadow-2 rounded-md py-4 px-8 text-lg">
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-2">
        <ClockIcon className="w-5 h-5 fill-brand-2" />
        <span>Total Commits:</span>
      </div>
      <div className="flex items-center gap-2">
        <StarIcon className="w-5 h-5 fill-brand-2" />
        <span>Total Stars:</span>
      </div>
      <div className="flex items-center gap-2">
        <ExclamationIcon className="w-5 h-5 fill-brand-2" />
        <span>Total Issues:</span>
      </div>
      <div className="flex items-center gap-2">
        <GithubPrIcon className="w-5 h-5 fill-brand-2" />
        <span>Total PRs:</span>
      </div>
    </div>
    <div className="flex flex-col gap-1 text-brand-1">
      <span>{stats.commits}</span>
      <span>{stats.stars}</span>
      <span>{stats.issues}</span>
      <span>{stats.pullRequests}</span>
    </div>
  </div>
);
