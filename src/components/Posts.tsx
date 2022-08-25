import { Query } from '@utils/trpc';
import Link from 'next/link';
import { FC } from 'react';
import { Line } from './Line';

export interface PostsProps {
  posts: Query<'post.get-all'>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <ul className="grid gap-fluid-4 xl:grid-cols-3">
    {posts.map((post) => (
      <li key={post.title}>
        <Link href={`/blog/${post.slug}`} passHref>
          <a
            aria-label={`${post.title}. ${post.description}`}
            className="group h-full relative flex flex-col bg-surface-2 px-6 py-5 rounded-lg shadow-2
                       hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
          >
            <div className="flex gap-2 flex-wrap mb-2">
              {post.tags.map((tag) => (
                <div
                  key={tag}
                  className="bg-accent-2 rounded-full px-2 max-w-max
                             text-[0.9rem] text-[black] tracking-wider"
                >
                  {tag}
                </div>
              ))}
            </div>
            <span className="text-2xl group-hover:text-brand-1 group-focus-visible:text-brand-1">
              {post.title}
            </span>
            <span className="text-base-2 text-lg font-semibold">
              {post.published}
            </span>
            <Line />
            <p className="text-lg leading-8">{post.description}</p>
          </a>
        </Link>
      </li>
    ))}
  </ul>
);
