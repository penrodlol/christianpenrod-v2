import { schedule } from '@netlify/functions';
import { repos } from '@utils/octokit';
import { supabase } from '@utils/supabase';
import dayjs from 'dayjs';
import isBetween from 'dayjs/plugin/isBetween';

dayjs.extend(isBetween);

const username = String(process.env.GITHUB_USERNAME);
const owner = String(process.env.GITHUB_USERNAME);

export const handler = schedule('@monthly', async () => {
  const start = dayjs().subtract(1, 'M').startOf('M');
  const end = dayjs().subtract(1, 'M').endOf('M');

  const { data } = await repos.listForUser({ username, sort: 'updated' });

  const enriched = await Promise.all(
    data
      .filter((r) => dayjs(r.updated_at).isBetween(start, end, 'day', '[]'))
      .map(async ({ name: repo, topics }) => {
        const since = dayjs(start).format('YYYY-MM-DDTHH:MM:SSZ');
        const until = dayjs(end).format('YYYY-MM-DDTHH:MM:SSZ');
        const commits = await repos.listCommits({ owner, repo, since, until });
        const langs = await repos.listLanguages({ owner, repo });

        return { topics, commits, langs: Object.keys(langs.data) };
      }),
  );

  const payload = await supabase.from('github_stats').insert(
    enriched.reduce((acc, { commits, langs, topics }) => {
      acc.commits = (acc.commits || 0) + commits.data.length;
      acc.languages = Array.from(new Set((acc.languages || []).concat(langs)));
      acc.topics = Array.from(new Set((acc.topics || []).concat(topics || [])));
      return acc;
    }, {} as any),
  );

  return { statusCode: payload.error ? 500 : 200 };
});
