'use client';

import { GetProfile } from '@utils/octokit/profile';
import { Book } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import { Chip } from './Chip';

export interface GithubProjectProps {
  project: GetProfile['projects'][number];
}

export const GithubProject: FC<GithubProjectProps> = ({ project }) => (
  <Link
    href={project.url}
    className="group flex flex-col gap-2 rounded-md bg-2 py-3 px-5 elevation-10 hover-card"
    target="_blank"
    rel="nofollow noopener noreferrer"
    aria-label={`${project.name}. ${project.description}`}
  >
    <div className="flex flex-col-reverse justify-between gap-2 xl:flex-row xl:items-center">
      <div className="flex items-center gap-2">
        <Book
          className="h-5 w-5 translate-y-0.5 stroke-brand-2"
          strokeWidth="3"
        />
        <span className="text-base group-hover:text-brand-2">
          {project.name}
        </span>
      </div>
      <Chip className="capitalize">{project.topic}</Chip>
    </div>
    <p className="text-2 text-sm">{project.description}</p>
  </Link>
);
