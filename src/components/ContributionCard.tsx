import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import { Query } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';

export interface ContributionCardProps {
  contribution: Query<'github.get-contributions'>[0];
}

export const ContributionCard: FC<ContributionCardProps> = ({
  contribution,
}) => (
  <Link href={contribution.url} passHref>
    <a
      className="group flex flex-col gap-1 bg-surface-2 shadow-2 rounded-md py-3 px-5
                 hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${contribution.name}. ${contribution.description}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center text-xl">
          <GithubBookmarkIcon className="h-5 w-5 fill-brand-1" />
          <span className="group-hover:text-brand-1">{contribution.name}</span>
        </div>
      </div>
      <p className="text-base-2 text-lg">{contribution.description}</p>
    </a>
  </Link>
);
