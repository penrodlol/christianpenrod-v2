import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import GithubForkIcon from '@svg/github-fork.svg';
import GithubStarIcon from '@svg/github-star.svg';
import { Query, trpc } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';

export interface PostGithubProps {
  name: NonNullable<Query<'post.get'>['repo']>;
}

export const PostGithub: FC<PostGithubProps> = ({ name }) => {
  const { data: repo } = trpc.useQuery(['github.get-repo', name]);

  return (
    <Link href={repo?.html_url || ''} passHref>
      <a
        className="group bg-surface-2 shadow-2 rounded-md p-5 hover:outline
                   hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={`Check out the github repo: ${repo?.name}. ${repo?.description}`}
      >
        <div className="flex gap-4 items-center text-brand-2">
          <GithubBookmarkIcon width={25} height={25} />
          <span className="text-xl text-base-1 group-hover:text-brand-2">
            {repo?.name}
          </span>
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
          <div className="flex gap-2 items-center text-brand-2">
            <GithubStarIcon width={20} height={20} />
            <span className="text-base-2 font-semibold">
              {repo?.stargazers_count || 0}
            </span>
          </div>
          <div className="flex gap-2 items-center text-brand-2">
            <GithubForkIcon width={20} height={20} />
            <span className="text-base-2 font-semibold">
              {repo?.forks_count || 0}
            </span>
          </div>
        </div>
      </a>
    </Link>
  );
};
