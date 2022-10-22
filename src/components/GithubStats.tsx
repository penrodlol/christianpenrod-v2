import ClockIcon from '@svg/clock.svg';
import CodeBracketIcon from '@svg/code-bracket.svg';
import ExclamationIcon from '@svg/exclamation.svg';
import GithubPrIcon from '@svg/github-pr.svg';
import StarIcon from '@svg/star.svg';
import UserGroupIcon from '@svg/user-group.svg';
import { QGithub } from '@utils/trpc';
import { FC } from 'react';

export interface GithubStatsProps {
  user: NonNullable<QGithub<'getProfile'>['user']>;
}

export const GithubStats: FC<GithubStatsProps> = ({ user }) => (
  <div
    className="flex flex-wrap justify-between gap-x-4 gap-y-1 bg-2 elevation-10
               rounded-md py-4 px-6 text-sm"
  >
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <ClockIcon className="w-5 h-5 fill-brand-2" />
          <span>Total Commits:</span>
        </div>
        <span className="text-brand-1">{user.commits}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <StarIcon className="w-5 h-5 fill-brand-2" />
          <span>Total Stars:</span>
        </div>
        <span className="text-brand-1">{user.stars}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <ExclamationIcon className="w-5 h-5 fill-brand-2" />
          <span>Total Issues:</span>
        </div>
        <span className="text-brand-1">{user.issues}</span>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <GithubPrIcon className="w-5 h-5 fill-brand-2" />
          <span>Total PRs:</span>
        </div>
        <span className="text-brand-1">{user.pullRequests}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <UserGroupIcon className="w-5 h-5 fill-brand-2" />
          <span>Contributed To:</span>
        </div>
        <span className="text-brand-1">{user.contributedTo}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <CodeBracketIcon className="w-5 h-5 fill-brand-2" />
          <span>Top Language:</span>
        </div>
        <span className="text-brand-1">{user.language}</span>
      </div>
    </div>
  </div>
);
