import env from '@next/env';
import dayjs from 'dayjs';
import { Feed } from 'feed';
import { writeFileSync } from 'fs';
import { allPosts } from '../.contentlayer/generated/index.mjs';

(async () => {
  env.loadEnvConfig(process.cwd());

  const author = {
    name: process.env.NEXT_PUBLIC_NAME,
    email: process.env.NEXT_PUBLIC_EMAIL,
    link: process.env.NEXT_PUBLIC_TWITTER,
  };

  const feed = new Feed({
    title: `Blog | ${process.env.NEXT_PUBLIC_NAME}`,
    id: process.env.NEXT_PUBLIC_DOMAIN,
    link: process.env.NEXT_PUBLIC_DOMAIN,
    copyright: `©${process.env.NEXT_PUBLIC_COPYRIGHT_YEAR}, ${process.env.NEXT_PUBLIC_NAME}`,
    language: 'en',
    author,
  });

  allPosts.forEach((post) =>
    feed.addItem({
      title: post.title,
      description: post.description,
      id: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}`,
      link: `${process.env.NEXT_PUBLIC_DOMAIN}/blog/${post.slug}`,
      date: dayjs(post.published).toDate(),
      category: post.tags.map((tag) => ({ name: tag })),
      author: [author],
    }),
  );

  writeFileSync('./public/rss.xml', feed.rss2());
})();
