import { GetRepo } from '@utils/octokit/repo';
import Link from 'next/link';
import { FC } from 'react';
import { BiGitRepoForked } from 'react-icons/bi';
import { GoRepo } from 'react-icons/go';
import { HiOutlineStar } from 'react-icons/hi';

export interface PostGithubProps {
  repo: NonNullable<GetRepo>;
}

export const PostGithub: FC<PostGithubProps> = ({ repo }) => (
  <Link href={repo.url} passHref>
    <a
      className="group bg-2 elevation-10 rounded-md p-5 hover:outline
                 hover:outline-2 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Check out the github repo: ${repo.name}. ${repo.description}`}
    >
      <div className="flex gap-4 items-center text-brand-2">
        <GoRepo className="w-6 h-6" />
        <span className="text-base text-1 group-hover:text-brand-2">
          {repo.name}
        </span>
      </div>
      <p className="text-2 font-semibold mt-4 mb-5 text-sm">
        {repo.description}
      </p>
      <div className="flex gap-4 items-center">
        <div className="flex gap-2 items-center mr-4">
          <div className="bg-accent-2 w-4 h-4 rounded-full" />
          <span className="text-2 font-semibold">{repo.language}</span>
        </div>
        <div className="flex gap-2 items-center text-brand-2">
          <HiOutlineStar className="w-5 h-5" />
          <span className="text-2 font-semibold">{repo.stars ?? 0}</span>
        </div>
        <div className="flex gap-2 items-center text-brand-2">
          <BiGitRepoForked className="w-5 h-5" />
          <span className="text-2 font-semibold">{repo.forks ?? 0}</span>
        </div>
      </div>
    </a>
  </Link>
);
