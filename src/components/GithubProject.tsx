import GithubBookmarkIcon from '@svg/github-bookmark.svg';
import { QGithub } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';

export interface GithubProjectProps {
  project: NonNullable<QGithub<'getProfile'>['projects']>[number];
}

export const GithubProject: FC<GithubProjectProps> = ({ project }) => (
  <Link href={project.url ?? ''} passHref>
    <a
      className="group flex flex-col gap-2 bg-2 elevation-10 rounded-md py-3 px-5
                 hover:outline hover:outline-2 hover:outline-offset-4"
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={`${project.name}. ${project.description}`}
    >
      <div className="flex flex-col-reverse xl:flex-row xl:items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <GithubBookmarkIcon className="h-5 w-5 fill-brand-2 translate-y-0.5" />
          <span className="text-base group-hover:text-brand-2">
            {project.name}
          </span>
        </div>
        <Chip className="capitalize">{project.topic}</Chip>
      </div>
      <p className="text-2 text-sm">{project.description}</p>
    </a>
  </Link>
);
