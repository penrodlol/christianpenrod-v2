import { GetProfile } from '@utils/octokit/profile';
import { FC } from 'react';
import { BiGitPullRequest } from 'react-icons/bi';
import {
  HiClock,
  HiExclamationCircle,
  HiOutlineCode,
  HiStar,
  HiUserGroup,
} from 'react-icons/hi';

export interface GithubStatsProps {
  user: GetProfile['user'];
}

export const GithubStats: FC<GithubStatsProps> = ({ user }) => (
  <div
    className="flex flex-wrap justify-between gap-x-4 gap-y-1 bg-2 elevation-10
               rounded-md py-4 px-6 text-sm"
  >
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <HiClock className="w-5 h-5 fill-brand-2" />
          <span>Total Commits:</span>
        </div>
        <span className="text-brand-1">{user.commits}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <HiStar className="w-5 h-5 fill-brand-2" />
          <span>Total Stars:</span>
        </div>
        <span className="text-brand-1">{user.stars}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <HiExclamationCircle className="w-5 h-5 fill-brand-2" />
          <span>Total Issues:</span>
        </div>
        <span className="text-brand-1">{user.issues}</span>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <BiGitPullRequest className="w-5 h-5 fill-brand-2" />
          <span>Total PRs:</span>
        </div>
        <span className="text-brand-1">{user.pullRequests}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <HiUserGroup className="w-5 h-5 fill-brand-2" />
          <span>Contributed To:</span>
        </div>
        <span className="text-brand-1">{user.contributedTo}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <HiOutlineCode className="w-5 h-5 stroke-brand-2" />
          <span>Top Language:</span>
        </div>
        <span className="text-brand-1">{user.language}</span>
      </div>
    </div>
  </div>
);
