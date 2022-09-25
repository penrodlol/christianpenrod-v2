import { trpc } from '@server/trpc';
import { pick } from 'contentlayer/client';
import dayjs from 'dayjs';
import { z } from 'zod';

export const postRouter = trpc.router({
  getMany: trpc.procedure
    .input(z.object({ limit: z.number() }).nullish())
    .query(({ ctx, input }) => {
      const posts = ctx.posts.map((post) => ({
        ...pick(post, ['title', 'description', 'slug', 'tags']),
        published: dayjs(post.published).format('MMM Do, YYYY'),
      }));

      return input ? posts.slice(0, input.limit) : posts;
    }),
  get: trpc.procedure.input(z.string()).query(({ ctx, input: slug }) => {
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
  }),
  getViews: trpc.procedure.input(z.string()).query(({ ctx, input: post }) =>
    ctx.prisma.postView.upsert({
      update: { views: { increment: 1 } },
      create: { post },
      where: { post },
      select: { views: true },
    }),
  ),
});
