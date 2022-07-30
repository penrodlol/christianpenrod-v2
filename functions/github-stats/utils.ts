import { Prisma } from '@prisma/client';
import dayjs from 'dayjs';

type BuildSummary = Prisma.CommitSummaryCreateArgs['data'];
type BuildSquares = Prisma.CommitSquareCreateManyArgs['data'];

export function buildSummary(payload: any): BuildSummary {
  const topics: Array<string> = [];
  const languages: Array<string> = [];

  payload.repositoryContributions.nodes.forEach((node: any) => {
    const { repository: repo } = node;
    languages.push(repo.primaryLanguage.name);
    topics.push(repo.repositoryTopics.nodes.map((n: any) => n.topic.name));
  });

  return {
    commits: payload.totalCommitContributions,
    topics: Array.from(new Set(topics.flat())).join('|'),
    language: [...languages]
      .sort(
        (a, b) =>
          languages.filter((l) => l === a).length -
          languages.filter((l) => l === b).length,
      )
      .pop()!,
  };
}

export function buildSquares(payload: any): BuildSquares {
  return payload.contributionCalendar.weeks.flatMap((week: any) =>
    week.contributionDays.map((day: any) => ({
      date: dayjs(day.date).toDate(),
      color: day.color,
      count: day.contributionCount,
      position: day.weekday,
    })),
  );
}
