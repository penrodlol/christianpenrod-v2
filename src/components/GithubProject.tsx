import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import { Query } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';

export interface GithubProjectProps {
  project: Query<'github.get-projects'>[number];
}

export const GithubProject: FC<GithubProjectProps> = ({ project }) => (
  <Link href={project.url} passHref>
    <a
      className="group flex flex-col gap-1 bg-2 shadow-2 rounded-md py-3 px-8
                 hover:outline hover:outline-2 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${project.name}. ${project.description}`}
    >
      <div className="flex flex-col-reverse sm:flex-row sm:items-center justify-between gap-2">
        <div className="flex gap-2 items-center">
          <GithubBookmarkIcon className="h-5 w-5 fill-brand-2" />
          <span className="text-fluid-3 group-hover:text-brand-2">
            {project.name}
          </span>
        </div>
        <Chip className="capitalize">{project.topic}</Chip>
      </div>
      <p className="text-2 text-fluid-2">{project.description}</p>
    </a>
  </Link>
);
