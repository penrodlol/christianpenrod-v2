import { GetProfile } from '@utils/octokit/profile';
import { Bug, Clock, Code2, GitPullRequest, Star, Users } from 'lucide-react';
import { FC } from 'react';

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
          <Clock className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Total Commits:</span>
        </div>
        <span className="text-brand-1">{user.commits}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <Star className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Total Stars:</span>
        </div>
        <span className="text-brand-1">{user.stars}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <Bug className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Total Issues:</span>
        </div>
        <span className="text-brand-1">{user.issues}</span>
      </div>
    </div>
    <div className="flex flex-col gap-1">
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <GitPullRequest className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Total PRs:</span>
        </div>
        <span className="text-brand-1">{user.pullRequests}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <Users className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Contributed To:</span>
        </div>
        <span className="text-brand-1">{user.contributedTo}</span>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-2">
          <Code2 className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
          <span>Top Language:</span>
        </div>
        <span className="text-brand-1">{user.language}</span>
      </div>
    </div>
  </div>
);
