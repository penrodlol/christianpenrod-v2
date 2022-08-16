import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import GithubForkIcon from '@svg/github-fork.svg';
import GithubStarIcon from '@svg/github-star.svg';
import { ReposGet } from '@utils/octokit';
import Link from 'next/link';
import { FC } from 'react';
import useSWR from 'swr';
import { Anchor } from './Anchor';

export interface PostGithubProps {
  name: string;
}

export const PostGithub: FC<PostGithubProps> = ({ name }) => {
  const { data: repo } = useSWR<Partial<ReposGet>>(
    `/api/github/${name}`,
    (url) => fetch(url).then((res) => res.json()),
    { revalidateOnFocus: false },
  );

  return (
    <div className="bg-surface-2 shadow-2 rounded-md p-5">
      <div className="flex gap-4 items-center text-brand-1">
        <GithubBookmarkIcon width={25} height={25} />
        <Link href={repo?.html_url || ''} passHref>
          <Anchor
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="text-xl text-base-1"
            aria-label={`Go to ${repo?.name}`}
          >
            {repo?.name}
          </Anchor>
        </Link>
      </div>
      <p className="text-base-2 font-semibold mt-4 mb-5">
        {repo?.description || '--'}
      </p>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center mr-4">
          <div className="bg-accent-2 w-4 h-4 rounded-full" />
          <span className="text-base-2 font-semibold">
            {repo?.language || '--'}
          </span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubStarIcon width={20} height={20} />
          <span className="text-base-2 font-semibold">
            {repo?.stargazers_count || 0}
          </span>
        </div>
        <div className="flex gap-2 items-center text-brand-1">
          <GithubForkIcon width={20} height={20} />
          <span className="text-base-2 font-semibold">
            {repo?.forks_count || 0}
          </span>
        </div>
      </div>
    </div>
  );
};
