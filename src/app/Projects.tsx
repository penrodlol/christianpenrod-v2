import env from '@env/server.mjs';
import { PinnableItemConnection, Repository } from '@octokit/graphql-schema';
import { Chip } from '@ui/Chip';
import { octokit } from '@utils/octokit';
import { Book } from 'lucide-react';

export const Projects = async () => {
  const projects = await getProjects();

  return (
    <ul className="flex flex-col gap-4">
      {projects.map((project) => (
        <li key={project.name}>
          <a
            href={project.url}
            className="group flex flex-col gap-2 rounded-md bg-2 py-3 px-5 hover-card elevation-3"
            target="_blank"
            rel="nofollow noopener noreferrer"
            aria-label={`${project.name}. ${project.description}`}
          >
            <div className="flex flex-col-reverse justify-between gap-2 xl:flex-row xl:items-center">
              <div className="flex items-center gap-2">
                <Book className="h-5 w-5 translate-y-0.5" />
                <span className="text-base group-hover:text-brand-2">
                  {project.name}
                </span>
              </div>
              <Chip className="capitalize">{project.topic}</Chip>
            </div>
            <p className="text-2 text-sm">{project.description}</p>
          </a>
        </li>
      ))}
    </ul>
  );
};

const getProjects = async () => {
  const query = `query { user(login: "${env.GITHUB_USERNAME}") { projects: pinnedItems(first: 2 types: [REPOSITORY]) { nodes { ... on Repository { name: nameWithOwner description url repositoryTopics(first: 1) { nodes { topic { name } } } } } } } }`;
  return octokit<{ user: { projects: PinnableItemConnection } }>(query).then(
    ({ user }) =>
      (user.projects.nodes as Array<Repository>).map((project) => ({
        name: project.name,
        description: project.description,
        url: project.url,
        topic: project.repositoryTopics.nodes?.shift()?.topic.name,
      })),
  );
};
