import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import { Query } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';

export interface GithubProps {
  repo:
    | Query<'github.get-porfolio'>['contributions'][0]
    | Query<'github.get-porfolio'>['projects'][0];
}

export const Github: FC<GithubProps> = ({ repo }) => (
  <Link href={repo.url} passHref>
    <a
      className="group flex flex-col gap-1 bg-surface-2 shadow-2 rounded-md py-3 px-5
                 hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${repo.name}. ${repo.description}`}
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex gap-2 items-center">
          <GithubBookmarkIcon className="h-5 w-5 fill-brand-2" />
          <span className="text-fluid-3 group-hover:text-brand-2">
            {repo.name}
          </span>
        </div>
        <Chip className="capitalize">{repo.topic}</Chip>
      </div>
      <p className="text-base-2 text-fluid-2">{repo.description}</p>
    </a>
  </Link>
);
