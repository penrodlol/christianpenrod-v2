import { getRepo, GetRepo } from '@lib/octokit/repo';
import { Book, GitFork, Star } from 'lucide-react';
import Link from 'next/link';

export interface RepoProps {
  name: NonNullable<GetRepo['name']>;
}

export const Repo = async ({ name }: RepoProps) => {
  const repo = await getRepo(name);

  return (
    <Link
      href={repo.url}
      className="group rounded-md bg-2 p-5 elevation-10 hover:outline-2
                 hover:outline-offset-4 hover:outline"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`Check out the github repo: ${repo.name}. ${repo.description}`}
    >
      <div className="flex items-center gap-4 text-brand-2">
        <Book className="h-5 w-5 stroke-brand-2" strokeWidth="3" />
        <span className="text-1 text-base group-hover:text-brand-2">
          {repo.name}
        </span>
      </div>
      <p className="mt-4 mb-5 font-semibold text-2 text-sm">
        {repo.description}
      </p>
      <div className="flex items-center gap-4">
        <div className="mr-4 flex items-center gap-2">
          <div className="h-4 w-4 rounded-full bg-accent-2" />
          <span className="font-semibold text-2">{repo.language}</span>
        </div>
        <div className="flex items-center gap-2 text-brand-2">
          <Star className="h-5 w-5" strokeWidth="3" />
          <span className="font-semibold text-2">{repo.stars ?? 0}</span>
        </div>
        <div className="flex items-center gap-2 text-brand-2">
          <GitFork className="h-5 w-5" strokeWidth="3" />
          <span className="font-semibold text-2">{repo.forks ?? 0}</span>
        </div>
      </div>
    </Link>
  );
};
