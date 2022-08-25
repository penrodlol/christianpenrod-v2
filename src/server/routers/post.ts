import { Context } from '@server/create-context';
import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const postRouter = createRouter()
  .query('get-all', {
    resolve: ({ ctx }) => {
      return sortPosts(ctx.posts).map((post) => ({
        ...pick(post, ['title', 'description', 'slug', 'tags']),
        published: dayjs(post.published).format('MMM Do, YYYY'),
      }));
    },
  })
  .query('get', {
    input: z.string(),
    resolve: ({ ctx, input: slug }) => {
      const posts = sortPosts(ctx.posts);
      const post = posts.find((post) => post.slug.includes(slug))!;
      const prev = posts[posts.indexOf(post) + 1];
      const next = posts[posts.indexOf(post) - 1];

      return {
        ...pick(post, ['title', 'description', 'slug', 'tags', 'readingTime']),
        published: dayjs(post.published).format('MMM Do, YYYY'),
        content: post.body.code,
        repo: post.repo ?? null,
        headings: post.headings ?? null,
        prev: prev ? pick(prev, ['title', 'slug']) : null,
        next: next ? pick(next, ['title', 'slug']) : null,
      };
    },
  })
  .query('get-views', {
    input: z.string(),
    resolve: ({ ctx, input: post }) =>
      ctx.prisma.postView.upsert({
        update: { views: { increment: 1 } },
        create: { post },
        where: { post },
        select: { views: true },
      }),
  });

const sortPosts = (posts: Context['posts']) =>
  [...posts].sort((a, b) => {
    const aDate = dayjs(a.published);
    const bDate = dayjs(b.published);
    return aDate.isAfter(bDate) ? -1 : 1;
  });
