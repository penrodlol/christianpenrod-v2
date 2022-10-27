'use client';

import { getSortedPosts } from '@utils/contentlayer/posts';
import Link from 'next/link';
import { FC, useMemo } from 'react';
import { Chip } from './Chip';
import { Line } from './Line';

export interface PostsProps {
  limit?: Parameters<typeof getSortedPosts>[0];
}

export const Posts: FC<PostsProps> = ({ limit }) => {
  const posts = useMemo(() => getSortedPosts(limit), [limit]);

  return (
    <ul className="grid gap-fluid-4 lg:grid-cols-3">
      {posts.map((post) => (
        <li key={post.title}>
          <Link
            href={`/blog/${post.slug}`}
            aria-label={`${post.title}. ${post.description}`}
            className="group relative flex h-full flex-col rounded-lg bg-2 px-6 py-5 elevation-8 hover-card"
          >
            <div className="mb-2 flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Chip key={tag}>{tag}</Chip>
              ))}
            </div>
            <span className="text-lg group-hover:text-brand-2 group-focus-visible:text-brand-2">
              {post.title}
            </span>
            <span className="font-semibold text-2 text-base">
              {post.published}
            </span>
            <Line />
            <p className="leading-relaxed text-2 text-sm sm:leading-8">
              {post.description}
            </p>
          </Link>
        </li>
      ))}
    </ul>
  );
};
