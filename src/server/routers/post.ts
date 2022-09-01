import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';
import { z } from 'zod';
import { createRouter } from '../create-router';

export const postRouter = createRouter()
  .query('get-many', {
    input: z.object({ limit: z.number() }).nullish(),
    resolve: ({ ctx, input }) => {
      const posts = ctx.posts.map((post) => ({
        ...pick(post, ['title', 'description', 'slug', 'tags']),
        published: dayjs(post.published).format('MMM Do, YYYY'),
      }));

      return input ? posts.slice(0, input.limit) : posts;
    },
  })
  .query('get', {
    input: z.string(),
    resolve: ({ ctx, input: slug }) => {
      const post = ctx.posts.find((post) => post.slug.includes(slug))!;
      const prev = ctx.posts[ctx.posts.indexOf(post) + 1];
      const next = ctx.posts[ctx.posts.indexOf(post) - 1];

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
