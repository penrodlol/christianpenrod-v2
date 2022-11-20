import { pick } from 'contentlayer/client';
import { allPosts } from 'contentlayer/generated';

export type GetPosts = ReturnType<typeof getPosts>;
export type GetPost = ReturnType<typeof getPost>;

export const getPosts = () =>
  allPosts.sort((a, b) => b._id.localeCompare(a._id));

export const getPost = (slug: string) => {
  const posts = getPosts();
  const post = posts.find((post) => post.slug === slug);

  if (!post) return null;

  const prev = posts[posts.indexOf(post) + 1];
  const next = posts[posts.indexOf(post) - 1];

  return {
    ...post,
    headings: post.headings as Array<string>,
    prev: prev ? pick(prev, ['slug', 'title']) : null,
    next: next ? pick(next, ['slug', 'title']) : null,
  };
};
