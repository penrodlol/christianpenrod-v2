import { pick } from 'contentlayer/client';
import { allPosts, Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

export type GetSortedPosts = ReturnType<typeof getSortedPosts>;
export type GetPost = ReturnType<typeof getPost>;

export const getSortedPosts = (limit?: number) => {
  const _sortedPosts = allPosts
    .sort((a, b) => (a.published > b.published ? -1 : 1))
    .map((post) => ({
      ...pick(post, ['title', 'description', 'slug', 'tags']),
      published: dayjs(post.published).format('MMM Do, YYYY'),
    }));

  return limit ? _sortedPosts.slice(0, limit) : _sortedPosts;
};

export const getPost = (slug: string) => {
  const post = allPosts.find((post) => post.slug === slug) as NonNullable<Post>;
  const prev = allPosts[allPosts.indexOf(post) + 1];
  const next = allPosts[allPosts.indexOf(post) - 1];

  return {
    ...post,
    published: dayjs(post.published).format('MMM Do, YYYY'),
    headings: post.headings as Array<string> | undefined,
    prev: prev ? pick(prev, ['slug', 'title']) : null,
    next: next ? pick(next, ['slug', 'title']) : null,
  };
};
