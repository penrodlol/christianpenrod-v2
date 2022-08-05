import { schedule } from '@netlify/functions';
import { Octokit } from '@octokit/rest';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

export const handler = schedule('@monthly', async () => {
  const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN });
  const { user, viewer } = await graphql(QUERY, {
    from: dayjs().startOf('M').subtract(1, 'M').toISOString(),
    to: dayjs().endOf('M').subtract(1, 'M').subtract(1, 'd').toISOString(),
  });

  // prettier-ignore
  const repos = user.contributionsCollection.repositoryContributions.nodes;
  const tools = repos.reduce((acc: Array<string>, { repository }: any) => {
    const _t = repository.repositoryTopics.nodes.map((n: any) => n.topic.name);
    return [...(acc ?? []), ..._t];
  }, []);

  // prettier-ignore
  const contributed = viewer.repositoriesContributedTo.nodes;
  const contributions = contributed.reduce((acc: Array<string>, node: any) => {
    return [...(acc ?? []), node.name];
  }, []);

  const prisma = new PrismaClient();
  await prisma.openSource.create({
    data: {
      createdAt: dayjs().toDate(),
      tools: tools.join('|'),
      contributions: contributions.join('|'),
      commits: user.contributionsCollection.totalCommitContributions,
    },
  });

  return { statusCode: 200 };
});

const QUERY = `
  query open_source($from: DateTime!, $to: DateTime!) {
    user(login: "${process.env.GITHUB_USERNAME}") {
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        repositoryContributions(first: 100) {
          nodes {
            repository {
              repositoryTopics(first: 100) {
                nodes {
                  topic {
                    name
                  }
                }
              }
            }
          }
        }
      }
    }
    viewer {
      repositoriesContributedTo(first: 100) {
        nodes {
          name
        }
      }
    }
  }
`;
