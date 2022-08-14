import { Contribution } from '@prisma/client';
import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import { FC } from 'react';
import { Anchor } from './Anchor';

export interface ContributionCardProps {
  contribution: Partial<Contribution>;
}

export const ContributionCard: FC<ContributionCardProps> = ({
  contribution,
}) => (
  <div className="flex flex-col gap-1 bg-surface-2 shadow-2 rounded-md py-3 px-5">
    <div className="flex justify-between">
      <div className="flex gap-2 items-center text-lg">
        <GithubBookmarkIcon className="h-5 w-5 fill-brand-1" />
        <Anchor
          href={contribution.url}
          target="_blank"
          rel="nofollow noopener noreferrer"
          className="text-base-1"
        >
          {contribution.name}
        </Anchor>
      </div>
    </div>
    <p className="text-base-2">{contribution.description}</p>
  </div>
);
