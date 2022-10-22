import env from '@env/server';
import { Repository } from '@octokit/graphql-schema';
import { octokit } from '.';

type User = { user: { repo: Repository } };

export type GetRepo = Awaited<ReturnType<typeof getRepo>>;

export const getRepo = async (name: string) => {
  const { user } = await octokit<User>(QUERY, { name });

  return {
    id: user.repo.id,
    name: user.repo.name,
    description: user.repo.description,
    url: user.repo.url,
    stars: user.repo.stargazerCount,
    forks: user.repo.forkCount,
    language: user.repo.primaryLanguage?.name,
  };
};

const QUERY = `
  query get_repo($name: String!) {
    user(login: "${env.GITHUB_USERNAME}") {
      repo: repository(name: $name) {
        id
        name
        description
        url
        stargazerCount
        forkCount
        primaryLanguage {
          name
        }
      }
    }
  }
`;
