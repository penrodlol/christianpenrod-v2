import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import GithubForkIcon from '@svg/github-fork.svg';
import GithubStarIcon from '@svg/github-star.svg';
import { FC } from 'react';
import useSWR from 'swr';
import { Anchor } from './Anchor';

export interface PostGithubProps {
  repo: string;
}

export const PostGithub: FC<PostGithubProps> = ({ repo }) => {
  const result = useSWR(`/api/repo-meta/${repo}`, (url) =>
    fetch(url).then((res) => res.json()),
  );

  return (
    <div className="bg-surface-2 shadow-2 rounded-md p-5">
      <div className="flex gap-4 items-center text-brand-1">
        <GithubBookmarkIcon width={25} height={25} />
        <Anchor
          href={result?.data?.html_url}
          target="_blank"
          rel="nofollow noreferrer"
          className="text-xl text-base-1"
        >
          {result?.data?.name}
        </Anchor>
      </div>
      <p className="text-base-2 font-semibold mt-4 mb-5">
        {result?.data?.description}
      </p>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center mr-4">
          <div className="bg-accent-2 w-4 h-4 rounded-full" />
          <span className="text-base-2 font-semibold">
            {result?.data?.language}
          </span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubStarIcon width={20} height={20} />
          <span className="text-base-2 font-semibold">
            {result?.data?.stargazers_count}
          </span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubForkIcon width={20} height={20} />
          <span className="text-base-2 font-semibold">
            {result?.data?.forks_count}
          </span>
        </div>
      </div>
    </div>
  );
};
