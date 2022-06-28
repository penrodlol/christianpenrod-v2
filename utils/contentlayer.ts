import { pick } from 'contentlayer/client';
import { allPosts, Post } from 'contentlayer/generated';
import dayjs from 'dayjs';

export const sortedPosts = [...allPosts].sort((a, b) => {
  const aDate = dayjs(a.published);
  const bDate = dayjs(b.published);

  return aDate.isAfter(bDate) ? -1 : 1;
});

export function getPaginatedPost(post: Post, dir: 'next' | 'prev') {
  const index = sortedPosts.indexOf(post);
  const paginatedIndex = dir === 'prev' ? index + 1 : index - 1;
  const paginatedPost = sortedPosts[paginatedIndex];

  return paginatedPost ? pick(paginatedPost, ['title', 'slug']) : null;
}
