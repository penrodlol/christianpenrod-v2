import { GetRepo } from '@utils/octokit/repo';
import { Book, GitFork, Star } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

export interface PostGithubProps {
  repo: NonNullable<GetRepo>;
}

export const PostGithub: FC<PostGithubProps> = ({ repo }) => (
  <Link href={repo.url} passHref>
    <a
      className="group bg-2 elevation-3 rounded-md p-5 hover:outline
                 hover:outline-2 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Check out the github repo: ${repo.name}. ${repo.description}`}
    >
      <div className="flex gap-4 items-center text-brand-2">
        <Book className="w-5 h-5 stroke-brand-2" strokeWidth="3" />
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
          <Star className="w-5 h-5" strokeWidth="3" />
          <span className="text-2 font-semibold">{repo.stars ?? 0}</span>
        </div>
        <div className="flex gap-2 items-center text-brand-2">
          <GitFork className="w-5 h-5" strokeWidth="3" />
          <span className="text-2 font-semibold">{repo.forks ?? 0}</span>
        </div>
      </div>
    </a>
  </Link>
);
