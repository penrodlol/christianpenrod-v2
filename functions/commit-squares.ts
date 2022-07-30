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
          contributionCalendar {
            weeks {
              contributionDays {
                date
                color
                contributionCount
                weekday
              }
            }
          }
        }        
      }
    }
  `);

  await new PrismaClient().commitSquare.createMany({
    data: contributionsCollection.contributionCalendar.weeks.flatMap(
      (week: any) =>
        week.contributionDays.map((day: any) => ({
          date: dayjs(day.date).toDate(),
          color: day.color,
          count: day.contributionCount,
          position: day.weekday,
        })),
    ),
  });

  return { statusCode: 200 };
});
