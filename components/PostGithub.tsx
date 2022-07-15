import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import GithubForkIcon from '@svg/github-fork.svg';
import GithubStarIcon from '@svg/github-star.svg';
import { fetchRepo } from '@utils/octokit';
import { FC } from 'react';
import { useAsync } from 'react-async-hook';
import { Anchor } from './Anchor';

export interface PostGithubProps {
  github: string;
}

export const PostGithub: FC<PostGithubProps> = ({ github }) => {
  const { result } = useAsync(fetchRepo, [github]);

  return (
    <div className="bg-surface-2 shadow-3 rounded-2 p-4">
      <div className="flex gap-3 items-center text-brand-1">
        <GithubBookmarkIcon width={25} height={25} />
        <Anchor
          href={result?.html_url}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-3"
        >
          {result?.name}
        </Anchor>
      </div>
      <p className="text-basic-2 font-semibold mt-3 mb-4">
        {result?.description}
      </p>
      <div className="flex gap-3 items-center">
        <div className="flex gap-2 items-center mr-3">
          <div className="bg-accent-2 w-3 h-3 rounded-[50%]" />
          <span className="text-basic-2 font-semibold">{result?.language}</span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubStarIcon width={20} height={20} />
          <span className="text-basic-2 font-semibold">
            {result?.stargazers_count}
          </span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubForkIcon width={20} height={20} />
          <span className="text-basic-2 font-semibold">
            {result?.forks_count}
          </span>
        </div>
      </div>
    </div>
  );
};
