import { schedule } from '@netlify/functions';
import { Octokit } from '@octokit/rest';
import { PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

export const handler = schedule('@monthly', async () => {
  const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN });

  const from = dayjs().subtract(1, 'M').startOf('M').toISOString();
  const to = dayjs().subtract(1, 'M').endOf('M').toISOString();
  // prettier-ignore
  const { user: { contributionsCollection } } = await graphql(`
    query {
      user(login: "${process.env.GITHUB_USERNAME}") {
        contributionsCollection(from: "${from}", to: "${to}") {
          totalCommitContributions
          repositoryContributions(first: 100) {
            nodes {
              repository {
                primaryLanguage {
                  name
                }
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
    }
  `);

  const topics: Array<string> = [];
  const languages: Array<string> = [];

  contributionsCollection.repositoryContributions.nodes.forEach((node: any) => {
    const { repository: repo } = node;
    languages.push(repo.primaryLanguage.name);
    topics.push(repo.repositoryTopics.nodes.map((n: any) => n.topic.name));
  });

  await new PrismaClient().commitSummary.create({
    data: {
      commits: contributionsCollection.totalCommitContributions,
      topics: Array.from(new Set(topics.flat())).join('|'),
      language: [...languages]
        .sort(
          (a, b) =>
            languages.filter((l) => l === a).length -
            languages.filter((l) => l === b).length,
        )
        .pop()!,
    },
  });

  return { statusCode: 200 };
});
