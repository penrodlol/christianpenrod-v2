import { Contribution } from '@prisma/client';
import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import Link from 'next/link';
import { FC } from 'react';

export interface ContributionCardProps {
  contribution: Partial<Contribution>;
}

export const ContributionCard: FC<ContributionCardProps> = ({
  contribution,
}) => (
  <Link href={contribution.url!} passHref>
    <a
      className="group flex flex-col gap-1 bg-surface-2 shadow-2 rounded-md py-3 px-5
                 hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Go to github repo for ${contribution.name}`}
    >
      <div className="flex justify-between">
        <div className="flex gap-2 items-center text-lg">
          <GithubBookmarkIcon className="h-5 w-5 fill-brand-1" />
          <span className="group-hover:text-brand-1">{contribution.name}</span>
        </div>
      </div>
      <p className="text-base-2">{contribution.description}</p>
    </a>
  </Link>
);
