import { pick } from 'contentlayer/client';
import { allPosts, Post } from 'contentlayer/generated';
import sortBy from 'just-sort-by';

export type GetPosts = ReturnType<typeof getPosts>;
export type GetPost = ReturnType<typeof getPost>;

export const getPosts = () => sortBy(allPosts, '_id').reverse();

export const getPost = (slug: string) => {
  const posts = getPosts();
  const post = posts.find((post) => post.slug === slug) as NonNullable<Post>;
  const prev = posts[posts.indexOf(post) + 1];
  const next = posts[posts.indexOf(post) - 1];

  return {
    ...post,
    headings: post.headings as Array<string>,
    prev: prev ? pick(prev, ['slug', 'title']) : null,
    next: next ? pick(next, ['slug', 'title']) : null,
  };
};
