import { CommitSummary } from '@prisma/client';
import TrendingUpIcon from '@svg/trending-up.svg';
import { FC } from 'react';
import { Chip } from './Chip';
import { Line } from './Line';

export interface GithubMonthlyProps {
  summary: CommitSummary;
}

export const GithubMonthly: FC<GithubMonthlyProps> = ({ summary }) => (
  <div className="bg-surface-2 rounded-md shadow-2 p-5 flex flex-col gap-fluid-1">
    <div className="max-w-max mx-auto">
      <h2 className="flex gap-3 items-center text-fluid-3">
        Monthly Github Statistics
        <TrendingUpIcon className="fill-base-2 mb-1 sm:w-7 sm:h-7 w-5 h-5" />
      </h2>
      <Line />
    </div>
    <div className="flex gap-fluid-3 justify-center text-fluid-3">
      <div className="flex flex-col">
        <span>Total Commits:</span>
        <span>Top Language:</span>
      </div>
      <div className="flex flex-col text-brand-1 text-fluid-3">
        <span>{summary.commits}</span>
        <span>{summary.language}</span>
      </div>
    </div>
    <div className="flex flex-wrap gap-3 justify-center mt-3 pb-2 capitalize">
      {summary.topics.split('|').map((topic) => (
        <Chip key={topic}>{topic}</Chip>
      ))}
    </div>
  </div>
);
