import dayjs from '@utils/dayjs';
import { allPosts, Post } from 'contentlayer/generated';
import { pick } from 'radash';

export type GetSortedPosts = ReturnType<typeof getSortedPosts>;
export type GetPost = ReturnType<typeof getPost>;

export const getSortedPosts = (limit?: number) => {
  const _sortedPosts = sortPosts().map((post) => ({
    ...pick(post, ['title', 'description', 'slug', 'tags']),
    published: dayjs(post.published).format('MMM Do, YYYY'),
  }));

  return limit ? _sortedPosts.slice(0, limit) : _sortedPosts;
};

export const getPost = (slug: string) => {
  const posts = sortPosts();
  const post = posts.find((post) => post.slug === slug) as NonNullable<Post>;
  const prev = posts[posts.indexOf(post) + 1];
  const next = posts[posts.indexOf(post) - 1];

  return {
    ...post,
    published: dayjs(post.published).format('MMM Do, YYYY'),
    headings: post.headings as Array<string> | undefined,
    prev: prev ? pick(prev, ['slug', 'title']) : null,
    next: next ? pick(next, ['slug', 'title']) : null,
  };
};

const sortPosts = () =>
  allPosts.sort((a, b) => {
    const aPublished = dayjs(a.published).unix();
    const bPublished = dayjs(b.published).unix();
    return bPublished - aPublished;
  });
