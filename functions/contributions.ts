import { schedule } from '@netlify/functions';
import { Octokit } from '@octokit/rest';
import { Prisma, PrismaClient } from '@prisma/client';
import dayjs from 'dayjs';

const { graphql } = new Octokit({ auth: process.env.GITHUB_TOKEN });
const prisma = new PrismaClient();

export const handler = schedule('@daily', async () => {
  const from = dayjs().subtract(5, 'month').toISOString();
  const { user } = await graphql(QUERY, { from });

  await Promise.all(
    [
      ...user.dto.repos.nodes,
      ...user.dto.pulls.nodes.map((n: any) => n.pullRequest),
      ...user.dto.issues.nodes.map((n: any) => n.issue),
    ]
      .sort((a, b) => (dayjs(a.date).isAfter(dayjs(b.date)) ? -1 : 1))
      .slice(0, 3)
      .map(async ({ repo }: any) => {
        const payload: Prisma.ContributionCreateInput = {
          externalId: repo.id,
          name: repo.name,
          description: repo.description,
          url: repo.url,
        };

        await prisma.contribution.upsert({
          where: { externalId: repo.id },
          create: payload,
          update: payload,
        });
      }),
  );

  return { statusCode: 200 };
});

const FIELDS = `
  repo: repository {
    id
    name: nameWithOwner
    description
    url
  }
`;

const QUERY = `
  query latest_contributions($from: DateTime!) {
    user(login: "${process.env.GITHUB_USERNAME}") {
      dto: contributionsCollection(from: $from) {
        repos: repositoryContributions(first: 100) {
          nodes { date: occurredAt ${FIELDS} }
        }
        pulls: pullRequestContributions(first: 100) {
          nodes { pullRequest { date: createdAt ${FIELDS} } }
        }
        issues: issueContributions(first: 100) {
          nodes { issue { date: createdAt ${FIELDS} } }
        }
      }
    }
  }
`;
