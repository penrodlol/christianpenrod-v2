import { Post } from 'contentlayer/generated';
import dayjs from 'dayjs';
import Link from 'next/link';
import { FC } from 'react';
import { Line } from './Line';

export interface PostsProps {
  posts: Array<Post>;
}

export const Posts: FC<PostsProps> = ({ posts }) => (
  <>
    {posts.map((post) => (
      <Link key={post._id} href={`/blog/${post.slug}`} passHref>
        <a
          className="group relative flex flex-col bg-surface-2 px-6 py-5 rounded-lg shadow-2
                     hover:outline hover:outline-2 hover:outline-surface-1 hover:outline-offset-4"
          aria-label={post.title}
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
            {dayjs.utc(post.published).format('MMM Do, YYYY')}
          </span>
          <Line />
          <p className="text-lg leading-8">{post.description}</p>
        </a>
      </Link>
    ))}
  </>
);
